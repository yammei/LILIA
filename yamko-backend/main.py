from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import torch
import torch.nn.functional as F
from torchvision import transforms
from PIL import Image
import csv
import aiofiles
import os
import requests
from datetime import datetime
from typing import List
from dotenv import load_dotenv
from pydantic import BaseModel
from brain_tumor_classification.cnn.classify import predict_image
from brain_tumor_classification.cnn.cnn_model import CNNModel

# Load environment variables
load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

# ----- Brain Tumor Classifier -----
classes = ['glioma', 'meningioma', 'notumor', 'pituitary']

IMAGE_MAP = {
    1: "brain_tumor_classification/cnn/showcase_images/test_mri_glioma.jpg",
    2: "brain_tumor_classification/cnn/showcase_images/test_mri_meningioma.jpg",
    3: "brain_tumor_classification/cnn/showcase_images/test_mri_notumor.jpg",
    4: "brain_tumor_classification/cnn/showcase_images/test_mri_pituitary.jpg",
}

class ClassificationRequest(BaseModel):
    image_id: int

model = CNNModel()
checkpoint = torch.load('brain_tumor_classification/cnn/cnn_brain_tumor_classification_v1.pth', map_location=torch.device('cpu'))
model.load_state_dict(checkpoint['model_state_dict'])
model.eval()

transform = transforms.Compose([
    transforms.Resize((64, 64)),
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

@app.post("/api/brain_tumor_classification")
async def predict(request: ClassificationRequest):
    if request.image_id not in IMAGE_MAP:
        return {"error": "Invalid image_id. Must be 1, 2, 3, or 4."}

    image_path = IMAGE_MAP[request.image_id]
    prediction, probabilities = predict_image(image_path)

    return {
        "prediction": prediction,
        "class_probabilities": {
            "glioma": round(probabilities[0], 4),
            "meningioma": round(probabilities[1], 4),
            "notumor": round(probabilities[2], 4),
            "pituitary": round(probabilities[3], 4),
        }
    }

# ----- CSV Endpoint (/api/panw) -----
@app.get("/api/panw")
async def get_panw_data():
    file_path1 = "ARIA/logs/ARIMAX_actual_vs_forecast_last_10days_2mo.csv"
    file_path2 = "ARIA/logs/ARIMAX_3day_forecast_2mo.csv"

    def format_date(date_str):
        return date_str.split(" ")[0]

    data1, data2 = [], []

    async with aiofiles.open(file_path1, mode="r") as f:
        async for line in f:
            row = list(csv.reader([line]))[0]
            if len(row) > 1:
                date, closing_val = row[0], row[1]
                if date and closing_val.replace('.', '', 1).isdigit():
                    data1.append([format_date(date), float(closing_val)])

    async with aiofiles.open(file_path2, mode="r") as f:
        async for line in f:
            row = list(csv.reader([line]))[0]
            if len(row) > 1:
                date, predicted_close = row[0], row[1]
                if date and predicted_close.replace('.', '', 1).isdigit():
                    data2.append([format_date(date), float(predicted_close)])

    return data1 + data2

# ----- GitHub Commits Endpoint (/api/commits) -----
repos = ["LILIA", "ARIA", "WHIRL_2", "brain_tumor_classification"]

@app.get("/api/commits")
async def get_commits():
    token = os.getenv("GIT_TOK")
    headers = {"Authorization": f"token {token}"} if token else {}

    results: List[dict] = []
    for repo in repos:
        url = f"https://api.github.com/repos/yammei/{repo}/commits"
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            commits = response.json()[:3]
            for commit in commits:
                results.append({
                    "repoName": repo,
                    "commitDate": datetime.strptime(commit["commit"]["author"]["date"], "%Y-%m-%dT%H:%M:%SZ"),
                    "commitMessage": commit["commit"]["message"]
                })

    sorted_commits = sorted(results, key=lambda x: x["commitDate"], reverse=True)
    return sorted_commits

# ----- Run the server -----
# uvicorn main:app --host 0.0.0.0 --port 3050

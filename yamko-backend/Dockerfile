FROM python:3.9-slim

WORKDIR /app

COPY deployment_requirements.txt .
RUN pip3 install --no-cache-dir -r deployment_requirements.txt

COPY . .

EXPOSE 3050

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3050"]

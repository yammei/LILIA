<h1>mei_os: Dev Site</h1>

<a href='https://evlmei.dev'>https://evlmei.dev</a><br>

# Dev Environment Run Commands

```bash
# next.js @ yamko-templates
sudo npm run dev

# fastapi @ yamko-backend
uvicorn main:app --host 127.0.0.1 --port 3050
```

# Dockerization & GKE Deployment

```bash
docker-compose up --build

gcloud services enable containerregistry.googleapis.com
gcloud services enable artifactregistry.googleapis.com
gcloud auth configure-docker

docker buildx create --use
docker buildx ls
docker buildx use pensive_pascal
docker buildx prune --all
docker buildx inspect --bootstrap

docker buildx build \
  --platform linux/amd64 \
  -t gcr.io/baycarea/yamko-backend:latest \
  ./yamko-backend \
  --push

docker buildx build \
  --platform linux/amd64 \
  -t gcr.io/baycarea/yamko-frontend:latest \
  ./yamko-templates \
  --push

gcloud container clusters get-credentials flask-cluster \
  --zone us-west1-a \
  --project baycarea

kubectl apply -f yamko-deployment/k8s_backend_deployment.yaml
kubectl apply -f yamko-deployment/k8s_frontend_deployment.yaml

# use if there are code updates
kubectl rollout restart deployment yamko-backend
kubectl rollout restart deployment yamko-frontend

gcloud components install kubectl
kubectl version --client
gcloud components install gke-gcloud-auth-plugin

gcloud container images list

kubectl get pods
kubectl get services

kubectl describe service yamko-backend-service
kubectl describe service yamko-frontend-service

gcloud compute firewall-rules list

gcloud compute firewall-rules create k8s-fw-allow-https \
  --network=default \
  --direction=INGRESS \
  --priority=1000 \
  --allow=tcp:443 \
  --target-tags=gke-flask-cluster \
  --description="Allow HTTPS traffic to GKE Ingress"

PROJECT_ID=baycarea
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member "serviceAccount:$PROJECT_ID.svc.id.goog[default/default]" \
  --role "roles/storage.objectViewer"

kubectl set image deployment yamko-backend yamko-backend=gcr.io/baycarea/yamko-backend:latest
kubectl set image deployment yamko-frontend yamko-frontend=gcr.io/baycarea/yamko-frontend:latest

kubectl delete pods -l app=yamko-backend
kubectl delete pods -l app=yamko-frontend

kubectl describe pod -l app=yamko-backend
kubectl describe pod -l app=yamko-frontend

kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.14.4/cert-manager.yaml
kubectl apply -f yamko-deployment/yamko_ingress.yaml

kubectl get ingress yamko-ingress
nslookup evlmei.dev

gcloud compute addresses create yamko-ip \
  --global \
  --ip-version=IPV4

kubectl get pods
kubectl describe svc yamko-frontend-service
kubectl describe svc yamko-backend-service

kubectl apply -f yamko-deployment/yamko_frontend_service.yaml
kubectl apply -f yamko-deployment/yamko_backend_service.yaml
kubectl apply -f yamko-deployment/cluster_issuer.yaml
```
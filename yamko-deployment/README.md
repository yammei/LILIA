Setup

```bash
pip3 install schedule
nohup python3 ~/LILIA/yamko-deployment/update.py > update.log 2>&1 &
```

Frontend Reset

```bash
pkill -f 'node.*yamko-templates'
sudo fuser -k 3000/tcp
cd ~/LILIA/yamko-templates && npm install && npm run build
cd ~/LILIA/yamko-templates && nohup npm run start > ~/LILIA/yamko-templates/app.log 2>&1 &
```

Backend Reset

```bash
pkill -f 'node.*yamko-backend'
sudo fuser -k 3050/tcp
cd ~/LILIA/yamko-backend && npm install
nohup node ~/LILIA/yamko-backend/server.js > ~/LILIA/yamko-backend/server.log 2>&1 &
```
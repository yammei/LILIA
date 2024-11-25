<h1>mei_os: Dev Site</h1>

Accessible @ <a href='https://evlmei.dev'>https://evlmei.dev</a><br>
Site Status: Live<br>
Date Deployed: 11.18.2024 | 04:30<br>
Compute Region: us-west2<br>
Release Version: 1.1 <br>

Tech Stack: Typescript | Python (ARIA + CI/CD) | Next.js | Node.js | Docker | GCP: Compute Engine<br>
Art & UI Tools: [柊山羊@Picrew](https://picrew.me/ja/image_maker/197705) | [TextStudio](https://www.textstudio.com/logo/bubble-style-3d-text-155) | [Figma](https://www.figma.com/design/MeCSc6lsmZkTEV3VXK7PB9/Untitled?node-id=0-1&t=Vd3kHDi6YENZzVjr-1) | [GIMP](https://www.gimp.org/downloads/thanks.html) | [FontAwesome](https://fontawesome.com/) | 


To work on: adjust max compute instances, CI/CD, scale parent container to screen size.

<h2>Most Recent Screenie</h2>

<img src='https://github.com/yammei/yamko/blob/main/progress-images/Screenshot%202024-10-17%20at%2000.34.19.png'/>

<h2>Development Log</h2>

Setting up environment.

```bash
sudo npx create-next-app@latest yamko-templates
cd yamko-templates
sudo chown -R <username> .
```

Running dev build.

```bash
cd yamko-templates
sudo npm run dev
```

Dependency log.

```bash
sudo npm install styled-components
sudo npm install --save-dev @types/styled-components
sudo npm install chart.js react-chartjs-2
sudo npm install @next/font
sudo npm install @next/font google
```

Deployment log.

```bash
gcloud init
gcloud auth login

gcloud projects create yammei --set-as-default
gcloud config set project yammei

sudo npm run build
gcloud app deploy
gcloud app browse

Compute Region: us-west2
Raw URL: https://yammei.wl.r.appspot.com
```

Google App Engine DNS record changes.

```bash
Type  Data                    Alias
A	    216.239.32.21
A	    216.239.34.21
A	    216.239.36.21
A	    216.239.38.21
AAAA	2001:4860:4802:32::15
AAAA	2001:4860:4802:34::15
AAAA	2001:4860:4802:36::15
AAAA	2001:4860:4802:38::15
CNAME	ghs.googlehosted.com    www
```

Frontend Reset

```bash
sudo pkill -f 'node.*yamko-templates'
sudo fuser -k 3000/tcp
cd ~/LILIA/yamko-templates && sudo npm install && sudo npm run build
cd ~/LILIA/yamko-templates && sudo nohup npm run start > ~/LILIA/yamko-templates/app.log 2>&1 &
```

Backend Reset

```bash
sudo pkill -f 'node.*yamko-backend'
sudo fuser -k 3050/tcp
cd ~/LILIA/yamko-backend && sudo npm install
sudo nohup node ~/LILIA/yamko-backend/server.js > ~/LILIA/yamko-backend/server.log 2>&1 &
```
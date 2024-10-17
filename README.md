<h1>YAMMEI: Personal Site</h1>

Status: Live
Date Deployed: 10.17.2024 | 00:30


<img src='https://github.com/yammei/yamko/blob/main/Screenshot%202024-10-14%20at%2014.18.36.png'/>

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

Raw URL: https://yammei.wl.r.appspot.com
```

Google App Engine DNS record changes.

```bash


Type    Data                    Alias
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
<h1>YAMMEI: Dev Site</h1>

Accessible @ <a href='https://evlmei.dev'>https://evlmei.dev</a><br>
Site Status: Live<br>
Date Deployed: 10.17.2024 | 00:30<br>
Release Notes: Beta Release<br>
Tech Stack: Typescript | Next.js | Node.js | Docker | GCP: App Engine<br>
Art & UI Tools:  [柊山羊@Picrew](https://picrew.me/ja/image_maker/197705)  | [TextStudio](https://www.textstudio.com/logo/bubble-style-3d-text-155) | [Figma](https://www.figma.com/design/MeCSc6lsmZkTEV3VXK7PB9/Untitled?node-id=0-1&t=Vd3kHDi6YENZzVjr-1) | [GIMP](https://www.gimp.org/downloads/thanks.html) | [FontAwesome](https://fontawesome.com/)

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

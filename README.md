# cyber-romulus.com

Personal developer landing page built with **Next.js 15** + **TypeScript**.

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Customize

All content lives in one file — **`data/content.ts`**:
- Update `profile` with your bio
- Add your real GitHub/LinkedIn/Telegram URLs in `socials`
- Edit `experience` and `projects` as needed
- Drop your CV PDF into `public/cv.pdf`

---

## Deploy to GCP

### Option A — Firebase Hosting (simplest, free tier)

```bash
# 1. Build static export
# In next.config.ts, output: "export" is already set

npm run build
# Output goes to /out

# 2. Install Firebase CLI
npm install -g firebase-tools
firebase login
firebase init hosting
# → Public dir: out
# → Single-page app: No
# → Rewrite all urls: No

firebase deploy
```

### Option B — Cloud Run (containerized, scales to zero)

```bash
# 1. Build and push image
gcloud auth login
gcloud config set project YOUR_PROJECT_ID

docker build -t gcr.io/YOUR_PROJECT_ID/cyber-romulus .
docker push gcr.io/YOUR_PROJECT_ID/cyber-romulus

# 2. Deploy
gcloud run deploy cyber-romulus \
  --image gcr.io/YOUR_PROJECT_ID/cyber-romulus \
  --platform managed \
  --region europe-central2 \
  --allow-unauthenticated \
  --port 8080

# 3. Map your custom domain in GCP Console:
# Cloud Run → cyber-romulus → Custom Domains → cyber-romulus.com
```

> For Cloud Run, change `output: "export"` back to default (remove the line)
> and add `output: "standalone"` instead so Next.js runs as a Node server.

### Option C — Cloud Storage (pure static, cheapest)

```bash
npm run build
# Creates /out directory

gsutil mb gs://cyber-romulus.com
gsutil web set -m index.html -e 404.html gs://cyber-romulus.com
gsutil -m cp -r out/* gs://cyber-romulus.com
gsutil iam ch allUsers:objectViewer gs://cyber-romulus.com
```

Then set up a GCP Load Balancer with Cloud CDN pointing to the bucket and map your domain.

---

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables (no Tailwind)
- **Fonts**: Orbitron, Share Tech Mono, Rajdhani (Google Fonts)
- **Deploy target**: GCP (Firebase Hosting / Cloud Run / Cloud Storage)

# How to Update Your CV

The CV is hosted on Google Cloud Storage and is independent of the app deployment.
To update it, just upload a new file — no code changes or redeployment needed.

## Upload via CLI

```powershell
gcloud storage cp "C:\path\to\CV_Vladyslav_Shevchenko.pdf" gs://cyber-romulus-assets/CV_Vladyslav_Shevchenko.pdf
```

The file is immediately live at:
`https://storage.googleapis.com/cyber-romulus-assets/CV_Vladyslav_Shevchenko.pdf`

## Upload via Google Cloud Console

1. Go to https://console.cloud.google.com/storage/browser/cyber-romulus-assets
2. Click **Upload files**
3. Select your new PDF
4. Rename it to `CV_Vladyslav_Shevchenko.pdf` if prompted
5. Done — the link on the site updates instantly

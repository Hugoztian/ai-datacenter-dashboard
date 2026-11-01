# ai-datacenter-dashboard
Static GitHub Pages site (index.html + data.js + vendored Chart.js, .nojekyll). Edit figures in data.js — every number references a key in `sources` (title, url, date).
Publish (only after Hugo's explicit OK): create repo Hugoztian/ai-datacenter-dashboard, push main, enable Pages from main / root.
Preview locally: `python3 -m http.server 8080` in this folder → http://localhost:8080/ (file:// also works).

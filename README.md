# ai-datacenter-dashboard

Static GitHub Pages site: `index.html`, `data.js`, `sites.json` / `sites.js`, vendored Chart.js, and a self-contained map outline. Edit figures in `data.js` — every number references a key in `sources` (title, url, date). Site pins live in `sites.json` (loaded via `sites.js` so `file://` still works).

The header has six sections: Overview, What’s new, TAM, CapEx, Companies, and Sources. Overview is the model, then the selected-site map, then Coming up. What’s new is its own section.

Preview locally: `python3 -m http.server 8080` in this folder → http://localhost:8080/. `node --test` runs the dashboard checks.

Publication: see [PUBLICATION.md](PUBLICATION.md). A cloud agent opens a pull request; a parent merges after checks; GitHub Pages serves the default branch. There is no MU dependency.

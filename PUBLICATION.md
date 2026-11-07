# Publication workflow

This site is a static GitHub Pages dashboard. Publishing has no MU dependency and does not depend on Micron or any other bot.

Hugo confirmed retry and publication at 12:29 SGT on 7 Nov 2026 (“i confirm. go ahead to publish”) after repository access was restored. That confirmation is what authorizes this change to be proposed. It does not authorize the agent to merge.

## Steps

1. A cloud agent opens a normal pull request from a `cursor/` branch. The agent does not merge.
2. Automated checks run on the pull request (`node --test`).
3. A parent with merge rights performs the sanctioned merge into the default branch after those checks.
4. GitHub Pages publishes the default branch root. This change does not alter Pages settings, secrets, account access, or shared feed endpoints.
5. After the merge, open the live Pages URL and confirm the six tabs, the model, and the map render.

The files `window.whatsNewThisWeek` and `window.comingUp` stay assigned from `data.js` for master-dashboard aggregation. Do not point them at another service from this repository.

## What this release checked

Dashboard news and Coming up were checked on 7 Nov 2026 at 12:39 PM SGT. The map sample was prepared at 12:04:18 SGT the same day, with a follow-up refetch recorded on the Narvik notice, the NSW S7 portal, the 4 Nov Visakhapatnam court report, and a Reuters retry that again returned 401. Source dates and that check time are labeled separately in the interface.

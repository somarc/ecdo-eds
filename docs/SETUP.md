# ECDO EDS — setup checklist

**Repo:** [somarc/ecdo-eds](https://github.com/somarc/ecdo-eds)  
**Local:** `/Users/mhess/marc_projects/ecdo-eds`  
**Org / repo:** `somarc` / `ecdo-eds`

## Automated (done or in progress)

- [x] GitHub repo from `adobe/aem-boilerplate`
- [x] Clone to `marc_projects/ecdo-eds`
- [x] `fstab.yaml` → `content.da.live/somarc/ecdo-eds/`
- [x] `.da.json` config
- [x] Design contract + page HTML under `da-content/`
- [x] Dark “abyssal instrument” styles
- [ ] DA content uploaded (needs auth)
- [ ] Preview green (needs AEM Code Sync + DA content)

## Human steps (required)

### 1. AEM Code Sync GitHub App

1. Open: https://github.com/apps/aem-code-sync/installations/new  
2. **Only select repositories** → choose **somarc/ecdo-eds**  
3. Save  

**Verify:**

```bash
curl -s "https://admin.hlx.page/status/somarc/ecdo-eds/main/" | head -c 400
```

Expect JSON (not 404).

### 2. DA authentication

```bash
cd /Users/mhess/marc_projects/ecdo-eds
da auth login          # browser Adobe IMS
da auth status         # must show valid
```

### 3. Push codebus (after local commits)

```bash
cd /Users/mhess/marc_projects/ecdo-eds
git add -A && git status
git commit -m "feat: ECDO hypothesis lab scaffold"
git push origin main
```

AEM Code Sync picks up code from GitHub. Content comes from DA.

### 4. Seed DA content (after auth)

```bash
cd /Users/mhess/marc_projects/ecdo-eds

# Dry-run first, then --commit
da --commit content put /nav.html da-content/nav.html
da --commit content put /footer.html da-content/footer.html
da --commit content put /index.html da-content/index.html
da --commit content put /states.html da-content/states.html
da --commit content put /signals.html da-content/signals.html
da --commit content put /evidence.html da-content/evidence.html
da --commit content put /instrument.html da-content/instrument.html
da --commit content put /sources.html da-content/sources.html

da preview page /nav
da preview page /footer
da preview page /
da preview page /states
da preview page /signals
da preview page /evidence
da preview page /instrument
da preview page /sources

da site info
```

### 5. Optional: publish to live

Only after preview looks right:

```bash
da publish page /
# …repeat for each path
```

## URLs (after preview works)

| Surface | URL |
|---------|-----|
| Preview home | https://main--ecdo-eds--somarc.aem.page/ |
| Live home | https://main--ecdo-eds--somarc.aem.live/ |
| DA browse | https://da.live/#/somarc/ecdo-eds/ |
| DA edit home | https://da.live/edit#/somarc/ecdo-eds/index |
| GitHub | https://github.com/somarc/ecdo-eds |

## Local dev

```bash
cd /Users/mhess/marc_projects/ecdo-eds
npm install
npx aem up
# or: aem up
```

## Sister projects

- **Wobblescope (instrument):** `../ecdo`
- **Theory capture (this site):** `ecdo-eds`

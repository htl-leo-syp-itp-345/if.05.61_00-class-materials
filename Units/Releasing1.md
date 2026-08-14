# Releasing I –

Mit der Kernfrage:
Which exact version should be deployed to production?

Dann:

```text
commit
tag
GitHub Release
```

und:

```text
push main
→ staging

publish release
→ production
```

Das ist schon genug Stoff.
Die unterschiedlichen Base URLs kommen danach als Problem innerhalb derselben Unit oder als Exercise:

```text
Development → /development/
Staging     → /staging/
Production  → /
```

Dann entsteht:

```text
DEPLOY_TARGET
astro.config.mjs
BASE_URL
```

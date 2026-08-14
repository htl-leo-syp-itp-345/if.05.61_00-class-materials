# Deployment II: Separating Source and Production

Problem:
Our repository contains source code.
But a web server only needs the build artifact.
Neue Architektur:

```
source repository

        build

           ↓

production repository
```

Jetzt kommen automatisch neue Fragen:

How can one repository write to another repository?

Und erst dann:

- SSH
- public/private keys
- Deploy Keys
- repository permissions

# Publishing a Website - From `github.io` to the Real Internet

Bis jetzt haben wir: `https://some-org.github.io/production/`
Aber der Kunde will: `https://example.com`

Und plötzlich öffnet sich ein völlig neuer Layer:

```text
Browser
  ↓
DNS
  ↓
GitHub Pages
  ↓
HTTP
```

Dann:

```text
A
AAAA
CNAME
```

und anschließend:

```text
HTTP
↓
TLS
↓
HTTPS
```

Am Ende Debugging:

```text
dig
openssl
curl
browser
```

Und genau dein schönes Prinzip:

DNS → TLS → HTTP → Browser

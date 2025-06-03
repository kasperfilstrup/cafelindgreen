# Custom Domain Setup Guide

When you're ready to use `cafelindgreen.dk`, follow these steps:

## 1. Update Jekyll Configuration

In `_config.yml`, replace the current settings:

```yaml
# FROM:
baseurl: "/cafelindgreen"
url: "https://kasperfilstrup.github.io"

# TO:
baseurl: ""
url: "https://cafelindgreen.dk"
enforce_ssl: cafelindgreen.dk
```

## 2. Create CNAME File

Create a `CNAME` file in the root directory:

```bash
echo "cafelindgreen.dk" > CNAME
```

## 3. Configure DNS Records

With your domain provider, set up:

### A Records (for root domain):
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### CNAME Record (for www subdomain):
```
Type: CNAME
Name: www
Value: kasperfilstrup.github.io
```

## 4. Deploy Changes

1. Push changes to GitHub
2. Wait for DNS propagation (up to 48 hours)
3. Enable "Enforce HTTPS" in GitHub Pages settings

## 5. Test

- Site should be accessible at `https://cafelindgreen.dk`
- All prefetch URLs will use HTTPS correctly
- Performance optimizations remain active

---

**Current Status**: Configured for GitHub Pages development at `https://kasperfilstrup.github.io/cafelindgreen`

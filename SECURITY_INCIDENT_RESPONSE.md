# 🚨 SECURITY INCIDENT RESPONSE - Exposed Supabase Service Key

## Incident Summary
A Supabase Service Role JWT token was accidentally committed to git history in the file `check-database-state.js`.

**Exposed Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcWdzaHlyeHRocndjaHpjZWxnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTI3NTE5NiwiZXhwIjoyMDY2ODUxMTk2fQ.C2-IYKW4iYGhHfCu6qOLlS4VFHJdyFCR7Xqd7EJosSY`

## IMMEDIATE ACTIONS REQUIRED

### 1. Revoke the Exposed Key ⚠️ **DO THIS FIRST**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `lqqgshyrxthrwchzcelg`
3. Navigate to **Settings → API**
4. Under "Service role" section:
   - Click **"Regenerate"** to create a new key
   - **Copy the new key** and store it securely
   - The old key will be automatically revoked

### 2. Update Environment Variables
After regenerating the key, update it in your deployment environments:

**Netlify:**
1. Go to Netlify Dashboard
2. Site Settings → Environment Variables
3. Update `SUPABASE_SERVICE_KEY` with the new value

**Local Development:**
1. Update your `.env` file with the new key
2. Restart your development server

### 3. Update Any Server-Side Code
Check these files and update if they use the service key:
- `netlify/functions/mcp-secure.js`
- `src/middleware/security-middleware.ts`
- Any other server-side functions

### 4. Clean Git History (Optional but Recommended)
Since the key is in git history, consider:

**Option A: BFG Repo Cleaner (Recommended)**
```bash
# Install BFG
# Download from: https://rtyley.github.io/bfg-repo-cleaner/

# Clean the repo
java -jar bfg.jar --delete-files check-database-state.js
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

**Option B: Create a New Repository**
If the history cleanup is complex, consider starting fresh:
1. Create a new repository
2. Copy only the current codebase (without .git folder)
3. Initialize new git history
4. Update all remote URLs

### 5. Security Audit
Run these checks:

**Check for other exposed secrets:**
```bash
# Search for any hardcoded tokens
grep -r "eyJ" . --exclude-dir=node_modules --exclude-dir=.git
grep -r "sk_" . --exclude-dir=node_modules --exclude-dir=.git
grep -r "pk_" . --exclude-dir=node_modules --exclude-dir=.git
```

**Review access logs:**
1. Check Supabase dashboard for unusual access patterns
2. Review any recent database changes
3. Monitor for suspicious activity

## Prevention Measures

### 1. Environment Variables Only
Never hardcode secrets in source code. Always use:
```javascript
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
```

### 2. Git Hooks
Add a pre-commit hook to prevent secret commits:
```bash
# .git/hooks/pre-commit
#!/bin/sh
if git diff --cached --name-only | xargs grep -l "eyJ.*\..*\."; then
    echo "❌ Potential JWT token found in staged files!"
    exit 1
fi
```

### 3. GitGuardian Integration
- ✅ Already set up and working (detected this incident)
- Configure alerts for immediate notification

### 4. Regular Security Audits
- Weekly: Scan for hardcoded secrets
- Monthly: Review access logs and permissions
- Quarterly: Full security assessment

## Post-Incident Steps

### ✅ Completed
- [x] File containing secret removed from codebase
- [x] GitGuardian alert acknowledged
- [x] Security incident documented

### 🔄 In Progress
- [ ] Service key revoked and regenerated
- [ ] Environment variables updated
- [ ] Git history cleaned (optional)

### 📋 To Do
- [ ] All deployment environments updated
- [ ] Team notified of new security practices
- [ ] Pre-commit hooks implemented
- [ ] Security audit completed

## Timeline
- **Incident Detected:** GitGuardian alert received
- **File Removed:** Commit 6248077 (Clean up temporary development files)
- **Documentation Created:** Current timestamp
- **Key Revocation:** Pending user action

## Contact Information
If you need help with any of these steps, refer to:
- [Supabase Security Best Practices](https://supabase.com/docs/guides/platform/going-into-prod#security-considerations)
- [GitGuardian Documentation](https://docs.gitguardian.com/)

---
**Remember: Security is paramount. Take immediate action to revoke the exposed key!**
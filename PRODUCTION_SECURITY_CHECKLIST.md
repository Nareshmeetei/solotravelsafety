# 🔒 Production Security Checklist - Solo Travel Safety

## ✅ Pre-Deployment Security Verification

**Use this checklist to verify security compliance before any production deployment.**

---

## 🚨 **CRITICAL** - Must Fix Before Production

### Authentication & Authorization
- [ ] **All API endpoints require authentication** 
  - Test: Try accessing APIs without auth token → Should return 401
  - Files: `netlify/functions/*.js`, `src/lib/supabase.ts`

- [ ] **Row Level Security (RLS) enabled on ALL tables**
  - Test: Query tables without auth → Should return empty/error
  - Check: `supabase/migrations/*.sql` files

- [ ] **User can only access their own data**
  - Test: Try accessing another user's profile/reviews → Should be denied
  - Policy: User-specific WHERE clauses in all RLS policies

- [ ] **No privilege escalation possible**
  - Test: Try changing user roles/permissions → Should fail
  - Check: Admin role separation implemented

### Data Protection
- [ ] **Input validation on all endpoints**
  - Test: Send malicious payloads (XSS, SQL) → Should be sanitized
  - Files: `src/lib/supabase-secure.ts`, validation functions

- [ ] **File upload security**
  - Test: Upload non-image files → Should be rejected
  - Test: Upload files > size limit → Should be rejected
  - Check: File type validation, size limits, user-specific folders

- [ ] **No sensitive data exposure**
  - Test: Check API responses for internal IDs, tokens, emails
  - Check: Error messages don't leak sensitive info

### Infrastructure Security
- [ ] **Environment variables secured**
  - Check: No VITE_ variables contain sensitive data
  - Check: API keys not in client-side code
  - Test: Inspect browser dev tools → No secrets visible

- [ ] **CORS properly configured**
  - Test: Requests from unauthorized domains → Should be blocked
  - Check: No wildcard (*) CORS in production

- [ ] **Rate limiting implemented**
  - Test: Rapid-fire requests → Should hit rate limits
  - Check: Different limits for different endpoints

---

## 🔥 **HIGH PRIORITY** - Fix Within 48 Hours

### Session Management
- [ ] **Secure session handling**
  - Test: Sessions expire appropriately
  - Test: Session fixation attacks prevented

- [ ] **Proper logout implementation**
  - Test: All sessions cleared on logout
  - Test: Tokens invalidated server-side

### API Security
- [ ] **Request/Response validation**
  - Test: Malformed JSON requests → Proper error handling
  - Test: Invalid content types → Proper rejection

- [ ] **Error handling secure**
  - Check: No stack traces in production errors
  - Check: Generic error messages for security failures

### Storage Security
- [ ] **File access controls**
  - Test: Access other users' uploaded files → Should be denied
  - Check: Signed URLs for private content

---

## 🟡 **MEDIUM PRIORITY** - Fix Within 1 Week

### Monitoring & Logging
- [ ] **Security event logging**
  - Check: Failed logins, suspicious activity logged
  - Test: Audit trail for sensitive operations

- [ ] **Performance monitoring**
  - Check: Response times monitored
  - Check: Error rates tracked

### Privacy & Compliance
- [ ] **Data retention policies**
  - Check: Old data automatically cleaned up
  - Check: User data deletion workflows

- [ ] **Privacy controls**
  - Check: Users can control data visibility
  - Check: Consent management implemented

---

## 🛠️ **Security Testing Commands**

### 1. Authentication Tests
```bash
# Test unauthenticated access
curl -X POST https://your-api.netlify.app/.netlify/functions/mcp \
  -H "Content-Type: application/json" \
  -d '{"tool": "get_user_profile", "arguments": {"user_id": "any-id"}}'
# Expected: 401 Unauthorized

# Test with invalid token
curl -X POST https://your-api.netlify.app/.netlify/functions/mcp \
  -H "Authorization: Bearer invalid-token" \
  -H "Content-Type: application/json" \
  -d '{"tool": "get_user_profile", "arguments": {"user_id": "any-id"}}'
# Expected: 401 Unauthorized
```

### 2. Input Validation Tests
```bash
# Test XSS injection
curl -X POST https://your-api.netlify.app/.netlify/functions/mcp \
  -H "Authorization: Bearer YOUR-VALID-TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tool": "search_destinations", "arguments": {"query": "<script>alert(1)</script>"}}'
# Expected: Sanitized response, no script execution

# Test SQL injection
curl -X POST https://your-api.netlify.app/.netlify/functions/mcp \
  -H "Authorization: Bearer YOUR-VALID-TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tool": "search_destinations", "arguments": {"query": "'; DROP TABLE users; --"}}'
# Expected: Treated as literal string, no SQL execution
```

### 3. Rate Limiting Tests
```bash
# Test rate limiting
for i in {1..100}; do
  curl -X POST https://your-api.netlify.app/.netlify/functions/mcp \
    -H "Authorization: Bearer YOUR-VALID-TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"tool": "get_recent_reviews", "arguments": {"limit": 10}}'
done
# Expected: 429 Rate Limit Exceeded after configured limit
```

### 4. CORS Tests
```bash
# Test CORS from unauthorized domain
curl -X POST https://your-api.netlify.app/.netlify/functions/mcp \
  -H "Origin: https://malicious-site.com" \
  -H "Authorization: Bearer YOUR-VALID-TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tool": "get_recent_reviews", "arguments": {"limit": 10}}'
# Expected: CORS error or blocked
```

---

## 🔍 **Database Security Verification**

### 1. RLS Policy Tests
```sql
-- Test as unauthorized user
SELECT * FROM profiles WHERE id != 'current-user-id';
-- Expected: Empty result set

-- Test newsletter access
SELECT * FROM newsletter_signups;
-- Expected: Only own records or empty if not admin

-- Test review modification
UPDATE reviews SET review_text = 'hacked' WHERE user_id != 'current-user-id';
-- Expected: Permission denied
```

### 2. Storage Security Tests
```bash
# Test direct file access
curl https://your-supabase.co/storage/v1/object/public/avatars/other-user-id/avatar.jpg
# Expected: Access denied or 404

# Test file upload to other user's folder
curl -X POST https://your-supabase.co/storage/v1/object/avatars/other-user-id/malicious.jpg \
  -H "Authorization: Bearer YOUR-TOKEN" \
  --data-binary @test-file.jpg
# Expected: Permission denied
```

---

## 📊 **Security Monitoring Dashboard**

### Key Metrics to Monitor
- [ ] **Failed authentication attempts**
  - Alert: >10 failures per IP per hour
  
- [ ] **Rate limit violations**
  - Alert: >50 violations per IP per hour
  
- [ ] **Unusual API usage patterns**
  - Alert: >1000 requests per user per hour
  
- [ ] **File upload anomalies**
  - Alert: >10 large files per user per day
  
- [ ] **Database error rates**
  - Alert: >5% error rate for any table

### Automated Security Checks
```bash
# Run security scan
npm run security:audit

# Check for secrets in code
npm run security:secrets

# Validate database policies
npm run security:database

# Test authentication flows
npm run security:auth-test
```

---

## 🚨 **Emergency Response Plan**

### If Security Breach Detected:

1. **IMMEDIATE (0-5 minutes)**
   - [ ] Disable affected API endpoints
   - [ ] Revoke compromised tokens
   - [ ] Block malicious IPs

2. **SHORT TERM (5-30 minutes)**
   - [ ] Assess scope of breach
   - [ ] Notify stakeholders
   - [ ] Enable additional monitoring

3. **MEDIUM TERM (30 minutes - 2 hours)**
   - [ ] Patch vulnerability
   - [ ] Update security policies
   - [ ] Force password resets if needed

4. **LONG TERM (2+ hours)**
   - [ ] Conduct security review
   - [ ] Update security documentation
   - [ ] Implement additional safeguards

---

## ✅ **Sign-off Checklist**

### Development Team
- [ ] **Lead Developer**: All critical security items implemented
- [ ] **Backend Developer**: Database security verified
- [ ] **Frontend Developer**: Client-side security validated

### Security Review
- [ ] **Security Audit**: Passed external security review
- [ ] **Penetration Testing**: No critical vulnerabilities found
- [ ] **Code Review**: Security-focused code review completed

### Compliance
- [ ] **GDPR Compliance**: Data protection requirements met
- [ ] **Privacy Policy**: Updated and accurate
- [ ] **Terms of Service**: Security clauses included

---

## 🔄 **Post-Deployment Monitoring**

### Daily Checks
- [ ] Review security logs
- [ ] Check error rates
- [ ] Monitor unusual traffic

### Weekly Checks
- [ ] Update security dependencies
- [ ] Review access logs
- [ ] Test backup/recovery

### Monthly Checks
- [ ] Security audit review
- [ ] Update security policies
- [ ] Staff security training

---

**⚠️ IMPORTANT**: This application should NOT be deployed to production until ALL critical and high-priority items are complete and verified.

**🔐 Security Contact**: Keep this checklist updated and review after any major changes. 
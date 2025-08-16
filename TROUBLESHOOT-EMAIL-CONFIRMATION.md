# 🔧 Troubleshoot Email Confirmation Issues

## Quick Debug Steps

1. **Visit the debug page**: Go to `http://localhost:5173/auth-debug`
2. **Check if `isDevelopmentMode` is `false`** (it should be false with real credentials)
3. **Test signup** with your real email address
4. **Check the debug info** for any errors

## Common Issues and Solutions

### 1. ❌ Not Receiving Emails

**Possible Causes:**
- Supabase email settings not configured
- Email rate limiting
- Wrong redirect URL
- Email provider blocking

**Solutions:**
1. **Check Supabase Dashboard → Authentication → Settings:**
   ```
   Site URL: http://localhost:5173
   Redirect URLs: http://localhost:5173/auth/callback
   ```

2. **Check Email Templates:**
   - Go to Authentication → Email Templates
   - Make sure "Confirm signup" is enabled
   - Check if subject/body looks correct

3. **Check Rate Limits:**
   - Supabase free tier: 4 emails per hour
   - Wait an hour and try again

### 2. ❌ "Email confirmation link expired or invalid"

**Possible Causes:**
- Wrong redirect URL in Supabase
- Session handling issues
- URL fragments not processed correctly

**Solutions:**
1. **Check Supabase Settings:**
   ```bash
   Site URL: http://localhost:5173
   Redirect URLs: 
   - http://localhost:5173/auth/callback
   - http://localhost:5173/**
   ```

2. **Test the confirmation URL directly:**
   - When you get the email, copy the confirmation link
   - Check if it contains the right redirect URL
   - Should look like: `https://yourproject.supabase.co/auth/v1/verify?token=...&type=signup&redirect_to=http://localhost:5173/auth/callback`

### 3. ❌ "Failed to fetch" errors

**Possible Causes:**
- Wrong Supabase URL/key
- CORS issues
- Network connectivity

**Solutions:**
1. **Verify credentials in `.env`:**
   ```env
   VITE_SUPABASE_URL=https://yourproject.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

2. **Test connection:**
   - Go to `http://localhost:5173/auth-debug`
   - Check `supabaseConnected` should be `true`

### 4. ❌ Email received but confirmation fails

**Possible Causes:**
- Callback page not handling URL fragments
- Session not being established
- RLS policies blocking user creation

**Solutions:**
1. **Check browser console** when clicking confirmation link
2. **Test database permissions:**
   ```sql
   -- Run in Supabase SQL Editor
   SELECT * FROM auth.users LIMIT 1;
   ```

## Step-by-Step Verification

### Step 1: Verify Environment
```bash
# Check if using real Supabase credentials
node -e "console.log('URL:', process.env.VITE_SUPABASE_URL); console.log('Key starts with:', process.env.VITE_SUPABASE_ANON_KEY?.substring(0, 20));"
```

### Step 2: Test Database Connection
1. Go to `http://localhost:5173/auth-debug`
2. Check debug info shows:
   - `isDevelopmentMode: false`
   - `supabaseConnected: true`
   - `error: null`

### Step 3: Test Signup Process
1. Use debug page to test signup
2. Check your email (including spam)
3. Copy confirmation link and examine it
4. Click confirmation link
5. Check callback page for errors

### Step 4: Check Supabase Dashboard
1. **Authentication → Users:** Should show your test user
2. **Authentication → Logs:** Check for errors
3. **Settings → API:** Verify URL/keys match your `.env`

## Manual Email Confirmation Test

If automatic confirmation isn't working, try this manual test:

1. **Create user in Supabase Dashboard:**
   - Go to Authentication → Users
   - Click "Add user"
   - Enter email/password
   - Check "Auto Confirm User"

2. **Test login:**
   - Go to your app
   - Try to sign in with the manually created user
   - Should work without email confirmation

## Advanced Debugging

### Enable Supabase Debug Logs
Add to your `.env`:
```env
VITE_SUPABASE_DEBUG=true
```

### Check Network Requests
1. Open browser DevTools → Network
2. Try signup
3. Check for:
   - POST to `/auth/v1/signup` (should be 200)
   - Any failed requests
   - Response data

### Check Email Confirmation URL Format
The confirmation email should contain a URL like:
```
https://yourproject.supabase.co/auth/v1/verify?token=abc123&type=signup&redirect_to=http://localhost:5173/auth/callback
```

If the `redirect_to` parameter is wrong, fix it in Supabase settings.

## Production Checklist

When deploying to production:
- [ ] Update Site URL to your domain
- [ ] Update Redirect URLs to your domain  
- [ ] Configure custom SMTP (recommended)
- [ ] Test confirmation flow on production
- [ ] Set up proper error monitoring

## Need More Help?

1. **Check debug page:** `http://localhost:5173/auth-debug`
2. **Check browser console** for errors
3. **Check Supabase logs** in dashboard
4. **Copy the exact error message** and confirm what step fails

The most common issue is incorrect redirect URLs in Supabase settings! 🎯
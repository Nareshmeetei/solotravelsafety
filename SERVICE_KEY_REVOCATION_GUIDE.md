# 🔑 Service Key Revocation Guide - Step by Step

## ✅ **GOOD NEWS: Your Auth Will Work Fine!**

Your regular user authentication (sign-up, sign-in, profile management) uses the **anon key**, which is completely separate and safe. Only your server-side functions will be affected temporarily.

---

## 🎯 **What Uses the Service Key (Will Need Updates)**

1. **Netlify Functions:** `netlify/functions/mcp-secure.js`
2. **Security Middleware:** `src/middleware/security-middleware.ts` 
3. **GitHub Actions:** Weekly data updates (if running)

## 🛡️ **What WON'T Be Affected (Uses Anon Key)**

✅ **User Authentication** - Sign up, sign in, password reset  
✅ **Profile Management** - User profiles, avatars, settings  
✅ **Reviews & Comments** - All user-generated content  
✅ **Main Website** - All frontend functionality  
✅ **Database Access** - All user-level operations  

---

## 📋 **Step-by-Step Revocation Process**

### **Step 1: Generate New Service Key**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `lqqgshyrxthrwchzcelg`
3. Navigate to **Settings** → **API**
4. Scroll down to **Service role** section
5. Click **"👁️ Reveal"** to see current key (don't copy this - it's compromised!)
6. Click **"🔄 Generate new key"**
7. **Copy the NEW key** immediately (you won't see it again!)

### **Step 2: Update Netlify Environment**
1. Go to [Netlify Dashboard](https://netlify.com)
2. Select your Solo Travel Safety site
3. Go to **Site settings** → **Environment variables**
4. Find `SUPABASE_SERVICE_KEY`
5. Click **"Edit"** and paste the NEW key
6. Click **"Save"**

### **Step 3: Update GitHub Secrets (If Using)**
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Find `SUPABASE_SERVICE_KEY`
4. Click **"Update"** and paste the NEW key
5. Click **"Update secret"**

### **Step 4: Verify Everything Works**
1. The old key is automatically revoked when you generate a new one
2. Your Netlify functions will start using the new key automatically
3. Test your site to ensure everything works

---

## ⏱️ **Downtime Expectations**

- **User Authentication:** ✅ **NO DOWNTIME** (uses anon key)
- **Main Website:** ✅ **NO DOWNTIME** (uses anon key)
- **Server Functions:** ⚠️ **2-3 minutes** (while you update Netlify)
- **GitHub Actions:** ⚠️ **Until next run** (if you use automated workflows)

---

## 🔍 **How to Test After Revocation**

### **Quick Tests:**
1. **Sign in/Sign up** - Should work immediately (uses anon key)
2. **View destination pages** - Should work immediately
3. **Post reviews/comments** - Should work immediately

### **Server Function Tests:**
1. Visit any page that uses MCP functions
2. Check Netlify function logs for errors
3. No errors = successful revocation!

---

## 🚨 **If Something Goes Wrong**

### **Symptom:** "Missing Supabase environment variables" error
**Solution:** Double-check you updated `SUPABASE_SERVICE_KEY` in Netlify

### **Symptom:** Functions still failing after update
**Solution:** 
1. Verify you copied the complete new key
2. Check for extra spaces in the environment variable
3. Redeploy your site in Netlify

### **Symptom:** Authentication not working
**This shouldn't happen** - auth uses anon key, but if it does:
1. Check `VITE_SUPABASE_ANON_KEY` is still correct
2. Verify `VITE_SUPABASE_URL` is still set

---

## 📞 **Need Help?**

If you run into issues:
1. Check Netlify function logs first
2. Verify all environment variables are set correctly
3. The anon key should remain unchanged
4. Only the service key needs updating

---

## ✅ **Final Checklist**

- [ ] Generated new service key in Supabase
- [ ] Updated `SUPABASE_SERVICE_KEY` in Netlify
- [ ] Updated GitHub secrets (if applicable)
- [ ] Tested website functionality
- [ ] Verified no errors in Netlify logs

**Time Required:** 5-10 minutes  
**Risk Level:** Very Low (main features unaffected)  
**Rollback:** Not needed (new key is immediately better than compromised key)

---

**Remember:** The old compromised key is automatically disabled when you generate the new one, so there's no window of vulnerability!
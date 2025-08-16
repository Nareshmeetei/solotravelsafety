# 📧 Enable Email Authentication - Complete Setup Guide

## Current Status
Your site is working in **development mode** - signup is simulated. To enable real email confirmation, follow these steps:

## Step 1: Create Supabase Project

1. **Go to [supabase.com](https://supabase.com)** and sign up/sign in
2. **Click "New project"**
3. **Fill in project details:**
   - Organization: Choose existing or create new
   - Name: `Solo Travel Safety`
   - Database Password: Create a strong password (SAVE THIS!)
   - Region: Choose closest to your users
4. **Click "Create new project"** (takes ~2 minutes)

## Step 2: Get Your Credentials

1. **In Supabase Dashboard → Settings → API**
2. **Copy these values:**
   ```
   Project URL: https://[your-project-id].supabase.co
   anon public key: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
   ```

## Step 3: Update Your .env File

Replace the placeholder values in your `.env` file:

```env
VITE_SUPABASE_URL=https://your-actual-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

## Step 4: Set Up Database Schema

1. **Go to Supabase Dashboard → SQL Editor**
2. **Click "New query"**
3. **Copy and paste the entire contents of `supabase-setup.sql`**
4. **Click "Run"** to create all tables and policies

## Step 5: Configure Email Settings

1. **Go to Supabase Dashboard → Authentication → Settings**
2. **Configure Site URL:**
   ```
   Site URL: http://localhost:5173
   ```
3. **Add Redirect URLs:**
   ```
   http://localhost:5173/auth/callback
   ```
4. **Email Templates → Confirm signup:**
   - Subject: `Confirm your Solo Travel Safety account`
   - Body: You can customize this or use the default

## Step 6: Configure Email Provider (Choose One)

### Option A: Use Supabase Built-in Email (Easiest - Limited)
- **Already configured!** 
- **Limitation:** 4 emails per hour for free tier
- **Good for:** Testing and small-scale use

### Option B: Configure SMTP (Recommended for Production)
1. **Go to Authentication → Settings → SMTP Settings**
2. **Enable "Enable custom SMTP"**
3. **Configure with your email provider:**
   ```
   Sender name: Solo Travel Safety
   Sender email: noreply@yourdomain.com
   Host: smtp.your-provider.com
   Port: 587 (or 465 for SSL)
   Username: your-smtp-username
   Password: your-smtp-password
   ```

### Popular SMTP Providers:
- **Gmail:** smtp.gmail.com (port 587)
- **SendGrid:** smtp.sendgrid.net (port 587)
- **Mailgun:** smtp.mailgun.org (port 587)
- **Amazon SES:** email-smtp.[region].amazonaws.com (port 587)

## Step 7: Test Email Functionality

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Go to http://localhost:5173**

3. **Try to sign up with your real email address**

4. **Check your email inbox** for confirmation link

5. **Click the confirmation link** to verify your account

## Step 8: Enable Google OAuth (Optional)

1. **Go to Supabase Dashboard → Authentication → Providers**
2. **Enable Google**
3. **Get Google OAuth credentials:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create/select project
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `https://[your-project].supabase.co/auth/v1/callback`
4. **Add Client ID and Secret to Supabase**

## Troubleshooting

### Email Not Received?
- Check spam/junk folder
- Verify email provider settings
- Check Supabase logs in Dashboard → Logs

### Authentication Errors?
- Verify .env credentials are correct
- Check Site URL and redirect URLs match exactly
- Ensure database schema was created successfully

### Database Errors?
- Check if all SQL commands ran without errors
- Verify RLS policies are enabled
- Check Supabase logs

## Production Deployment

When deploying to production:

1. **Update environment variables** on your hosting platform
2. **Update Site URL** in Supabase to your production domain
3. **Update redirect URLs** to match your production domain
4. **Configure production-ready SMTP** provider
5. **Set up custom domain** for emails (optional)

## Security Notes

- ✅ **Row Level Security (RLS)** is enabled
- ✅ **PKCE flow** for enhanced security
- ✅ **Rate limiting** implemented
- ✅ **CSRF protection** enabled
- ✅ **Email verification** required
- ✅ **Secure error handling**

Your authentication system is enterprise-ready with all security best practices! 🔒
# Solo Travel Safety (STS) - Project Documentation

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#9E7DFF` - Main brand color for primary actions and headers
- **Soft Pink**: `#FFC7DE` - Secondary accent color for warmth and approachability  
- **Safety Green**: `#1CAA9C` - Used for safety indicators and positive actions
- **Light Lavender**: `#E8E0FF` - Background tints and subtle highlights
- **Warm Peach**: `#FFE4D6` - Supporting color for community features
- **Sunshine Yellow**: `#FFF9B3` - Attention-grabbing for alerts and warnings
- **Deep Navy**: `#2E1065` - Text and high contrast elements
- **White**: `#EFEFEF` - The white color of Solo Travel Safety
- **Black**: `#282828` - The black color of Solo Travel Safety

### Typography
- **Headings**: Caprasimo (Bold, playful serif for impact)
- **Body Text**: DM Sans (Clean, readable sans-serif for all body copy)

### Brand Messaging
**Tagline**: "TRAVEL SMART, NOT SCARED."

---

## 🛡️ Project Overview

**Solo Travel Safety (STS)** is a crowdsourced safety platform designed for solo female travelers to explore the world with more confidence and less fear. It provides real safety tips, red flag alerts, and trusted places — all shared by other women who've been there.

### Core Value Proposition
Plan safer solo trips with real safety reviews, practical tips, and insights from solo female travelers. Built to support women exploring the world safely.

---

## 🎯 Target Audience

### Ideal Customer Profile
**Who she is:**
- Woman, age 20–45, curious, independent, and travel-minded
- Aspiring or seasoned solo traveler
- Cares deeply about safety, especially in unfamiliar destinations

**Her pain points:**
- Lack of specific, trustworthy info for women
- Doesn't know what areas are safe to stay or walk in
- Frustrated by male-dominated or overly general platforms

**What she wants:**
- Confidence in planning
- Local safety tips she can trust
- A community of women who've "been there" and get it

### Non-Ideal Customers
- General travelers (solo or groups) who aren't concerned about women-specific safety needs
- Male travelers looking for generic travel recommendations
- Budget backpackers focused solely on price, not safety
- People looking for party/club-focused travel apps or guides

---

## 🗣️ Brand Voice & Tone

**Solo Travel Safety speaks like your smart, streetwise travel BFF.**

We're calm, clear, and data-backed — never alarmist, never fluffy.
Supportive but real. Witty when it helps.

**We're always:**
- Empowering, not patronizing
- Informative, not overwhelming
- Warm and relatable, not corporate or cold

> Think: "Know before you go — not freak out before you fly."

### Tone Examples

**Wrong (too alarmist):**
> "This city is dangerous for women. Avoid going out at night."

**Right (STS tone):**
> "Most women felt safe here during the day. Use extra caution in less-lit areas after dark."

**Wrong (too casual/patronizing):**
> "Ladies, just be chill and you'll be fine lol."

**Right (STS tone):**
> "If you're traveling alone, we recommend staying in central neighborhoods with good reviews from other solo women."

---

## 🧱 Key Features

### 🔍 Destination Overview Pages
- Safety scores: Night, Transit, Walking Alone
- Women's Confidence Score
- Red flags and cultural tips
- Language & emergency info

### 🗺️ Safety Map
- Neighborhood color zones (Safe, Caution, Avoid)
- Pins for user-flagged places
- Toggle: red flag alerts, solo-friendly zones

### 💬 Reviews ("Chirps")
- Short user-submitted safety reviews
- Tags (e.g. scam, harassment, area)
- Voting system for helpful tips

### 📝 Review Submission
- Safety rating, category, description
- Option to remain anonymous
- Add red flag tag or location pin

### 📊 City Safety Breakdown
- Time-of-day safety scores
- Red flag severity data
- Confidence by activity (sightseeing, nightlife, transit)

### 👤 Community Features
- Sign up / log in
- Bookmark cities
- Submit and manage your reviews
- Newsletter signup

---

## 🧠 Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: Supabase (auth, DB, storage)
- **Hosting**: Netlify
- **Maps**: Mapbox or Leaflet
- **Logging**: Sentry
- **Analytics**: Plausible
- **Email**: Resend or Supabase SMTP

---

## 🔐 Security & Privacy

- Supabase Auth + JWT
- Row-Level Security (RLS)
- Sanitized user input
- Encrypted passwords (bcrypt)
- HTTPS enforced via Netlify
- No unnecessary PII collection

---

## 📊 Success Metrics

- DAU / MAU
- % of users posting reviews
- Retention after 30 days
- Safety confidence scores
- Review volume per city
- Self-reported drop in travel anxiety

---

## 📅 Development Roadmap

| Phase | Milestone |
|-------|-----------|
| Week 1–2 | Safety scores UI, auth, review system |
| Week 3 | Safety map, cultural insights, tags |
| Week 4 | User dashboard, bookmarking, newsletter |
| Week 5 | Emergency info, RLS, charts |
| Week 6 | Final polish, bug fixes, launch |

---

## 🚀 Future Features

- Mobile app
- City-specific community channels
- Trip alerts & solo itineraries
- Emergency check-in
- Safe hostel/tour marketplace
- Review sharing (Instagram stories, badges)

---

## 🐦 Brand Concept & Symbols

- The **bird** is your symbol: freedom, awareness, movement, protection
- Key metaphors: "Chirp" (a review or warning), "Flock" (community), "Nest" (safe zones)

---

## 💰 Monetization Strategy

1. **Freemium + Premium Safety Plans**
2. **Affiliate revenue** from safe hostels, insurance, SIMs
3. **Sponsored "safe spots"** from vetted businesses
4. **B2B licensing** (for govs, NGOs, travel apps)
5. **Community donations + merch** (fun, shareable, mission-driven)

---

## 🚀 Go-to-Market Strategy

- **Community-first launch** via Reddit, TikTok, and women's travel creators
- **UGC campaigns**: "Share your Chirp," "Flag the sketchy"
- **Emotional hooks**: "You might save someone's trip."
- **SEO hubs**: "Is [City] safe for solo female travelers?"
- **Partnerships**: women-run travel brands, hostels, solo tours

---

## 🧭 Brand Positioning

**STS is not about fear — it's about freedom with awareness.**
- It doesn't preach. It empowers.
- It's not just safety data. It's **confidence, clarity, community and peace of mind.**

---

## ❤️ Emotional Core

> "The world is for us too. We just want to feel safe in it."

STS helps women **go farther, feel stronger, and trust more** — together.

---

## 🎨 Visual Brand Guidelines

### Logo Usage
- Bird symbol represents safety, freedom, and alertness
- Use the logo with adequate white space
- Maintain brand colors for consistency

### Color Usage
- **Primary Purple (#9E7DFF)**: Main headers, primary CTAs, navigation
- **Safety Green (#1CAA9C)**: Safety scores, positive indicators, "safe" zones
- **Soft Pink (#FFC7DE)**: Community features, user profiles, secondary actions
- **Deep Navy (#2E1065)**: Body text, high-contrast elements
- **Light colors**: Backgrounds, subtle highlights, and tints

### Typography Hierarchy
- **H1**: Caprasimo, Bold - Main page titles
- **H2-H6**: Caprasimo, Regular - Section headers
- **Body**: DM Sans, Regular - All body copy and descriptions
- **Captions**: DM Sans, Light - Metadata, timestamps, small text

---

## 🌍 Market Context

The solo female travel market is $260B+ — but most women still rely on Reddit threads and gut instinct to stay safe. STS aims to change that with a dedicated space for safety, trust, and empowerment — and maybe even save lives along the way.

**84% of solo women travelers report feeling unsafe on the road.** Most rely on fragmented sources (Reddit, blogs, TripAdvisor) and gut instinct. STS fills the massive trust gap in the solo travel market by offering a centralized, verified, women-led safety tool.

---

*Travel Smart, Not Scared.*
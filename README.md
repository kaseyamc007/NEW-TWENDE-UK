# Twende Zambia UK – Bereavement Community Support Scheme

A professional, fully responsive, modern React + Tailwind CSS single page website for **Twende Zambia UK**, an independent, non-partisan, and non-profit community association in the United Kingdom supporting Zambians during unexpected times of mourning.

---

## 🎨 Visual Identity & Design Concept
- **Zambia-Inspired Color Accents**: Subtly integrated Green (`#198754`), Orange (`#fd7e14`), and Dark Slate (`#171717`) representing the national colors with high accessibility standards.
- **Modern Typography**: Proportional display headings set in **Montserrat** paired with **JetBrains Mono** for numbers, estimators, and capsules.
- **Fluid Layout**: Full desktop-to-mobile responsive grid that resizes with touch targets above 44px on tablets and phones.

---

## ⚡ Main Web Sections & Dynamic Assets
1. **Hero Section**: High-impact headlines, emergency hotline alerts, and a dynamic progress visual charting current target milestones.
2. **About Us**: Introducing the mutual support covenant, complete with an **Interactive Repatriation Cost Estimator & Slider Comparison** contrasting individual emergency costs versus Twende Zambia UK communal pool savings.
3. **How It Works**: A clickable step-by-step interactive map details registration, callouts, and payouts.
4. **Caring Membership Cards**: Adult Subscription (`£10/yr`), Child Subscription (`£5/yr`), and the pre-agreed communal Contribution call (`£30/case`).
5. **Eligibility self-check Wizard**: A custom multi-point condition checker enabling expat candidates to test their qualification state.
6. **Testimonial Deck**: Real-world quotes from Zambians based in Manchester, Birmingham, and London.
7. **Searchable & Collapsible FAQ Accordion**: Immediate guidelines on claims, wait times, children, and limits.
8. **Direct Message Forms & Contact Hub**: Beautiful messages submission platform with full visual status alerts on success/failure.
9. **WhatsApp Floating Action Button**: A persistent, highly responsive bottom-corner button allowing members in distress to request immediate WhatsApp assistance.

---

## ⚙️ Development & Build Scripts

This project is built using **React 19**, **Vite (with Tailwind v4)**, and **TypeScript**.

### Initialize Dependencies
Ensure you have `node` and `npm` installed, then run:
```bash
npm install
```

### Local Development Server
To launch the hot-reloading development server on port `3000`:
```bash
npm run dev
```

### Compile Production Static Build
To generate a fully optimized, lightweight production folder in `/dist`:
```bash
npm run build
```

---

## 🚀 GitHub & Deployment Guidelines

Follow these directions to deploy this website on **Vercel** or **Netlify**:

### 1. Initialize Git and Push to GitHub
If you haven't linked this workspace to a repository, execute these commands in your console:
```bash
git init
git add .
git commit -m "feat: complete Twende Zambia UK website launch"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

### 2. Deploying on Vercel
1. Navigate to [Vercel](https://vercel.com) and log in.
2. Click **Add New** ➔ **Project**.
3. Import your GitHub repository (`Twende-Zambia-UK`).
4. Vercel will automatically auto-detect **Vite** configuration:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your professional portal is live in under 60 seconds!

### 3. Deploying on Netlify
1. Log in to your [Netlify Dashboard](https://www.netlify.com).
2. Click **Add new site** ➔ **Import from Git**.
3. Connect your GitHub provider and choose your repository.
4. Set Build Settings:
   - **Base directory**: (Leave blank)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

---

## 🗄️ Extending for Admin Payments (Stripe / PayPal)
- **JoinFormModal**: Built using a robust multi-stage step-by-step form system. In `/src/components/JoinFormModal.tsx`, the layout has a submission handle designed to feed customer records to standard payment endpoints (e.g. Stripe checkout-session creation or PayPal invoice dispatch).

---

## 📧 Association Registrar Metadata
- **Email**: `info@twendezambia.co.uk`
- **Phone**: `+44 7376 575093`
- **Facebook Group**: `Twende Zambia UK`
- **Web URL**: `www.twendezambia.co.uk`

*© 2026 Twende Zambia UK. All Rights Reserved.*

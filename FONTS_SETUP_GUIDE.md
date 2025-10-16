# 🎨 Font Setup Guide for Arcane Hero Section

## 🚨 Action Required: Add Font Files

Your hero section is configured to use two premium fonts that need to be added manually.

---

## 📥 Step-by-Step Setup:

### Step 1: Purchase/Download Fonts

Visit **Pangram Pangram Foundry** to purchase these fonts:

1. **Non Natural Grotesk Inktrap**
   - URL: https://pangrampangram.com/products/non-natural-grotesk
   - You need: **Bold (700)** weight
   - Format: WOFF2 and WOFF

2. **PP Mondwest**
   - URL: https://pangrampangram.com/products/mondwest
   - You need: **Regular (400)** weight
   - Format: WOFF2 and WOFF

### Step 2: Extract Font Files

After downloading, extract and locate these specific files:
- `NonNaturalGroteskInktrap-Bold.woff2`
- `NonNaturalGroteskInktrap-Bold.woff`
- `PPMondwest-Regular.woff2`
- `PPMondwest-Regular.woff`

### Step 3: Copy to Project

Copy the 4 font files to:
```
d:\Projects\Arcane\arcane\public\fonts\
```

Your folder structure should be:
```
public/
└── fonts/
    ├── NonNaturalGroteskInktrap-Bold.woff2
    ├── NonNaturalGroteskInktrap-Bold.woff
    ├── PPMondwest-Regular.woff2
    ├── PPMondwest-Regular.woff
    └── README.md
```

### Step 4: Restart Dev Server

```powershell
# Stop the server (Ctrl+C) then restart:
npm run dev
```

---

## ✅ What's Already Configured:

✅ Font-face declarations in `globals.css`
✅ CSS classes: `.font-grotesk-inktrap` and `.font-pp-mondwest`
✅ Hero component using correct font classes
✅ Responsive font sizing
✅ Exact typography specifications (112px, 128px, 100% line-height)

---

## 🆓 Free Alternatives (If You Don't Have Licenses):

If you want to test without purchasing fonts, you can use these free alternatives:

### Option A: Use System Fonts
The site will work with system fonts (current fallback). It won't match the design exactly, but will be functional.

### Option B: Use Free Similar Fonts
1. **Space Grotesk** (similar to Non Natural Grotesk)
   - Download: https://fonts.google.com/specimen/Space+Grotesk
   
2. **Bebas Neue** (bold display font, similar feel to PP Mondwest)
   - Download: https://fonts.google.com/specimen/Bebas+Neue

To use these alternatives, you'll need to update the font-face declarations in `globals.css`.

---

## 🧪 Testing:

Once fonts are added:
1. Open http://localhost:3000
2. Check that "ARCANE BACKS" and "YOUR FAVORITE" use Non Natural Grotesk Inktrap
3. Check that "CRYPTO PROJECTS" uses PP Mondwest
4. Text should be large, bold, and match the screenshot

---

## ❓ Need Help?

- Font files should be in WOFF2 format (primary) and WOFF format (fallback)
- Make sure file names match exactly (case-sensitive)
- Check browser console for any font loading errors
- Verify fonts are in `/public/fonts/` not `/src/fonts/`

---

## 📄 License Reminder:

These are commercial fonts requiring proper licensing for production use. Ensure you have appropriate licenses before deploying.

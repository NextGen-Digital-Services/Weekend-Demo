# Weekend Thrills (Redesign) — Italian Luxury Hospitality UI

A production-ready, FRONTEND-ONLY redesign of **Weekend Thrills** (https://weekendzthrills.com)—a Maharashtra weekend-getaway brand selling camping, villa, resort, and cottage stays in Alibaug, Lonavala, Pawna Lake, and Matheran.

- **Brand Tagline**: "Dive Into Divine Adventure"
- **Phone**: +91 70306 97820
- **WhatsApp**: +91 70306 97820 (https://wa.me/917030697820)
- **Email**: WeekendThrillsofficial@gmail.com
- **Instagram**: https://www.instagram.com/weekend_thrills_official/
- **YouTube**: https://www.youtube.com/@weekendzthrillsofficial

---

## 🎨 Premium Italian Design Tokens

- **Palette**:
  - Ivory/Cream (`#F7F1E5`): Warm background
  - Warm Sand (`#E9DCC3`): Card & section fills
  - Terracotta (`#B5573A`): Primary accent CTA
  - Olive/Cypress Green (`#4B5A3A`): Secondary nature accent
  - Deep Espresso (`#2A1F1A`): Dark serif typography & dark sections
  - Antique Gold (`#B8925A`): Hairlines & roman numerals
  - Mediterranean Blue (`#3E6C7B`): Rare coastal highlight
- **Typography**: `Cormorant Garamond` (high-contrast serif headings with italic keywords) and `Manrope` (clean sans-serif body).
- **Signature Styling**: Italian architectural window arch top image masks (`rounded-t-[100px]`), roman-numeral section indicators (`I`, `II`, `III`), thin gold hairline dividers.

---

## 🔑 Demo Admin Credentials

- **Route**: `/admin` (Login at `/admin/login`)
- **Email**: `admin@weekendthrills.com`
- **Password**: `Admin@123`
- *Note*: Protected by client-side auth guard & `robots.txt` noindex. All CRUD actions persist to `localStorage`. A "Reset Demo Data" button is available in the admin header and activity log module.

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Production Build & Verification
```bash
npm run build
```

---

## 📱 Public Routes Structure

- `/` (Home Page)
- `/about-us` (About Us)
- `/camping` (Listing) + `/camping/alibaug-beach-camping`, `/camping/pawna-lake-camping`, `/camping/matheran-jungle-camping`
- `/villa` (Listing) + `/villa/alibaug-villa`, `/villa/lonavala-villa`
- `/resorts` (Listing) + `/resorts/alibaug-resorts`
- `/cottages` (Listing) + `/cottages/alibaug-cottage`
- `/faqs` (FAQs)
- `/blogs` (Listing) + `/blogs/[slug]` (6 seeded posts)
- `/privacy-policy`
- `/terms-condition`
- `/quick-links`

---

## 🛠️ Admin Modules (14 Submodules)

1. **Dashboard**: KPI cards, revenue, pending enquiries, top properties
2. **Bookings & Enquiries**: Filterable table, detail drawer, status updater, WhatsApp reply, CSV export
3. **Properties & Stays**: CRUD for stays, featured toggles
4. **Pricing & Packages**: Seasonal rates & add-ons
5. **Availability Calendar**: Month grid date blocker
6. **Customers CRM**: Customer search & history
7. **Testimonials**: Google review moderation
8. **Blog Manager**: Article CRUD
9. **FAQ Manager**: Reorder & edit FAQs
10. **Gallery & Media**: Image library & upload preview
11. **Coupons & Offers**: Promo code generator
12. **Site Settings**: Phone, WhatsApp, GST & hero text
13. **Users & Roles**: Admin team list
14. **Activity Log**: Audit log & demo reset

---

## 📁 Editing Content & Connecting Real Backend

- **Image Registry**: Edit `/data/images.ts`
- **Properties & Stays**: Edit `/data/properties.ts`
- **Blogs**: Edit `/data/blogs.ts`
- **Testimonials**: Edit `/data/testimonials.ts`
- **Backend Integration**: Replace state setters in `/lib/store/AppContext.tsx` with async `fetch()` or React Query calls to your API endpoints.

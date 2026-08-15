# WebSale Client Form — Phased Implementation Plan

Transform `requirements.html` from a 4-step scroll flow into a **7-step wizard** with a horizontal progress bar and slide transitions.

## Files
- `requirements.html`
- `css/requirements.css`
- `js/requirements.js`

---

## Phase 1 — HTML Restructure
**Goal:** Replace vertical sidebar with horizontal progress bar; create 7 discrete step panels.

### 1.1 Progress Bar (Top)
- Remove `.progress-sidebar` markup.
- Insert `.progress-bar` container at the top of `.req-content` (below hero).
- Render 7 step indicators: Website Type, Goals, Business Info, Pages Needed, Design, Content, Budget & Contact.
- Each indicator: circle + label. States: `active`, `completed` (check icon), `pending`.
- Make indicators clickable to jump to completed/active steps only.

### 1.2 Step Viewport & Panels
- Wrap all step content in `.step-viewport` (position: relative, overflow: hidden).
- Convert each existing `<section class="req-section">` into a `.step-panel` with `data-step="1"` through `data-step="7"`.
- **Step mapping:**
  - Step 1 — Website Type (reuse existing types grid, update options to 9 specific cards).
  - Step 2 — Goals (new checkbox grid).
  - Step 3 — Business Info (new text fields).
  - Step 4 — Pages Needed (new checkboxes + special features input).
  - Step 5 — Design (new radio cards + color picker + reference URL).
  - Step 6 — Content (new file uploads + reference link + content-help radio).
  - Step 7 — Budget & Contact (new budget ranges, timeline, contact fields).
- Keep preview modal markup, but move it outside the viewport (do not wrap in step-panel).

### 1.3 Hero & Reassuring Copy
- Update hero subtitle to: *"Don't worry if you don't know exactly what you need. Just answer a few simple questions and our team will suggest the best website for your business."*
- Remove "Complete all 4 steps" text.

### 1.4 Navigation Buttons
- Add Next/Back buttons to each step panel (except Step 1 has no Back, Step 7 has Preview + WhatsApp instead of Next).
- Keep existing form-actions pattern but adapt per-step.

---

## Phase 2 — CSS Foundation
**Goal:** Style progress bar, slide transitions, and new input components.

### 2.1 Horizontal Progress Bar
- `.progress-bar`: flex row, gap, centered, scrollable on mobile (`overflow-x: auto`).
- `.progress-step`: circle (40px) + label below. Connecting line between circles.
- States: `active` (accent gradient, glow), `completed` (green bg + check), `pending` (gray).
- Mobile (`max-width: 599px`): allow horizontal scroll, hide labels on very small screens if needed.

### 2.2 Step Transitions
- `.step-viewport`: `position: relative`, `overflow: hidden`, fixed height or min-height.
- `.step-panel`: `position: absolute`, `top: 0`, `left: 0`, `width: 100%`.
- Transition classes:
  - `.step-enter-right`: `transform: translateX(100%)` → `translateX(0)`
  - `.step-exit-left`: `transform: translateX(0)` → `translateX(-100%)`
  - Reverse classes for Back navigation.
- Use `transition: transform 0.4s ease`.
- Ensure only the active panel is `pointer-events: auto`; others `pointer-events: none`.

### 2.3 New Component Styles
- `.radio-card`: same visual as `.type-card` but single-select (radio behavior).
- `.file-upload-wrapper`: hidden `<input type="file">`, styled label/button.
- `.color-picker-wrapper`: wrapper around `<input type="color">` with label.
- `.checkbox-grid`: reuse `.features-grid` pattern where applicable.
- Ensure all inputs match existing `.form-group`, `.form-row` patterns.

### 2.4 Responsive
- Keep existing breakpoints. Add `@media (max-width: 599px)` rules for progress bar scrolling.
- Ensure `.step-viewport` has appropriate min-height on mobile so transitions don't collapse.

---

## Phase 3 — JS State & Navigation
**Goal:** Replace 4-step logic with 7-step wizard engine.

### 3.1 State Schema
- Replace `selectedType` / `selectedFeatures` with unified `formData` object:
  ```js
  formData = {
    currentStep: 1,
    websiteType: null,
    goals: [],
    businessName: '',
    businessCategory: '',
    businessDescription: '',
    cityCountry: '',
    pagesNeeded: [],
    specialFeatures: '',
    designStyle: '',
    primaryColor: '#6366f1',
    referenceWebsite: '',
    logo: null, // filename or null
    images: [], // filenames
    existingContent: null,
    contentHelp: '',
    budget: '',
    timeline: '',
    contactName: '',
    contactWhatsApp: '',
    contactEmail: '',
    contactMethod: 'whatsapp'
  }
  ```
- Keep localStorage key `webnexa_requirements_state`. Extend schema; add migration: if old state exists, map `type` → `websiteType`, `features` → `goals` (or clear if schema mismatch is too complex; prefer migration).

### 3.2 Navigation Engine
- `goToStep(n, direction)`:
  1. Determine exit/enter classes based on `direction` ('forward' | 'back').
  2. Add exit class to current panel.
  3. `setTimeout(400)` (or `transitionend`), then swap visibility: hide current, show next.
  4. Add enter class to new panel, remove after transition.
  5. Update progress bar indicators.
  6. `viewport.scrollTop = 0`.
- **Validation gates:**
  - Step 1 → Step 2: require `formData.websiteType`.
  - Step 3 → Step 4: require `formData.businessName`.
  - Step 7 → Preview: require `contactName`, `contactWhatsApp`, `contactEmail`.

### 3.3 Autosave
- Save `formData` to localStorage on every `input` / `change` / `click` for selectable elements.
- On init, restore `formData` and call `goToStep(formData.currentStep, 'none')` (no animation).

---

## Phase 4 — Step Content Wiring
**Goal:** Implement each step's fields and UI logic.

### 4.1 Step 1 — Website Type
- 9 cards: Business Website, E-commerce, Doctor/Clinic, Restaurant, Real Estate, Portfolio, School/Academy, Landing Page, Not Sure.
- Single-select behavior (same as current `.type-card`).
- "Not Sure" sets `websiteType = 'not-sure'`.

### 4.2 Step 2 — Goals
- Checkbox grid (multi-select). Options:
  - Customers se WhatsApp par contact
  - Online orders
  - Online payment
  - Appointment booking
  - Products/services show karna
  - Leads collect karna
  - Company ki information dena
  - Blog/news
  - Other
- Update `formData.goals` array on toggle.

### 4.3 Step 3 — Business Info
- Fields: Business/Brand Name (required), Business Category, Short description (textarea), City/Country.
- Bind to `formData.businessName`, etc.

### 4.4 Step 4 — Pages Needed
- Checkboxes: Home, About Us, Services, Products, Pricing, Contact, Gallery, Testimonials, FAQ, Blog, Other.
- Text input: "Aapko koi special feature chahiye?" → `formData.specialFeatures`.

### 4.5 Step 5 — Design
- Radio cards: Modern, Simple, Professional, Luxury, Colorful, I don't know — You decide.
- Color picker: `<input type="color">` → `formData.primaryColor`.
- Reference website: optional URL input.

### 4.6 Step 6 — Content
- Logo upload (single file).
- Images upload (multiple).
- Existing content upload (single file).
- Reference website link (optional).
- Radio: "Agar aapke paas content nahi hai, kya hum basic content prepare kar dein?" → Yes / No / Not sure.

### 4.7 Step 7 — Budget & Contact
- Budget ranges: Under $50, $50–100, $100–200, $200–500, $500+, Not sure.
- Timeline: 1–3 days, 3–7 days, 1–2 weeks, Flexible.
- Contact: Name, WhatsApp Number, Email, Preferred contact method (radio: WhatsApp / Email / Phone).

---

## Phase 5 — Preview & WhatsApp Builders
**Goal:** Update modal content and WhatsApp message for 7 steps.

### 5.1 `buildPreviewHTML()`
- Generate sections for Steps 1–7.
- Show file names for uploads (do not display binary content).
- Show color swatch for selected color.
- Hide empty optional sections or show "Not provided".

### 5.2 `buildWhatsAppMessage()`
- Format all 7 steps into readable Urdu/English mixed message.
- Number: `923008932525`.
- URL: `https://wa.me/923008932525?text=...`
- Encode special characters with `encodeURIComponent`.

### 5.3 Post-Submit Reset
- Clear localStorage.
- Reset `formData` to defaults.
- `goToStep(1, 'none')`.
- Clear all DOM inputs and selections.

---

## Phase 6 — Polish & Validation
**Goal:** Ensure correctness across devices and edge cases.

### 6.1 Responsive Validation
- **Mobile (≤599px):** Progress bar scrolls horizontally; step panels stack correctly; transitions do not cause horizontal overflow.
- **Desktop (≥900px):** Full progress bar visible; viewport has adequate height.

### 6.2 localStorage
- Persist across reloads: open page, fill Step 1–3, reload → returns to Step 3 with data intact.
- Clear on successful WhatsApp submission.

### 6.3 Accessibility
- Progress indicators: `aria-current="step"` on active.
- Step panels: `role="tabpanel"`, `aria-labelledby`.
- Buttons have descriptive text/icons.
- Keyboard: Enter/Space to select cards/checkboxes; Escape closes preview modal.

### 6.4 Edge Cases
- "Not sure" selections propagate correctly.
- File inputs: if user cancels dialog, state does not break.
- Rapid Next/Back clicks: debounce or lock navigation during transition.
- Very long content in Step 3/7 textareas: viewport should allow internal scroll if content exceeds viewport height.

---

## Out of Scope
- Backend storage or email integration.
- Admin panel integration.
- Multi-language support (i18n).
- Separate WebSale branding page (modify existing requirements page only).

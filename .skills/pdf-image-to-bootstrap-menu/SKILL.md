# PDF / Image to Responsive Bootstrap Menu Skill

## Purpose
Use this skill whenever a restaurant, café, bar, hotel, catering company or food business provides a menu as a PDF, screenshot, scanned image, exported Canva file, photo, or other static visual and wants it rebuilt as a responsive web menu.

The goal is NOT to place the PDF pages or screenshots on the web as images. The goal is to reconstruct the menu as a real responsive website using Bootstrap, HTML, CSS, SVG and minimal JavaScript while preserving the visual identity and hierarchy of the source.

This skill is based on the workflow proven with La Pericana and related menu reconstruction work.

## Default technical stack
Unless the user explicitly asks for another stack, use:

- Bootstrap 5.3.x
- Semantic HTML5
- Custom CSS kept reasonably small and organized
- Vanilla JavaScript only when interaction is needed
- Inline or local SVG for decorative details and icons
- Relative asset paths so the project works locally and on GitHub Pages
- Git for version control
- GitHub Pages for free static deployment when appropriate

Do not add React, Vue, jQuery, build systems, npm packages, frameworks or databases unless the project actually needs them.

## Core principle
The supplied PDF/image is the primary visual and content reference.

Rebuild the DESIGN SYSTEM and CONTENT, not the file itself.

The final page should preserve:
- information hierarchy
- section order
- dish names
- descriptions
- prices
- allergen codes
- typography character
- spacing rhythm
- decorative lines/shapes
- logo treatment
- visual balance
- relevant contact details

while becoming responsive and usable on desktop, tablet and mobile.

## Non-negotiable rules
1. Never stretch a PDF or image to fake a responsive website.
2. Never use a full-page screenshot as the main implementation if the content can be reconstructed as HTML/CSS.
3. Text such as dish names, prices, allergens and descriptions must remain real selectable text whenever practical.
4. Do not invent dishes, prices, descriptions, ingredients, allergens, contact data or business claims.
5. Preserve the language of the source exactly unless the user asks for translation or rewriting.
6. Do not silently “correct” wording from the menu unless it is clearly a technical extraction error. If uncertain, preserve source wording and flag the uncertainty.
7. Do not replace official logos or artwork with AI-generated approximations when the original asset can be extracted or obtained from an authorized/public business source.
8. Do not bake labels, prices, callouts or decorative text into generated images merely to match a screenshot. Prefer live HTML/CSS/SVG overlays.
9. Do not redistribute font files. Use public web fonts or safe fallbacks when an exact commercial font is unavailable.
10. The result must remain usable at narrow mobile widths without horizontal scrolling.
11. Avoid absolute positioning for core menu text on mobile. Use responsive document flow, Grid/Flexbox and only use absolute positioning for decorative elements.
12. All paths must be relative for GitHub Pages compatibility unless a real production architecture requires otherwise.
13. Do not publish or overwrite an existing production site without explicit approval.
14. Do not say a result is visually verified unless it was actually inspected in a browser or through screenshots.

## Source hierarchy
When several references exist, use this priority:

1. User-supplied current PDF/image/menu file for actual menu content.
2. User instructions and corrections.
3. Existing official restaurant website for branding, logo, contact information and identity cues.
4. Other official business sources provided by the user.
5. General design inference only when the source is silent.

Do not replace current PDF content with older website menu content unless explicitly requested.

## Phase 1 — Intake and project setup
When a new menu is provided:

1. Identify the business name.
2. Identify the source type: PDF, image, screenshot, scan, Canva export, etc.
3. Create a clean project folder using a web-safe slug, for example:
   `restaurant-name-menu`
4. Initialize Git if appropriate.
5. Create this baseline structure:

```text
restaurant-name-menu/
├─ index.html
├─ README.md
├─ .gitignore
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ app.js
│  └─ img/
└─ reference/
```

6. Keep original references outside the deployable HTML flow when possible.
7. If the business has an official site, use it only to reinforce branding or obtain authorized assets, not to override the supplied menu.

## Phase 2 — Source analysis
For a PDF:

1. Extract embedded text directly when available.
2. Render every page visually.
3. Compare extracted text against the rendered page.
4. Do not rely on text extraction alone because it does not preserve hierarchy, spacing, lines, artwork or composition.
5. Avoid OCR unless the PDF is image-only and no better text source exists.

For an image/screenshot:

1. Inspect visually first.
2. Identify all readable text.
3. Preserve line breaks only when they serve design or meaning.
4. Separate content from decoration.
5. If exact text cannot be read reliably, ask the user rather than inventing it.

Create an internal inventory of:
- cover/title
- sections
- dishes/items
- descriptions
- price formats
- allergens
- special notes
- logos
- decorative graphics
- contact block
- footer/closing page

## Phase 3 — Visual decomposition
Before coding, identify:

### Typography
- script/display title font style
- sans/serif body font style
- weights
- capitalization
- letter spacing
- relative size hierarchy

If the exact font is unknown, use the closest legitimate web font and prioritize visual character over pretending certainty.

### Layout
Identify:
- page margins
- content width
- title position
- item/price alignment
- spacing between sections
- columns
- use of white space
- decorative vertical/horizontal lines
- cover composition
- footer/contact composition

### Visual assets
Classify every visible element as one of:
- real image asset
- logo
- live text
- CSS line/shape
- SVG ornament
- icon
- background

Do not convert live text into images unnecessarily.

## Phase 4 — Responsive reconstruction
The desktop version may resemble the original printed page closely, but mobile must be adapted rather than scaled down blindly.

### Desktop
- Keep strong resemblance to the source.
- Preserve generous white space when it is part of the design.
- Keep prices visually aligned.
- Retain original decorative rhythm.

### Tablet
- Reduce margins proportionally.
- Keep dish names and prices readable.
- Prevent decorative elements from colliding with content.

### Mobile
- Increase practical readability rather than preserving tiny print-menu text sizes.
- Typical dish text should generally not fall below about 1rem unless the visual design strongly requires it.
- Allow long names/descriptions to wrap naturally.
- Keep prices legible and aligned without forcing overflow.
- Simplify purely decorative desktop geometry when necessary.
- Do not let ornaments/logos get clipped at viewport edges.

## Menu item pattern
A robust default structure is:

```html
<article class="menu-item">
  <div class="item-copy">
    <h3>DISH NAME <span class="allergens">| 1, 5, 7 |</span></h3>
    <p>Optional description</p>
  </div>
  <div class="price">15 €</div>
</article>
```

Prefer CSS Grid for name/description + price alignment.

## Allergens
When the source uses numeric allergen codes:

- Preserve the exact numbers associated with each dish.
- Recreate the allergen key as live text.
- Keep allergen markers visually secondary to dish names.
- Never infer missing allergen codes.
- Preserve the original terminology used by the menu.

## Light / dark mode
Dark mode is optional, but when the user wants it:

1. Implement with CSS custom properties.
2. Use a visible selector such as:
   - sun icon + `Claro`
   - moon icon + `Oscuro`
3. Use real SVG icons, not platform-dependent emoji.
4. Persist the user choice with `localStorage`.
5. Define an explicit default theme.
6. Apply the default theme as early as possible in `<head>` to avoid a flash of the wrong color.
7. Update `<meta name="theme-color">` when the mode changes.
8. Ensure logos/images remain legible in both modes; invert monochrome artwork only when visually appropriate.
9. Theme transitions should be subtle.

## Optional animated details
Animations should support the menu identity rather than turning it into a landing-page spectacle.

Preferred effects:
- hand-drawn SVG flourish beside section titles
- decorative line draw/reveal
- subtle title reveal
- menu items appearing with slow stagger
- restrained sun/moon transition
- logo fade/draw effect when technically appropriate

Rules:
1. Keep animations slow and elegant.
2. Trigger on viewport entry using `IntersectionObserver`.
3. Usually play only once.
4. Avoid continuous bouncing, glowing, spinning or attention-seeking movement.
5. Use SVG `stroke-dasharray` / `stroke-dashoffset` for hand-drawn effects.
6. Respect `prefers-reduced-motion: reduce`.
7. Never hide essential content permanently if JavaScript fails.
8. Test animation timing on mobile as well as desktop.

A good starting range is:
- SVG drawing: ~1.5–2.5s
- item fade/slide: ~0.8–1.1s
- stagger per item: ~80–120ms
- decorative line reveal: ~1.4–2.0s

Adjust for the design rather than treating these values as mandatory.

## Decorative SVG rule
For visual flourishes, prefer small inline SVG generated as vector paths rather than bitmap decorations.

SVG details should:
- use `currentColor` where possible
- inherit theme color
- use `vector-effect="non-scaling-stroke"` when useful
- remain outside the semantic reading order with `aria-hidden="true"`
- never obscure dish text or prices

## Logo / bottom-mark clipping rule
Printed menus often place a logo or mark partially off-page. That does NOT automatically mean it should be clipped on a website.

For responsive web:
- keep the full mark visible unless intentional cropping is clearly desired
- use safe bottom/right offsets on mobile
- test viewport heights as well as widths
- check Android browser chrome and safe-area behavior

## Accessibility baseline
Use:
- semantic headings
- real buttons for theme controls
- `aria-pressed` for theme choice
- meaningful `aria-label` where needed
- sufficient contrast
- keyboard-accessible controls
- decorative SVG/images with `aria-hidden="true"` or empty alt text
- real phone links using `tel:`

Do not sacrifice the visual design, but do not create a menu that only works visually.

## Performance
A menu should be lightweight.

Prefer:
- static HTML
- one main CSS file
- one small JS file
- optimized local images
- SVG instead of raster for simple line artwork
- external libraries only when needed

Avoid:
- huge uncompressed source images
- unnecessary video backgrounds
- animation libraries for trivial effects
- loading the PDF itself merely to show the menu

## GitHub / deployment workflow
When the user wants a free public link:

### Git repository
1. Initialize Git if not already initialized.
2. Use branch `main`.
3. Verify `.gitignore`.
4. Commit only intended project files.
5. Never commit credentials, tokens or private source files accidentally.

### GitHub
When GitHub CLI is authenticated, the project can be created from terminal.

Recommended repository naming:
`business-name-menu`

Typical workflow:
- create public repository
- add origin
- push `main`
- enable GitHub Pages from branch `main`, root `/`
- wait until Pages build status is `built`

Expected default URL pattern:
`https://USERNAME.github.io/REPOSITORY/`

### Custom domain
If the business owns a domain, prefer a professional subdomain such as:
- `menu.business.com`
- `carta.business.com`

Keep GitHub Pages as hosting while mapping the custom domain through DNS.

## GitHub Pages compatibility rules
- Use relative URLs like `assets/css/styles.css`.
- Do not hardcode Windows paths.
- Do not depend on a local Python server for production behavior.
- Avoid server-side code unless moving off GitHub Pages.
- Ensure the site works from a repository subpath, not only from `/`.

## Local preview
A simple static preview is sufficient:

```powershell
cd C:\path\to\project
python -m http.server 8080
```

Then open:
`http://127.0.0.1:8080/`

The local preview is for QA only; production must not depend on it.

## Validation checklist
Before asking the user to review:

### Content
- Every section from the source is present.
- Dish names match the source.
- Descriptions match the source.
- Prices match exactly.
- Allergen numbers match exactly.
- Contact details are correct.

### Desktop visual QA
- Section titles are positioned sensibly.
- Price alignment is clean.
- Decorative artwork is not clipped accidentally.
- No overlaps.
- No unexpected horizontal scroll.
- Cover/closing composition resembles the source.

### Mobile visual QA
- Dish text is comfortably readable.
- Prices do not collide with names.
- Long dish names wrap cleanly.
- Descriptions remain legible.
- Theme switch does not cover important content.
- Decorative SVG does not overflow the screen.
- Bottom logo/mark is fully visible unless intentional cropping is requested.

### Theme QA
- Default mode is correct.
- Claro works.
- Oscuro works.
- Preference persists on reload.
- First load does not flash the wrong theme noticeably.
- Logo and SVG ornaments remain visible in both themes.

### Animation QA
- Effects are not too fast.
- Effects are not distracting.
- Sections reveal when expected.
- Content remains available if motion is reduced.

### Technical QA
- Local page returns HTTP 200.
- No missing asset references.
- JS has no syntax errors.
- Git working tree contains only intended changes.
- GitHub Pages build completes successfully after push.

## Iteration workflow from screenshots
When the user sends a screenshot showing a problem:

1. Treat it as precise QA evidence.
2. Identify whether the problem is desktop, tablet, mobile or all sizes.
3. Fix the smallest CSS/HTML/JS area necessary.
4. Do not broadly redesign sections that were already approved.
5. Re-test the affected breakpoint.
6. If the project is already online and the user expects the live version updated, commit and push after validation.

Common screenshot corrections include:
- text too small
- prices too close to names
- logo clipped
- decoration clipped
- title too large/small
- excessive white space
- theme selector obscuring content
- animation too fast

## Reference implementation — La Pericana
Use the La Pericana project as a practical implementation reference when available.

Reference project root:
`C:\Users\newpc\Documents\la-pericana-menu`

Important patterns demonstrated there:
- PDF menu reconstructed as semantic HTML
- Bootstrap 5.3 responsive foundation
- manuscript-style headings
- aligned dish prices
- numeric allergen key
- responsive decorative lines
- Claro / Oscuro switch with SVG sun and moon
- localStorage theme persistence
- dark mode default option
- animated SVG title flourishes
- slow staggered menu item reveals
- `prefers-reduced-motion`
- Git + GitHub Pages deployment

Do not copy La Pericana branding into another restaurant. Reuse the implementation PATTERNS only.

## Communication style
During implementation:
- Give short progress updates.
- Say what has been changed.
- Mention whether changes are local only or already pushed online.
- Provide the local preview URL when running.
- Provide the GitHub Pages URL after deployment.
- Never ask the user to manually perform a step that can safely be completed through an already-authorized terminal/tool unless there is a genuine reason.

## When to use this skill
Use this skill when the user says or implies:
- “pasa este PDF a Bootstrap”
- “haz este menú responsive”
- “convierte esta carta en web”
- “hazlo desde esta imagen”
- “quiero este menú online”
- “publícalo en GitHub Pages”
- “hazlo como el PDF pero responsive”
- “crea una carta digital”
- “toma este Canva/PDF y conviértelo a HTML”

## Final principle
The finished site should feel like the restaurant’s original menu was intentionally DESIGNED for the web—not like a PDF was merely displayed inside a browser.

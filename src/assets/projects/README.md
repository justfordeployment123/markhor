# Portfolio thumbnails

Generated with the built-in imagegen tool using screenshots of the corresponding public homepages as visual references. These are generated editorial device mockups, not photographs of the clients' offices or equipment.

Captured and generated on 2026-09-29. Runtime assets are local WebP files; the site does not depend on remote thumbnail services.

| Project | Source website | Main asset | Small asset |
| --- | --- | --- | --- |
| ExplainMyLetter | https://explainmyletter.co.uk/ | `explainmyletter.webp` | `explainmyletter-640.webp` |
| Enhancia | https://enhancia.ai/ | `enhancia.webp` | `enhancia-640.webp` |
| RE/MAX Hub | https://remaxhub.ae/ | `remax-hub.webp` | `remax-hub-640.webp` |

Main variants are 1280 pixels wide; small variants are 640 pixels wide. Encoded with cwebp quality 88 and 84 respectively. Cards use an 8:5 crop, responsive srcset, lazy loading, and asynchronous decoding. Full-resolution generation originals remain in the imagegen output directory.

## ExplainMyLetter prompt

```text
Use case: product-mockup.
Asset type: finished landscape portfolio project thumbnail for ExplainMyLetter, 1536x1024, edge-to-edge.
Input image 1: actual ExplainMyLetter website screenshot, a reference for the precise website branding and screen design, not the output composition.
Create a premium, convincingly photographed web-design case-study thumbnail. A slim graphite laptop, open on a warm ivory paper-textured desk, in a carefully composed close three-quarter view with a very slight overhead angle. The laptop fills about 78% of the image width, with its screen clearly visible. One cream envelope and the edge of a printed letter rest casually beside the laptop; no people. Soft natural window light from the upper left, genuine contact shadows, subtle metal grain, fine paper fibres, restrained editorial colour grading. Backdrop is a muted pale seafoam studio wall, quiet and beautiful.
Laptop screen: reproduce the referenced ExplainMyLetter homepage faithfully with white navigation strip, original readable ExplainMyLetter wordmark, deep dark teal main surface, turquoise accent and its short headline “Confusing Letter?” and “Let's Break it Down.”, with the two before/after document cards underneath. Preserve the website's actual identity. Text that is small may be naturally reduced by photographic scale, never invent prominent gibberish. Use the reference screen straight, legible, with correct perspective and no warped corners. Screen should look like a real crisp display with only subtle reflection.
Composition: thoughtful agency portfolio art direction, large strong product silhouette, keep the full laptop inside the central 90% of the frame and screen inside central 80%; image should read beautifully at a 400px thumbnail width and be crop-safe to 8:5. A little clean upper-left breathing room for a small HTML project label, no extra text outside screen.
Must feel like a professional product photograph from a real design studio. No floating UI cards, no levitating devices, no neon lighting, no holograms, no plastic-looking CGI, no abstract blobs, no excessive depth blur, no watermark, no added slogans. This is a standalone thumbnail, not a collage or a page layout.
```

## Enhancia prompt

```text
Use case: product-mockup.
Asset type: finished landscape portfolio project thumbnail for Enhancia.ai, 1536x1024, edge-to-edge.
Input image 1 is the actual Enhancia homepage; use it as the precise reference for the website shown on the screen, not the output composition.
Photograph a beautifully minimal property-marketing creative workspace. A large, thin-bezel graphite desktop monitor with a refined brushed-metal pedestal sits firmly on a pale ash desk. Close nearly frontal camera angle, only a slight three-quarter perspective, so the entire screen is prominent, wide and readable, taking up 78% of image width. A neatly stacked pair of small unbranded architectural material samples in pale oak and linen rests at the desk edge; a compact wireless keyboard partly visible below the monitor. Cool soft natural daylight from a large off-frame window, subtle genuine contact shadows, tactile plaster background in muted slate blue-gray. Authentic architectural-design magazine product photography, restrained colour grading, sharp precise real-world materials, no exaggerated glow or artificial sheen.
The monitor faithfully displays the referenced website: deep midnight-navy interface, cyan Enhancia wordmark and accent, strong white headline on left “Better Photos. Better Words.” followed by cyan “Better Listings.”, and the real photographic living-room before/after comparison on the right. Preserve the reference's visual hierarchy and screen composition. Show the top nav and main hero, not the below-fold quick-links section. Main lettering must be correct and clean; small screen details naturally scaled down. Do not invent dashboards, change the company name, add badges, or show a generic unrelated interface.
Keep all of the screen and stand inside central 90% of frame, crop-safe to 8:5; make a strong beautiful thumbnail at 400px wide. Leave a little quiet upper-left margin for an HTML project label. No people, no extra text outside display, no levitation, no floating UI, no neon lighting, no abstract blobs, no plastic CGI, no decorative AI symbols, no watermark. A single believable photograph, carefully art directed for an award-winning web studio portfolio.
```

## RE/MAX Hub prompt

```text
Use case: product-mockup.
Asset type: finished landscape portfolio project thumbnail for RE/MAX Hub, 1536x1024, edge-to-edge.
Input image 1 is the actual RE/MAX Hub Dubai homepage; use it as the precise screen-design reference, not the output composition.
Create an exceptionally polished, completely believable product photograph of a slim dark graphite tablet in landscape orientation, supported on its real dark brown leather folding folio on a light travertine table in an understated Dubai architectural studio. View nearly straight toward the screen, slightly from above and at a modest three-quarter angle. The tablet and folio occupy about 83% of the frame width, centred, with screen content clear. At the far edge of frame a closed cream architectural notebook, otherwise uncluttered. Warm late-afternoon window light, soft shadows from window mullions, real porous travertine, natural fine leather grain, subtle honest reflections on the glass. Quiet taupe wall and a softly out-of-focus sliver of warm city architecture behind, no fantasy skyline. Visually rich but restrained, professional property brand editorial photography.
On screen faithfully reproduce the referenced RE/MAX Hub website: white navigation bar with original RE/MAX Hub logo on left and blue contact button, the warm gold-and-brown penthouse photograph with the couple seen from behind against the Dubai skyline, original large white serif headline “Dubai property, without the guesswork.” and amber calls to action. Reproduce the actual website accurately. Remove the cookie banner and floating WhatsApp button from the depicted website. Correct rectangular screen geometry, no distorted UI. No invented property listings, prices or sales badges.
Keep the complete tablet display and its corners within the central 90% of image, crop-safe to 8:5. A little quiet space at upper-left for a small HTML project label. Must read beautifully at 400px thumbnail size. No text outside display, no floating objects, no glowing UI, no futuristic elements, no impossible architecture, no plastic CGI, no lens flare, no watermark. This is a single real-looking photograph for a refined web-development case study.
```

# Hero refinement — 2026-09-18

The header now sits over the landscape photograph. The upper-right Google rating card and lower-right location card follow the reference composition. Glass surfaces use backdrop blur, translucent tint, inset highlights, a gradient rim and a pointer-following reflection. Reduced-motion preferences disable the moving reflection.

The former polygon border is replaced with a generated, photorealistic botanical foreground: detailed leaves, soft shadows and an irregular white edge. The generated texture is an illustration asset, not a photograph of Shira's work.

## Rating source

The public Google reviews widget on https://www.shiralandscaping.com/ displayed **5.0 from 5 reviews**, checked on 2026-09-18. This is a manually verified snapshot, configured in `lib/business-rating.ts`, not a live Google API integration. The card links to the source website. The separate testimonials integration remains pending.

## Image generation

- Tool: built-in image generation.
- Original: `public/landscapes/botanical-edge.png` (transparent PNG).
- Delivered asset: `public/landscapes/botanical-edge.png` (2172 × 724, alpha transparency). It is rendered at its native 3:1 proportion and never stretched. On narrow screens the sides are cropped to preserve leaf detail.
- Asset is decorative and hidden from assistive technology.

Prompt:

> Create a photorealistic compositing asset for a premium garden website: one very wide horizontal organic white paper/botanical transition with actual transparent alpha background. Ratio 3:1, 1536x512. The upper approximately 65% is genuinely TRANSPARENT, not black, not white, no checkerboard. The bottom approximately 25% is solid warm white #f8f9f5 and runs flush to left, right, and bottom canvas edges, so it seamlessly blends into a white webpage. Its upper boundary is a natural irregular silhouette: clustered tiny rounded boxwood leaf shapes and torn cotton paper fibers, uneven hills and dips with fine realistic organic detail, NOT triangles, NOT sawtooth, NOT repetitive waves. At the left edge crossing the boundary, a photographic little sprig of 3 fresh green laurel leaves angled upward and inward. At about 65 percent width one delicate pair of green leaves crossing the boundary. Detailed veins, translucent sunlit leaf edges, tactile plant realism, soft small natural shadows falling only onto the white paper. Wide spacious composition, most of the border remains white organic contour, not a dense hedge, no whole garden, no text, no logos, no frame. This is an isolated transparent foreground overlay asset, never a complete website mockup.

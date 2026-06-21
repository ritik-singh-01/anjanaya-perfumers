# Adding a hawan / tikka / ritual video to the site

## Why it can't be generated on this machine
This laptop has **Intel Iris Xe graphics (2 GB shared, no NVIDIA GPU)** and 16 GB RAM.
The open-source video models below need a **CUDA NVIDIA GPU**, so they cannot run on *this*
laptop. But your **other laptop has an RTX 3070 (8 GB) — that one can run them.** See the
RTX section next.

## ⭐ On your RTX 3070 laptop (8 GB VRAM) — do this tomorrow
An RTX 3070 comfortably runs the lighter video models. Easiest setup:

1. **Install a runner (one-time):**
   - Easiest: **Pinokio** (https://pinokio.computer) — one-click installs ComfyUI + video models, or
   - **ComfyUI Desktop** (https://www.comfy.org/) — official Windows installer.
2. **Pick a model that fits 8 GB:**
   - **LTX-Video** — *recommended*: fast and 8 GB-friendly. In ComfyUI: `Workflow → Browse Templates → LTX-Video`.
   - **Stable Video Diffusion** — simplest **image-to-video** (animate one still photo) on 8 GB.
   - **Wan 2.2 (GGUF Q4)** — best quality on 8 GB but slower; install via ComfyUI Manager, run with `--lowvram`.
3. **Use image-to-video from a REAL hawan/tikka photo** — most realistic *and* authentic.
4. Generate a **5–10 s** clip (~720p on 8 GB), then **Export → MP4**.
   - Tip: if you hit out-of-memory, launch ComfyUI with `--lowvram` and keep clips short.

Then follow "Go live" below to put the MP4 on the site.

---

## Best open-source video models (GitHub)
- **LTX-Video** — fastest, lowest VRAM, great for iteration: https://github.com/Lightricks/LTX-Video
- **Wan 2.2** — most photorealistic, best for people: https://github.com/Wan-Video/Wan2.2
- **HunyuanVideo** — best physics (fire, smoke, cloth): https://github.com/Tencent-Hunyuan/HunyuanVideo
- **CogVideoX** — efficient on moderate GPUs: https://github.com/THUDM/CogVideo

## Option A — Free, on a cloud GPU (recommended for open-source)
Open **Google Colab** (free T4 GPU) and run **LTX-Video**'s notebook (linked in its repo).
Use **image-to-video** from a real reference photo → download the `.mp4`.

## Option B — Hosted, no setup (cents per clip)
Run the SAME open models on **fal.ai** (https://fal.ai) or **Replicate** (https://replicate.com).
Search "Wan 2.2" or "LTX-Video", upload a reference photo (image-to-video), ~$0.05–0.50/clip.

## Option C — Real footage (most trustworthy for a faith brand)
A 10–20 second phone clip of an actual hawan or tikka. Authentic, free, no AI artifacts.

## Prompts for the clips (copy-paste)
Best results: **image-to-video** from a real reference photo — the prompt then guides the
motion/mood. Generate several 5–8 s clips and we'll sequence them into a montage.

**1. Hawan — offering samagri**
> Cinematic close-up of devout hands offering hawan samagri into a sacred fire in a copper
> havan kund, golden flames flickering, thin fragrant smoke rising slowly, marigold flowers
> and a brass diya beside it, warm soft morning light, shallow depth of field, gentle slow
> motion, photorealistic, 4k.

**2. Hawan — flames & smoke**
> Macro shot of a sacred hawan fire, glowing embers and amber flames rising, delicate smoke
> curling upward against a softly blurred temple background, marigold petals, warm cinematic
> lighting, slow graceful motion, photorealistic.

**3. Tikka — roli/kumkum**
> Serene close-up of a thumb gently applying a red roli/kumkum tilak to a calm person's
> forehead, soft natural window light, a brass aarti thali with diya blurred behind,
> respectful devotional mood, subtle motion, cinematic, photorealistic.

**4. Chandan tilak — detail**
> Close-up of fingers applying smooth sandalwood (chandan) tilak in a vertical line on a
> forehead, fine texture, soft warm light, peaceful, shallow depth of field, gentle motion,
> photorealistic.

**5. Attar (your product)**
> Elegant close-up of a hand tilting a small glass attar bottle, a single golden drop of
> attar oil on a fingertip, soft studio light, warm bokeh, slow refined motion, luxury
> fragrance feel, photorealistic.

**6. Diya / pooja ambient**
> Close-up of a brass oil diya flame flickering gently in a dim temple, soft incense smoke
> drifting, marigold garland blurred behind, warm golden glow, calm slow motion, photorealistic.

**Negative prompt (use on every clip):**
> deformed hands, extra fingers, missing fingers, mutated limbs, distorted face, blurry, low
> quality, jpeg artifacts, watermark, text, captions, logo, cartoon, anime, plastic,
> oversaturated, harsh flicker, warped objects, duplicated objects, glitch.

**Settings (RTX 3070 / 8 GB):** 5–8 s, ~24 fps, 720p (e.g. 1280×704); camera = "static" or
"slow push-in"; generate 2–3 takes per prompt and keep the best. Use the **same reference
photo style/lighting** across clips so the montage flows. Review every clip for hand/face/fire
artifacts before using.

## Go live (already wired)
**Getting the clip from the RTX laptop to here:** if that laptop is signed into the same
OneDrive, just save the MP4 into
`…/OneDrive/Desktop/Practise/anjanaya-perfumers/public/videos/ritual.mp4` — it syncs to this
machine automatically. (Otherwise copy via USB / Google Drive, or send it to me.)

1. Save the clip to `public/videos/ritual.mp4`
2. In `src/app/page.tsx`, set `videoSrc="/videos/ritual.mp4"` on the **"Devotion in motion"**
   `<VideoShowcase>` band (right after `<CategoryGrid />`).
3. Commit + push → it autoplays on the home carousel.
   (Or just send the `.mp4` and I'll wire it in.)

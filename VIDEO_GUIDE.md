# Adding a hawan / tikka / ritual video to the site

## Why it can't be generated on this machine
This laptop has **Intel Iris Xe graphics (2 GB shared, no NVIDIA GPU)** and 16 GB RAM.
The open-source video models below need a **CUDA NVIDIA GPU with ~12–80 GB VRAM**, so they
cannot run locally here. Produce the clip one of the three ways below, then drop it in
(the site side is already wired — see "Go live").

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

## Image-to-video prompt templates
- **Hawan:** "Close-up of hands offering samagri into a sacred hawan fire, warm flickering
  flames, rising smoke, marigold flowers, soft morning light, cinematic, shallow depth of
  field, slow motion, photorealistic."
- **Tikka:** "Gentle close-up of a thumb applying red tilak / chandan tikka to a forehead,
  soft natural light, serene and respectful, cinematic, photorealistic."

Keep clips 5–10 s, review for hand/face/fire artifacts, and prefer image-to-video from a
real photo for the most realistic, authentic result.

## Go live (already wired)
1. Save the clip to `public/videos/ritual.mp4`
2. In `src/app/page.tsx`, set `videoSrc="/videos/ritual.mp4"` on the **"Devotion in motion"**
   `<VideoShowcase>` band (right after `<CategoryGrid />`).
3. Commit + push → it autoplays on the home carousel.
   (Or just send the `.mp4` and I'll wire it in.)

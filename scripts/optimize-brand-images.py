"""Create responsive WebP copies; keep original brand files unchanged.

Run with Python and Pillow: python scripts/optimize-brand-images.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = [
    ("public/brand/tironi-symbol.png", [128, 256, 512, 1024], True),
    ("public/brand/chatbo/chatbo-composition.png", [480, 960, 1440], False),
    ("public/brand/chatbo/chatbo-panel.png", [480, 960, 1440], False),
    ("public/brand/chatbo/chatbo-interface.webp", [480, 960, 1380], False),
]

for name, widths, lossless in ASSETS:
    source = ROOT / name
    with Image.open(source) as original:
        for width in widths:
            if width > original.width:
                continue
            height = round(original.height * width / original.width)
            resized = original.resize((width, height), Image.Resampling.LANCZOS)
            target = source.with_name(f"{source.stem}-{width}.webp")
            resized.save(target, "WEBP", lossless=lossless, quality=88, method=6)
            print(f"{target.relative_to(ROOT)}: {width}x{height}, {target.stat().st_size} bytes")

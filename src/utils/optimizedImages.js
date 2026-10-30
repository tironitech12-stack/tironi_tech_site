const brandImages = {
  '/brand/tironi-symbol.png': { base: '/brand/tironi-symbol', widths: [128, 256, 512, 1024], width: 1024, height: 1024 },
  '/brand/chatbo/chatbo-composition.png': { base: '/brand/chatbo/chatbo-composition', widths: [480, 960, 1440], width: 1672, height: 941 },
  '/brand/chatbo/chatbo-panel.png': { base: '/brand/chatbo/chatbo-panel', widths: [480, 960, 1440], width: 1672, height: 941 },
  '/brand/chatbo/chatbo-interface.webp': { base: '/brand/chatbo/chatbo-interface', widths: [480, 960, 1380], width: 1380, height: 777 },
};

export function getOptimizedImageAttributes(path, { sizes = '(max-width: 900px) 100vw, 46vw' } = {}) {
  const asset = brandImages[path];
  if (!asset) return { src: path };
  const defaultWidth = asset.widths.find((width) => width >= 960) || asset.widths.at(-1);
  return {
    src: `${asset.base}-${defaultWidth}.webp`,
    srcSet: asset.widths.map((width) => `${asset.base}-${width}.webp ${width}w`).join(', '),
    sizes,
    width: asset.width,
    height: asset.height,
  };
}

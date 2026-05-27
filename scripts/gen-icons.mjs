import sharp from "sharp";

const SOURCE = "public/new-icon.png";

// Standard PWA icons
for (const size of [192, 512]) {
  await sharp(SOURCE)
    .resize(size, size, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(`public/icon-${size}-v2.png`);
  console.log(`✓ icon-${size}-v2.png`);
}

// Apple touch icon at 180x180
await sharp(SOURCE)
  .resize(180, 180, { fit: "cover" })
  .png({ compressionLevel: 9 })
  .toFile("public/apple-touch-icon.png");
console.log("✓ apple-touch-icon.png");

// Favicon for browser tabs
await sharp(SOURCE)
  .resize(32, 32, { fit: "cover" })
  .png({ compressionLevel: 9 })
  .toFile("public/favicon-32.png");
console.log("✓ favicon-32.png");

// Share image for og:image / social previews
await sharp(SOURCE)
  .resize(1200, 1200, { fit: "cover" })
  .png({ compressionLevel: 9 })
  .toFile("public/og-image.png");
console.log("✓ og-image.png");

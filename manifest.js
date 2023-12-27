const manifest = {
  short_name: "My App",
  name: "My App",
  description: "My App",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  start_url: "/",
  display: "standalone",
  prefer_related_applications: false,
  icons: [
    {
      src: "tmp/favicon.ico",
      sizes: "16x16",
      type: "image/x-icon",
      purpose: "any maskable",
    },
    {
      src: "tmp/favicon_32x32.png",
      sizes: "32x32",
      type: "image/png",
      purpose: "any maskable",
    },
    {
      src: "tmp/favicon_96x96.png",
      sizes: "96x96",
      type: "image/png",
      purpose: "any maskable",
    },
    {
      src: "tmp/favicon_180x180.png",
      sizes: "180x180",
      type: "image/png",
      purpose: "any maskable",
    },
    {
      src: "tmp/favicon_512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};

exports.manifest = manifest;

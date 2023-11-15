export const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "To Do List App",
    short_name: "To Do",
    description:"An app designed to create a To Do list",
    icons: [
      {
        src: "/logo192.png",
        size: "192x192",
        type: "image/png",
      },
      {
        src: "/logo512.png",
        size: "512x512",
        type: "image/png",
      },
      {
        src: "/maskable_icon.png",
        size: "255x255",
        type: "image/png",
        purpose: "any maskable"
      },
    ],
    theme_color: "#171717",
    background_color: "#E8EBF2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  }
}
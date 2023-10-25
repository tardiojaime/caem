const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../docs",
    assetsDir: "assets", // Ruta relativa a outDir
  },
  server: {
    port: 8080,
  },
};

const path = require("path");

export default {
  base: './',
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../docs",
    assetsDir: "assets", // Ruta relativa a outDir
    rollupOptions: {
      input:{
        main: 'src/index.html',
        invitacion: 'src/invitacion.html'
      }
    }
  },
  server: {
    port: 8080,
  },
};
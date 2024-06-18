import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";
// import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
const _plugins = [
  MillionLint.vite(),
  react(),
  tsconfigPaths(),
  // Allows using self-signed certificates to run the dev server using HTTPS.
  // https://www.npmjs.com/package/@vitejs/plugin-basic-ssl
  // basicSsl(),
];

export default defineConfig({
  base: "/coin-go/",
  plugins: _plugins,
  publicDir: "./public",
  server: {
    // Uncomment this line if you want to expose your dev server and access it from the devices
    // in the same network.
    // host: true,
  },
});

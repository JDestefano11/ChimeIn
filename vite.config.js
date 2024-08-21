export default defineConfig({
  plugins: [react()],
  base: '/ChimeIn/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});

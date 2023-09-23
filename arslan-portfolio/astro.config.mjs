import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { motion } from 'framer-motion';

export default defineConfig({
  integrations: [tailwind(),],
});


import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import { createReadStream, stat } from 'fs';

const MIME: Record<string, string> = {
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.webp': 'image/webp',
	'.gif': 'image/gif'
};

const serveResources = () => ({
	name: 'serve-resources',
	configureServer(server: import('vite').ViteDevServer) {
		server.middlewares.use('/resources', (req, res, next) => {
			const filePath = path.join(path.resolve('../resources'), req.url ?? '');
			stat(filePath, (err, s) => {
				if (err || !s.isFile()) return next();
				const ext = path.extname(filePath).toLowerCase();
				res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream');
				createReadStream(filePath).pipe(res);
			});
		});
	}
});

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), serveResources()]
});

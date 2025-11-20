// server.ts - Simple Next.js Server
import next from 'next';
import { createServer } from 'http';

const dev = process.env.NODE_ENV !== 'production';
const currentPort = 0; // Using 0 to let the system assign an available port
const hostname = 'localhost'; // Using localhost for better compatibility

async function createSimpleServer() {
  try {
    // Create Next.js app
    const nextApp = next({ 
      dev,
      dir: process.cwd(),
      // In production, use the current directory where .next is located
      conf: dev ? undefined : { distDir: './.next' }
    });

    await nextApp.prepare();
    const handle = nextApp.getRequestHandler();

    // Create HTTP server
    const server = createServer((req, res) => {
      handle(req, res);
    });

    // Start the server
    server.listen(currentPort, hostname, () => {
      const address = server.address();
      if (typeof address === 'object' && address !== null) {
        console.log(`> Ready on http://${hostname}:${address.port}`);
      } else {
        console.log(`> Ready on http://${hostname}:${currentPort}`);
      }
    });

  } catch (err) {
    console.error('Server startup error:', err);
    process.exit(1);
  }
}

// Start the server
createSimpleServer();
# Hosting Guide: Next.js Application on MilesWeb.com

This guide provides step-by-step instructions for deploying your Next.js application with custom server and SQLite database on MilesWeb.com without errors.

## Application Overview

- **Framework**: Next.js 15 with TypeScript
- **Database**: SQLite (Prisma ORM)
- **Server**: Custom Node.js server with Socket.IO
- **Build Tool**: Next.js standalone build
- **Port**: 3000 (default)

## Prerequisites

1. MilesWeb hosting account with Node.js support (version 18 or higher)
2. SSH access or cPanel file manager access
3. Domain name configured in cPanel
4. Basic understanding of terminal commands

## Deployment Steps

### 1. Prepare Your Application for Production

Before uploading, ensure your application is ready for production:

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Build the Next.js application
npm run build
```

### 2. Configure Environment Variables

Create a `.env.production` file in your project root with the correct database path:

```env
DATABASE_URL="file:./prod.db"
NODE_ENV=production
```

### 3. Upload Files to MilesWeb

You have two options for uploading files:

#### Option A: Using cPanel File Manager
1. Compress your entire project folder into a ZIP file
2. Log in to cPanel and navigate to File Manager
3. Go to your domain's root directory (usually `public_html/yourdomain.com`)
4. Upload the ZIP file
5. Extract the contents

#### Option B: Using SFTP/SSH
1. Connect to your MilesWeb account using an SFTP client
2. Navigate to your domain's root directory
3. Upload all project files maintaining the directory structure

### 4. Install Dependencies on Server

Connect via SSH and run:

```bash
# Navigate to your project directory
cd /home/yourusername/public_html/yourdomain.com

# Install production dependencies
npm install --production
```

### 5. Set Up the Database

```bash
# Generate Prisma client
npx prisma generate

# Create and initialize the production database
npx prisma db push
```

### 6. Configure MilesWeb Node.js Application

In cPanel, navigate to the "Setup Node.js App" section:

1. Click "Create Application"
2. Set the following parameters:
   - **Node.js version**: 18 or higher
   - **Application mode**: Production
   - **Application root**: `/home/yourusername/public_html/yourdomain.com`
   - **Application URL**: `/` (or your preferred subdirectory)
   - **Application startup file**: `server.ts`

3. Click "Create"

### 7. Configure Passenger (if required)

If your MilesWeb hosting uses Passenger, create a `passenger.js` file in your project root:

```javascript
const { spawn } = require('child_process');

// Set the port as expected by Passenger
process.env.PORT = process.env.PORT || 3000;

// Start the application
const app = spawn('npx', ['tsx', 'server.ts'], {
  cwd: __dirname,
  stdio: ['pipe', 'pipe', 'pipe', 'ipc']
});

app.stdout.on('data', (data) => {
  process.stdout.write(data);
});

app.stderr.on('data', (data) => {
  process.stderr.write(data);
});

app.on('close', (code) => {
  process.exit(code);
});
```

### 8. Update Start Script

Modify your `package.json` start script to work with MilesWeb:

```json
{
  "scripts": {
    "start": "NODE_ENV=production tsx server.ts"
  }
}
```

### 9. Configure Domain and Subdomain (if needed)

1. In cPanel, go to "Subdomains" if you're using a subdomain
2. Create or configure your subdomain to point to your application directory
3. Ensure DNS settings are properly configured

### 10. Set Up Process Management

For better process management, consider using PM2. Install it globally:

```bash
npm install -g pm2
```

Then create a `ecosystem.config.js` file:

```javascript
module.exports = {
  apps: [{
    name: 'nextjs-app',
    script: 'server.ts',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

Start your application with:

```bash
pm2 start ecosystem.config.js
```

## Important Configuration Notes

### 1. Port Configuration
MilesWeb typically assigns a port dynamically. Update your `server.ts` to handle this:

```javascript
const currentPort = process.env.PORT || 3000;
const hostname = process.env.HOST || '0.0.0.0';
```

### 2. Database Path
Ensure your SQLite database file has proper permissions:

```bash
chmod 666 prisma/prod.db
```

### 3. Static Assets
Next.js serves static assets automatically, but ensure your `public` directory is properly uploaded.

### 4. Environment Variables
Set environment variables in your MilesWeb application configuration:
- `NODE_ENV=production`
- `DATABASE_URL=file:./prod.db`

## Troubleshooting Common Issues

### 1. Application Not Starting
- Check error logs in cPanel
- Ensure all dependencies are installed
- Verify Node.js version compatibility

### 2. Database Connection Issues
- Check database file permissions
- Verify `DATABASE_URL` in environment variables
- Ensure Prisma client is generated

### 3. Port Already in Use
- Change the port in `server.ts` or use the port assigned by MilesWeb
- Kill any existing processes using the port

### 4. Build Errors
- Ensure TypeScript and build dependencies are installed
- Check for syntax errors in your code
- Verify Prisma schema is correct

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to version control
2. **Database**: Ensure proper file permissions on your SQLite database
3. **HTTPS**: Configure SSL certificate through cPanel for secure connections
4. **CORS**: Review Socket.IO CORS configuration for production

## Performance Optimization

1. **Caching**: Implement proper caching headers
2. **Compression**: Enable gzip compression
3. **CDN**: Consider using a CDN for static assets
4. **Monitoring**: Set up application monitoring and logging

## Maintenance

1. **Backups**: Regularly backup your database file
2. **Updates**: Keep dependencies updated
3. **Monitoring**: Monitor application logs for errors
4. **Scaling**: Consider upgrading your hosting plan as traffic grows

## Support

If you encounter issues:
1. Check MilesWeb knowledge base
2. Contact MilesWeb support
3. Review application logs
4. Verify all configuration steps were followed

---

**Note**: This guide assumes you have a standard MilesWeb hosting account. Some configurations may vary depending on your specific hosting plan and server setup.

# Hosting on Miles Web and Vercel

This guide provides instructions for deploying your Next.js application to Miles Web hosting platform or Vercel.

## Key Changes Made for Hosting Compatibility

1. **Logo Path Resolution**: 
   - Replaced all regular `<img>` tags with Next.js `<Image>` components for proper static asset handling
   - This ensures logos and images work correctly when deployed to subdirectories or root domains

2. **File Naming Consistency**:
   - Renamed `logo.PNG` to `logo.png` for case-sensitive hosting platforms like Vercel
   - Ensured all asset references use correct case

3. **Static Asset Handling**:
   - All images are now properly handled by Next.js Image component which automatically resolves paths
   - This fixes the issue where the main logo wasn't appearing when hosted on Miles Web or Vercel

## Deployment Steps

### For Vercel:
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js project and configure the build settings
3. No additional configuration is needed

### For Miles Web:
1. **Build the Application**:
   ```bash
   npm run build
   ```

2. **Upload Files**:
   - Upload the contents of the `.next/standalone` directory to your Miles Web hosting
   - Also upload the `public` directory to maintain static assets

3. **Server Configuration**:
   - Ensure your hosting environment supports Node.js applications
   - Point your domain to the server.js file that was generated during the build process

## Troubleshooting

### Logo Not Appearing
If you encounter issues with logos not appearing:

1. Ensure you're using Next.js Image component instead of regular img tags:
   ```jsx
   import Image from 'next/image'
   
   // Correct approach
   <Image
     src="/logo.png"
     alt="ASCENDVERSE"
     width={300}
     height={100}
     className="w-full h-auto object-contain"
   />
   ```

2. Check file naming - ensure all asset files use lowercase extensions for compatibility with case-sensitive hosting platforms

3. Make sure all static assets are in the `public` directory

### Path Issues
Next.js automatically handles path resolution when using:
- `next/image` for images
- `next/link` for internal navigation
- Static files placed in the `public` directory

## Contact Information

For any issues or questions regarding hosting, contact:
- Email: reach@ascendverse.com
- Phone: +1 (555) 123-4567

© 2025 ASCENDVERSE. All rights reserved.

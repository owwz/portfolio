# Portfolio Website with Admin Panel

A modern, responsive portfolio website with an easy-to-use admin panel featuring automatic content saving.

## ✨ Features

- **Auto-Save Admin Panel**: Changes are automatically saved to the server - no manual file uploads needed!
- **Interactive Project Modals**: Click any project to view detailed information
- **Client Logo Rotation**: Automatic rotating display of client logos
- **Skill Tag Animation**: Rotating skills showcase in the About section
- **Fully Responsive**: Beautiful design on desktop, tablet, and mobile
- **SEO Optimized**: Complete meta tags for search engines and social sharing
- **Dynamic Content**: All content managed through JSON - no code editing required

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

### 3. Access Your Portfolio

- **Portfolio**: http://localhost:3000/index.html
- **Admin Panel**: http://localhost:3000/admin.html

### 4. Edit Content

1. Open the admin panel at http://localhost:3000/admin.html
2. Click "🔄 Load Existing Data" to load current content
3. Edit any content in the tabs (Content, Projects, Clients, etc.)
4. Click "💾 Update & Save Changes" button
5. Refresh your portfolio page to see updates instantly!

## 📁 Project Structure

```
/
├── server.js               # Node.js server (handles auto-save)
├── package.json            # Dependencies
├── index.html              # Your portfolio website
├── admin.html              # Admin panel
├── data/
│   └── site-content.json   # Auto-saved content (don't edit manually)
├── images/
│   ├── projects/           # Project showcase images
│   │   ├── 01.webp
│   │   ├── 02.webp
│   │   └── ...
│   ├── clients/            # Client logos
│   │   ├── holm.svg
│   │   ├── wise.svg
│   │   └── ...
│   └── profile.svg         # Profile image
└── fonts/ (optional)
    └── PPNeueMontreal-Book.woff2
```

## 📝 Admin Panel Guide

### Content Tab
- Header name and logo
- Main heading and description
- Call-to-action buttons
- Mindset section paragraphs

### Projects Tab
- Project name
- Image path (e.g., `images/projects/01.webp`)
- Project description
- Technologies used (comma-separated)
- Your roles (comma-separated)
- Project link (optional)

### Clients Tab
- 4 rotating slots with 3 clients each
- Client name and logo path
- Automatic 3-5 second rotation

### About Tab
- Profile image
- Biography paragraphs
- Skills (one per line)

## 🎨 Adding Images

### Project Images
1. Add images to `images/projects/`
2. Recommended format: WebP (smaller file size)
3. Recommended size: 800-1200px width
4. Use descriptive names: `banking-app.webp`, `ecommerce.webp`

### Client Logos
1. Add logos to `images/clients/`
2. Recommended format: SVG (scales perfectly)
3. Keep logos simple and clean
4. Transparent background recommended

## 💾 Backup & Restore

### Create Backup
Click the "📥 Download Backup" button in the admin panel to download a JSON backup of all your content.

### Restore from Backup
1. Click "🔄 Load Existing Data" in the admin panel
2. The system will load content from `data/site-content.json`
3. Make any edits needed
4. Click "💾 Update & Save Changes"

## 🌐 Deployment

### Option 1: Node.js Hosting (Recommended)

1. Upload all files to your server
2. Install dependencies: `npm install`
3. Start the server: `npm start` or use PM2 for production
4. Access your portfolio at your domain

### Option 2: Static Hosting (GitHub Pages, Netlify, etc.)

1. Use the admin panel locally to edit content
2. Click "📥 Download Backup" to get the JSON file
3. Upload all files to your hosting service
4. Content updates require re-uploading the JSON file

## 🔧 Configuration

### Port Configuration
Edit `server.js` to change the port:

```javascript
const PORT = process.env.PORT || 3000;
```

### Domain Configuration
Update meta tags in `index.html` for SEO:

```html
<meta property="og:url" content="https://yourdomain.com">
<link rel="canonical" href="https://yourdomain.com">
```

## 🛠️ Development

### Run in Development Mode with Auto-Restart

```bash
npm run dev
```

This uses nodemon to automatically restart the server when files change.

## 📊 Technologies Used

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express
- **Data Format**: JSON
- **Image Format**: WebP, SVG
- **Styling**: Custom CSS (no frameworks)

## 🐛 Troubleshooting

### Changes Not Saving?
- Make sure the server is running (`npm start`)
- Check the browser console for errors
- Verify you're accessing admin panel through the server (http://localhost:3000/admin.html)

### Images Not Showing?
- Check file paths are relative: `images/projects/01.webp`
- Verify images exist in the correct folders
- Check file permissions on the server

### Port Already in Use?
- Change the PORT in server.js
- Or kill the process using port 3000:
  ```bash
  lsof -ti:3000 | xargs kill
  ```

## 📄 License

MIT License - Feel free to use and modify for your own portfolio!

## 🤝 Support

For issues or questions, check the Setup tab in the admin panel for detailed instructions.

---

Built with ❤️ by Geio Tischler

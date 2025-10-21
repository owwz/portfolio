# Portfolio - Quick Start

## 🚀 One-Command Setup

Just copy and paste these commands in your terminal:

```bash
cd /Users/geio/portfolio
./start.sh
```

That's it! The script will automatically:
1. ✅ Pull the latest code from GitHub
2. ✅ Install all dependencies
3. ✅ Start the server

---

## If You Get "Permission Denied"

Run this first:
```bash
chmod +x start.sh
./start.sh
```

---

## Manual Setup (Alternative)

If you prefer to run commands manually:

```bash
# Navigate to portfolio
cd /Users/geio/portfolio

# Pull latest changes
git fetch origin
git checkout claude/continue-development-011CUL29hjp4VB4Bqa5eWj8P
git pull origin claude/continue-development-011CUL29hjp4VB4Bqa5eWj8P

# Install dependencies
npm install

# Start server
npm start
```

---

## After Server Starts

Open these URLs in your browser:

**Portfolio:** http://localhost:3000/index.html
- View your beautiful portfolio
- See smooth scroll animations
- Click projects for detailed modals

**Admin Panel:** http://localhost:3000/admin.html
- Edit all content
- Auto-save to server
- Download backups

---

## Stop the Server

Press `Ctrl + C` in the terminal

---

## Troubleshooting

**"Port 3000 already in use"**
```bash
lsof -ti:3000 | xargs kill
./start.sh
```

**"Git conflicts"**
```bash
git stash
./start.sh
```

**"npm not found"**
Install Node.js from: https://nodejs.org/

---

## File Locations

- **Content:** `data/site-content.json`
- **Projects:** `images/projects/`
- **Clients:** `images/clients/`
- **Server:** `server.js`
- **Portfolio:** `index.html`
- **Admin:** `admin.html`

---

## Features Included

✅ Auto-save admin panel
✅ Scroll reveal animations
✅ Gradual blur effect
✅ Project modals
✅ Client logo rotation
✅ Skill tag rotation
✅ Fully responsive design
✅ SEO optimized

---

Made with ❤️ by Claude Code

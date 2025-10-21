#!/bin/bash

# Portfolio Auto-Setup Script
# This script does everything for you!

echo ""
echo "╔═══════════════════════════════════════════════════════╗"
echo "║                                                       ║"
echo "║   🚀 Portfolio Auto-Setup                             ║"
echo "║                                                       ║"
echo "╔═══════════════════════════════════════════════════════╗"
echo ""

# Step 1: Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "   Please run this script from the portfolio directory"
    exit 1
fi

echo "✓ Found portfolio directory"

# Step 2: Pull latest changes
echo ""
echo "📥 Pulling latest changes from GitHub..."
git fetch origin
git checkout claude/continue-development-011CUL29hjp4VB4Bqa5eWj8P
git pull origin claude/continue-development-011CUL29hjp4VB4Bqa5eWj8P

if [ $? -eq 0 ]; then
    echo "✓ Latest code downloaded"
else
    echo "⚠️  Git pull had issues, but continuing..."
fi

# Step 3: Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✓ Dependencies installed"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Step 4: Start the server
echo ""
echo "╔═══════════════════════════════════════════════════════╗"
echo "║                                                       ║"
echo "║   ✨ Setup Complete! Starting server...               ║"
echo "║                                                       ║"
echo "╔═══════════════════════════════════════════════════════╗"
echo ""

npm start

const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('.'));

// API endpoint to save site content
app.post('/api/save-content', async (req, res) => {
    try {
        const content = req.body;

        // Validate the content has required structure
        if (!content.header || !content.content || !content.projects) {
            return res.status(400).json({
                success: false,
                error: 'Invalid content structure'
            });
        }

        // Save to data/site-content.json
        const filePath = path.join(__dirname, 'data', 'site-content.json');
        await fs.writeFile(filePath, JSON.stringify(content, null, 2), 'utf8');

        console.log('Content saved successfully at:', new Date().toISOString());

        res.json({
            success: true,
            message: 'Content saved successfully!',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error saving content:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to save content: ' + error.message
        });
    }
});

// API endpoint to get current content
app.get('/api/get-content', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data', 'site-content.json');
        const content = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(content));
    } catch (error) {
        console.error('Error reading content:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to read content: ' + error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   Portfolio Server Running                           ║
║                                                       ║
║   🌐 Server:     http://localhost:${PORT}              ║
║   📝 Portfolio:  http://localhost:${PORT}/index.html   ║
║   ⚙️  Admin:      http://localhost:${PORT}/admin.html  ║
║                                                       ║
║   Press Ctrl+C to stop                                ║
║                                                       ║
╔═══════════════════════════════════════════════════════╗
    `);
});

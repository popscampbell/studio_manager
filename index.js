const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Venue Management API');
});

// Endpoint to fetch all venues
app.get('/api/venues', (req, res) => {
    res.json([{ venue_id: 1, name: 'The Blue Stage', address: '123 Main St', city: 'Redmond', email: 'info@bluestage.com', phone: '555-1234', capacity: 500, acoustic_features: 'Great acoustics' }]);
});

// Listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

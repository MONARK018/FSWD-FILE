import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
    const logEntry = `${new Date().toISOString()} - IP: ${req.ip}\n`;
    fs.appendFile('visits.log', logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
        next(); 
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Express Server</h1><p>Try <a href="/products">/products</a> for product data.</p>');
});

app.get('/logs', (req, res) => {
    fs.readFile('visits.log', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Could not read log file' });
        }
        const logs = data.trim().split('\n').map(entry => {
            const [timestamp, ip] = entry.split(' - IP: ');
            return { timestamp, ip };
        });
        res.json(logs);
    });
});

const products = [
    { id: 1, name: 'Laptop', category: 'electronics' },
    { id: 2, name: 'Phone', category: 'electronics' },
    { id: 3, name: 'Table', category: 'furniture' }
];

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    const { category } = req.query;
    if (category) {
        return res.json(products.filter(product => product.category === category));
    }
    res.json(products);
});

productRouter.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
});

app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});

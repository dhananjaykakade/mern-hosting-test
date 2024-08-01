const express = require('express')
const app = express()
const PORT = 7001
const cors = require('cors');

app.get("/",(req,res) => {
  res.json({message:"Route host check from server"}).status(200)
})

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
  }));
  app.get('/api/data', (req, res) => {
    res.json({ message: 'This is CORS-enabled for all origins!' });
  });

app.listen(PORT,() => {
  console.log(`----------------------
    server is running on :http://localhost:${PORT}
    -----------------------------`)
    
})
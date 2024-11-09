const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// app.get("/test", (req, res) => {
//     res.send("Hello!")
// })

connectDB();

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

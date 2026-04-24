const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const checkoutRoutes = require('./routes/checkoutRoutes')
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const subscribeRoutes = require('./routes/subscribeRoutes')
const adminRoutes = require('./routes/adminRoutes')
const productAdminRoutes = require('./routes/productAdminRoutes')
const adminOrderRoutes = require('./routes/adminOrderRoutes')


const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    "https://rabbit-peach-five.vercel.app",
    "http://localhost:5173"
  ],
  credentials: true,
}));






const PORT = process.env.PORT || 3000;


// Connect to MongoDB 


connectDB();




// API Routes

app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/checkout",checkoutRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/upload",uploadRoutes);
app.use("/api",subscribeRoutes);


//Admin Routes

app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);
 



app.use("/",(req,res)=>{

res.send('WELCOME TO RABBIT API!');


});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


module.exports = app;

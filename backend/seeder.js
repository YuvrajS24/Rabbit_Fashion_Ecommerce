const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product.js')
const User = require('./models/User.js')
const Cart = require('./models/Cart.js')
const products = require('./data/product.js')

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany();


        // Create a default admin User
        const createUser = await User.create({
            name: 'Admin User',
            email: 'admin@example.com',
            password: '123456',
            role: "admin"
        });


        // Assign the default user Id to each Product
        const userId = createUser._id;

        const sampleProduct = products.map((product) => {
            return {...product, user: userId};
        });

        // Insert the products into the database

        await Product.insertMany(sampleProduct);
        console.log('Data seeded successfully');
        process.exit();
    } catch (error) {
        console.error("error in seeding error: ", error);
        process.exit(1);
    }
};

seedData();
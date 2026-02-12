# 🐰 Rabbit - Modern E-Commerce Platform

A full-stack e-commerce application built with the MERN stack, featuring a beautiful UI, comprehensive admin dashboard, and seamless shopping experience.

![Project Banner](./screenshots/banner.png)

## 🌟 Live Demo

- **Frontend:** [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
- **Backend API:** [https://your-backend.vercel.app](https://your-backend.vercel.app)

---

## 📸 Screenshots

### 🏠 Homepage
![Homepage](./screenshots/homepage.png)
*Beautiful landing page with featured products and collections*

### 🛍️ Product Collection
![Product Collection](./screenshots/collection.png)
*Browse products with advanced filtering options*

### 📦 Product Details
![Product Details](./screenshots/product-details.png)
*Detailed product view with image gallery and variant selection*

### 🛒 Shopping Cart
![Shopping Cart](./screenshots/cart.png)
*Seamless cart experience with quantity management*

### 💳 Checkout
![Checkout](./screenshots/checkout.png)
*Secure checkout with PayPal integration*

### 👤 User Dashboard
![User Profile](./screenshots/profile.png)
*User profile and order management*

### 📋 Order History
![Orders](./screenshots/orders.png)
*Track all your orders in one place*

### 🔐 Authentication
![Login](./screenshots/login.png)
*Secure login and registration*

### ⚙️ Admin Dashboard
![Admin Dashboard](./screenshots/admin-dashboard.png)
*Comprehensive admin panel for managing the store*

### 📊 Product Management
![Product Management](./screenshots/admin-products.png)
*Full CRUD operations for products*

### 👥 User Management
![User Management](./screenshots/admin-users.png)
*Manage users and permissions*

### 📦 Order Management
![Order Management](./screenshots/admin-orders.png)
*Track and manage all orders*

---

## ✨ Features

### 👨‍💼 Customer Features
- 🔍 **Advanced Product Search** - Search by name, category, and filters
- 🎨 **Smart Filtering** - Filter by size, color, brand, material, price range, and gender
- 📱 **Responsive Design** - Seamless experience across all devices
- 🛒 **Shopping Cart** - Add, remove, and update product quantities
- 💳 **Secure Checkout** - PayPal integration for payments
- 👤 **User Authentication** - JWT-based secure login and registration
- 📦 **Order Tracking** - View order history and status
- 💼 **User Profile** - Manage account details
- ⭐ **Product Collections** - Browse Men's, Women's, and featured collections
- 🆕 **New Arrivals** - Stay updated with latest products
- 🏆 **Best Sellers** - Discover popular products

### 🔧 Admin Features
- 📊 **Admin Dashboard** - Overview of orders, users, and products
- 🛍️ **Product Management** - Full CRUD operations (Create, Read, Update, Delete)
- 👥 **User Management** - View and manage all users
- 📦 **Order Management** - Track and update order statuses
- 🖼️ **Image Upload** - Multiple product images support
- 🏷️ **Product Variants** - Manage sizes, colors, and materials
- 📈 **Inventory Management** - Track stock levels
- 🎯 **Featured Products** - Mark products as featured
- ✅ **Publish Control** - Control product visibility

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Redux Toolkit** - State management
- **React Router v6** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Deployment
- **Vercel** - Frontend & Backend hosting
- **MongoDB Atlas** - Cloud database

---

## 📁 Project Structure

```
ecommerce_copy/
│
├── frontend/                  # React frontend
│   ├── src/
│   │   ├── assets/           # Images and static files
│   │   ├── components/       # Reusable components
│   │   │   ├── Admin/        # Admin-specific components
│   │   │   ├── Cart/         # Shopping cart components
│   │   │   ├── Common/       # Shared components (Header, Footer, etc.)
│   │   │   ├── Layout/       # Layout components
│   │   │   └── Products/     # Product-related components
│   │   ├── pages/            # Page components
│   │   ├── redux/            # Redux store and slices
│   │   │   └── slices/       # Redux state slices
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── index.html
│   └── vercel.json           # Vercel config
│
└── backend/                   # Express backend
    ├── config/               # Configuration files
    │   └── db.js            # Database connection
    ├── models/               # Mongoose models
    │   ├── User.js
    │   ├── Product.js
    │   ├── Order.js
    │   ├── Cart.js
    │   ├── Checkout.js
    │   └── Subscriber.js
    ├── routes/               # API routes
    │   ├── userRoutes.js
    │   ├── productRoutes.js
    │   ├── cartRoutes.js
    │   ├── checkoutRoutes.js
    │   ├── orderRoutes.js
    │   ├── adminRoutes.js
    │   ├── adminOrderRoutes.js
    │   ├── productAdminRoutes.js
    │   ├── uploadRoutes.js
    │   └── subscribeRoutes.js
    ├── middleware/           # Custom middleware
    │   └── authMiddleware.js # JWT authentication
    ├── data/                 # Seed data
    ├── server.js             # Express app
    ├── seeder.js             # Database seeder
    └── vercel.json           # Vercel config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/rabbit-ecommerce.git
cd rabbit-ecommerce
```

2. **Setup Backend**
```bash
cd backend
npm install

# Create .env file
touch .env
```

Add to `.env`:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
PORT=3000
NODE_ENV=development
```

3. **Setup Frontend**
```bash
cd ../frontend
npm install

# Create .env file
touch .env
```

Add to `.env`:
```env
VITE_BACKEND_URL=http://localhost:3000
```

4. **Seed Database (Optional)**
```bash
cd backend
node seeder.js
```

5. **Run Development Servers**

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173` 🎉

---

## 🌐 Deployment

### Deploy to Vercel

#### Backend Deployment

1. **Push backend to GitHub**
2. **Import to Vercel**
3. **Set Environment Variables:**
   - `MONGO_URI` - MongoDB connection string
   - `JWT_SECRET` - JWT secret key
   - `NODE_ENV` - production

4. **Deploy!**

#### Frontend Deployment

1. **Push frontend to GitHub**
2. **Import to Vercel**
3. **Set Environment Variables:**
   - `VITE_BACKEND_URL` - Your backend Vercel URL (https://your-backend.vercel.app)

4. **Deploy!**

### MongoDB Atlas Setup

1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user
3. **Whitelist IP:** Add `0.0.0.0/0` in Network Access
4. Get connection string
5. Add to Vercel environment variables

---

## 🔑 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_key_here
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### Frontend (.env)
```env
VITE_BACKEND_URL=https://your-backend.vercel.app
```

---

## 📡 API Endpoints

### Authentication
```
POST   /api/users/register     # Register new user
POST   /api/users/login        # Login user
GET    /api/users/profile      # Get user profile (Protected)
PUT    /api/users/profile      # Update user profile (Protected)
```

### Products
```
GET    /api/products                    # Get all products (with filters)
GET    /api/products/:id                # Get single product
GET    /api/products/new-arrivals       # Get new arrivals
GET    /api/products/best-seller        # Get best seller
GET    /api/products/similar/:id        # Get similar products
POST   /api/products                    # Create product (Admin)
PUT    /api/products/:id                # Update product (Admin)
DELETE /api/products/:id                # Delete product (Admin)
```

### Cart
```
GET    /api/cart              # Get user cart (Protected)
POST   /api/cart              # Add to cart (Protected)
PUT    /api/cart/:id          # Update cart item (Protected)
DELETE /api/cart/:id          # Remove from cart (Protected)
```

### Orders
```
GET    /api/orders            # Get user orders (Protected)
GET    /api/orders/:id        # Get order details (Protected)
POST   /api/orders            # Create order (Protected)
```

### Admin
```
GET    /api/admin/users       # Get all users (Admin)
GET    /api/admin/orders      # Get all orders (Admin)
PUT    /api/admin/orders/:id  # Update order status (Admin)
DELETE /api/admin/users/:id   # Delete user (Admin)
```

---

## 🎨 Color Scheme

```css
Primary: #FF6B6B (Coral Red)
Secondary: #4ECDC4 (Turquoise)
Accent: #FFE66D (Yellow)
Dark: #1A1A1D
Light: #F7F7F7
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourlinkedin](https://linkedin.com/in/yourlinkedin)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by modern e-commerce platforms
- Built with ❤️ using MERN Stack

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/rabbit-ecommerce?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/rabbit-ecommerce?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/rabbit-ecommerce)
![GitHub license](https://img.shields.io/github/license/yourusername/rabbit-ecommerce)

---

## 🐛 Known Issues

- [ ] PayPal sandbox mode only (production integration pending)
- [ ] Email notifications not yet implemented
- [ ] Product reviews feature in development

---

## 🔮 Future Enhancements

- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Social media integration
- [ ] Advanced analytics dashboard
- [ ] Multi-currency support
- [ ] Coupon/discount codes
- [ ] Live chat support
- [ ] Product recommendations AI

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with 💜 by **Your Name**

</div>

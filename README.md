# TechMart E-commerce Platform

A full-stack e-commerce platform built with modern technologies including Vite.js, React, Tailwind CSS, Node.js, Express, and MongoDB.

![TechMart Demo](./demo-screenshot.png)

## 🚀 Features

### Frontend

- **Modern UI/UX**: Built with React and Tailwind CSS
- **Responsive Design**: Mobile-first approach
- **Product Catalog**: Browse, search, and filter products
- **Shopping Cart**: Add/remove items with real-time updates
- **User Authentication**: Register, login, password recovery
- **User Dashboard**: Profile management, order history
- **Admin Dashboard**: Complete admin panel with analytics
- **Real-time Notifications**: Toast notifications for user actions

### Backend

- **RESTful API**: Built with Node.js and Express
- **MongoDB Database**: Scalable NoSQL database
- **JWT Authentication**: Secure token-based authentication
- **Image Upload**: Cloudinary integration for product images
- **Email Service**: Nodemailer for transactional emails
- **Payment Processing**: Stripe integration (ready)
- **Rate Limiting**: Protection against abuse
- **Data Validation**: Comprehensive input validation

### Admin Features

- **Dashboard Analytics**: Sales, revenue, user statistics
- **Product Management**: CRUD operations for products
- **Order Management**: View and update order status
- **User Management**: Manage customer accounts
- **Inventory Tracking**: Stock level monitoring
- **Reports**: Sales and performance reports

## 🛠️ Tech Stack

### Frontend

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **React Query**: Data fetching and caching
- **Zustand**: State management
- **React Hook Form**: Form handling
- **Framer Motion**: Animations
- **Recharts**: Data visualization
- **Axios**: HTTP client

### Backend

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **Bcrypt**: Password hashing
- **Multer**: File upload handling
- **Cloudinary**: Image storage and optimization
- **Nodemailer**: Email sending
- **Express Validator**: Input validation
- **Helmet**: Security middleware

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/techmart-ecommerce.git
cd techmart-ecommerce
```

### 2. Install dependencies

```bash
# Install root dependencies
npm run install-deps

# Or install manually
npm install
cd client && npm install
cd ../server && npm install
```

### 3. Environment Setup

#### Server Environment

```bash
cd server
cp .env.example .env
# Edit .env with your configuration
```

#### Client Environment

```bash
cd client
# Create .env file
echo "VITE_API_URL=http://localhost:5000/api" > .env
```

### 4. Database Setup

```bash
# Make sure MongoDB is running
# If using local MongoDB:
mongod

# The application will create the database automatically
# Optional: Seed with sample data
cd server
npm run seed
```

### 5. Start the application

```bash
# From root directory - starts both client and server
npm run dev

# Or start separately:
# Terminal 1 - Server
cd server && npm run dev

# Terminal 2 - Client
cd client && npm run dev
```

### 6. Access the application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 🔧 Configuration

### Environment Variables

#### Server (.env)

```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/techmart
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
```

#### Client (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

### Default Admin Account

After running the seed script, you can log in with:

- **Email**: admin@techmart.com
- **Password**: admin123

## 📁 Project Structure

```
techmart-ecommerce/
├── client/                     # Frontend application
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── services/        # API services
│   │   └── utils/           # Utility functions
│   └── package.json
├── server/                    # Backend application
│   ├── controllers/          # Route controllers
│   ├── middleware/          # Custom middleware
│   ├── models/             # Database models
│   ├── routes/            # API routes
│   ├── utils/            # Utility functions
│   └── package.json
└── package.json             # Root package.json
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the client

```bash
cd client
npm run build
```

2. Deploy the `dist` folder to your hosting service

### Backend (Railway/Heroku/DigitalOcean)

1. Set environment variables on your hosting service
2. Deploy the `server` directory
3. Ensure MongoDB connection string is correct

### Database

- **Development**: Local MongoDB
- **Production**: MongoDB Atlas (recommended)

## 🧪 Testing

```bash
# Run frontend tests
cd client
npm run test

# Run backend tests
cd server
npm run test
```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/update-profile` - Update user profile
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Product Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Order Endpoints

- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/status` - Update order status (Admin)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - _Initial work_ - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the flexible database solution
- All the open-source libraries that made this project possible

## 📞 Support

If you have any questions or need help with setup, please open an issue or contact:

- **Email**: support@techmart.com
- **Documentation**: [Wiki](https://github.com/yourusername/techmart-ecommerce/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/techmart-ecommerce/issues)

---

**Happy Coding! 🚀**

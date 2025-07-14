# URL Shortener

A URL shortener service built with Node.js, TypeScript, Express, MongoDB, and Redis.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **URL Redirection**: Fast redirection to original URLs
- **Analytics**: Track click statistics and analytics for shortened URLs
- **Caching**: Redis integration for improved performance
- **Rate Limiting**: Built-in rate limiting for API protection
- **Background Jobs**: Automated cleanup and maintenance tasks
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Cache**: Redis with ioredis
- **ID Generation**: NanoID for generating short URL keys
- **Job Scheduling**: node-cron for background tasks
- **Development**: Nodemon for hot reloading

## 📁 Project Structure

```
src/
├── app.ts              # Express app configuration
├── server.ts           # Server entry point
├── config/             # Configuration files
│   ├── config.ts       # Environment configuration
│   ├── db.ts           # Database connection
│   └── redis.ts        # Redis connection
├── controllers/        # Route controllers
│   ├── analytics.controller.ts
│   └── url.controller.ts
├── middlewares/        # Custom middlewares
├── models/             # MongoDB models
├── routes/             # API routes
│   ├── analytics.routes.ts
│   └── url.routes.ts
├── services/           # Business logic services
├── utils/              # Utility functions
└── jobs/               # Background job definitions
```

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/KishorBalgi/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   DOMAIN=http://localhost:5000

   # Database
   MONGO_URL=mongodb://localhost:27017/url-shortener

   # Redis
   REDIS_URL=redis://localhost:6379

   # Machine ID for distributed systems
   MACHINE_ID=DEV
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the TypeScript project
- `npm start` - Start the production server

## 🔧 Configuration

The application uses environment variables for configuration. See the `.env` example above for required variables.

### Key Configuration Options:

- **PORT**: Server port (default: 5000)
- **MONGO_URL**: MongoDB connection string
- **REDIS_URL**: Redis connection string
- **DOMAIN**: Base domain for shortened URLs
- **MACHINE_ID**: Unique identifier for distributed deployments

## 🚀 Deployment

### Docker (Recommended)

1. **Build the image**

   ```bash
   docker build -t url-shortener .
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

### Traditional Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Start the server**
   ```bash
   npm start
   ```

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Kishor Balgi**

- GitHub: [@KishorBalgi](https://github.com/KishorBalgi)

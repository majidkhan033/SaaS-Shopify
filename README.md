# ShopPulse - a SaaS-Shopify app

# E-Commerce Dashboard with Shopify Integration

This project is a full-stack MERN application that provides a real-time dashboard for viewing Shopify store orders and user authentication functionality. The app is built using **React**, **Node.js/Express**, and **MongoDB**. The dashboard integrates with the **Shopify API** to display real-time order data.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration system using JWT tokens and bcrypt for password hashing.
- **Shopify API Integration**: Real-time data fetching from Shopify for orders, displaying detailed insights on the dashboard.
- **Dashboard**: A dynamic and interactive dashboard built with React, allowing users to view real-time order data and statistics.
- **MongoDB Integration**: Storing user data securely in a MongoDB database.
- **Responsive Design**: Optimized for both desktop and mobile views.

## Technologies

### Frontend:
- React.js
- Redux
- CSS (with modular structure in `App.css`)
- Socket.io (for real-time updates)

### Backend:
- Node.js / Express
- MongoDB (for database management)
- JWT (for authentication)
- Shopify API (for order data)
- Bcrypt (for password hashing)

## Setup Instructions

### Prerequisites:
- Node.js installed (v14+ recommended)
- MongoDB server (local or MongoDB Atlas)
- Shopify API credentials (API Key, Secret, etc.)
- Git installed (optional)

### Steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/majidkhan033/SaaS-Shopify
   cd SaaS-Shopify
   ```

2. **Install dependencies**:
   For both the frontend and backend, install the necessary dependencies:
   ```bash
   # Backend setup
   cd server
   npm install

   # Frontend setup
   cd ../client
   npm install
   ```

3. **Set up environment variables**:  
   In the root of the project, create `.env` files for both frontend and backend:

   - **Backend (`backend/.env`)**:
     ```plaintext
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     SHOPIFY_API_KEY=your_shopify_api_key
     SHOPIFY_API_SECRET=your_shopify_api_secret
     ```

   - **Frontend (`frontend/.env`)**:
     ```plaintext
     REACT_APP_BACKEND_URL=http://localhost:5000
     ```

4. **Run the project**:
   - **Backend**: 
     ```bash
     cd server
     npm start
     ```
   - **Frontend**: 
     ```bash
     cd client
     npm start
     ```

5. **Access the app**:  
   Navigate to `http://localhost:3000` in your browser.

## Usage

Once the app is running, users can:

- Register and log in to their accounts.
- Access the dashboard to view real-time Shopify orders.
- Monitor order details such as Total orders, Total sales, Conversion rate.

## Environment Variables

Make sure to configure the following environment variables:

- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for signing JWT tokens.
- `SHOPIFY_API_KEY` and `SHOPIFY_API_SECRET`: Shopify credentials for API access.

## API Endpoints

### Authentication

- **POST /api/auth/register**  
  Registers a new user.  
  **Body**: `firstname`,`lastname`, `email`, `password`, `password2`

- **POST /api/auth/login**  
  Logs in a user and returns a JWT token.  
  **Body**: `email`, `password`

### Shopify Orders

- **GET /api/orders**  
  Fetches real-time orders from the Shopify store.

## Project Structure

```plaintext
.
├── frontend
│   ├── public
│   └── src
│       ├── components
|            |──assets
│       ├── App.js
│       ├── App.css
│       └── index.js
├── backend
│   ├── config
|   ├── controllers
│   ├── middleware
│   ├── model
│   ├── app.js
│   └── .env
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust the project details as per your specific setup!
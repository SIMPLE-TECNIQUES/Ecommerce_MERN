# E-Commerce Website (MERN Stack)

This is a **Full-Stack E-Commerce Website** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The project is designed with three parts:

- **Client**: The user-facing side of the website where customers browse products and make purchases.
- **Admin**: The admin dashboard for managing products, orders, and users.
- **Backend**: The server-side logic for handling requests, user authentication, and managing the database.

The project is deployed on GitHub and updated with different changes to ensure a seamless shopping experience.

## Features

- **Client Features:**
  - Browse and filter products.
  - Add products to the shopping cart.
  - User authentication and registration.
  - Checkout and order tracking.

- **Admin Features:**
  - Manage product listings (Add, Edit, Delete).
  - View and manage customer orders.
  - Manage user roles and permissions.

- **Backend Features:**
  - Secure user authentication using JWT.
  - Manage and store user data, products, and orders.
  - Handle all HTTP requests from the frontend.

---

## Tech Stack

### Frontend:
- **React.js** for building the user interface and managing state.
- **React Router** for client-side routing.
- **Axios** for making HTTP requests.

### Admin:
- **React.js** for the admin dashboard interface.
- **React Router** for navigation within the admin section.
- **Axios** for interacting with the backend.

### Backend:
- **Node.js** with **Express.js** for building RESTful APIs.
- **MongoDB** with **Mongoose** for managing product and user data.
- **JWT (JSON Web Tokens)** for authentication.
---

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/ecommerce-website.git
cd ecommerce-website
```

### 2. Install dependencies for both Client and Backend:
```bash
# For Client
cd client
npm install
cd ..

# For Admin
cd admin
npm install
cd ..

# For Backend
cd backend
npm install
cd ..
```

### 3. Set up environment variables for the backend:
Create a `.env` file in the `backend` folder and add the following configuration:
```env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
CLOUDINARY_URL=your-cloudinary-url
```

### 4. Run the Development Servers:
To run both the frontend (Client and Admin) and the backend server simultaneously:
```bash
# For Backend
cd backend
npm start

# For Client
cd client
npm start

# For Admin
cd admin
npm start
```

Now the Client is accessible on `http://localhost:3000`, Admin on `http://localhost:3001`, and the backend is running on `http://localhost:5000`.

---

## Usage

1. **Client**: The client side of the website allows users to browse products, add them to the cart, and place orders.
2. **Admin**: The admin dashboard allows authorized users to manage products and view orders.
3. **Backend**: The backend handles all data management, including user authentication, product CRUD operations, and order processing.

---

## Project Structure

```
ecommerce-website/
├── client/          # Frontend code for the user interface
│   ├── public/      # Static assets
│   ├── src/         # React components, pages, and routing
│   └── package.json # Frontend dependencies
├── admin/           # Admin dashboard code
│   ├── public/      # Static assets
│   ├── src/         # React components, pages, and routing for admin
│   └── package.json # Admin dependencies
├── backend/         # Backend server and API code
│   ├── models/      # MongoDB models (products, users, orders)
│   ├── routes/      # Express.js routes for API endpoints
│   ├── controllers/ # Logic for handling requests
│   └── package.json # Backend dependencies
├── .gitignore       # Files and folders to ignore by Git
├── README.md        # Project documentation
└── .env.example     # Example environment variables
```

---
## Contributions

Feel free to fork the repository and submit pull requests for any improvements. You can also open issues for bugs or feature requests.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added a new feature"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request from your fork to the main repository.

---

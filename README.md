# 🏠 Easy Bookings – Rental Property Listing Platform

## 📅 Project Duration:
**October 2024 – November 2024**

## 📌 Overview
**Easy Bookings** is a full-stack rental property listing platform designed to simplify property rentals for both guests and hosts. Built using **Express.js**, **MongoDB**, **EJS**, and **JavaScript**, the application allows users to browse properties, make bookings, leave reviews, and interact with hosts — all within a secure and responsive environment.

## 🎯 Features
- 🏘️ Users can **list rental properties** with images, prices, and details  
- 📆 Guests can **book stays** and view upcoming reservations  
- ⭐ Ability to **write and manage reviews** for booked properties  
- 👥 **Role-based access control**:  
  - Only **owners** can edit or delete their listings  
  - Only **reviewers** can delete their own reviews  
- 📱 **Responsive UI** built with EJS and Bootstrap  
- 🔐 Secure routes and validation for authenticated actions  
- 📂 MongoDB for structured data storage and retrieval  

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, Bootstrap, JavaScript  
- **Database:** MongoDB with Mongoose  
- **Authentication:** Express-session, bcrypt (optional if used)  
- **Templating Engine:** EJS  

## 🚀 How It Works
1. **Users Register/Login** to access platform features  
2. **Hosts List Properties** with name, location, price, and description  
3. **Guests Browse Listings** and make bookings  
4. **Guests Leave Reviews** after a stay  
5. **Role Management** ensures only authorized users can edit or delete content  
6. **Mobile-Responsive UI** provides seamless interaction across devices  


## 💻 Installation

### 1. Clone the repository
```sh
git clone https://github.com/yourusername/easy-bookings.git
cd easy-bookings

npm install

MONGO_URI=your_mongo_connection_string
SESSION_SECRET=your_secret_key
PORT=3000

npm start



---






🧠 Use Cases
Vacation rental listings

Hostel or apartment booking systems

Airbnb-like MVP clone

Role-based content management platforms

📌 Future Enhancements
Add payment integration (e.g., Stripe)

Implement message/chat system between users

Add map integration for property locations

Admin dashboard for platform management

🙌 Acknowledgements
Express.js

MongoDB

EJS

Bootstrap

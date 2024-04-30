# ChatX: Worldwide Chat Application
ChatX is a versatile chat application that enables users to connect and chat with people worldwide. With seamless integration of Gmail and GitHub login via NextAuth, ChatX ensures a secure and hassle-free authentication process. Powered by Pusher and MongoDB, ChatX provides real-time messaging capabilities and stores user data and messages efficiently.

## Features
- [x] Global Connectivity: Connect and chat with users worldwide, breaking geographical barriers.
- [x] Secure Login: Log in securely using your Gmail or GitHub credentials via NextAuth.
- [x] Real-time Messaging: Enjoy instant messaging with real-time updates powered by Pusher.
- [x] Database Integration: Store user data and messages efficiently using MongoDB.

## Getting Started
To get started with ChatX, follow these steps:

- [x] Clone the ChatX repository to your local machine:

git clone https://github.com/yourusername/chatx.git
- [x] Install dependencies:

npm install
- [x] Set up environment variables:

Create a .env file in the root directory.

Add your Pusher API credentials:

NEXTAUTH_URL=http://localhost:3000

PUSHER_APP_ID=your_pusher_app_id

PUSHER_KEY=your_pusher_key

PUSHER_SECRET=your_pusher_secret

Add your MongoDB connection string:

MONGODB_URI=your_mongodb_connection_string

- [x] Run the application:

npm run dev

Access ChatX in your browser at http://localhost:3000.

## Technologies Used
- [x] Next.js: Frontend framework for building React applications.
- [x] NextAuth: Authentication library for Next.js applications, enabling Gmail and GitHub login.
- [x] Pusher: Real-time messaging API for enabling instant messaging functionality.
- [x] MongoDB: NoSQL database for storing user data and messages efficiently.

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. Feel free to use and modify this project for your own purposes.

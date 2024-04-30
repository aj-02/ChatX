
# ChatX: Worldwide Chat Application

ChatX is a versatile chat application that enables users to connect and chat with people worldwide. With seamless integration of Gmail and GitHub login via NextAuth, ChatX ensures a secure and hassle-free authentication process. Powered by Pusher and MongoDB, ChatX provides real-time messaging capabilities and stores user data and messages efficiently.

## Features

- **Global Connectivity:** Connect and chat with users worldwide, breaking geographical barriers.
- **Secure Login:** Log in securely using your Gmail or GitHub credentials via NextAuth.
- **Real-time Messaging:** Enjoy instant messaging with real-time updates powered by Pusher.
- **Database Integration:** Store user data and messages efficiently using MongoDB.

## Screenshots

Here are some screenshots of ChatX in action:

### Login Page
![Login Page](https://example.com/login.png)

### Register Page
![Register Page](https://example.com/register.png)

### Users Page
![Users Page](https://example.com/users.png)

### Chats Page
![Chats Page](https://example.com/chats.png)

## Getting Started

To get started with ChatX, follow these steps:

1. Clone the ChatX repository to your local machine:

- git clone https://github.com/yourusername/chatx.git


2. Install dependencies:

- npm install


3. Set up environment variables:

- Create a `.env` file in the root directory.
- Add your Pusher API credentials:

  ```
  NEXTAUTH_URL=http://localhost:3000
  PUSHER_APP_ID=your_pusher_app_id
  PUSHER_KEY=your_pusher_key
  PUSHER_SECRET=your_pusher_secret
  ```

- Add your MongoDB connection string:

  ```
  MONGODB_URI=your_mongodb_connection_string
  ```

4. Run the application:

npm run dev


5. Access ChatX in your browser at `http://localhost:3000`.

## Technologies Used

- **Next.js:** Frontend framework for building React applications.
- **NextAuth:** Authentication library for Next.js applications, enabling Gmail and GitHub login.
- **Pusher:** Real-time messaging API for enabling instant messaging functionality.
- **MongoDB:** NoSQL database for storing user data and messages efficiently.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify this project for your own purposes.


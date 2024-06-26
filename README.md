
# ChatX: Worldwide Chat Application

ChatX is a versatile chat application that enables users to connect and chat with people worldwide. With seamless **integration of Gmail and GitHub login via NextAuth**, ChatX ensures a secure and hassle-free authentication process. **Powered by Pusher and MongoDB**, ChatX provides real-time messaging capabilities and stores user data and messages efficiently.

## Features

- **Global Connectivity:** Connect and chat with users worldwide, breaking geographical barriers.
- **Secure Login:** Log in securely using your Gmail or GitHub credentials via NextAuth.
- **Real-time Messaging:** Enjoy instant messaging with real-time updates powered by Pusher.
- **Database Integration:** Store user data and messages efficiently using MongoDB.

## Screenshots

Here are some screenshots of ChatX in action:


### Login Page
![login](https://github.com/aj-02/ChatX/assets/82252072/48d092f6-80e9-4eec-b272-99b7e1d886ab)

### Register Page
![image](https://github.com/aj-02/ChatX/assets/82252072/1bc848d1-d433-4d51-885f-bddcbdffa9cd)

### Users Page
![image](https://github.com/aj-02/ChatX/assets/82252072/74dd2f5d-5dee-4771-b4eb-b36187cd636e)

### Chats Page
![image](https://github.com/aj-02/ChatX/assets/82252072/88a5750e-f5af-4351-8e98-02a48007ea72)

## Getting Started

To get started with ChatX, follow these steps:

1. Clone the ChatX repository to your local machine:

- git clone https://github.com/AJ-02/chatx.git


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


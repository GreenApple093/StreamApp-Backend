
# StreamApp Backend

Welcome to the **StreamApp** backend! 🎉 This repo holds the magic behind the scenes for real-time video streaming, user management, and all the awesome features we've cooked up. Built with the powerful combo of **Node.js**, **Express.js**, and **MongoDB**, it's a solid foundation for streaming experiences.

This is a project we've both dived into headfirst, hustling and learning along the way. It's been an adventure, and we're excited to keep building it out. 🙌

## Installation

Let’s get this thing running on your machine!

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/StreamApp-backend.git
   cd StreamApp-backend
   ```

2. **Install dependencies** (aka the boring part):
   Make sure you’ve got [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) up and running. Then:
   ```bash
   npm install
   ```

3. **Set up environment variables** (aka secret sauce time):
   Create a `.env` file in the root directory and toss in the following:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   STREAM_API_KEY=your_streaming_api_key
   STREAM_API_SECRET=your_streaming_api_secret
   ```

4. **Start the dev server**:
   ```bash
   npm run dev
   ```
   Boom! 🎉 The backend will be live on `http://localhost:5000`.

## Usage

### Running Locally
Now that the server is up, feel free to test out the API using [Postman](https://www.postman.com/) or connect your frontend.

### Running in Production
When you're ready to show the world, switch over to production mode with:
```bash
npm start
```
Don’t forget to update those env variables to match your prod environment!

## Features

- **User Authentication**: JWT-based login/registration to keep things secure and smooth.
- **Real-Time Chat**: Talk to your viewers in real-time (coming soon, maybe).
- **User Profiles**: Upload avatars, update your details—flex your profile! 😎
- **Video Metadata**: Manage all the cool info about your streams like titles and descriptions.

## API Endpoints

Here's the rundown of our core endpoints:

### Authentication
- `POST /api/auth/register` - Register new users
- `POST /api/auth/login` - User login (token-based authentication)

### User
- `GET /api/users` - Fetch all users
- `GET /api/users/:id` - Fetch a user by ID
- `PUT /api/users/:id` - Update a user’s profile

### Stream
- `POST /api/streams` - Create a stream
- `GET /api/streams` - Get all streams
- `GET /api/streams/:id` - Fetch stream by ID
- `PUT /api/streams/:id` - Update stream info
- `DELETE /api/streams/:id` - Delete a stream

### Chat (if applicable)
- `POST /api/chat` - Send messages during a stream
- `GET /api/chat/:streamId` - Fetch chat messages for a specific stream

## Technologies

Here’s the tech stack we used to bring this to life:

- **Backend Framework**: [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) to handle user and stream data
- **Authentication**: JWT for secure token-based authentication
- **Cloud Storage**: Integrated with Cloudinary for file uploads like avatars and cover images
- **File Uploads**: [Multer](https://www.npmjs.com/package/multer) to handle the uploads
- **Security**: [Bcrypt](https://www.npmjs.com/package/bcrypt) to hash passwords (because we don’t play when it comes to security) 🔒

## Contributing

Want to help out? Fork the repo, make some magic happen, and then open a pull request. Let's make this project even better together!

## License

This project is licensed under the MIT License. Feel free to check the [LICENSE](LICENSE) file for more details.

---

Big thanks to everyone who’s been part of this journey so far. This project’s just getting started, and we’re super pumped for what’s next. Let’s keep building, learning, and having fun. 💪🚀
```

This version has a friendly, informal tone and gives credit to the collaborative efforts. Let me know if you'd like to tweak anything further!

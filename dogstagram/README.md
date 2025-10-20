# Dogstagram

Dogstagram is a social media application for dog lovers to share their favorite moments with their furry friends. Users can create accounts, post photos, like and comment on posts, and interact with other dog enthusiasts.

## Features

- User authentication and account management
- Post photos of dogs with captions
- Like and comment on posts
- Responsive design for mobile and desktop

## Project Structure

```
dogstagram
├── src
│   ├── client
│   │   ├── index.html        # Main HTML document
│   │   ├── style.css         # Styles for the app
│   │   └── script.js         # Client-side JavaScript
│   ├── server
│   │   ├── data
│   │   │   ├── posts.json    # Data for user posts
│   │   │   └── users.json    # User data
│   │   ├── app.js            # Main server file
│   │   └── upload.js         # File upload handling
├── public
│   └── uploads               # Directory for uploaded images
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dogstagram
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- Create an account to start posting.
- Upload photos of your dogs and share them with the community.
- Like and comment on other users' posts to engage with fellow dog lovers.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
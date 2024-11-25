## Real Time Chat Application with Socket.io
A basic real-time chat application built with Socket.io and Express that features live typing indicators and user activity detection.

### Project structure
```
server/
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── index.js
└── package.json
```
### Prerequisites

Node.js installed on your machine
npm (Node Package Manager)

### Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to the server directory

``` cd your-repo-name/server```

3. Install dependencies:

``` npm install ```

4. Start the development server:

``` npm run dev ```

5. Open your browser and navigate to `http://localhost:3500`

### Features

- Real-time messaging between users
- User connection/disconnection notifications
- Typing activity indicators
- Automatic user ID assignment
- Cross-browser compatibility

### Environment Variables
The application uses the following environment variables:

`PORT`: Server port (defaults to 3500 if not set)
`NODE_ENV`: Environment mode ('production' or 'development')

### To Avoid Committing node_modules

1. Create a .gitignore file in your project root:
   
``` touch .gitignore ```

2. Add the following to your `.gitignore`:

```
# Dependencies
node_modules/

# Environment variables
.env
```
### Development
The application uses:

- Express.js for the server
- Socket.io for real-time communication
- Native JavaScript for frontend functionality

Key files:

- `server/index.js`: Main server configuration and Socket.io setup
- `public/app.js`: Client-side Socket.io implementation
- `public/index.html`: Frontend interface
- `public/styles.css`: Application styling

### Socket Events

- `connection`: New user connects
- `message`: Message broadcasting
- `activity`: User typing activity
- `disconnect`: User disconnection

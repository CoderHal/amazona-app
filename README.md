# amazona-app
6. Add routing 
    1. npm i react-router-dom
    2. create route for home screen 
    3. create route for project screen
7. Create Node.JS Server
    1. Run npm init in root folder
    2. Update package.json set type:module
    3. Add .js to imports
    4. npm install express
    5. create server.js
    6. add start command as node backend/ server.js
    7. require express
    8. create route for / return backend is ready.
    9. move products.js from fronted to backend
    10. create route for /api/products ("npm install nodemon --save-dev" to restart my node.js Apps Automatically with nodemon)
    11. return products 
    12. run npm start
8. Fetch Products From Backend
    1. set proxy in package.json 
    2. npm install axios 
    3. use state hook 
    4. use effect hook
    5. use reducer hook
9. Manage State By Reducer Hook
    1. define reducer
    2. update fetch data
    3. get state from usReducer 
    4. npm install use-reducer-logger --force (F12 to check the console, we can use this function to debug our action)
10. Add Bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js (React Bootstrap: The most popular front-end framework Rebuilt for React)
11. Create Product and Rating Component 
    1. create Rating component
    2. create Product component
    3. Use Rating component in Product component
12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
    3. change the page title (npm install react-helmet-async)
13. Create Loading Component / Message component
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function
14. Implement Add to Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
15. Complete Add to Cart
    1. check exist item in the cart
    2. check count in stock in backend
16. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column
17. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
18. Create Signin Screen
    1. create sign in form 
    2. add email and password
    3. add signin button
19. Connect To MongoDB Database 
    1. create atlas monogodb database and then cd backend (install mongoose/ install dotenv)
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database (change localhost -> 0.0.0.0:27017 or 127.0.0.1)
20. Seed Sample Data
    1. create Product model
    2. create User model
    3. create seed route
    4. use route in server.js
    5. seed sample product
21. Seed Sample Users
    1. create user model
    2. seed sample users
    3. create user routes
22. Create Signin Backend API
    1. create signin api (npm install express-async-handler)
    2. npm install jsonwebtoken 
    3. define generateToken
    
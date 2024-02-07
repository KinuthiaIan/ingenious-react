#### React-Ingenious-Online-Store
## **By Ian Kinuthia 6/02/2024**
#### Project Description
For this project, I was working on Ingenious, an online app where users get to shop for products including clothing and 
jewelery.
    
#### Project Deliverables
As a user,
1. I can see a list of all the projects available displayed with their images and prices.
I needed to make a GET request to http://localhost:8000/products to fetch the data from my json server.
2. I can click on a product to get its details including its description and rating.
Note, I should only be displaying the details of one product at a time.
To get the details I was making a GET request to http://localhost:8000/products/${props.productId} passing in the
id of the selected product.
3. When viewing a product's details, I should be able to add that particular item to my cart.
This should then be displayed in my cart
4. I should be able to add an item to cart from the Home page where the list of products is displayed.
5. I can search for a product from the Search Bar in the Home Page component.
6. I can navigate from Home to Cart to Sign-in and Register Pages by clicking on the NavBar links. 
I was able to implement this using the React Router Hook.
7. As a new user, I can Register for an account and once registered I can sign-in to the application and start shopping.
The user Registration details are captured by making  a POST request to https://fakestoreapi.com/users as the users database.
For user sign-in authentication, a POST request is made to https://fakestoreapi.com/auth/login to get the user unique token.
8. I sould be directed back to the Home Page after signing in.
   

#### Technologies
 -JavaScript
 -React
 -Terminal


## Project Setup & Pre-requisite Data
    -Fork this repository
    -Clone the repository to your local environment
    -Run the command: [npm install] to install the project dependencies
    - In your project directory, create a db.json file and use the link below for your server DB.
    https://fakestoreapi.com/products
    - Run the following command to get the backend started:
    json-server --watch db.json
    - Test your server by visiting this route in the browser:
     http://localhost:8000/products
    -Run npm start to run the project in the browser

  ## License 
  MIT License

Copyright (c) 2024 Ian Kinuthia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Known Bugs
    The Ingenious app works as required.

## Support and contact details
    - email:: Ikinuthia12@gmail.com
    - phone:: +254790299385



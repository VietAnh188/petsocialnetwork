# CDIO

## WEBSITE PET SOCIAL NETWORK

### MENTOR: THANH, NGUYEN TRONG MSC

### BUILT WITH

This section will list the main frameworks/libraries used in the project. Here are some specific examples:

-   [React.js](https://reactjs.org/)
-   [Redux.js](https://redux.js.org/)
-   [React-router-dom](https://reactrouter.com/)
-   [Sass](https://sass-lang.com/)
-   [Material-UI](https://mui.com/)
-   [axios](https://www.npmjs.com/package/axios)
-   [react-file-base64](https://www.npmjs.com/package/react-file-base64)
-   [Node.js](https://nodejs.org/)
-   [express.js](https://expressjs.com/)
-   [nodemon](https://www.npmjs.com/package/nodemon)
-   [jsonwebtoken](https://jwt.io/)
-   [mongoose](https://mongoosejs.com/)
-   [dotenv](https://www.npmjs.com/package/dotenv)
-   [helmet](https://helmetjs.github.io/)
-   [path](https://www.npmjs.com/package/path)
-   [morgan](https://www.npmjs.com/package/morgan)
-   [cors](https://www.npmjs.com/package/cors)
-   [multer](https://www.npmjs.com/package/multer)

<!-- GETTING STARTED -->

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

-   `Step 1`: Clone the project from repository:

    ```sh
    git clone https://github.com/VietAnh188/petsocialnetwork.git
    ```

-   `Step 2`: Using terminal go to project folder:

    ```sh
    cd 'Your Project Name'
    ```

-   `Step 3`: Contact me to get .env file for backend:

    ```sh
    https://www.facebook.com/profile.php?id=100009701613657
    ```

    ```sh
    https://www.linkedin.com/in/viet-anh-le-033b29227/
    ```

-   `Step 4`: After obtaining the .env file, copy it to the backend folder, the .env file must be at the same level as package.json. And run the backend:

    ```sh
    yarn start
    ```

    or

    ```sh
    npm start
    ```

-   `Step 5`: Go to frontend file and run it:

    ```sh
    yarn start
    ```

    or

    ```sh
    npm start
    ```

-   `Step 6`: View the website at Localhost:3000 at your browser

<!-- MAIN CONCEPT -->

### Page

|  #  | Page         | Descriptiton                                                                                        |
| :-: | :----------- | :-------------------------------------------------------------------------------------------------- |
|  1  | Login        | User will enter account detail to sign in to application                                            |
|  2  | Register     | User will enter all required detail to sign up a account                                            |
|  3  | Home Page    | This page will show all the post of current user and friends                                        |
|  4  | Profile Page | This page will show all user's information                                                          |
|  5  | QNA Page     | If the user has any questions, this page will be used to post questions and someone else will reply |
|  6  | Help Page    | If the user has any help, will use this page to post the problem and someone else will help         |
|  7  | Shop Page    | Sell pet and buy pet                                                                                |
|  8  | Search Page  | This page will show all result when you search                                                      |

### Routings

-   `/`: Home page if you not login, application will navigate you to login page
-   `/login`: Login page
-   `/register`: Register page
-   `/qna`: QNA page
-   `/help`: Help page
-   `/shop`: Shop page
-   `/profile/:username`: Profile page
-   `/search/:username`: page will show all user has the same username

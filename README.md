# Getting start with the project

-This project is using REACT for the front-end and PHP for the back end.
You will need to clone this repository that is the front-end AND
Another one that is the back-end, find it here:
(https://github.com/CodeByEnzo/Back-quai-antique)

-You will need XAMPP to run a server localhost so first install XAMPP.

# First steps

## Back-end :
Now that you have the 2 repositorys links, you have to clone them.
Find the XAMPP folder, and open "htdocs" folder.
Create a new folder inside and call it SERVEURQUAI.
Now use this command in this folder:
git clone https://github.com/CodeByEnzo/Back-quai-antique.git
So now you have a new folder call "Back-quai-antique".
Select everything inside, right click -> cut
Come back in SERVEURQUAI folder that is up,
And past everythings here. (in SERVEURQUAI folder.)
You could now delete the folder "Back-quai-antique" that should be empty by now.

## DataBase :

There's 3 ways.
In this repository ->https://github.com/CodeByEnzo/Quai-Antique
Actually this one, you have this file : RequettesSQL.sql

### First way (fastest)
I have export the data base from phpmyadmin so you can just import the file db_quai.sql in phpmyadmin.

### second way (easy) :
You can use phpmyadmin and run the querys that is inside the file to set the DATABASE.
Just copy the lines in RequetteSQL.sql, past them and run them.

### third way (harder)
You can use command line with the same querys, 
But you will need variables environements set on your computer to use MYSQL,
Look for variable environements in Windows, look for path and add a new one.
Copy the URL that should be "xampp/mysql/bin"
(in my case : "C:\xampp\mysql\bin")
And then past it in the new path.

--> Now you should be able to use MYSQL.
You can verify with this command => mysql --version
THEN,
mysql -u username -p 
Enter your password, (By default, it should be id = root and password = root or maybe no password, depends of your set)
Now you should be able to run run querys starting with :
create database db_quai;

Once this done you can now send the querys that is in RequetteSQL.sql one by one.

### Asset of database and back-end

You have to go on SERVEURQUAI folder. Look for models/Models.php.
Now you have to modify this line:
self::$pdo = new PDO("mysql:host=localhost;dbname=db_quai;charset=utf8", "YOUR_USERNAME", "YOUR_PASSWORD");
To connect with database with your own configuration.

## Front-end:

You can create a new folder on your desktop or where ever you like.
Use this command inside:
git clone https://github.com/CodeByEnzo/Quai-Antique.git
Now find the file config.js in src folder.
You have make sure this :
export const hostname = "http://localhost/SERVEURQUAI/";
Match with the correct folder.


# SUCCESS ! you should now be able to run the project !
FRONT : 
Just run npm start in the terminal and you will see the project.
You can register and login. Make a reservation and delete it.

BACK :
You have to login with 
id: charle 
password: admin01
Now you can manage the back office with the pictures, clients, reservations etc...

See the project online:
BACK: (https://quai-antique.ec-bootstrap.com/back/login)
FRONT: (https://le-quai-antique.ec-bootstrap.com/)

### Enjoy !

## More about REACT CREATE APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

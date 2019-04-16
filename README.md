# 5-A-SIDE TEAM GENERATOR


This project was built using the MERN stack (MongDB, Express, React/Redux, and Node.js). It is an app to create teams of 5 players. The players names will be stored on a RESTful API that we will store on the MongoDB Atlas database.

If you have not already installed, you need the following to run app locally...

Node.js -> https://nodejs.org/en/download/
<br/>
MongoDB -> https://www.mongodb.com/download-center#community 
<br/>
npm / yarn

# GETTING STARTED
These are two separate apps. The Client which serves the FrontEnd (using React), and the API (in Node/Express and stored on MongoDB).

In your terminal, navigate to a directory where you would like to save your project. Now create a new directory for your project and navigate into it: mkdir project_name cd project_name
The repository is located at https://github.com/kaushiro/5-a-side

git clone git@github.com:kaushiro/5-a-side.git

These are two separated apps. The Client which serves the FrontEnd (using React), and the API (in Node/Express) so you will need to open two terminal windows. Here are the commands for each window:


You can either run either individually by changing into their respective folders on the command line:

# CLIENT(FRONTEND):
1) cd 5-a-side/client
2) npm install (to download all dependencies)


# BACKEND(EXPRESS CONNECTED TO MONGODB):
1) open a terminal window.  If you have downloaded MongoDB you will be able to open the backend database with the mongod command.  Keep this window open and running in the background.

In another terminal window
2) cd 5-a-side/backend
3) npm install (to download all dependencies)

# ROOT DIRECTORY(FIVE-A-SIDE):
 
After you have installed all the dependencies, you can run the project in one terminal window.  Open a terminal window to the root repository (/five-a-side) and type:

npm start 


This will run the client folder and backend folder concurrently.
React front end app will be live on  http://localhost:3000 and the backend is live at http://localhost:3001


* NOTE: Make sure to keep the mongod terminal window open and running to keep the server open for the database.  
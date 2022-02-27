# tasks-app-rest-api Notes

- Initialize the **Node.js** application with a **package.json** file:

**npm init**

- Next, we need to install necessary modules: express, mysql and cors.
  Run the command:

**npm install express mysql cors --save**

- import express, and cors modules:

- **Express** is for building the Rest apis
- **cors** provides **Express** middleware to enable **CORS** with various options.

– create an **Express** app, then add **body-parser** (**json** and **urlencoded**) and cors middlewares using **app.use()** method. Notice that we set origin: **http://localhost:8081**.

– define a **GET** route which is simple for test.
– listen on port **8080** for incoming requests.

- Now let’s run the app with command: node server.js.
- Open your **browser** with url **http://localhost:8080/**

# Create The Database & MySQL table in Workbench

- Create the database **tasksBD**
- Create the **tasks** table

# Configure & Connect to MySQL database

We’re gonna have a separate folder for configuration. Let’s create config folder in the app folder, under application root folder, then create db.config.js

# Now create a database connection that uses configuration above.

Now create a **database** **connection** that **uses** configuration above.
The file for **connection** is **db.js**, we put it in **app/models** **folder** that will contain **model** in the **next** step.

# Define the Model

In **models** folder, create a file called **tutorial.model.js**. We’re gonna define constructor for Tutorial object here, and use the database connection above to write **CRUD** functions:

- create a new Task
- find a Task by id
- get all Tasks
- update a Task by id
- remove a Task
- remove all Tasks

We use database connection **query()** method to execute **MySQL** script: **INSERT, SELECT, UPDATE, DELETE.** You can find more details about mysql module at: **https://www.npmjs.com/package/mysql**.

# Create the Controller

Now we create a controllers folder inside app folder, then we have a file named **tutorial.controller.js**. Our controller will be written inside this with **CRUD** functions:

**create**
**findAll**
**findOne**
**findAllPublished**
**update**
**delete**
**deleteAll**

# Define Routes

When a client sends **request** for an endpoint using **HTTP** request **(GET, POST, PUT, DELETE)**, we need to determine how the **server** will **response**. It’s why we’re gonna setup the **routes**.

These are **routes** we define:

**/task: GET, POST, DELETE**
**/tasks/:id: GET, PUT, DELETE**

- Create a **routes** folder inside app **folder**, then **create** **task.routes.js** file

- You can see that we use a controller from **/controllers/tutorial.controller.js**. It contains **methods** for handling **CRUD** **operations** and will be created in the **next step**.

We also need to include routes in **server.js** (right before **app.listen()**):

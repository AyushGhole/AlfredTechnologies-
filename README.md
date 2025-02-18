<h1><b>Alfred Technologies Assignment</b></h1>
<br>
<b>
  Decription : <br>
</b>
After the user submits the login form, the app verifies their credentials and redirects them to the Flashcard List page (/flashcards) upon successful authentication. React Router ensures smooth navigation between Login, Signup, and Flashcard pages. To implement this, install React Router using npm install react-router-dom, update App.js to define routes, and modify Login.js to handle redirection after a successful login. This setup provides a seamless user experience by managing authentication and page transitions efficiently.
<br>
<hr>

<h2><b>SetUp : </b></h2>
<br>

<h4><b>1️⃣ Prerequisites : </b></h4>h4> <br>
Before starting, ensure you have the following installed: <br>
✅ Node.js (LTS version recommended)<br>
✅ MongoDB (Cloud or Local) <br>
✅ Git (for pushing the repository) <br>
<h4>2️⃣ Install Dependencies :</h4> <br>
Since this is a MERN Stack application, we need to install dependencies for both the backend and frontend. <br>
<h4>📌 Backend Setup (Node.js + Express) :</h4><br>
Navigate to the backend folder and install dependencies: <br>
1️⃣ -> cd backend<br>
2️⃣ -> npm install<br>

This installs packages like: <br>

<b>* Express.js </b> – Web framework for API creation<br>
<b>* Mongoose </b> – ORM for MongoDB<br>
<b>* dotenv </b>– Loads environment variables<br>
<b>* cors </b> – Enables cross-origin resource sharing<br>

<h4><b>📌 Frontend Setup (React + Tailwind/Bootstrap) : </b></h4><br> 
Navigate to the frontend folder and install dependencies: <br>
cd ../frontend<br>
npm install<br><br>

This installs:
<br><br>
React.js – Frontend framework <br>
Axios – Handles API requests<br>
React Router – Enables navigation between pages<br>
Tailwind/Bootstrap – Styling libraries<br>
<br>
<h4><b>4️⃣ Configure Environment Variables : </b></h4><br>
The backend requires a .env file to store database and server configurations.<br><br>

<h4><b>📌 Create a .env file in the backend folder</b></h4>h4> <br>
cd backend<br>
touch .env<br>

<h4><b>5️⃣ Start the Application : </b></h4> <br><br>
<b>📌 Start the Backend (Express Server) : </b><br><br>
cd backend<br>
nodemon app.js<br>
<br>
<h4><b>📌 Start the Frontend (React App) : </b></h4> <br>
cd frontend <br>
npm run dev <br>

<h4><b>🎯 Next Steps</b><br><br>
🚀 If everything works, you can start adding more features, deploying the app, or customizing the UI.
Let me know if you need any help! 😊


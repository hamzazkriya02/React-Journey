import { useState } from 'react'
import myImage from './assets/My Image.jpeg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//       //  React Day 1,2,3


// function App() {
//   const [count, setCount] = useState(0)
//   const name = "Hamza Zakriya";
//   const age = 20;
//   const rollno = ' O2167';
//   const skills = ["HTML", "CSS", "JavaScript", "React"];
//   const isLoggedIn = true;
//    const isCounterApp = true
//   return (
//     <>
//      <h1>Your name is {name}</h1>
//       <h2>You age is {age}</h2>
//       <h3>Your Roll no is {rollno}</h3>
//       <p>Next year your age will be {age + 1}</p>
//       <ul>
//         {skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//       <p>{isLoggedIn ? "Welcome Back!" : "Please Login"}{isLoggedIn && <p>You are logged in!</p>}</p>
//     <img className='img' src={myImage} alt="HZ" />
//       <h1>My Name is Hamza Zakriya </h1>
//       <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//       <button onClick={() => setCount(0)}>Reset</button>

//       <p>
//         {count <= 5
//           ? "Good Start"
//           : count <= 10
//             ? "Yes You are in Middle"
//             : "Yes now You are going towards you Journey"}
//       </p>
//       <p className="read-the-docs">
//         Click on my Portfolio{" "}
//         <a href="https://hamzazakriya.vercel.app/" target="_blank" rel="noopener noreferrer">
//           Visit My Portfolio
//         </a>
//       </p>
//   </>
//   )
// }

// // React Day 1

// function App() {
//   const [count, setCount] = useState(0)


//   return (
//     <>
//       <img className='img' src={myImage} alt="HZ" />
//       <h1>My Name is Hamza Zakriya </h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 5)}>
//           count is {count}
//         </button>
//         </div>
//         <div>
//           <button onClick={() => setCount(0)}>Reset Button</button>
//         </div>
//       <p className="read-the-docs">
//         Click on my Portfolio{" "}
//         <a href="https://hamzazakriya.vercel.app/" target="_blank" rel="noopener noreferrer">
//           Visit My Portfolio
//         </a>
//       </p>

//     </>
//   )
// }

//   // React Day 2


// function App() {
//   const name = "Hamza Zakriya";
//   const age = 20;
//   const rollno = ' O2167';
//   const skills = ["HTML", "CSS", "JavaScript", "React"];
//   const isLoggedIn = true;

//   return (
//     <div>
//       <h1>Your name is {name}</h1>
//       <h2>You age is {age}</h2>
//       <h3>Your Roll no is {rollno}</h3>
//       <p>Next year your age will be {age + 1}</p>
//       <ul>
//         {skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//       <p>{isLoggedIn ? "Welcome Back!" : "Please Login"}{isLoggedIn && <p>You are logged in!</p>}</p>
//     </div>
//  )
// }


// // React Day 3

// function App() {
//   const [count, setCount] = useState(0)
//   const isCounterApp = true

//   return (
//     <>
//       <img className='img' src={myImage} alt="HZ" />
//       <h1>My Name is Hamza Zakriya </h1>
//       <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//       <button onClick={() => setCount(0)}>Reset</button>

//       <p>
//         {count <= 5
//           ? "Good Start"
//           : count <= 10
//             ? "Yes You are in Middle"
//             : "Yes now You are going towards you Journey"}
//       </p>
//       <p className="read-the-docs">
//         Click on my Portfolio{" "}
//         <a href="https://hamzazakriya.vercel.app/" target="_blank" rel="noopener noreferrer">
//           Visit My Portfolio
//         </a>
//       </p>

//     </>
//   )
// }
// export default App


// function Counter({ count, setCount }) {
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count is {count}</button>
//       <button onClick={() => setCount(0)}>Reset Button</button>

//       <p>
//         {count <= 5
//           ? "Good Start"
//           : count <= 10
//           ? "Yes You are in Middle"
//           : "Yes now You are going towards your Journey"}
//       </p>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <img className='img' src={myImage} alt="HZ" />
//       <h1>My Name is Hamza Zakriya</h1>

//       <Counter count={count} setCount={setCount} />

//       <p className="read-the-docs">
//         Click on my Portfolio{" "}
//         <a href="https://hamzazakriya.vercel.app/" target="_blank" rel="noopener noreferrer">
//           Visit My Portfolio
//         </a>
//       </p>
//     </>
//   );
// }

// // export default App;




// function Counter({ title }) {
//   const [count, setCount] = useState(0);

//   return (
//      <div  style={{ margin: "20px" }}>
//       <h2>{title}</h2>
//       <button onClick={() => setCount(count + 1)}>Count is {count}</button>
//       <button onClick={() => setCount(0)}>Reset</button>

//       <p>
//         {count <= 5
//           ? "Good Start"
//           : count <= 10
//           ? "You are in Middle"
//           : "You are going strong"}
//       </p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <h1> Multi Counter App</h1>

//       <Counter title="Counter 1" />
//       <Counter title="Counter 2" />
//       <Counter title="Counter 3" />
//     </>
//   );
// }

// // export default App;

// function CounterButtons({ count, setCount }) {
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// }

// function CounterDisplay({ count }) {
//   return (
//     <div>
//       <h2>Current Count: {count}</h2>
//       <p>
//         {count <= 5
//           ? "Low"
//           : count <= 10
//           ? "Medium"
//           : "High"}
//       </p>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Shared Counter App</h1>

//       <CounterDisplay count={count} />
//       <CounterButtons count={count} setCount={setCount} />
//     </>
//   );
// }

// // export default App;


// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h1>Form Example</h1>

//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <p>Your name is: {name}</p>
//     </div>
//   );
// }

// // export default App;



// function App() {
//   const [email, setEmail] = useState("");

//   return (
//     <div>
//       <input
//         type="email"
//         placeholder="Enter email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <button disabled={!email}>Submit</button>

//       <p>{email.includes("@") ? "Valid email" : "Email must contain @"}</p>
//     </div>
//   );
// }

// // export default App;

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     degree: "",
//     semester: ""
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formData);
//     alert("Form Submitted!");
//   }

//   return (
//     <div className="app-container">

//       <div className="form-section">
//         <h1>Registration Form</h1>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
//           <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
//           <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
//           <input type="text" name="degree" placeholder="Enter Degree" value={formData.degree} onChange={handleChange} />
//           <input type="text" name="semester" placeholder="Enter Semester" value={formData.semester} onChange={handleChange} />
//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       <div className="info-section">
//         <h2>Welcome Student 👋</h2>
//         <p>
//           Fill out this form to register your academic details.
//           Make sure your email and password are correct.
//         </p>
//       </div>

//     </div>
//   );
// // }
// // export default App;


// function App() {
//   const students = [
//     { id: 1, name: "Hamza", marks: 85 },
//     { id: 2, name: "Ali", marks: 40 },
//     { id: 3, name: "Sara", marks: 70 },
//     { id: 4, name: "Zain", marks: 30 },
//     { id: 5, name: "Abdullah", marks: 75 }
//   ];

//   return 
//     <h1>Student Result System</h1>

// {
//     students.map((student) => (
//       <div key={student.id} style={{
//         border: "1px solid #ccc",
//         margin: "10px",
//         padding: "10px",
//         borderRadius: "8px"
//       }}>
//         <h3>{student.name}</h3>
//         <p>Marks: {student.marks}</p>

//         <p>
//           Status: {student.marks >= 50 ? "Pass ✅" : "Fail ❌"}
//         </p>
//       </div>
//     ))
//   }


// }

import { useState, useEffect } from 'react'
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


// function App() {

//   const students = [
//     { id: 1, name: "Hamza", marks: 85 },
//     { id: 2, name: "Ali", marks: 40 },
//     { id: 3, name: "Sara", marks: 72 },
//     { id: 4, name: "Zain", marks: 30 }
//   ];

//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");

//   const filteredStudents = students
//     .filter((student) => {
//       if (filter === "pass") return student.marks >= 50;
//       if (filter === "fail") return student.marks < 50;
//       return true;
//     })
//     .filter((student) =>
//       student.name.toLowerCase().includes(search.toLowerCase())
//     );

//   return (
//     <div>
//       <h1>Student Result System</h1>

//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//      <div style={{ margin: "10px 0" }}>
//   <button
//     className={filter === "all" ? "active" : ""}
//     onClick={() => setFilter("all")}
//   >
//     All
//   </button>

//   <button
//     className={filter === "pass" ? "active" : ""}
//     onClick={() => setFilter("pass")}
//   >
//     Pass
//   </button>

//   <button
//     className={filter === "fail" ? "active" : ""}
//     onClick={() => setFilter("fail")}
//   >
//     Fail
//   </button>
// </div>

//       {filteredStudents.map((student) => (
//         <div key={student.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
//           <h3>{student.name}</h3>
//           <p>Marks: {student.marks}</p>
//           <p style={{ color: student.marks >= 50 ? "green" : "red" }}>
//             {student.marks >= 50 ? "Pass" : "Fail"}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;





// function App() {
//   const [students, setStudents] = useState([
//     { id: 1, name: "Hamza", marks: 85 },
//     { id: 2, name: "Ali", marks: 40 }
//   ]);

//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");
//   const [formData, setFormData] = useState({ name: "", marks: "" });
//   const [editId, setEditId] = useState(null);

//   const filteredStudents = students
//     .filter((student) => {
//       if (filter === "pass") return student.marks >= 50;
//       if (filter === "fail") return student.marks < 50;
//       return true;
//     })
//     .filter((student) =>
//       student.name.toLowerCase().includes(search.toLowerCase())
//     );

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (editId) {
//       setStudents(
//         students.map((student) =>
//           student.id === editId
//             ? { ...student, name: formData.name, marks: Number(formData.marks) }
//             : student
//         )
//       );
//       setEditId(null);
//     } else {
//       const newStudent = {
//         id: Date.now(),
//         name: formData.name,
//         marks: Number(formData.marks)
//       };
//       setStudents([...students, newStudent]);
//     }

//     setFormData({ name: "", marks: "" });
//   }

//   function handleDelete(id) {
//     setStudents(students.filter((student) => student.id !== id));
//   }

//   function handleEdit(student) {
//     setFormData({ name: student.name, marks: student.marks });
//     setEditId(student.id);
//   }

//   return (
//     <div className="container">
//       <h1>Student Management System</h1>

//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Student Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="marks"
//           placeholder="Marks"
//           value={formData.marks}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">
//           {editId ? "Update Student" : "Add Student"}
//         </button>
//       </form>

//       <input
//         type="text"
//         placeholder="Search..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="filters">
//         <button
//           className={filter === "all" ? "active" : ""}
//           onClick={() => setFilter("all")}
//         >
//           All
//         </button>
//         <button
//           className={filter === "pass" ? "active" : ""}
//           onClick={() => setFilter("pass")}
//         >
//           Pass
//         </button>
//         <button
//           className={filter === "fail" ? "active" : ""}
//           onClick={() => setFilter("fail")}
//         >
//           Fail
//         </button>
//       </div>

//       {filteredStudents.map((student) => (
//         <div key={student.id} className="card">
//           <div>
//             <h3>{student.name}</h3>
//             <p>Marks: {student.marks}</p>
//             <p className={student.marks >= 50 ? "pass" : "fail"}>
//               {student.marks >= 50 ? "Pass" : "Fail"}
//             </p>
//           </div>

//           <div className="actions">
//             <button className="edit" onClick={() => handleEdit(student)}>
//               Edit
//             </button>
//             <button className="delete" onClick={() => handleDelete(student.id)}>
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleAdd = () => {
    if (!name || !marks) return;

    const newStudent = {
      id: Date.now(),
      name,
      marks: Number(marks),
    };

    setStudents([...students, newStudent]);
    setName("");
    setMarks("");
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const filteredStudents = students
    .filter((student) => {
      if (filter === "pass") return student.marks >= 50;
      if (filter === "fail") return student.marks < 50;
      return true;
    })
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );

  const totalStudents = students.length;
  const totalPass = students.filter((s) => s.marks >= 50).length;
  const totalFail = students.filter((s) => s.marks < 50).length;
  const passPercentage =
    totalStudents === 0
      ? 0
      : ((totalPass / totalStudents) * 100).toFixed(1);

  return (
    <div className="container">
      <h1>Student Management System</h1>

      {/* Dashboard */}
      <div className="stats">
        <div className="stat-card">
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>

        <div className="stat-card">
          <h3>Pass</h3>
          <p className="pass">{totalPass}</p>
        </div>

        <div className="stat-card">
          <h3>Fail</h3>
          <p className="fail">{totalFail}</p>
        </div>

        <div className="stat-card">
          <h3>Pass %</h3>
          <p>{passPercentage}%</p>
        </div>
      </div>

      {/* Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />

        <button onClick={handleAdd}>Add Student</button>
      </div>

      {/* Search */}
      <input
        type="text"
        className="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter Buttons */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("pass")}>Pass</button>
        <button onClick={() => setFilter("fail")}>Fail</button>
      </div>

      {/* Student List */}
      <div className="student-list">
        {filteredStudents.map((student) => (
          <div key={student.id} className="student-card">
            <span>
              {student.name} — {student.marks} Marks
            </span>

            <span
              className={
                student.marks >= 50 ? "status pass" : "status fail"
              }
            >
              {student.marks >= 50 ? "Pass" : "Fail"}
            </span>

            <button onClick={() => handleDelete(student.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
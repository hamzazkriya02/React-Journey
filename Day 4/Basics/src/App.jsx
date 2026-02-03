import { useState } from 'react'
import myImage from './assets/My Image.jpeg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//        React Day 1,2,3


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

                        // React Day 1

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

                  //   React Day 2


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


                     // React Day 3

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

// export default App;




function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
     <div  style={{ margin: "20px" }}>
      <h2>{title}</h2>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <p>
        {count <= 5
          ? "Good Start"
          : count <= 10
          ? "You are in Middle"
          : "You are going strong"}
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <h1> Multi Counter App</h1>

      <Counter title="Counter 1" />
      <Counter title="Counter 2" />
      <Counter title="Counter 3" />
    </>
  );
}

export default App;




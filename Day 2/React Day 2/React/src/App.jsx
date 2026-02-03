import { useState } from 'react';
import './App.css';

// User data
const user = {
  name: 'Hamza Zakriya',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function AdminPanel() {
  return <h2>Welcome Admin</h2>;
}

function LoginForm() {
  return <h2>Please Login</h2>;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Profile */}
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />

      {/* Conditional Rendering */}
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
    </div>
  );
}

// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }

// return <div>{content}</div>;

// {isLoggedIn ? <AdminPanel /> : <LoginForm />}

// {isLoggedIn && <AdminPanel />}

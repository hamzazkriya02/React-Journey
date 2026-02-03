import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return(
    <button>I am a Button</button>
  )
}
function AboutPage() {
  return(
    <>
    <h1>Hyyy This is a about page</h1>
    <p>Myself HZ <br />And making a react App</p>
    </>
  )
}

function ContactPage() {
  return(
    <>
    <h3>My Contact:</h3>
    <p>03175161053</p>
    <h3>My Email:</h3>
    <p>hamzahoon02@gmail.com</p>
    </>
  )
  
}

      
export default function MyApp() {
  return(
    <div>
      <h1>Welcome to react Day 1</h1>
    <MyButton/>
    <AboutPage/>
    <ContactPage/>
    </div>
  )
}





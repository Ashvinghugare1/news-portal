import { useState } from 'react'
import './App.css'
import ResetPassword from './components/Password/ResetPassword'
import ResetPasswordSuccess from './components/Password/ResetPasswordSuccess'
import Notification from './components/Notification/Notification'
import Navbar from './components/Navbar/Navbar'
import SideNav from './components/SideNav/SideNav'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="">
    <ResetPassword />
    <ResetPasswordSuccess />
    <div className="flex justify-center flex-row mb-20">
      <SideNav />
      <div className="flex flex-col w-7/10">
        <Navbar />
        <Notification />
        <Footer />
      </div>
    </div>
   </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import ResetPassword from './components/Password/ResetPassword'
import ResetPasswordSuccess from './components/Password/ResetPasswordSuccess'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <ResetPassword />
    <ResetPasswordSuccess />
   </div>
  )
}

export default App

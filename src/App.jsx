import './App.css'
import AccountVerification from './Pages/AccountVerification'
import EmailVerification from './Pages/EmailVerification'
import ResetPassword from './Pages/ResetPassword'
import ResetPasswordSuccess from './Pages/ResetPasswordSuccess'


function App() {
  return (
    <section>
      <ResetPassword />
      <ResetPasswordSuccess />
      <AccountVerification/>
      <EmailVerification/>
    </section>
    
  )
}

export default App

import { Routes,Route } from 'react-router-dom'
import './App.css'
import AccountVerification from './Pages/AccountVerification'
import EmailVerification from './Pages/EmailVerification'
import ResetPassword from './Pages/ResetPassword'
import ResetPasswordSuccess from './Pages/ResetPasswordSuccess'
import Sidebar from './components/Password/Sidebar/Sidebar'
import SearchNavbar from './components/Password/Sidebar/SearchNavbar'

import ManageHeadline from './Pages/ManageHeadline'
import ManageArticle from './Pages/ManageArticle'
import Footer from './components/footer'
import PostNewArticle from './Pages/PostNewArticle'
import PostVideo from './Pages/PostVideo'


function App() {
  return (
    <section className='flex'>
      <div className='w-[17%]'>
        <Sidebar/>
      </div>
      <div className='w-[83%] '>
        <SearchNavbar/>
        <Routes>
          <Route path='/Manage-New-Headline'element={<ManageHeadline/>}/>
          <Route path='/Manage-New-Article' element={<ManageArticle/>}/>
         
          <Route path='/Post-New-Article' element={<PostNewArticle/>}/>
          <Route path='/Post-Video' element={<PostVideo/>}/>


          
        </Routes>
        <Footer/>
      </div>
      {/* <ResetPassword />
      <ResetPasswordSuccess />
      <AccountVerification/>  
      <EmailVerification/> */}
    </section>
    
  )
}

export default App

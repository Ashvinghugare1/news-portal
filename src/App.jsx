import { Routes,Route } from 'react-router-dom'
import './App.css'
import AccountVerification from './Pages/AccountVerification'
import EmailVerification from './Pages/EmailVerification'
import ResetPassword from './Pages/ResetPassword'
import ResetPasswordSuccess from './Pages/ResetPasswordSuccess'
import Sidebar from './components/Password/Sidebar/Sidebar'
import SearchNavbar from './components/Password/Sidebar/SearchNavbar'
import Setting from './Pages/Setting'

import ManageHeadline from './Pages/ManageHeadline'
import ManageArticle from './Pages/ManageArticle'
import Footer from './components/footer'

import { useState } from 'react'

import PostNewArticle from './Pages/PostNewArticle'
import PostVideo from './Pages/PostVideo'



function App() {
  const[showNav ,setShowNav] = useState(false);
  const navHandler=()=>{
    setShowNav(!showNav)
  }

  return (
    <section className='flex'>
      <div className='lg:w-[17%] '>
        <Sidebar view={showNav} viewNav={navHandler}/>
      </div>
      <div className='lg:w-[83%] ' onClick={()=>navHandler()}>
        <SearchNavbar viewNav={navHandler} view={showNav}/>
        <Routes>
          <Route path='/Manage-New-Headline'element={<ManageHeadline/>}/>
          <Route path='/Manage-New-Article' element={<ManageArticle/>}/>

          <Route path='/setting' element={<Setting/>}/>
         
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

import React from 'react'
import Accordian from '../Accordian'


const Faq = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center p-2'>
      <h2 className='pr-21 p-5 text-xl font-semibold'>Your Account</h2>
      <div>
          <Accordian question={'How do I create my account'} answer={'abcd'}/>
          <Accordian question={'How can I update my profile information'} answer={'To update your profile information, go to the "Your Account" section and click on "Edit Profile." Make the necessary changes and save them to keep your details up to date'}/>
          <Accordian question={'What should I do if I forget my password?'} answer={'abcd'}/>
      </div>        
    </div>
    <div className='flex flex-col justify-center items-center p-2'>
      <h2 className='pr-21 p-5 text-xl font-semibold'>Common User Questions (FAQ Style) </h2>
      <Accordian question={'How do I set up news alerts for new updates?'} answer={'abcd'}/>
      <Accordian question={'How do I customize my news feed?'} answer={'abcd'}/>
      <Accordian question={'How do I delete my search history?'} answer={'abcd'}/>
      <Accordian question={'Can I filter news based on my interests?'} answer={'abcd'}/>
      <Accordian question={'How do I enable/disable notifications for breaking news?'} answer={'abcd'}/>
      <div>
      </div>        
    </div>
    </>
  )
}

export default Faq
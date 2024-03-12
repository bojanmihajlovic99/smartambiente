import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <>
    <hr></hr>
<div className='form'>
   <form>
    <h1>Contact <span>Here</span></h1>
    <input type="text" name="name" id="" placeholder='Enter name'/>
    <input type="email" name="email" id="" placeholder='example@gmail.com'/>
    <input type="phone" name="phone" id="" placeholder='+381'/>
    <textarea name="message" id="" cols="30" rows="10" placeholder='Type here'/>
    <button type="submit">Send</button>
   </form>
   </div>
   </>
  )
}

export default Contact

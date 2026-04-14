import React, { useState } from "react";
import './SighnUp.css'



export const SighnUpModal = ({ onClose })=>{





  const [userData, setUserData] = useState(
    {
      first_name: '',
      last_name: '',
      email:'',
      phone:'',
      address:'',
      password:''
  
    }
  )


  const [error, setError] = useState('')

  const handleOnChange = (name, value)=> {
      setUserData(prev=> {
       return  { ...prev, [name]: value }
      })
  }



  const handleSighnup = (e) => {
    e.preventDefault()

    // Simple validation
    if (!userData.first_name || !userData.last_name || !userData.email || !userData.password) {
      setError("Please fill in all required fields")
      return
    }

    // Store user info in localStorage (demo authentication)
    const userInfo = {
      ...userData,
      userId: Date.now().toString(), // Generate a fake user ID
      signupTime: new Date().toISOString()
    }

    localStorage.setItem("access_token", JSON.stringify(userInfo))
    localStorage.setItem("user_email", userData.email)
    localStorage.setItem("user_name", `${userData.first_name} ${userData.last_name}`)

    onClose()
  }
  
  


    return(

        <div className="modal">
          <div className="modal-content">

             <h2>Sighn Up</h2>
             {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSighnup} >
               <div className="sighnup-item">
            <input 
           type="text" 
           placeholder="First Name" 
           name="first_name"
           value={userData.first_name} 
           onChange={(e)=>handleOnChange(e.target.name, e.target.value)} />

          <input type="text" 
          placeholder="Last Name" 
          name="last_name"
          value={userData.last_name} 
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>

          <input type="tel" 
          placeholder="Phone" 
          name="phone"
          value={userData.phone}
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>

          <input  type="text" 
          placeholder="Address"
          name="address"
          value={userData.address} 
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>

          <input type="text" 
          placeholder="E-mail" 
          name="email"
          value={userData.email} 
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>

          <input type="password" 
          placeholder="Password" 
          name="password"
          value={userData.password}  
          onChange={(e)=>handleOnChange(e.target.name, e.target.value)}/>
          
        </div>
       <div className="sighnup-buttons">
       <button type="submit" className="sighnup-button">Sighn Up</button>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
       </div>
       </form>
      </div>
    </div>
    )
}


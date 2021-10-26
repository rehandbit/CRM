import React from'react'
import './App.css'

class Form extends React.Component{
   render(){
      return(
         <form className="App">
            <div className="form-container">
               <p className="p-display" >First Name
                  <input 
                     placeholder="First Name"  
                     name="firstName" /></p><br/>

               <p className="p-display" >Last Name
                  <input name="lastName" /></p><br/>

               <p className="p-display" >Phone no. 
                  <input name="phone" /></p><br/>

               <p className="p-display" >E-Mail
                  <input name="eMail" /></p><br/>

               <p className="p-display" >City
                  <input name="city" /></p><br/>

               <p className="p-display" >Country
                  <input name="country" /></p><br/>
               <button className="btn-submit" type="button" >Submit</button>
            </div>
         </form>
      )
   }
}
export default Form
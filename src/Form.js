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
                     name="firstName" className="form-input" /></p><br/>

               <p className="p-display" >Last Name
                  <input className="form-input"/></p><br/>

               <p className="p-display" >Phone no. 
                  <input className="form-input"/></p><br/>

               <p className="p-display" >E-Mail
                  <input className="form-input"/></p><br/>

               <p className="p-display" >City
                  <input className="form-input"/></p><br/>

               <p className="p-display" >Country
                  <input className="form-input" name="country" /></p><br/>
               <button className="btn-submit" type="button" >Submit</button>
            </div>
         </form>
      )
   }
}
export default Form
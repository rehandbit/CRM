import React from 'react'

class NewContact extends React.Component {
   render() {
      return(
         <div className="container-n-a" >
            <div className="top-first" >New Contact</div>
            <div className="top-second">Contact Information</div>
            
            <div className="row">
               <div className="col">
                  <label className="form-label acc-name">Account Name</label>
                  <input type="text" className="form-control" placeholder="Account name" aria-label="Account name"/>
               </div>
               <div className="col">
                  <label className="form-label acc-name">Email</label>
                  <input type="text" className="form-control" placeholder="Email" aria-label="Email"/>
               </div>
            </div>
            <div className="row">
               <div className="col">
                     <label className="form-label acc-name">Title</label>
                     <input type="text" className="form-control" placeholder="Title" aria-label="Account name"/>
               </div>
               <div className="col">
                     <label className="form-label acc-name">Title</label>
                     <select id="inputState" className="form-select form-control">
                        <option selected>---none---</option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                        <option>Miss</option>
                     </select>
               </div>
            </div>
            <div className="row">
               <div class="col-md-4">
                  <label for="inputState" className="form-label acc-name">Industry</label>
                  <select id="inputState" className="form-select form-control">
                     <option selected>---none---</option>
                     <option>Education</option>
                     <option>Machine Learning</option>
                     <option>Artificial Intelligence</option>
                  </select>
               </div>
               <div className="col">
                  <label className="form-label form-web ">Employees</label>
                  <input type="text" className="form-control form-web-input" placeholder="Employees" />
               </div>
            </div>
            <div className="row">
               <div className="col">
                  <label className="form-label acc-name ">Annual Revenue</label>
                  <input type="text" className="form-control " placeholder="Annual Revenue" />
               </div>
               <div class="col-md-4">
                  <label for="inputState" className="form-label form-select-1">Region</label>
                  <select id="inputState" className="form-select form-select-1">
                     <option selected>---none---</option>
                     <option>north</option>
                     <option>East</option>
                     <option>South</option>
                     <option>West</option>
                  </select>
               </div>
            </div>
            <footer className="footer">
               <div className="btn-centre">
                     <button type="button" className="btn btn-light btn-cancel">Cancel</button>
                     <button type="button" className="btn btn-primary btn-save">Save</button>
                  
               </div>
            </footer>
         </div>
      )
   }
}

export default NewContact
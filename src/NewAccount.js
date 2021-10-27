import React from 'react'

class NewAccount extends React.Component {
   render() {
      return (
         <div className="container-n-a" >
            <div className="top-first" >New Account</div>
            <div className="top-second">Account Information</div>
            
            <div className="row">
               <div className="col">
                  <label className="form-label acc-name">Account Name</label>
                  <input type="text" className="form-control" placeholder="Account name" aria-label="Account name" aria-required/>
               </div>
               <div class="col-md-4">
                  <label for="inputState" className="form-label form-select-1">Rating</label>
                  <select id="inputState" className="form-select form-select-1">
                     <option selected>---none---</option>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                  </select>
               </div>
            </div>
            <div className="row">
               <div class="col-md-4">
                  <label for="inputState" className="form-label acc-name">Type</label>
                  <select id="inputState" className="form-select form-control">
                     <option selected>---none---</option>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                  </select>
               </div>
               <div className="col">
                  <label className="form-label form-web ">Websites</label>
                  <input type="text" className="form-control form-web-input" placeholder="Websites" />
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
export default NewAccount
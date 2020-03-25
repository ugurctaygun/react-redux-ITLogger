import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

 const AddTechModal = () => {
    const [firstName,setfirstName] = useState('');
    const [lastName,setLastName] = useState("");

    const onSubmit = () => {
        if(firstName === "" || lastName === "") {
            M.toast({ html: 'Please enter a message and tech'});
        } else {
             console.log(firstName,lastName);
             //clear fields
             setfirstName('');
             setLastName('');
        }
    }

    return (
        <div id="add-tech-modal" className="modal" >
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input  type="text" name="firstName" 
                        value={firstName}
                        onChange={e => setfirstName(e.target.value)} />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input  type="text" name="lastName" 
                        value={lastName}
                        onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className="active">
                            Last Name
                        </label>
                    </div>
                </div>
              
            </div>
            <div className="modal-footer" style={{textAlign : 'center'}}>
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn"  >
                    Enter
                </a>
            </div>
        </div>
    )
}


export default AddTechModal;

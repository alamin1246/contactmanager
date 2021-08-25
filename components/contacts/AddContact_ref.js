import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.contactInput=React.createRef();
    }
    onSubmit = (e) => {
        e.preventDefault();

        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            contact: this.contactInput.current.value
        }

        console.log(contact);

    };

   static defaultProps ={
       name: 'Jakir Hossain',
       email:'jakir@yahoo.com',
       contact:'+605-656-4568'
   } 

    render() {
        const {name, email, contact } = this.props;
        return (
            <div className="card mb-3">
               <div className="card-header">
                  Add Contact
               </div>
               <div className="card-body">
                 <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text"
                        name="name"
                        className="form-control form-control-lg" 
                        placeholder="Enter your name..."
                        defaultValue={name}
                        ref={this.nameInput}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                        type="email"
                        name="email"
                        className="form-control form-control-lg" 
                        placeholder="Enter your email..."
                        defaultValue={email}
                        ref={this.emailInput}
                        />
                    </div> 
                    <div className="form-group">
                        <label htmlFor="contact">Contact Number</label>
                        <input 
                        type="text"
                        name="contact"
                        className="form-control form-control-lg" 
                        placeholder="Enter your contact number..."
                        defaultValue={contact}
                        ref={this.contactInput}
                        />
                    </div> 
                    <input
                     type="submit"
                     value="Add Contact"
                     className="btn btn-light btn-block" 
                    />
                 </form>
               </div>  
            </div>
        );
    }
}

export default AddContact;
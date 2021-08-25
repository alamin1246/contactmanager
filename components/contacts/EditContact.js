import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

import axios from 'axios';


class EditContact extends Component {
    state ={
        name:'',
        email:'',
        contact:'',
        errors:{}
    };
async componentDidMount(){
    const {id} = this.props.match.params;
    const res = await axios.get
    (`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;

    this.setState({
        name:contact.name,
        email:contact.email,
        contact:contact.contact
    })
}
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        

        const {name, email, contact} = this.state;

        //Check For Errors
        if(name === ''){
            this.setState({errors:{name:'Name is required'}});
            return;
        }
        if(email === ''){
            this.setState({errors:{email:'Email is required'}});
            return;
        }

        if(contact === ''){
            this.setState({errors:{contact:'Contact Number is required'}});
            return;
        }
const updContact = {
    name,
    email,
    contact
}

const {id} = this.props.match.params;

const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    updContact
);
dispatch({type:'UPDATE_CONTACT', payload: res.data});
             
 //Clear State
    this.setState({
        name:'',
        email:'',
        contact:'',
        errors:{}
    });

    this.props.history.push('/');

    };

 onChange = (e) =>  this.setState({ [e.target.name]:
     e.target.value});
 
    render() {
        const {name, email, contact, errors } = this.state;

        return(
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card mb-3">
                        <div className="card-header">
                           Edit Contact
                        </div>
                        <div className="card-body">
                          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                             <TextInputGroup 
                             label="Name"
                             name="name"
                             placeholder="Enter Your Name"
                             value={name}
                             onChange={this.onChange}
                             error={errors.name}
                             />
                            <TextInputGroup 
                             label="Email"
                             name="email"
                             placeholder="Enter Your Email"
                             value={email}
                             onChange={this.onChange}
                             error={errors.email}
                             />
                            <TextInputGroup 
                             label="Contact"
                             name="contact"
                             placeholder="Enter Your Contact Number"
                             value={contact}
                             onChange={this.onChange}
                             error={errors.contact}
                             />
                            
                             <input
                              type="submit"
                              value="Update Contact"
                              className="btn btn-light btn-block" 
                             />
                          </form>
                        </div>  
                     </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditContact;
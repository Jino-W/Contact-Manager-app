import React from 'react'
import Form from './Form'
import {startCreateContact} from "../../actions/contacts"
import {connect} from "react-redux"

class Create extends React.Component{

    submitHandle=(formData)=>{
        this.props.props.dispatch(startCreateContact(formData))
        this.props.closeHandle()
    }

    render(){
        return(
            <div className="col-md-8 offset-md-2 card p-3">
                <a href="# " ><i className="fas fa-times-circle row float-right mr-3" onClick={()=>this.props.closeHandle()}></i></a>
                <h5 className="text-center">Create New Contact</h5>
                <Form submitHandle={this.submitHandle}/>
            </div>
        )
    }
}

export default connect()(Create)
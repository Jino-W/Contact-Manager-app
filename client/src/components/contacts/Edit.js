import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {startEditContact} from '../../actions/contacts'


class Edit extends React.Component{

    submitHandle=(formData)=>{
        this.props.dispatch(startEditContact(this.props.contact._id, formData, this.props.props))
        this.props.handleClose()
    }


    render(){
        console.log("contact",this.props.contact)
        return(
            <div>
                {this.props.contact &&
                <div>
                    <div className="row">
                        <a className="col-md-12 d-flex justify-content-end" href="# " ><i className="fas fa-times-circle justify-content-right" onClick={()=>this.props.handleClose()}></i></a>
                        <h5 className="col-md-12  text-center">Edit Contact</h5>
                    </div>
                <Form key={this.props.contact._id} contact={this.props.contact} submitHandle={this.submitHandle}/>
                </div>}
            </div>
        )
    }
}


export default connect()(Edit)
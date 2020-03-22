import React from 'react'
// import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {startDeleteContact} from "../../actions/contacts"
import {startShowContact} from '../../actions/contact'
import Edit from "./Edit"


class Show extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isEdit: false
        }
    }


    deleteHandle=(id)=>{
        this.props.dispatch(startDeleteContact(id, this.props.props))
    }

    componentDidMount=()=>{
        const id = this.props.contactId
        this.props.props.dispatch(startShowContact(id, this.props.props))
    }

    editHandle=()=>{
        this.setState(prevState=>{
            return {isEdit: !prevState.isEdit}
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.contact._id!==this.props.contact._id){
            this.setState({isEdit:false})
        }
    }

    render(){
        const {_id, name, email, mobile, category} = this.props.contact
        return(
            <React.Fragment>
                {this.props.contact &&
                <div key={this.props.contact._id} className="col-md-8 offset-md-2 card list-group list-group-flush p-2">
                    <div>{!this.state.isEdit ?
                        (<div>
                            <div className="row">
                                <h5 className="ml-2 list-group-item col-md-9">Contact Information</h5>
                                <div className="float-right">
                                    <a href='# ' ><i className="fas fa-trash-alt ml-3" onClick={()=>{this.deleteHandle(_id)}}></i></a>
                                    <a href="# " ><i className="fas fa-edit ml-3" onClick={this.editHandle}></i></a>
                                </div>
                            </div>
                            <p className="list-group-item"><strong>Name:</strong> {name}</p>
                            <p className="list-group-item"><strong>Email:</strong> {email}</p>
                            <p className="list-group-item"><strong>Mobile:</strong> {mobile}</p>
                            <p className="list-group-item"><strong>Category:</strong> {category}</p>
                        </div>):(<div>
                            <Edit props={this.props} contact={this.props.contact} handleClose={this.editHandle}/>
                        </div>)}
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props)=>{   
    return {
        contact: state.contacts.find(contact => props.contactId === contact._id) || state.contact
    }
}


export default connect(mapStateToProps)(Show)


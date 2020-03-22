import React from 'react'
import axios from '../../config/axios'
import {connect} from 'react-redux'
import {startGetContacts} from '../../actions/contacts'
import {filterContacts} from '../../actions/filterContacts'
import Show from "./Show"
import Create from "./Create"
import "../../avatar.css"
import {NavLink} from "react-router-dom"


class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search:"",
            isShow: undefined,
            isCreate: false
        }
    }


    handleChange=(e)=>{
        const search = e.target.value
        this.props.dispatch(filterContacts(this.props.contacts, search))
        this.setState({search})
    }

    showHandle=(e,id)=>{
        e.preventDefault()
        this.setState({isShow: id})
    }

    createHandle=()=>{
        this.setState(prevState=>{
            return {isCreate: !prevState.isCreate}
        })
    }

    handleLogout = ()=>{
        axios.delete('/users/logout', {
            headers:{
                "x-auth" : localStorage.getItem("authToken")
            }
        })
            .then(response=>{
                localStorage.removeItem("authToken")
                window.location.href = "/"   
            })
            .catch(err=>{
                alert(err)
            })
        }
    
    componentDidMount(){
        this.props.dispatch(startGetContacts())
    }

    componentDidUpdate(prevProps){
        if(prevProps.contacts.length !== this.props.contacts.length){
            this.setState({isShow: this.props.showId})
        }
    }

    render(){
        const showId = this.state.isShow || this.props.showId
        return(
            <>

                {/* NavBar */}
                <div className="row sticky-top">
                    <nav className="col-md-12 navbar navbar-expand-lg navbar-light bg-light"  style={{padding:'20px',borderBottom:'solid 1px lightGrey'}}>
                        <div className="col-md-6">
                        <a className="navbar-brand" href="# " ><i className="fa fa-book mr-1" aria-hidden="true"></i><strong> Contact Manager</strong></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        </div>

                        <div className="collapse navbar-collapse col-md-6  justify-content-end" id="navbarSupportedContent">
                            <ul className="nav">
                                <li className="nav-item mt-1"><input type="text" id="search" name="search" value={this.state.search} placeholder=" Search contacts..." onChange={this.handleChange} /></li>
                                <li className="nav-item" >
                                    <NavLink 
                                        className="nav-link" 
                                        to="# " 
                                        onClick={this.handleLogout}
                                        activeClassName="active">Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            
            {/* List */}
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <div className="col-md-5 d-flex" style={{position:'fixed',zIndex:'1',padding:'20px',backgroundColor:'white'}}>
                        <h2 className="col-md-6 ml-2">Contacts</h2>
                        <div className="col-md-6 mt-2">
                            <a className="float-right" href= "# "><i className="fas fa-user-plus" onClick={this.createHandle}></i></a>
                        </div> 
                    </div>
                    <div style={{zIndex:'-1'}}>
                        {this.props.filterContacts && <ul style={{marginTop:'13vh'}}>{
                            this.props.filterContacts.map((contact, index)=>{
                                return(
                                    <li key={contact._id} className="card list-group-item mt-3" style={contact._id === showId ? {border:"solid 2px #0056B3"}:{}}>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <a href ="# " onClick={(e)=>this.showHandle(e,contact._id)}>{index %2 === 0 ? 
                                                    (<img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />) : (
                                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />)
                                                }</a>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="row">
                                                    <h5 className="col-md-12"><a  onClick={(e)=>this.showHandle(e,contact._id)} href ="# ">{contact.name}</a></h5>
                                                    <div className="col-md-12">
                                                        <p>{contact.email} - {contact.mobile} ({contact.category})</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }</ul>
                    }</div>
                </div>

                {/* Form */}
                <div className="offset-md-6 col-md-6 position-fixed" style={{top:'17vh'}}>
                    <div className="col-md-12">
                        {!this.state.isCreate && (this.state.isShow||this.props.showId) && <Show props={this.props} contactId={this.state.isShow || this.props.showId}/>}
                    </div>
                    <div className="col-md-12  mt-2">
                        {this.state.isCreate && <Create props={this.props} closeHandle={this.createHandle}/>}
                    </div>
                </div>
            </div>
        </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        contacts: state.contacts,
        showId : state.contacts[0] && state.contacts[0]._id,
        filterContacts: state.filterContacts.length > 0 ? state.filterContacts : JSON.parse(JSON.stringify(state.contacts))
    }
}


export default connect(mapStateToProps)(List)
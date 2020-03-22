import React from "react"

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: !props.contact ? '' : props.contact.name,
            email: !props.contact ? '' :  props.contact.email, 
            mobile: !props.contact ? '' : props.contact.mobile,
            category: !props.contact ? '' : props.contact.category
        }
    }


    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            category: this.state.category
        }

        this.props.submitHandle(formData)
    }

    render(){
        return(
            <div>
                <form className="mt-1" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="name">Name: </label>
                        <input id="name" placeholder="Jino" className="form-control input-sm" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="email">Email: </label>
                        <input  className="form-control input-sm" placeholder="jinoesther@gmail.com" id="email" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="mobile">Mobile: </label>
                        <input className="form-control input-sm" placeholder="8790654321" id="mobile" type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                    </div>
                    <div key={this.state.category} className="form-group">
                        <label className="sr-only" htmlFor="category">Category: </label>
                        <input id="category" className="mr-2" type="radio" name="category" value="home" onChange={this.handleChange} checked={this.state.category === 'home'} />home
                        <input id="category" className="ml-3 mr-2" type="radio" name="category" value="work" onChange={this.handleChange} checked={this.state.category === 'work'} />work
                    </div>
                    <input type="submit" className="btn btn-primary btn-block justify-content-center" />
                </form>
            </div>
        )
    }
}



export default Form;
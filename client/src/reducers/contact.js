const contactInititalState={}

const contactReducer=(state=contactInititalState,action)=>{
    switch(action.type){
        case "SHOW_CONTACT":{
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default contactReducer
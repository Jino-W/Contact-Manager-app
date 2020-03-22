import axios from '../config/axios'
import {startGetContacts} from './contacts'


export const startUserRegister=(data,props)=>{
    return ()=>{axios.post('/users/register',data)
        .then(response=>{
            if(!response.data._id){
                alert('User already exists!!')
            }else{
                props.history.push('/')
            }
        })
    }
    
}

export const startUserLogin=(data,props)=>{
    return (dispatch)=>{axios.post('/users/login',data)
        .then(response=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors)
            }else{
                const token=response.data.token
                localStorage.setItem('authToken',token)
                props.history.push('/contacts')
                dispatch(startGetContacts())
            }
        })
        .catch(err=>{
            alert(err)
        })
    }
}


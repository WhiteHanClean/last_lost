import axios from 'axios'
import { AddUser } from '../reducer/AddUserReducer'

export const RequestUsers = () => {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => dispatch(AddUser(response)))
    }
}
import axios from 'axios'
import { AddUser } from '../reducer/AddUserReducer'

export const RequestUsers = () => {
    return function(dispatch) {
        axios.get('https://ala-too-project.herokuapp.com/api/found-items/')
        .then(response => dispatch(AddUser(response)))
    }
}
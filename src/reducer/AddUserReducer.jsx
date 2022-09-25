const initialState = {
    user: []
}

const addUser = 'AddUser'; 

export const AddUser = (value) => {
    return({type: addUser, payload: value})
}

export const addedUsers = (state = initialState, action) => {
    switch(action.type) {
        case addUser:
            return {...state, user: [...state.user, action.payload]}
        default:
            return initialState;
    }    
}

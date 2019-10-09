import React from 'react';
import { getThemeProps } from '@material-ui/styles';



/*

msg = {
    user: 'user',
    text: 'message text',
    topic: 'topic that it goes to',
    date: 'date stamp',

}
*/




const CTX = React.createContext();

const reducer(state, action){
    switch(action.type){
        case 'Receive Message': 
        return{
            ...state,
            [action.payload.topic]:{
                ...state[action.payload.topic]
            }
        }
        default:
            return state
    }
}

export default function Store(props){
    const reducer = React.useReducer(reducer, initState)
    return (
        <CTX.Provider value={}>
            {props.children}
        </CTX.Provider>
    )
}
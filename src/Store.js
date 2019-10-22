import React from 'react';
/*

msg = {
    from: 'from',
    msg: 'message msg',
    topic: 'topic that it goes to',
    date: 'date stamp',

}


state{
    topic 1 [
        {msg1},
        {msg2},

    ], 
    topic 2 [
        {msg1}
    ],
}
*/




export const CTX = React.createContext();

const initState = {
    vehicles : [
        {from: 'Max', msg:'who is here?', id:'0001'},
        {from: 'Nick', msg:'I am. Why?', id:'0002'}
    ],
    hobby : [
        {from: 'Max', msg:'Soccer?', id:'0003'},
        {from: 'Nick', msg:'Nah, nfl', id:'0004'},        
        {from: 'Max', msg:'why nfl?', id:'0005'},
        {from: 'Nick', msg:'idk', id:'0006'}
    ],
}

function  reducer (state, action){
    const {from, msg, topic, id} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE': 
        return{
            ...state,
            [topic]:[
                ...state[topic],
                { from, msg, id}
            ]
        }
        default:
            return state
    }
}

export default function Store(props){
    const reducerHook = React.useReducer(reducer, initState)
    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}
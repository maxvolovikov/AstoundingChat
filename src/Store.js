import React from 'react';
import io from 'socket.io-client';
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
                { from, msg, id }
            ]
        }
        default:
            return state
    }
}


let socket;

function sendChatAction(value){
    socket.emit('chat message', value);
}

export default function Store(props){

    const [allChats, dispatch] = React.useReducer(reducer, initState)

    if (!socket){
        socket = io(':3001');
        socket.on('chat message', function (msg) { 
            dispatch({payload: msg, type: 'RECEIVE_MESSAGE'})

        });
    }

    const user = 'Default User ' + (Math.random(100)*100).toFixed(0);

    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}
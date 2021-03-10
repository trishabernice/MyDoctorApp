import React from 'react';
import Received from './Received';
import Sent from './Sent';

const ChatItem = ({type}) => {
    if(type === "Sent"){
        return <Sent/>
    }
    return <Received/>
}

export default ChatItem;
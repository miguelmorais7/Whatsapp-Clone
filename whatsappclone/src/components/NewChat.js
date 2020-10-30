import React, { useState } from 'react';
import './NewChat.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default({user, chatlist, show, setShow}) =>{
    const [list, setList] = useState([
        {id: 123, image: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png', name: 'Miguel'},
        {id: 123, image: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png', name: 'Miguel'},
        {id: 123, image: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png', name: 'Miguel'},
        {id: 123, image: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png', name: 'Miguel'}
    ]);

    const handleClose = () =>{
        setShow(false);
    }
    return(
        <div className="newChat" style={{left: show?0:-415}}>
            <div className="newChat--header">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#FFF'}}/>
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=>(
                    <div className="newChat--item" key={key}>
                        <img className="newChat--item-image"src={item.image} alt=""/>
                        <div className="newChat--item-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
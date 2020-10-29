import React from 'react';
import './ChatListItem.css';

export default() =>{
    return(
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Miguel</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>browser-sync start --sever --files "css/*.css" lllllllllllllllllll</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
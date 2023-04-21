import React from "react";
import style from './Myposts.module.css'
import Post from "./Post/Post";

const Myposts = () => {
    return (
        <div>
            <Post message={'Hi, how are you?'}/>
            <Post message={`it's my first message!`}/>
        </div>
    );
}

export default Myposts;
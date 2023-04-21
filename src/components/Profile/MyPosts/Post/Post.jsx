import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <h1>{props.message}</h1>
        </div>
    );
}

export default Post;
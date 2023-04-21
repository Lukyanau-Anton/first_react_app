import React from "react";
import style from './Profile.module.css'
import Myposts from "./MyPosts/Myposts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={style.space}
                     src={'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'}/>
            </div>
            <div>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXSirlWM2XH2Og8-KhyAVA4qk_C1NwF9KrA&usqp=CAU'}/>
            </div>
            <div>
                Description
            </div>
            <Myposts/>
        </div>
    );
}

export default Profile;
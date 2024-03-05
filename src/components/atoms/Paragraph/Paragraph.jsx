import React from "react";
import style from "./Paragraph.module.css";
import { FaRegHeart, FaPlus  } from "react-icons/fa";
const Paragraph = () => {
    return <div className={style.genre}>
        <FaRegHeart />
        <FaPlus />
        <p>Genre(s) :
            -Jeu d'horreur</p>
        <div className={style.btnInfo}>Plus d'info</div>
    </div>;
};

export default Paragraph;
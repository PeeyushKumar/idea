import { useState } from "react";
import db from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import "./ColorSwatch.css";

const colors = {
    color1: "#B2F9FC",
    color2: "#A2D2FF",
    color3: "#FFC898",
    color4: "#FFFFFF",
    color5: "#AE98FF"
}

const ColorSwatch = ({handleChangeColor}) => {

    const [swatchOpen, setSwatchOpen] = useState(false);

    const toggleSwatch = () => {
        setSwatchOpen(!swatchOpen);
    }

    const handleOnClick = color => {
        setSwatchOpen(false);
        handleChangeColor(color);
    }

    let className = "color-pad ";
    if (swatchOpen) className += "color-open";

    return (
        <>
            { <FontAwesomeIcon className="btn-palette" icon={faPalette} onClick={toggleSwatch} /> }

            { 
                <>
                    <div className={className+'-1'} style={{backgroundColor: colors.color1}} onClick={() => handleOnClick(colors.color1)}></div>
                    <div className={className+'-2'} style={{backgroundColor: colors.color2}} onClick={() => handleOnClick(colors.color2)}></div>
                    <div className={className+'-3'} style={{backgroundColor: colors.color3}} onClick={() => handleOnClick(colors.color3)}></div>
                    <div className={className+'-4'} style={{backgroundColor: colors.color4}} onClick={() => handleOnClick(colors.color4)}></div>
                    <div className={className+'-5'} style={{backgroundColor: colors.color5}} onClick={() => handleOnClick(colors.color5)}></div>
                </>
            }
        </>
    );
}

export default ColorSwatch;
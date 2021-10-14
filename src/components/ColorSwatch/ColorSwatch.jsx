import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import db from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import "./ColorSwatch.css";

const colors = {
    color1: "#B2F9FC",
    color2: "#A2D2FF",
    color3: "#FFC898",
    color4: "#FFFFFF",
    color5: "#AE98FF"
}

const ColorSwatch = ({id}) => {

    const [swatchOpen, setSwatchOpen] = useState(false);

    const toggleSwatch = () => {
        setSwatchOpen(!swatchOpen);
    }

    const changeColor = color => {
        setSwatchOpen(false);
        const noteRef = doc(db, 'ideas', id);
        setDoc(noteRef, { color: color}, {merge: true});
    }

    let className = "color-pad ";
    if (swatchOpen) className += "color-open";

    return (
        <>
            { <FontAwesomeIcon className="btn-palette" icon={faPalette} onClick={toggleSwatch} /> }

            { 
                <>
                    <div className={className+'-1'} style={{backgroundColor: colors.color1}} onClick={() => changeColor(colors.color1)}></div>
                    <div className={className+'-2'} style={{backgroundColor: colors.color2}} onClick={() => changeColor(colors.color2)}></div>
                    <div className={className+'-3'} style={{backgroundColor: colors.color3}} onClick={() => changeColor(colors.color3)}></div>
                    <div className={className+'-4'} style={{backgroundColor: colors.color4}} onClick={() => changeColor(colors.color4)}></div>
                    <div className={className+'-5'} style={{backgroundColor: colors.color5}} onClick={() => changeColor(colors.color5)}></div>
                </>
            }
        </>
    );
}

export default ColorSwatch;
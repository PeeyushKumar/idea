
const colors = {
    color1: "#B2F9FC",
    color2: "#A2D2FF",
    color3: "#FFC898",
    color4: "#FFFFFF",
    color5: "#AE98FF"
}

const ColorSwatch = ({handleSetColor}) => {

    return (
        <div>        
            <div className="color-pad color1" style={{backgroundColor: colors.color1}} onClick={() => handleSetColor(colors.color1)}></div>
            <div className="color-pad color2" style={{backgroundColor: colors.color2}} onClick={() => handleSetColor(colors.color2)}></div>
            <div className="color-pad color3" style={{backgroundColor: colors.color3}} onClick={() => handleSetColor(colors.color3)}></div>
            <div className="color-pad color4" style={{backgroundColor: colors.color4}} onClick={() => handleSetColor(colors.color4)}></div>
            <div className="color-pad color5" style={{backgroundColor: colors.color5}} onClick={() => handleSetColor(colors.color5)}></div>
        </div>
    );
}

export default ColorSwatch;
import TakeNote from "../TakeNote/TakeNote";
import "./Welcome.css"

const Welcome = () => {

    return(
        <div className="welcome">
            <h1 className="large-text">Create a new memory</h1>
            <TakeNote closeDisabled />
        </div>
    )
}

export default Welcome;
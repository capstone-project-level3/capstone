import React from "react"
import EditMeme from "./EditMeme"

function SavedMemeList(props) {
    
    
        return(
            <div className="savedContainer">
                <div className="savedMeme">
                <img src={props.url} />
                <h3 className="topTextSavedMeme">{props.topText}</h3>
                <h3 className="bottomTextSavedMeme">{props.bottomText}</h3>
                </div>
                <div className="savedMemeControls">
                    <EditMeme />
                    <button className="deleteBtn">DELETE</button>
                </div>
            </div>
        )
    
}

export default SavedMemeList
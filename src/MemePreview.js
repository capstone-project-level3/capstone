import React from "react"

function MemePreview(props){
    return(
        <div>
            <button onClick={props.handleClick}>CHANGE</button>
            <img className="previewImage" src={props.url} alt="meme" />
            
        </div>
    )
}


export default MemePreview
import React from "react"

function MemePreview(props){
    return(
        <div>
            <button id="changeMemeBtn" onClick={props.handleClick}>CHANGE</button>
            <h2 id="upTextPrev">{props.upperText}</h2>
            <img className="previewImage" src={props.url} alt="meme" />
            <h2 id="lowTextPrev">{props.lowerText}</h2>
            <br></br>
            
        </div>
    )
}


export default MemePreview
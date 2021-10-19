import React from "react"

function Meme(props) {
    return(
        <div className="savedMeme">
            <h2 className="upTextSaved">{props.upperText}</h2>
            <img alt="meme" className="savedMemeImage" src={props.imgURL} />
            <h2 className="lowTextSaved">{props.lowerText}</h2>
            <button className="editBtn" onClick={props.handleEdit}>EDIT</button>
            <button className="deleteBtn" onClick={props.handleDelete} >DELETE</button>

        </div>
    )
}

export default Meme
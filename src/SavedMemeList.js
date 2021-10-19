import React from "react"
import Meme from "./Meme"
import EditMeme from "./EditMeme"

function SavedMemeList(props) {
    
        const memeList = props.memeList.map((meme,index)=> <Meme handleEdit={props.handleEdit}
        handleDelete={props.handleDelete}
        key={index+meme} 
        upperText={meme.upperText} 
        lowerText={meme.lowerText} 
        imgURL={meme.imgURL}/>)
        return(
            <div className="savedContainer">
                <div className="savedMemeList" >
                    {memeList}
                </div>
                <div className="savedMemeControls">
                    <EditMeme display={props.display}  />
                </div>
            </div>
        )
    
}

export default SavedMemeList
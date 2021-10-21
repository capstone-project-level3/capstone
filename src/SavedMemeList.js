import React from "react"
import Meme from "./Meme"


function SavedMemeList(props) {
    
        const memeList = props.memeList.map((meme)=> 
            <Meme 
                handleDelete={props.handleDelete}
                handleSave={props.handleSave}
                handleChange={props.handleChange}
                key={meme+meme.id} 
                upperText={meme.upperText} 
                lowerText={meme.lowerText} 
                imgURL={meme.imgURL}
                id={meme.id}
            />)
        return(
            <div className="savedContainer">
                <div className="savedMemeList" >
                    {memeList}
                </div>
            </div>
        )
    
}

export default SavedMemeList
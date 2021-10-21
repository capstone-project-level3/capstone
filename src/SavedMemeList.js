import React from "react"
import Meme from "./Meme"


function SavedMemeList(props) {
    
        const memeList = props.memeList.map((meme,index)=> 
            <Meme 
                handleDelete={props.handleDelete}
                handleSave={props.handleSave}
                handleChange={props.handleChange}
                key={index+meme} 
                upperText={meme.upperText} 
                lowerText={meme.lowerText} 
                imgURL={meme.imgURL}
                id={Math.random() * 100 + 1}
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
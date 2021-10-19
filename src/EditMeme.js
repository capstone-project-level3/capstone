import React from "react"

function EditMeme(props){
    return(
        <form>
            <input 
                style={{display:props.display}}
                type="text" 
                className="editInput" 
                name="topText" 
                value={props.topText} 
                placeholder="Top Text" 
            />
            <br/><br/>
            <input 
                style={{display:props.display}}
                type="text" 
                className="editInput" 
                name="bottomText" 
                value={props.bottomText} 
                placeholder="Bottom Text" 
            />
            <br/><br/>
            <button className="saveBtn" style={{display:props.display}}>SAVE</button>
        </form>
    )
}

export default EditMeme
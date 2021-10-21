import React from "react"

function EditMeme(props){
    return(
        <form style={{display:props.display}}>
            <input 
                type="text" 
                className="editInput" 
                name="upperText" 
                value={props.upperText} 
                placeholder="upper Text" 
                onChange={props.handleChange}
            />
            <br/>
            <input 
                type="text" 
                className="editInput" 
                name="lowerText" 
                value={props.lowerText} 
                placeholder="lower Text" 
                onChange={props.handleChange}
            />
            <br/>
            <button className="saveBtn" onClick={props.handleSave}>SAVE</button>
        </form>
    )
}

export default EditMeme
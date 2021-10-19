import React from "react"

function InputForm(props){
    return(
        <div className="inputs">
            <br></br>
            <input 
                type='text' 
                onChange={props.handleChange} 
                name='upperText' 
                value={props.upperText} 
                placeholder="upper text" />
            <br></br>
            <input 
                type='text' 
                onChange={props.handleChange} 
                name='lowerText' 
                value={props.lowerText} 
                placeholder="lower text" />
            <br></br>
            <button onClick={props.handleSubmit} id="saveMemeBtn">SAVE MEME</button>
        </div>
    )
}

export default InputForm
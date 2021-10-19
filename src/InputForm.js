import React from "react"

function InputForm(props){
    return(
        <div>
            <input 
                type='text' 
                onChange={props.handleChange} 
                name='upperText' 
                value={props.upperText} 
                placeholder="upper text" />
            <input 
                type='text' 
                onChange={props.handleChange} 
                name='lowerText' 
                value={props.lowerText} 
                placeholder="lower text" />
            <button onClick={props.handleSubmit}>SAVE CHANGES</button>
        </div>
    )
}

export default InputForm
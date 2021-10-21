import React from "react"

class  EditMeme extends React.Component {
    constructor(){
        super()
        this.state = {
            upperText: "",
            lowerText: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSaving = this.handleSaving.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    handleSaving(){
        this.setState({
            upperText: "",
            lowerText: "",
        })
    }
    render(){
        return(
            <div style={{display:this.props.display}}>
                <input 
                    type="text" 
                    className="editInput" 
                    name="upperText" 
                    value={this.state.upperText} 
                    placeholder="upper Text" 
                    onChange={this.handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    className="editInput" 
                    name="lowerText" 
                    value={this.state.lowerText} 
                    placeholder="lower Text"
                    onChange={this.handleChange} 
                />
                <br/>
                <button 
                    className="saveBtn" 
                    onClick={() => {
                        this.props.handleSave(this.props.id,this.state.upperText,this.state.lowerText); 
                        this.props.handleEdit(); 
                        this.handleSaving()
                    }}
                >SAVE</button>
            </div>
        )
    }
}

export default EditMeme
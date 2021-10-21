import React from "react"
import EditMeme from "./EditMeme"

class Meme extends React.Component {
    constructor(){
        super()
        this.state = {
            display: 'none'
        }
        this.handleEdit = this.handleEdit.bind(this)
    }
    handleEdit(){
        if(this.state.display==='none'){
            this.setState({display: 'block'})
        } else{
            this.setState({display: 'none'})
        }
    }
    render(){
        return(
            <div className="savedMeme">
                <h2 className="upTextSaved">{this.props.upperText}</h2>
                <img alt="meme" className="savedMemeImage" src={this.props.imgURL} />
                <h2 className="lowTextSaved">{this.props.lowerText}</h2>
                <EditMeme 
                    handleChange={this.props.handleChange} 
                    handleSave={this.props.handleSave} 
                    id={this.props.id} 
                    handleEdit={this.handleEdit} 
                    display={this.state.display} 
                    upperText={this.props.upperText}
                    lowerText={this.props.lowerText}
                />
                <button className="editBtn" onClick={this.handleEdit}>EDIT</button>
                <button className="deleteBtn" onClick={this.props.handleDelete} >DELETE</button>
            

            </div>
        )
    }
}

export default Meme
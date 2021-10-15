import React from "react"
import EditMeme from "./EditMeme"

class SavedMemeList extends React.Component {
    
    render(){
        return(
            <div className="savedContainer">
                <div className="savedMeme">

                </div>
                <div className="savedMemeControls">
                    <EditMeme />
                    <button className="deleteBtn">DELETE</button>
                </div>
            </div>
        )
    }
}

export default SavedMemeList
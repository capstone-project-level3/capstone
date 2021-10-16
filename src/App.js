import React from "react"
import MemePreview from "./MemePreview"
import InputForm from "./InputForm"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            upperText: "",
            lowerText: "",
            imgURL: "",
            savedMemes: []
        }
    }

    render(){
        return(
            <div>
                <MemePreview />
                <InputForm />
                <SavedMemes />
            </div>
        )
    }
}


export default App
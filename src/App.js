import React from "react"
import MemePreview from "./MemePreview"
import InputForm from "./InputForm"
import SavedMemeList from "./SavedMemeList"




class App extends React.Component {
    constructor(){
        super()
        this.state = {
            upperText: "",
            lowerText: "",
            imgURL: "",
            savedMemes: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            console.log(`mounted`)
            this.setState({
                
                imgURL: data.data.memes[0].url
            })
        })
    }
    handleClick(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            let efforts = data.data.memes.map(data => data.url)
            let randomImage = efforts[Math.floor(Math.random()*efforts.length)]
            this.setState({
                imgURL : randomImage
            })
        })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(){
        
        
    }

    

    render(){
        return(
            <div>
                
                <MemePreview 
                    url={this.state.imgURL} 
                    handleClick={this.handleClick} 
                    upperText={this.state.upperText}
                    lowerText={this.state.lowerText} />
                
                <InputForm 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} 
                    upperText={this.state.upperText} 
                    lowerText={this.state.lowerText}/>

               <h3>{this.state.upperText} {this.state.lowerText}</h3>
               
               
                
            </div>
        )
    }
}

export default App
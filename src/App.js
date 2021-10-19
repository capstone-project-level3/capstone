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
        this.setState(prevState => {
            return({
                upperText: "",
                lowerText: "",
                imgURL: prevState.imgURL,
                savedMemes: [
                    {upperText: this.state.upperText,
                    lowerText: this.state.lowerText,
                    imgURL: this.state.imgURL,},
                    ...prevState.savedMemes
                ]
            })
        })
        
        
    }

    

    render(){
        return(
            <div id="main">
                <h1>Make A Meme</h1>
                <div className="memePrevBox">
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
                </div>
                <h1>Saved Memes</h1>
                <SavedMemeList memeList={this.state.savedMemes}/>
            </div>
        )
    }
}

export default App
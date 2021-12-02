import React from "react"

export default function Meme(){

    const [memeImage, setMemeImage]=React.useState({
        topText:"",
        bottomText:"",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"})

        const [allMemesData, setAllMemesData]= React.useState(memesData)

    function getMeme(){
        const memeArray =memesData.memes
        const randomMeme = Math.floor(Math.random() * memeArray.length)
        let memeUrl = memesData.memes[randomMeme].url
        setMemeImage(prevMemeImage =>({
            ...prevMemeImage,
            randomImage: url  
        }))

    }
function handleChange(){
    setMemeImage()
}

    return(
        <main>
        <form className="form">
            <input type="text" id="setup" name="topText"
            className="form--input"
            placeholder="Top text"
            value="topText"  
            onChange={handleChange} >
            </input>
            
            <input type="text" id="punchline" name="bottomText"
            className="form--input"
            placeholder="Bottom text"
            value="bottomText">
                onChange={handleChange}
            </input>
            
            <button onClick = {memeImage}className="form--button">Get a new meme here!</button>
        </form>
        <div className="meme">
<img src={memeImage.randmImage} alt="" className="meme-image" />
<h2 className="meme-topText"> Hotline</h2>
<h2 className="meme-bottomText"> Bling</h2>

        </div>
        </main>
    )
}
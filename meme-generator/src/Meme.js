import React from "react"

export default function Meme(){
    return(
        <main>
        <form className="form">
            <input type="text" id="setup" name="setup"
            className="form--input"
            placeholder="Top text"></input>
            <input type="text" id="punchline" name="punchline"
            className="form--input"
            placeholder="Bottom text"></input>
            <button className="form--button">Get a new meme here!</button>
        </form>
        </main>
    )
}
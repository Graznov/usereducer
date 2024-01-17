import './New.scss'
import {useState} from "react";


function New({onChange}){

    let [text, setText] = useState('')
    function inputVallue(event){
        setText(event.target.value)
    }
    
    const ClickPlus = () =>{
        if (text) {
            onChange(text)
            setText('')
        }
    }

    return(
        <div className="new">
            <div className="text">
                <input onChange={inputVallue} className="abc" value={text}/>
            </div>

            <button onClick={ClickPlus} className="NewWork">

                <img src='https://cdn.icon-icons.com/icons2/404/PNG/128/plus_40632.png' alt="+"/>

            </button>
        </div>
    )
}

export default New
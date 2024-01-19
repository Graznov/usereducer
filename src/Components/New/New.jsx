import './New.scss'
import {useState} from "react";
import classNames from "classnames";


function New({onChange}){

    const [inpBool, setInpBool] = useState(true)
    const inputClass = classNames('abc',{
        'abcRed' : !inpBool
    })

    const [btnBool, setBtnBool] = useState(true)
    const btnClass = classNames('button',{
        'btnDeactive' : !btnBool
    })

    let [text, setText] = useState('')
    function inputVallue(event){

        setText(event.target.value)
    }

    const ClickPlus = () =>{
        if (text) {
            onChange(text)
            setText('')
        } else {
            setText("Add text")
            setInpBool(false)
            setBtnBool(false)
            setTimeout(()=>{
                setText("")
                setInpBool(true)
                setBtnBool(true)
            },1000)

        }
    }

    return(
        <div className="new">
            <div className="text">
                <input onChange={inputVallue} className={inputClass} value={text}/>
            </div>

            <button onClick={ClickPlus} className={btnClass}>

                <img src='https://cdn.icon-icons.com/icons2/488/PNG/512/plus_47697.png' alt="+"/>

            </button>
        </div>
    )
}

export default New
import './New.scss'
import {useRef, useState} from "react";
import classNames from "classnames";

function getKeyDate() {
    const now = new Date();
    return now.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// console.log(getKeyDate())
function New(props){

    const textRef = useRef()

    const focusError = (i) => {
        switch (true){
            case !text:
                textRef.current.focus()
                break
        }
    }


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
            props.dispatch({
                type : 'ADD_TEXT',
                payload : text,
                keyData : getKeyDate()
            })

            setText('')
        } else {


            setText("Add text")
            setInpBool(false)
            setBtnBool(false)
            setTimeout(()=>{
                setText("")
                setInpBool(true)
                setBtnBool(true)
                focusError(text)
            },1000)

        }
    }

    return(
        <div className="new">
            <div className="text">
                <input ref={textRef} onChange={inputVallue} className={inputClass} value={text}/>
            </div>

            <button onClick={ClickPlus} className={btnClass}>

                <img src='https://cdn.icon-icons.com/icons2/488/PNG/512/plus_47697.png' alt="+"/>

            </button>
        </div>
    )
}

export default New
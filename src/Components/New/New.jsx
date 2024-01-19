import './New.scss'
import {useState} from "react";
import classNames from "classnames";

function getKey() {
    const now = new Date();
    return  now.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
function New(props){


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
        const createKeyData = getKey()
        console.log(createKeyData)
        if (text) {
            props.dispatch({
                type : 'ADD_TEXT',
                payload : text,

                // data : createKeyData
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
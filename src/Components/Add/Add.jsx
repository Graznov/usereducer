import './Add.scss'
import classNames from "classnames";
import {useState} from "react";




function Add(props){

    const [completed, setCompleted] = useState(false)

    const valClass = classNames('val',{
        'valCompleted' : completed,
    })
    function clickGREEN(){
        (!completed) ? setCompleted(true) : setCompleted(false)
    }

    return(
        <div className="add">
            <output className={valClass}>{props.textWork}</output>
            <button onClick={clickGREEN} className="ok">
                <img src="https://cdn.icon-icons.com/icons2/404/PNG/128/check_40622.png" alt="V"/>
            </button>
            <button className="delit">
                <img src="https://cdn.icon-icons.com/icons2/404/PNG/128/delete_40623.png" alt="del"/>
            </button>
        </div>
    )
}
export default Add

// работа с кнопками галка и 
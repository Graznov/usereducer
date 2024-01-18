import './Add.scss'
import classNames from "classnames";
import {useState} from "react";

function Add(props){

    const [completed, setCompleted] = useState(false)

    const valClass = classNames('val',{
        'valCompleted' : completed,
    })
    const ok = classNames('ok',{
        'delitDeactive' : completed
    })
    const delite = classNames('delit', {
        'delitDeactive' : !completed
    })

    function clickGREEN(){
        (!completed) ? setCompleted(true) : setCompleted(false);
        props.callback(['GREEN',0])
    }

    function clickRED(){
        props.callback(['RED', props.textWork])
    }

    return(
        <div className="add">
            <output className={valClass}>{props.textWork}</output>
            <button onClick={clickGREEN} className={ok}>
                <img src="https://cdn.icon-icons.com/icons2/404/PNG/128/check_40622.png" alt="V"/>
            </button>
            <button onClick={clickRED} className={delite}>
                <img src="https://cdn.icon-icons.com/icons2/404/PNG/128/delete_40623.png" alt="del"/>
            </button>
        </div>
    )
}
export default Add

// работа с кнопками галка и
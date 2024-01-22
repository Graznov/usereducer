import './Add.scss'
import classNames from "classnames";
import {useState} from "react";

function Add(props){

    const [completed, setCompleted] = useState(false)

    const valClass = classNames('val',{
        'valCompleted' : completed,
    })
    const ok = classNames('ok',{
        // 'delitDeactive' : completed
    })
    const delite = classNames('delit', {
        'delitDeactive' : !completed
    })

    function clickGREEN(){
        (!completed) ? setCompleted(true) : setCompleted(false);
        props.dispatch({
            type : 'GREEN',
            payload : completed
        })
    }

    function clickRED(){
        props.dispatch({
            type : 'RED',
            payload : props.textWork,
            payData : props.data
        })
    }

    return(
        <div className="add">

            <div className={valClass}>
                <div className={'val_Data'}>{props.data} добавлена запись:</div>
                {props.textWork}
            </div>

            {/*<div className={'contBtn'}>*/}
                <button onClick={clickGREEN} className={ok}>
                    <img src="https://cdn.icon-icons.com/icons2/488/PNG/512/confirm_47757.png" alt="V"/>
                </button>
                <button onClick={clickRED} className={delite}>
                    <img src="https://cdn.icon-icons.com/icons2/488/PNG/512/plus_47697.png" alt="del"/>
                </button>
            {/*</div>*/}

        </div>
    )
}


export default Add

// работа с кнопками галка и
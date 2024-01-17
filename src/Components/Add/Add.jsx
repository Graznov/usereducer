import './Add.scss'
import classNames from "classnames";
import {useEffect} from "react";
function Add(props){

    let completed = false

    const valClass = classNames('val',{
        'valCompleted' : completed
    })

    function clickOk(){

        console.log('clickOk')
        console.log('completed - ', completed)

        if(completed){
            completed=false
        } else {
            completed=true
        }

    }

    return(
        <div className="add">
            <output className={valClass}>{props.textWork}</output>
            <button onClick={clickOk} className="ok">
                <img src="https://cdn.icon-icons.com/icons2/404/PNG/128/check_40622.png" alt="V"/>
            </button>
            <button className="delit">
                <img src="https://cdn.icon-icons.com/icons2/404/PNG/128/delete_40623.png" alt="del"/>
            </button>
        </div>
    )
}
export default Add
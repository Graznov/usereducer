import './Container.scss'
import Title from "./Components/title/Title.jsx";
import WorkArea from "./Components/WorkArea/WorkArea.jsx";
import New from "./Components/New/New.jsx";
import Add from "./Components/Add/Add.jsx";
import {useReducer} from "react";
import {reduser} from "./Reduser.js";



function Container() {

    const [state, dispatch] = useReducer(reduser, {
        arrWork : [],
        workValue : 0,
        endValue : 0,
    })

    return (
    <div className={'container'}>
        <Title/>
        <WorkArea workValue={state.workValue} endValue={state.endValue}/>

        {/*{list}*/}
        {state.arrWork.map((e,i) =>
            <Add dispatch={dispatch} key={e.key} textWork={e.text} data={e.key}/>
        )}


        <New dispatch={dispatch} />
    </div>
  )
}

export default Container


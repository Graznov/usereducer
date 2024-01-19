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
        // data : ''
    })

    // const list = state.arrWork.map((e) =>
    //         <Add dispatch={dispatch} key={new Date()} textWork={e}/>
    //     )
    // console.log(list)
    return (
    <div className={'container'}>
        <Title/>
        <WorkArea workValue={state.workValue} endValue={state.endValue}/>

        {/*{list}*/}
        {state.arrWork.map((e) =>
            <Add dispatch={dispatch} key={e} textWork={e}/>
        )}


        <New dispatch={dispatch} />
    </div>
  )
}

export default Container


import './Container.scss'
import Title from "./Components/title/Title.jsx";
import WorkArea from "./Components/WorkArea/WorkArea.jsx";
import New from "./Components/New/New.jsx";
import Add from "./Components/Add/Add.jsx";
import {useEffect, useReducer, useState} from "react";

const reduser = (state, action) => {

    switch (action.type){
        case 'ADD_TEXT' : {

            return{
                ...state,
                arrWork : [...state.arrWork, action.payload],
                workValue : state.workValue++,
                endValue : state.endValue
            }
        }
        case 'GREEN' : {

            return {
                ...state,
                endValue : state.endValue++
            }
        }
        case 'RED' : {

            return {
                ...state,
                arrWork : state.arrWork.filter(e => e !== action.payload),
                workValue : state.workValue--,
                endValue : state.endValue--
            }
        }
    }
}
function Container() {

    const handleNameChange = (name) => {

        dispatch({
            type : 'ADD_TEXT',
            payload : name
        })

    }

    const [state, dispatch] = useReducer(reduser, {
        arrWork : [],
        workValue : 0,
        endValue : 0
    })

    const callback = (item) => {
        dispatch({
            type : item[0],
            payload : item[1]
        })
    }

    const listItems = state.arrWork.map((e) =>
        <Add callback={callback} key={e} textWork={e}/>
    )

    console.log('listItems: ', listItems)

  return (
    <div className={'container'}>
        <Title/>
        <WorkArea workValue={state.workValue} endValue={state.endValue}/>

        {listItems}

        <New onChange={handleNameChange} />
    </div>
  )
}

export default Container


import './Container.scss'
import Title from "./Components/title/Title.jsx";
import WorkArea from "./Components/WorkArea/WorkArea.jsx";
import New from "./Components/New/New.jsx";
import Add from "./Components/Add/Add.jsx";
import {useEffect, useReducer, useState} from "react";


// let arrWork = ['1']

const reduser = (state, action) => {

    switch (action.type){
        case 'ADD_TEXT' : {
            console.log('ADD_TEXT')
            return{
                // ...state,
                arrWork : [...state.arrWork, action.payload],
                workValue : state.workValue++,
                endValue : state.endValue
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

    const listItems = state.arrWork.map((e, i) =>
        <Add  key={`${i}. ${e}`} textWork={e}/>
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


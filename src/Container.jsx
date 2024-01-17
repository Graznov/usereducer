import './Container.scss'
import Title from "./Components/title/Title.jsx";
import WorkArea from "./Components/WorkArea/WorkArea.jsx";
import New from "./Components/New/New.jsx";
import Add from "./Components/Add/Add.jsx";
import {useEffect, useReducer, useState} from "react";


let arrWork = []


const reduser = (state, action) => {
    switch (action.type){
        case 'ADD_TEXT' : {
            console.log('ADD_TEXT')
            console.log('action.payload: ',action.payload)
            console.log(state)
            arrWork.push(action.payload)


            return{
                // ...state,
                // arrWork : [...arrWork, action.payload]

            }
        }
    }
}
function Container() {
    useEffect(()=>{
        console.log('arrWork: ', arrWork)

    },[arrWork])
    const handleNameChange = (name) => {

        dispatch({
            type : 'ADD_TEXT',
            payload : name
        })

    }

    // console.log(text)

    const [state, dispatch] = useReducer(reduser, {
        arrWork,

        workValue : 0,
        endValue : 0
    })
    
    const listItems = arrWork.map((e, i) =>
        <Add key={i} textWork={e}/>
    )

    console.log('listItems: ', listItems)


    function addItem(){
        console.log(13)
    }

  return (
    <div className={'container'}>
        <Title/>
        <WorkArea/>

        {listItems}

        <New onChange={handleNameChange} />
    </div>
  )
}

export default Container


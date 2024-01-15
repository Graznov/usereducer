import './Container.scss'
import Title from "./Components/title/Title.jsx";
import WorkArea from "./Components/WorkArea/WorkArea.jsx";
import New from "./Components/New/New.jsx";
import Add from "./Components/Add/Add.jsx";
import {useReducer} from "react";


let arrWork = [
    {textVal: '1dfsdfsdf'},

]

const reduser = (state, action) => {
    switch (action.type){
        // case
    }
}
function Container() {

    const [state, dispatch] = useReducer(reduser, {
        arrWork,
        workValue : 0,
        endValue : 0
    })

    const listItems = arrWork.map(i =>
        <Add textWork={i.textVal}/>
    )

    console.log(listItems)


    function addItem(){
        console.log(13)
    }

  return (
    <div className={'container'}>
        <Title/>
        <WorkArea/>

        {listItems}

        <New click={addItem}/>
    </div>
  )
}

export default Container


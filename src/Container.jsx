import './Container.scss'
import Title from "./Components/title/Title.jsx";
import WorkArea from "./Components/WorkArea/WorkArea.jsx";
import New from "./Components/New/New.jsx";
import Add from "./Components/Add/Add.jsx";

function Container() {

    

  return (
    <div className={'container'}>
        <Title/>
        <WorkArea/>


        {/*<Add/>*/}
        {/*<Add/>*/}
        {/*<Add/>*/}


        <New/>
    </div>
  )
}

export default Container


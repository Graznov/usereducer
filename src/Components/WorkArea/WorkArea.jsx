import './WorkArea.scss'

function WorkArea(props){
    return(
        <div className="work">
            <p>Всего:<output className="workValue">{props.workValue}</output></p>
            <p>Выполнено:<output className="endValue">{props.endValue}</output></p>
        </div>
    )
}
export default WorkArea
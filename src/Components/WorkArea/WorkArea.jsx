import './WorkArea.scss'

function WorkArea(){
    return(
        <div className="work">
            <p>Всего:<output className="workValue">0</output></p>
            <p>Выполнено:<output className="endValue">0</output></p>
        </div>
    )
}
export default WorkArea
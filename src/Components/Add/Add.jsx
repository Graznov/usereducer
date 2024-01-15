import './Add.scss'
function Add(props){

    return(
        <div className="add">
            <output className="val">{props.textWork}</output>
            <button className="ok">
                <img src="https://cdn.icon-icons.com/icons2/404/PNG/128/check_40622.png" alt="V"/>
            </button>
            <button className="delit">
                <img src="https://cdn.icon-icons.com/icons2/404/PNG/128/delete_40623.png" alt="del"/>
            </button>
        </div>
    )
}
export default Add
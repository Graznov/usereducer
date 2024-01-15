import './New.scss'

let text = ''
function New({onChange}){


    function inputVallue(event){
        text = event.target.value
    }

    const ClickPlus = () =>{
        if (text) {
            onChange(text)
            text = ''
        }
    }

    return(
        <div className="new">
            <div className="text">
                <input onChange={inputVallue} className="abc"/>
            </div>

            <button onClick={ClickPlus} className="NewWork">

                <img src='https://cdn.icon-icons.com/icons2/404/PNG/128/plus_40632.png' alt="+"/>

            </button>
        </div>
    )
}

export default New
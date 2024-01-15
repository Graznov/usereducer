import './New.scss'


let text = ''
function New(){


    function inputVallue(event){
        text = event.target.value
    }
    const ClickPlus = () =>{

        console.log('PLUS')

        console.log(text)
    }

    return(
        <div className="new">
            <div className="text">
                <input onChange={inputVallue} className="abc"></input>
            </div>

            <button onClick={ClickPlus} className="NewWork">

                <img src='https://cdn.icon-icons.com/icons2/404/PNG/128/plus_40632.png' alt="+"/>

            </button>
        </div>
    )
}

export default New
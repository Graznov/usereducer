import './InputArea.scss'
function InputArea({value, onChangeInp}){

    return(
        <>
            <input onChange={onChangeInp} value={value}/>
        </>
    )
}

export default InputArea
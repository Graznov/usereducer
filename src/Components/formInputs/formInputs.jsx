import './formInputs.scss'
import InputArea from "../input/InputArea.jsx";
import ButtonInputArea from "../Buttons/ButtonInputArea.jsx";

let objProps = {
    textBtnInp : "Push My",

    textInputData : "Введи дату",
    onChangeInp : () => {
        console.log("ChangeData")
    }

}
function FormInputs(){




    return(
        <div className={'formInput'}>
            <InputArea onChange={objProps.onChangeInp} value={objProps.textInputData}/>
            <InputArea/>
            <InputArea/>
            <ButtonInputArea text={objProps.textBtnInp}/>
        </div>
    )
}

export default FormInputs
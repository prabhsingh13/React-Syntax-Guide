import { useState } from "react";
function ClickToChange() {

    let [text, setText] = useState(0);

    function ChangeText() {
        let value = text+1
        setText(value);
    }
    return (
        <div className="container bg-light shadow-lg mt-5 p-4 border border-warning rounded">
            <div className="d-flex flex-rows justify-content-between">
                <h3>{'You Have Clicked This Button '+ text + ' Times.'}</h3>
                <button id="changeTextButton" className="btn btn-warning" onClick={ChangeText}>
                    Click Here!!
                </button>
            </div>
        </div>
    );
}
export default ClickToChange;
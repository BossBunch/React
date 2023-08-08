import { useState, ChangeEvent, ChangeEventHandler } from "react";

//interface IstepOneParent {
//    textChange: (event: object) => void
//}

type StepOneProps = {
    textChange: ChangeEventHandler<HTMLInputElement>
}




const stepOne = ({ textChange }: StepOneProps) => {
    return (

        <div className="container mt-12">
            <div className="row">
                <input type="text" name="applicationName" onChange={textChange}></input>
                <input type="text" name="applicationId" onChange={textChange}></input>
            </div>
        </div>

    )
}

export default stepOne;
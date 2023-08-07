import { useState } from "react";

const stepOne = ({ parent }) => {
    return (

        <div className="container mt-12">
            <div className="row">
                <input type="text" name="applicationName" onChange={parent.textChange}></input>
                <input type="text" name="applicationId" onChange={parent.textChange}></input>
            </div>
        </div>

    )
}

export default stepOne;
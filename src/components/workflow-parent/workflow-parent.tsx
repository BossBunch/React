import { useState, ChangeEvent, ChangeEventHandler } from "react";
import StepOne from './stepOne';
import * as PropTypes from 'prop-types';
import ApplicationMasterApi from "../../service/applicationMaster";

const WorkflowParent = () => {
    const handleNext = () => {
        console.log('Next');
    }
    const handlePrevious = () => {
        console.log('Previous');
    }

    const [userName, setUserName] = useState<string>("Maxwell");
    const [step, setStep] = useState<number>(0);
    const [applicationDetails, setApplicationDetails] = useState<ApplicationMasterApi.IApplicationMaster>({
        applicationId: 0,
        applicationName: '',
        applicationCategory: ''
    });

    

    const handleClick = (event: HTMLInputElement) => {
        console.log('Click');
        console.log(userName);
        console.log(applicationDetails);
    }

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>):void =>  {
        if (event.target.name == userName) {
            setUserName(event.target.value);
        }
        else if (event.target.name == "applicationName") {
            console.log(event.target.value);
            setApplicationDetails({ ...applicationDetails, applicationName: event.target.value });
        }
        else if (event.target.name == "applicationId") {
            console.log(event.target.value);
            setApplicationDetails({ ...applicationDetails, applicationId: parseInt(event.target.value) });
        }
    }



    const step2 = () => {
        return (

            <div className="container mt-12">
                <div className="row">
                    <label>Name:</label>
                    <input type="text" name={userName} onChange={handleTextChange} />
                </div>
            </div>

        )
    }
   
    return (
        <div className="container mt-12">
            <div className="row">
                <div className="col-lg-12">
                    <form>
                        <StepOne textChange={handleTextChange} />
                        {step2()}

                    </form>
                    {/*    <button name="ClickMe" onClick={handleClick}>Click Me</button>*/}
                    {/*<div>{userName}</div>*/}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    <button onClick={handlePrevious}>Previous</button>
                </div>
                <div className="col-sm-8">

                </div>
                <div className="col-sm-2">
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>




    )
}

export default WorkflowParent;
import {  Fragment, useState } from "react";
import ApplicationMasterApi from '../../service/applicationMaster';

const CreateUser = ({ parentData }) => {
    const initialState = {
        id: 0,
        applicationName: '',
        applicationCategory: ''
    };
    const [applicationDetail, setApplicationDetail] = useState(initialState);

    const handleTextChange = (event) => {
        if (event.target.name == applicationDetail.applicationId) {

            setApplicationDetail({ ...applicationDetail, applicationId: event.target.value });
        }
        else if (event.target.name == applicationDetail.applicationName) {

            setApplicationDetail({ ...applicationDetail, applicationName: event.target.value });
        }
        else if (event.target.name == applicationDetail.applicationCategory) {

            setApplicationDetail({ ...applicationDetail, applicationCategory: event.target.value });
        }
    }

    const handleSubmit = (event) => {
        alert(JSON.stringify(applicationDetail));
        console.log(applicationDetail);
        event.preventDefault();
        ApplicationMasterApi.Create(applicationDetail).then((data) => {
            console.log('pushing to allApplications');
            parentData(data);
            console.log('pushing to allApplications done');
            setApplicationDetail({ ...applicationDetail, ...initialState });
        });
        //setAllApplications([...allApplications, data]);

        //console.log(allApplications);
    }

    return (
        <div className="container mt-12">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Application Id:</label>
                    <label>{applicationDetail.id}</label>
                    
                </div>
                <div>
                    <label>ApplicationName:</label>
                    <input type="text" value={applicationDetail.applicationName} onChange={handleTextChange} name={applicationDetail.applicationName} />
                </div>
                <div>
                    <label>Application Category</label>
                    <input type="text" value={applicationDetail.applicationCategory} onChange={handleTextChange} name={applicationDetail.applicationCategory} />
                </div>
                <button type="submit" >Create Application</button>
            </form>

        </div>
    )
}

export default CreateUser;
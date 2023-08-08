import { parse } from "path";
import {  Fragment, useState ,ChangeEvent,FormEvent} from "react";
import ApplicationMasterApi from '../../service/applicationMaster';

type ParentProp ={
    parentData: (newApp: ApplicationMasterApi.IApplicationMaster)=> void
}

const CreateUser = ({ parentData }: ParentProp) => {
    const [applicationDetail, setApplicationDetail] = useState<ApplicationMasterApi.IApplicationMaster>({
        applicationId: 100,
        applicationName: '',
        applicationCategory: ''
    });

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.name == applicationDetail.applicationId.toString()) {

            setApplicationDetail({ ...applicationDetail, applicationId: parseInt(event.target.value) });
        }
        else if (event.target.name == applicationDetail.applicationName) {

            setApplicationDetail({ ...applicationDetail, applicationName: event.target.value });
        }
        else if (event.target.name == applicationDetail.applicationCategory) {

            setApplicationDetail({ ...applicationDetail, applicationCategory: event.target.value });
        }
    }

    const handleSubmit = (event : FormEvent) => {
        alert(JSON.stringify(applicationDetail));
        console.log(applicationDetail);
        event.preventDefault();
        ApplicationMasterApi.Create(applicationDetail).then((data) => {
            console.log('pushing to allApplications');
            parentData(data);
            console.log('pushing to allApplications done');
        });
        //setAllApplications([...allApplications, data]);

        //console.log(allApplications);
    }

    return (
        <div className="container mt-12">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Application Id:</label>
                    <input type="text" onChange={handleTextChange} name={applicationDetail.applicationId.toString()} />
                </div>
                <div>
                    <label>ApplicationName:</label>
                    <input type="text" onChange={handleTextChange} name={applicationDetail.applicationName} />
                </div>
                <div>
                    <label>Application Category</label>
                    <input type="text" onChange={handleTextChange} name={applicationDetail.applicationCategory} />
                </div>
                <button type="submit" >Create Application</button>
            </form>

        </div>
    )
}

export default CreateUser;
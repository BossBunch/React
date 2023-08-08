import ApplicationMasterApi from '../../service/applicationMaster';
import { useEffect, useRef, Fragment,useState } from "react";
import CreateUser from "./child.component";
import { current } from '@reduxjs/toolkit';



const Parent = () => {
    

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dataFetchedRef = useRef<boolean>(false);
    const [allApplications, setAllApplications] = useState<ApplicationMasterApi.IApplicationMaster[]>([]);

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        console.log('in use effect');
        ApplicationMasterApi.GetData().then((data) => {
            console.log('Printing data');
          
            setAllApplications(current => [...current, ...data]);
            
            setIsLoading(false);
            console.log(allApplications);
            console.log('Done');
        });
    }, [])

    const addInParentState = (newApp : ApplicationMasterApi.IApplicationMaster):void => {
        setAllApplications([...allApplications, newApp]);
        console.log(allApplications);
    }

    

    const data = () => {
        if (isLoading === true) {
            return (<div>Is Loading...</div>)
        }
        else {
            return (
                <div>
                    <p>Loading Completed</p>
                    <div className="div-table">
                        <div className="trow">
                            <div className="tcolumn tcolumn1">Application Id</div>
                            <div className="tcolumn tcolumn1">Application Name</div>
                            <div className="tcolumn tcolumn1">Application Category</div>
                        </div>
                        {allApplications.map((app : ApplicationMasterApi.IApplicationMaster) => (
                            <div key={app.applicationId} className="trow">

                                <div className="tcolumn">{app.applicationId}</div>
                                <div className="tcolumn">{app.applicationName}</div>
                                <div className="tcolumn">{app.applicationCategory}</div>

                            </div>
                        ))}
                    </div>
                </div>
            )




        }
    }

    return (

        <Fragment>
            <CreateUser parentData={addInParentState}></CreateUser>
            {data()}
            <br></br>

        </Fragment>
    )

}

export default Parent;



import axios from 'axios';
//name
//const ApplicationMasterApi = {};
//const ApplicationMasterApi = (ApplicationMasterApi === undefined ? {} : ApplicationMasterApi);

//if (!ApplicationMasterApi) {
//	const ApplicationMasterApi = {};
//}
namespace ApplicationMasterApi {

	export interface IApplicationMaster {
		applicationId: number,
		applicationName: string,
		applicationCategory: string
	}

	export const GetData = async (): Promise<IApplicationMaster[]> => {


		//const response = await fetch('http://localhost:5204/ApplicationMaster', {
		
		console.log('Getting all application data from Api');
		const response = await axios.get<IApplicationMaster[]>('/ApplicationMaster', {
			headers:
			{
				'content-type': 'application/json'
			},
			params:
			{

			}
		});
		console.log('printing all the data');
		console.log(response.data.length);
		return response.data;
	}

	export const Create = async (data: IApplicationMaster): Promise<IApplicationMaster> => {
		const response = await axios.post('/ApplicationMaster', data, {
			headers:
			{
				'content-type': 'application/json',
				'Accept': 'application/json'
			},
			params:
			{

			}
			//,
			//mode: 'no-cors'
		});
		console.log(response.data);
		return response.data;
	}
}
export default ApplicationMasterApi;
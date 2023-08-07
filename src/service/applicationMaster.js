import axios from 'axios';
//name
const ApplicationMasterApi = {};
//const ApplicationMasterApi = (ApplicationMasterApi === undefined ? {} : ApplicationMasterApi);

//if (!ApplicationMasterApi) {
//	const ApplicationMasterApi = {};
//}


ApplicationMasterApi.GetData = async () => {
	

	//const response = await fetch('http://localhost:5204/ApplicationMaster', {
	//	mode: 'no-cors', headers: new Headers({
	//		'content-type': 'application/json'
	//	})
	//}, );
	//console.log( response )
	//const data = await response;
	//console.log({ data })
	console.log('Getting all application data from Api');
	const response = await axios.get('/ApplicationMaster', {
		headers:
		{
			'content-type': 'application/json'
		},
		params:
		{
			
		},
		mode: 'no-cors'
	});
	console.log('printing all the data');
	console.log(response.data.length);
	return response.data;
}

ApplicationMasterApi.Create = async (data) => {
	const response = await axios.post('/ApplicationMaster',data, {
		headers:
		{
			'content-type': 'application/json',
			'Accept': 'application/json'
		},
		params:
		{

		},
		mode: 'no-cors'
	});
	console.log(response.data);
	return response.data;
}

export default ApplicationMasterApi;
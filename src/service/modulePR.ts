//import axios from 'axios';
//import  getData from '../utils/data.utils';

////namespace
//const PullRequestsApi = {};
////check if namespace exist
////const PullRequestsApi = PullRequestsApi || {};

//interface IPullRequestResponse  {

//}

//PullRequestsApi.GetPullRequests = async () => {
//	const pullRequests = await getData<IPullRequestResponse>('https://api.github.com/repos/BossBunch/UI.MvcApplication/pulls');
//	pullRequests

//	//const response = await axios.get('https://api.github.com/repos/BossBunch/UI.MvcApplication/pulls', {
//	//	headers:
//	//	{
//	//		Authorization: 'Basic TWF4d2VsbE1lbmRlczkwOmdocF91NjZ0MHV3dGgyZjN2OFhQS3h2czBPN1FoemZQbEEwbkRVN1Q='
//	//	},
//	//	params:
//	//	{
//	//		query: ''
//	//	}
//	//});
//	////console.log(response.data);
//	//return response.data;
//}

//PullRequestsApi.GetPullRequests2 = async () => {
//	const response = await axios.get('https://api.github.com/repos/BossBunch/UI.MvcApplication/pulls', {
//		headers:
//		{
//			Authorization: 'Basic TWF4d2VsbE1lbmRlczkwOmdocF91NjZ0MHV3dGgyZjN2OFhQS3h2czBPN1FoemZQbEEwbkRVN1Q='
//		},
//		params:
//		{
//			query: ''
//		}
//	});
//	//console.log(response.data);
//	return response.data;
//}
//export default PullRequestsApi;

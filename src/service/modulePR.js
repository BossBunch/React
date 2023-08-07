import axios from 'axios';

//namespace
const PullRequestsApi = {};
//check if namespace exist
//const PullRequestsApi = PullRequestsApi || {};

PullRequestsApi.GetPullRequests = async () => {
	const response = await axios.get('https://api.github.com/repos/BossBunch/UI.MvcApplication/pulls', {
		headers:
		{
			Authorization: 'Basic TWF4d2VsbE1lbmRlczkwOmdocF91NjZ0MHV3dGgyZjN2OFhQS3h2czBPN1FoemZQbEEwbkRVN1Q='
		},
		params:
		{
			query: ''
		}
	});
	//console.log(response.data);
	return response.data;
}

PullRequestsApi.GetPullRequests2 = async () => {
	const response = await axios.get('https://api.github.com/repos/BossBunch/UI.MvcApplication/pulls', {
		headers:
		{
			Authorization: 'Basic TWF4d2VsbE1lbmRlczkwOmdocF91NjZ0MHV3dGgyZjN2OFhQS3h2czBPN1FoemZQbEEwbkRVN1Q='
		},
		params:
		{
			query: ''
		}
	});
	//console.log(response.data);
	return response.data;
}
export default PullRequestsApi;

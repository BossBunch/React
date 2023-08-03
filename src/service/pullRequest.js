//import { Component } from "react";
import axios from 'axios';

const pullRequests = async () => {
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
	console.log(response.data);
	return response.data;
}


//class PullRequests extends Component {
//	async GetPullRequests() {
//		const response = await axios.get('https://api.github.com/repos/BossBunch/UI.MvcApplication/pulls', {
//			headers:
//			{
//				Authorization: 'Basic TWF4d2VsbE1lbmRlczkwOmdocF91NjZ0MHV3dGgyZjN2OFhQS3h2czBPN1FoemZQbEEwbkRVN1Q='
//			},
//			params:
//			{
//				query: ''
//			}
//		});
//		console.log(response.data.results);
//		return response.data.results.title;
//	}

//}

export default pullRequests;
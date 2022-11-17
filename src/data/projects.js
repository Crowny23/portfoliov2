// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Fbr rénovation',
		category: 'Web Application',
		img: require('@/assets/images/fbr/web-projet.png'),
		link: 'fbr-renov',
	},
	{
		id: 2,
		title: 'Moviap',
		category: 'Web Application',
		img: require('@/assets/images/moviap/react-vue-2.png'),
		link: 'moviap',
	}
];

export default projects;

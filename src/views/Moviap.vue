<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		// ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Moviap React / VueJs',
				singleProjectDate: '15 août 2022',
				singleProjectTag: 'Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Moviap React Vuejs',
					img: require('@/assets/images/moviap/react-vue-2.png'),
				},
				{
					id: 2,
					title: 'Moviap React',
					img: require('@/assets/images/moviap/react.png'),
				},
				{
					id: 3,
					title: 'Moviap VueJs',
					img: require('@/assets/images/moviap/vue.png'),
				},
			],
			projectInfo: {
				clientHeading: 'Info Client',
				companyInfos: [
					{
						id: 1,
						title: 'Nom',
						details: 'Exercice',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Frontend Developpement',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://moviap-react.fr.boutsady-portfolio.fr/',
						link: 'https://moviap-react.fr.boutsady-portfolio.fr/',
					},
					{
						id: 4,
						title: 'Website',
						details: 'https://moviap-vuejs.fr.boutsady-portfolio.fr/',
						link: 'https://moviap-vuejs.fr.boutsady-portfolio.fr/',
					},
					{
						id: 5,
						title: 'Tel',
						details: '0656676787',
						link: 'tel:0656676787',
					},
				],
				objectivesHeading: 'Objectif',
				objectivesDetails:
					'L\'objectif de ce projet est l\'apprentissage pour utiliser un Api REST et l\'utilisation de VueJS, React était un plus.',
				technologies: [
					{
						title: 'Technologies',
						techs: [
							'HTML',
							'SCSS',
							'JavaScript',
							'Symfony',
							'Bootstrap',
							'Figma',
							'Twig',
						],
					},
				],
				projectDetailsHeading: 'Réalisations',
				projectDetails: [
					{
						id: 1,
						details:
							'Ce projet est un exercice que j\'ai fait lors de ma formation. La partie React était un plus, je voulais voir un peu d\'autre framework JS.',
					},
				],
				socialSharingsHeading: 'Partager',
				socialSharings: [
					{
						id: 1,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://instagram.com/',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: 'facebook',
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: 'youtube',
						url: 'https://www.youtube.com/',
					},
				],
			},
			// },
			// relatedProject: {
			// 	relatedProjectsHeading: 'Related Projects',
			// 	relatedProjects: [
			// 		{
			// 			id: 1,
			// 			title: 'Mobile UI',
			// 			img: require('@/assets/images/mobile-project-1.jpg'),
			// 		},
			// 		{
			// 			id: 2,
			// 			title: 'Web Application',
			// 			img: require('@/assets/images/web-project-1.jpg'),
			// 		},
			// 		{
			// 			id: 3,
			// 			title: 'UI Design',
			// 			img: require('@/assets/images/ui-project-2.jpg'),
			// 		},
			// 		{
			// 			id: 4,
			// 			title: 'Kabul Mobile App UI',
			// 			img: require('@/assets/images/mobile-project-2.jpg'),
			// 		},
			// 	],
			// },
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
	</div>
</template>

<style scoped></style>

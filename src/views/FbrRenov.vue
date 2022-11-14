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
				singleProjectTitle: 'Fbr rénovation CRM',
				singleProjectDate: '8 novembre 2022',
				singleProjectTag: 'Backend / Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: 'Fbr Project Management UI',
					img: require('@/assets/images/fbr/web-projet.png'),
				},
				{
					id: 2,
					title: 'Fbr Project Management UI',
					img: require('@/assets/images/fbr/mobile-projet.png'),
				},
			],
			projectInfo: {
				clientHeading: 'Info Client',
				companyInfos: [
					{
						id: 1,
						title: 'Nom',
						details: 'Fbr Rénovation Immobilière',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Backend & Frontend Developpement',
					},
					{
						id: 3,
						title: 'Website',
						details: 'https://fbr-renovation.fr/',
						link: 'https://fbr-renovation.fr/',
					},
					{
						id: 4,
						title: 'Tel',
						details: '0628771225',
						link: 'tel:0628771225',
					},
				],
				objectivesHeading: 'Objectif',
				objectivesDetails:
					'Le projet devait répondre aux problèmatiques de gestion de clients et de documents auxquelles l\'entreprise est confrontée. La création d\'une application web sous forme de CRM (Customer Relationship Management) visant à simplifier la gestion.',
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
							'Le projet a été fait en groupe. Les principales fonctionnalités que nous devions développer en priorité fût : -CRUD avec tableaux listant les clients, chantiers, dépannages, devis et locations de matériel -Générateur de PDF du devis et de la facture -Connexion sécurisée en fonction du rôle de l’utilisateur',
					},
					{
						id: 2,
						details:
							'Au début du projet, nous avons commencé par construire un MCD de la base de données via dbdiagram.io, pour baser notre projet. Nous avons décidé d’utiliser les technologies Symfony, twig, MySQL et github pour développer le projet.',
					},
					{
						id: 3,
						details:
							'Durant le projet, j’ai développé les fonctionnalités suivantes : -CRUD clients ainsi que dépannage sans l’utilisation du bundle EasyAdmin -l’inscription et la connexion de l’utilisateur -l’upload des documents et des images -le générateur de PDF des factures et devis',
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

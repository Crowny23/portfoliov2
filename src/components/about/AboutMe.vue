<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Ayant depuis l\'enfance une fascination pour l\'informatique, j\'ai tourné mes études vers elle. Pour autant, le monde de l\'informatique est vaste, alors vers quel domaine vais-je me retrouver ? Au départ je voulais devenir GameDesigner, puis cette idée me semblait beaucoup trop vague pour le futur. En faisant des petits boulots ici et là, en essayant de trouver ma voie, j\'ai travaillé à domicile en suivant des cours sur Youtube ou sur OpenClassRoom. J\'ai trouvé une formation intéressante pour Dévelloppeur web et en réalité, c\'est génial, aussi vaste que l\'informatique, tellement de possibilité. Je suis dynamique, créative et sociable. Voici les langagues que j\'ai vu et que j\'aime.',
				},
			],
			langages: [
				{
					id: 1,
					name: 'php',
					langage:
							require('@/assets/images/langages/php.png'),
					like: 5,
				},
				{
					id: 2,
					name: 'html',
					langage:
							require('@/assets/images/langages/html-5.png'),
					like: 3,
				},
				{
					id: 3,
					name: 'sass',
					langage:
							require('@/assets/images/langages/sass.png'),
					like: 5,
				},
				{
					id: 4,
					name: 'sql',
					langage:
							require('@/assets/images/langages/sql-server.png'),
					like: 3,
				},
				{
					id: 5,
					name: 'C++',
					langage:
							require('@/assets/images/langages/c.png'),
					like: 3,
				},
				{
					id: 6,
					name: 'JavaScript',
					langage:
							require('@/assets/images/langages/js.png'),
					like: 5,
				},
				{
					id: 7,
					name: 'Python',
					langage:
							require('@/assets/images/langages/python.png'),
					like: 4,
				},
				{
					id: 8,
					name: 'Bootstrap',
					langage:
							require('@/assets/images/langages/bootstrap.png'),
					like: 4,
				},
				{
					id: 9,
					name: 'TailWind',
					langage:
							require('@/assets/images/langages/tailwindcss-mark.svg'),
					like: 4,
				},
				{
					id: 10,
					name: 'Wordpress',
					langage:
							require('@/assets/images/langages/wordpress.png'),
					like: 2,
				},
				{
					id: 11,
					name: 'VueJS',
					langage:
							require('@/assets/images/langages/vuejs-seeklogo.com.svg'),
					like: 5,
				},
				{
					id: 12,
					name: 'React',
					langage:
							require('@/assets/images/langages/react.png'),
					like: 4,
				},
				{
					id: 13,
					name: 'Symfony',
					langage:
							require('@/assets/images/langages/symfony_black_03.png'),
					like: 5,
				},
			]
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
			<ul
				class="grid grid-flow-row grid-cols-1 gap-x-30 gap-y-2 sm:grid-cols-2 md:grid-cols-3 font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				<li 
					v-for="langage in langages"
					:key="langage.id"
					class="flex text-center items-center"
				>
						<img 
							:src="langage.langage" 
							class="w-12"
						>
						<img 
							v-for="n in langage.like"
							:key="n"
							src="@/assets/images/star.svg" 
							class="w-4 h-4 ml-1"
						>
				</li>
			</ul>
		</div>
	</div>
</template>

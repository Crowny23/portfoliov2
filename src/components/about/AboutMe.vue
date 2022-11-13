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
					langage:
							'Php',
					like: 5,
				},
				{
					id: 2,
					langage:
							'Html',
					like: 3,
				},
				{
					id: 3,
					langage:
							'CSS/SASS',
					like: 5,
				},
				{
					id: 4,
					langage:
							'SQL',
					like: 3,
				},
				{
					id: 5,
					langage:
							'C++',
					like: 3,
				},
				{
					id: 6,
					langage:
							'JavaScript',
					like: 5,
				},
				{
					id: 7,
					langage:
							'Python',
					like: 4,
				},
				{
					id: 8,
					langage:
							'Bootstrap',
					like: 4,
				},
				{
					id: 9,
					langage:
							'TailWind',
					like: 4,
				},
				{
					id: 10,
					langage:
							'Wordpress',
					like: 2,
				},
				{
					id: 11,
					langage:
							'VueJS',
					like: 5,
				},
				{
					id: 12,
					langage:
							'React',
					like: 4,
				},
				{
					id: 13,
					langage:
							'Symfony',
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
					class="flex text-center"
				>
					{{langage.langage}} 
						<img 
							v-for="n in langage.like"
							:key="n"
							src="@/assets/images/heart-fill-custom.svg" 
							class="w-4 ml-1"
						>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Portfolio BOUTSADY',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<span
				class="font-general-medium"
			>
				{{ projectName }}
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

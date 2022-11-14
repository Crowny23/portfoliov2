<script>
import Button from '../reusable/Button.vue';
import emailjs from 'emailjs-com';
import {ref} from 'vue';

export default { 
	components: { Button },
	setup() {
		const form = ref(null);
		const inputFieldReset = ref(null);

		const sendMail = async () => {
			const send = await emailjs.sendForm('service_6w9xt0r', 'template_39g05g2', form.value, 'JlmBVjaC1jgxicIgh');
			if (send.status == 200) {
				alert('Votre message a été envoyé !')
			} else {
				alert('Votre message n\'a pas été envoyé !')
			}
		}

		return{
			form,
			inputFieldReset,
			sendMail
		}
	},
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				Formulaire
			</p>
			<form ref="form" @submit.prevent="sendMail" class="font-general-regular space-y-7">
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="name"
						>Votre nom</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="name"
						name="from_name"
						type="text"
						required
						placeholder="Votre nom"
						aria-label="Name"
						:value="inputFieldReset"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="email"
						>Email</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="email"
						name="email"
						type="text"
						required
						placeholder="Votre Email"
						aria-label="Email"
						:value="inputFieldReset"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>Sujet</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="subject"
						name="subject"
						type="text"
						required
						placeholder="Sujet"
						aria-label="Subject"
						:value="inputFieldReset"
					/>
				</div>

				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="message"
						>Message</label
					>
					<textarea
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="message"
						name="message"
						cols="14"
						rows="6"
						required
						aria-label="Message"
						placeholder="Votre message"
						:value="inputFieldReset"
					></textarea>
				</div>

				<div>
					<Button
						title="Envoyer"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

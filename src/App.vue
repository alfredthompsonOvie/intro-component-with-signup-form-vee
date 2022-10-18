<template>
	<div class="container">
		<app-content />
		
    <signup-form />
		<footer>
			<p class="attribution">
				Challenge by
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
					>Frontend Mentor</a
				>. Coded by
				<a
					href="https://www.linkedin.com/in/alfredthompsonovie/"
					target="_blank"
					>Alfred Thompson Ovie</a
				>.
			</p>
		</footer>
	</div>
</template>

<script>
import AppContent from "@/components/AppContent.vue"
import SignupForm from "@/components/SignupForm.vue"
export default {
  name: "App",
  components: {
    AppContent,
    SignupForm
  }
};
</script>

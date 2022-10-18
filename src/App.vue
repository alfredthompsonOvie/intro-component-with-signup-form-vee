<template>
	<div class="container">
		<app-content />
		<div class="signup-form">
			<div class="sales trial__info">
				<p>
					Try it free 7 days
					<span class="pricing">then $20/mo. thereafter</span>
				</p>
			</div>
			<div class="formContainer">
				<form class="form">
					<div class="formGroup">
						<label for="firstName"></label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							placeholder="First Name"
							class="firstName"
						/>
						<img
							src="@/assets/icon-error.svg"
							alt="error icon"
							class="errorImg"
						/>
						<small class="errorMessage"> First Name cannot be empty </small>
					</div>
					<div class="formGroup">
						<label for="lastName"> </label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="Last Name"
							class="lastName"
						/>
						<img
              src="@/assets/icon-error.svg"
							alt="error icon"
							class="errorImg"
						/>
						<small class="errorMessage"> Last Name cannot be empty </small>
					</div>
					<div class="formGroup">
						<label for="email"></label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email Address"
							class="email"
						/>
						<img
              src="@/assets/icon-error.svg"
							alt="error icon"
							class="errorImg"
						/>
						<small class="errorMessage">
							Looks like this is not an email
						</small>
					</div>
					<div class="formGroup">
						<label for="password"></label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							class="password"
						/>
						<img
              src="@/assets/icon-error.svg"
							alt="error icon"
							class="errorImg"
						/>
						<small class="errorMessage"> Password cannot be empty </small>
					</div>
					<div class="formGroup">
						<button type="submit" class="btn cta">claim your free trail</button>
					</div>
				</form>
				<p class="termsAndConditions">
					<small>
						<span> By clicking the button you are agreeing to our </span>
						<span>
							<a href="#" class="termsAndSevices">Terms and Services</a></span
						>
					</small>
				</p>
			</div>
		</div>

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
export default {
  name: "App",
  components: {
    AppContent,
  }
};
</script>

<style></style>

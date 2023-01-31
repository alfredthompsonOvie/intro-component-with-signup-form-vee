<template>
	<section class="signup-form">
		<h1 class="trial__info">
			Try it free 7 days
			<span class="pricing">then $20/mo. thereafter</span>
			<!-- <p>
			</p> -->
		</h1>
		<section class="formContainer">
			<vee-form class="form" :validation-schema="schema" @submit="onSubmit">
				<section class="formGroup">
					<label for="firstName"></label>
					<vee-field name="firstName" :bails="false" v-slot="{ field, errors }">
						<input
							type="text"
							id="firstName"
							placeholder="First Name"
							class="firstName"
							:class="{ error: errors.length }"
							v-bind="field"
							aria-label="enter first name"
						/>
						<p v-for="error in errors" :key="error" class="errorMessage">
							{{ error }}
						</p>
						<img
							v-if="errors.length"
							src="@/assets/icon-error.svg"
							alt="exclamation mark"
							class="errorImg"
						/>
					</vee-field>
				</section>

				<section class="formGroup">
					<label for="lastName"></label>
					<vee-field :bails="false" v-slot="{ field, errors }" name="lastName">
						<input
							type="text"
							id="lastName"
							placeholder="Last Name"
							class="lastName"
							:class="{ error: errors.length }"
							v-bind="field"
							aria-label="enter last name"
						/>
						<p v-for="error in errors" :key="error" class="errorMessage">
							{{ error }}
						</p>
						<img
							src="@/assets/icon-error.svg"
							alt="exclamation mark"
							class="errorImg"
							v-if="errors.length"
						/>
					</vee-field>
				</section>

				<section class="formGroup">
					<label for="email"></label>
					<vee-field name="email" :bails="false" v-slot="{ field, errors }">
						<input
							type="email"
							id="email"
							placeholder="Email Address"
							class="email"
              :class="{ error: errors.length }"
              v-bind="field"
							aria-label="enter email address"
						/>
            <p v-for="error in errors" :key="error" class="errorMessage">
              {{ error }}
            </p>
            <img
              src="@/assets/icon-error.svg"
              alt="exclamation mark"
              class="errorImg"
              v-show="errors.length"
            />
					</vee-field>
				</section>

				<section class="formGroup">
					<label for="password"></label>
					<vee-field
          name="password"
						:bails="false"
            v-slot="{ field, errors }"
					>
          <input 
          type="password"
						id="password"
						placeholder="Password"
						class="password"
            :class="{ error: errors.length }"
            v-bind="field"
						aria-label="enter password"
          >
          <p v-for="error in errors" :key="error" class="errorMessage">
            {{ error }}
          </p>
					<img
						src="@/assets/icon-error.svg"
						alt="exclamation mark"
						class="errorImg"
            v-show="errors.length"
					/>
        </vee-field>
			</section>
				<div class="formGroup">
					<button type="submit" class="btn cta">claim your free trail</button>
				</div>
			</vee-form>
			<p class="termsAndConditions">
				<small>
					<span> By clicking the button you are agreeing to our </span>
					<span>
						<!-- using anchor tag instead of routerlink because i didnt set up this project with routing capabilities -->
						<a href="#" class="termsAndSevices">Terms and Services</a></span
					>
				</small>
			</p>
		</section>
	</section>
</template>

<script>
export default {
	name: "SignupForm",
	data() {
		return {
			schema: {
				firstName: "firstName|min:2|max:30",
				lastName: "lastName|min:2|max:30",
				email: "required|min:2|max:30|email",
				password: "password|min:2|max:30|is_not:password",
			},
		};
	},
	methods: {
		onSubmit(values) {
			console.log(values);
		},
	},
};
</script>


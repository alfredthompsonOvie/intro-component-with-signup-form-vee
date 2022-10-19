<template>
	<div class="signup-form">
		<div class="sales trial__info">
			<p>
				Try it free 7 days
				<span class="pricing">then $20/mo. thereafter</span>
			</p>
		</div>
		<div class="formContainer">
			<vee-form class="form" :validation-schema="schema" @submit="onSubmit">
				<div class="formGroup">
					<label for="firstName"></label>
					<vee-field name="firstName" :bails="false" v-slot="{ field, errors }">
						<input
							type="text"
							id="firstName"
							placeholder="First Name"
							class="firstName"
							:class="{ error: errors.length }"
							v-bind="field"
						/>
						<div v-for="error in errors" :key="error" class="errorMessage">
							{{ error }}
						</div>
						<img
							v-if="errors.length"
							src="@/assets/icon-error.svg"
							alt="error icon"
							class="errorImg"
						/>
					</vee-field>
				</div>
				<!-- ----------------------------------------------------------------------- -->

				<div class="formGroup">
					<label for="lastName"> </label>
					<vee-field :bails="false" v-slot="{ field, errors }" name="lastName">
						<input
							type="text"
							id="lastName"
							placeholder="Last Name"
							class="lastName"
							:class="{ error: errors.length }"
							v-bind="field"
						/>
						<div v-for="error in errors" :key="error" class="errorMessage">
							{{ error }}
						</div>
						<img
							src="@/assets/icon-error.svg"
							alt="error icon"
							class="errorImg"
							v-if="errors.length"
						/>
					</vee-field>
				</div>
				<!-- ----------------------------------------------------------------------- -->
				<!-- ----------------------------------------------------------------------- -->

				<div class="formGroup">
					<label for="email"></label>
					<vee-field name="email" :bails="false" v-slot="{ field, errors }">
						<input
							type="email"
							id="email"
							placeholder="Email Address"
							class="email"
              :class="{ error: errors.length }"
              v-bind="field"
						/>
            <div v-for="error in errors" :key="error" class="errorMessage">
              {{ error }}
            </div>
            <img
              src="@/assets/icon-error.svg"
              alt="error icon"
              class="errorImg"
              v-show="errors.length"
            />
					</vee-field>
				</div>
				<!-- ----------------------------------------------------------------------- -->
				<!-- ----------------------------------------------------------------------- -->

				<div class="formGroup">
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
          >
          <div v-for="error in errors" :key="error" class="errorMessage">
            {{ error }}
          </div>
					<img
						src="@/assets/icon-error.svg"
						alt="error icon"
						class="errorImg"
            v-show="errors.length"
					/>
        </vee-field>
				</div>
				<div class="formGroup">
					<button type="submit" class="btn cta">claim your free trail</button>
				</div>
			</vee-form>
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

<style lang="scss" scoped></style>

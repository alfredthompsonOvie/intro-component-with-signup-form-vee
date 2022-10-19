import { Form as VeeForm, Field as VeeField, defineRule, configure } from 'vee-validate'
import { required, min, max, email, is_not as isNot} from '@vee-validate/rules';

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);

    defineRule("required", required)
    defineRule("firstName", required)
    defineRule("lastName", required)
    defineRule("password", required)
    defineRule("min", min)
    defineRule("max", max)
    defineRule("email", email)
    defineRule("is_not", isNot)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          firstName: `First Name cannot be empty`,
          lastName: `Last Name cannot be empty`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          email: `Looks like this is not an email `,
          password: `Password cannot be empty`,
        }
        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is invalid.`

        return message;
      }
    })
  }
}
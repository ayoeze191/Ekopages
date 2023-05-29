export function SignupValidate(values, name) {
   
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if (!values.username) {
          errors.username = 'Required';
        } else if (values.username.length > 15) {
          errors.username = 'Must be 15 characters or less';
        }
      
        if (!values.password1) {
          errors.password1 = 'Required';
        } else if (values.password1.length > 20) {
          errors.password1 = 'Must be 20 characters or less';
        }

        if (!values.password2) {
          errors.password2 = 'Required';
        } else if (values.password1.length > 20) {
          errors.password2 = 'Must be 20 characters or less';
        }

        

        return errors;
}


export function validate(values) {
        const errors = {};
        if(!values.email) {
            errors.email = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if(!values.password) {
            errors.password = "password is required"
        }
        
        if(!values.username) {
          errors.username = "username is required"
      }

        return errors;
}

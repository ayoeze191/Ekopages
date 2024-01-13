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
        if(!values.first_name) {
          errors.first_name = "Required"
        }
        if(!values.last_name) {
          errors.last_name = "Required"
        }
        return errors;
}


export function validate(values) {
        const errors = {};
        // if(!values.email) {
        //     errors.email = 'Required';
        // }
        // if (!values.email) {
        //   errors.email = 'Required';
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //   errors.email = 'Invalid email address';
        // }

        if(!values.password) {
            errors.password = "password is required"
        }
        
        if(!values.username) {
          errors.username = "username is required"
      }
      
        return errors;
}

export function validateCartForm(values) {
  const errors = {}
  if(!values.street_address){
    errors.street_address = "Please Type in your address"
  }
  if(!values.city){
    errors.city = "Please Type in your city"
  }
  if(!values.phone_number){
    errors.phone_number = "Please Type in your phone_number"
  }
}
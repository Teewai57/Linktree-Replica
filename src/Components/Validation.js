
const Validation = (values) => {
    let errors = {}

    if (!values.firstName) {
        errors.firstName = "Please enter a message" 
        
    }
    else if (values.firstName.length < 3) {
        errors.firstName = "Must be more than 3 characters"
    }

    if(!values.lastName) {
        errors.lastName = "Please enter a message"
    }
    else if(values.lastName.length < 3) {
        errors.lastName = "Must be more than 3 characters"
    } 

    if(!values.email) {
        errors.email = "Please enter a message"
    }

    if(!values.message) {
        errors.message = "Please enter a message"
    }
    else if (values.message.length < 10) {
        errors.message = "Must be more than 10 characters"
    }

    return errors;
}

export default Validation


export const validate = (name, value, validations) => {
    let errorMessages = []

    if (validations.required === true){
        if(!value){
            errorMessages.push(`${name} is required`) 
        }
    }

    if (validations.minLength){
        if(value.length < validations.minLength){
            errorMessages.push(`${name} must be at least ${validations.minLength} characters`)
        }
    }

    if (validations.pattern){
        if(!value.match(validations.pattern)){
            errorMessages.push(`${name} is invalid`)
        }
    }

    if (validations.repeat){
        if(value !== validations.repeat){
            errorMessages.push(`${name} does not match`)
        }
    }

    return errorMessages
}
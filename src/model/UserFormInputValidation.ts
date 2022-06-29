export interface UserInput {
    username: string;
    email: string;
    password: string;
    confirmedPassword: string;
}

export interface ValidationOutput {
    isSuccess: boolean;
    errorMessage: string | null;
}

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;

export const validateUserInput = (userInput: UserInput): ValidationOutput => {
    let output = validateField(userInput.username, "Username", 5);
    if(!output.isSuccess){
        return output;
    }

    output = validateField(userInput.email, "Email", 8);
    if(!output.isSuccess) {
        return output;
    }

    if (!userInput.email.toLowerCase().match(emailRegex)){
        return  {
            isSuccess: false, errorMessage: "Email must be a valid email."
        }
    }
    output = validateField(userInput.password, "Password", 8);
    if(!output.isSuccess) {
        return output;
    }
    if(userInput.password !== userInput.confirmedPassword) {
        return {
            isSuccess: false, errorMessage: "Passwords do not match."
        }
    }
    return {
        isSuccess: true,
        errorMessage: null
    };
}

const validateField = (value: string, fieldName: string, minLength: number): ValidationOutput => {
    if (value === "") {
        return {
            isSuccess: false, errorMessage: `${fieldName} is empty.`
        }
    } else if (value.length < minLength) {
        return {
            isSuccess: false, errorMessage: `${fieldName} must be ${minLength} characters.`
        }
    }
    return {
        isSuccess: true, errorMessage: null
    }
}


import {defineStore} from "pinia";
import type {UserApi} from "@/api/UserApi";

export interface UserState {
    userId: string
    username: string;
}

export interface ValidationOutput {
    isSuccess: boolean;
    errorMessage: string | null;
}

export interface CreateNewUserRequest {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const state = (): UserState => ({
    userId: "",
    username: ""
})

const getters = {
    getSignedInUser: (state: UserState) => (): string => {  
        return state.username;
    }
}

const actions = {
    signInUser(newUserState: UserState) {
        this.userId = newUserState.userId;
        this.username = newUserState.username;
    },

    async createNewUser(createNewUserRequest: CreateNewUserRequest, client: UserApi): Promise<ValidationOutput> {
        const validation = validateUserInput(createNewUserRequest);
        if(!validation.isSuccess) {
            return validation;
        }

        const output = await client.createNewUser(createNewUserRequest)
        this.signInUser(output);
        return {isSuccess: true, errorMessage: null}
    },

    signUserOut() {
        this.userId = "";
        this.username = "";
    }
}

export const useUserStore = defineStore('user', {
    state: state,
    getters: getters,
    actions: actions
})

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;

export const validateUserInput = (userInput: CreateNewUserRequest): ValidationOutput => {
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
    if(userInput.password !== userInput.confirmPassword) {
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

import {expect, it} from 'vitest';
import {validateUserInput} from "@/model/UserFormInputValidation";

import type {UserInput, ValidationOutput} from "@/model/UserFormInputValidation";

it("Username is empty", () => {
    const input: UserInput = {
        username: "",
        email: "",
        password: "",
        confirmedPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Username is empty.");
})

it("Username isn't long enough", () => {
    const input: UserInput = {
        username: "a",
        email: "",
        password: "",
        confirmedPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Username must be 5 characters.");
})

it("Email is missing", () => {
    const input: UserInput = {
        username: "username",
        email: "",
        password: "",
        confirmedPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Email is empty.");
})

it("Email isn't long enough", () => {
    const input: UserInput = {
        username: "username",
        email: "a",
        password: "",
        confirmedPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Email must be 8 characters.");
})

it("Password is missing", () => {
    const input: UserInput = {
        username: "username",
        email: "kyle@foodfinder.com",
        password: "",
        confirmedPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Password is empty.");
})

it("Password isn't long enough", () => {
    const input: UserInput = {
        username: "username",
        email: "kyle@foodfinder.com",
        password: "a",
        confirmedPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Password must be 8 characters.");
})

it("Confirm password doesn't equal password", () => {
    const input: UserInput = {
        username: "username",
        email: "kyle@foodfinder.com",
        password: "something",
        confirmedPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Passwords do not match.");
})

it("Validation Passed", () => {
    const input: UserInput = {
        username: "username",
        email: "kyle@foodfinder.com",
        password: "something",
        confirmedPassword: "something"
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).true;
    expect(output.errorMessage).null;
})

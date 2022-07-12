import {expect, it} from 'vitest';

import type {ValidationOutput} from "@/model/CurrentUser";
import type {CreateNewUserRequest} from "@/model/CurrentUser";
import {validateUserInput} from "@/model/CurrentUser";

it("Username is empty", () => {
    const input: CreateNewUserRequest = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Username is empty.");
})

it("Username isn't long enough", () => {
    const input: CreateNewUserRequest = {
        username: "a",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Username must be 5 characters.");
})

it("Email is missing", () => {
    const input: CreateNewUserRequest = {
        username: "username",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Email is empty.");
})

it("Email isn't long enough", () => {
    const input: CreateNewUserRequest = {
        username: "username",
        email: "a",
        password: "",
        confirmPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Email must be 8 characters.");
})

it("Password is missing", () => {
    const input: CreateNewUserRequest = {
        username: "username",
        email: "kyle@foodfinder.com",
        password: "",
        confirmPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Password is empty.");
})

it("Password isn't long enough", () => {
    const input: CreateNewUserRequest = {
        username: "username",
        email: "kyle@foodfinder.com",
        password: "a",
        confirmPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Password must be 8 characters.");
})

it("Confirm password doesn't equal password", () => {
    const input: CreateNewUserRequest = {
        username: "username",
        email: "kyle@foodfinder.com",
        password: "something",
        confirmPassword: ""
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).false;
    expect(output.errorMessage).equals("Passwords do not match.");
})

it("Validation Passed", () => {
    const input: CreateNewUserRequest = {
        username: "username",
        email: "kyle@foodfinder.com",
        password: "something",
        confirmPassword: "something"
    }

    const output: ValidationOutput = validateUserInput(input);

    expect(output.isSuccess).true;
    expect(output.errorMessage).null;
})

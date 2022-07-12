import {describe, test, expect, beforeAll, beforeEach, vi, afterEach} from "vitest";
import {setActivePinia, createPinia} from "pinia";
import {useUserStore} from "@/model/CurrentUser";
import { UserApi } from "@/api/UserApi";
import {randomUUID} from "crypto";

beforeAll(() => {
    setActivePinia(createPinia());
})

describe("Current Signed in User Store", () => {
    let store: ReturnType<typeof useUserStore>
    let userApi: UserApi

    beforeEach(() => {
        store = useUserStore();
        userApi = new UserApi()
    })

    afterEach(() =>{
        vi.clearAllMocks()
        store.$reset()
    })

    test('Creating Store', ()=> {
        expect(store).toBeDefined();
    })

    test('Create new user invalid request', async () => {
        const mock = vi.fn();
        const userId = randomUUID();
        mock.mockImplementation(() => {
            return {
                userId: userId,
                username: "something"
            }
        })
        userApi.createNewUser = mock;

        const output = await store.createNewUser({
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }, userApi);

        expect(output.isSuccess).toBe(false);
        expect(output.errorMessage).toBeDefined();
        expect(mock).toHaveBeenCalledTimes(0);
        expect(store.$state.userId).toBe("");
        expect(store.getSignedInUser()).toBe("");
    })

    test('Create create new user valid request', async () => {
        const mock = vi.fn();
        const userId = randomUUID();
        mock.mockImplementation(() => {
            return {
                userId: userId,
                username: "something"
            }
        })
        userApi.createNewUser = mock;

        await store.createNewUser({
            username: "username",
            email: "test@gmail.com",
            password: "password123",
            confirmPassword: "password123"
        }, userApi);

        expect(mock).toHaveBeenCalledOnce()
        expect(store.$state.userId).toBe(userId);
        expect(store.getSignedInUser()).toBe("something");
    })

    test('Sign user out', async () => {
        const mock = vi.fn();
        const userId = randomUUID();
        mock.mockImplementation(() => {
            return {
                userId: userId,
                username: "something"
            }
        })
        userApi.createNewUser = mock;
        await store.createNewUser({
            username: "username",
            email: "test@gmail.com",
            password: "password123",
            confirmPassword: "password123"
        }, userApi);

        store.signUserOut();

        expect(mock).toHaveBeenCalledOnce()
        expect(store.$state.userId).toBe("");
        expect(store.getSignedInUser()).toBe("");
    })
})
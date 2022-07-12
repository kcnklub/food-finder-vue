import axios from "axios";
import type {CreateNewUserRequest, UserState} from "@/model/CurrentUser";

export class UserApi {
    async createNewUser(data: CreateNewUserRequest): Promise<UserState> {
        const response = await axios.post('/createNewUser', data);
        return response.data as UserState
    }
}
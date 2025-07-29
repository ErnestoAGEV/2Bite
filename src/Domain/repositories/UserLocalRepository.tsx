import { User } from "../entities/User";

export interface UserLocalRepository {

    save(user: User): Promise<void>;
    getUser(user: User): Promise<User>;
    remove(): Promise<void>;

}
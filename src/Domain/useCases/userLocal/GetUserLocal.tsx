import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { getUser } =  new UserLocalRepositoryImpl();

export const GetUserLocalUseCase = async () => {
    return await getUser();
}
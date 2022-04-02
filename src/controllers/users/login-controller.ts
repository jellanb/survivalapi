import {LoginUser} from '../../domain/usecase/login-user';
import Net2eRepository from '../../infrastructure/persistence/repositories/shard/Net2eRepository';
import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import SilkRepository from '../../infrastructure/persistence/repositories/shard/SilkRepository';


export default async function loginUserController (username: string, password: string) {
    return await LoginUser(username, password, Net2eRepository, UserRepository, SilkRepository);
}

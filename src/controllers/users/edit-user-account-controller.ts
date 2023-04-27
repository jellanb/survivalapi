import {editUserAccount} from '../../domain/usecase/edit-user-account';
import Net2eRepository from '../../infrastructure/persistence/repositories/shard/Net2eRepository';
import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';

export default async function EditUserAccountController(username:string, password: string, email:string, secretQuestion:string, secretAnswer:string, newPassword:string) {
    return await editUserAccount(username, password, email, secretQuestion, secretAnswer, newPassword, Net2eRepository, UserRepository);
}

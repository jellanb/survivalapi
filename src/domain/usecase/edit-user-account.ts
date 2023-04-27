import { Net2eRepository } from '../../infrastructure/persistence/repositories/shard/Net2eRepository';
import { UserRepository } from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';

export const editUserAccount = async (username: string, password: string, email: string, secretQuestion:string, secretAnswer:string, newPassword:string, nNet2eRepository: Net2eRepository, userRepository: UserRepository) => {
    const user = await userRepository.findUserByUsernamePassword(username, password);

    if (user === undefined) throw new Error('USER_NOT_FOUND');

    const { JID, } = JSON.parse(JSON.stringify(user));

    await userRepository.updateUserById(JID, newPassword, email);
    await nNet2eRepository.update(JID, newPassword);
    return { username, password, email };
}

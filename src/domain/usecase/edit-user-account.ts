import { Net2eRepository } from '../../infrastructure/persistence/repositories/shard/Net2eRepository'
import { UserRepository } from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository'

export const editUserAccount = async (username: string, password: string, email: string, nNet2eRepository: Net2eRepository, userRepository: UserRepository) => {
    const user = await userRepository.findUserByName(username);
    const { JID, } = JSON.parse(JSON.stringify(user));

    await userRepository.updateUserById(JID, password, email);
    await nNet2eRepository.update(JID, password);
    return { username, password, email };
}

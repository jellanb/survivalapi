import { UserRepository } from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository'
import { Net2eRepository } from '../../infrastructure/persistence/repositories/shard/Net2eRepository'
import { UsersDetails, UserResult } from '../../interfaces/usersInterface';
import log from '../../infrastructure/observability/logging/logger';

export default async function createNewUser(usersDetails: UsersDetails, userRepository: UserRepository, net2eRepository: Net2eRepository): Promise<UserResult> {
        log.info(`Init create new user from web site with username:${usersDetails.username} and email:${usersDetails.email}`);
        const userExist = await userRepository.findUserByName(usersDetails.username);

        if(userExist) throw new Error('USER_ALREADY_EXIST');

        const userResult = await userRepository.createUser(usersDetails.username, usersDetails.email, usersDetails.password);
        const { Id } = JSON.parse(JSON.stringify(userResult));
        const net2eResult = await net2eRepository.add(Id, usersDetails.username, usersDetails.password, usersDetails.secretQuestion, usersDetails.secretAnswer);

        if (!userResult || !net2eResult) throw new Error('CANT_NOT_CREATE_USER');
        const message = `User created successfully with username:${usersDetails.username} and email:${usersDetails.email}`
        log.info(message);
        
        return { username: usersDetails.username, password: usersDetails.password, email: usersDetails.email, error: false, errorDescription: message }
}

import { createUser, findUserByName } from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository'
import { addNet2e } from '../../infrastructure/persistence/repositories/shard/Net2eRepository'
import { UsersDetails, UserResult } from '../../interfaces/usersInterface';

export default async function createNewUser(usersDetails: UsersDetails): Promise<UserResult> {
        const userExist = await findUserByName(usersDetails.username);

        if(userExist) throw new Error('USER_ALREADY_EXIST');

        const userResult = await createUser(usersDetails.username, usersDetails.email, usersDetails.password);
        const { Id } = JSON.parse(JSON.stringify(userResult));
        const net2eResult = await addNet2e(Id, usersDetails.username, usersDetails.password, usersDetails.secretQuestion, usersDetails.secretAnswer);

        if (!userResult || !net2eResult) throw new Error('CANT_NOT_CREATE_USER');
        return { username: usersDetails.username, password: usersDetails.password, email: usersDetails.email }
}

import { Users } from '../entities/TB_Users'

export const findUserByName = async (name: string) =>{
    try{
        const result = await Users.findAll({
            attributes: ['StrUserId', 'JID'],
            where: { strUserId: name }
        });
        return result[0];
    } catch (e) {
        console.log(e);
    }
}

export const findUserByEmail = async (email: string) =>{
    try{
        const result = await Users.findAll({
            attributes: ['Email'],
            where: { email: email }
        });
        return result[0];
    } catch (e) {
        console.log(e);
    }
}

export const findUserByUsernamePassword = async (username: string, password: string) =>{
        const result = await Users.findAll({
            attributes: ['StrUserID', 'JID'],
            where: { strUserId: username, password: password }
        });
        return result[0]
}

export const createUser = async (idUsuario: string, username: string, email: string, pass: string) => {
    try {
        const newUserResult = await Users.create({
            strUserId: idUsuario,
            password: pass,
            name: username,
            email: email,
            secPrimary: 3,
            secContent: 3,
            accPlayTime: 0,
            latestUpdateTimeToPlayTime: 0,
            playTime: 0
        });
        console.log('User add successfully!');
        return newUserResult;
    } catch (e) {
        console.log(e);
    }

}

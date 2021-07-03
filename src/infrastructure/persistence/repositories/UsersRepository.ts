import { Users } from '../entities/TB_Users'
import {Silk} from "../entities/SK_Silk";

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
            attributes: ['StrUserID', 'JID', 'Email', 'password'],
            where: { strUserId: username, password: password }
        });
        return result[0]
}

export const createUser = async (idUser: string, username: string, email: string, pass: string) => {
    try {
        const newUserResult = await Users.create({
            strUserId: idUser,
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

export const updateUserById = async (id: number, password: string, email: string) => {
    try {
        const updateSilk = await Users.update({
            password: password,
            email: email
        }, {
            where: { JID: id }
        })
        console.log(`User: ${id} update successfully!`)
        return updateSilk
    } catch (error) {
        console.log(error)
    }
}

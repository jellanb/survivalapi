import { Users } from '../../entities/shard/TB_Users'

export interface UserRepository {
        findUserByName: (name: string) => Promise<Users | undefined>,
        findUserByEmail: (email: string) => Promise<Users | undefined>,
        findUserByUsernamePassword: (username: string, password: string) => Promise<Users | undefined>,
        createUser: (username: string, email: string, pass: string) => Promise<Users | undefined>,
        updateUserById: (id: number, password: string, email: string) => Promise<[affectedCount: number] | undefined>
}

export function UserRepository(): UserRepository{
    return {
        findUserByName: async (name: string) => {
            try{
                const result = await Users.findAll({
                    attributes: ['StrUserId', 'JID', 'Email'],
                    where: { strUserId: name }
                });
                return result[0];
            } catch (e) {
                console.log(e);
            }
        },
        findUserByEmail: async (email: string) => {
            try{
                const result = await Users.findAll({
                    attributes: ['Email'],
                    where: { email: email }
                });
                return result[0];
            } catch (e) {
                console.log(e);
            }
        },
        findUserByUsernamePassword: async (username: string, password: string) =>{
            const result = await Users.findAll({
                attributes: ['StrUserID', 'JID', 'Email', 'password'],
                where: { strUserId: username, password: password }
            });
            return result[0]
        },
        createUser: async (username: string, email: string, pass: string) => {
            try {
                const newUserResult = await Users.create({
                    strUserId: username,
                    status: 2,
                    password: pass,
                    name: username,
                    email: email,
                    secPrimary: 3,
                    secContent: 3,
                    accPlayTime: 0,
                    latestUpdateTimeToPlayTime: 0,
                    playTime: 0
                });
                return newUserResult;
            } catch (e) {
                console.log(e);
            }
        },
        updateUserById: async (id: number, password: string, email: string) => {
            try {
                const updateSilk = await Users.update({
                    password: password,
                    email: email
                }, {
                    where: { JID: id }
                });
                return updateSilk
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default UserRepository();

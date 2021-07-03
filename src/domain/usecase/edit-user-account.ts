import { findUserByName, updateUserById } from '../../infrastructure/persistence/repositories/UsersRepository'
import { updateNet2eById } from '../../infrastructure/persistence/repositories/Net2eRepository'

export const editUserAccount = async (username: string, password: string, email: string) => {
    try {
        const user = await findUserByName(username)
        const { JID, } = JSON.parse(JSON.stringify(user))

        await updateUserById(JID, password, email)
        await updateNet2eById(JID, password)
        return { username, password, email }
    } catch (e) {
        console.log(e)
    }

}

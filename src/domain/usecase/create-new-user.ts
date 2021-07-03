import { createUser } from '../../infrastructure/persistence/repositories/UsersRepository'
import { addNet2e } from '../../infrastructure/persistence/repositories/Net2eRepository'

export default async function createNewUser(idUser: string, username: string, email: string, pass: string, question: string, answer: string) {
    try{
        const user = await createUser(idUser, idUser, email, pass)
        if (!user) {
            throw new Error('CANT_NOT_CREATE_USER')
        }
        const { Id } = JSON.parse(JSON.stringify(user))
        await addNet2e(Id, username, pass, question, answer)
    } catch (error) {
        console.log(error)
    }
}

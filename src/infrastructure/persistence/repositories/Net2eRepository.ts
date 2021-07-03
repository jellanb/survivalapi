import { Net2e } from '../entities/TB_Net2e';

export const addNet2e = async (userId: number, userName: string, password: string, question: string, answer: string) => {
    const newNet2e = await Net2e.create({
        Id: userId,
        strUserId: userName,
        password: password,
        question: question,
        answer: answer,
        secPrimary: 3,
        secContent: 3,
        lastModification: Date.now()
    })
    console.log('Net2e add successfully!')
    return newNet2e
}

export const findById = async (id: number) => {
        const result = await Net2e.findAll({
            attributes: ['answer', 'question'],
            where: { Id: id }
        })
        return result[0]
}

export const updateNet2eById = async (id: number, password: string) => {
    try {
        const updateNet2e = await Net2e.update({
            password: password,
        },{
            where: { JID: id}
        })
        console.log(`UserDetails by id:${id} update successfully!`)
        return updateNet2e
    } catch (e) {
        console.log(e)
    }
}

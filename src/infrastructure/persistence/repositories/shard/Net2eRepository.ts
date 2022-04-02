import { Net2e } from '../../entities/shard/TB_Net2e';

export interface Net2eRepository {
    add: (userId: number, userName: string, password: string, question: string, answer: string) => Promise<Net2e>,
    findByID: (id: number) => Promise<Net2e[]>,
    update: (id: number, password: string) => Promise<[number, Net2e[]]>
}
export function Net2eRepository(): Net2eRepository {
    return {
        add: async (userId: number, userName: string, password: string, question: string, answer: string) =>{
            return await Net2e.create({
                Id: userId,
                strUserId: userName,
                password: password,
                question: question,
                answer: answer,
                secPrimary: 3,
                secContent: 3,
                lastModification: Date.now()
            })
        },
        findByID: async (id: number) => {
            return await Net2e.findAll({
                attributes: ['answer', 'question'],
                where: { Id: id }
            })
        },
        update:async (id: number, password: string) => {
            return await Net2e.update({
            password: password,
        },{
            where: { JID: id}
        })}
    }
}

export default Net2eRepository();

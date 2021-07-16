import fs from 'fs'
import readline from 'readline'
import {
    updateUniqueRanking,
    createUniqueRanking,
    findUniqueRankingByUsername
} from '../../infrastructure/persistence/repositories/UniqueRankingRepository'

interface killInformation {
    username: string,
    monster: string,
    dateKill: string
}

export default async function readUniqueKillsFile() {
    const fileName = await getFileName()
    //const path = `C:/Server Files/evaLog/${fileName}`
    const path = `/Users/vn07k3p/Documents/cursos/survivalapi/test/filesTest/_uniqueKills.txt`
    try {
        const reader = await readline.createInterface({
            input: fs.createReadStream(path),
            output: process.stdout
        })
       for await (const line of reader) {
            const { username, monster, dateKill } = await getKillDate(line)
            if (username === '' && monster === '') {
                console.log(`[ERROR]: cant not found username and monster from uniqueKills file!`)
                return //TODO set throw error
            }
            await processUniqueKill(username, monster, dateKill)
        }
        fs.truncate(path, 0,() => {})
    } catch (error) {
        console.log(error)
    }
}

const processUniqueKill = async (username: string, monster: string, dateKill: string) => {
    const lastUniqueKills = await findUniqueRankingByUsername(username);

    if (lastUniqueKills === undefined) {
        console.log(`saved unique kill monster : ${monster} to username: ${username}!`)
        return await createUniqueRanking(username, monster)
    } else {
        console.log(`update unique kill monster : ${monster} to username: ${username}`)
        return await updateUniqueRanking(username, monster)
    }
}

async function getKillDate(uniqueKillsUpdate: string): Promise<killInformation> {
    try {
        const endDate = uniqueKillsUpdate.match(']')!.index
        const date = uniqueKillsUpdate.substring(1, endDate)

        const startMonster = uniqueKillsUpdate.match('MOB')!.index
        const endMonster = uniqueKillsUpdate.match('killed')!.index
        const monster = uniqueKillsUpdate.substring(startMonster!, endMonster! - 2)

        const startUsername = uniqueKillsUpdate.match('by')!.index
        const endUsername = startUsername! + uniqueKillsUpdate.substring(startUsername!).match(']')!.index!
        const username = uniqueKillsUpdate.substring(startUsername! + 4, endUsername)

        return {
            username: username,
            monster: monster,
            dateKill: date
        }
    } catch (error) {
        console.log(error)
        return { username: '', monster: '', dateKill: '' }
    }
}

async function getFileName() : Promise<string> {
    const currentDate = new Date(Date.now())
    const baseName = 'uniquekills.txt'
    return `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}_${baseName}`;
}

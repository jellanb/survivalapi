import { findAllUniqueKills } from '../../infrastructure/persistence/repositories/shard/UniqueRankingRepository';
import { UniqueRanking } from "../../infrastructure/persistence/entities/shard/UniqueRanking";

export default async function getAllUniqueKills() {

    const uniqueRankingKills = await findAllUniqueKills();
    const usersNamesRanking = await getUsersNamesRaking(uniqueRankingKills);
    const uniqueKills = await getUniqueKillsByUserName(uniqueRankingKills, usersNamesRanking)

    return await prepareData(usersNamesRanking, uniqueKills, uniqueRankingKills)
}

const getUsersNamesRaking = async (uniqueRanking: Array<UniqueRanking>) => {
    let usersNames: Array<string> = []
    for await (const data of uniqueRanking){
        const userName = data.getDataValue('charName')
        if (uniqueRanking.find((data) => data.getDataValue('charName') === userName)) {
            usersNames.push(userName);
        }
    }
    return usersNames
}

const getUniqueKillsByUserName = async (uniqueRanking: Array<UniqueRanking>, usersNames: Array<string>) => {
    let uniqueNameList: { name: string; }[] = [];
    for await (const char of usersNames) {
        for await (const uniqueKill of uniqueRanking.filter((info) => info.getDataValue('charName') === char)) {
            Object.entries(uniqueKill.toJSON()).forEach(entry => {
                const [key, value] = entry;
                const unique = uniqueNameList.find((unique) => unique.name === key)
                if (value > 0 && !unique) {
                    uniqueNameList.push({
                        name: key,
                    });
                }
            });
        }
    }
    return uniqueNameList
}

const prepareData = async (usersNamesRanking: Array<string>, uniqueKills: { name: string }[], uniqueRankingKills: UniqueRanking[]) => {
    let resultData = []
     for await (const userName of usersNamesRanking) {
         for await (const unique of uniqueKills) {
             const data = uniqueRankingKills.find((data) => data.getDataValue('charName') === userName)
             resultData.push({username: userName, unique: unique.name, killQuantity: data!.getDataValue(unique.name)})
         }
     }

    console.log(resultData)
     return resultData
}


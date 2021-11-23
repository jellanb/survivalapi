import express from 'express';
import {executePayment, makeRequest, makeSubscription} from "../../../payment";
import {findUserByName} from "../../persistence/repositories/shard/TB_UsersRepository";
import {createSilk, findSilkById, updateSilk} from "../../persistence/repositories/shard/SilkRepository";

interface userResult {
    StrUserID:string,
    JID:number,
    Email: string,
    password:string
}

interface SilkFromUser {
    silk_own: number
}

const router = express.Router()

router.get('/createPayment', async (req,res) => {
    try {
        await makeRequest(
            res,
            makeSubscription(
                parseInt(
                    req.query.amount!.toString()),
                req.query.silkQuantity!.toString(),
                req.query.username!.toString()
            )
        )
    }
    catch (e) {
        console.log(e)
        res.status(500);
    }
});

router.get('/executePayment', async (req,res) => {
    try {
        const paymentSuccess = await executePayment(
            res, req.query.token!.toString(),
            req.query.silkQuantity!.toString()
        )
        if (paymentSuccess) {
            const user = await findUserByName(req.query.username!.toString())
            if (user){
                const { JID }: userResult  = JSON.parse(JSON.stringify(user))
                const silk = await findSilkById(JID)
                if (silk) {
                    const {silk_own}: SilkFromUser = JSON.parse(JSON.stringify(silk))
                    const silkQuantity = silk_own + parseInt(req.query.silkQuantity!.toString())
                    await updateSilk(JID, silkQuantity)
                } else {
                    await createSilk(JID, parseInt(req.query.silkQuantity!.toString()))
                }
                console.log('payment success')
                res.writeHead( 301, {Location : 'http://survivalsro.com'})
                res.end();
            } else {
                console.log('payment failed')
                res.status(500);
            }

        }
    }
    catch (e) {
        res.status(500);
    }
});

export = router

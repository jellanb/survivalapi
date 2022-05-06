import express from 'express'
import verifyUniquesDropsController from '../../../controllers/users/verify-uniques-drops-controller';
import { handlerMetrics } from '../../metrics/'


const router = express.Router();

router.get('/verify-uniques-drops', async (req, res) =>{
    try {
        res.send(await verifyUniquesDropsController());
        res.end();
    } catch (e) {
        res.send(e)
        res.end();
    }
})

export = router
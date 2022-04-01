import express from 'express';
import { getGuildNameOccupiedFortressController } from '../../../controllers/fortress/get-guild-name-occupied-fortress'


const router = express.Router()

router.get('/getGuildNamesOccupiedFortressWar', async (req,res) => {
    try {
        const guildsNames = await getGuildNameOccupiedFortressController()
        res.send(guildsNames);
        res.status(200);
    } catch (failure) {
        console.log(failure);
        res.status(500);
    }
})

export = router

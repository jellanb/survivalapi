import express from 'express'
import getUniquesDropsController from "../../../controllers/users/getUniquesDrops.controller";
import editUniqueDropsController from "../../../controllers/users/edit-unique-drops.controller";



const router = express.Router();

router.get('/get-all-uniques-drops', async (req, res) =>{
    try {
        res.send(await getUniquesDropsController());
        res.end();
    } catch (e) {
        res.send(e);
        res.end();
    }
})

router.post('/edit-uniques-drops', async (req, res) =>{

    try {
        const {
            uniqueName,
            itemName,
            provability,
            dropMax,
            dropMin
        } = req.body
        console.log(req.body);
        await editUniqueDropsController({ uniqueName,
            itemName,
            provability,
            dropMax,
            dropMin
        })
        res.send('ok').status(200);
        res.end();
    } catch (e) {
        console.log(e.message);
        res.send(e).status(500);
        res.end();
    }
})

export = router
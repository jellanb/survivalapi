import express from 'express'
import { handlerMetrics } from '../../metrics/'


const router = express.Router()

router.get('/metrics', async (req, res) =>{
    const metrics = handlerMetrics.getMetrics()
    res.send({metrics})
})

export = router

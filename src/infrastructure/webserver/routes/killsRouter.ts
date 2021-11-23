import express from 'express'
import updateUniqueKills from '../../../domain/usecase/update-unique-kills'
import getAllUniques from '../../../domain/usecase/get-all-unique-kills'

const router = express.Router()

router.post('/UpdateKills', async (req,res) => {
     try {
          await updateUniqueKills();
          res.status(200);
          res.end()
     } catch (error) {
          console.log(error)
          res.status(500);
          res.end()
     }
})

router.get('/ListUniqueKill', async (req,res) => {
     try {
          res.send(await getAllUniques());
          res.status(200);
          res.end()
     } catch (error) {
          console.log(error)
          res.status(500);
          res.end()
     }
})

export = router

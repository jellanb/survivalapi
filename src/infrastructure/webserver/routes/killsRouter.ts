import express from 'express'
import updateUniqueKills from '../../../domain/usecase/update-unique-kills'

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

export = router

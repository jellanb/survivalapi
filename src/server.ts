import express from 'express';
import initDatabase from "./database";
import bodyParser from "body-parser";
import cors from 'cors';
import paymentRouter from './infrastructure/webserver/routes/paymentRouters';
import usersRouter from './infrastructure/webserver/routes/usersRouter'
import killRouter from './infrastructure/webserver/routes/killsRouter';

const app = express();
app.use(bodyParser());
app.use(cors({origin: '*'}));
app.use('/payment', paymentRouter)
app.use('/users', usersRouter)
app.use('/job', killRouter)

app.listen(3002);
console.log('app running on port 3002');
startDb()



async function startDb() {
    await initDatabase();
}





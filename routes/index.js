import Router from 'express';
import  { getAllNotificationsByPostId }  from '../controllers/getNotification.js'
import { postNotification } from "../controllers/postNotification.js";
import { readNotification } from "../controllers/readNotification.js";


const router = Router();

router.get('/notification/:id', getAllNotificationsByPostId);
router.post('/notification/new', postNotification);
router.patch('/notification/read/:id', readNotification);


export default router;

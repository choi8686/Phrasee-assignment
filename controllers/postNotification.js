import { createNewPost } from "../models/postNotification.js";

export function postNotification(req, res){
    try{
       const body = req.body;
       if(createNewPost(body)){
           res.status(201);
           res.send("A new notification has been registered.")
       } else {
           res.status(500);
           res.send("Please check something is missing.")
       }
       }


    catch(error){
        console.error(error);
        res.status(500);
        res.send({
            error
        })
    }

}
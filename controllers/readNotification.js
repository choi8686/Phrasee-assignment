import { readAndUpdate } from "../models/readNotification.js";

export function readNotification(req, res){
    try{
        const postId = req.params.id;
        readAndUpdate(postId);
        res.status(203);
        res.send("updated")

    }
    catch(error){
        console.error(error);
        res.status(500);
        res.send({
            error
        })
    }

}
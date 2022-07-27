import { getNotificationByPostId, getLikesByPostId, getCommentsByPostId } from "../models/getNotification.js";

export function getAllNotificationsByPostId(req, res){
    try{
        const postId = req.params.id;
        const result = getNotificationByPostId(postId)
        const totalLikes = getLikesByPostId(postId)
        const totalComments = getCommentsByPostId(postId)
        res.send({
            notifications : result,
            totalLikes : totalLikes,
            totalComments : totalComments,
            totalNotifications: totalLikes + totalComments

        });
    }
    catch(error){
        console.error(error);
        res.status(500);
        res.send({
            error
        })
    }
}
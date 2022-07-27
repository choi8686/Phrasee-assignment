import { db } from '../databases/databases.js';

export function getNotifications() {
    return db.notifications;

}

export function getNotificationByPostId(postId){
    const notifications = getNotifications();
    const result = notifications.filter((data) => data.post.id === postId)

    return result;
}

export function getLikesByPostId(postId){
    const notifications = getNotifications();
    const like = notifications.filter((data) => data.post.id === postId && data.type === "Like");

    return like.length;
}

export function getCommentsByPostId(postId){
    const notifications = getNotifications();
    const like = notifications.filter((data) => data.post.id === postId && data.type === "Comment");

    return like.length;
}
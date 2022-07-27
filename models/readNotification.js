import { db } from '../databases/databases.js';


export function readAndUpdate(postId){
    const notifications = db.notifications;
    notifications.map(notification => {
        if (notification.post.id === postId) {
            notification.read = true;
        }
    })
        return notifications;
}
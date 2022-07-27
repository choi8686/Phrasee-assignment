import { db,writeFile } from '../databases/databases.js';

export function createNewPost(contents){
    if((!contents || contents.type !== 'Comment' && contents.type !== 'Like') ||
        (contents.type === 'Like' && contents.comment) ||
        (contents.type === 'Comment' && (!contents.comment || !contents.comment.id || !contents.comment.commentText)) ||
        typeof(contents.read) !== 'boolean' ||
        (!contents.user || !contents.user.id || !contents.user.name) ||
        !contents.post || !contents.post.id || !contents.post.title) {
        return false
    }
    db.notifications.push(contents);
    writeFile();
    return true;
}

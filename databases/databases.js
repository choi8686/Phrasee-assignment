import fs from 'fs';
import { dirname } from "path";
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const path = dirname(__filename)

export const db = {
    notifications:[]
};


fs.readFile(path+"/notification.json", 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        data = JSON.parse(data);
        if (data) db.notifications = data;
    }});

export function writeFile() {
    const testJsonString = JSON.stringify(db.notifications);
    fs.writeFile(path+"/notification.json", testJsonString, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('File written successfully');
        }
    });
}

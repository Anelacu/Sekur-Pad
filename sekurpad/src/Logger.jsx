import axios from "axios";
import { nanoid } from 'nanoid'
import { ApiEndPoints } from "./ApiEndPoints";

const user_uuid = nanoid() + "_" + new Date().toLocaleString();
const logActivity = function (activityName) {
    axios.post(ApiEndPoints.createLog, {
        userUuid: user_uuid,
        timestamp: Date.now(),
        activity: activityName
    })
        .then(function (res) {
            console.log(res);
        });
}

export { logActivity };

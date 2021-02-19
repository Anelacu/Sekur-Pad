import axios from "axios";
import { ApiEndPoints } from "./ApiEndPoints";
import uuid from "react-uuid";

const user_uuid = uuid();
const logActivity = function (activityName) {
    axios.post(ApiEndPoints.createLog, {
        userUuid: user_uuid,
        timestamp: new Date().toLocaleString(),
        activity: activityName
    })
        .then(function (res) {
            console.log(res);
        });
}

export { logActivity };

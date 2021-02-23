import config from '../config/config';
import { GetObjResponse } from '../config/types';

export function objResponse<T>(catagory: T): GetObjResponse<T> {
    const response: GetObjResponse<T> = {
        responseCode: config.OBJ_RESPONSE_CODE,
        entity: catagory
    };

    return response;
}

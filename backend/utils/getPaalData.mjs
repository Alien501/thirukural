import { details } from "../data/detail.mjs";
import { PAALLISTTA } from "../data/const.mjs";


const getPaalData = ( paalName ) => {
    const data = details[0].section.detail.find(data => data.name == PAALLISTTA[paalName]);
    return data;
}

export {
    getPaalData
}
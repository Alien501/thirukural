import { details } from "../data/detail.mjs";
import { ILAYLISTTA } from "../data/const.mjs";

const getIyalData = (iyalName) => {
    const data = details[0].section.detail.map(eachPaal => eachPaal.chapterGroup.detail.find(d => d.name == ILAYLISTTA[iyalName])).filter(item => item != null);
    return data;
}

export {
    getIyalData
}
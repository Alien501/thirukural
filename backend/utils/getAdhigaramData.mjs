import { details } from "../data/detail.mjs";

const getAdhigaramData = (adhiNo) => {
    console.log(adhiNo);
    const sections = details[0].section.detail;
    for(const section of sections ) {
        const cgs = section.chapterGroup.detail;
        for(const cg of cgs) {
            const adhi = cg.chapters.detail;
            const d = adhi.find(a => a.number === parseInt(adhiNo));
            if(d) {
                return d;
            }
        }
    }
    return null;
}

export {
    getAdhigaramData
}
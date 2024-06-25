import { kurals } from "../data/thirukkural.mjs"

const getKuralDataByNo = (kno) => {
    const kural = kurals.find(kural => kural.Number === parseInt(kno));
    if(kural)
        return kural;
    return null;
}

export {
    getKuralDataByNo
}
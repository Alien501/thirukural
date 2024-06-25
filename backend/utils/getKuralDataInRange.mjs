import { kurals } from "../data/thirukkural.mjs"

const getKuralDataInRange = (s, e) => {
    const data = kurals.filter(kural => kural.Number >= parseInt(s) && kural.Number <= parseInt(e));
    return data;
}

export {
    getKuralDataInRange
}
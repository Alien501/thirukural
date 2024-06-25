import { getAdhigaramData } from "../utils/getAdhigaramData.mjs";
import { getKuralDataByNo } from "../utils/getKuralDataByNo.mjs";
import { getKuralDataInRange } from "../utils/getKuralDataInRange.mjs";

const getKuralByNo = (req, res) => {
    const { kno } = req.params;
    if(kno === undefined || kno === null || kno === '' || kno.trim() === '') {
        throw new Error('Kural No is required');
    }
    if(kno <= 0 || kno > 1330) {
        throw new Error('Had to be written by you!');
    }
    const data = getKuralDataByNo(kno);
    const adhigramData = getAdhigaramData(Math.ceil(kno/10));
    if(data)
        return res.status(200).send(
            {
                message: 'Found!',
                error: null,
                data: {
                    kural: data,
                    adhigramData: adhigramData
                }
            }
        );
    return res.status(404).send(
        {
            message: 'Not Found!',
            error: null,
            data: null
        }
    )
};

const getKuralInRange = (req, res) => {
    const {range} = req.params;
    if(range === undefined || range === null || range === '' || range.trim() === '') {
        throw new Error('Kural No is required');
    }
    const regex = /^(?:\d{1,3}|\d{1,3}\d{1,3})-(?:\d{1,3}|\d{1,3}\d{1,3})$/;
    if(!regex.test(range))
        throw new Error('Wrong format');
    const [start, end] = range.split('-');
    if(parseInt(start) > parseInt(end))
        throw new Error('Wrong Range!');
    const data = getKuralDataInRange(start, end);
    return res.status(200).send(
        {
            message: 'Found!',
            error: null,
            data: data
        }
    )
}

const getRandomKural = (req, res) => {
    const rno = Math.floor(Math.random() * 1330 + 1);
    const data = getKuralDataByNo(rno);
    const kuralAdhigaram = getAdhigaramData(Math.ceil(rno/10));
    return res.status(200).send({
            message: 'Found!',
            error: null,
            data: {
                kural: data,
                adhigaram: kuralAdhigaram
            }
        });
}

export {
    getKuralByNo,
    getKuralInRange,
    getRandomKural
}
import { details } from "../data/detail.mjs"
import { checkIsThisCorrect } from "../utils/checkName.mjs";
import { getPaalData } from "../utils/getPaalData.mjs";

import { PAALLIST } from "../data/const.mjs";
import { ILAYLIST } from "../data/const.mjs";
import { getIyalData } from "../utils/getIyalData.mjs";
import { getAdhigaramData } from "../utils/getAdhigaramData.mjs";


const getAllData = (req, res) => {
    const data = details;
    return res.status(200).send(
        {
            message: 'Found!',
            data: data,
            error: null
        }
    )
}

const getDataByPaal = (req, res) => {
    const { name } = req.query;
    if(name === undefined || name === null || name === '' || name.trim() === '') {
        throw new Error('Name is required');
    }
    if(!checkIsThisCorrect(name, PAALLIST)) {
        throw new Error('Wrong query!');
    }
    const data = getPaalData(name);
    console.log(data);
    return res.status(200).send(
        {
            message: 'Found!',
            error: null,
            data: data
        }
    )
}

const getDataByIyaal = (req, res) => {
    const { name } = req.query;
    if(name === undefined || name === null || name === '' || name.trim() === '') {
        throw new Error('Name is required');
    }
    if(!checkIsThisCorrect(name, ILAYLIST)) {
        throw new Error('Wrong query!');
    }
    const data = getIyalData(name);
    return res.status(200).send(
        {
            message: 'Found!',
            error: null,
            data: data
        }
    )
}

const getDataByAdhigaram = (req, res) => {
    const { no } = req.query;
    if(no === undefined || no === null || no === '' || no.trim() === '') {
        throw new Error('No is required');
    }
    if(no <= 0 || no > 133) {
        throw new Error('Wrong No Vro!');
    }

    const data = getAdhigaramData(no);
    if(data)
        return res.status(200).send({
            message: 'Found!',
            error: null,
            data: data
        })

    return res.status(404).send(
        {
            message: 'Not Found!',
            error: null,
            data: null
        }
    )
}

export {
    getAllData,
    getDataByPaal,
    getDataByIyaal,
    getDataByAdhigaram,
}
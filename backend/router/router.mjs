import { Router } from "express";
import { getAllData, getDataByAdhigaram, getDataByIyaal, getDataByPaal } from "../details/getdetail.mjs";
import { getKuralByNo, getKuralInRange, getRandomKural } from "../details/getKural.mjs";

const router = new Router();

router.get('/', (req, res, next) => {
    return res.status(200).send(
        {
            message: "Working fine!",
            error: null
        }
    )
});

// API for details.js
/*
Structure of json:
    - Paal
        - Iyal
            - Adhigaram

So the API endpoints I need are as follows:
(ALL ARE GET REQUEST FOR NOW)

1. getdetail -> Return whole data as if present
2. getdetail/paal?name -> Returns detail only from particular paal
    name can be any of the following (only as mentioned):
        aram
        porul
        inbam

3. getdetail/iyal?name= -> Returns detail only from that iyal
    name: should be ->
        pay: பாயிரவியல்,
        ila: இல்லறவியல்,
        thur: துறவறவியல்,
        ula: ஊழியல்,
        ara: அரசியல்,
        ama: அமைச்சியல்,
        aran: அரணியல்,
        koozh: கூழியல்,
        pada: படையில்,
        nat: நட்பியல்,
        kud: குடியியல்,
        ozh: ஒழிபியல்,
        kal: களவியல்,
        kar: கற்பியல்

4. getdetail/adhigaram?no=<Adhigaram No> -> Returns detail from that adhigaram

*/

router.get('/getdetails', getAllData);
router.get('/getdetails/paal', getDataByPaal);
router.get('/getdetails/iyal', getDataByIyaal);
router.get('/getdetails/adhigaram', getDataByAdhigaram);

/*
Below routes are meant to fetch kurals based on:
TODO:
    1. No - Single Kural (Done)
        /:kno
        ex /1
    2. Range - List Of Kural (Done)
        /:range
        / 1-2
    3. Random -Some Random Kural
        /random (done)
*/

router.get('/kural/random', getRandomKural);
router.get('/kural/range/:range', getKuralInRange);
router.get('/kural/:kno', getKuralByNo);

export {
    router
}
import { useEffect, useMemo, useState } from "react";

import { getAllAdhigaram } from "../../api/getAllAdhigaram";
import { Select, SelectItem } from "@nextui-org/react";

const AdhigaramPage = () => {
    const [adhigaramData, setAdhigaramData] = useState();

    const fetchAdhigaramData = async () => {
        const res = await getAllAdhigaram();
        console.log(res);
        if(res){
            setAdhigaramData(res);
            if(!localStorage.getItem('adhiData')) {
                localStorage.setItem('adhiData', JSON.stringify(res));
            }
        }else {
            setAdhigaramData(null);
        }
    }

    useEffect(() => {
        if(localStorage.getItem('adhiData')){
            setAdhigaramData(JSON.parse(localStorage.getItem('adhiData')));
        }else{
            fetchAdhigaramData();
        }
    }, []);

    return(
        <div className="page-container">
            <Select
                color="primary"
                className="max-w-xs mx-auto block my-3"
                label="Select Adhigaram"
                variant="bordered"
            >
                {
                    adhigaramData &&
                    Object.keys(adhigaramData).map(
                        key => <SelectItem color="primary" variant="shadow"  startContent={key}>
                            {adhigaramData[key]}
                            </SelectItem>
                    )
                }
            </Select>
        </div>
    )
}

export default AdhigaramPage;
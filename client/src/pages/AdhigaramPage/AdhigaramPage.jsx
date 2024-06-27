import { useEffect, useMemo, useState } from "react";

import { getAllAdhigaram } from "../../api/getAllAdhigaram";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { getAdhigaram } from "../../api/getAdhigaram";
import AdhigaramCard from "../../components/AdhigaramCard/AdhigaramCard";
import { useTranslation } from "react-i18next";

const AdhigaramPage = () => {
    const [allAdhigaramData, setallAdhigaramData] = useState();
    const [adhigaramData, setAdhigaramData] = useState({
        id: 0,
        data: '',
        isFetched: false
    });
    const [buttonState, setButtonState] = useState(false);
    const { t } = useTranslation();

    const fetchallAdhigaramData = async () => {
        const res = await getAllAdhigaram();
        console.log(res);
        if(res){
            setallAdhigaramData(res);
            if(!localStorage.getItem('adhiData')) {
                localStorage.setItem('adhiData', JSON.stringify(res));
            }
        }else {
            setallAdhigaramData(null);
        }
    }

    const fetchAdhigaram = async (id) => {
        const res = await getAdhigaram(id);
        if(res){
            setAdhigaramData(prev => {
                return {
                    ...prev,
                    data: res,
                    isFetched: true
                }
            });
            console.log(adhigaramData);
            setButtonState(false);
        }else{
            setButtonState(false);
        }
    }

    useEffect(() => {
        window.scroll(0, 0);
        if(localStorage.getItem('adhiData')){
            setallAdhigaramData(JSON.parse(localStorage.getItem('adhiData')));
        }else{
            fetchallAdhigaramData();
        }
    }, []);

    const onAdhigaramChoosed = async (e) => {
        const currentAdhigaram = parseInt(e.currentKey.split('$.')[1]) + 1;
        console.log(currentAdhigaram);
        setAdhigaramData(prev => {
            return {
                ...prev,
                id: currentAdhigaram
            };
        })
    }

    const onButtonClicked = async () => {
        setButtonState(true);
        const res = await fetchAdhigaram(adhigaramData.id);
    }


    return(
        <div className="page-container flex items-center flex-col justify-center">
            <Select
                color="primary"
                className="max-w-xs mx-auto block my-3"
                label={t('selectadhi')}
                variant="bordered"
                onSelectionChange={onAdhigaramChoosed}
            >
                {
                    allAdhigaramData &&
                    Object.keys(allAdhigaramData).map(
                        key => <SelectItem color="primary" variant="flat"  startContent={key}>
                            {allAdhigaramData[key]}
                            </SelectItem>
                    )
                }
            </Select>
            {
                buttonState? 
                    <Button className="mx-auto my-4 rounded-md block" isLoading color="primary">
                        Get Details
                    </Button>:
                    <Button onClick={onButtonClicked} className="mx-auto my-4 rounded-md block" color="primary">
                        Get Details
                    </Button>
            }
            <AdhigaramCard
                data={adhigaramData.data}
                key={adhigaramData.isFetched}
                isFetched={adhigaramData.isFetched}
            />
        </div>
    )
}

export default AdhigaramPage;
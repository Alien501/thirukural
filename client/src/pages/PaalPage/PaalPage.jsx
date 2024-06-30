import { useEffect, useState } from "react";
import { getAllPaal } from "../../api/getAllPaal";
import { Select, SelectItem, Button, Card, CardBody, Popover, PopoverTrigger, PopoverContent, Listbox, ListboxItem } from "@nextui-org/react";
import { getPaal } from "../../api/getPaal";
import { useTranslation } from "react-i18next";
import PaalCard from "../../components/PaalCard/PaalCard";

const PaalPage = () => {
    const [allPaalDetails, setAllPaalDetails] = useState();
    const [buttonState, setButtonState] = useState(false);
    const [paalData, setPaalData] = useState({
        id: 0,
        data: '',
        isFetched: false
    });
    const { t, i18n } = useTranslation();

    const getAllPaalData = async () => {
        const res = await getAllPaal();
        if(res) {
            setAllPaalDetails(prev => res);
            localStorage.setItem('paal', JSON.stringify(res));
        }
        setAllPaalDetails(null);
    }

    useEffect(() => {
        window.scroll(0, 0)
        if(!localStorage.getItem('paal')) {
            getAllPaalData();
        }else{
            setAllPaalDetails(prev => JSON.parse(localStorage.getItem('paal')));
        }
    }, []);

    const fetchPaal = async () => {
        const res = await getPaal(paalData.id);
        if(res) {
            setPaalData(prev => {
                return {
                    ...prev,
                    isFetched: true,
                    data: res
                }
            });
            setButtonState(false);
        }else
            setButtonState(false)
    }

    const onPaalChoosed = (e) => {
        setPaalData(prev => {
            return {
                ...prev,
                id: e.currentKey,
            }
        });
    }

    const onButtonClicked = async () => {
        setButtonState(true);
        fetchPaal();
    }

    return(
        <div className="page-container flex items-center flex-col justify-center">
            <Select
                color="primary"
                className="w-72 mx-auto block my-3"
                label={t('selectPaal')}
                variant="bordered"
                onSelectionChange={onPaalChoosed}
            >
                {
                    allPaalDetails &&
                    Object.keys(allPaalDetails).map(
                        key => <SelectItem color="primary" variant="flat" key={key}>
                                    {allPaalDetails[key]}
                                </SelectItem>
                    )
                }
            </Select>
            {
                buttonState? 
                    <Button className="mx-auto my-4 rounded-md block" isLoading color="primary">
                        {t('getDetails')}
                    </Button>:
                    <Button onClick={onButtonClicked} className="mx-auto my-4 rounded-md block" color="primary">
                        {t('getDetails')}
                    </Button>
            }
            {
                paalData.data &&
                paalData.data.chapterGroup.detail.map(e => <PaalCard no={e.number} name={e.name} ta={e.name} tar={e.transliteration} en={e.translation} adhi={e.chapters.detail} />)
            }
        </div>
    )
};

export default PaalPage;
import { useEffect, useState } from "react";
import { getAllIyal } from "../../api/getAllIyal";
import { getIyal } from "../../api/getIyal";
import { Select, SelectItem, Button } from "@nextui-org/react";
import AdhigaramCard from "../../components/AdhigaramCard/AdhigaramCard";
import { useTranslation } from "react-i18next";

const IyalPage = () => {
    const [allIyalData, setAllIyalData] = useState();
    const [iyalData, setIyalData] = useState(
        {
            id: '',
            isFetched: false,
            data: {
                iyalName: '',
                tar: '',
                translation: '',
                number: '',
                adhigarams: []
            },
        }
    );
    const [buttonState, setButtonState] = useState(false);
    const { t } = useTranslation();
    

    const fetchAllIyal = async () => {
        const res = await getAllIyal();
        if(res) {
            setAllIyalData(prev => res);
            localStorage.setItem('iyal', JSON.stringify(res));
        }
    }

    useEffect(() => {
        window.scroll(0, 0);
        if(localStorage.getItem('iyal')) {
            setAllIyalData(prev => JSON.parse(localStorage.getItem('iyal')));
        }else{
            fetchAllIyal();
        }
    }, []);

    const fetchIyal = async (id) => {
        const res = await getIyal(id);
        if(res){
            setIyalData(prev => {
                return {
                    ...prev,
                    isFetched: true,
                    data: {
                        iyalName: res.name,
                        tar: res.transliteration,
                        translation: res.translation,
                        number: res.number,
                        adhigarams: res.chapters.detail
                    }
                }
            });
            setButtonState(false);
        }else{
            setButtonState(false);
        }
    } 

    const onIyalChoosed = async (e) => {
        setIyalData(
            prev => {
                return {
                    ...prev,
                    id: e.currentKey
                }
            }
        )
    }

    const onButtonClicked = () => {
        setButtonState(true);
        console.log('Clicked');
        fetchIyal(iyalData.id);
    }

    return(
        <div className="page-container flex items-center flex-col justify-center">
            <Select color="primary" className="max-w-xs mx-auto block my-3" label={t('selectIyal')} variant="bordered" onSelectionChange={onIyalChoosed}>
                {
                    allIyalData &&
                    Object.keys(allIyalData).map(
                        key => <SelectItem
                                    color="primary"
                                    variant="flat"
                                    key={key}
                                >
                                    {allIyalData[key]}
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
            {
                iyalData.isFetched &&
                <>
                    <div className="iyal-detail-container text-sm font-medium">
                        <h1>{iyalData.data.iyalName + ' | ' + iyalData.data.tar  + ' | ' + iyalData.data.translation}</h1>
                        <h2>{`Total: ${iyalData.data.adhigarams.length}`}</h2>
                    </div>
                    <div className="adhigaram-card-container flex flex-wrap gap-3 w-full my-3">
                        {
                            iyalData.data.adhigarams.map(
                                adhigaram => <AdhigaramCard data={adhigaram} key={adhigaram.name} isFetched={true} />
                            )
                        }
                    </div>
                </>
            }
        </div>
    )
};

export default IyalPage;
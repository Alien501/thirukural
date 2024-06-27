import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Listbox, ListboxItem, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getRandomKural } from "../../api/getRandomKural";

const RandomKuralCard = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [selectedKeys, setSelectedKeys] = useState(new Set([i18n.language]));

    useEffect(() => {
        setCurrentLanguage(prev => i18n.language);
    }, [i18n.language]);

    const [kuralData, setKuralData] = useState(
        {
            kuralNo: 0,
            kuralTALine1: '',
            kuralTALine2: '',
            adhigaramTA: '',
            adhigaramRoman: '',
            adhigaramTranslation: '',
            kuralENLine1: '',
            kuralENLine2: '',
            kuralTARLine1: '',
            kuralTARLine2: '',
        }
    );

    async function getRandomKuralData() {
        const res = await getRandomKural();
        if(res) {
            setKuralData(prev => {
                const data = res.data;
                return {
                    ...prev,
                    kuralNo: data.kural.Number,
                    kuralTALine1: data.kural.Line1,
                    kuralTALine2: data.kural.Line2,
                    kuralTARLine1: data.kural.transliteration1,
                    kuralTARLine2: data.kural.transliteration2,
                    adhigaramTA: data.adhigaram.name,
                    adhigaramRoman: data.adhigaram.transliteration,
                    adhigaramTranslation: data.adhigaram.translation,
                    kuralENLine1: data.kural.couplet,
                    kuralENLine2: '',
                }
            })
        }
    }

    useEffect(() => {
        getRandomKuralData();
    }, []);

    const onCardLanguageChanged = (e) => {
        setSelectedKeys(e);
        setCurrentLanguage(e.currentKey);
    }

    const onCopyClick = () => {
        let kural;
        if(currentLanguage == 'en') {
            kural = kuralData.kuralENLine1 + '\n' + kuralData.kuralENLine2;
        }else if(currentLanguage == 'ta') {
            kural = kuralData.kuralTALine1 + '\n' + kuralData.kuralTALine2;
        } else{
            kural = kuralData.kuralTARLine1 + '\n' + kuralData.kuralTARLine2;
        }
        navigator.clipboard.writeText(kural);
    }

    return(
        <Card shadow="sm" radius="md" className="max-w-[310px] min-w-[300px] mx-auto my-5">
            <CardHeader>
                <div className="kural-detail-container text-xs font-light w-full">
                    <Chip
                        variant="flat"
                        color="success"
                        className="mx-1 my-1 h-[30px] w-full text-xs font-light"
                        >
                            {`${t('kuralNo')}: ${kuralData.kuralNo || 0}`}
                    </Chip>
                    <Chip
                        variant="flat"
                        color="success"
                        className="mx-1 my-1 h-[30px] w-full text-xs font-light"
                        >
                            {`${t('adhigaram')}: ${currentLanguage == 'en'? kuralData.adhigaramTranslation : (currentLanguage == 'ta')? kuralData.adhigaramTA: kuralData.adhigaramRoman}`}
                    </Chip>
                </div>
            </CardHeader>
            <CardBody>
                    <p className="text-sm font-normal kural-line-1">
                        {currentLanguage === 'en'? kuralData.kuralENLine1 : (currentLanguage == 'ta')? kuralData.kuralTALine1: kuralData.kuralTARLine1}
                    </p>
                    <p className="text-sm font-normal kura-line02">
                        {currentLanguage === 'en'? kuralData.kuralENLine2 :  (currentLanguage == 'ta')? kuralData.kuralTALine2: kuralData.kuralTARLine2}
                    </p>
            </CardBody>
            <CardFooter className="flex justify-between">
                <Popover placement="bottom" color="secondary">
                    <PopoverTrigger>
                        <Button variant="flat" radius="sm" className="h-8 w-7" color="secondary" isIconOnly>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Listbox
                            aria-label="Select Kural Language"
                            selectionMode="single"
                            defaultSelectedKeys={''}
                            onSelectionChange={onCardLanguageChanged}
                            selectedKeys={selectedKeys}
                        >
                            <ListboxItem key={'ta'}>தமிழ்</ListboxItem>
                            <ListboxItem key={'tar'}>Tamil Romanised</ListboxItem>
                            <ListboxItem key={'en'}>English</ListboxItem>
                        </Listbox>
                    </PopoverContent>
                </Popover>
                <Button onClick={onCopyClick} variant="flat" radius="sm" className="h-8 w-7" color="secondary" isIconOnly>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default RandomKuralCard;
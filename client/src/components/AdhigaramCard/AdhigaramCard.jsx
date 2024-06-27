import { Card, CardBody, CardFooter, Skeleton, Popover, PopoverContent, PopoverTrigger, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';


const AdhigaramCard = ({data, isFetched}) => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [selectedKeys, setSelectedKeys] = useState(new Set([i18n.language]));
    const navigate = useNavigate();

    const onGoClicked = () => {
        navigate(`/kural/${data.start}-${data.end}`);
    }

    useEffect(() => {
        setCurrentLanguage(prev => i18n.language);
    }, [i18n.language]);

    const onCardLanguageChanged = (e) => {
        setSelectedKeys(e);
        setCurrentLanguage(e.currentKey);
    }

    return(
        <Card className="max-w-80 min-h-28 mx-auto">
            {
            isFetched?
            <>
                <CardBody className="text-sm font-thin tracking-wider">
                    <p>
                        <span>
                            {`${t('adhigaram')} : `}
                        </span>
                        <span className="font-normal">
                         {`${currentLanguage == 'ta'? data.name: currentLanguage == 'en'? data.translation: data.transliteration}`}
                        </span>
                    </p>
                    <p>
                        <span>
                            {`${t('kuralNo')}: `}
                        </span>
                        <span className="font-normal">
                            {`${data.start + ' - ' + data.end}`}
                        </span>
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
                    <Button variant="flat" radius="sm" className="h-8 w-7" color="success" isIconOnly onClick={onGoClicked}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </Button>
                </CardFooter>
            </>
            :
            <Skeleton>
                <div className="min-h-28 min-w-80 rounded-sm"></div>
            </Skeleton>
            }
        </Card>
    )
};

export default AdhigaramCard;
import { Accordion, AccordionItem, Button, Card, CardBody, Popover, PopoverTrigger, PopoverContent, Listbox, ListboxItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PaalCard = ({no, name, ta, tar, en, adhi}) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [selectedKeys, setSelectedKeys] = useState(new Set([i18n.language]));

    useEffect(() => {
        setCurrentLanguage(prev => i18n.language);
    }, [i18n.language]);

    const onCardLanguageChanged = (e) => {
        setSelectedKeys(e);
        setCurrentLanguage(e.currentKey);
    }

    return(
        <Card radius="lg" className="w-80 my-1 text-sm font-medium">
            <CardBody className="flex flex-row items-center">
                <p className="p-4">{no}</p>
                <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col items-start">
                        <p className="my-1">{currentLanguage == 'en'? en: currentLanguage == 'ta'? ta : tar}</p>
                    </div>
                </div>
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
            </CardBody>
            <Accordion variant="light" className="text-[10px] font-semibold">
                <AccordionItem className="text-sm font-thin" title={t('adhigaram')}>
                    {
                        adhi.map(
                            a =>
                                <div className="flex justify-between my-3">
                                    <p>{currentLanguage == 'en'? a.translation: currentLanguage == 'ta'? a.name : a.transliteration}</p>
                                    <Button onClick={() => navigate(`/kural/${a.start}-${a.end}`)} color="secondary" className="h-5 w-5" radius="full" isIconOnly>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                                    </Button>
                                </div>
                        )
                    }
                </AccordionItem>
            </Accordion>
        </Card>
    );
}

export default PaalCard;
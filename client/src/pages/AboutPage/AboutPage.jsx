import { Accordion, AccordionItem, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import ValluvarIcon from "../../components/ValluvarIcon/ValluvarIcon";

import './AboutPage.css';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const AboutPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return(
        <>
        <Card className="about-page-card h-max w-[90%] mx-auto text-xs font-light leading-5 tracking-wider text-pretty my-3">
            <CardHeader className="about-image-wrapper max-h-32 max-w-32 mx-auto my-2 object-fit">
                <ValluvarIcon />
            </CardHeader>
            <CardBody>
                {
                    t('kuralAbout')
                }
            </CardBody>
            <CardFooter className="flex flex-col gap-2">
                <Accordion variant="bordered">
                    <AccordionItem key={1} title={t('textWrittenByHead')} aria-label={t('textWrittenByHead')}>
                        <ol style={{
                            listStyle: 'inside'
                        }}>
                            <li>{t('pt1')}</li>
                            <li>{t('pt2')}</li>
                            <li>{t('pt3')}</li>
                            <li>{t('pt4')}</li>
                            <li>{t('pt5')}</li>
                            <li>{t('pt6')}</li>
                        </ol>
                    </AccordionItem>
                </Accordion>
                <Accordion variant="bordered">
                    <AccordionItem key={1} title={t('textWrittenByHeadEN')}>
                        <ol style={{
                            listStyle: 'inside'
                        }}>
                            <li>{t('pe1')}</li>
                            <li>{t('pe2')}</li>
                            <li>{t('pe3')}</li>
                            <li>{t('pe4')}</li>
                        </ol>
                    </AccordionItem>
                </Accordion>
            </CardFooter>
        </Card>
        </>
    );
};

export default AboutPage;
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import './HomeCard.css';

const HomeCard = ({ text, icon, onPress }) => {
    const { t } = useTranslation();

    return(
        <Card onPress={onPress} radius="sm" isHoverable isPressable aria-label={t(text)} className="home-card w-[190px] h-[190px] p-3 my-3">
            <CardBody className="card-image-container flex justify-items-center overflow-hidden object-cover align-middle">
                {
                    icon
                }
            </CardBody>
            <CardFooter className="flex justify-center">
                {
                    t(text)
                }
            </CardFooter>
        </Card>

    )
};

export default HomeCard;
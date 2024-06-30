import { useNavigate } from 'react-router-dom'

import RandomKuralCard from '../../components/RandomKuralCard/RandomKuralCard'
import HomeCard from '../../components/HomeCard/HomeCard'

import ValluvarIcon from '../../components/ValluvarIcon/ValluvarIcon'
import PaalIcon from '../../components/PaalIcon/PaalIcon'
import IyalIcon from '../../components/IyalIcon/IyalIcon'
import AdhigaramIcon from '../../components/AdhigaramIcon/AdhigaramIcon'
import { useEffect } from 'react'



const HomePage = () => {
    const navigate = useNavigate();
    const homeItems = [
        {
            text: 'aboutKural',
            icon: <ValluvarIcon />,
            to: 'about'
        },
        {
            text: 'adhigaram',
            icon: <AdhigaramIcon />,
            to: 'adhigaram'
        },
        {
            text: 'iyal',
            icon: <IyalIcon />,
            to: 'iyal'
        },
        {
            text: 'paal',
            icon: <PaalIcon />,
            to: 'paal'
        }
    ];

    function onNavClick(to) {
        navigate(to);
    }

    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return(
        <>
            <RandomKuralCard />
            <div className="home-menu-container">
                {
                    homeItems.map(
                        (item) =>
                            <HomeCard
                                icon={item.icon}
                                text={item.text}
                                onPress={() => onNavClick(item.to)}
                                key={item.to}
                            />
                    )
                }
            </div>
        </>
    )
};

export default HomePage;
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getKuralInRange } from "../../api/getKuralInRange";
import KuralCard from "../../components/KuralCard/KuralCard";

const KuralPage = () => {
    const navigate = useNavigate();
    const { r } = useParams();
    const [kuralDatas, setKuralDatas] = useState(null);

    const getKuralDatas = async () => {
        const res = await getKuralInRange(r);
        if(res){
            setKuralDatas(prev => res);
        }else{
            setKuralDatas(null);
        }
    }

    useEffect(() => {
        window.scroll(0, 0);
        if(r){
            getKuralDatas();
        }else{
            navigate(-1);
        }
    }, []);

    return(
        <div className="page-container">
            <p className="flex flex-wrap">
                {
                    kuralDatas &&
                    kuralDatas.map(
                        kural => <KuralCard
                            data={kural}
                        />
                    )
                }
            </p>
        </div>
    );
};

export default KuralPage;
const getKuralInRange = async (range) => {
    const res = await fetch(`https://thirukural-six.vercel.app/api/v1/kural/range/${range}`);
    if(res.ok) {
        const d = await res.json();
        return d.data;
    }
    return null;
}

export {
    getKuralInRange
}
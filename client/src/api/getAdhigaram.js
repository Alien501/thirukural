const getAdhigaram = async (id) => {
    const res = await fetch(`https://thirukural-six.vercel.app/api/v1/getdetails/adhigaram?no=${id}`);
    if(res.ok) {
        const d = await res.json();
        return d.data;
    }
    return null;
}

export {
    getAdhigaram
}
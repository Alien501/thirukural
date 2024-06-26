const getAllAdhigaram = async () => {
    const res = await fetch('api/v1/getdetails/adhigaram/all');
    if(res.ok) {
        const data = await res.json();
        return data.data;
    }
    return null
}

export {
    getAllAdhigaram
}
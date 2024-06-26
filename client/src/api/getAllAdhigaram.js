const getAllAdhigaram = async () => {
    const res = await fetch('https://thirukural-six.vercel.app/api/v1/getdetails/adhigaram/all');
    if(res.ok) {
        const data = await res.json();
        return data.data;
    }
    return null
}

export {
    getAllAdhigaram
}
const getAllPaal = async () => {
    const res = await fetch('https://thirukural-six.vercel.app/api/v1/getdetails/paal/all');
    if(res.ok) {
        const d = await res.json();
        return d.data;
    }
    return null;
}

export {
    getAllPaal
}
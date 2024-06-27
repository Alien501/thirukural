const getAllIyal = async () => {
    const res = await fetch('https://thirukural-six.vercel.app/api/v1/getdetails/iyal/all');
    if(res.ok) {
        const d = await res.json();
        return d.data;
    }
    return null;
}

export {
    getAllIyal
}
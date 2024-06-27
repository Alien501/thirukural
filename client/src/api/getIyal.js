const getIyal = async (id) => {
    const res = await fetch(`https://thirukural-six.vercel.app/api/v1/getdetails/iyal?name=${id}`);
    if(res.ok) {
        const d = await res.json();
        return d.data[0];
    }
    return null;
}

export {
    getIyal
}
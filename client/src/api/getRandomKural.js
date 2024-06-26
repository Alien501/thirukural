const getRandomKural = async () => {
    const res = await fetch('https://thirukural-six.vercel.app/api/v1/kural/random',
        {
            method: 'GET'
        }
    );
    if(res.ok) {
        const data = await res.json();
        return data;
    }
    return null
}

export {
    getRandomKural
}
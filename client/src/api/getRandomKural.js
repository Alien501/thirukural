const getRandomKural = async () => {
    const res = await fetch('/api/v1/kural/random',
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
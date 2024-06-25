const getRandomKural = async () => {
    const res = await fetch('http://localhost:3000/api/v1/kural/random',
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
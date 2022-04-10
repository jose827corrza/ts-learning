import axios from 'axios';

(async()=>{
    function delay(time: number) {
        const promise = new Promise<boolean>((resolve) =>{
            setTimeout(() =>{
                resolve(true);
            }, time);
        });
        return promise;
    }
    console.log('-- --'.repeat(5));
    const rta = await delay(2000);
    console.log(rta);
    console.log('-- --'.repeat(5));
    const rtAxios = await getProducts();
    console.log(rtAxios);
    

    async function getProducts() {
        const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
        return promise.data;
    }

})()
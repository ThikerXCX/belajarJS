class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

  // TODO: 1
const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isOffline){
                resolve(new NetworkError('Gagal mendapatkan data dari internet'));
            }else{
                reject({ name: 'John', age: 18 });
            }
        },500)
    });
};

  // TODO: 2

await fetchingUserFromInternet(false)
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

  // TODO: 1
const fetchingUserFromInternet = async (isOffline) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!isOffline){
                resolve({ name: 'John', age: 18 });;
            }else{
                reject(new NetworkError('Gagal mendapatkan data dari internet'));
            }
        },500)
    });
};

  // TODO: 2

const gettingUserName = async () =>{
    try {
        const user = await fetchingUserFromInternet(true);
        return user.name
    } catch (error) {
        return error
    }
}

console.log(await gettingUserName());

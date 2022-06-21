class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

  // TODO: 1
async function fetchingUserFromInternet (isOffline) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (isOffline) {
                resolve(new NetworkError('Gagal mendapatkan data dari internet'), null);
            }else{
                reject(null, { name: 'John', age: 18 });
            }
        }, 500);
    });
};  

  // TODO: 2
/*
const gettingUserName = () => {
    fetchingUserFromInternet((error, user) => {
        if (error) {
            return error.message;
        }
        return user.name;
    }, false);
};*/
async function gettingUserName(){
    try {
        await fetchingUserFromInternet(true)
    } catch (NetworkError) {
        console.log(NetworkError);
    }
}

console.log(gettingUserName())
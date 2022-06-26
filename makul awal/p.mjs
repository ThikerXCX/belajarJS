class NetworkError extends Error {
  constructor(message) {
      super(message);
      this.name = 'NetworkError';
  }
}


const fetchingUserFromInternet = async (isOffline) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

    if (!isOffline) {
      resolve({ name: 'John', age: 18 }); 
    }
     reject(new NetworkError('Gagal mendapatkan data dari internet'));
  }, 500);
  });
};

// TODO: 2
const a = await fetchingUserFromInternet(false)
console.log(a);

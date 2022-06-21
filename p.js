class NetworkError extends Error {
  constructor(message) {
      super(message);
      this.name = 'NetworkError';
  }
}


const fetchingUserFromInternet = (isOffline) => {
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
async function gettingUserName(){
  try {
    const user = await fetchingUserFromInternet(false);
    return user.name;
  } catch (rejectedReason) {
   console.log(rejectedReason.message); 
  }
};

gettingUserName();
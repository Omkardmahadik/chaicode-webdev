function fetchData(){
   return new Promise((resolve,reject)=>{
     setTimeout(() => {
        resolve({name:"omkar",url:"https://chaicode.com"})
        reject({name:"sai",url:"https://youtube.com"})
     }, 3000);
   }) 
}

async function getUserData() {
    try {
        console.log("fetching user data....");
        const userData = await fetchData()
        console.log("user data fetched success....");
        
        console.log("userdata:",userData);
        
        
    } catch (error) {
        console.error("Error fetching data",error)
    }
}

const fetch=getUserData();

console.log(fetch);

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched succesfully");
      } else {
        reject("Error fetching dectect");
      }
    }, 3500);
  });
}

let response = fetchData();

// fetchData().then((data)=> console.log(data))
//            .catch((error)=> console.log(error))

fetchData()
     .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
     .catch((error) => console.error(error));
    

console.log(response);

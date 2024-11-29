console.log("helloWorld")

function fetchPostData() {
    return new Promise((resolve) => {
      setTimeout(() => {
          // resolve({name:"omkar",id:5,gmail:"omkar@gmail.com",password:"omkar123"})
        resolve("Post data fetched");
  
      }, 2000);
    });
  }
  
  
  function fetchCommentData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Comment data fetched");
      }, 3000);
    });
  }
  
  async function getBlogData() {
    try {
      console.log("Fetched blog data");
      // const blogData = await fetchPostData()
      // const commentData = await fetchCommentData() 
      
  
     const[blogData,commentData]= await Promise.all(
      [fetchPostData()
      ,fetchCommentData()
      ]);
      
      console.log(`Blogdata:${blogData}  Commenddata:${commentData}`);
  
    } catch (error) {
      console.error("Error fetching  the data",error)
    }
  
  }
  
  getBlogData();
export const createPost = async ({
    token, 
    
    title, 
    description,
     price, 
     location,
     willDeliver
    }) => { console.log(token)
    try {
       const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/posts', {
            method: "POST",
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`
               },
           body: JSON.stringify({
               post: {
                   title: title,
                   description: description,
                   price: price,
                   location: location,
                   willDeliver: willDeliver,
               }
           })
       })
       const result = await response.json();
       console.log(result);
       console.log(response)
    } catch (error) {
        console.error(error);
    } 
}   

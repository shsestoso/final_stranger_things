export const Edit = async ({
    token, 
    title,
    description, 
    price,
    location,
    willDeliver
}) => {

    try {
      const response = await  fetch('http://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/posts/POST_ID', {
             method: "PATCH",
             headers: {
                'Content-Type': 'application/json',
                'Authorization': `Beare ${token}`
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
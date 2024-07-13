import superagent from 'superagent'

describe("Error getting all posts", () => {
    const URL ='https://jsonplaceholder.typicode.com'
   it("Error getting all posts", async () => {
     let response: any;
     try {
     response = await superagent.get(`${URL}/posts/4444`)
     } catch (err: any) {
       console.log("Sorry, there is a data error");
     }
    expect(response.status).toBe(200) 
   });
});
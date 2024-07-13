import superagent from 'superagent'
import faker from '@faker-js/faker'


describe("Checking test", () => {
  const URL ='https://jsonplaceholder.typicode.com'
   it("Updade post", async () => {
    let response = await superagent.put(`${URL}/posts/1`).send({
      userId: 15555,
    });
    expect(response.statusCode).toBe(200);
  })
  it("Getting post id", async () => {
    let response = await superagent.get(`${URL}/posts/1/comments`).query({id:4});
    response.body.forEach((item: { id: any; }) => {
        expect(item.id).toBe(4);

    });
    expect(response.status).toBe(200)
})
it("Getting post email", async () => {
    let response = await superagent.get(`${URL}/posts/1/comments`).query({email: "Jayne_Kuhic@sydney.com"});
    response.body.forEach((item: { email: any; }) => {
        expect(item.email).toBe("Jayne_Kuhic@sydney.com");
    });
    expect(response.status).toBe(200)
})
it("Delete post", async () => {
    let response = await superagent.delete(`${URL}/posts/1`);
    expect(response.status).toBe(200);
})
 });
 


// describe("Getting random id", () => {
//     const URL = 'https://jsonplaceholder.typicode.com'
//     it("Getting random id", async () => {
//         const randomId = faker.number.int({ min: 1, max: 100 })
//         let response = await superagent.get(`${URL}/posts`).query({randomId});
//         response.body.forEach((item: {randomId: any;}) => {
//             expect(item.randomId).toBe(10)
//         })
//     })
// })

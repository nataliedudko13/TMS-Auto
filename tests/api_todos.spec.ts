import superagent from 'superagent'

describe("Getiing albums data", () => {
    const URL ='https://jsonplaceholder.typicode.com'
    it("Getting id, title from albums", async () => {
        const res = await superagent.get(`${URL}/todos/1`)
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("title")
        expect(res.body).toHaveProperty("completed")
        expect(res.body.id).toBe(1)
        expect(res.body.title).toBe('delectus aut autem')
        expect(res.body.completed).toBe(false)
    })
    it("Getting all data from albums", async () =>{
        const res = await superagent.get(`${URL}/todos/1`)
        expect(res.statusCode).toBe(200)
    })
    it("Post new data", async () => {
        const res = await superagent.post(`${URL}/todos`)
    })
})
import superagent from 'superagent'

describe("POST new data then geting data", () => {
    const URL ='https://jsonplaceholder.typicode.com'

    it("Post", async () => {
        const res = await superagent.post(`${URL}/photos`).send({
            albumId: 123,
            id: 32,
            title: "hello",
        });
        expect(res.statusCode).toBe(201);
    })
    it("Getting id, title, body", async () => {
        const res = await superagent.get(`${URL}/photos/1`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("albumId")
        expect(res.body).toHaveProperty("title")
        expect(res.body).toHaveProperty("url")
        expect(res.body).toHaveProperty("thumbnailUrl")
        expect(res.body.albumId).toBe(1)
        expect(res.body.title).toBe("accusamus beatae ad facilis cum similique qui sunt")
        expect(res.body.url).toBe("https://via.placeholder.com/600/92c952")
        expect(res.body.thumbnailUrl).toBe("https://via.placeholder.com/150/92c952")
    })
    });
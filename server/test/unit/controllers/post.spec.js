const postControllers = require("../../../controllers/posts")
const Post = require("../../../models/post")
const mockSend = jest.fn();
const mockJson = jest.fn();
let mockReq = jest.fn()
const mockStatus = jest.fn((code) => ({
    send: mockSend,
    json: mockJson,
    end: jest.fn(),
  }));
  const mockRes = { status: mockStatus };

  describe("posts conroller", () => {
    beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("all", () => {
    test("it return all posts with a 200 status code", async() => {
        jest.spyOn(Post, "all").mockResolvedValue(["post1", "post2"])
        // mockReq.headers.host = '127.0.0.1:5000'
        mockReq = {headers: {host:'127.0.0.1:5000'}}
        await postControllers.getAllPosts(mockReq, mockRes)
        expect(mockStatus).toHaveBeenCalledWith(200)
        expect(mockJson).toHaveBeenCalledWith(["post1", "post2"]);
    })
  })
  })
const axios = require("axios");
const { getUpperCasedTodoTitle } = require("./todos");

jest.mock("axios");

test("should return correct menu title", async () => {
  const TEST_ID = 1;
  axios.get.mockResolvedValue({
    data: {
      userId: 1,
      id: 2,
      title: "bnol",
      completed: false,
    },
  });

  const spiedGet = jest.spyOn(axios, "get");
  const upperCasedTitle = await getUpperCasedTodoTitle(TEST_ID);
  expect(upperCasedTitle).toBe("BNOL");
  expect(spiedGet).toHaveBeenCalled();
  expect(spiedGet).toHaveBeenCalledWith(
    `https://jsonplaceholder.typicode.com/todos/${TEST_ID}`,
  );
});

test("should return false if error", async () => {
  const TEST_ID = 1;
  axios.get.mockRejectedValue();
  const spiedGet = jest.spyOn(axios, "get");
  const result = await getUpperCasedTodoTitle(TEST_ID);
  expect(result).toBe(false);
  expect(spiedGet).toHaveBeenCalled();
  expect(spiedGet).toHaveBeenCalledWith(
    `https://jsonplaceholder.typicode.com/todos/${TEST_ID}`,
  );
});

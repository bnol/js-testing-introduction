const axios = require("axios");

const getUpperCasedTodoTitle = async id => {
  /**
   * {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    }
   */
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );

    return data.title.toUpperCase();
  } catch (e) {
    return false;
  }
};

exports.getUpperCasedTodoTitle = getUpperCasedTodoTitle;

const { checkAndGenerate, createElement } = require("./util");

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector("#submit");
  newUserButton.addEventListener("click", addUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector("#name");
  const newUserAgeInput = document.querySelector("#age");

  const outputText = checkAndGenerate(
    newUserNameInput.value,
    newUserAgeInput.value,
  );

  if (!outputText) {
    return;
  }

  const userList = document.querySelector(".user-list");

  const element = createElement("li", outputText, "user-item");
  userList.appendChild(element);
};

// Start the app!
initApp();

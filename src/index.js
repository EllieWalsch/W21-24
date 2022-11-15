/**
 * HINTS:
 * If it's a 'default' export, no need to use curly braces.
 */

import apiService from "./services/api.service";
import renderService from "./services/render.service";

document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // takes user entered username
  const username = event.target.username.value;
  // puts it into api URL
  const data = await apiService.getReposByUsername(username);

  renderService.renderRepos(username, data);
});

document.getElementById("topics").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const topic = event.target.innerText.toLowerCase();
    const data = await apiService.getReposByTopic(topic);
  }
});


// TODO: create functions that filter repos by language
// does the API have documentation that filters this?
// only show repos that contain the specific language

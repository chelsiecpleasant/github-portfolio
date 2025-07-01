const username = "chelsiecpleasant";
const container = document.getElementById("projects-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank">💖 View Project</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching repositories:", error);
    container.innerHTML = "<p>Oops! Couldn’t load projects 😢</p>";
  });

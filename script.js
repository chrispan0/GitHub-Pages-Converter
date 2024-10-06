document.getElementById("convertButton").addEventListener("click", function () {
  const repoUrl = document.getElementById("repoUrl").value.trim();
  const result = document.getElementById("result");

  // Validate GitHub repository URL pattern
  const repoPattern = /^https:\/\/github.com\/([^\/]+)\/([^\/]+)\/?$/;
  const match = repoPattern.exec(repoUrl);

  if (match) {
    const username = match[1];
    const repoName = match[2];
    const pagesLink = `https://${username}.github.io/${repoName}/`;

    result.textContent = `Your GitHub Pages link is: ${pagesLink}`;
    result.classList.remove("hidden");
  } else {
    result.textContent = "Invalid GitHub repository URL. Please try again.";
    result.classList.remove("hidden");
  }
});

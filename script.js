// GitHub Username
const username = 'fal3n-4ngel'; // Replace with your GitHub username

// Function to fetch GitHub stats
async function fetchGitHubStats() {
  try {
    // Fetching user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();

    // Fetching repos to calculate stars
    const reposResponse = await fetch(userData.repos_url);
    const reposData = await reposResponse.json();

    // Total stars
    const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    // Updating the DOM with fetched data
    document.getElementById('repos').textContent = userData.public_repos;
    document.getElementById('followers').textContent = userData.followers;
    document.getElementById('stars').textContent = totalStars;

    // Fetching commits and contributions (additional API needed for commits)
    // For contributions over the past year, you could use a service like GitHub GraphQL API.
    document.getElementById('commits').textContent = 'N/A'; // GitHub API v3 doesn't provide commit count
    document.getElementById('contributions').textContent = 'N/A'; // Requires GitHub GraphQL API
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
}

// Fetch stats on page load
fetchGitHubStats();

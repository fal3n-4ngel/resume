
const username = 'fal3n-4ngel'; 

async function fetchGitHubStats() {
  try {

    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();

    const reposResponse = await fetch(userData.repos_url);
    const reposData = await reposResponse.json();

    const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    
    document.getElementById('repos').textContent = userData.public_repos;
    document.getElementById('followers').textContent = userData.followers;
    document.getElementById('stars').textContent = totalStars;

   
    document.getElementById('commits').textContent = 'N/A'; 
    document.getElementById('contributions').textContent = 'N/A'; 
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
}

// Fetch stats on page load
fetchGitHubStats();

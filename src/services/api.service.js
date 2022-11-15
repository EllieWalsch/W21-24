/**
 * HINTS:
 * 1. For the repo issues, be sure to return just the response, and not the actual data.
 * 2. For the repo issues, you'll need to pass in the repo
 * 3. The URL for getting repos by topics looks like this:
 *  'https://api.github.com/search/repositories?q=javascript+is:featured&sort=help-wanted-issues'
 * 4. The URL for getting issues looks like this:
 * 'https://api.github.com/repos/facebook/react/issues?direction=asc'
 * Note that 'facebook/react' is the repo name (you can just use one parameter for this)
 * 5. The URL for getting a user's repos looks like this:
 * 'https://api.github.com/users/USERNAME/repos'
 */

const BASE_URL = "http://api.github.com";

export default {
  getIssuesResponse(repo) {
    // nothing to await, just returning the promise
    // whoever calls this function will need the await
    return fetch(`${BASE_URL}/repos/${nameOfRepo}/issues?direction=asc`);
  },
  async getReposByTopic(topic) {
    const response = await fetch(
      `${BASE_URL}/search/repositories?q=${topic}+is:featured&sort=help-wanted-issues`
    );
    return response.json();
  },
  getReposByUsername(ghUser) {
    const response = await fetch(`${BASE_URL}/users/${ghUser}/repos`);

    return response.json();
  },
};

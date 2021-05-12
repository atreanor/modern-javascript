/**
 * Github class provides API access functionality to the Github API, can be used 
 * either with id & secret, or without with limit to 100 calss per hr
 */
class Github {
  constructor() {
    // regester for API application access & insert your details below
    // note API limited to 100 calls per hour without registration
    this.client_id = '';
    this.client_sercret = '';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  // if using registered client id & secret
  // const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
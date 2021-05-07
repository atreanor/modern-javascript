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
  }
  // if using registered client id & secret
  // const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
class GitHub{
  constructor(){
    this.client_id = '12fbfc2d01a94aa4a1ba';
    this.client_secret ='6d447ee026588cf41910af8368bd90aa659359e2';

    this.repos_count=5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return{
      profile,
      repos
    }
  }
}
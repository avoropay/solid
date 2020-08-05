// Dependency inversion principle

class Fetch {
  request(url) {
    // return fetch(url).then(result => result.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    return 'data from local storage'
  }
}

class Database {
  constructor(client) {
    this.fetch = new Fetch();
  }

  getData() {
    return this.fetch.request('Logixoncloud.com')
  }
}

const db = new Database()

console.log(db.getData())

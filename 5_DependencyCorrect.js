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

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request('Logixoncloud.com')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet(key) {
    return this.localStorage.get(key)
  }
}


class Database {
  constructor(client) {
    this.client = client
  }

  getData(key) {
    return this.client.clientGet(key)
  }
}

const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'))

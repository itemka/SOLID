// Dependency Inversion Principle

class Fetch {
  request(url) {
    return Promise.resolve('Data from fetch')
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
    return this.fetch.request('youtube.com')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet() {
    return this.localStorage.get('data')
  }
}

class Database {
  constructor(client) {
    this.client = client
  }

  getData() {
    return this.client.clientGet()
  }
}

const db = new Database(new LocalStorageClient())

console.log(db.getData());

// Single Responsibility Principle

class Location {
    constructor(name, address) {
        this.name = name
        this.addrees = address
        this.modified = false
    }

    update(name, address) {
        this.name = name
        this.addrees = address
        this.modified = true
    }

    toHTML() {
        return `
            <div class="location">
                <h1>${this.name}</h1>
                <p>${this.addrees}</p>
            </div>
        `
    }

    toJSON() {
        return JSON.stringify({
            name: this.name,
            address: this.addrees,
            modified: this.modified
        }, null, 2)
    }
}

const location = new Location('Baburka', 'Zaporizhzhe');

console.log(location.toHTML())
console.log(location.toJSON())
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
}

class LocationPrinter {
    constructor(location) {
        this.location = location
    }

    html() {
        return `
            <div class="location">
                <h1>${this.location.name}</h1>
                <p>${this.location.addrees}</p>
            </div>
        `
    }

    json () {
        return JSON.stringify({
            name: this.location.name,
            address: this.location.addrees,
            modified: this.location.modified
        }, null, 2)
    }

    xml () {
        return `
        <location>
            <name>${this.location.name}</name>
            <address>${this.location.addrees}</address>
            <modified>${this.location.modified}</modified>
        </location>
        `
    }
}

const printer = new LocationPrinter(
    new Location('Baburka', 'Zaporizhzhe')
)

console.log(printer.html());
console.log(printer.json());
console.log(printer.xml());

// Liskov substitution principle

class Person {
  access() {
    console.log('You have access')
  }
}

class Frontend extends Person {
  canCreateFrontend() {}
}

class Backend extends Person {
  canCreateBackend() {}
}

class PersonFromDifferentDepartament extends Person {
  access() {
    throw new Error('You don\'t have access! Go to your place!')
  }
}

const openSecretDoor = member => member.access()

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
openSecretDoor(new PersonFromDifferentDepartament()) // remove it

// ===============

class Component {
  render() {
    return `<div>Component</div>`
  }
}

class HeaderComponent extends Component {
  onInit() {}
}

class FooterComponent extends Component {
  afterInit() {}
}

class HOC extends Component {
  render() {
    throw new Error('Render is impossible here')
  }

  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

const renderComponent = component => console.log(component.render())

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
renderComponent(new HOC()) // remove it

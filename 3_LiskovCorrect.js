// Liskov substitution principle

class Person {}

class Member extends Person {
  access() {
    console.log('You have access')
  }
}

class QualityAssurance extends Person {}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentDepartament extends QualityAssurance {
  access() {
    throw new Error('You don\'t have access! Go to your place!')
  }
}

const openSecretDoor = member => member.access()

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
//openSecretDoor(new PersonFromDifferentDepartament())  // There should be member!

// ===============

class Component {}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
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
const hoc = new HOC()
renderComponent(hoc.wrapComponent(new FooterComponent()))


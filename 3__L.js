// Liskov Substitution Principle

class Person {}

class Member extends Person {
  constructor() {
    super()
  }

  access() {
    console.log('There is access')
  }
}

class Guest extends Person {
  constructor() {
    super()
  }

  access() {
    console.log('No access')
  }
}

class Frontend extends Member {
  constructor() {
    super()
  }
}

class Backend extends Member {
  constructor() {
    super()
  }
}

class PersonFromDifferentCompany extends Guest {
  constructor() {
    super()
  }
}

function openSecretDoor (member) {
  member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
openSecretDoor(new PersonFromDifferentCompany())

// =========================

class Component {}

class ComponentWithTemplate extends Component {
  render() {
    return '<div>Component</div>'
  }
}

class HigherOrderComponent extends Component {
  render() {
    throw new Error('Render is impossible here')
  }
}

class Header extends ComponentWithTemplate {
  onInit() {}
}

class Footer extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  wrapComponent(component) {
    component.wrapped = true

    return component
  }
}

function renderComponent (component) {
  console.log(component.render())
}

renderComponent(new Header())
renderComponent(new Footer())
renderComponent(new HOC())

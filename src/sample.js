// 1.
const componentA = React.createElement(AppComponent, props)
const componentB = React.createElement(AppComponent, props)
console.log(componentA.type === componentB.type)             // true

// 2.
const componentA = React.createElement(() => <AppComponent />, props)
const componentB = React.createElement(() => <AppComponent />, props)
console.log(componentA.type === componentB.type)             // false


// Warning: <Route component> takes precedence over <Route render> so don’t use both in the same <Route>.
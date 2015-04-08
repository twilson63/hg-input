# Mercury (hg) HyperScript Input Control

This is a pure hyperscript input control that uses a short syntax for setting the name, id and any classes you would like to add to the input control

## Usage

```
var input = require('hg-input')

function render() {
  return h('form', { 'ev-submit': hg.sendSubmit(state.channels.submit)}, [
    input('name.u-full-width'),
    input('email.u-full-width', { type: 'email' }),
    input('password.u-full-width', { type: 'password' }),
    h('button', 'Register')
  ])
}
```

## install

```
npm i hg-input
```



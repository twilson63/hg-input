var test = require('tap').test
var h = require('mercury').h
var input = require('../')

test('basic input control', function(t) {
  t.deepEquals(
    h('fieldset', [
      h('label', { htmlFor: 'name'}, 'Name'),
      h('input.u-full-width', { id: 'name', type: 'text', name: 'name'})
    ]),
    input('name.u-full-width')
  ) 

  t.end()
})

test('email input control', function(t) {
  t.deepEquals(
    h('fieldset', [
      h('label', { htmlFor: 'email'}, 'Email'),
      h('input.u-full-width', { id: 'email', type: 'email', name: 'email'})
    ]),
    input('email.u-full-width', { type: 'email' })
  )
  t.end()
})

test('input with value control', function(t) {
  t.deepEquals(
    h('fieldset', [
      h('label', {htmlFor: 'name'}, 'Name'),
      h('input.u-full-width', { id: 'name', type: 'text', name: 'name', value: 'Beep Boop'})
    ]),
    input('name.u-full-width', { value: 'Beep Boop' })
  )
  t.end()
})

// ## usage
//
// ```
// var input = require('hg-input')
// return h('form', [
//   input('name'),
//   input('email', { type: 'email' })
// ])
//
var h = require('mercury').h
var capitalize = require('capitalize')
var xtend = require('xtend')

module.exports = function (s, o) {
  var a = s.split('.')
  var name = a.shift()
  var className = a.join(' ')
  var options = xtend({
    id: name,
    name: name,
    type: 'text',
    className: className
  }, o)

  return h('fieldset', [
    h('label', { htmlFor: name }, capitalize(name)),
    h('input', options)
  ])
}

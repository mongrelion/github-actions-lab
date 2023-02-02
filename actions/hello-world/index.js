const core = require('@actions/core');

core.warning('Something, something, deprecation');
core.warning('This is another warning', {
  foo: 'foo',
  bar: 'bar'
});

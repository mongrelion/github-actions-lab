const core = require('@actions/core');

const err = new Error('This is an error object');
core.error('This is an error message')
core.error(err);
core.setFailed('Something went wrong');
throw new Error('Something went terribly wrong');

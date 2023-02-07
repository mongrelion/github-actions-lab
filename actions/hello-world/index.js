const core = require('@actions/core');

const err = new Error('This is an error object');
core.warning('Something went wrong');
core.error(err);

const core = require('@actions/core');

core.setFailed('Something went wrong');
throw new Error('Something went terribly wrong');

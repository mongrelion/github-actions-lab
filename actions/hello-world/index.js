const core = require('@actions/core');

function getImportantValue() {
  return core.getInput('important') === 'true';
}

const important = getImportantValue();
const message = `type=${typeof important};value=${important}`;
core.info(message);
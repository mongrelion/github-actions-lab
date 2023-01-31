/**
 * We want to test that if an error is unhandled, the Actions framework knows
 * how to handle it
 */
const { cp } = require('node:fs/promises');

async function main() {
  await cp('foo', 'bar', {});
}

main();

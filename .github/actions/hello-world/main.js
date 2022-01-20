const core = require('@actions/core');

const firstGreeting = core.getInput('first-freeting');
const secondGreeting = core.getInput('second-freeting');
const thirdGreeting = core.getInput('third-freeting');

console.log(`Hello ${firstFreeting}`);
console.log(`Hello ${secondFreeting}`);
if (thirdGreeting) {
  console.log(`Hello ${thirdFreeting}`);
}

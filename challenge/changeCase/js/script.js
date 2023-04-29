document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

textArea.style.width = '500px';
textArea.style.height = '200px';
textArea.style.display = 'block';
textArea.style.marginBottom = '12px';
btn.style.cursor = 'pointer';
btn.innerText = 'Execute';

btn.addEventListener('click', function () {
  const text = textArea.value;
  const variables = text.split('\n');

  for (const [index, variable] of variables.entries()) {
    const [part1, part2] = variable.trim().toLowerCase().split('_');
    const output = `${part1}${part2[0].toUpperCase() + part2.slice(1)} `;
    console.log(`${output.padEnd(20)}${'✅'.repeat(index + 1)}`);
  }
});

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

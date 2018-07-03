export function generateId() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    var textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy', err);
    }

    document.body.removeChild(textArea);
  } else {
    navigator.clipboard
      .writeText(text)
      .then(() => {}, (err) => console.error('Async: Could not copy text: ', err));
  }
}

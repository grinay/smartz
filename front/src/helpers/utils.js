export function generateId(count = 5) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < count; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

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
      .then(() => { }, (err) => console.error('Async: Could not copy text: ', err));
  }
}

export function tryParce(str) {
  try {
    return JSON.parse(str)
  } catch (error) {
    return null;
  }
}

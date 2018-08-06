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

export function goToDocsRoute(route) {
  switch (route) {
    case 'contract-uploading-en':
      return 'en/contract-uploading';

    case 'simple-ico-contract-en':
      return 'en/simple-ico';

    case 'erc-20-token-en':
      return 'en/erc-20-token';

    case 'multisig-wallet-en':
      return 'en/multisignature-wallet';

    case 'simple-voting-en':
      return 'en/simple-voting';

    case 'contract-deploy-ru':
      return 'simple-ico';

    case 'contract-upload-ru':
      return 'contract-upload';

    case 'erc-20-token-ru':
      return 'erc-20-token';

    case 'multisignature-wallet-ru':
      return 'multisignature-wallet';

    case 'simple-voting-ru':
      return 'simple-voting';

    case 'equity-contract-ru':
    case 'equity-contract-en':
    default:
      return '';
  }
}

const fontSizeCtrl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeCtrl.addEventListener('input', () => {
  textSpan.style.fontSize = fontSizeCtrl.value + 'px';
});
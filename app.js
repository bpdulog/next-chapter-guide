(() => {
  const storageKey = 'next-chapter-layoff-guide-v1';
  const boxes = [...document.querySelectorAll('[data-task]')];
  const track = document.querySelector('.progress-track');
  const count = document.getElementById('progress-count');
  const bar = document.getElementById('progress-bar');
  const update = () => {
    const done = boxes.filter(box => box.checked).length;
    count.textContent = `${done} of ${boxes.length} done`;
    bar.style.width = `${boxes.length ? done / boxes.length * 100 : 0}%`;
    track.setAttribute('aria-valuemax', boxes.length);
    track.setAttribute('aria-valuenow', done);
    try { localStorage.setItem(storageKey, JSON.stringify(boxes.filter(box => box.checked).map(box => box.dataset.task))); } catch (_) {}
  };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    boxes.forEach(box => { box.checked = saved.includes(box.dataset.task); });
  } catch (_) {}
  boxes.forEach(box => box.addEventListener('change', update));
  update();
  document.getElementById('reset-progress').addEventListener('click', () => {
    boxes.forEach(box => { box.checked = false; });
    update();
    boxes[0]?.focus();
  });
  document.getElementById('print-button').addEventListener('click', () => window.print());
  const status = document.getElementById('copy-status');
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const text = document.getElementById(button.dataset.copy).textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = 'Script copied. You can paste and edit it before sending.';
    } catch (_) {
      const range = document.createRange();
      const quote = document.getElementById(button.dataset.copy);
      range.selectNodeContents(quote);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Select the highlighted script and copy it.';
    }
  }));
})();

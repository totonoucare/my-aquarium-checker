(function () {
  const grid = document.querySelector('.fish-grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.fish-card'));
  const toolbar = document.getElementById('fish-filter-toolbar');
  const resultCount = document.getElementById('fish-filter-count');
  if (!toolbar || !resultCount) return;

  const filters = { env: 'all', level: 'all' };

  function parseCard(card) {
    const badges = Array.from(card.querySelectorAll('.badge')).map((el) => el.textContent.trim());
    const sizeText = badges.find((t) => t.includes('cm〜')) || '';
    const heaterText = badges.find((t) => t.includes('必要') || t.includes('不要')) || '';
    const levelText = badges.find((t) => t.includes('初心者向け')) || '';
    const group = card.querySelector('.eyebrow')?.textContent.trim() || 'その他';

    return {
      minTank: Number((sizeText.match(/(\d+)cm/) || [])[1] || 999),
      heaterRequired: heaterText === '必要',
      beginnerStars: (levelText.match(/★/g) || []).length,
      group
    };
  }

  const meta = new Map(cards.map((c) => [c, parseCard(c)]));

  function matchEnv(m) {
    if (filters.env === 'all') return true;
    if (filters.env === 'noheater') return !m.heaterRequired;
    if (filters.env === 'heater') return m.heaterRequired;
    if (filters.env === 'small') return m.minTank <= 30;
    if (filters.env === 'midup') return m.minTank >= 45;
    return true;
  }

  function matchLevel(m) {
    if (filters.level === 'all') return true;
    if (filters.level === 'beginner') return m.beginnerStars >= 4;
    if (filters.level === 'challenge') return m.beginnerStars <= 3;
    return true;
  }

  function regroup() {
    const visible = cards.filter((card) => card.style.display !== 'none');
    const groups = new Map();
    visible.forEach((card) => {
      const group = meta.get(card).group;
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group).push(card);
    });

    grid.innerHTML = '';
    groups.forEach((groupCards, name) => {
      const h = document.createElement('h2');
      h.className = 'fish-group-title';
      h.textContent = name;
      grid.appendChild(h);
      groupCards.forEach((card) => grid.appendChild(card));
    });
  }

  function render() {
    let shown = 0;
    cards.forEach((card) => {
      const m = meta.get(card);
      const visible = matchEnv(m) && matchLevel(m);
      card.style.display = visible ? '' : 'none';
      if (visible) shown += 1;
    });
    resultCount.textContent = `${shown}件表示中 / 全${cards.length}件`;
    regroup();
  }

  toolbar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    const group = btn.dataset.group;
    filters[group] = btn.dataset.filter;
    toolbar.querySelectorAll(`button[data-group="${group}"]`).forEach((el) => el.classList.remove('is-active'));
    btn.classList.add('is-active');
    render();
  });

  render();
})();

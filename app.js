let stats = {
  knowledge: 0,
  charm: 0,
  guts: 0,
  kindness: 0,
  proficiency: 0
};

function addXP(stat) {
  stats[stat] += 10;
  const progressBar = document.getElementById(`${stat}-bar`);
  const span = progressBar.nextElementSibling;
  progressBar.value = stats[stat];
  span.textContent = `${stats[stat]} XP`;

  const statItem = document.getElementById(stat);
  statItem.classList.add('xp-increase');

  if (stats[stat] >= 100) {
    alert(`${stat.charAt(0).toUpperCase() + stat.slice(1)} leveled up!`);
    stats[stat] = 0;
    progressBar.value = stats[stat];
    span.textContent = `${stats[stat]} XP`;

    const pointUp = document.getElementById("point-up");
    pointUp.classList.remove("hidden");

    setTimeout(() => {
      pointUp.classList.add("hidden");
    }, 2000);
  }

  setTimeout(() => {
    statItem.classList.remove('xp-increase');
  }, 1000);
}

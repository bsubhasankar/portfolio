// Get all skill elements
const skills = document.querySelectorAll('.skill');

// Loop through each skill element
skills.forEach(skill => {
  const level = skill.getAttribute('data-level');
  const percentageBar = skill.querySelector('.percentage-bar');
  
  // Set the width of the percentage bar
  percentageBar.style.setProperty('--level', `${level}%`);
});


function triggerAnimation() {
  const box = document.getElementById('animatedBox');

  // Add class to trigger CSS animation
  box.classList.add('move');

  // Save animation state to localStorage
  localStorage.setItem('animationTriggered', 'true');

  // Optionally disable the button after animation
  document.querySelector('button').disabled = true;
}

// Check on page load if animation was already triggered
window.onload = () => {
  const wasAnimated = localStorage.getItem('animationTriggered');
  if (wasAnimated === 'true') {
    const box = document.getElementById('animatedBox');
    box.classList.add('move');
    document.querySelector('button').disabled = true;
  }
};

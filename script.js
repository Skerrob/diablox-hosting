// Prosty skrypt do obsługi przycisków w sekcji cenowej
function handleButtonClick(plan) {
  alert('Wybrałeś plan: ' + plan + '!');
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (event) => {
    const planName = event.target.closest('.pricing-plan').querySelector('h3').innerText;
    handleButtonClick(planName);
  });
});

const alerts = document.querySelectorAll('.alert');

alerts.forEach((alert) => {
  console.log(alert);
  const value = alert.getAttribute('data-type');
  console.log(value);
  if (value === 'error') alert.classList.add('alert--error');
  if (value === 'success') alert.classList.add('alert--success');
  if (value === 'warning') alert.classList.add('alert--warning');
});

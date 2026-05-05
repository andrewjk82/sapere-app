window.addEventListener('error', function(event) {
  fetch('http://localhost:5173/log-error', {
    method: 'POST',
    body: JSON.stringify({ message: event.message, filename: event.filename, lineno: event.lineno, colno: event.colno, error: event.error ? event.error.stack : null })
  }).catch(()=>console.error('Fetch failed'));
});
window.addEventListener('unhandledrejection', function(event) {
  fetch('http://localhost:5173/log-error', {
    method: 'POST',
    body: JSON.stringify({ message: event.reason ? event.reason.message : 'Unhandled Rejection', stack: event.reason ? event.reason.stack : null })
  }).catch(()=>console.error('Fetch failed'));
});

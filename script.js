
let startTime = null;
let timerInterval = null;
let secondsPassed = 0;

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

document.getElementById('startBtn').addEventListener('click', () => {
  const now = new Date();
  startTime = now;
  secondsPassed = 0;

  document.getElementById('datetimeDisplay').innerText =
    `📅 ${now.toLocaleDateString('ar-EG')} 🕒 ${now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}`;

  document.getElementById('timerDisplay').innerText = formatTime(0);
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    secondsPassed++;
    document.getElementById('timerDisplay').innerText = formatTime(secondsPassed);
  }, 1000);
});

document.getElementById('endBtn').addEventListener('click', () => {
  if (!startTime) return;

  const endTime = new Date();
  const duration = Math.floor((endTime - startTime) / 1000);
  const date = startTime.toLocaleDateString('ar-EG');
  const time = startTime.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit', hour12: true });
  const fingerprint = document.querySelector('input[name="fingerprint"]:checked').value;
  const delayReason = document.getElementById('delayReason').value;

  const table = document.getElementById('dataTable');
  const row = table.insertRow();
  row.insertCell(0).innerText = table.rows.length - 1;
  row.insertCell(1).innerText = date;
  row.insertCell(1).innerText = time;
  row.insertCell(1).innerText = time;
  row.insertCell(2).innerText = duration;
  row.insertCell(3).innerText = fingerprint;
  row.insertCell(4).innerText = delayReason;

  startTime = null;
  clearInterval(timerInterval);
  document.getElementById('timerDisplay').innerText = "00:00:00";
});

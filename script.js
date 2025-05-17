let startTime = null;

document.getElementById('startBtn').addEventListener('click', () => {
  const now = new Date();
  startTime = now;

  const date = now.toLocaleDateString('ar-EG');
  const time = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('datetimeDisplay').innerText = `📅 ${date} 🕒 ${time}`;
});

document.getElementById('endBtn').addEventListener('click', () => {
  if (!startTime) return;

  const endTime = new Date();
  const duration = Math.floor((endTime - startTime) / 1000);
  const date = startTime.toLocaleDateString('ar-EG');
  const time = startTime.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
  const fingerprint = document.querySelector('input[name="fingerprint"]:checked').value;
  const delayReason = document.getElementById('delayReason').value;

  const table = document.getElementById('dataTable');
  const row = table.insertRow();
  row.insertCell(0).innerText = date;
  row.insertCell(1).innerText = time;
  row.insertCell(2).innerText = duration;
  row.insertCell(3).innerText = fingerprint;
  row.insertCell(4).innerText = delayReason;

  startTime = null;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('delayReason').value = "";
  document.querySelector('input[name="fingerprint"][value="نعم"]').checked = true;
  document.getElementById('datetimeDisplay').innerText = "";
  startTime = null;
});

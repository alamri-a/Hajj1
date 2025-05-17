let startTime = null;

document.getElementById('startBtn').addEventListener('click', () => {
  const now = new Date();
  startTime = now;

  const date = now.toLocaleDateString('ar-EG');
  const time = now.toLocaleTimeString('ar-EG');
  document.getElementById('datetimeDisplay').innerText = `📅 ${date} 🕒 ${time}`;

  alert('تم تسجيل التاريخ والوقت ووقت البدء تلقائياً');
});

document.getElementById('endBtn').addEventListener('click', () => {
  if (!startTime) {
    alert('يرجى الضغط على "بدء" أولاً');
    return;
  }

  const endTime = new Date();
  const duration = Math.floor((endTime - startTime) / 1000);
  const date = startTime.toLocaleDateString('ar-EG');
  const clock = startTime.toLocaleTimeString('ar-EG');
  const start = startTime.toLocaleTimeString('ar-EG');
  const end = endTime.toLocaleTimeString('ar-EG');
  const fingerprint = document.querySelector('input[name="fingerprint"]:checked').value;
  const delayReason = document.getElementById('delayReason').value;

  const table = document.getElementById('dataTable');
  const row = table.insertRow();
  row.insertCell(0).innerText = date;
  row.insertCell(1).innerText = clock;
  row.insertCell(2).innerText = start;
  row.insertCell(3).innerText = end;
  row.insertCell(4).innerText = duration;
  row.insertCell(5).innerText = fingerprint;
  row.insertCell(6).innerText = delayReason;

  startTime = null;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('delayReason').value = "";
  document.querySelector('input[name="fingerprint"][value="نعم"]').checked = true;
  document.getElementById('datetimeDisplay').innerText = "";
  startTime = null;
  alert('تم التهيئة لتسجيل جديد');
});

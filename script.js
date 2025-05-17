
let startTime;
let timerInterval;
let count = 1;

function startTimer() {
  const now = new Date();
  startTime = now;
  document.getElementById("timer").textContent = "00:00";

  timerInterval = setInterval(() => {
    const secondsPassed = Math.floor((new Date() - startTime) / 1000);
    document.getElementById("timer").textContent = `00:${secondsPassed < 10 ? '0' : ''}${secondsPassed}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);

  const now = new Date();
  const durationInSeconds = Math.floor((now - startTime) / 1000);

  const date = now.toLocaleDateString('ar-EG');
  const time = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

  const fingerprint = document.querySelector('input[name="fingerprint"]:checked').value;
  const delayReason = document.getElementById("delayReason").value;

  const table = document.getElementById("logTable").querySelector("tbody");
  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td>${count++}</td>
    <td>${date}</td>
    <td>${time}</td>
    <td>${durationInSeconds}</td>
    <td>${fingerprint}</td>
    <td>${delayReason}</td>
  `;

  document.getElementById("timer").textContent = "00:00";
  document.getElementById("delayReason").value = "";
}

function saveTableAsPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  html2canvas(document.querySelector("#logTable")).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    doc.addImage(imgData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight);
    doc.save("سجل_الحجاج.pdf");
  });
}

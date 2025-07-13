document.getElementById('calculatorForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const imei = document.getElementById('imei').value.trim();
  const resultDiv = document.getElementById('result');

  if (!/^\d{15}$/.test(imei)) {
    resultDiv.textContent = 'Please enter a valid 15-digit IMEI.';
    return;
  }

  const unlockCode = calculateHuaweiV1(imei);
  resultDiv.textContent = `Unlock Code: ${unlockCode}`;
});

function calculateHuaweiV1(imei) {
  return (parseInt(imei, 10) % 10000000).toString().padStart(8, '0');
}
    
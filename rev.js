//ini file java
function konversiSuhu() {
  //celcis ke input
  const Celcius = parseFloat(document.getElementById("Celcius").value);
  //validasi
  if (isNaN(Celcius)) {
    alert("Masukkan yang tepat");

    document.getElementById("Celcius").value = "";
    document.getElementById("Hasil").textContent = "";
    document.getElementById("cara").textContent = "";
    return;
  }
  //ke farenheit
  const Hasil = (Celcius * 9) / 5 + 32;
  //tmpln hsl
  document.getElementById("Hasil").value = `${Celcius} ℃=${Hasil.toFixed(
    2
  )} °F`;
  //caranya
  document.getElementById("cara").value = `${Celcius} * 9 / 5 + 32 = ${Hasil}`;
}

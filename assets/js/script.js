function formValidation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (name != "" && email != "" && phone != "" && message != "") {
    alert("Pesan Anda sudah terkirim. Terimakasih!");
    location.reload();
  } else {
    alert("Mohon isi form dengan lengkap!");
  }
}

# login
login and sign up system - javascript study

<br><br>

<div style="display: flex; justify-content: space-between;">
  <img id="image1" src="https://github.com/user-attachments/assets/6d8378cc-5899-42e4-b000-d7c93cadc3a9" alt="login1" width="48%" />
  <img id="image2" src="https://github.com/user-attachments/assets/336a1abe-e631-4767-b0b6-79a6e963a6ea" alt="login2" width="48%" style="display:none;" />
</div>

<script>
  let currentImage = 1;

  setInterval(function() {
    if (currentImage === 1) {
      document.getElementById('image1').style.display = 'none';
      document.getElementById('image2').style.display = 'block';
      currentImage = 2;
    } else {
      document.getElementById('image2').style.display = 'none';
      document.getElementById('image1').style.display = 'block';
      currentImage = 1;
    }
  }, 1000); // Alterar a cada 1 segundo (1000ms)
</script>

document.getElementById("file-upload").addEventListener("change", function(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("preview");
  const confirmBtn = document.getElementById("confirm-btn");

  preview.innerHTML = ""; // limpa antes

  if (file) {
    // se for imagem, mostra miniatura
    if (file.type.startsWith("image/")) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      preview.appendChild(img);
    } else {
      // se for outro tipo, mostra só o nome
      const fileName = document.createElement("p");
      fileName.textContent = "📄 " + file.name;
      preview.appendChild(fileName);
    }

    // mostra o botão "Tudo certo!"
    confirmBtn.style.display = "block";
  } else {
    confirmBtn.style.display = "none";
  }
});

document.getElementById("confirm-btn").addEventListener("click", function() {
  window.open("processamento.html");
});

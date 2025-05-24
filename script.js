
  function abrirWhatsapp(tipo) {
    const numero = "5575991217336";
    let mensagem = "";

    if (tipo === "orçamento") {
      mensagem = "Olá! Gostaria de solicitar um orçamento";
    } else if (tipo === "mensagem") {
      mensagem = "Olá! Gostaria de falar com vocês";
    }

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }


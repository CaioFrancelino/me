 {
    const telefoneInput = document.getElementById('phone');

telefoneInput.addEventListener('input', (event) => {
  let valor = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  valor = valor.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona (DD)
  valor = valor.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona -
  event.target.value = valor;
});
}
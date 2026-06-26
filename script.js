function calcularEconomia() {
    // Captura os valores digitados nos campos de input
    const gastoQuimico = parseFloat(document.getElementById('gasto-quimico').value);
    const gastoOrganico = parseFloat(document.getElementById('gasto-organico').value);

    // Validação simples para conferir se os campos foram preenchidos corretamente
    if (isNaN(gastoQuimico) || isNaN(gastoOrganico)) {
        alert("Por favor, preencha ambos os campos com valores válidos.");
        return;
    }

    // Lógica matemática
    const economiaMensal = gastoQuimico - gastoOrganico;
    const economiaAnual = economiaMensal * 12;

    // Elementos da página que vão exibir os resultados
    const resultadoDiv = document.getElementById('resultado');
    const txtMensal = document.getElementById('economia-mensal');
    const txtAnual = document.getElementById('economia-anual');
    const txtDica = document.getElementById('mensagem-dica');

    // Se a economia for positiva
    if (economiaMensal > 0) {
        txtMensal.innerText = `R$ ${economiaMensal.toFixed(2).replace('.', ',')}`;
        txtAnual.innerText = `R$ ${economiaAnual.toFixed(2).replace('.', ',')}`;
        txtDica.innerHTML = `<strong>Dica Sustentável:</strong> Excelente! Essa economia de R$ ${(gastoQuimico - gastoOrganico).toFixed(2).replace('.', ',')} por mês pode ser reinvestida em sementes crioulas, melhoria na irrigação ou na certificação orgânica da sua propriedade!`;
        
        txtMensal.className = "positivo";
        txtAnual.className = "positivo-destaque";
    } else if (economiaMensal === 0) {
        txtMensal.innerText = "R$ 0,00";
        txtAnual.innerText = "R$ 0,00";
        txtDica.innerHTML = "Os custos são equivalentes. No entanto, lembre-se que o uso de insumos orgânicos preserva os micro-organismos do solo e valoriza o preço final do seu produto!";
    } else {
        // Se o custo orgânico estiver maior (situação hipotética de transição)
        const prejuizoAbsoluto = Math.abs(economiaMensal);
        txtMensal.innerText = `- R$ ${prejuizoAbsoluto.toFixed(2).replace('.', ',')}`;
        txtAnual.innerText = `- R$ ${(prejuizoAbsoluto * 12).toFixed(2).replace('.', ',')}`;
        txtDica.innerHTML = "Atualmente o custo de transição está mais alto. Lembre-se que a longo prazo, o solo orgânico torna-se autossustentável e os gastos com defensivos externos despencam.";
    }

    // Mostra o bloco de resultado removendo a classe 'hidden'
    resultadoDiv.classList.remove('hidden');
}

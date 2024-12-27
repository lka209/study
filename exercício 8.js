function gerarCPF() {
    // Função para calcular os dois dígitos verificadores
    function calcularDigitoVerificador(cpfBase) {
        let soma = 0;
        let peso = cpfBase.length + 1;

        // Primeiro dígito verificador
        for (let i = 0; i < cpfBase.length; i++) {
            soma += parseInt(cpfBase[i]) * peso--;
        }
        let primeiroDigito = 11 - (soma % 11);
        if (primeiroDigito >= 10) primeiroDigito = 0;
        
        // Segundo dígito verificador
        soma = 0;
        peso = cpfBase.length + 2;
        for (let i = 0; i < cpfBase.length; i++) {
            soma += parseInt(cpfBase[i]) * peso--;
        }
        soma += primeiroDigito * 2;
        let segundoDigito = 11 - (soma % 11);
        if (segundoDigito >= 10) segundoDigito = 0;

        return primeiroDigito.toString() + segundoDigito.toString();
    }

    // Gera os 9 primeiros dígitos aleatórios
    let cpfBase = '';
    for (let i = 0; i < 9; i++) {
        cpfBase += Math.floor(Math.random() * 10).toString();
    }

    // Calcula os 2 dígitos verificadores
    let digitos = calcularDigitoVerificador(cpfBase);

    // Retorna o CPF no formato correto
    return cpfBase.slice(0, 3) + '.' + cpfBase.slice(3, 6) + '.' + cpfBase.slice(6, 9) + '-' + digitos;
}

// Exemplo de uso
console.log(gerarCPF());
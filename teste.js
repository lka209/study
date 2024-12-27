// Função para gerar um CPF aleatório válido
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

// Função para validar um CPF
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

// Gerar e validar o CPF
const cpfGerado = gerarCPF();
console.log("CPF Gerado: " + cpfGerado);

const cpf = new ValidaCPF(cpfGerado);

if (cpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inválido');
}

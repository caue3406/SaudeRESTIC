// Menu expansivo para dispositivos móveis
const menuIcon = document.getElementById('menu-icon');
const navUl = document.querySelector('nav ul'); // Seleciona a lista do menu

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active'); // Alterna a classe 'active' no menu
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (altura > 0 && peso > 0) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {// Menu expansivo para dispositivos móveis
            const menuIcon = document.getElementById('menu-icon');
            const nav = document.getElementById('nav');

            menuIcon.addEventListener('click', () => {
                nav.classList.toggle('active');
            });

            // Calculadora de IMC (mesmo script da página de IMC)
            const imcForm = document.getElementById('imcForm');
            if (imcForm) {
                imcForm.addEventListener('submit', function (event) {
                    event.preventDefault();

                    const peso = parseFloat(document.getElementById('peso').value);
                    const altura = parseFloat(document.getElementById('altura').value);

                    if (peso > 0 && altura > 0) {
                        const imc = peso / (altura * altura);
                        const resultado = document.getElementById('resultado');
                        resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`;

                        let classificacao = '';
                        if (imc < 18.5) {
                            classificacao = 'Abaixo do peso';
                        } else if (imc >= 18.5 && imc < 24.9) {
                            classificacao = 'Peso normal';
                        } else if (imc >= 25 && imc < 29.9) {
                            classificacao = 'Sobrepeso';
                        } else {
                            classificacao = 'Obesidade';
                        }

                        resultado.textContent += ` (${classificacao})`;
                    } else {
                        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
                    }
                });
            }

            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        document.getElementById('resultado').innerText = `Seu IMC é ${imc} (${classificacao})`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
    }
}
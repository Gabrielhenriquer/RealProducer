// Função para aplicar o tema salvo ao carregar a página
function aplicarTemaSalvo() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
        document.body.classList.add(temaSalvo); // Adiciona a classe do tema salvo
    }
}

// Função para alternar entre os temas e salvar a escolha do usuário
function alternarTema() {
    const corpo = document.body;
    corpo.classList.toggle('dark'); // Alternar o tema

    // Verificar qual tema está atualmente aplicado e salvar no armazenamento local
    const temaAtual = corpo.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('tema', temaAtual);
}

// Aplicar o tema salvo ao carregar a página
aplicarTemaSalvo();

// Adicione um ouvinte de evento para o clique no botão de alternar tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', alternarTema);
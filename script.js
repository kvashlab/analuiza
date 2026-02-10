// Função para alternar entre as abas de serviço
function switchTab(tabName) {
    // 1. Esconder todos os conteúdos
    const contents = document.querySelectorAll('.content-tab');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // 2. Remover classe ativa dos botões
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Mostrar o conteúdo selecionado
    const selectedContent = document.getElementById(tabName);
    selectedContent.style.display = 'block';

    // Pequeno timeout para permitir que o display:block renderize antes da animação CSS
    setTimeout(() => {
        selectedContent.classList.add('active');
    }, 10);

    // 4. Adicionar classe ativa no botão clicado (lógica baseada no modal tab switcher)
    // Precisamos achar o botão correto, mas como o onclick passa o ID, podemos usar event.target se chamado via clique
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Modal Logica
function openVakinhaModal() {
    const modal = document.getElementById('vakinhaModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Previne rolagem
}

function closeVakinhaModal() {
    const modal = document.getElementById('vakinhaModal');
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restaura rolagem
}

// Fechar modal ao clicar fora
document.getElementById('vakinhaModal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeVakinhaModal();
    }
});

// Animação de entrada ao carregar a página (Intersection Observer)
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
});
4️⃣ scripts.js – Conexão com o servidor
// Substitua pelo endereço do seu servidor Nginx
const SERVIDOR = 'http://localhost:80';

// Carrega vídeos do servidor via JSON
async function carregarVideos() {
    try {
        const res = await fetch(`${SERVIDOR}/videos.json`);
        const videos = await res.json();
        const container = document.querySelector('.videos');
        container.innerHTML = '';
        videos.forEach(v => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `<div class="thumbnail">${v.thumb}</div><div class="title">${v.title}</div>`;
            container.appendChild(card);
        });
    } catch (err) {
        console.error('Erro ao carregar vídeos:', err);
    }
}

// Função de upload de vídeo
async function enviarVideo(event) {
    event.preventDefault();
    const nome = document.getElementById('videoName').value;
    const file = document.getElementById('videoFile').files[0];
    const status = document.getElementById('uploadStatus');

    if (!file) {
        status.textContent = 'Selecione um arquivo!';
        return;
    }

    // Upload real (se seu servidor aceitar POST)
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('arquivo', file);

    try {
        const res = await fetch(`${SERVIDOR}/upload`, { method: 'POST', body: formData });
        if (res.ok) {
            status.textContent = 'Upload realizado com sucesso!';
        } else {
            status.textContent = 'Erro no upload.';
        }
    } catch (err) {
        status.textContent = 'Erro ao conectar com o servidor.';
        console.error(err);
    }
}

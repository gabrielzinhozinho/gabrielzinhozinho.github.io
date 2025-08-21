const apps = [
  {
    title: 'App 1',
    icon: 'icons/app1.png',
    url: 'https://exemplo.com/app1'
  },
  {
    title: 'App 2',
    icon: 'icons/app2.png',
    url: 'https://exemplo.com/app2'
  },
  // Adicione mais apps conforme precisar
];

function renderApps() {
  const container = document.getElementById('app-list');
  apps.forEach(app => {
    const div = document.createElement('div');
    div.className = 'app-item';
    const img = document.createElement('img');
    img.src = app.icon;
    img.alt = app.title;
    const span = document.createElement('span');
    span.textContent = app.title;
    div.appendChild(img);
    div.appendChild(span);
    div.onclick = () => window.location.href = app.url;
    container.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', renderApps);

document.addEventListener("DOMContentLoaded", function() {
    fetchUserData(); //função responsável por fazer a requisição à API do GitHub e manipular os dados recebidos
});

function fetchUserData() { //definição da função
    fetch('https://api.github.com/users/joicedev') // requisição GET para a URL da API do GitHub
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados'); 
            }
            return response.json();
        })
        .then(data => {
            // Preencher os dados do usuário
            document.querySelector('.profile-name').textContent = data.name || data.login;
            document.querySelector('.profile-username').textContent = '@' + data.login;
            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.getElementById('repoCount').textContent = data.public_repos;
            document.getElementById('followersCount').textContent = data.followers;
            document.getElementById('followingCount').textContent = data.following;
            
            const profileLink = document.querySelector('.profile-link');
            if (profileLink) {
                profileLink.href = data.html_url;
            }
        })
        .catch(error => {
            console.error('Erro de requisição:', error);
        });
}
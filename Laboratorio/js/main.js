// script.js

document.getElementById('get-answer').addEventListener('click', () => {
    const question = document.getElementById('question-input').value.trim();

    if (question === '') {
        alert('Por favor, introduce una pregunta.');
        return;
    }

    fetch('https://yesno.wtf/api')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            const img = new Image();
            img.src = data.image;

            img.onload = () => {
                document.getElementById('result-img').src = img.src;
                document.getElementById('answer').textContent = `Respuesta: ${data.answer.toUpperCase()}`;
            };
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('answer').textContent = 'Ocurrió un error. Inténtalo de nuevo más tarde.';
        });
});

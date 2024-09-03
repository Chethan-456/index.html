
function toggleFAQ(element) {
    const answer = element.querySelector('.faq-answer');
    const arrow = element.querySelector('.arrow');

    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    arrow.classList.toggle('rotate');
}

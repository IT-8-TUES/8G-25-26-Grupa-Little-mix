function toggleBio(btn) {
    const bio = btn.closest('.artist-card').querySelector('.artist-bio');
    const isOpen = bio.classList.contains('visible');
    bio.classList.toggle('visible', !isOpen);
    btn.classList.toggle('open', !isOpen);
    btn.textContent = isOpen ? '+' : '−';
}

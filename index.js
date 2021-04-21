const socialBtn = document.querySelector('.js-toggleSocial');

const toggleSocialIcons = () => {
    const socialsContent = document.querySelector(".js-socials");
    socialBtn.classList.toggle('btn--active');
    // if social div is visible
    if(!socialsContent.classList.contains('hidden')) {
        socialsContent.classList.add('fade-out');
        // Had to use one extra delayed timeout to prevent weird firefox animation stuttering
        setTimeout(() => {
            socialsContent.classList.remove('fade-out');
        }, 300)
        setTimeout(() => {
            socialsContent.classList.add('hidden');
        }, 280)
    } else {
        socialsContent.classList.remove('hidden');
    }
    
}

socialBtn.addEventListener('click', toggleSocialIcons);
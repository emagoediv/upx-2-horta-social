window.addEventListener('scroll', () => {
    if (userReachedBottom()) {
      console.log('Usuário chegou no fim da página');
      // Execute a ação desejada aqui
    }
  });
  function userReachedBottom() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.offsetHeight;
    return scrollPosition >= documentHeight;
  }
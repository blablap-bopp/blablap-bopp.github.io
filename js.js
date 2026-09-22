const botonTema = document.querySelector('.boton_tema');
const raiz = document.documentElement;

  function aplicarTema(tema) {
    if (tema === 'claro') {
      raiz.setAttribute('data-tema', 'claro');
      botonTema.textContent = '☀️';
    } else {
      raiz.removeAttribute('data-tema');
      botonTema.textContent = '🌙';
    }
  }

  botonTema.addEventListener('click', () => {
    const esClaro = raiz.getAttribute('data-tema') === 'claro';
    const nuevoTema = esClaro ? 'oscuro' : 'claro';
    aplicarTema(nuevoTema);
    localStorage.setItem('tema', nuevoTema);
  });

  const temaGuardado = localStorage.getItem('tema');
  aplicarTema(temaGuardado === 'claro' ? 'claro' : 'oscuro');

// scripts.js

function displayPostsBySection(section) {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = ''; // Limpiar el contenido actual de main
  
    if (typeof window.posts !== 'undefined') {
        if (!section) {
            section = 'inicio';
          }
        if (section === 'inicio' || section === 'acerca_de'){
            // Filtrar las publicaciones por la sección seleccionada
            const filteredPosts = window.posts.filter(post => post.section === section);
        
            // Mostrar las publicaciones filtradas en main
            filteredPosts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                <h2>${post.title}</h2>
                <center>${post.imagen}</center>
                <p>${post.content}</p>
                `;
                mainElement.appendChild(postElement);
            });
        } else if (section === 'ultimas_punlicaciones'){
            // Filtrar las publicaciones para excluir las secciones "inicio" y "acerca_de"
            const filteredPosts = window.posts.filter(post => post.section !== 'inicio' && post.section !== 'acerca_de');

            // Ordenar las publicaciones por fecha en orden descendente
            const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

            // Seleccionar los 20 últimos posts
            const last20Posts = sortedPosts.slice(0, 20);

            // Mostrar los 20 últimos posts en main
            last20Posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                <h2>${post.title}</h2>
                <center>${post.imagen}</center>
                <p>${post.content}</p>
                `;
                mainElement.appendChild(postElement);
            });
        } else {
            // Filtrar las publicaciones por la sección seleccionada
            const filteredPosts = window.posts.filter(post => post.section === section);
        
            // Mostrar las publicaciones filtradas en main
            filteredPosts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                <h2>${post.title}</h2>
                <center>${post.imagen}</center>
                <p>${post.content}</p>
                <p><small>Publicado el ${post.date} en la sección ${post.section}</small></p>
                `;
                mainElement.appendChild(postElement);
            });
        }

    } else {
      console.error('Error: No se pudo cargar la lista de publicaciones.');
    }
  }
  
  function init() {
    console.log('El DOM ha sido completamente cargado');
  
    // Ejemplo: Agregar una función para manejar el evento de clic en los enlaces del menú.
    const menuLinks = document.querySelectorAll('nav ul li a');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const section = this.dataset.section;
        console.log('Haz hecho clic en el enlace:', this.href, 'Sección:', section);
  
        // Llamar a la función displayPostsBySection() con la sección seleccionada
        displayPostsBySection(section);
      });
    });
  
    // Cargar las publicaciones de la sección "Inicio" por defecto al cargar la página
    displayPostsBySection('inicio');
  }
  
  // Comentar la siguiente línea
  document.addEventListener('DOMContentLoaded', init);
  
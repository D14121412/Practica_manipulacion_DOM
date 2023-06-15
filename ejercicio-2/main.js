const personajes = [
  {
    titulo: "Percy Jackson",
    descripcion:
      "El protagonista de la serie, es un semidiós hijo de Poseidón. Es valiente, leal y tiene un gran sentido del humor. Posee habilidades acuáticas y es conocido por su espada Riptide.",
    imagen:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeeSUrBDVKWWiUFcSoC8A90DGhBNQdzmWWLgXmvDecnjT_5vXx",
  },
  {
    titulo: "Jason Grace",
    descripcion:
      "Un semidiós hijo de Júpiter y líder de los semidioses romanos en la serie Héroes del Olimpo. Es valiente, justo y tiene poderes relacionados con el viento y los rayos. Porta la espada Ivlivs y puede volar.",
    imagen:
      "https://i.pinimg.com/originals/da/05/1f/da051f6d90500ec9fa074c3193521948.jpg",
  },
  {
    titulo: "Nico di Angelo",
    descripcion:
      "Un semidiós hijo de Hades y hermano de Bianca. Es reservado y solitario, pero valiente. Tiene habilidades relacionadas con la sombra y la muerte, y puede viajar por el mundo de los muertos.",
    imagen: "https://rickriordan.com/content/uploads/2016/04/NicoDiAngelo.jpg",
  },
  {
    titulo: "Will Solace",
    descripcion:
      "Un semidiós hijo de Apolo y médico del Campamento Mestizo. Es amable, extrovertido y tiene habilidades curativas. Usa un arco y flechas de sol para luchar y es conocido por su sentido del humor.",
    imagen:
      "https://i.pinimg.com/originals/ff/92/f8/ff92f812f867d8dbd76558d1e2cb9138.jpg",
  },
];

const container = document.getElementById("container");

container.innerHTML += personajes
  .map((personajes) => {
    return `
          <div class="card my-card d-flex" style="max-width: 18rem;">
              <img src="${personajes.imagen}" class="card-img-top my-img" alt="${personajes.titulo}">
              <div class="card-body ">
                  <h5>${personajes.titulo}</h5>
                  <p>${personajes.descripcion}</p>
              </div>
          </div>
      `;
  })
  .join("");

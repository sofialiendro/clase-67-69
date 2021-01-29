const productos = [
    {
      nombre: 'Zapato negro',
      tipo: 'zapato',
      color: 'negro',
      img: './img/taco-negro.jpg',
    },
    {
      nombre: 'Zapato azul',
      tipo: 'zapato',
      color: 'azul',
      img: './img/taco-azul.jpg',
    },
    {
      nombre: 'Bota negra',
      tipo: 'bota',
      color: 'negro',
      img: './img/bota-negra.jpg',
    },
    {
      nombre: 'Bota azul',
      tipo: 'bota',
      color: 'azul',
      img: './img/bota-azul.jpg',
    },
    {
      nombre: 'Zapato rojo',
      tipo: 'zapato',
      color: 'rojo',
      img: './img/zapato-rojo.jpg',
    },
  ];
  
  
  const form = document.forms[0];
  const listado = document.getElementById('lista-de-productos');
  
  
productos.forEach(zapato => {
    listado.innerHTML += `
    <div class="contenedorProducto">
    <div class="foto"><img src="${zapato.img}"></div>
    <div class="titulo">${zapato.nombre}</div>
    </div>
    `;
})

form.onsubmit = (e) => {
    e.preventDefault();
    validarDatos();
}

const filtro = document.querySelector("#filtro")
const selectTipo = document.querySelector("#tipo")
const selectColor = document.querySelector("#color")



const validarDatos = () => {
  console.log(filtro.value)

  const filtrarPorInput = (zapato) => {
    if (!filtro.value) {
      return zapato;
    }
    return filtro.value === zapato.tipo || filtro.value === zapato.color
  }
  
  const filtrarPorSelect = zapato => {
    if (selectTipo.value && selectColor.value) {
      return (
        selectTipo.value === zapato.tipo && selectColor.value === zapato.color
      )
    } else if (selectTipo.value) {
      return selectTipo.value === zapato.tipo
    } else if (selectColor.value) {
      return selectColor.value === zapato.color
    } else {
      return zapato
    }
  }
  
  const zapatosFiltrados = productos
    .filter(filtrarPorInput)
    .filter(filtrarPorSelect)

  listado.innerHTML = ""

  zapatosFiltrados.forEach((zapato) => {
    listado.innerHTML += `
    <div class="contenedorProducto">
    <div class="foto"><img src="${zapato.img}"></div>
    <div class="titulo">${zapato.nombre}"></div>
    </div>
    `
  })
}   



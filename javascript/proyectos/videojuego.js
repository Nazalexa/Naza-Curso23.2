// Clase base para todos los personajes
class Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, clase) {
    this.nombre = nombre;
    this.vida = vida;
    this.daño = daño;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.clase = clase;
    this.vivo = true;
}
  // Método que sobreescribira la presentación de todos. 
saludo () {
console.log(`¡Soy ${this.nombre}, el increible ${this.clase} de todo Valhalla!`)
}
 // Método para atacar con los puños
atacar() {
  return Math.floor(Math.random() * this.daño + 1);
}
// Método para calcular el daño recibido y la defensa del personaje.
dañoRecibido(daño) {  
  this.vida -= daño;
    console.log(`${this.nombre} ha recibido un daño de ${daño}. Vida restante: ${this.vida}`);
  if (this.vida <= 0) {
    this.vivo = false;
    console.log(`${this.nombre} ha caído en batalla, que Odin lo reciba.`);
    }
  }   

defensor() {
return Math.floor(Math.random() * this.defensa) + 1;
}
// 1/10 de probabilidad de tropezar
puedeAtacar() {
  if (Math.floor(Math.random() * 10) === 0) {
    console.log(`${this.nombre} se tropezó y no puede atacar esta ronda!`);
    return false;
  }
    return this.vivo;
  }
}

//Clase guerrero que hereda de Personajes

class Guerrero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, clase) {
    super(nombre, vida, daño, defensa, velocidad, clase);
    this.armas = this.guerrero_armas(); // Inicializa las armas del guerrero.
    this.vidaMaxima = vida;
    this.habilidadEspecial = "Furia de Valhalla"; // Habilidad especial del guerrero. 
  }

saludo() {
  console.log(`¡Soy ${this.nombre}, el más poderoso ${this.clase} de todo Valhalla!`);
  }

  // Método para definir las armas del guerrero
guerrero_armas() {
  return [
    {nombre: "Martillo", daño: 200},
      {nombre: "Hacha", daño: 400},
      {nombre: "Labris", daño: 1000},
      {nombre: "Furia de Valhalla", daño: 1500} // Habilidad especial del guerrero.
  ]
}
  // Método para atacar con las armas del guerrero
  // Si no tiene armas, ataca con daño base.
atacar_con_armas() {
  if (this.armas.length > 0) {
    const armas = this.armas[Math.floor(Math.random() * this.armas.length)];
    console.log(`${this.nombre} ha usado su ${armas.nombre} (Daño: ${armas.daño})`);
    return this.atacar() + armas.daño; // Daño del arma.
  } else {
      console.log(`${this.nombre} Odin lo ha despojado de sus armas`);
      return this.atacar(); // Si no tiene armas, ataca con daño base.
  }
}
}

// Clase Arquero que hereda de Personajes

class Arquero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, clase) {
    super(nombre, vida, daño, defensa, velocidad, clase);
    this.flechas = this.arquero_flechas(); // Inicializa las flechas del arquero.
    this.vidaMaxima = vida;
    this.habilidadEspecial = "Disparo Certero"; // Habilidad especial del arquero.  
  }
saludo(){
  console.log(`¡Soy ${this.nombre}, el más preciso ${this.clase} de todo Valhalla!`);

  }  
// Método para definir las flechas del arquero
arquero_flechas() {
  return [
    {nombre: "Gandalf", daño: 150},
    {nombre: "Brea", daño: 250},
    {nombre: "Valquiria", daño: 400},
    {nombre: "Disparo Certero", daño: 800} // Habilidad especial del arquero.
  ]
}
  // Método para atacar con las flechas del arquero
  // Si no tiene flechas, ataca con daño base.
  disparar() {
    if (this.flechas.length > 0) {
      const flechas = this.flechas[Math.floor(Math.random() * this.flechas.length)];
      console.log(`${this.nombre} ha usado su ${flechas.nombre} (Daño: ${flechas.daño})`);
      return this.atacar() + flechas.daño; // Daño de la flecha. 
    } else {
      console.log(`${this.nombre} Odin lo ha despojado de sus flechas`);
      return this.atacar(); // Si no tiene flechas, ataca con daño base.
    }
  }
}
// Clase Mago que hereda de Personajes
class Mago extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, clase) {
    super(nombre, vida, daño, defensa, velocidad, clase);
    this.hechizos = this.mago_hechizos(); // Inicializa los hechizos del mago.
    this.vidaMaxima = vida;
  }  
// Método para definir los hechizos del mago
  mago_hechizos() {
    return [
      {nombre: "Isa", daño: 400},
      {nombre: "Laguz", daño: 600},
      {nombre: "Dagaz", daño: 1200},
      {nombre: "Fuego de Valhalla", daño: 2000} // Habilidad especial del mago. 
    ];
  }
saludo(){
  console.log(`¡Soy ${this.nombre}, el más sabio ${this.clase} de todo Valhalla!`);
  }
  // Método para atacar con los hechizos del mago
  // Si no tiene hechizos, ataca con daño base.
atacar_con_hechizos() {
  if (this.hechizos.length > 0) {
    const hechizos = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    console.log(`${this.nombre} ha usado su ${hechizos.nombre} (Daño: ${hechizos.daño})`);
    return this.atacar() + hechizos.daño; // Daño del hechizo.
  } else {
      console.log(`${this.nombre} Odin lo ha despojado de sus hechizos`);
      return this.atacar(); // Si no tiene hechizos, ataca con daño base.
  }
}
}

// Clase Vampiro (recuperacion opcional)
class Vampiro extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, clase) {
    super(nombre, vida, daño, defensa, velocidad, clase);
    this.recuperacionMin = 0.15; // Porcentaje mínimo de vida recuperada al recibir daño.
    this.recuperacionMax = 0.30; // Porcentaje máximo de vida recuperada al recibir daño.
    this.habilidadCuracion = "Te he sanado, mi querido amigo";
  }

  saludo() {
    console.log(`¡Soy ${this.nombre}, el más misterioso ${this.clase} de todo Valhalla!`);
  }

  sanaAmigo(amigo) {
    if (!this.vivo) {
      console.log(`${this.nombre} no puede curar porque está muerto, que Odin lo ha reclamado.`);
      return false;
    }
    if (!amigo.vivo) {
      console.log(`${amigo.nombre} está muerto, Odin lo ha reclamado. No puede ser curado.`);
      return false;
    }
    const vidaMaxima = amigo.vidaMaxima; // Valor constante para la vida máxima
    if (amigo.vida >= amigo.vidaMaxima) {
      console.log(`${amigo.nombre} ya tiene toda su vida.`);
      return false;
    }

    const porcentajeCuracion = Math.random() * (this.recuperacionMax - this.recuperacionMin) + this.recuperacionMin;
    const vidaRecuperada = Math.round(vidaMaxima * porcentajeCuracion);
    amigo.vida = Math.min(amigo.vida + vidaRecuperada, vidaMaxima);
    console.log(`${this.nombre} usa ${this.habilidadCuracion} en ${amigo.nombre} y recupera ${vidaRecuperada} puntos de vida (${Math.round(porcentajeCuracion * 100)}% de su vida).`);
    return true;
  }

deberiaCura() {
  return Math.floor(Math.random() * 6) === 0; // Probabilidad 1/6
}
curarAmigoAleatorio(personajes) {
  if (this.deberiaCura() && this.vivo) {
    const amigosVivos = personajes.filter(p => p !== this && p.vivo);
    if (amigosVivos.length > 0) {
      const amigos = amigosVivos[Math.floor(Math.random() * amigosVivos.length)];
        return this.sanaAmigo(amigos);
    }
  }
  return false;
}
  
atacar() {
  console.log(`${this.nombre} es un vampiro pacífico y no ataca a otros.`);
  return 0;
}
}
//Lista de personajes. 
const personajes = [
  new Guerrero("Olaf", 1500, 900, 750, 7, "guerrero"),
  new Guerrero("Erik", 1000, 700, 550, 3, "guerrero"),
  new Arquero("Laif", 1200, 800, 700, 8, "arquero"),
  new Arquero("Ivar", 1400, 970, 900, 10, "arquero"),
  new Mago("Loki", 2000, 1300, 1000, 5, "mago"),
  new Mago("Freya", 1800, 1200, 900, 6, "mago"),
  new Vampiro("Lestat", 0, 0, 0, 0, "vampiro")
];

// Función para iniciar el juego y saludar a los personajes
function iniciarJuego() {
  console.log("¡Bienvenido a Valhalla!");
  personajes.forEach(personaje => personaje.saludo()); // Cada personaje saluda.
  console.log("Los guerreros están listos para la batalla.");
}

// Función para ejecutar una ronda de ataques
function ejecutarRonda(personajes, ronda) {
console.log(`\n=== RONDA ${ronda} ===`);

// Determinar el orden de ataque basado en la velocidad
const ordenAtaque = personajes
  .filter(p => p.vivo) // Solo personajes vivos
  .map(p => ({
    personaje: p, // Guarda la referencia al personaje.
    tirada: Math.floor(Math.random() * p.velocidad) + 1
  }))
  .sort((a, b) => b.tirada - a.tirada); // Ordenar de mayor a menor

  // El vampiro puede intentar curar antes de los ataques
personajes.forEach(p => {
  if (p.clase === "vampiro") {
    p.curarAmigoAleatorio(personajes);
  }
}); 
// Cada personaje ataca
ordenAtaque.forEach(({ personaje }) => {
  if (!personaje.puedeAtacar()) return;
// Elegir un objetivo aleatorio
  const posiblesObjetivos = personajes.filter(p => p !== personaje && p.vivo);
  if (posiblesObjetivos.length === 0) return;  
  const objetivo = posiblesObjetivos[Math.floor(Math.random() * posiblesObjetivos.length)];
  let daño;  
  if (Math.random() < 0.33) { // Ataque con puños
    daño = personaje.atacar();
    console.log(`${personaje.nombre} ataca a ${objetivo.nombre} con puños (${daño} de daño)`);
  } else { // Ataque especial
    switch(personaje.clase) {
      case "guerrero":
        daño = personaje.atacar_con_armas();
        break;
      case "arquero":
        daño = personaje.disparar();
        break;
      case "mago":
        daño = personaje.atacar_con_hechizos();
        break;
      default:
        daño = personaje.atacar();
  }
}
if (objetivo.defensor() <= daño) {
    objetivo.dañoRecibido(daño);
    console.log(`¡Ataque exitoso! ${objetivo.nombre} ahora tiene ${objetivo.vida} de vida.`);
  } else {
    console.log(`¡Ataque fallido! ${objetivo.nombre} se defendió.`);
  }

    if (!objetivo.vivo) {
      console.log(`${objetivo.nombre} ha muerto y no puede atacar más.`);
    }
  });
}
// Inicializar el juego
function jugar(){
iniciarJuego();
let ronda = 1;
while (personajes.filter(p => p.vivo).length > 1) {
  ejecutarRonda(personajes,ronda);
  ronda++;
}
// Anunciar el ganador
const ganador = personajes.find(p => p.vivo);
console.log(`\nEl ganador es ${ganador.nombre} con ${ganador.vida} de vida restante.`);
}

jugar();
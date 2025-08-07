const tareas = {
  ingles: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: Traduce 10 oraciones del presente simple al pasado simple.`),
  espanol: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: Escribe un resumen de un cuento literario.`),
  matematicas: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: Resuelve 5 ecuaciones de primer grado.`),
  ciencias: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: Explica el ciclo del agua con un dibujo.`),
  sociales: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: Investiga la independencia de Colombia.`),
  tecnologia: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: Describe cómo funciona una computadora.`),
  etica: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: ¿Qué valores deben practicarse en la escuela?`),
  religion: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: Resume los 10 mandamientos.`),
  educacion_fisica: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: Explica los beneficios del ejercicio.`),
  artistica: Array.from({ length: 20 }, (_, i) => `Tarea ${i + 1}: Dibuja una obra usando solo líneas y colores.`)
};

function mostrarMateria(materia) {
  const contenedor = document.getElementById("contenido");
  const lista = tareas[materia].map(t => `<div class="task">${t}</div>`).join("");
  contenedor.innerHTML = `<h2>${materia.replace("_", " ").toUpperCase()}</h2>${lista}`;
}
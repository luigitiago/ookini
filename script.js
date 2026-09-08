// Reserva de tazas ---------------------------------------------------------
function puedeReservar(tazasDisponibles) {
  return tazasDisponibles > 0;
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");
const reservasNota = document.querySelector("#reservas-nota");

botonReservar.addEventListener("click", function () {
  const tazasActuales = Number(contadorTazas.textContent);

  if (puedeReservar(tazasActuales)) {
    const restantes = tazasActuales - 1;
    contadorTazas.textContent = restantes;
    if (reservasNota) {
      reservasNota.textContent =
        restantes > 0
          ? "¡Taza reservada! Quedan " + restantes + " disponibles."
          : "Has reservado la última taza de hoy.";
    }
  }

  if (Number(contadorTazas.textContent) <= 0) {
    botonReservar.textContent = "Sin cupos";
    botonReservar.disabled = true;
    if (reservasNota) reservasNota.textContent = "No hay disponibilidad para hoy.";
  }
});

// Año dinámico en el footer -------------------------------------------------
const anio = document.querySelector("#anio");
if (anio) anio.textContent = new Date().getFullYear();

// Animación reveal al hacer scroll -----------------------------------------
const elementosReveal = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && elementosReveal.length) {
  const observador = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elementosReveal.forEach(function (el) {
    observador.observe(el);
  });
} else {
  elementosReveal.forEach(function (el) {
    el.classList.add("is-visible");
  });
}

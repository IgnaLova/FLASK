document.addEventListener("DOMContentLoaded",() => {
    const personaList= document.getElementById("persona-list")
});

function cargarPersonas() {
    fetch("/personas",{
        method: "GET",
        headers:{
            "Content-Type":"application/jason",

        },
    })
    .then(response => response.jason())
    .then (data => {
        personaList.innerHTML = "";

        data.forEach(persona => {
            const personaDiv = document.createElement("div");
             personaDiv.innerHTML = `
             <strong>Nombre:</strong> ${persona.nombre} <br>
             <strong>Apellido:</strong> ${persona.apellido} <br>
             <strong>Edad:</strong> ${persona.edad} <br>
             <strong>Email:</strong> ${persona.email} <br>
             <strong>Dni:</strong> ${persona.dni} <br>
             `;
             personaList.appendChild(personaDiv);
        });
    });
}

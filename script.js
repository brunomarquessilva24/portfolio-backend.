
const db = {
    cursos: [
        { nome: "Node.js", horas: "40h" },
        { nome: "React", horas: "30h" },
        { nome: "JavaScript", horas: "50h" }
    ],

    certificados: [
        { titulo: "Full Stack", ano: 2025 },
        { titulo: "Scrum Master", ano: 2026 }
    ]
};

// Seleciona as listas do HTML
const listaCursos = document.getElementById("listaCursos");
const listaCertificados = document.getElementById("listaCertificados");

// Exibe os cursos
db.cursos.forEach(curso => {
    const li = document.createElement("li");

    li.textContent = `${curso.nome} - ${curso.horas}`;

    listaCursos.appendChild(li);
});

// Exibe os certificados
db.certificados.forEach(certificado => {
    const li = document.createElement("li");

    li.textContent = `${certificado.titulo} (${certificado.ano})`;

    listaCertificados.appendChild(li);
});


const ctx = document.getElementById("graficoBarras").getContext("2d");
const grafico = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        datasets: [{
            label: "% Dígitos",
            data: [12, 9, 14, 10, 8, 7, 11, 13, 9, 7],
            backgroundColor: function(context) {
                const value = context.dataset.data[context.dataIndex];
                return value > 10 ? "white" : "red";
            }
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

document.getElementById("play").onclick = () => {
    document.getElementById("notificacoes").innerText = "▶ Estratégia iniciada";
};
document.getElementById("stop").onclick = () => {
    document.getElementById("notificacoes").innerText = "⏹ Estratégia parada";
};
document.getElementById("configurar").onclick = () => {
    alert("Configuração aberta (exemplo)");
};

const ctx = document.getElementById("evokedPotentialChart").getContext("2d");
const evokedPotentialChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // tempo em ms (exemplo)
    datasets: [
      {
        label: "Potencial Evocado (μV)",
        data: [0, 0.2, 0.5, 0.9, 0.7, 0.4, 0.2, 0.1, 0, 0],
        borderColor: "rgba(0, 74, 173, 1)",
        backgroundColor: "rgba(0, 74, 173, 0.1)",
        fill: true,
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Tempo (ms)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amplitude (μV)",
        },
      },
    },
  },
});

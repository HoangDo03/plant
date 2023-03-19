new Chart(document.getElementById("x-chart"), {
    type: 'pie',
    data: {
      labels: ["Indoor" , "Outdoor"],
      datasets: [{
        label: "Unit(products)",
        backgroundColor: ["#ffdecd", "#424530"],
        data: [15,29]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Business Statistic'
      }
    }
});
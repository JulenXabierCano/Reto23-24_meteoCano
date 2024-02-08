function crearGrafico(fechas, ciudad) {
    const xValues = ["00:00h", "03:00h", "06:00h", "09:00h", "12:00h", "15:00h", "18:00h", "21:00h"];

    fetch(`http://${direccionIP}:8082/api/getHistorico?fechas=${fechas}&ciudad=${ciudad}`)
        .then((response) => { return response.json() })
        .then((data) => {
            const temperaturasArray = data.map(item => parseFloat(item.temperaturas));
            new Chart("grafico", {
                type: "line",
                data: {
                    labels: xValues,
                    datasets: [{
                        data: temperaturasArray,
                        borderColor: "red",
                        fill: false
                    }]
                },
                options: {
                    legend: { display: false }
                }
            });
        })
}
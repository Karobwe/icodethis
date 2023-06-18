const ctx = document.querySelector("#chart");

const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };

  const DATA_COUNT = 7;

const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "United States",
            data: [95000, 30000, 115000, 60000, 80000, 110000],
            backgroundColor: CHART_COLORS.blue,
        },
        {
            label: "Canada",
            data: [50000, 75000, 25000, 5000, 10000, 10000],
            backgroundColor: CHART_COLORS.red,
        },
        {
            label: "Australia",
            data: [30000, 10000, 5000, 15000, 25000, 10000],
            backgroundColor: CHART_COLORS.green,
        },
        {
            label: "China",
            data: [5000, 25000, 20000, 10000, 5000, 15000],
            backgroundColor: CHART_COLORS.orange,
        },
    ],
};

const config = {
    type: "bar",
    data: data,
    options: {
        responsive: true,
        aspectRatio: 1,
        maintainAspectRatio: true,
        barThickness: 10,
        borderRadius: 10,
        plugins: {
            title: {
                display: false,
                position: "bottom",
                text: "iCodeThis Stacked Bar Chart challenge",
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    padding: 20,
                    usePointStyle: false,
                    pointStyle: "rectRounded",
                    pointStyleWidth: null,
                    useBorderRadius: true,
                    borderRadius: 6,
                }
            },
        },
        scales: {
            x: {
                stacked: true,
                display: true,
                color: 'rgb(255,45,196',
            },
            y: {
                stacked: true,
                display: false,
            },
        },
        layout: {
            padding: 20
        },
    },
};

new Chart(ctx, config);

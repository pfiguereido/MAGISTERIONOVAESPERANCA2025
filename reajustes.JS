document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de evolução do piso vs inflação
    const evolucaoCtx = document.getElementById('evolucaoChart').getContext('2d');
    new Chart(evolucaoCtx, {
        type: 'line',
        data: {
            labels: evolucaoPiso.map(item => item.ano),
            datasets: [
                {
                    label: 'Piso Nacional',
                    data: evolucaoPiso.map(item => item.piso),
                    backgroundColor: CORES.professores,
                    borderColor: CORES.professores,
                    borderWidth: 3,
                    tension: 0.1
                },
                {
                    label: 'Correção pela Inflação',
                    data: evolucaoPiso.map(item => item.inflacao),
                    backgroundColor: CORES.inflacao,
                    borderColor: CORES.inflacao,
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return formatarReais(value);
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${formatarReais(value)}`;
                        }
                    }
                }
            }
        }
    });
    
    // Gráfico de reajustes acumulados
    const reajustesCtx = document.getElementById('reajustesChart').getContext('2d');
    new Chart(reajustesCtx, {
        type: 'bar',
        data: {
            labels: reajustesAcumulados.map(item => item.tipo),
            datasets: [{
                data: reajustesAcumulados.map(item => item.percentual),
                backgroundColor: reajustesAcumulados.map(item => item.cor),
                borderColor: reajustesAcumulados.map(item => item.cor),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw || 0;
                            return `Reajuste acumulado: ${formatarPercentual(value)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: function(value) {
                            return `${value}%`;
                        }
                    }
                }
            }
        }
    });
});
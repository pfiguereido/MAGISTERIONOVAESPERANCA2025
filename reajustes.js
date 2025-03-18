document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o elemento evolucaoChart existe
    const evolucaoCtx = document.getElementById('evolucaoChart');
    
    if (evolucaoCtx) {
        // Gráfico de evolução do piso vs inflação
        new Chart(evolucaoCtx.getContext('2d'), {
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
    } else {
        console.error('Elemento evolucaoChart não encontrado');
    }
    
    // Verifica se o elemento reajustesChart existe
    const reajustesCtx = document.getElementById('reajustesChart');
    
    if (reajustesCtx) {
        // Gráfico de reajustes acumulados
        new Chart(reajustesCtx.getContext('2d'), {
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
    } else {
        console.error('Elemento reajustesChart não encontrado');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o elemento salarioChart existe
    const salarioCtx = document.getElementById('salarioChart');
    
    if (salarioCtx) {
        // Gráfico de médias salariais
        new Chart(salarioCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: mediaSalarial.map(item => item.categoria),
                datasets: [
                    {
                        label: 'Salário Base',
                        data: mediaSalarial.map(item => item.salarioBase),
                        backgroundColor: CORES.professores,
                        borderColor: CORES.professores,
                        borderWidth: 1
                    },
                    {
                        label: 'Com Vantagens',
                        data: mediaSalarial.map(item => item.comVantagens),
                        backgroundColor: '#10b981',
                        borderColor: '#10b981',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
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
        console.error('Elemento salarioChart não encontrado');
    }
});
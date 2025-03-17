document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de distribuição de servidores
    const servidoresCtx = document.getElementById('servidoresChart').getContext('2d');
    new Chart(servidoresCtx, {
        type: 'pie',
        data: {
            labels: distribuicaoServidores.map(item => item.nome),
            datasets: [{
                data: distribuicaoServidores.map(item => item.percentual),
                backgroundColor: distribuicaoServidores.map(item => item.cor),
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value.toFixed(2)}%`;
                        }
                    }
                }
            }
        }
    });
    
    // Gráfico de distribuição da folha de pagamento
    const folhaCtx = document.getElementById('folhaChart').getContext('2d');
    new Chart(folhaCtx, {
        type: 'pie',
        data: {
            labels: distribuicaoFolha.map(item => item.nome),
            datasets: [{
                data: distribuicaoFolha.map(item => item.percentual),
                backgroundColor: distribuicaoFolha.map(item => item.cor),
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value.toFixed(2)}%`;
                        }
                    }
                }
            }
        }
    });
});
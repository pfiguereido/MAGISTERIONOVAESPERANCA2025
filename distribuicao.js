document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o elemento servidoresChart existe
    const servidoresCtx = document.getElementById('servidoresChart');
    
    if (servidoresCtx) {
        // Gráfico de distribuição de servidores
        new Chart(servidoresCtx.getContext('2d'), {
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
    } else {
        console.error('Elemento servidoresChart não encontrado');
    }
    
    // Verifica se o elemento folhaChart existe
    const folhaCtx = document.getElementById('folhaChart');
    
    if (folhaCtx) {
        // Gráfico de distribuição da folha de pagamento
        new Chart(folhaCtx.getContext('2d'), {
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
    } else {
        console.error('Elemento folhaChart não encontrado');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o elemento fundebChart existe
    const fundebCtx = document.getElementById('fundebChart');
    
    if (fundebCtx) {
        // Gráfico do FUNDEB
        new Chart(fundebCtx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: usoFundeb.map(item => item.nome),
                datasets: [{
                    data: usoFundeb.map(item => item.percentual),
                    backgroundColor: usoFundeb.map(item => item.cor),
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
                                const item = usoFundeb[context.dataIndex];
                                return `${label}: ${formatarPercentual(value)} (${formatarReais(item.valor)})`;
                            }
                        }
                    }
                }
            }
        });
    } else {
        console.error('Elemento fundebChart não encontrado');
    }
});
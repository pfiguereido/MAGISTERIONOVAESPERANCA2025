document.addEventListener('DOMContentLoaded', function() {
    // Gráfico do FUNDEB
    const fundebCtx = document.getElementById('fundebChart').getContext('2d');
    new Chart(fundebCtx, {
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
});
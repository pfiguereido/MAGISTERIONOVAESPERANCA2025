// Formatadores de valores
function formatarReais(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

function formatarPercentual(valor) {
    return `${valor.toFixed(2)}%`;
}

// Cores padrão
const CORES = {
    professores: '#2563eb',
    demaisServidores: '#94a3b8',
    minimoFundeb: '#16a34a',
    excedenteAplicado: '#dc2626',
    restanteInvestimentos: '#94a3b8',
    salarioMinimo: '#f59e0b',
    inflacao: '#94a3b8'
};

// Dados para Distribuição de Servidores
const distribuicaoServidores = [
    { nome: 'Professores', quantidade: 177, percentual: 22.75, cor: CORES.professores },
    { nome: 'Demais Servidores', quantidade: 601, percentual: 77.25, cor: CORES.demaisServidores }
];

// Dados para Distribuição da Folha
const distribuicaoFolha = [
    { nome: 'Professores', valor: 949667.57, percentual: 42.06, cor: CORES.professores },
    { nome: 'Demais Servidores', valor: 1308432.89, percentual: 57.94, cor: CORES.demaisServidores }
];

// Dados para Comparativo de Médias Salariais
const mediaSalarial = [
    { categoria: 'Professores', salarioBase: 5365.35, comVantagens: 6794.33 },
    { categoria: 'Demais Servidores', salarioBase: 2177.09, comVantagens: 3877.74 }
];

// Dados para Uso do FUNDEB
const usoFundeb = [
    { 
        nome: 'Mínimo Legal (70%)', 
        valor: 14057635.06, 
        percentual: 70,
        cor: CORES.minimoFundeb 
    },
    { 
        nome: 'Excedente Aplicado em Folha', 
        valor: 4512393.84, 
        percentual: 22.47,
        cor: CORES.excedenteAplicado 
    },
    { 
        nome: 'Restante para Investimentos', 
        valor: 1414850.32, 
        percentual: 7.53,
        cor: CORES.restanteInvestimentos 
    }
];

// Dados para Evolução do Piso vs Inflação
const evolucaoPiso = [
    {ano: 2009, piso: 950.00, inflacao: 950.00},
    {ano: 2010, piso: 1024.67, inflacao: 1011.47},
    {ano: 2011, piso: 1187.14, inflacao: 1072.97},
    {ano: 2012, piso: 1451.00, inflacao: 1139.49},
    {ano: 2013, piso: 1567.00, inflacao: 1202.83},
    {ano: 2014, piso: 1697.39, inflacao: 1277.76},
    {ano: 2015, piso: 1917.78, inflacao: 1421.90},
    {ano: 2016, piso: 2135.64, inflacao: 1515.46},
    {ano: 2017, piso: 2298.80, inflacao: 1546.83},
    {ano: 2018, piso: 2455.35, inflacao: 1599.92},
    {ano: 2019, piso: 2557.74, inflacao: 1671.60},
    {ano: 2020, piso: 2886.24, inflacao: 1762.70},
    {ano: 2021, piso: 2886.24, inflacao: 1941.75},
    {ano: 2022, piso: 3845.63, inflacao: 2057.00},
    {ano: 2023, piso: 4420.55, inflacao: 2133.31},
    {ano: 2024, piso: 4580.57, inflacao: 2235.18},
    {ano: 2025, piso: 4867.77, inflacao: 2235.18}
];

// Dados para Reajustes Acumulados
const reajustesAcumulados = [
    { tipo: 'Piso do Magistério (2009-2025)', percentual: 412.40, cor: CORES.professores },
    { tipo: 'Salário Mínimo (2009-2025)', percentual: 224.52, cor: CORES.salarioMinimo },
    { tipo: 'Inflação Acumulada (2009-2024)', percentual: 144.93, cor: CORES.inflacao }
];
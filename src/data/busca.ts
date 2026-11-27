export interface ItemBusca {
  titulo: string;
  categoria: 'Skills' | 'Projetos' | 'Eventos';
  keywords: string[];
  rota: string;
}

export const itensBusca: ItemBusca[] = [

  {
    titulo: 'CLIC — Dicionário Colaborativo de Libras',
    categoria: 'Projetos',
    keywords: ['clic', 'java', 'spring boot', 'vue', 'postgresql', 'google cloud', 'libras', 'fullstack'],
    rota: '/programacao',
  },
  {
    titulo: 'IFSearch — App de Pesquisa Offline',
    categoria: 'Projetos',
    keywords: ['ifsearch', 'flutter', 'dart', 'sqlite', 'supabase', 'google sheets', 'mobile', 'offline'],
    rota: '/programacao',
  },
  {
    titulo: 'FastBuy — Gestão de Estoque e Vendas',
    categoria: 'Projetos',
    keywords: ['fastbuy', 'flutter', 'dart', 'mobile', 'pdv', 'estoque'],
    rota: '/programacao',
  },
  {
    titulo: 'CAPI — Plataforma de Sustentabilidade',
    categoria: 'Projetos',
    keywords: ['capi', 'typescript', 'web', 'api', 'rest', 'sustentabilidade', 'ux'],
    rota: '/programacao',
  },
  {
    titulo: 'Cidadela — Catálogo Rick and Morty',
    categoria: 'Projetos',
    keywords: ['cidadela', 'java', 'spring boot', 'postgresql', 'api', 'render', 'rick and morty'],
    rota: '/programacao',
  },
  {
    titulo: 'My-Compiler — Compilador em C++',
    categoria: 'Projetos',
    keywords: ['compilador', 'c++', 'cpp', 'flex', 'bison', 'ast', 'sistemas'],
    rota: '/programacao',
  },
  {
    titulo: 'Condado — Sistema de Livraria em Java',
    categoria: 'Projetos',
    keywords: ['condado', 'java', 'poo', 'backend', 'livraria'],
    rota: '/programacao',
  },
  {
    titulo: 'Pavlov’s Cat — Alimentador IoT',
    categoria: 'Projetos',
    keywords: ['pavlov', 'iot', 'esp8266', 'esp32', 'c++', 'telegram', 'hardware'],
    rota: '/programacao',
  },
  {
    titulo: 'Beartales — Jogo 2D Sokoban',
    categoria: 'Projetos',
    keywords: ['beartales', 'python', 'pygame', 'jogo', 'game', '2d'],
    rota: '/programacao',
  },


  {
    titulo: 'Previsão de Preços de Veículos',
    categoria: 'Projetos',
    keywords: ['python', 'scikit-learn', 'pandas', 'django', 'render', 'machine learning', 'ia', 'carros'],
    rota: '/dados',
  },
  {
    titulo: 'Portal de Egressos — Projeto Inova IFCE',
    categoria: 'Projetos',
    keywords: ['inova', 'egressos', 'tableau', 'rais', 'ibge', 'etl', 'bi', 'dados'],
    rota: '/dados',
  },
  {
    titulo: 'Chega+ — Predição de Churn com IA',
    categoria: 'Projetos',
    keywords: ['chega+', 'churn', 'python', 'ia', 'ml', 'pagbank', 'hackathon'],
    rota: '/dados',
  },
  {
    titulo: 'Festival de Gastronomia de Aracati (2024–2026)',
    categoria: 'Projetos',
    keywords: ['festival', 'aracati', 'gastronomia', 'tableau', 'dados', 'bi', 'pesquisa'],
    rota: '/dados',
  },

  // ========================
  // SKILLS / TECNOLOGIAS
  // ========================
  {
    titulo: 'Java & Spring Boot',
    categoria: 'Skills',
    keywords: ['java', 'spring', 'spring boot', 'backend', 'api', 'microservicos'],
    rota: '/programacao',
  },
  {
    titulo: 'Vue.js, TypeScript & Tailwind CSS',
    categoria: 'Skills',
    keywords: ['vue', 'vuejs', 'typescript', 'ts', 'javascript', 'js', 'tailwind', 'frontend', 'html', 'css'],
    rota: '/programacao',
  },
  {
    titulo: 'Flutter & Dart (Mobile)',
    categoria: 'Skills',
    keywords: ['flutter', 'dart', 'mobile', 'android', 'app', 'sqlite'],
    rota: '/programacao',
  },
  {
    titulo: 'Python, Machine Learning & BI',
    categoria: 'Skills',
    keywords: ['python', 'scikit-learn', 'pandas', 'django', 'tableau', 'power bi', 'ia', 'ml', 'dados'],
    rota: '/dados',
  },
  {
    titulo: 'Banco de Dados (PostgreSQL, SQL, Supabase)',
    categoria: 'Skills',
    keywords: ['sql', 'postgresql', 'mysql', 'supabase', 'sqlite', 'banco de dados'],
    rota: '/programacao',
  },
  {
    titulo: 'C++ & Sistemas',
    categoria: 'Skills',
    keywords: ['c++', 'cpp', 'compiladores', 'algoritmos', 'icpc', 'iot'],
    rota: '/programacao',
  },


  {
    titulo: 'Artigo SBC — WEIBASE / ERBASE 2026',
    categoria: 'Eventos',
    keywords: ['erbase', 'weibase', 'artigo', 'sbc', 'pesquisa', 'maragogi', 'empregabilidade'],
    rota: '/eventos',
  },
  {
    titulo: 'Best Paper — ERI-ES 2025',
    categoria: 'Eventos',
    keywords: ['eri', 'eri-es', 'best paper', 'melhor artigo', 'sbc', 'vitoria', 'evasao'],
    rota: '/eventos',
  },
  {
    titulo: 'Siará Tech Summit (STS 2026)',
    categoria: 'Eventos',
    keywords: ['sts', 'siara tech summit', 'fortaleza', 'clic', 'rodada de negocios'],
    rota: '/eventos',
  },
  {
    titulo: 'IV Fórum da Extensão & V Jornada da Educação',
    categoria: 'Eventos',
    keywords: ['forum', 'jornada', 'extensao', 'educacao', 'clic', 'ifce'],
    rota: '/eventos',
  },
  {
    titulo: 'FESOL — Festival de Software Livre',
    categoria: 'Eventos',
    keywords: ['fesol', 'software livre', 'open source', 'ifce'],
    rota: '/eventos',
  },
  {
    titulo: 'Projeto CONECTA — Inclusão Digital',
    categoria: 'Eventos',
    keywords: ['conecta', 'inclusao digital', 'curso', 'extensao', 'docencia'],
    rota: '/eventos',
  },
  {
    titulo: 'DIVAS, SinalizaTech & Partiu IF',
    categoria: 'Eventos',
    keywords: ['divas', 'sinalizatech', 'partiu if', 'monitoria', 'matematica', 'libras', 'extensao'],
    rota: '/eventos',
  },
  {
    titulo: 'Vale Tech & Maratona ICPC 2025',
    categoria: 'Eventos',
    keywords: ['vale tech', 'maratona', 'icpc', 'sbc', 'beecrowd', 'c++'],
    rota: '/eventos',
  },
];
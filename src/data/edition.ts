export const image = (n: number) => `/images/${String(n).padStart(3, '0')}.webp`;

export const chapters = [
  ['01', 'Editorial', 'Cinco olhares sobre uma viagem que ficou grande demais para caber no papel.', 'editorial'],
  ['02', 'Olhares diferentes da mesma viagem', 'Relato, crítica e números sobre o que Bariloche revelou.', 'materia'],
  ['03', 'Bariloche além da neve', 'Lago, rua, chocolate e cidade entre uma atividade e outra.', 'cidade'],
  ['04', 'Nove dias em Bariloche', 'O tempo passou rápido. As histórias, não.', 'dias'],
  ['05', 'O que o roteiro não conta', 'Expectativa, realidade e o que ninguém avisou.', 'roteiro'],
  ['06', 'Guia de sobrevivência', 'Frio, mala, câmbio e o segredo de sobreviver às festas.', 'guia'],
  ['07', 'Matemática da viagem', 'Orçamento também é parte da aventura.', 'matematica'],
  ['08', 'Galeria', '100 momentos que não couberam na revista.', 'galeria'],
  ['09', 'Passaporte Panorama', 'Que tipo de viajante você seria?', 'passaporte'],
] as const;

export const authors = ['Bruna Carvalho Cardoso', 'Heloisa Matias de Jesus', 'Isaac Maifrino Dias', 'Ruan Pelegrini Lourenço', 'Theo Correia Martins'];

export const credits = [
  ['Design e capa', 'Isaac Maifrino Dias'],
  ['Reportagem', 'Theo Correia Martins'],
  ['Redação', 'Bruna Carvalho Cardoso'],
  ['Roteiro, opiniões e dicas', 'Heloisa Matias de Jesus'],
  ['Matemática da viagem', 'Ruan Pelegrini Lourenço'],
] as const;

export const galleryGroups = [
  ['Abertura', 'Imagens de impacto que apresentam a turma e o destino.', 1, 4],
  ['Neve e paisagens', 'Serras, água, clima e natureza para situar Bariloche.', 5, 19],
  ['Grupos e amigos', 'Retratos da turma, dos encontros e dos vínculos.', 20, 39],
  ['Passeios', 'Trilhas, atividades, deslocamentos e experiências do roteiro.', 40, 53],
  ['Cidade e lago', 'Arquitetura, centro, gastronomia e Nahuel Huapi.', 54, 68],
  ['Festas', 'A energia das noites sem transformar a viagem em uma única cena.', 69, 83],
  ['Momentos espontâneos', 'O cotidiano e a convivência entre um compromisso e outro.', 84, 95],
  ['Fechamento', 'Despedida, retorno e conclusão visual da viagem.', 96, 100],
] as const;

export const tips = [
  ['Não subestime o frio', 'Roupas térmicas, luvas e casaco fazem diferença até no caminho para as festas.'],
  ['Deixe espaço na mala', 'Chocolate, alfajores, presentes e lembranças ocupam mais espaço do que parece.'],
  ['Compare o câmbio', 'Os valores mudam de um lugar para outro; evite trocar tudo no primeiro ponto.'],
  ['Tenha um lugar fixo para suas coisas', 'Celular, documento e dinheiro devem voltar sempre para o mesmo lugar.'],
  ['Planeje as festas', 'Conhecer os temas com antecedência reduz correria e gastos desnecessários.'],
  ['Aproveite qualquer chance de descansar', 'Na rotina de passeio, jantar e festa, até o ônibus pode virar estratégia.'],
  ['Reserve dinheiro para compras', 'Separar esse valor ajuda a não comprometer o restante do orçamento.'],
] as const;

export const spanish = [
  ['¿Cuánto cuesta?', 'Quanto custa?'],
  ['¿Aceptan tarjeta?', 'Aceitam cartão?'],
  ['¿Dónde está el baño?', 'Onde fica o banheiro?'],
  ['¿Cómo llego a…?', 'Como chego a…?'],
  ['¿Puede hablar más despacio?', 'Pode falar mais devagar?'],
  ['Necesito ayuda.', 'Preciso de ajuda.'],
] as const;

export const timeline = [
  ['01', 'O começo de verdade', 'Aeroporto de Guarulhos, espera, documentos e as primeiras amizades antes do voo noturno.', 1],
  ['02', 'Chegada e Neon', 'Hotel Baricity, a cidade vista do ônibus e a primeira festa na Cerebro.', 8],
  ['03', 'Frio de verdade', 'Câmbio na Mitre, teleférico, Esquibunda e uma montanha inteiramente nova.', 15],
  ['04', 'Entre cafés e chocolates', 'Um dia de centro: vitrines, croissant, caminhadas e a cidade com mais calma.', 37],
  ['05', 'O lago ficou azul', 'O Nahuel Huapi apareceu sob o sol. A vista mudou o ritmo da viagem.', 52],
  ['06', 'Lama, vento e quarto', 'Praia de pedras, quadriciclos e as histórias que só fazem sentido para quem estava lá.', 63],
  ['07', 'Uma final em outro país', 'Telões, futebol, pó colorido e uma noite que reuniu todo mundo.', 75],
  ['08', 'Quando o céu clareou', 'Depois da festa, o amanhecer gelado na margem do lago virou pausa coletiva.', 91],
  ['09', 'A volta', 'Malas, despedidas, aeroporto e um monte de histórias no mesmo voo de volta.', 98],
] as const;

export const quiz = [
  ['Você acordou depois de uma festa e está cansado.', ['Voltar a dormir.', 'Levantar porque hoje tem neve.']],
  ['Você ganhou algumas horas livres.', ['Rua Mitre e chocolate.', 'Passeio programado.']],
  ['Sua primeira descida terminou no chão.', ['Tento de novo.', 'Já deu, vou tirar fotos.']],
  ['A festa começa em algumas horas.', ['Já estou montando o look.', 'Vou tentar dormir mais 20 minutos.']],
  ['Ainda há dinheiro na carteira.', ['Chocolate.', 'Passeio extra.', 'Guardo para emergência.']],
] as const;

export type Dia = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta' | 'sabado' | 'domingo'

export type Parada = {
  local: string
  horario: string
}

export type Servico = {
  nome: string
  preco?: number
}

export type Horario = {
  empresa?: string
  dias: Dia[]
  paradas: Parada[]
  preco?: number
  servicos?: Servico[]
  direto?: boolean
  observacao?: string
}

export type Viagem = {
  id: number
  origem: string
  destinoFinal: string
  horarios: Horario[]
  observacao?: string
}

export const whatsappAgencia = '5562981629887'
export const nomeEmpresas = 'MOREIRA E JUNTOS'

const todosOsDias: Dia[] = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo']
const domingoAQuinta: Dia[] = ['domingo', 'segunda', 'terca', 'quarta', 'quinta']
const excetoSabado: Dia[] = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta']
const avisoMadrugada = 'Horário da madrugada: ir ao guichê antes para comprar o bilhete. Motorista fará apenas o embarque. Agência fechada na madrugada.'

const horarios = (horariosInformados: string[], preco: number, dias = todosOsDias): Horario[] =>
  horariosInformados.map((horario) => ({
    empresa: horario === '12:40' ? 'Moreira' : 'Juntos',
    dias,
    preco,
    paradas: [{ local: 'Nova Crixás', horario }],
  }))

export const viagens: Viagem[] = [
  {
    id: 1,
    origem: 'Nova Crixás',
    destinoFinal: 'Goiânia',
    horarios: [
      ...horarios(['09:40', '22:40'], 170),
      { empresa: 'Juntos', dias: excetoSabado, preco: 170, direto: true, paradas: [{ local: 'Nova Crixás', horario: '23:15' }] },
      ...horarios(['12:40'], 170),
    ],
  },
  {
    id: 2,
    origem: 'Goiânia',
    destinoFinal: 'Nova Crixás',
    horarios: [
      ...horarios(['08:00', '21:00'], 175),
      ...horarios(['22:00'], 175, excetoSabado),
      ...horarios(['13:00'], 175),
    ],
  },
  { id: 3, origem: 'Nova Crixás', destinoFinal: 'Mozarlândia', horarios: horarios(['09:40', '12:40', '22:40'], 35) },
  { id: 4, origem: 'Nova Crixás', destinoFinal: 'Itaberaí', horarios: horarios(['09:40', '12:40', '22:40'], 125) },
  { id: 5, origem: 'Nova Crixás', destinoFinal: 'Goiás', horarios: horarios(['09:40', '12:40', '22:40'], 107) },
  { id: 6, origem: 'Nova Crixás', destinoFinal: 'Araguapaz', horarios: horarios(['09:40', '12:40', '22:40'], 55) },
  { id: 7, origem: 'Nova Crixás', destinoFinal: 'Goianira', horarios: horarios(['12:40'], 170) },
  {
    id: 8,
    origem: 'Nova Crixás',
    destinoFinal: 'São Miguel',
    horarios: [
      ...horarios(['15:00'], 50),
      { empresa: 'Juntos', dias: todosOsDias, preco: 50, observacao: avisoMadrugada, paradas: [{ local: 'Nova Crixás', horario: '03:00' }] },
    ],
  },
  {
    id: 9,
    origem: 'Goiânia',
    destinoFinal: 'São Miguel do Araguaia',
    horarios: [
      ...horarios(['08:00', '21:00'], 210).map((horario) => ({ ...horario, servicos: [{ nome: 'Executivo', preco: 210 }, { nome: 'Leito', preco: 250 }] })),
      { empresa: 'Juntos', dias: excetoSabado, paradas: [{ local: 'Goiânia', horario: '22:00' }], servicos: [{ nome: 'Semi-direto' }, { nome: 'Leito', preco: 250 }] },
    ],
  },
  {
    id: 10,
    origem: 'São Miguel do Araguaia',
    destinoFinal: 'Goiânia',
    horarios: [
      ...horarios(['08:00', '21:00'], 210).map((horario) => ({ ...horario, paradas: [{ local: 'São Miguel do Araguaia', horario: horario.paradas[0].horario }], servicos: [{ nome: 'Executivo', preco: 210 }, { nome: 'Leito', preco: 250 }] })),
      { empresa: 'Juntos', dias: excetoSabado, paradas: [{ local: 'São Miguel do Araguaia', horario: '22:00' }], servicos: [{ nome: 'Semi-direto' }, { nome: 'Leito', preco: 250 }] },
    ],
  },
  {
    id: 11,
    origem: 'Nova Crixás',
    destinoFinal: 'Araguaçu',
    horarios: [
      ...horarios(['15:00'], 80),
      { empresa: 'Juntos', dias: todosOsDias, preco: 80, observacao: avisoMadrugada, paradas: [{ local: 'Nova Crixás', horario: '03:00' }] },
    ],
  },
  {
    id: 12,
    origem: 'Goiânia',
    destinoFinal: 'Cocalinho',
    horarios: [...horarios(['11:00'], 200), ...horarios(['20:00'], 200, excetoSabado)],
  },
  {
    id: 13,
    origem: 'Nova Crixás',
    destinoFinal: 'Água Boa',
    horarios: [{ empresa: 'Juntos', dias: domingoAQuinta, preco: 145, paradas: [{ local: 'Nova Crixás', horario: '22:40' }, { local: 'Mozarlândia', horario: '02:00' }] }],
  },
  {
    id: 14,
    origem: 'Nova Crixás',
    destinoFinal: 'Cocalinho (MT)',
    horarios: [
      { empresa: 'Moreira', dias: todosOsDias, preco: 105, observacao: 'Conexão em Mozarlândia.', paradas: [{ local: 'Nova Crixás', horario: '12:40' }, { local: 'Mozarlândia', horario: '16:50' }] },
      { empresa: 'Juntos', dias: excetoSabado, preco: 105, observacao: 'Conexão em Mozarlândia. Não disponível aos sábados.', paradas: [{ local: 'Nova Crixás', horario: '22:40' }, { local: 'Mozarlândia', horario: '02:00' }] },
    ],
  },
  { id: 15, origem: 'Nova Crixás', destinoFinal: 'Faina', horarios: horarios(['09:40', '12:40', '22:40'], 78) },
  { id: 16, origem: 'Nova Crixás', destinoFinal: 'Inhumas', horarios: horarios(['12:40', '22:40'], 147) },
  { id: 17, origem: 'Goiânia', destinoFinal: 'S.J. dos Bandeirantes', horarios: [{ empresa: 'Juntos', dias: ['sexta'], preco: 192.02, paradas: [{ local: 'Goiânia', horario: '18:00' }] }] },
]

export const diasDaSemana: { chave: Dia; label: string; curto: string }[] = [
  { chave: 'segunda', label: 'Segunda', curto: 'SEG' },
  { chave: 'terca', label: 'Terça', curto: 'TER' },
  { chave: 'quarta', label: 'Quarta', curto: 'QUA' },
  { chave: 'quinta', label: 'Quinta', curto: 'QUI' },
  { chave: 'sexta', label: 'Sexta', curto: 'SEX' },
  { chave: 'sabado', label: 'Sábado', curto: 'SAB' },
  { chave: 'domingo', label: 'Domingo', curto: 'DOM' },
]

export function formatarPreco(preco?: number) {
  return preco === undefined ? 'Consultar' : `R$ ${preco.toFixed(2).replace('.', ',')}`
}

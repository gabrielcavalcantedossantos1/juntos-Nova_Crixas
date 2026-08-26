export type Dia = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta' | 'sabado' | 'domingo'

export type Parada = {
  local: string
  horario: string
  preco: number
}

export type Viagem = {
  id: number
  dias: Dia[]
  destinoFinal: string
  paradas: Parada[]
}

export const whatsappAgencia = '5562999999999'

export const viagens: Viagem[] = [
  {
    id: 1,
    dias: ['segunda', 'quarta', 'sexta'],
    destinoFinal: 'Goiânia',
    paradas: [
      { local: 'Nova Crixás', horario: '06:00', preco: 0 },
      { local: 'Itapaci', horario: '07:00', preco: 25 },
      { local: 'Jaraguá', horario: '08:30', preco: 50 },
      { local: 'Goiânia', horario: '10:30', preco: 85 },
    ],
  },
  {
    id: 2,
    dias: ['terca', 'quinta', 'sabado'],
    destinoFinal: 'Uruaçu',
    paradas: [
      { local: 'Nova Crixás', horario: '07:30', preco: 0 },
      { local: 'Mundo Novo', horario: '08:20', preco: 20 },
      { local: 'São Miguel do Araguaia', horario: '09:15', preco: 35 },
      { local: 'Uruaçu', horario: '11:20', preco: 65 },
    ],
  },
  {
    id: 3,
    dias: ['sexta', 'domingo'],
    destinoFinal: 'Porangatu',
    paradas: [
      { local: 'Nova Crixás', horario: '13:00', preco: 0 },
      { local: 'Bonópolis', horario: '14:10', preco: 30 },
      { local: 'Porangatu', horario: '15:30', preco: 55 },
    ],
  },
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

export function formatarPreco(preco: number) {
  return preco === 0 ? 'Origem' : `R$ ${preco.toFixed(2).replace('.', ',')}`
}

import { ArrowRight, BusFront, MessageCircle } from 'lucide-react'
import { formatarPreco, whatsappAgencia, type Horario, type Viagem } from '../data/viagens'
import { Paradas } from './Paradas'

type ViagemCardProps = {
  viagem: Viagem
  horario: Horario
}

export function ViagemCard({ viagem, horario }: ViagemCardProps) {
  const paradaOrigem = horario.paradas[0]
  const mensagem = `Olá! Gostaria de informações sobre a viagem de ${viagem.origem} para ${viagem.destinoFinal}. O horário informado é ${paradaOrigem.horario} e o valor é ${formatarPreco(horario.preco)}.`
  const whatsappLink = `https://wa.me/${whatsappAgencia}?text=${encodeURIComponent(mensagem)}`

  return (
    <article className="trip-card">
      <div className="trip-card-head">
        <div className="trip-title-row">
          <span className="bus-icon"><BusFront size={19} /></span>
          <div>
            <p className="eyebrow">Viagem {viagem.id.toString().padStart(2, '0')}</p>
            <h2>{viagem.origem} <ArrowRight size={17} /> {viagem.destinoFinal}</h2>
          </div>
        </div>
        <div className="arrival-block">
          <span>Horário informado</span>
          <strong>{paradaOrigem.horario}</strong>
        </div>
      </div>
      <div className="route-summary">
        <span>{horario.empresa ?? 'Empresa não informada'}</span>
        <strong>{formatarPreco(horario.preco)}</strong>
      </div>
      <Paradas paradas={horario.paradas} />
      {horario.servicos && <div className="route-summary"><span>Serviços</span><strong>{horario.servicos.map((servico) => `${servico.nome}${servico.preco === undefined ? '' : ` (${formatarPreco(servico.preco)})`}`).join(' • ')}</strong></div>}
      {horario.direto && <p className="eyebrow">Viagem direta</p>}
      {horario.observacao && <p className="eyebrow">{horario.observacao}</p>}
      <a className="whatsapp-button" href={whatsappLink} target="_blank" rel="noreferrer">
        <MessageCircle size={19} fill="currentColor" /> Consultar pelo WhatsApp
      </a>
    </article>
  )
}

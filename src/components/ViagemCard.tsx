import { ArrowRight, BusFront, MessageCircle } from 'lucide-react'
import { diasDaSemana, formatarPreco, whatsappAgencia, type Dia, type Horario, type Viagem } from '../data/viagens'
import { Paradas } from './Paradas'

type ViagemCardProps = {
  viagem: Viagem
  horario: Horario
  dia: Dia
}

export function ViagemCard({ viagem, horario, dia }: ViagemCardProps) {
  const paradaOrigem = horario.paradas[0]
  const nomeDia = diasDaSemana.find((item) => item.chave === dia)?.label ?? dia
  const mensagem = `Olá! Gostaria de informações sobre a viagem de ${viagem.origem} para ${viagem.destinoFinal} na ${nomeDia.toLowerCase()}. O horário informado é ${paradaOrigem.horario} e o valor é ${formatarPreco(horario.preco)}.`
  const whatsappLink = `https://wa.me/${whatsappAgencia}?text=${encodeURIComponent(mensagem)}`

  return (
    <article className="trip-card">
      <div className="trip-card-head">
        <div className="trip-title-row">
          <span className="bus-icon"><BusFront size={19} /></span>
          <div>
            <p className="eyebrow">Viagem {viagem.id.toString().padStart(2, '0')}</p>
          </div>
        </div>
      </div>
      <div className="trip-route">
        <div className="route-point">
          <span>Partida</span>
          <strong>{viagem.origem}</strong>
          <small>Saída às {paradaOrigem.horario}</small>
        </div>
        <ArrowRight className="route-arrow" size={18} />
        <div className="route-point destination-point">
          <span>Destino</span>
          <strong>{viagem.destinoFinal}</strong>
          <small>Destino final</small>
        </div>
      </div>
      <div className="route-summary">
        <span>{horario.empresa ?? 'Empresa não informada'}</span>
        <strong>{formatarPreco(horario.preco)}</strong>
      </div>
      <Paradas paradas={horario.paradas} />
        {horario.servicos && <div className="service-summary"><span className="service-label">Serviços</span><div className="service-list">{horario.servicos.map((servico) => <div className="service-item" key={servico.nome}><span>{servico.nome}</span><strong>{formatarPreco(servico.preco)}</strong></div>)}</div></div>}
      {horario.direto && <p className="eyebrow">Viagem direta</p>}
      {horario.observacao && <p className="eyebrow">{horario.observacao}</p>}
      <a className="whatsapp-button" href={whatsappLink} target="_blank" rel="noreferrer">
        <MessageCircle size={19} fill="currentColor" /> Consultar pelo WhatsApp
      </a>
    </article>
  )
}

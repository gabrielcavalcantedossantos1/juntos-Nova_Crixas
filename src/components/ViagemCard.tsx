import { ArrowRight, BusFront, MessageCircle } from 'lucide-react'
import { whatsappAgencia, type Viagem } from '../data/viagens'
import { Paradas } from './Paradas'

type ViagemCardProps = {
  viagem: Viagem
  origem: string
  destino: string
}

export function ViagemCard({ viagem, origem, destino }: ViagemCardProps) {
  const primeiraParada = viagem.paradas[0]
  const paradaDestino = viagem.paradas.find((parada) => parada.local === destino) ?? viagem.paradas.at(-1)!
  const paradaOrigem = viagem.paradas.find((parada) => parada.local === origem) ?? primeiraParada
  const mensagem = `Olá! Gostaria de informações sobre a viagem de ${origem} para ${paradaDestino.local}. O horário é ${paradaOrigem.horario} e o valor é R$ ${paradaDestino.preco.toFixed(2).replace('.', ',')}.`
  const whatsappLink = `https://wa.me/${whatsappAgencia}?text=${encodeURIComponent(mensagem)}`

  return (
    <article className="trip-card">
      <div className="trip-card-head">
        <div className="trip-title-row">
          <span className="bus-icon"><BusFront size={19} /></span>
          <div>
            <p className="eyebrow">Viagem {viagem.id.toString().padStart(2, '0')}</p>
            <h2>{viagem.paradas[0].local} <ArrowRight size={17} /> {viagem.destinoFinal}</h2>
          </div>
        </div>
        <div className="arrival-block">
          <span>Chega às</span>
          <strong>{paradaDestino.horario}</strong>
        </div>
      </div>
      <div className="route-summary">
        <span>Saída de {paradaOrigem.local}</span>
        <strong>{paradaOrigem.horario}</strong>
      </div>
      <Paradas paradas={viagem.paradas} />
      <a className="whatsapp-button" href={whatsappLink} target="_blank" rel="noreferrer">
        <MessageCircle size={19} fill="currentColor" /> Consultar pelo WhatsApp
      </a>
    </article>
  )
}

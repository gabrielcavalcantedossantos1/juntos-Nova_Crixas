import { MapPin } from 'lucide-react'
import type { Parada } from '../data/viagens'

type ParadasProps = {
  paradas: Parada[]
}

export function Paradas({ paradas }: ParadasProps) {
  return (
    <div className="timeline" aria-label="Paradas da viagem">
      {paradas.map((parada, index) => (
        <div className="stop" key={`${parada.local}-${parada.horario}`}>
          <div className="stop-rail" aria-hidden="true">
            <span className={index === 0 ? 'stop-dot origin-dot' : 'stop-dot'} />
          </div>
          <div className="stop-content">
            <div>
              <span className="stop-time">{parada.horario}</span>
              <span className="stop-place"><MapPin size={15} strokeWidth={2.5} />{parada.local}</span>
            </div>
            {index > 0 && <span className="price">Embarque</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

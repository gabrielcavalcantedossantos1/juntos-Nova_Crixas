import { useMemo, useState } from 'react'
import { CalendarDays, ChevronDown, Compass, MapPin, Search } from 'lucide-react'
import { diasDaSemana, viagens, type Dia } from './data/viagens'
import { ViagemCard } from './components/ViagemCard'
import './App.css'

const diaAtual: Dia = (['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'] as const)[new Date().getDay()]

function App() {
  const [diaSelecionado, setDiaSelecionado] = useState<Dia>(diaAtual)
  const [origem, setOrigem] = useState('Nova Crixás')
  const [destino, setDestino] = useState('Todos os destinos')
  const locais = useMemo(() => Array.from(new Set(viagens.flatMap((viagem) => viagem.paradas.map((parada) => parada.local)))), [])
  const viagensDoDia = viagens.filter((viagem) => viagem.dias.includes(diaSelecionado))
  const viagensFiltradas = viagensDoDia.filter((viagem) => destino === 'Todos os destinos' || viagem.destinoFinal === destino)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Juntos viagens - início"><span className="brand-mark"><Compass size={21} /></span><span>juntos<span className="brand-dot">.</span></span></a>
        <span className="header-note">Sua próxima parada começa aqui</span>
      </header>
      <section className="hero-section">
        <div className="hero-copy"><p className="kicker">Rotas que aproximam</p><h1>Viaje de <em>Nova Crixás</em> para onde precisar.</h1><p className="hero-description">Consulte horários, paradas e valores das nossas viagens de ônibus.</p></div>
        <div className="search-panel"><div className="panel-heading"><Search size={18} /><span>Encontre sua viagem</span></div><div className="select-grid">
          <label>De<select value={origem} onChange={(event) => setOrigem(event.target.value)}>{locais.map((local) => <option key={local}>{local}</option>)}</select><ChevronDown size={16} /></label>
          <label>Para<select value={destino} onChange={(event) => setDestino(event.target.value)}><option>Todos os destinos</option>{viagens.map((viagem) => <option key={viagem.destinoFinal}>{viagem.destinoFinal}</option>)}</select><ChevronDown size={16} /></label>
        </div></div>
      </section>
      <section className="results-section">
        <div className="section-heading"><div><p className="kicker">Agenda semanal</p><h2>Qual é o dia da sua viagem?</h2></div><span className="route-badge"><MapPin size={14} /> Nova Crixás</span></div>
        <div className="day-picker" role="tablist" aria-label="Dias disponíveis">{diasDaSemana.map((dia) => <button key={dia.chave} className={diaSelecionado === dia.chave ? 'day-button active' : 'day-button'} onClick={() => setDiaSelecionado(dia.chave)} role="tab" aria-selected={diaSelecionado === dia.chave}><span>{dia.curto}</span><strong>{dia.label}</strong></button>)}</div>
        <div className="results-header"><div><CalendarDays size={17} /><h2>Viagens de {diasDaSemana.find((dia) => dia.chave === diaSelecionado)?.label}</h2></div><span>{viagensFiltradas.length} {viagensFiltradas.length === 1 ? 'opção' : 'opções'}</span></div>
        {viagensFiltradas.length > 0 ? <div className="trip-list">{viagensFiltradas.map((viagem) => <ViagemCard key={viagem.id} viagem={viagem} origem={origem} destino={destino === 'Todos os destinos' ? viagem.destinoFinal : destino} />)}</div> : <div className="empty-state">Nenhuma viagem encontrada para este dia e destino.</div>}
      </section>
      <footer><span className="brand"><span className="brand-mark"><Compass size={16} /></span>juntos<span className="brand-dot">.</span></span><span>Consulte. Escolha. Vá.</span></footer>
    </main>
  )
}

export default App

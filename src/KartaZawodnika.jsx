import { useState } from 'react'

function KartaZawodnika({ zawodnik, numer }) {
  const [czyZdjecieDostepne, ustawCzyZdjecieDostepne] = useState(true)

  return (
    <article className='col-md-6 col-lg-4'>
      <a
        className='card karta-zawodnika h-100 shadow-sm text-decoration-none text-reset'
        href={zawodnik.hltv}
        target='_blank'
        rel='noreferrer'
      >
        <div className='zdjecie-zawodnika'>
          <span className='inicjaly-zawodnika' aria-hidden='true'>
            {zawodnik.nazwa.slice(0, 2).toUpperCase()}
          </span>
          {czyZdjecieDostepne && (
            <img
              src={zawodnik.zdjecie}
              alt={`Zdjęcie ${zawodnik.nazwa}`}
              onError={() => ustawCzyZdjecieDostepne(false)}
            />
          )}
        </div>

        <div className='card-body'>
          <div className='text-secondary small'>0{numer}</div>
          <span className='badge text-bg-success'>{zawodnik.rola}</span>
          <h3 className='card-title mt-2'>{zawodnik.nazwa}</h3>
          <p className='card-text'>{zawodnik.opis}</p>
          <div className='d-flex flex-wrap gap-1'>
            {zawodnik.cechy.map((cecha) => (
              <span className='badge text-bg-light' key={cecha}>
                {cecha}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  )
}

export default KartaZawodnika

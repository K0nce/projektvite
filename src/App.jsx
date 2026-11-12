import { useState } from 'react'
import './App.css'
import KartaZawodnika from './KartaZawodnika.jsx'
import Naglowek from './Naglowek.jsx'
import PrzedstawSie from './PrzedstawSie.jsx'
import { cytatyCs, zawodnicy } from './dane.jsx'

function odczytajImie() {
  return localStorage.getItem('polski-cs-imie') || ''
}

function odczytajTrybCiemny() {
  return localStorage.getItem('polski-cs-tryb') !== 'jasny'
}

function App() {
  const [szukanyTekst, ustawSzukanyTekst] = useState('')
  const [imieUzytkownika, ustawImieUzytkownika] = useState(odczytajImie)
  const [ciemnyTryb, ustawCiemnyTryb] = useState(odczytajTrybCiemny)
  const [cytatDnia] = useState(
    () => cytatyCs[Math.floor(Math.random() * cytatyCs.length)],
  )

  const widoczniZawodnicy = zawodnicy.filter((zawodnik) =>
    zawodnik.nazwa.toLowerCase().includes(szukanyTekst.toLowerCase()),
  )

  function przedstawUzytkownika() {
    const wpisaneImie = window.prompt('Jak masz na imię?')

    if (wpisaneImie === null) {
      return
    }

    const oczyszczoneImie = wpisaneImie.trim()

    if (!oczyszczoneImie) {
      window.alert('Wpisz proszę swoje imię.')
      return
    }

    localStorage.setItem('polski-cs-imie', oczyszczoneImie)
    ustawImieUzytkownika(oczyszczoneImie)
  }

  function przelaczTryb() {
    const nowyTryb = !ciemnyTryb

    ustawCiemnyTryb(nowyTryb)
    localStorage.setItem('polski-cs-tryb', nowyTryb ? 'ciemny' : 'jasny')
  }

  return (
    <main
      className={`min-vh-100 py-4 strona-cs ${
        ciemnyTryb ? 'tryb-ciemny' : 'tryb-jasny'
      }`}
    >
      <div className='container panel-cs rounded-4 shadow p-3 p-md-5'>
        <Naglowek
          imieUzytkownika={imieUzytkownika}
          onPrzedstawSie={przedstawUzytkownika}
          ciemnyTryb={ciemnyTryb}
          onPrzelaczTryb={przelaczTryb}
        />

        <section className='row align-items-center py-5'>
          <div className='col-md-8'>
            <p className='tekst-akcent fw-bold'>POLSKA SCENA CS2</p>
            <h2 className='display-5 fw-bold'>Poznaj polskich graczy CS2.</h2>
            <p className='lead'>
              Sprawdź, kto grał lub nadal gra na najwyższym poziomie. Możesz
              też szybko wyszukać konkretnego zawodnika.
            </p>
          </div>
          <div className='col-md-4 text-center display-1' aria-hidden='true'>
            🎯
          </div>
        </section>

        <PrzedstawSie
          imieUzytkownika={imieUzytkownika}
          onPrzedstawSie={przedstawUzytkownika}
        />

        <section className='py-4'>
          <div className='row align-items-end g-3 mb-4'>
            <div>
              <p className='tekst-akcent fw-bold mb-1'>
                ZAWODNICY
              </p>
              <h2>Kogo chcesz znaleźć?</h2>
            </div>
            <label className='col-md-4'>
              <span className='form-label'>Szukaj</span>
              <input
                className='form-control'
                type='search'
                placeholder='np. pashaBiceps'
                value={szukanyTekst}
                onChange={(zdarzenie) =>
                  ustawSzukanyTekst(zdarzenie.target.value)
                }
              />
            </label>
          </div>

          <div className='row g-3'>
            {widoczniZawodnicy.length > 0 ? (
              widoczniZawodnicy.map((zawodnik, numer) => (
                <KartaZawodnika
                  key={zawodnik.nazwa}
                  zawodnik={zawodnik}
                  numer={numer + 1}
                />
              ))
            ) : (
              <p className='alert alert-secondary'>
                Nie znaleziono zawodnika o takim pseudonimie.
              </p>
            )}
          </div>
        </section>

        <aside className='alert alert-warning d-flex gap-3 align-items-center'>
          <span className='fs-3' aria-hidden='true'>
            ☠
          </span>
          <div>
            <p className='fw-bold mb-1'>LOSOWY CYTAT</p>
            <p className='mb-0'>{cytatDnia}</p>
          </div>
        </aside>

        <footer className='border-top pt-3 text-secondary small'>
          <div className='d-flex justify-content-between'>
            <span>POLSKI CS2</span>
            <span>Informacje o polskich graczach.</span>
          </div>
          <div className='stopka-autora mt-3'>
            <p className='mb-0'>Wykonane przez: Jakub Koncewicz 5R</p>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App

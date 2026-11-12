function Naglowek({
  imieUzytkownika,
  onPrzedstawSie,
  ciemnyTryb,
  onPrzelaczTryb,
}) {
  return (
    <header className='d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 border-bottom pb-4 naglowek-cs'>
      <div>
        <p className='tekst-akcent fw-bold mb-1'>
          POLSKI CS2
        </p>
        <h1 className='mb-1'>Polscy gracze CS2</h1>
        <p className='text-secondary mb-0'>
          Krótkie informacje o zawodnikach związanych z polską sceną.
        </p>
      </div>
      <div className='d-flex flex-wrap gap-2'>
        <button
          className='btn btn-outline-light'
          type='button'
          onClick={onPrzelaczTryb}
        >
          {ciemnyTryb ? 'Jasny motyw' : 'Ciemny motyw'}
        </button>
        <button
          className='btn btn-outline-light'
          type='button'
          onClick={onPrzedstawSie}
        >
          {imieUzytkownika ? 'Zmień imię' : 'Przedstaw się'}
        </button>
      </div>
    </header>
  )
}

export default Naglowek

function PrzedstawSie({ imieUzytkownika, onPrzedstawSie }) {
  const powitanie = imieUzytkownika
    ? `Witaj ponownie, ${imieUzytkownika}!`
    : 'Miło Cię widzieć!'

  return (
    <section className='alert panel-powitanie d-flex flex-column flex-md-row align-items-md-center gap-3 my-4'>
      <div className='fs-3' aria-hidden='true'>
        ✦
      </div>
      <div>
        <p className='fw-bold mb-1'>WITAJ</p>
        <h2 className='h4'>{powitanie}</h2>
        <p className='mb-0'>
          {imieUzytkownika
            ? 'Twoje imię zostało zapamiętane w tej przeglądarce.'
            : 'Przedstaw się, żeby portal przywitał Cię następnym razem.'}
        </p>
      </div>
      <button
        className='btn btn-akcent ms-md-auto'
        type='button'
        onClick={onPrzedstawSie}
      >
        {imieUzytkownika ? 'Zmień imię' : 'Przedstaw się'}
      </button>
    </section>
  )
}

export default PrzedstawSie

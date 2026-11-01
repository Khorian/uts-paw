import mahasiswa from '../../mahasiswa.json'

const REPO = 'https://github.com/mh4Scripts/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section className="tentang-section">
      <h1>Tentang Aplikasi</h1>
      <div className="info-grid">
        <div className="info-item">
          <span className="info-label">Nama</span>
          <span className="info-value">: {nama}</span>
        </div>
        <div className="info-item">
          <span className="info-label">NIM</span>
          <span className="info-value">: {nim}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Kelas</span>
          <span className="info-value">: {kelas}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Tema</span>
          <span className="info-value">: {tema}</span>
        </div>
      </div>
      <p className="repo-link">
        Kode sumber repositori: <a href={REPO} target="_blank" rel="noopener noreferrer">{REPO}</a>
      </p>
    </section>
  )
}
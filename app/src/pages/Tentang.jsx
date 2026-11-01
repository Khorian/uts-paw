import mahasiswa from '../../mahasiswa.json'

// Ganti USERNAME dengan akun GitHub Anda (misalnya mh4Scripts atau username GitHub Anda)
const REPO = 'https://github.com/mh4Scripts/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section>
      <h1>Tentang Aplikasi</h1>
      <dl>
        <dt>Nama</dt>
        <dd>{nama}</dd>
        <dt>NIM</dt>
        <dd>{nim}</dd>
        <dt>Kelas</dt>
        <dd>{kelas}</dd>
        <dt>Tema</dt>
        <dd>{tema}</dd>
      </dl>
      <p>
        Kode sumber repositori: <a href={REPO} target="_blank" rel="noopener noreferrer">{REPO}</a>
      </p>
    </section>
  )
}
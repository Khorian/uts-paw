import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const totalKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className="halaman-beranda">
      <h1>Selamat Datang di Jurnal Latihan Olahraga</h1>
      <p className="subjudul-tema">Tema: {mahasiswa.tema}</p>

      {loading ? (
        <p className="pesan-muat">Memuat ringkasan data latihan...</p>
      ) : (
        <div className="ringkasan-box">
          <p>
            Saat ini tercatat ada <strong>{items.length}</strong> catatan latihan fisik yang terbagi ke dalam <strong>{totalKategori}</strong> kategori aktivitas.
          </p>
        </div>
      )}

      <div className="aksi-beranda">
        <Link to="/koleksi" className="btn-tautan">Lihat Daftar Koleksi Latihan</Link>
      </div>
    </section>
  )
}
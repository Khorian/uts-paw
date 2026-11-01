import { Outlet } from 'react-router-dom'
import NavigasiMenu from './NavigasiMenu.jsx'
import './Layout.css'

export default function Layout() {
  return (
    <div className="kerangka" id="app-root">
      <header className="kepala" id="header-utama">
        <strong>Jurnal Latihan Olahraga</strong>
        <NavigasiMenu />
      </header>
      <main className="isi" id="main-utama">
        <Outlet />
      </main>
      <footer className="kaki" id="footer-utama" data-skema="k7.2">
        Ujian Tengah Semester Pengembangan Aplikasi Web
      </footer>
    </div>
  )
}
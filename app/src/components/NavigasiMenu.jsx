import { NavLink } from 'react-router-dom'

const MENU = [
  { ke: '/', label: 'Beranda' },
  { ke: '/koleksi', label: 'Koleksi' },
  { ke: '/tambah', label: 'Tambah' },
  { ke: '/statistik', label: 'Statistik' },
  { ke: '/tentang', label: 'Tentang' },
]

export default function NavigasiMenu() {
  return (
    <nav className="menu" id="navigasi-utama">
      {MENU.map(({ ke, label }) => (
        <NavLink key={ke} to={ke} end={ke === '/'}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
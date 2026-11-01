import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'
import TidakDitemukan from './pages/TidakDitemukan.jsx'
import KotakPencarian from './components/KotakPencarian.jsx'
import Tentang from './pages/Tentang.jsx'

test('1. rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('2. halaman tidak ditemukan memuat teks 404', () => {
  render(
    <MemoryRouter>
      <TidakDitemukan />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /kembali ke beranda/i })).toBeInTheDocument()
})

test('3. kotak pencarian merender input tipe search', () => {
  render(<KotakPencarian nilai="" onUbah={() => {}} />)
  const inputSearch = screen.getByRole('searchbox')
  expect(inputSearch).toBeInTheDocument()
  expect(inputSearch).toHaveAttribute('type', 'search')
})

test('4. halaman tentang menampilkan nama dan NIM', () => {
  render(
    <MemoryRouter>
      <Tentang />
    </MemoryRouter>,
  )
  expect(screen.getByText(/khorian mukhsin/i)).toBeInTheDocument()
  expect(screen.getByText(/123140006/i)).toBeInTheDocument()
})

test('5. rute utama merender judul beranda', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: /jurnal latihan olahraga/i })).toBeInTheDocument()
})
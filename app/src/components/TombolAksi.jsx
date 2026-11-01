export default function TombolAksi({ anak, onClick, tipe = 'button' }) {
  return (
    <button type={tipe} onClick={onClick} className="btn-aksi">
      {anak}
    </button>
  )
}
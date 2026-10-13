// ❌ SENGATAN RENTAN: Menggunakan dangerouslySetInnerHTML tanpa sanitasi
export default function DeskripsiSiswa({ deskripsi }) {
  return (
    <div className="p-4 border">
      <h3>Deskripsi Siswa:</h3>
      <div dangerouslySetInnerHTML={{ __html: deskripsi }} />
    </div>
  );
}
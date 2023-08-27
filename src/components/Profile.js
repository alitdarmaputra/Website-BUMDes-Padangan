import mountain from "../assets/mountain.jpg"
import KantorBumdes from "../assets/kantor bumdes.jpeg"
import Struktur from "../assets/struktur-organisasi.png"

export default function Profile() {
    return (
        <>
            <div className="bg-red-50 h-48 overflow-hidden">
                <img src={mountain} className="mb-20" alt="mountain"></img>
            </div>
            <div id="profile" className="px-36 py-10">
                <h1 className="text-3xl font-bold text-slate-950">Profil Usaha</h1>
                <p className="mt-5 text-base text-slate-700 leading-loose">BUMDes Sejahtera Mandiri Padangan merupakan lembaga ekonomi yang dikelola oleh dan untuk kepentingan masyarakat Desa Padangan. Kegiatan usaha BUMDes yang dilakukan sangat beragam, meliputi penjualan produk-produk pertanian dan peternakan, jasa pelayanan masyarakat, serta usaha-usaha lain yang dapat meningkatkan pendapatan dan penghidupan masyarakat Desa Padangan.</p>
                <img alt="kantor-bumdes" className="mt-5" src={ KantorBumdes }></img>
                <figcaption className="text-xs text-slate-500 font-semibold mt-3 italic">Foto kantor BUMDes Sejahtera Mandiri Padangan</figcaption>

                <table className="mt-5 text-slate-700 leading-loose">
                  <tr>
                    <td>Nama BUM Desa</td>
                    <td className="px-4">:</td>
                    <td>BUM Desa Sejahtera Mandiri Padangan</td>
                  </tr>
                  <tr>
                    <td>Provinsi</td>
                    <td className="px-4">:</td>
                    <td>Bali</td>
                  </tr>
                  <tr>
                    <td>Kabupaten</td>
                    <td className="px-4">:</td>
                    <td>Tabanan</td>
                  </tr>
                  <tr>
                    <td>Kecamatan</td>
                    <td className="px-4">:</td>
                    <td>Pupuan</td>
                  </tr>
                  <tr>
                    <td>Desa</td>
                    <td className="px-4">:</td>
                    <td>Padangan</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td className="px-4">:</td>
                    <td>Jl. Raya Bangsing-Padangan, Br. Dinas Padangan Kawan, Desa Padangan</td>
                  </tr>
                  <tr>
                    <td>Nama Kepala Desa</td>
                    <td className="px-4">:</td>
                    <td>Ir. I Wayan Warditha</td>
                  </tr>
                  <tr>
                    <td>Nomor Sertifikat Pendirian</td>
                    <td className="px-4">:</td>
                    <td>AHU-00260.AH.01.33.Tahun 2023</td>
                  </tr>
                </table>

                <h2 className="font-bold text-xl mt-5">Struktur Organisasi</h2>
                <img alt="struktur-organisasi" src={ Struktur } className="mt-10"></img>
            </div>
        </>
    )
}

import hero from "../assets/hero.jpg"
import { BiChevronRight } from "react-icons/bi"

export default function Landing() {
    return (
        <div>
            <div id="hero" className="w-full flex flex-col text-center md:text-left content-center pt-28 md:pt-48 md:leading-loose">
                <h3 className="font-semibold text-md text-white md:ml-16">Badan Usaha Milik Desa</h3>
                <h1 className="text-2xl font-semibold mt-1 text-white md:ml-16 md:text-4xl">Sejahtera Mandiri <span className="md:text-lime-400">Padangan</span></h1>
                <p className="text-xs mt-3 text-white md:ml-16 md:text-sm">Nomor Sertifikat Pendirian: AHU-00260.AH.01.33.Tahun 2023</p>
                <a href="https://wa.link/m8w4bw" target="_blank" rel="noreferrer" id="cta-cover" className="md:ml-16 flex mt-10 justify-center md:justify-start">
                    <div id="cta" className="py-2 text-white font-semibold bg-lime-800 hover:bg-lime-900 w-40 text-center">Hubungi Kami</div>
                    <div className="w-10 bg-green-700 text-white flex justify-center content-center">
                        <BiChevronRight className="h-full w-8" />
                    </div>
                </a>
                <div className="fixed top-0 -z-10 h-96 md:h-screen w-screen">
                    <img className="object-cover h-full lg:w-screen" alt="" src={hero}></img>
                </div>
            </div>

            <div id="about" className="bg-lime-900 py-14 md:py-36 text-white mt-12 md:mt-72 flex flex-col text-center px-5 md:px-64">
                <h1 className="font-semibold text-2xl md:text-3xl">Apa itu BUMDes</h1>
                <p className="font-normal mt-5 text-slate-200 text-sm md:text-base">Badan Usaha Milik Desa atau BUMDes adalah suatu bentuk badan usaha yang dimiliki dan dijalankan oleh masyarakat desa. BUMDes didirikan untuk mengembangkan potensi ekonomi di desa dan meningkatkan kesejahteraan masyarakat setempat.</p>
            </div>

            <div id="unit-usaha" className="py-14 md:py-28 z-10 bg-white">
                <div id="section-title" className="text-center">
                    <h1 className="font-semibold text-2xl md:text-3xl text-lime-900">Unit Usaha</h1>
                    <h2 className="font-semibold text-md mt-3">BUMDes Sejahtera Mandiri Padangan</h2>
                </div>
                <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center items-center">
                    <div className="unit-usaha-list relative overflow-hidden w-80 h-96 bg-cover rounded-lg" style={{ backgroundImage: 'url("/perdagangan.jpeg")' }}>
                        <div className="w-80 h-96 top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black opacity-40 hover:opacity-0 transition-all"></div>
                        <p className="z-20 absolute bottom-3 left-3 font-bold text-white text-xl">Perdagangan</p>
                    </div>
                    <div className="unit-usaha-list relative overflow-hidden w-80 h-96 bg-cover rounded-lg" style={{ backgroundImage: 'url("/jasa.jpeg")' }}>
                        <div className="w-80 h-96 top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black opacity-40 hover:opacity-0 transition-all"></div>
                        <p className="z-20 absolute bottom-3 left-3 font-bold text-white text-xl">Jasa</p>
                    </div>
                    <div className="unit-usaha-list relative overflow-hidden w-80 h-96 bg-cover rounded-lg" style={{ backgroundImage: 'url("/perkebunan.jpeg")' }}>
                        <div className="w-80 h-96 top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black opacity-40 hover:opacity-0 transition-all"></div>
                        <p className="z-20 absolute bottom-3 left-3 font-bold text-white text-xl">Perkebunan</p>
                    </div>
                    <div className="unit-usaha-list relative overflow-hidden w-80 h-96 bg-cover rounded-lg" style={{ backgroundImage: 'url("/peternakan.jpeg")' }}>
                        <div className="w-80 h-96 top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black opacity-40 hover:opacity-0 transition-all"></div>
                        <p className="z-20 absolute bottom-3 left-3 font-bold text-white text-xl">Peternakan</p>
                    </div>
                    <div className="unit-usaha-list relative overflow-hidden w-80 h-96 bg-cover rounded-lg" style={{ backgroundImage: 'url("/aqua-gelas.webp")' }}>
                        <div className="w-80 h-96 top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black opacity-40 hover:opacity-0 transition-all"></div>
                        <p className="z-20 absolute bottom-3 left-3 font-bold text-white text-xl">Unit Usaha Air Minum</p>
                    </div>
                </div>
            </div>

            <div id="office" className="flex flex-col md:flex-row bg-white z-10 pb-20 md:px-36 items-center md:gap-5">
                <div id="section-title" className="px-16 md:px-0 text-lime-900">
                    <h1 className="font-semibold text-3xl md:text-4xl">Kantor BUMDes</h1>
                    <h2 className="font-semibold text-md mt-1">Sejahtera Mandiri Padangan</h2>
                    <p className="text-slate-700 text-sm mt-5">Jl. Raya Bangsing-Padangan, Br. Dinas Padangan Kawan, Desa Padangan, Kecamatan Pupuan, Kabupaten Tabanan, Bali</p>
                </div>
                <iframe title="bumdes-location" className="mt-10 md:mt-0 w-screen px-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.456056651572!2d115.01109147373099!3d-8.356716391680177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2291fd79136e9%3A0xb45f1d5f1cbb36d8!2sBUMDES%20PADANGAN!5e0!3m2!1sid!2sid!4v1692636856292!5m2!1sid!2sid" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

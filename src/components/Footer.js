import Logo from "../assets/logo.png"

export default function Footer() {
    return (
        <>
            <div className="bg-white text-black px-10 md:px-36 py-10 md:py-16 flex flex-col md:justify-between md:flex-row gap-8">
                <div id="left-footer">
                    <div className="flex font-semibold text-xl gap-5">
                        <img src={Logo} alt="logo" className="w-20 h-20"></img>
                        <p>BUMDes Sejahtera<br></br>Mandiri Padangan</p>
                    </div>
                    <p className="text-sm w-80 mt-5 text-slate-700 md:leading-loose">Website Resmi BUMDes Sejahtera Mandiri Padangan Desa Padangan, Kecamatan Pupuan, Kabupaten Tabanan</p>
                </div>
                <div id="middle-footer">
                    <h2 className="font-semibold text-xl text-lime-900">Unit Usaha</h2>
                    <ul className="list-inside list-disc text-sm mt-2 text-slate-700 md:leading-loose">
                        <li>Perdagangan</li>
                        <li>Jasa</li>
                        <li>Perkebunan</li>
                        <li>Peternakan</li>
                        <li>Unit Usaha Air Minum</li>
                    </ul>
                </div>
                <div id="right-footer" className="md:w-80 md:leading-loose">
                    <h2 className="font-semibold text-xl text-lime-900">Kontak</h2>
                    <h3 className="font-semibold mt-2 text-lime-900">Alamat</h3>
                    <p className="text-sm text-slate-700">Jl. Raya Bangsing-Padangan, Br. Dinas Padangan Kawan, Desa Padangan, Kecamatan Pupuan, Kabupaten Tabanan, Bali</p>
                    <h3 className="font-semibold mt-2 text-lime-900">Email</h3>
                    <p className="text-sm text-slate-700">Bumdes_sm.padangan16@yahoo.com</p>
                    <h3 className="font-semibold mt-2 text-lime-900">Whatsapp</h3>
                    <p className="text-sm text-slate-700">081237770630</p>
                </div>
            </div>
            <div className="h-20 bg-black text-white flex justify-center items-center text-xs sm:text-sm">
                <p>© BUMDes Sejahtera Mandiri Padangan, All rights reserved</p>
            </div>
        </>
    )
}

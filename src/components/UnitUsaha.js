import mountain from "../assets/mountain.jpg"

export default function UnitUsaha() {
    return (
        <>
            <div className="md:h-48 overflow-hidden">
                <img src={mountain} alt="mountain"></img>
            </div>

            <div id="unit-usaha" className="md:px-36 px-10 py-10 leading-loose">
                <h1 className="text-3xl font-bold text-slate-950">Unit Usaha</h1>
                <ol className="list-decimal list-inside mt-5">
                    <li className="font-semibold">Perdagangan</li>
                    <ul className="list-disc list-inside ml-8">
                        <li>Pupuk dan obat-obat pertanian</li>
                        <li>Alat tulis kantor (ATK)</li>
                        <li>Pakan ternak</li>
                        <li>Wifi desa</li>
                    </ul>

                    <li className="font-semibold">Jasa</li>
                    <ul className="list-disc list-inside ml-8">
                        <li>Jasa Keuangan</li>
                        <ol className="list-decimal list-inside ml-16">
                            <li>Jasa pinjam</li>
                            <li>Tarik tunai dan transfer</li>
                            <li>Pembayaran Pajak Bumi dan Bangunan (PBB)</li>
                        </ol>

                        <li>Kredit pakan ternak</li>
                        <li>Kredit pupuk dan alat pertanian</li>
                        <li>Fotocopy</li>
                    </ul>


                    <li className="font-semibold">Perkebunan</li>
                    <ul className="list-disc ml-8">
                        <li>Pertanian alpukat dan durian</li>
                        <li>Penanaman nilam</li>
                    </ul>

                    <li className="font-semibold">Peternakan</li>
                    <ul className="list-disc ml-8">
                        <li>Ternak sapi</li>
                        <li>Ternak babi</li>
                    </ul>

                    <li className="font-semibold">Unit Usaha Air Minum</li>
                </ol>
            </div>
        </>
    )
}

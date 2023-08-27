import hero from "../assets/hero.jpg"
import kantor from "../assets/kantor bumdes.jpeg"
import perkebunan from "../assets/perkebunan.jpeg"
import peternakan from "../assets/peternakan.jpeg"
import jasa from "../assets/jasa.jpeg"
import perdagangan from "../assets/perdagangan.jpeg"
import mountain from "../assets/mountain.jpg"

export default function Galeri() {
    return (
        <>
            <div className="md:h-48 overflow-hidden">
                <img src={mountain} alt="mountain"></img>
            </div>
            
            
            <h1 className="md:px-36 px-10 md:py-10 py-5 text-3xl font-bold text-slate-950">Galeri</h1>
            <div id="galeri" className="md:px-36 px-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={hero} alt="pertanian"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={kantor} alt="kantor"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={perkebunan} alt="perkebunan"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={peternakan} alt="peternakan"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={jasa} alt="jasa"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={perdagangan} alt="perdagangan"></img>
                </div>
            </div>
        </>
    )
}

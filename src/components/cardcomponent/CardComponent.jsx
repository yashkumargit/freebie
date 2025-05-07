import React from 'react';
import icon1 from '../assets/1.png';
import icon2 from '../assets/2.png';
import icon3 from '../assets/3.png';
import icon4 from '../assets/4.png';
import id1 from '../assets/id1.png';
import id2 from '../assets/id2.png';
import id3 from '../assets/id3.png';
import id4 from '../assets/id4.png';
import './CardStyles.css';
import Commonbtn from './Commonbtn';

const cards = [
  { id: id1, icon: icon1, title: 'Phasellus Vitae', subtitle: 'Porttitor Vitae Vel Amet', bg: 'bg-white', shift: 'translate-y-3' },
  { id: id2, icon: icon2, title: 'Iaculis Magna', subtitle: 'Negue Scelerisque Mattis.', bg: 'bg-[#f9b800]', shift: 'translate-y-1/3' },
  { id: id3, icon: icon3, title: 'Eleifend Pulvinar', subtitle: 'Consectetur Nibh Velt', bg: 'bg-[#f9b800]', shift: 'translate-y-3' },
  { id: id4, icon: icon4, title: 'Velit Odio Phir', subtitle: 'Magna Consectetur Leo.', bg: 'bg-white', shift: 'translate-y-1/3' },
];

export default function CardComponent() {
  return (
    <div className="relative z-10 bg-[#262626] h-[700px] rounded-[90px] py-12 px-6 md:px-20 max-w-[1400px] mx-auto text-white overflow-visible mt-40">
      <div className="flex flex-col md:flex-row justify-between gap-10 ">
        <div className="grid grid-cols-2 gap-x-10 gap-y-14">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`group relative w-[300px] p-10 rounded-[50px] shadow-md flex flex-col justify-between overflow-hidden ${c.bg} text-black transform ${c.shift}`}
            >
              {/* dome overlay */}
              <div className="overlay" />

              {/* content */}
              <div className="relative z-20 group-hover:text-white transition-colors duration-300">
                <img src={c.icon} alt="" className="w-10 h-10 mb-4" />
                <img src={c.id} alt="" className="w-12 h-20 mb-4" />
                <h2 className="font-bold text-2xl mb-2">{c.title}</h2>
                <p className="text-xl font-semibold mb-1">Quisque</p>
                <p className="text-l">{c.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* right text */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left pl-20">
            <p className="text-sm text-[#f9b800] font-medium">
            Quisque porttitor vitae vel amet neque scelerisque mattis.
            Consectetur nibh velit magna consectetur leo.
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight pb-10">
            Cursus Integer Conseq <br /> Aliquam Tristique.
          </h1>
          <Commonbtn props="bg-white text-black" shadow="yellow" />
        </div>
      </div>
    </div>
  );
}

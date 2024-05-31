import React, { useState, useRef } from 'react';
import { EnvelopeSimple, LinkedinLogo, GitlabLogo, X } from '@phosphor-icons/react';
import Menu from './menu';
import './App.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [certificadoURL, setCertificadoURL] = useState('');
  const modalRef = useRef(null);

  const openModal = (url) => {
    setCertificadoURL(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCertificadoURL('');
  };

  const handleCloseModalOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Menu />
      <aside className="lg:w-1/2 bg-zinc-950 bg-opacity-25 backdrop-blur-none p-8">
        <div className="flex flex-col justify-center items-center lg:items-start">
           <img
               src="data:image/jpeg;base64,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"
               className="rounded-full w-72 h-72"
               alt="Descrição da imagem"
            />
          <h1 className="text-white text-5xl lg:text-8xl mt-10">OLAVO<br /> REGIS</h1>
          <div className="mt-14 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-amber-400">OBJETIVO:</h1>
            <p className="mt-5 text-xl lg:text-4xl text-white p-2">
              Em busca de uma oportunidade para iniciar minha carreira e adquirir experiência, estou comprometido em aprender e crescer rapidamente, contribuindo com dedicação em um ambiente de trabalho desafiador.
            </p>
          </div>
          <div className="mt-14 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-amber-400">EDUCAÇÃO:</h1>
            <ul className="mt-5 text-xl lg:text-4xl text-white">
              <li className="p-2">Ensino Médio Completo</li>
              <li className="p-2">Cursando: Análises e Desenvolvimento de Sistemas</li>
            </ul>
          </div>
          <div className="mt-14 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-amber-400">LÍNGUAS:</h1>
            <ul className="mt-5 text-xl lg:text-4xl text-white">
              <li className="p-2">Português - Nativo</li>
              <li className="p-2">Inglês - Básico</li>
              <li className="p-2">Espanhol - Básico</li>
            </ul>
          </div>
          <div className="mt-14">
            <h1 className="text-3xl lg:text-5xl text-amber-400">Contatos:</h1>
            <ul className="mt-5 text-xl lg:text-4xl text-white">
              <li className="flex items-center justify-center lg:justify-start ml-0 lg:ml-9 h-fit hover:text-blue-700">
                <EnvelopeSimple size={30} />
                <a href="mailto:olavopereira182@gmail.com" className="ml-1 p-2">Olavopereira182@gmail.com</a>
              </li>
              <li className="flex items-center justify-center lg:justify-start ml-0 lg:ml-9 h-fit hover:text-blue-700">
                <LinkedinLogo size={32} />
                <a href="https://www.linkedin.com/in/olavo-regis-22b57b297/" className="ml-1 p-2">Olavo Regis</a>
              </li>
              <li className="flex items-center justify-center lg:justify-start ml-0 lg:ml-9 h-fit hover:text-blue-700">
                <GitlabLogo size={32} />
                <a href="https://github.com/Olavo15" className="ml-1 p-2">Olavo15</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <section className="lg:w-1/2 bg-blue-600 bg-opacity-25 p-8">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div className="mt-2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-amber-400">CURSOS<br /> COMPLEMENTARES:</h1>
            <hr />
            <ul className="mt-5 text-xl lg:text-4xl text-white">
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/MW9DBXQM.pdf")}>Python Data Analytics</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/SMY0H5IP.pdf")}>Introdução a Banco de Dados NoSQL</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/2AJFY45C.pdf")}>Introdução a Análise de Dados com SQL (SQL)</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/2V3MOU4M.pdf")}>Introdução a Banco de Dados Relacionais (SQL)</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/STAKFUOQ.pdf")}>Primeiros Passos em SQL e NoSQL</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/F1RNEOD9.pdf")}>Fundamentos Teóricos Sobre ETL</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/46ZTOWTA.pdf")}>Fundamentos de BI: KPIs e Métricas</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/QDIYJWJL.pdf")}>Conhecendo a Linguagem de Programação Python</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/HJJWX1CD.pdf")}>Princípios de Desenvolvimento de Software Colaborativo</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/RHFN1M0K.pdf")}>Python Essencial e Desenvolvimento Colaborativo com Git</li>
            </ul>
          </div>
          <div className="mt-14 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-amber-400">HABILIDADES:</h1>
            <hr/>
            <ul className="mt-5 text-4xl text-white list-disc">
              <li className="ml-16 p-1">Informática básica</li>
              <li className="ml-16 p-1">Linux</li>
              <li className="ml-16 p-1">Kali</li>
              <li className="ml-16 p-1">Windows</li>
              <li className="ml-16 p-1">Word</li>
              <li className="ml-16 p-1">Power Bi</li>
              <li className="ml-16 p-1">Git</li>
              <li className="ml-16 p-1">VSCode</li>
              <li className="ml-16 p-1">Figma</li>
              <li className="ml-16 p-1">React</li>
              <li className="ml-16 p-1">Typescript</li>
              <li className="ml-16 p-1">Tailwindcss</li>
              <li className="ml-16 p-1">HTML5</li>
              <li className="ml-16 p-1">CSS3</li>
              <li className="ml-16 p-1">JavaScript</li>
              <li className="ml-16 p-1">Python</li>
              <li className="ml-16 p-1">SQL</li>
              <li className="ml-16 p-1">NoSQL</li>
              
            </ul>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-container" onClick={handleCloseModalOutside}>
          <div className="modal" ref={modalRef}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}><X size={25} /></span>
              <iframe title="Certificado" src={certificadoURL} width="1250" height="860"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { EnvelopeSimple, LinkedinLogo, GitlabLogo } from '@phosphor-icons/react';
import './App.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [certificadoURL, setCertificadoURL] = useState('');

  const openModal = (url) => {
    setCertificadoURL(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCertificadoURL('');
  };

  return (
    <div className="flex w-full h-full">
      <aside className="w-full h-full bg-zinc-950 bg-opacity-25 backdrop-blur-none">
        <div className="flex flex-col justify-center bg-blue-950 bg-opacity-25 drop-shadow-md p-8 h-full">
          <img
            src="https://img.freepik.com/fotos-premium/o-homem-da-mascara-de-corvo_264411-7628.jpg?w=1380"
            className="rounded-full w-72 h-72"
            alt="Descrição da imagem"
          />
          <h1 className="text-white text-8xl mt-10">OLAVO<br/> REGIS</h1>
          <div className="mt-14">
            <h1 className="text-5xl text-amber-400">OBJETIVO:</h1>
            <p className="mt-5 text-4xl text-white ml-16 p-2">
              Em busca de uma oportunidade para iniciar minha carreira e adquirir experiência, estou comprometido em aprender e crescer rapidamente, contribuindo com dedicação em um ambiente de trabalho desafiador.
            </p>
          </div>
          <div className="mt-14">
            <h1 className="text-5xl text-amber-400">EDUCAÇÃO:</h1>
            <ul className="mt-5 text-4xl text-white list-disc ml-16">
              <li className="p-2">Ensino Médio Completo</li>
              <li className="p-2">Cursando: Análises e Desenvolvimento de Sistemas</li>
            </ul>
          </div>
          <div className="mt-14">
            <h1 className="text-5xl text-amber-400">LÍNGUAS:</h1>
            <ul className="mt-5 text-4xl text-white list-disc ml-16">
              <li className="p-2">Português - Nativo</li>
              <li className="p-2">Inglês - Básico</li>
              <li className="p-2">Espanhol - Básico</li>
            </ul>
          </div>
          <div className="mt-14">
            <h1 className="text-5xl text-amber-400">Contatos:</h1>
            <ul className="mt-5 text-4xl text-white d-flex justify-content-center">
              <div className="ml-9 h-fit flex items-center hover:text-blue-700">
                <EnvelopeSimple size={30} />
                <a href="mailto:olavopereira182@gmail.com" className="ml-1 p-2">Olavopereira182@gmail.com</a>
              </div>
              <div className="ml-9 h-fit flex items-center hover:text-blue-700">
                <LinkedinLogo size={32} />
                <a href="https://www.linkedin.com/in/olavo-regis-22b57b297/" className="ml-1 p-2">Olavo Regis</a>
              </div>
              <div className="ml-9 h-fit flex items-center hover:text-blue-700">
                <GitlabLogo size={32} />
                <a href="https://github.com/Olavo15" className="ml-1 p-2">Olavo15</a>
              </div>
            </ul>
          </div>
        </div>
      </aside>
      <section className="w-full h-full bg-blue-600 bg-opacity-25 drop-shadow-none">
        <div className="flex flex-col justify-center  bg-opacity-25 drop-shadow-md p-8">
          <div className="mt-2">
            <h1 className="text-5xl text-amber-400">CURSOS<br/> COMPLEMENTARES:</h1>
            <hr/>
            <ul className="mt-5 text-4xl h-full text-white list-disc">
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/Introdução a Banco de DadosSQL.png")}>Introdução a Banco de Dados Relacionais (SQL)</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/Introdução a Banco de Dados.png")}>Introdução a Banco de Dados NoSQL</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/Primeiros Passos em SQL e NoSQL.png")}>Primeiros Passos em SQL e NoSQL</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/Introdução a Análise de Dados.png")}>Introdução a Análise de Dados com SQL</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/Fundamentos de Business.png")}>Fundamentos de Business Intelligence (BI)</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/Introdução à Ciência de Dados.png")}>Introdução à Ciência de Dados com Python</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/Fundamentos Teóricos Sobre ETL.png")}>Fundamentos Teóricos Sobre ETL</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("URL_CERTIFICADO_CURSO_7")}>Programação Python do Zero ao Avançado + Projetos Reais 2024</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/Version.png")}>Versionamento de Código com Git e GitHub</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/Bd:Modelagem.png")}>Banco de Dados: Da modelagem à SQL com PostgreSQL</li>
              <li className="p-2 ml-16 hover:text-blue-700" onClick={() => openModal("Figure/TcVPB.png")}>Trabalhando com Visuais no Power BI</li>
            </ul>
          </div>
          <div className="mt-14">
            <h1 className="text-5xl text-amber-400">HABILIDADES:</h1>
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
              <li className="ml-16 p-1">Python</li>
            </ul>
          </div>
        </div>
      </section>


      {showModal && (
        <div className="modal-container">
          <div className="modal"> 
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <iframe title="Certificado" src={certificadoURL} width="1200" height="855"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

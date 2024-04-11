import { EnvelopeSimple, LinkedinLogo, GitlabLogo } from '@phosphor-icons/react';

export default function App() {

  return (
    <div className="flex w-full h-full">
      <aside className="flex-1 h-full bg-zinc-950 bg-opacity-25 backdrop-blur-none">
        <div className="flex flex-col justify-center  bg-blue-950 bg-opacity-25 drop-shadow-md p-8 h-full">
          
          <img
            src="https://img.freepik.com/fotos-premium/o-homem-da-mascara-de-corvo_264411-7628.jpg?w=1380"
            className="rounded-full w-72 h-72"
            alt="Descrição da imagem"
          />

          <h1 className="text-white text-8xl mt-10 ">OLAVO<br/> REGIS</h1>

          <div className="mt-14">
            <h1 className="text-5xl text-amber-400">OBJETIVO:</h1>
            <p className="mt-5 text-4xl text-white ml-16">
              Em busca de uma oportunidade para
              iniciar minha carreira e adquirir
              experiência, estou comprometido em
              aprender e crescer rapidamente,
              contribuindo com dedicação em um
              ambiente de trabalho desafiador.
            </p>
          </div>
          
          <div className="mt-14 ">
            <h1 className="text-5xl text-amber-400">EDUCAÇÃO:</h1>
            <ul className="mt-5 text-4xl text-white list-disc">
              <li className="ml-16">Ensino Médio Completo</li>
              <li className="ml-16">Cursando: Análises e Desenvolvimento de Sistemas</li>
            </ul>          
          </div>
          <div className="mt-14">
            <h1 className="text-5xl text-amber-400">LÍNGUAS:</h1>
            <ul className="mt-5 text-4xl text-white list-disc">
              <li className="ml-16">Português - Nativo</li>
              <li className="ml-16">Inglês - Básico</li>
              <li className="ml-16">Espanhol - Básico</li>
            </ul>
          </div>
            <div className="mt-14">
              <h1 className="text-5xl text-amber-400">Contatos:</h1>
              <ul className="mt-5 text-4xl text-white d-flex justify-content-center">
                <div className='ml-9 h-fit flex items-center hover:text-blue-700'>
                  <EnvelopeSimple size={30} />
                  <a href="mailto:olavopereira182@gmail.com" className='ml-1'>Olavopereira182@gmail.com</a>
                </div>
                <div className='ml-9 h-fit flex items-center  hover:text-blue-700'>
                  <LinkedinLogo size={32} />
                  <a href="https://www.linkedin.com/in/olavo-regis-22b57b297/" className='ml-1'>Olavo Regis</a>
                </div>
                <div className='ml-9 h-fit flex items-center hover:text-blue-700'>
                  <GitlabLogo size={32} />
                  <a href="https://github.com/Olavo15" className='ml-1'>Olavo15</a>
                </div>
              </ul>
            </div>
        </div>
      </aside>
      <section className="flex-1 h-full bg-zinc-950 bg-opacity-25 drop-shadow-none">
        <div className="flex flex-col justify-center bg-blue-600 bg-opacity-25 drop-shadow-md p-8 h-full">
          <div className="mt-2">
            <h1 className="text-5xl text-amber-400">CURSOS<br/> COMPLEMENTARES:</h1>
            <hr/>
            <ul className="mt-5 text-4xl text-white list-disc">
              <li className="ml-16" onClick={() => ("https://www.dio.me/certificate/2AJFY45C/share")}>Introdução a Banco de Dados Relacionais (SQL)</li>
              <li className="ml-16" onClick={() => ("https://www.dio.me/certificate/SMY0H5IP/share")}>Introdução a Banco de Dados NoSQL</li>
              <li className="ml-16" onClick={() => ("https://www.dio.me/certificate/STAKFUOQ/share")}>Primeiros Passos em SQL e NoSQL</li>
              <li className="ml-16" onClick={() => ("https://www.dio.me/certificate/2V3MOU4M/share")}>Introdução a Análise de Dados com SQL</li>
              <li className='ml-16' onClick={() => ("https://www.dio.me/certificate/WOLXJ3YF/share")}>Fundamentos de Business Intelligence (BI)</li>
              <li className='ml-16' onClick={() => ("https://www.dio.me/certificate/L9ZGW418/share")}>Introdução à Ciência de Dados com Python</li>
              <li className='ml-16' onClick={() => ("URL_CERTIFICADO_CURSO_7")}>Programação Python do Zero ao Avançado + Projetos Reais 2024</li>
            </ul>
          </div>
          <div className="mt-14">
            <h1 className="text-5xl text-amber-400">HABILIDADES:</h1>
            <hr/>
            <ul className="mt-5 text-4xl text-white list-disc">
              <li className="ml-16">Informática básica</li>
              <li className="ml-16">Linux</li>
              <li className="ml-16">Kali</li>
              <li className="ml-16">Windows</li>
              <li className='ml-16'>Word</li>
              <li className='ml-16'>Power Bi</li>
              <li className='ml-16'>Git</li>
              <li className='ml-16'>VSCode</li>
              <li className='ml-16'>Figma</li>
              <li className='ml-16'>React</li>
              <li className='ml-16'>Typescript</li>
              <li className='ml-16'>Tailwindcss</li>
              <li className='ml-16'>HTML5</li>
              <li className='ml-16'>CSS3</li>
              <li className='ml-16'>Python</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

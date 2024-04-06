export default function App() {
  return (
    <div className="flex w-full h-full">
      <section className="bg-brancocustom1 w-3/4 h-full p-3 ">

        <aside className="h-screen w-full bg-zinc-950 bg-opacity-25 backdrop-blur-none">
           <div className="bg-blue-300 bg-opacity-25 rounded-lg shadow-lg p-8 border-double mt-4 mx-4 drop-shadow-md">
           <div className="bg-black rounded-full w-72 h-72 mt-16 mx-5 flex items-center justify-center">
                <img src="https://media.moneytimes.com.br/uploads/2020/09/hydra1.jpg" className="rounded-full w-full h-full" alt="Descrição da imagem" />
           </div>

            <h1 className="text-white text-8xl mt-20 mx-5">OLAVO<br/> REGIS</h1>
            <div className="mt-10 mx-5 ">
              <h1 className="text-5xl text-amber-400">EDUCAÇÃO:</h1>
              <ul className="mt-5 my-10 text-4xl text-white">
                <li>Ensino Médio Completo</li>
                <li>Cursando: Análises e Desenvolvimento de Sistemas</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
      <section className="bg-brancocustom1 w-full h-full p-3">

      </section>
    </div>
  );
}

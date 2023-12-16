
import React, { useState } from 'react';
import { Nav } from '../Components/Nav'
import { Footer } from '../Components/Footer';
const questionsData = [
  {
    question: 'Qual é a sua cor favorita?',
    options: ['A) Azul', 'B) Vermelho', 'C) Verde', 'D) Amarelo'],
  },
  {
    question: 'O que você prefere fazer nas férias?',
    options: ['A) Viajar para a praia', 'B) Explorar cidades históricas', 'C) Praticar esportes ao ar livre', 'D) Relaxar em casa'],
  },
  {
    question: 'Se você pudesse ter um superpoder, qual seria?',
    options: ['A) Voar', 'B) Invisibilidade', 'C) Telepatia', 'D) Superforça'],
  },
  {
    question: 'Qual é o seu estilo musical favorito?',
    options: ['A) Rock', 'B) Hip-hop', 'C) Eletrônica', 'D) Jazz'],
  },
];
function Quiz() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostaAtual, setRespostaAtual] = useState(null);
  const [respostasUsuario, setRespostasUsuario] = useState([]);

  const registrarResposta = () => {
    // Armazena a resposta apenas se foi selecionada
    if (respostaAtual !== null) {
      setRespostasUsuario([...respostasUsuario, respostaAtual]);
      setRespostaAtual(null); // Limpa a resposta atual após registrar
      setPerguntaAtual(perguntaAtual + 1); // Avança para a próxima pergunta
    }
  };


  const renderizarCartaoDeResultado = () => {
    const calcularResultado = () => {
     // Lógica para calcular o resultado com base nas respostas do usuário (exemplo simples)
  const countA = respostasUsuario.filter(resposta => resposta === 'A').length;
  const countB = respostasUsuario.filter(resposta => resposta === 'B').length;
  const countC = respostasUsuario.filter(resposta => resposta === 'C').length;
  const countD = respostasUsuario.filter(resposta => resposta === 'D').length;

  // Encontre o valor máximo
  const maxCount = Math.max(countA, countB, countC, countD);

  // Crie um array com as opções que têm o mesmo valor máximo
  const empatados = ['A', 'B', 'C', 'D'].filter(opcao => {
    return (
      (opcao === 'A' && countA === maxCount) ||
      (opcao === 'B' && countB === maxCount) ||
      (opcao === 'C' && countC === maxCount) ||
      (opcao === 'D' && countD === maxCount)
    );
  });

  // Exemplo de lógica simples para determinar o resultado
  if (empatados.length === 1) {
    if(empatados[0]==="A"){
      return `Pelo visto vc escolheu muito a letra A ;)`;
    }
    if(empatados[0]==="B"){
      return `Pelo visto vc escolheu muito a letra B ;)`;
    }
    if(empatados[0]==="C"){
      return `Pelo visto vc escolheu muito a letra D ;)`;
    }
    if(empatados[0]==="D"){
      return `Pelo visto vc escolheu muito a letra C ;)`;
    }
  } else if (empatados.length > 1) {
    return `Empate entre ${empatados.join(' e ')} INDECISO`;
  } else {
    return 'Sem resultados válidos';
  }
    };

    const resultado = calcularResultado();

    return (
      <div className='bg-[#113859] rounded-3xl text-blue-gray-50 min-w-[400px] w-[60%] py-7 flex flex-col gap-7 items-center'>
        <h2 className='text-3xl font-extrabold '>Resultado Final:</h2>
        <p className='font-semibold text-lg'>{resultado}</p>
      </div>
    );
  };

  return (
    <main className='w-screen h-[calc(100vh-101px)] md:h-[calc(100vh-51px)] '>
      <Nav tema={"escuro"} absoluto={"1"} />
      <section className='bg-[#1D4B73] flex h-full justify-center items-center'>
  {perguntaAtual < questionsData.length ? (
    <div className='bg-[#113859] rounded-3xl text-blue-gray-50 min-w-[400px] w-[60%] py-7 flex flex-col gap-7 items-center'>
      <h2 className='text-3xl font-extrabold '>{perguntaAtual + 1}º Pergunta</h2>
      <p className='font-semibold text-lg'>{questionsData[perguntaAtual].question}</p>
      <ul className='flex flex-col gap-3 justify-center items-center'>
        {questionsData[perguntaAtual].options.map((opcao, index) => (
          <li key={index}>
            <button
              className='w-[350px] p-3 btn relative inline-flex items-center overflow-hidden transition-all bg-[#C9F2E3] rounded-md hover:bg-[#C9F2E3] group focus:bg-[#6FA8BF] focus:text-blue-gray-50'
              onClick={() => setRespostaAtual(opcao.charAt(0))}
            >
              <span className="w-0 h-0 rounded-md bg-[#6FA8BF] absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className='w-full text-blue-gray-900 transition-colors duration-300 ease-in-out group-hover:text-blue-gray-50 z-10'>{opcao}</span>
            </button>
          </li>
        ))}
      </ul>
      {respostaAtual !== null && (
        <button onClick={registrarResposta}>Próximo</button>
      )}
    </div>
  ) : (
    renderizarCartaoDeResultado()
  )}
</section>

    </main>
  );
}

export default Quiz;
// BotonCalcular.jsx
export function BotonCalcular({ n1, n2 }) {
  const ejecutarSuma = () => {
    const resultado = Number(n1) + Number(n2);
      alert(`🚀 El resultado es: ${resultado}`);
  };

  return (
    <button onClick={ejecutarSuma} >
      Calcular Resultado
    </button>
  );
}
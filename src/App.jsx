import { useState, useEffect, useRef } from "react";
import Row from "./components/Row";
import OptionButton from "./components/OptionButton";
import "./App.css";

function App() {
  const [gameSize, setGameSize] = useState(0);
  const [indexArray, setIndexArray] = useState([]);
  const [valuesArray, setValuesArray] = useState([]);
  const [activeArray, setActiveArray] = useState([]);
  const [acum, SetAcum] = useState(0);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const inputRef = useRef(null);

  const handleGameSize = (value) => setGameSize(value);

  const handleClick = (itemValue, itemRow, itemColumn) => {
    setActiveArray({
      ...activeArray,
      ...(activeArray[itemRow][itemColumn] = true),
    });

    if (itemValue === 0) {
      setResult("Intenta de nuevo");
      setShowResult(true);
      inputRef.current.disabled = true;
      return;
    }

    SetAcum((prev) => prev + itemValue);
  };

  const generateArray = (totalItems) => {
    let newArray = Array();
    let grandTotal = 0;

    for (let i = 0; i < totalItems; i++) {
      newArray.push(i);
    }

    setIndexArray(newArray);

    const arrayValues = newArray.map(() => {
      return newArray.map(() => {
        const itemValue = Math.round(Math.random() * gameSize);
        grandTotal += itemValue;
        return itemValue;
      });
    });

    setTotal(grandTotal);

    const itemsActive = newArray.map(() => {
      return newArray.map(() => false);
    });

    setValuesArray({
      ...valuesArray,
      ...arrayValues,
    });

    setActiveArray({
      ...activeArray,
      ...itemsActive,
    });
  };

  const restartGame = () => {
    setGameSize(0);
    setIndexArray([]);
    setValuesArray([]);
    setActiveArray([]);
    setTotal(0);
    SetAcum(0);
    setResult(null);
    setShowResult(false);
    inputRef.current.value = "";
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  useEffect(() => {
    SetAcum(0);
    generateArray(gameSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameSize]);

  useEffect(() => {
    if (total > 0 && acum > 0 && acum === total) {
      setResult("¡Ganaste!");
      setShowResult(true);
      inputRef.current.disabled = true;
    }
  }, [total, acum]);

  return (
    <main>
      <h1>Buscaminas</h1>
      <h2>Elige el tamaño del tablero</h2>
      <input
        type="number"
        min="0"
        onChange={(e) => handleGameSize(e.target.value)}
        ref={inputRef}
      />
      <div className={showResult ? "disabled" : ""}>
        {gameSize > 0 &&
          indexArray.map((itemRow) => {
            const NewColumn = indexArray.map((itemColumn) => {
              return (
                <OptionButton
                  key={`item-${itemRow}-${itemColumn}`}
                  value={valuesArray[itemRow][itemColumn]}
                  showValue={activeArray[itemRow][itemColumn]}
                  handleClick={(value) =>
                    handleClick(value, itemRow, itemColumn)
                  }
                  disabled={activeArray[itemRow][itemColumn]}
                />
              );
            });
            return <Row key={`row-${itemRow}`}>{NewColumn}</Row>;
          })}
      </div>
      <h4>{acum > 0 ? `Acumulado: ${acum}` : ""}</h4>
      {showResult && <button onClick={restartGame}>{result}</button>}
    </main>
  );
}

export default App;

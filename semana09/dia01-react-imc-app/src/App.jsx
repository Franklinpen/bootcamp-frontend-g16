import { useState } from "react"

export default function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWeight = (event) => {
    const value = event.target.value
    setWeight(value)
  }

  const handleHeight = (event) => {
    const value = event.target.value
    setHeight(value)
  }

  const imcBody = weight / ((height / 100) ** 2)  

  const imcBodyResult = () => {
    let result = ''

    if (imcBody < 18.5) {
      result = 'Baja'
    } else if (imcBody >= 18.5 && imcBody <= 24.9) {
      result = 'Normal'
    } else if (25 < imcBody && imcBody < 29.9) {
      result = 'Sobrepeso'
    } else if (30 < imcBody) {
      result = 'Obeso'
    } else {
      result = 'Datos incorrectos'
    }

    return result
  }

  return (
    <section className="w-96 mx-auto my-5 bg-sky-500 rounded-md">
      <h1 className="text-3xl font-bold text-center text-white p-5">IMC Calculator</h1>

      <div className="bg-sky-200 p-5">
        <p className="font-bold">
          Weight: {weight} kg
        </p>
        <input 
        type="range"
        className="w-full"
        min="50" 
        max="200"
        // onChange={() => setWeight(100)}
        onChange={handleWeight}
        value={weight}

        />
      </div>
      <div className="bg-sky-200 p-5">
        <p className="font-bold">
          Height: {height} cm
        </p>
        <input 
        type="range"
        className="w-full"
        min="50" 
        max="200"
        onChange={handleHeight}
        value={height}
        />

        <p className="text-2xl font-bold bg-orange-400 text-center p-5 mt-5">
          Tu IMC es {imcBody.toFixed(2)}
        </p>

        <p className="text-2xl font-bold bg-orange-400 text-center p-5 mt-5">
          Estado de IMC: {imcBodyResult()}
        </p>
      </div>
    </section>
  )
}
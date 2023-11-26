"use client"
import { useCallback, useState } from "react"

export default function Home() {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*_-+=?/"
    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);

    }
    setPassword(pass);

  }, [setCharAllowed, length, numAllowed, setPassword]);

  return (

    <>
      <div className="bg-black w-full h-screen py-10">
        <div className=" w-full max-w-md mx-auto text-center shadow-md rounded-xl px-4 py-8 text-orange-400 bg-gray-700">
          <h1 className="text-white mb-4">Password Generator</h1>
          <div
            className="flex overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none text-gray-600 px-3 py-1 w-full rounded-l-lg"
              placeholder="password"
              readOnly />
            <button
              className="outline-none bg-blue-600 rounded-r-lg text-white px-3 py-0.5 shrink-0">Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range"
                min={6}
                max={32}
                value={length}
                className="cursor-pointer"
              />
              <label className="text-white">Length : {length}</label>
            </div>
            <div>
              <input type="checkbox"

                defaultChecked={numAllowed}

                id="numberInput"

                onChange={() => {
                  setNumAllowed((prev)=>!prev);}} />
                  <label htmlFor="numberInput" className="ml-1">Numbers</label>
            </div>
            <div>
              <input type="checkbox"

                defaultChecked={numAllowed}

                id="numberInput"

                onChange={() => {
                  setNumAllowed((prevVal)=>!prevVal);}} />
                  <label htmlFor="characterInput" className="ml-1">Symbols</label>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

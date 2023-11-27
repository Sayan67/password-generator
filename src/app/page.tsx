"use client"
import { useCallback, useEffect, useRef, useState } from "react"

export default function Home() {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null);
  const [copyState, setCopyState] = useState("Copy");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*_-+=?/"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass);

  }, [setCharAllowed, length, numAllowed, setPassword]);

  const copyPasswordToClip = useCallback(() => {
    if (copyState === "Copy") {
      setCopyState("Copied!");
      setTimeout(() => { setCopyState("Copy") }, 2000);
    }
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (

    <>
      <div className="bg-[url('https://images.pexels.com/photos/5475757/pexels-photo-5475757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover w-full h-screen">
        <div className="w-full h-screen bg-black bg-opacity-70 pt-40">
          <div className="gray-div bg-opacity-20 backdrop-blur-sm w-full max-w-md mx-auto text-center shadow-2xl rounded-xl px-4 py-8 text-orange-400 bg-white border-slate-400 border-2">
            <h1 className="text-white mb-4">Password Generator</h1>
            <div
              className="flex overflow-hidden mb-4">
              <input
                type="text"
                value={password}
                className="outline-none text-gray-600 px-3 py-1 w-full rounded-l-lg"
                placeholder="password"
                readOnly
                ref={passwordRef} />
              <button
                className="outline-none shadow-xl bg-blue-600 rounded-r-lg text-white px-3 py-0.5 shrink-0"
                onClick={
                  copyPasswordToClip}>{copyState}</button>
            </div>
            <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                <input type="range"
                  defaultValue={length}
                  min={6}
                  max={32}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e) => { setLength(e.target.value); }}

                />
                <label className="text-white">Length : {length}</label>
              </div>
              <div>
                <input type="checkbox"

                  defaultChecked={false}

                  id="numberInput"

                  onChange={() => {
                    setNumAllowed((prev) => !prev);
                  }} />
                <label htmlFor="numberInput" className="ml-1">Numbers</label>
              </div>
              <div>
                <input type="checkbox"

                  defaultChecked={false}

                  id="numberInput"

                  onChange={() => {
                    setCharAllowed((prevVal) => !prevVal);
                  }} />
                <label htmlFor="characterInput" className="ml-1">Symbols</label>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("")

  const { push } = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }

  return (
    <div className=" min-h-screen flex items-start justify-center bg-gray-100">
      <div className="p-4 my-auto shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-black"> Enter Your Name</h1>
        <form
          onSubmit={ handleSubmit }
          className="my-5 w-fit mx-auto space-y-3">
          <input
            type="text"
            value={ inputVal }
            className="w-full p-2 border-gray-300 rounded text-black"
            onChange={ e => setInputVal(e.target.value) }
            type="text" placeholder="Type your name..."
          />
          <br />
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded">Predict Data</button>
        </form>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { getQuote } from "./services/getQuote.js";

export default function App() {
  const [quotes, setQuotes] = useState("");

  const handleChangeQuote = () => {
    getQuote().then(setQuotes);
  };

  useEffect(() => {
    getQuote().then(setQuotes);
  }, []);

  return (
    <div id="home" className="text-[#f4f4f4] h-screen">
      <main className="w-full h-full flex justify-center items-center">
        <section className="w-[90%] md:w-[60%]">
          <div className="flex justify-center items-center flex-col">
            <div className="min-h-[144px] flex justify-center items-center mb-[2rem] text-center">
              <p className="text-[2rem] italic">{quotes.text}</p>
            </div>
            <button
              onClick={handleChangeQuote}
              className="bg-[#4c4c4c] py-[.75rem] px-[1.25rem] text-xl transition-all duration-300 ease-linear hover:bg-[#575757]"
            >
              New Quote
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

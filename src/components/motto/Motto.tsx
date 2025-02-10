"use client"
import { useState, useEffect, useRef } from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Motto() {
  const [wordCount, setWordCount] = useState<number>(0);
  const isInitialRender = useRef(true); //tracks if it is the inital render
  const wordCountRef = useRef(wordCount); // Use ref to track word count

  // console.log("WORD COUNT", wordCount)

  // react-simple-typewriter hook
  const [typeWriter, helper] = useTypewriter({
    words: ['scalability & growth', 'employee & customer retention', 'operational efficiency', 'legal compliance & risk management'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
    delaySpeed: 1500,
  } as {
    words: string[];
    loop: number | boolean;
    typeSpeed: number;
    deleteSpeed: number;
    delaySpeed: number;
  })

  const { isType, isDelete, isDelay } = helper;

  useEffect(() => {
    // sets isInitialRender to false upon the initial render
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    // increases wordCount once a word is fully deleted
    if (!isType && !isDelete && !isDelay) {
      setWordCount(prev => {
        const newWordCount = prev < 4 ? prev + 1 : 1; // Increment or reset
        wordCountRef.current = newWordCount; // Update ref
        return newWordCount;
      });
    }
  }, [isDelete, isType, isDelay])

  // cycles through styles in unison with words
  const handleStyle: (arg: number) => string = (wordCount) => {
    const stylesArr: string[] = [
      "text-red-600 text-2xl pl-6 font-extrabold italics font-serif",
      "text-yellow-600 text-2xl pl-6 font-mono",
      "text-green-800 text-2xl pl-6 font-thin font-sans",
      "text-purple-800 text-2xl pl-6",
    ]

    return stylesArr[wordCount - 1];
  }

  const resultingStyle = handleStyle(wordCount)

  // console.log("STYLE", resultingStyle)
  // console.log("WORDS STATUS", typeWriter)

  return (
    <div className="flex px-10 pt-20 pb-32">
      <div>
        <h1 className="text-2xl">Simplifying your path toward:</h1>
      </div>
      <div>
        <h1 className={resultingStyle}>{typeWriter}</h1>
      </div>
      <span className="text-2xl text-white-500">
        <Cursor cursorBlinking={true} cursorStyle="|" />
      </span>
    </div>
  );
}

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
    words: ['recruiting', 'restructing', 'sandwiches', 'SUCCESS'],
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
      "text-red-600 text-3xl pl-6 font-extrabold italics font-serif",
      "text-yellow-600 text-3xl pl-6 font-mono",
      "text-green-800 text-3xl pl-6 font-thin font-sans",
      "text-purple-800 text-3xl pl-6",
    ]

    return stylesArr[wordCount - 1];
  }

  const resultingStyle = handleStyle(wordCount)

  // console.log("STYLE", resultingStyle)
  // console.log("WORDS STATUS", typeWriter)

  return (
    <div className="flex flex-col px-10 py-52">
      <div>
        <h1 className="text-3xl">Simplifying your </h1>
      </div>
      <div className="flex flex-row items-center">
        <h1 className="text-3xl pl-20">path toward: </h1>
        <h1 className={resultingStyle}>{typeWriter}</h1>
        <span className="text-3xl text-white-500">
          <Cursor cursorBlinking={true} cursorStyle="|" />
        </span>
      </div>
    </div>
  );
}

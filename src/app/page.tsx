'use client'
import { useState, useEffect, useRef } from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {

  const [wordCount, setWordCount] = useState<number>(0);
  const isInitialRender = useRef(true); //tracks if it is the inital render

  // console.log("WORD INDEX", wordCount)

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
    if (!isType && !isDelete && !isDelay && wordCount <= 3) {
      setWordCount(prev => prev + 1)
    }
    // resets wordCount once the last word is fully deleted
    else if (!isType && !isDelete && !isDelay && wordCount > 3) {
      setWordCount(1)
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
    <div className="w-full h-screen">
      <div className="flex flex-col pt-36 px-10">
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
      <div>
      </div>


    </div>
  );
}

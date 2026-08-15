"use client";
import { useState } from "react";

export default function Home() {
  const array = [2.909, -1000, 0.12, 0.13, 1.233, 4.233, 54, 3, 7 , 2000, 10, 9 , 8];
  let pointer : number[] = [];
  const [result, setResult] = useState<number[]>([]);
  let min;

  function Caluculate(){
    // 最小値を取ってくる
    // 先頭と比較
    const aryMin = function(a : number, b: number){return Math.min(a, b);}
    min = array.reduce(aryMin);
    console.log("min",min);
  }

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div>元の入力</div>
        {array.map((value, i)=>(
          <div key={i}>{value}</div>
        ))}
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={()=>Caluculate()}>
        ソートするボタン
      </button>
      <div>ソート結果：</div>
      {result.map((value, i)=>(
        <div key={i}>{value},</div>
      ))}
    </>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const array = [2.909, -1, 0.12, 0.13, 1.233, 4.233, 54, 3, 7 , 2000, 10, 9 , 8];
  let pointer : number[] = [];
  const [result, setResult] = useState<number[]>([]);
  // 最初の1番左から、右隣を見る

  function Caluculate(){
    while(pointer.length !== array.length){
      for(let i = 0; i < array.length; i++){
        console.log("===");
        console.log(i + "巡目");
        console.log("【for文】array" + i + "は" + array[i]);
        console.log("【for文】arrayi+1" + "は" + array[i + 1]!);
        if(array[i] > array[i+1]){
          console.log("【if文】array" + i + "は" + array[i]);
          console.log("【if文】array")
          console.log(i+1)
          console.log("は" + array[i + 1]);
          [array[i], array[i+1]] = [array[i+1], array[i]];
          console.log("【if文結果】array" + i + "は" + array[i]);
          console.log("【if文結果】array")
          console.log(i+1)
          console.log("は" + array[i + 1]);
        }
        console.log("result:" + array);
        console.log("pointer" + pointer);
      }
      pointer.push(1);
    }
    setResult(array);
  }

  //一番最後のやつは確定

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

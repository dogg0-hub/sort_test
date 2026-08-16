"use client";
import { useState } from "react";

export default function Home() {
  const array = [209, 1, 12, 3, 1233, 4233, 54, 3, 7 , 2000, 10, 9 , 8];
  let pointer : number[] = [];
  const [result, setResult] = useState<number[]>([]);
  let min;
  let array_with_index : number[][] = [];

  function Caluculate(){
    // 最小値を取ってくる
    // 先頭と比較
    array_with_index.push([0, array[0]]);
    let min = array.reduce(function(accumulator, currentValue, currentIndex, array){
      console.log("reduce内：currentIndexは" + currentIndex + "、currentValueは" + currentValue);
      array_with_index.push([currentIndex, currentValue]);
      // array_with_index.push([currentIndex, array[currentIndex]]);
      return Math.min(accumulator, currentValue);
    });
     // accumulatorのcurrentIndexを入れたい
      
    min2 = array.filter((item, index)=>item);
    
    console.log("min",min);
    // ここで配列に番号がついた
    console.log("array_with_index", array_with_index);
    //最小値を取り出しつつ、それが配列の何番目か判断できるようにしないといけない
    // if(array[1] >){

    // }
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

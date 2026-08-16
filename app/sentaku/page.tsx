"use client";
import { useState } from "react";

export default function Home() {
  const array = [ 4 , 3, 2, 1, 6, 5];
  let pointer : number[] = [];
  let result : number[] = [];
  // const [result, setResult] = useState<number[]>([]);
  let min;
  let array_with_index : number[] = [];

  function Caluculate(){
    // 最小値を取ってくる DONE
    // 先頭と比較
    array_with_index[0]=array[0];

    for(let i = 0; i < array_with_index.length; i++){
    
      if(i === 0){
        min = array.reduce(function(accumulator, currentValue, currentIndex, array){
        console.log("reduce内：currentIndexは" + currentIndex + "、currentValueは" + currentValue);
          array_with_index.push(array[currentIndex]); 
        return Math.min(accumulator, currentValue);
      });
      }else{
        min = result.reduce(function(accumulator, currentValue, currentIndex, array){
        // console.log("reduce内：currentIndexは" + currentIndex + "、currentValueは" + currentValue);
        if(i == 0){
          array_with_index.push(array[currentIndex]); 
        }
        return Math.min(accumulator, currentValue);
      });
      }
    

    console.log("min",min);
    // ここで配列に番号がついた
    console.log("array_with_index", array_with_index);
    // 番号を取り出して、最小値を取ってくる
    let num = array_with_index.indexOf(min);
    console.log("arrayのminは" + array_with_index.indexOf(min) + "中身は" + array_with_index[num]);
    //最小値を取り出しつつ、それが配列の何番目か判断できるようにしないといけない DONE
    console.log("やるまえ" + array_with_index);
  
    
      if(array_with_index[i] > array_with_index[num]){
        console.log("やるまえ個別", array_with_index[i] + "," + array_with_index[num]);
        [array_with_index[i], array_with_index[num]] = [array_with_index[num], array_with_index[i]];
        console.log("やったあと", array_with_index[i] + "," + array_with_index[num]);
      }
      console.log("現時点は" + array_with_index);
      result = array_with_index.slice(i + 1);
      console.log("さいしゅう：",result);
    }
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

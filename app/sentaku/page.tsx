"use client";
import { useState } from "react";

export default function Home() {
  const array = [ 4, 5, 2,1,  1,1,3, 6, 9, 7, 8];
  let zantei : number[] = [];
  const [length, setLength] = useState(0);
  const [kijun, setKijun] = useState(0);
  let resultArray : number[] = [];
  let min, max;
  let array_with_index : number[] = [];
  let hantei;
  let test;
  let result;

  function Caluculate(){
    max = array.reduce(function(accumulator, currentValue, currentIndex, array){
          return Math.max(accumulator, currentValue);
        });

    console.log("hanteiさいしょ" + length);
    console.log("max" + max);
    //長さとマックスの値
    let num = array.indexOf(max);
    hantei = array[num]
    console.log("nummm", num);
    console.log("hantei", hantei)//9
    //9と端っこの値
    //indexが最後の数
    let temp = array[array.length - 1]
    setKijun(temp);
    console.log("kijun", kijun);
    // while(test < 10){
      // trueの間繰り返す
      for(let i = 0; i < array.length; i++){
        console.log("みん前", array_with_index);
        if(i < 0){
          min = array.reduce(function(accumulator, currentValue, currentIndex, array){
              array_with_index.push(array[currentIndex]);
              return Math.min(accumulator, currentValue);
          });
        }else{
          min = array_with_index.reduce(function(accumulator, currentValue, currentIndex, array_with_index){
            if(i == 0){
              array_with_index[0] = array[0];
              array_with_index.push(array[currentIndex]);
            }
            return Math.min(accumulator, currentValue);

          });
          console.log("array_with_indexさいしょ", array_with_index);
        //ここで常に最小の１を探してしまう
        let num = array_with_index.indexOf(min);
        console.log("min" + min + "num" + num);
        if(array_with_index[0] > array_with_index[num]){
          console.log("array_with_index[i]は、" + array_with_index[0] + "：array_with_index[num]は、" + array_with_index[num]);
          [array_with_index[0], array_with_index[num]] = [array_with_index[num], array_with_index[0]];
        }
        console.log("けっか", array_with_index);
        resultArray.push(array_with_index[0]);
        console.log("resultarray" + resultArray);
        array_with_index = array_with_index.slice(1);
        console.log("すぷらいす", array_with_index);
        // result.push(array_with_index);
        let length_index = array.length;
        console.log("arei" + length_index);
        setLength(length_index);
        console.log("hanteiさいご" + hantei);
        let temp = array[array.length - 1];
        setKijun(temp);
        console.log("temp", temp);//8
        console.log("kijunsaigo", kijun);
        }
        
        
        }
      test =+ 1;
    // }

      // setResult();
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
      {/* {result.map((value, i)=>(
        <div key={i}>{value},</div>
      ))} */}
    </>
  );
}

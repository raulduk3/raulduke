import { Small } from '../styles/index'
import React, { useState, useEffect } from "react";

const characters = 
"!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿";

function RandomString() {
    const [finalString, setFinalString] = useState("");
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      generateRandomString();
  
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchstart", handleMouseMove);
      window.addEventListener("scroll", handleMouseMove);

  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchstart", handleMouseMove);
        window.removeEventListener("scroll", handleMouseMove);
      };
    }, []);
  
    function generateRandomString() {
      let random = "";
      for (let i = 0; i < 5000; i++) {
        random += characters[Math.floor(Math.random() * characters.length)];
      }
      setFinalString(random);
      setLoading(false);
    }

    function handleMouseMove() {
      generateRandomString();
    }
  
    if (loading) {
      return <Small>Loading...</Small>
    }
  
    return (
      <Small style={{
        letterSpacing: '0.4em',
        maxHeight: '24.4vh',
        overflow: 'hidden',
        minWidth: '80vw',
        opacity: 0.7
      }}>{finalString}</Small>
    );
  }
  
  export default RandomString;
  
  
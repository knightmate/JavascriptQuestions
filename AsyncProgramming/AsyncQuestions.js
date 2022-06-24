
console.log("JS file Loaded....")
 
// Q1 -Print "Hello, world" with a delay of 3 seconds
 
  function Q1(){

    setTimeout(()=>{

        console.log("Hello , world");
        
    },3000);

  };

//Q2 -Print numbers from 1 to 10 with delay of 1 second between each value being printed

   function Q2(){

    // for(let i=1;i<=10;i++){
    
    //    delay(i).then((i)=>{
    //   console.log(i)
    //    })

    // }
   
    // function delay(i){
    //  const tempI=i;
    //   return new Promise((res,rej)=>{
    //      setTimeout((i)=>{
    //       console.log(tempI)
    //        res(tempI);         
    //      },i*1000);
    //   })

    // }

    /**This will run fine for input like 10 but if no is 1000 then delay between 2 nos will/can b less then 1 */
      // for(let i=1;i<=10;i++){
      //   setTimeout(()=>{
      //   console.log(i);
      //   },i*1);
      // }

      /**We will try recursice approach, it will work for any input */

      delay(1);
      function delay(i){
      const tempi=i;
       setTimeout(()=>{
        console.log(tempi)
       
        if(tempi<=10)delay(tempi+1);

      },1000);
      /**End  */

       

      }


   };
 
   //Q3 Q. Write a utility which prints numbers starting from an initial value 
   //and increment in steps which can be started and stopped by the user, any number of times


   function Q4(){

      function timer(){
         let timerId;
        const startTimer=(startTime)=>{
           let t=startTime;
          timerId=setInterval(()=>{
           console.log(t);
           t++;

          },1000);
      
          

        }

        const stopTimer=()=>{
          clearInterval(timerId);
          }
        return {
          startTimer,
          stopTimer
        }

      };
 


const timerObj=timer();
  
  timerObj.startTimer(1);

  setTimeout(()=>{

    timerObj.stopTimer();

  },5000);
 


}

Q4()

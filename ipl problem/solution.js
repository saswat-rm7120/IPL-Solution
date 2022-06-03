import data from "./ipl.js";

const totalSum = () => {
   let sum = 0;
   for(let i=0; i<data.length; i++) {
      sum += data[i].points;
   }
   return sum;   
}

const getLosses = (loss) => {
   console.log("Teams of " + loss + " consecutive losses");
   for(let i=0; i<data.length; i++) {
      let team = data[i].res;
   
      for(let j=loss-1; j<5; j++) {
         if(team[j] === false) {
            let losses = loss;let z=j;let sum = 0;
            while(losses--) {
               sum += team[z];
               z--;
            }
            if(sum === 0) {
               console.log(data[i].name + " :: Average = " + totalSum()/data[i].points);
               break;
            }
         }
   
      }
   }
   
}

// Change the value to get consecutive losses.
getLosses(2);
getLosses(4);
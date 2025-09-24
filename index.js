// // Code your solution in this file!
// const streetHq=42
// function distanceFromHqInBlocks(blocks){
//    let result= blocks-streetHq
//     return Math.abs(result)
// }
// distanceFromHqInBlocks(43)


// function distanceFromHqInFeet(blocks) {
//     const distanceInBlocks = distanceFromHqInBlocks(blocks);
//     return distanceInBlocks * 264;
//   }
//   function distanceTravelledInFeet(streetHq, destination){
//     const distanceInBlocks=destination-streetHq
//     return Math.abs(distanceInBlocks * 264)
//   }
//   function calculatesFarePrice(streetHq, destination){
//     const distanceInFeet=distanceTravelledInFeet(streetHq, destination)
//     if(distanceInFeet<=400){
//         return 0
//     }
//     else if(distanceInFeet>400 && distanceInFeet<=2000){
//         const payment=(distanceInFeet-400)*0.02
//         return payment
//     }
//     else if (distanceInFeet>2000 && distanceInFeet<=2500){
//         const payment2=25
//         return payment2

//     }
//     else 
//     {return "cannot travel that far"}

//   }


// const streetHq=42
// function distanceFromHqInBlocks(blocks){
//   const dist=streetHq-blocks
//   return Math.abs(dist)
// }

// function distanceFromHqInFeet(blocks){
//   const distanceInBlocks=distanceFromHqInBlocks(blocks)
//   const feet=distanceInBlocks*264
//   return feet
// }

// function distanceTravelledInFeet(streetHq,destination){
//   const dist=Math.abs(destination-streetHq)
//   return dist *264
// }

// function calculatesFarePrice(streetHq,destination){
//   const dist=distanceTravelledInFeet(streetHq,destination)
//   if(dist<=400){
//     return 0
//   }
//   else if(dist>400 && dist<=2000){
//     const payment=(dist-400)*0.02
//     return payment
//   }
//   else if(dist>2000 && dist<=2500){
//     const payment=25
//     return payment
//   }
//   else {
//     return "cannot travel that far"
//   }
// }

// const streetHq=42
// function distanceFromHqInBlocks(blocks){
//   const dist= streetHq-blocks
//   return Math.abs(dist)
// }

// const distanceFromHqInFeet=(blocks)=>{
//   const feet=distanceFromHqInBlocks(blocks)
//   return feet*264
// }
// function distanceTravelledInFeet(start,stop){
//   const distFt=Math.abs(stop-start)
//   return distFt*264
// }
// function calculatesFarePrice(){
  
// }

// const streetHq=42
// const distanceFromHqInBlocks=(blocks)=>{
// const dist= streetHq-blocks
// return Math.abs(dist)
// }
// const distanceFromHqInFeet=(blocks)=>{
//  const distFeet= distanceFromHqInBlocks(blocks)
//  return distFeet*264
// }
// const distanceTravelledInFeet=(start,stop)=>{
//   const distFeet=(start-stop)*264
//   return Math.abs(distFeet)
// }
// const calculatesFarePrice=(start,stop)=>{
//   const distFt=distanceTravelledInFeet(start,stop)
//   let fare=0
//   if(distFt<400){
//     return fare
//   }
//   else if(distFt>400&&distFt<=2000){
//     fare=(distFt-400)*0.02
//     return fare
//   }
//   else if(distFt>2000&&distFt<2500){
//     return fare=25
//   }
//   else{
//     return "cannot travel that far"
//   }
// }

const streetHq=42
const distanceFromHqInBlocks=(blocks)=>{
  return Math.abs(streetHq-blocks)
}
const distanceFromHqInFeet=(blocks)=>{
  const feet=distanceFromHqInBlocks(blocks)*264
  return feet
}
function distanceTravelledInFeet(start,stop){
  const dist=Math.abs(stop-start)*264
  return dist
}
function calculatesFarePrice(start,stop){
const dist=distanceTravelledInFeet(start,stop)
  let fare=0
  if (dist<400){
    return fare
  }
  else if(dist>=400&&dist<=2000){
    return fare=(dist-400)*0.02
  }
  else if(dist>2000&&dist<2500){
    return fare =25
  }
  else{
    return ("cannot travel that far")
  }
}
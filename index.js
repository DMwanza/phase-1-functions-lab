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
const streetHq=42
function distanceFromHqInBlocks(blocks){
  const dist=streetHq-blocks
  return Math.abs(dist)
}

function distanceFromHqInFeet(blocks){
  const distanceInBlocks=distanceFromHqInBlocks(blocks)
  const feet=distanceInBlocks*264
  return feet
}

function distanceTravelledInFeet(streetHq,destination){
  const dist=Math.abs(destination-streetHq)
  return dist *264
}

function calculatesFarePrice(streetHq,destination){
  const dist=distanceTravelledInFeet(streetHq,destination)
  if(dist<=400){
    return 0
  }
  else if(dist>400 && dist<=2000){
    const payment=(dist-400)*0.02
    return payment
  }
  else if(dist>2000 && dist<=2500){
    const payment=25
    return payment
  }
  else {
    return "cannot travel that far"
  }
}
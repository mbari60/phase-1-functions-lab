const hQ = 42;
function distanceFromHqInBlocks(pickUpPoint) {
  const distanceFromHqInBlocks = Math.abs(pickUpPoint - hQ);
  return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(pickUpPoint) {
  const distanceInBlocks = distanceFromHqInBlocks(pickUpPoint);
  const distanceFromHqInFeet = distanceInBlocks * 264;
  return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start, destination) {
  const distance = Math.abs(start - destination) * 264;
  return distance;
}

function calculatesFarePrice(start, destination) {
  const freeSample = 400;
  const distance = distanceTravelledInFeet(start, destination);
  let fare;

  if (distance <= freeSample) {
    fare = 0;
  } else if (distance <= 2000) {
    fare = 0.02 * (distance - freeSample);
  } else if (distance <= 2500) {
    fare = 25;
  } else {
    fare = "cannot travel that far";
  }

  return fare;
}

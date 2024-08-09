import React from "react";
import Column from "../Column";

const SpatialQuestion = (matches: boolean) => {
  const numRotationsTop = randomNumberInRange(1, 4);
  const numRotationsBottom = randomNumberInRange(1, 4);
  const topIsMirrored = isMirrored();
  if (matches && topIsMirrored) {
    console.log("1");
    return (
      <Column
        className="col-class"
        style={{}}
      >
        <img src={getImageFilename(Letters.C, true, numRotationsTop)} />
        <img src={getImageFilename(Letters.C, true, numRotationsBottom)} />
      </Column>
    )
  }
  else if (matches && !topIsMirrored) {
    console.log("2");
    return (
      <Column
        className="col-class"
        style={{}}
      >
        <img src={getImageFilename(Letters.C, false, numRotationsTop)} />
        <img src={getImageFilename(Letters.C, false, numRotationsBottom)} />
      </Column>
    )
  }
  else if (!matches && topIsMirrored) {
    console.log("3");
    return (
      <Column
        className="col-class"
        style={{}}
      >
        <img src="C1.png" />
      </Column>
    )
  }
  else { // if !matches && !topIsMirrored
    console.log("4");
    return (
      <Column
        className="col-class"
        style={{}}
      >
        <img src="C1.png" />
      </Column>
    )
  }

  // Different ways of importing images
  // return (
  //   <Column
  //     className="col-class"
  //     style={{}}
  //   >
  //     {/* <img src="C1.png" /> */}
  //     {/* <img src={process.env.PUBLIC_URL + `/images/LM${numRotationsTop}.png`} alt='pic' /> */}
  //     <img src="logo192.png" />
  //     <img src="P1.png" />
  //     {/* <img src={P1} /> */}
  //   </Column>
  // )
}

export enum Letters {
  C,
  F,
  J,
  L,
  P
}

const randomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isMirrored = () => {
  const randNum = randomNumberInRange(1, 2);
  if (randNum === 1) {
    return true;
  }
  else {
    return false;
  }
}

const getImageFilename = (letter: Letters, mirrored: boolean, rotations: number) => {
  let filename = "";
  if (letter === Letters.C) {
    filename += "C";
  }
  else if (letter === Letters.F) {
    filename += "F";
  }
  else if (letter === Letters.J) {
    filename += "F";
  }
  else if (letter === Letters.L) {
    filename += "F";
  }
  else if (letter === Letters.P) {
    filename += "F";
  }
  else {
    return "";
  }
  if (mirrored) {
    filename += "M";
  }
  filename += `${rotations}.png`;
  return filename;
}


export default SpatialQuestion;
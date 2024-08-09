import React from "react";
import Column from "../Column";
import { isMainThread } from "worker_threads";

interface QuestionProps {
  matches: boolean
}

const SpatialQuestion = (props: QuestionProps) => {
  const randomLetter = getLetter(randomNumberInRange(1, 5));
  const numRotationsTop = randomNumberInRange(1, 4);
  const numRotationsBottom = randomNumberInRange(1, 4);
  const topIsMirrored = randomBool2();
  const matches = props.matches;
  if (matches && topIsMirrored) {
    console.log("1-", "matches:", matches, "topIsMirrored:", topIsMirrored);
    return (
      <Column
        className="col-class"
        style={{}}
      >
        <img src={getImageFilename(randomLetter, true, numRotationsTop)} />
        <img src={getImageFilename(randomLetter, true, numRotationsBottom)} />
      </Column>
    )
  }
  else if (matches && !topIsMirrored) {
    console.log("2-", "matches:", matches, "topIsMirrored:", topIsMirrored);
    return (
      <Column
        className="col-class"
        style={{}}
      >
        <img src={getImageFilename(randomLetter, false, numRotationsTop)} />
        <img src={getImageFilename(randomLetter, false, numRotationsBottom)} />
      </Column>
    )
  }
  else if (!matches && topIsMirrored) {
    console.log("3-", "matches:", matches, "topIsMirrored:", topIsMirrored);
    return (
      <Column
        className="col-class"
        style={{}}
      >
        <img src={getImageFilename(randomLetter, true, numRotationsTop)} />
        <img src={getImageFilename(randomLetter, false, numRotationsBottom)} />
      </Column>
    )
  }
  else if (!matches && !topIsMirrored) {
    console.log("4-", "matches:", matches, "topIsMirrored:", topIsMirrored);
    return (
      <Column
        className="col-class"
        style={{}}
      >
        <img src={getImageFilename(randomLetter, false, numRotationsTop)} />
        <img src={getImageFilename(randomLetter, true, numRotationsBottom)} />
      </Column>
    )
  }
  else { // ???
    console.log("Error-", "matches:", matches, "topIsMirrored:", topIsMirrored);
  }
}

export enum Letters {
  C,
  F,
  J,
  L,
  P
}

export const randomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomBool = () => {
  const randNum = randomNumberInRange(1, 2);
  if (randNum === 1) {
    console.log("1: true");
    return true;
  }
  else {
    console.log("2: false")
    return false;
  }
}

const randomBool2 = () => {
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
    filename += "J";
  }
  else if (letter === Letters.L) {
    filename += "L";
  }
  else if (letter === Letters.P) {
    filename += "P";
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

const getLetter = (num: number) => {
  if (num === 1) {
    return Letters.C
  }
  else if (num === 2) {
    return Letters.F
  }
  else if (num === 3) {
    return Letters.J
  }
  else if (num === 4) {
    return Letters.L
  }
  else { // if num === 5
    return Letters.P
  }
}


export default SpatialQuestion;



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
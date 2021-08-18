/**
 *
 */
import {bulletPoint} from './data.js'

export const list = (allInputs) => {
    // execute core logic
  let stringList = '';
  for (const input of allInputs) {
    stringList += `\n${bulletPoint} ${input}`;
  }
  return stringList;
};

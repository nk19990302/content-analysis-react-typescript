import { ReactNode } from "react";
import { filterDataClassWise } from "../../utils/filter.util";
import Alcohol from "../../models/alcohol.type";
import { calculateMean, calculateMedian, calculateMode, roundTo3Digit } from "../../utils/stats.util";

export enum TYPE {
  Flavanoids,
  Gamma
}

/* 
  In case, we are performing both type operation on same data.
  We can simultaneously create both dataset and return in object
*/
export const convertToFlexibleTableDataset = (data: Array<Alcohol>, type: TYPE = TYPE.Flavanoids): Array<Array<string | ReactNode>> => {

  let dataset: Array<Array<string | ReactNode>> = []
  const classWiseData = filterDataClassWise(data);
  for (const key in classWiseData) {
    if (Object.prototype.hasOwnProperty.call(classWiseData, key)) {
      const elements = classWiseData[key];
      if (type === TYPE.Flavanoids) {
        dataset.push(getClassDataForFlavanoids(key, elements))

      } else if (type === TYPE.Gamma) {
        dataset.push(getClassDataForGamma(key, elements))
      }
    }
  }
  return dataset;
}

const getClassDataForFlavanoids = (type: string | number, data: Array<Alcohol>) => {
  const className = `Class ${type}`
  const numbers = data.map(it => it.Flavanoids)
  const median = calculateMedian(numbers)
  const mean = calculateMean(numbers)
  const mode = calculateMode(numbers)
  return [className, median, mean, mode]
}

const getClassDataForGamma = (type: string | number, data: Array<Alcohol>) => {
  const className = `Class ${type}`
  const numbers = data.map(it => gamma(it))
  const median = calculateMedian(numbers)
  const mean = calculateMean(numbers)
  const mode = calculateMode(numbers)
  return [className, median, mean, mode]
}

const gamma = (it: Alcohol) => {
  return roundTo3Digit((it.Ash * it.Hue) / it.Magnesium)
}

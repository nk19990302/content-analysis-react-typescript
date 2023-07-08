import Alcohol from "../models/alcohol.type";

export const filterDataClassWise = (data: Alcohol[]) => {
  const filteredAlcohols = data.reduce((acc: any, cur: any) => {
    if (acc.hasOwnProperty(cur.Alcohol)) {
      acc[cur.Alcohol].push(cur);
    } else {
      acc[cur.Alcohol] = [cur]
    }
    return acc;
  }, {})
  return filteredAlcohols;
}


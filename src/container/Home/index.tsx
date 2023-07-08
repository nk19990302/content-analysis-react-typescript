import React, { useEffect, useState } from 'react'
import './index.css'
import FlexibleTable from '../../components/FlexibleTable'
import { TYPE, convertToFlexibleTableDataset } from './util'

const headingsFlavanoids = ['Measure', 'Flavanoids Median', 'Flavanoids Mean', 'Flavanoids Mode']
const headingsGamma = ['Measure', 'Gamma Median', 'Gamma Mean', 'Gamma Mode']

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(process.env.PUBLIC_URL + "/assets/wineData.json");
      setData(await data.json())
    })()
  }, [])

  return (
    <div className='home-wrapper'>
      <div className='main-component'>
        <div className='flex-wrap-container'>
          <div>
            <h2 className='report-heading'>Flavanoids Reports</h2>
            <FlexibleTable headings={headingsFlavanoids} dataset={convertToFlexibleTableDataset(data, TYPE.Flavanoids)} />
          </div>
          <div>
            <h2 className='report-heading'>Gamma Reports</h2>
            <FlexibleTable headings={headingsGamma} dataset={convertToFlexibleTableDataset(data, TYPE.Gamma)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

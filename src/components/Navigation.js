import { useEffect, useState } from 'react'
import { getPreventiveData } from 'services'
import { PREVENTIVE_NAMES } from 'utils/constants'

const Navigation = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    getPreventiveData().then(res => setData(res))
  }, [])

  const maintenance_prev_length = Object.values(data).reduce(
    (acc, cur) => Object.values(cur).reduce((a, b) => a + b) + acc,
    0
  )

  const onCheck = (e, key_category, key) => {
    setData(prevData => ({
      ...prevData,
      [key_category]: {
        ...prevData[key_category],
        [key]: prevData[key_category][key] + (e.target.checked ? 1 : -1)
      }
    }))
  }

  return (
    <div className="m-5">
      <div className="flex w-full justify-center space-x-2">
        {Object.keys(data).map(key_category => (
          <div key={key_category} className="flex-grow border bg-blue-100 border-red-500 p-4">
            <h1 className="pb-5 text-xl">{PREVENTIVE_NAMES[key_category]}</h1>
            {Object.keys(data[key_category]).map(key => (
              <div key={key} className="flex justify-between">
                <span>{PREVENTIVE_NAMES[key]}</span>
                <div className="space-x-2">
                  <span>{data[key_category][key]}/25</span>
                  <input
                    id={key_category + key}
                    type="checkbox"
                    onChange={e => onCheck(e, key_category, key)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full bg-red-500 border border-black p-2 mt-2">
        <h1 className="text-xl text-white">Total</h1>
        <div className="flex w-full justify-around">
          <div>
            <div>
              <span>Maintenance Preventive</span>
              <span className="text-white mx-3">{maintenance_prev_length}</span>
            </div>
          </div>
          <div>
            <div>
              <span>Maintenance corrective</span>
              <span className="text-white mx-3">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation

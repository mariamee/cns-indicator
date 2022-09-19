import cn from 'classnames'

import { DEPARTMENTS } from 'utils/constants'

const Equipments = () => {
  return (
    <div className="h-screen flex flex-col space-x-20 p-7">
      <button
        type="button"
        className="inline-block px-6 py-2.5 mb-10 ml-20 bg-gray-400 text-white font-bold text-xl leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Mes équipements
      </button>
      
      <div className="flex h-3/4 justify-center space-x-20 text-white ">
        {DEPARTMENTS?.map(dep => (
          <div key={dep.depName} className="flex-1 text-lg font-medium text-white px-0">
            <figure
              className={cn(
                'rounded-xl h-3/4 overflow-scroll px-20 pt-1 pb-5 text-xl shadow-xl leading-loose',
                dep?.colorClass
              )}
            >
              {dep.depName}
              <ul className="list-disc text-lg flex-row leading-relaxed tracking-wide">
                {dep?.ensembles?.map(ensemble => (
                  <li key={ensemble.name}>
                    {ensemble.name}
                    <ul className="list-disc text-xs ml-5">
                      {ensemble?.equipments?.map(equipment => (
                        <li key={equipment}>{equipment}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </figure>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Equipments

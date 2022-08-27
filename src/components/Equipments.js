import cn from 'classnames'

import { DEPARTMENTS } from 'utils/constants'

const Equipments = () => {
  return (
    <div className="h-screen flex flex-col space-x-20 p-7">
      <h1 className="text-left font-semibold pb-10 capitalize">Mes équipements</h1>
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

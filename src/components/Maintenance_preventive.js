import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'
import { MdRule } from 'react-icons/md'
import { MdOutlineSettings } from 'react-icons/md'
import { MdOutlineSettingsInputComposite } from 'react-icons/md'
import { MdOutlineDescription } from 'react-icons/md'

function Maintenance_preventive() {
  return (
    <div className=" items-center justify-center w-full h-full xl:pl-6 xl:pr-6 xl:pb-6 xl:py-6">
      <Head>
        <title>Formulaire de maintenance préventive </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col space-y-[15px] items-center justify-center w-full   text-center   ">
        {/* Sign in section */}
        {/* <div className="bg-white rounded-3xl  flex flex-col flex:w-full justify-center  shadow-2xl md:w-full xl:w-full "> */}
        <div className="bg-white rounded-2xl shadow-3xl md:w-full xl:w-full  flex-col flex:w-full  ">
          <div className=" p-5 md:shrink-0">
            <div className="py-10 text-[#0e1373]">
              <h2 className="text-3xl font-bold mb-2">Maintenance préventive </h2>
              <div className="flex flex-col items-center w-full">
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <BsFillCalendarWeekFill className="text-gray-400 m-2" />
                  Date de la maintenance
                  <input
                    type="date"
                    name="Date maintenance"
                    placeholder="date maintenance"
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="flex justify-between gap-2">
                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="equipement" className="mr-1" />
                    VOR/DME
                  </label>
                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="equipement" className="mr-1" />
                    ILS/DME Att
                  </label>
                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="equipement" className="mr-1" />
                    VHF 
                  </label>
                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="equipement" className="mr-1" />
                    UHF
                  </label>
                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="equipement" className="mr-1" />
                    VCS
                  </label>

                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="equipement" className="mr-1" />
                    Enregistrement
                  </label>

                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="equipement" className="mr-1" />
                    Telephone
                  </label>
                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="equipement" className="mr-1" />
                    FH
                  </label>
                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="equipement" className="mr-1" />
                    MUX
                  </label>
                </div>

                <a
                  href="#"
                  className="border-2 border-[#0e1373] rounded-full px-12 mt-8 py-2 inline-block font-semibold hover:bg-[#0e1373] hover:text-gray-100"
                >
                  Enregistrer
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Maintenance_preventive

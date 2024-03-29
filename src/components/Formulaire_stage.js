import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { GoPerson} from 'react-icons/go'
import { MdLocationOn} from 'react-icons/md'
import { MdOutlineCastForEducation} from 'react-icons/md'





 function Formulaire_stage() {
  return (
    <div className=" items-center justify-center mt-5 w-full h-full xl:pl-6 xl:pr-6 xl:pb-6 xl:py-6 bg-[#0e1373]">
      <Head>
        <title>Formulaire de Suivi des stages  </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col space-y-[15px] items-center justify-center w-full   text-center   ">
        {/* Sign in section */}
        {/* <div className="bg-white rounded-3xl  flex flex-col flex:w-full justify-center  shadow-2xl md:w-full xl:w-full "> */}
        <div className="bg-white rounded-2xl shadow-3xl md:w-full xl:w-full  flex-col flex:w-full  ">

          <div className=" p-5 md:shrink-0">
            
            <div className="py-10 text-[#0e1373]">
              <h2 className="text-3xl font-bold mb-2">Suivi des stages et des formations de qualification et de perfectionnement </h2>
              <div className="flex flex-col items-center w-full">
              <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <MdOutlineCastForEducation className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="Objet"
                    placeholder="Objet"
                    className="text-sm bg-gray-100 outline-none flex-1  "
                  />
                </div>
                
                
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <MdLocationOn className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="Lieu"
                    placeholder="Lieu"
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <BsFillCalendarWeekFill className="text-gray-400 m-2" />
                      Date   de  début     
                  <input
                    type="date"
                    name="Date début stage"
                    placeholder="date début stage"
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <BsFillCalendarWeekFill className="text-gray-400 m-2" />
                      Date   de  fin     
                  <input
                    type="date"
                    name="Date fin stage"
                    placeholder="date fin stage"
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <GoPerson className="text-gray-400 m-2" />
                      Formateur    
                  <input
                    type="text"
                    name="Formateur"
                    placeholder="Formateur"
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
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
  );
}

export default Formulaire_stage;

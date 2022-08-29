import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsFillCalendarWeekFill } from 'react-icons/bs'
import { BsFillTelephoneFill} from 'react-icons/bs'
import { MdLocationOn} from 'react-icons/md'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import { MdWork} from 'react-icons/md'





 function Fiche_perso() {
  return (
    <div className=" items-center justify-center mt-5 h-full w-full xl:pl-6 xl:pr-6 xl:pb-6 xl:py-6 bg-[#0e1373]">
      <Head>
        <title>Profil ESA </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col space-y-[15px] items-center justify-center w-full   text-center   ">
        {/* Sign in section */}
        {/* <div className="bg-white rounded-3xl  flex flex-col flex:w-full justify-center  shadow-2xl md:w-full xl:w-full "> */}
        <div className="bg-white rounded-2xl shadow-3xl md:w-full xl:w-full  flex-col flex:w-full  ">

          <div className=" p-5 md:shrink-0">
            
            <div className="py-10 text-[#0e1373]">
              <h2 className="text-3xl font-bold mb-2">Informations personnelles</h2>
              <div className="flex flex-col items-center w-full">
              <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <BsFillPersonLinesFill className="text-gray-400 m-2" />
                  <input
                    type="name"
                    name= "MAFTOUH  ABDELHAK"
                    placeholder='MAFTOUH  ABDELHAK'
                    className="text-sm bg-gray-100 outline-none flex-1  "
                  />
                </div>
               
                </div>
                 <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder='a.maftouh@onda.com'
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <BsFillTelephoneFill className="text-gray-400 m-2" />
                  <input
                    type="tel"
                    name="Télephone"
                    placeholder="Tel"
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <MdLocationOn className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="Addresse"
                    placeholder="address"
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <BsFillCalendarWeekFill className="text-gray-400 m-2" />
                      Date   de   naissance  de ESA   
                  <input
                    type="text"
                    name="26/07/1979"
                   
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <BsFillCalendarWeekFill className="text-gray-400 m-2" />
                     Date  recrutement  ONDA      
                  <input
                    type="text"
                    name="12/05/2006"
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <BsFillCalendarWeekFill className="text-gray-400 m-2" />
                   Date recrut ONDA Tetouan         
                  <input
                    type="text"
                    name="12/05/2006"
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>
                <div className="bg-gray-100 flex items-center w-64 p-2 mb-3">
                  <MdWork className="text-gray-400 m-2" />        
                  <input
                    type="text"
                    name="Fonction actuelle"
                    placeholder="Fonction actuelle "
                    className="text-sm bg-gray-100 outline-none flex-1"
                  />
                </div>

               
                <div className=" flex w-64 mt-5 justify-between">

                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="celibataire" className="mr-1" />
                    Célibataire
                  </label>
                  <label htmlFor="#" className="text-xs flex items-center">
                    <input type="checkbox" name="marié" className="mr-1" />
                    Marié(e)
                  </label>
                 
                </div>
                
              </div>
            </div>
          </div>
        
      </main>
  
    </div>
  );
  }

export default Fiche_perso;

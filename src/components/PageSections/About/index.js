import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import { ImgAboutMe } from '../../../data/dataUser';


// import ContactUs from './components/ContactUs';
// import Alliances from './components/Alliances';

const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center mx-2 xl:ml-24">
        <h2 className="text-6xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className="col-span-2 xl:col-span-1 flex flex-col ">
        {ImgAboutMe?.length > 0 ? ImgAboutMe.map((item)=>
                <div key={item.id}>
                  <img
                  src={item.img}
                  alt="about-img"
                  className="rounded-full  h-[200px] w-[200px] mt-10 mx-14 md:mx-2 xl:w-[400px] xl:h-[400px] xl:mt-20 xl:mx-2"
                />
              </div>)
            :null}
        </div>
        <div className="col-span-2 xl:col-span-1 flex flex-col">
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center  xl:text-left">
          Soy un asesor profesional inmobiliario con especialización en la gestión de administración de propiedades. Mi compromiso radica en brindar un servicio de calidad y excelencia a mis clientes. Mi área de trabajo abarca la región metropolitana de Santiago, donde gestiono una cartera diversificada de propiedades.

            <br />
            <br />
            
        Ofrezco las mejores oportunidades para aquellos que buscan encontrar su nuevo hogar, ya sea a través de opciones de arriendo o compra. Mi enfoque se caracteriza por proporcionar un acompañamiento integral en todas las etapas del proceso de compra y venta de propiedades, garantizando una experiencia sin complicaciones y con resultados satisfactorios para mis clientes.  
            <br />
            <br />
            {/* Unne es un acelerador inmobiliario que ofrece una amplia gama de productos y servicios innovadores, esto junto con una gestión comercial proactiva, impulsarán los resultados de nuestros clientes.
            <br />
            <br /> */}
          </p>

          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
            Danny Ortiz.
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-5 md:text-center xl:text-left">
            Fundador y Gerente General.
          </p>
        </div>
    
        </div>
       
  
      </div>
      <div className="col-span-1 md:col-span-1 xl:col-span-1 flex flex-col justify-center mx-2 xl:ml-24">
      <MeetingForm 
            title="Contacto corredor"
            subtitle="Enviar mensaje"
          />
      </div>

      {/* 
        <div className="pt-10">
          <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
            “Un largo camino
            <br />
            se inicia con un solo paso...”
          </h2>
        </div> */}
    </div>
    {/* </Fade>  */}
  </Section>
    // <Fragment>
    //   <About />
    // </Fragment>
  );
};

export default AboutComponent;

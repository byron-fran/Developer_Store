import programacion from '../img/programacion.png'
import nosotros from '../img/nosotros.jpg'

const About = () => {
  return (
    <>
      <h1 className='my-10 text-center font-extrabold text-4xl '>About US</h1>
      <div className='w-full md:w-3/4 mx-auto grid md:grid-cols-2 items-center md:gap-x-4 gap-y-8 md:gap-y-0'>
        <div>
          <img src={`${programacion}`} alt="img-programacion" />
        </div>
        <div>
          <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipiscing elit odio sociosqu hac, nec tortor velit nulla erat nam quis purus felis. Mus facilisi lacinia netus velit torquent aptent aliquam phasellus fermentum pellentesque penatibus vivamus feugiat, laoreet nostra sagittis dapibus condimentum placerat primis potenti dictumst magna neque. Cursus mi enim tempor placerat aliquam hac, quis inceptos a fermentum cras curabitur pharetra, vestibulum nisi porta nibh pellentesque. Erat inceptos habitasse sollicitudin nunc magnis malesuada quis facilisis commodo tristique, nam orci primis justo eros dictum dis volutpat fames, nibh cursus ultrices lacinia magna eu risus ullamcorper velit.taciti erat a tincidunt morbi porttitor.</p>
        </div>
        <div>
          <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipiscing elit odio sociosqu hac, nec tortor velit nulla erat nam quis purus felis. Mus facilisi lacinia netus velit torquent aptent aliquam phasellus fermentum pellentesque penatibus vivamus feugiat, laoreet nostra sagittis dapibus condimentum placerat primis potenti dictumst magna neque. Cursus mi enim tempor placerat aliquam hac, quis inceptos a fermentum cras curabitur pharetra, vestibulum nisi porta nibh pellentesque. Erat inceptos habitasse sollicitudin nunc magnis malesuada quis facilisis commodo tristique, nam orci primis justo eros dictum dis volutpat fames, nibh cursus ultrices lacinia magna eu risus ullamcorper velit.taciti erat a tincidunt morbi porttitor.</p>
        </div>
        <div>
          <img src={`${nosotros}`} alt="imagen-nosotros" />
        </div>
      </div>
     
    </>
  )
}

export default About
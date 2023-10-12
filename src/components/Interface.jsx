import { motion } from "framer-motion"

const Section = (props) => {
  const {children} = props;

  return (
  <motion.section className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
    
  >{children}</motion.section>
  );
}

export const Interface = () => {
  return (
    <>
    <div className="fixed"><Navigation/></div>
    <div className="flex flex-col justify-center w-screen">
      
      <HeroSection title="We make amazing experiences" subTitle="& some extra stuff"/>
      <HeroSection title="Starting from your needs" subTitle="adding some substance X"/>
      <HeroSection title="Let the magic begin " subTitle=""/>
      <HeroSection title="Let's create together" subTitle="and amaze world "/>
    </div>
    </>
  );
};

export default Interface

const HeroSection = (props) => {
  return (
    <Section id={`props.id`}>
      <motion.h1
      className=" lg:text-9xl sm:text-6xl text-white font-serif leading-3" 
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity:1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0
        }
      }} 
      >{props.title}
      </motion.h1>
      <motion.h2 className=" text-5xl text-yellow-200 my-6 font-mono" 
       initial={{
          opacity:0,
          x: -50,
        }}
        whileInView={{
          opacity:1,
          x:0,
          transition: {
            duration:1,
            delay:0.5,
          }
        }}
        
        exit={{opacity:0}}
        >{props.subTitle}</motion.h2>
    </Section>
  )
}

const Navigation = () => {
  return (
    <div className=" text-white flex justify-between px-14 py-14 font-bold text-2xl  w-screen fixed top-0">
      <a href=""><h1>logo</h1></a>
      <h2>discover</h2>
    </div>
  )
}


import React from 'react'
import educationData from './educationData'
import { motion ,useScroll} from 'framer-motion'


export default function Education() {
  const {scrollProgress} = useScroll();
  return (
    <>
      <motion.div initial ={{x:-300 ,scale:0.5}} animate = {{x:0 , scale:1}} transition={{duration:1}}>
        {educationData.college.map((college)=>(
          <div>
          <h3 className='textStyle'>{college.title}</h3>
          <h6 style={{color:'white'}}> {college.date}</h6>
          <h5 className='collegeStyle'>{college.college}</h5>
          <h4 className='collegeStyle' >{college.stream}</h4>
          <br></br>
          </div>
        ))}
      </motion.div>
    </>
  )
}

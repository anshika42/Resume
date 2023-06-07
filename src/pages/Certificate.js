import React from 'react'
import Project1 from "../images/data structure.jpeg"
import Project2 from "../images/aws.jpg"
import Project3 from "../images/duke university.jpeg"
import Project4 from "../images/javaCertificate.jpeg"
import Project5 from "../images/problem solving.jpeg"
import Project6 from "../images/sql.jpg"
import Project7 from "../images/badges in problem solving.jpeg"
import Project8 from "../images/flipkart participation.jpeg"
import Project9 from "../images/zonals.jpeg"

import { motion } from 'framer-motion'
import { Card } from 'react-bootstrap'
export default function Certificate() {
  const CertificateList =[{
    id:1,
    name:"DataStructure",
    imageUrl: Project1,
},
{
  id:2,
  name:"Aws",
  imageUrl: Project2,
},
{
  id:3,
  name:"Front-end",
  imageUrl: Project3,
},
{
  id:4,
  name:"Java",
  imageUrl: Project4,
},
{
  id:5,
  name:"Problem Solving",
  imageUrl: Project5,
},
{
  id:6,
  name:"SQL",
  imageUrl: Project6,
},
{
  id:7,
  name:"Badges",
  imageUrl: Project7,
},
{
  id:8,
  name:"Hackathon",
  imageUrl: Project8,
},
{
  id:9,
  name:"Zonals",
  imageUrl: Project9,
}]
return (
<motion.div className = "projects" animate={{scale:[2,1],rotate:[90,0]}}  transition= {{duration:0.5,ease:"easeInOut"}}>
  <h2>Certificates</h2>
  <div className = "wrapper">
    {CertificateList.map((item)=>{
      return <motion.div key={item.id} whileHover={{
        scale:1.1,
        transition:{duration:0.5}
      }}>
      <Card>
        <Card.Img variant = "top" src={item.imageUrl}/>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
      </Card>
      </motion.div>
    })}
  </div>
</motion.div>
 
  )
}

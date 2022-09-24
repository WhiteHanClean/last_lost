import  React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const sidebar = [
  {
      name: "Lost and Found Portal",
      path: "/found",
  }, {
      name: "Personal Information",
      path: "/personnaiInfo",
  }, {
      name: "FoundItem",
      path: "/foundItem",
  }, {
      name: "Lost Item",
      path: "/lostItem",
  }, {
      name: "Database",
      path: "/database",
  }
]

export const MenuItem = ({ i }) => {
  return (
    <>
      {
      sidebar.map((item, index) => 
      
      <Link to={item.path} key={index}><motion.li variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>{item.name}</motion.li></Link>
      
      )
    }
    </>
  );
};

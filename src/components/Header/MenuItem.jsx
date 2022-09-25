import  React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import style from './Header.module.css'



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
    name: "Home",
    path: '/'
  }, {
      name: "Found",
      path: "/foundItem",
  }, {
      name: "Personal Information",
      path: "/personnaiInfo",
  }, {
      name: "FoundItem",
      path: '/foundItem',
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
      
      <NavLink to={item.path} key={index}><motion.li variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>{item.name}</motion.li></NavLink>
      
      )
    }
    </>
  );
};

import { AnimatedTestimonials } from "../components/animated-testimonials";

export function MinorProject() {
  const testimonials = [
    {
      quote: "A full-stack e-commerce platform built with React JS for the frontend and Rust for the backend. Features include product management, shopping cart functionality.",
      name: "AK Store - React JS & Rust",
      designation: "React JS & Rust",
      src: "https://static.vecteezy.com/system/resources/previews/010/517/846/original/letter-ak-logo-design-ak-logo-pink-color-free-template-free-vector.jpg",
    },
    {
      quote: "A secure file storage system developed using Java and Spring Boot. Implements microservices architecture, MySQL database for storage, and authentication system for user security. Maven is used for dependency management and build automation.",
      name: "File Hiding - Java",
      designation: "Java Development",
      src: "https://us.123rf.com/450wm/djvstock/djvstock2001/djvstock200143628/138999301-padlock-and-file-design-of-security-lock-access-door-house-safe-safety-and-protection-theme-vector.jpg?ver=6",
    },
  
  
    {
      quote: "A Java-based ATM simulation system using HashMap for data management. Features include account balance checking, withdrawals, deposits, and PIN verification.",
      name: "ATM Machine with Java - Java(Hashmap) ",
      designation: "Java Development",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfouf9PezbaiXTdjmzkDCPIGyXFNk9AA98Zg&s",
    },
    {
      quote: "Developed secure system, concealing files with path-based encryption.Implemented robust one - time password authentication for enhanced security.Designed feature allowing files to be hidden based on paths Streamlined development using Maven for organized build and dependencies.",
      name: "File Hide System  ",
      designation: "Java Development",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0p9JeMRCsoPSTpFaAWcpzYtoxXf9sr6TaXg&s",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
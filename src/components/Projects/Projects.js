import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import tesnova from "../../Assets/Projects/tesnova.png";
import zikrSoul from "../../Assets/Projects/zikr_soul.png";
import zikrWebsite from "../../Assets/Projects/Zikr_website.png";
import wellness from "../../Assets/Projects/wellness.png";
import heyBenson from "../../Assets/Projects/hey-benson.png";
import pitpay from "../../Assets/Projects/pitpay.png";
import tickethoss from "../../Assets/Projects/tickethoss.png";
import legalSparrow from "../../Assets/Projects/legal_sparrow.png";
import dexterLeather from "../../Assets/Projects/dexter_leather.png";
import teamup from "../../Assets/Projects/teamup.png";
import ila from "../../Assets/Projects/ila.png";
import halal from "../../Assets/Projects/halal.png";


function Projects() {
  // Function to handle demo click
  const handleDemoClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Demo not available right now, you can check through GitHub");
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ila}
              isBlog={false}
              title="Ila World"
              description="Ila World is a Next.js platform focused on booking and secure authentication. Users can register, sign in, book services, and communicate through integrated chat — delivering a smooth end-to-end experience for customers and service providers."
              ghLink={null}
              demoClick={() =>
                handleDemoClick("https://dev.ilaworld.com")
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={halal}
              isBlog={false}
              title="Halal Management"
              description="Halal Management is a Next.js app with booking, real-time chat, Stripe payments, map integration, and service management. It streamlines scheduling, communication, payments, and location-based services in one place."
              ghLink={null}
              demoClick={() =>
                handleDemoClick("http://halal-management.devlinesolutions.com/")
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Doctor Appointment System"
              description="The Doctor Appointment System is a React Native app where patients can search and book doctors, and doctors can manage schedules and appointments. Users can register, book, reschedule, and give feedback, while doctors can set availability and update statuses. The admin panel handles user, doctor, and appointment management with reports and settings."
              ghLink="https://github.com/Abdulmananjutt1/doctor_appointment_system_react_native"
              demoClick={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Car Rental System"
              description="The Car Rental System is a React Native app that lets users browse, book, and manage rental cars, while admins handle listings, bookings, and analytics. Users can register, search cars by filters, view details, book with a rental period, make payments and give feedback. Admins can manage cars, update availability, track cars in real-time, apply discounts, and view reports — making the rental process fast, organized, and user-friendly."
              ghLink="https://github.com/Abdulmananjutt1/car_rental_system"
              demoClick={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hosital Management System"
              description="The Hospital Management System is a system  where patients can book appointments, view records, and get notifications; doctors can manage schedules, patient details, and treatments; nurses can update patient vitals, assist in treatments, and manage ward details; and admins handle doctors, nurses, patients, appointments, and reports for smooth hospital operations."
              ghLink="https://github.com/Abdulmananjutt1/hospital_management_system"
              demoClick={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sentiment Analysis"
              description="The Sentiment Analysis System uses a trained machine learning model to analyze text or feedback and classify it as positive, negative, or neutral. It helps in understanding customer opinions, tracking sentiment trends, and generating reports for informed decision-making."
              ghLink="https://github.com/Abdulmananjutt1/sentiment_analysis"
              demoClick={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai Search Algorithms"
              description="A browser-based project built with HTML, CSS, and JavaScript that visualizes graph/grid search. Users choose start/goal, draw obstacles, and run BFS, DFS, or Uniform Cost Search to see step-by-step traversal, frontier (queue/stack/priority queue), final path highlight, total cost, and basic time/space stats. Supports custom edge weights, reset/clear, and export of results/screenshots for reports."
              ghLink="https://github.com/Abdulmananjutt1/artificial-intelligence-searching-algorithms"
              demoClick={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Loan Application"
              description="The Loan Application System allows users to apply for loans, upload required documents, and track application status, while admins review applications, verify details, approve or reject requests, and manage repayment records — making the loan process faster and more organized."
              ghLink="https://github.com/Abdulmananjutt1/loan-calculator-app"
              demoClick={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tesnova}
              isBlog={false}
              title="Tesnova Solutions"
              description="A professional company website that enables seamless communication between clients and the team. Users can engage in live chat, request instant project estimates, and send direct messages to discuss their business requirements and digital solutions."
              ghLink={null}
              demoClick={() =>
                handleDemoClick("https://www.tesnova.com/")
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zikrSoul}
              isBlog={false}
              title="Zikr Soul"
              description="Zikr Soul is a comprehensive Islamic app built with React Native. It features an AI chat bot for Islamic queries, Quran and Hadith API integration for easy access to texts, custom challenges to encourage consistent worship, and various other tools to support your spiritual journey. Available on both App Store and Google Play."
              ghLink={null}
              demoClick={() => handleDemoClick(null)} // No link -> show alert
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zikrWebsite}
              isBlog={false}
              title="Zikr Website"
              description="The Zikr Soul website is a dedicated platform for spiritual growth and Islamic knowledge. It serves as a companion to the Zikr Soul app, offering a wealth of resources including blogs, educational content, and ecosystem updates to help users stay connected with their faith and the Zikr Soul community."
              ghLink={null}
              demoClick={() => handleDemoClick("https://zikrsoul.com/")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wellness}
              isBlog={false}
              title="Wellness App"
              description="The Wellness App is a comprehensive health and fitness platform designed to help users track their physical activities, monitor nutrition, and manage mental well-being. It features personalized workout plans, hydration tracking, and mindfulness exercises to promote a balanced and healthy lifestyle."
              ghLink={null}
              demoClick={() => handleDemoClick("https://wellnesshealth.vercel.app/")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heyBenson}
              isBlog={false}
              title="Hey-Benson"
              description="Hey-Benson is an innovative personal assistant and communication platform designed to streamline daily tasks and enhance connectivity. With a focus on intuitive user experience and smart automation, it helps users manage their schedules, communications, and workflows more efficiently than ever before."
              ghLink={null}
              demoClick={() => handleDemoClick("https://www.heybenson.com/")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pitpay}
              isBlog={false}
              title="Pitpya"
              description="Pitpya is a dynamic communication and engagement platform that connects users with their favorite creators and brands. Designed for seamless interaction, it offers unique features for community building and real-time engagement. Available on both Google Play and the App Store."
              ghLink={null}
              demoClick={() => handleDemoClick(null)} // No link -> show alert
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tickethoss}
              isBlog={false}
              title="TicketHoss"
              description="TicketHoss is a premier ticketing solution for events and entertainment, providing a fast and secure way for fans to purchase and manage tickets. With a user-friendly interface and robust features, it ensures a smooth ticketing experience for both organizers and attendees. Available on both Google Play and the App Store."
              ghLink={null}
              demoClick={() => handleDemoClick(null)} // No link -> show alert
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={legalSparrow}
              isBlog={false}
              title="Legal Sparrow"
              description="Legal Sparrow is a comprehensive legal services platform designed to connect clients with experienced legal professionals. It streamlines the process of finding, consulting, and managing legal cases, providing a secure and efficient environment for both lawyers and clients to collaborate."
              ghLink={null}
              demoClick={() => handleDemoClick("https://legalsparrow.com/")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dexterLeather}
              isBlog={false}
              title="Dexter Leather"
              description="Dexter Leather is an e-commerce platform specializing in premium leather goods. The website features a beautifully designed product catalog, seamless shopping experience, and integration with customer management tools to provide a high-end luxury shopping experience for leather enthusiasts."
              ghLink={null}
              demoClick={() => handleDemoClick("https://dexterleather.com/")}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamup}
              isBlog={false}
              title="TeamUp"
              description="TeamUp is a collaboration platform designed for teams to coordinate tasks, share resources, and communicate effectively in real-time. It provides a centralized hub for project management, ensuring everyone stays aligned and productive."
              ghLink={null}
              demoClick={() => handleDemoClick("https://teamup-beryl.vercel.app/")}
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

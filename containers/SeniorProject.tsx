import React from "react";
import { Container, Row, UncontrolledTooltip } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";

const showcaseData = [
  {
    image: "img/assets/logo.png",
    title: "Senior Project",
    text: "Featuring the Mechatronic System for Chess Play 👋♟️"
  },
  {
    image: "img/assets/1.png",
    title: "Chess Master",
    text: "The system integrates Ai (camera vision), robotics, and Stockfish Chess engine computations to create an unbeatable chess opponent. 🤖"
  },
  {
    image: "img/assets/2.png",
    title: "Precision Vision",
    text: "An advanced AI-powered object detection system, trained on 15,000 images using YOLOv11, achieving an exceptional 98% accuracy for real-time recognition and tracking. 🚀"
  },
  {
    image: "img/assets/3.png",
    title: "Precision in Motion",
    text: "The Roarm M2 Series robotic arm redefines automation with unparalleled precision, speed, and versatility. Engineered for industrial and research applications, it delivers smooth, adaptive motion with cutting-edge AI integration. 🦾"
  },
  {
    image: "img/assets/4.png",
    title: "The Dashboard",
    text: "A powerful dashboard that provides real-time game statistics and visualizes the entire decision-making pipeline, offering deep insights into how the system calculates and executes each move. ♟️"
  }
  ,
  {
    image: "img/assets/5.png",
    title: "Real-Time Chess Insights",
    text: "The dashboard provides a live view of the chessboard status, tracking every move in real time. It also features a historian system, allowing you to revisit and analyze past games for deeper strategic insights. ♟️📊"
  }
];

const SeniorProject = () => {
    return (
      <Container className="my-10" style={{marginBottom: "15rem"}}>
      {showcaseData.map((item, index) => (
        <Row
          key={index}
          className={`align-items-center my-7 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          <Col lg={7} className="d-flex justify-content-center">
            <img
              id="img-project"
              src={item.image}
              alt={item.title}
              className="img-fluid rounded-xl "
              // style={{ maxWidth: "600px" }}
            />
          </Col>
          <Col lg={5} >
            <Card className="p-4 " style={{border: "none"}}>
              <CardBody>
                <h2 className="text-3xl font-bold mb-3">{item.title}</h2>
                <p className="text-lg text-gray-600">{item.text}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}
      <div className="flex justify-center items-center gap-10 mt-16 w-full" id="logo-holder" style={{display: 'flex', justifyContent: "space-evenly", alignItems: "center", marginTop: "10rem"}}>
        <img id="logo" src="img/assets/roboflow.png" alt="Logo 1" className="w-24 md:w-32 lg:w-40" style={{maxWidth: '240px'}}/>
        <img id="logo" src="img/assets/stockfish.png" alt="Logo 2" className="w-24 md:w-32 lg:w-40" style={{maxWidth: '100px'}}/>
        <img id="logo" src="img/assets/waveshare.png" alt="Logo 3" className="w-24 md:w-32 lg:w-40" style={{maxWidth: '240px'}}/>
      </div>
    </Container>
    );
  };
  
  export default SeniorProject;

import React from "react";
import "./FaqContent.css"

function FaqContent() {
  return(
    <div className = "faq-container">
      <h1 className = "faq-title"> Frequently Asked Questions </h1>
        <p className = "questions-text"> 
          Q: How should I change my bandage?  
        </p>
        <p className = "answer-text">
          A: Changing your bandage should not be conducted independently. Please visit your local polyclinic or General Practitioner (GP) for proper guidance and assistance in changing your bandage.
        </p>
        <p className = "questions-text"> 
          Q: How often should I change my bandage?  
        </p>
        <p className = "answer-text">
          A: You should change your bandage when you notice any bloodstains or fluid coming out. This ensures that your wound stays clean and heals properly. 
        </p>
        <p className = "questions-text"> 
          Q: What do the temperature and impedance measurements mean?  
        </p>
        <p className = "answer-text">
          A: The measurements serve as vital health indicators. If your temperature is higher than usual or if there are significant variations in impedance measurements, it could signal a potential infection or other health issues. Monitoring these measurements is crucial for your well-being.
        </p>
        <p className = "questions-text"> 
          Q: How should I respond if the measurements appear abnormal?  
        </p>
        <p className = "answer-text">
          A: If you notice abnormal measurements, there is no need to be alarmed. Our system also notifies your cardiologist, who will take immediate action. Your cardiologist will schedule a follow-up appointment to address any concerns and provide you with the necessary guidance and support. Your health is our top priority, and we are here to ensure your well-being.
        </p>
        

    </div>
  )
}

export default FaqContent;
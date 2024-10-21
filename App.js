import React, { useState } from "react";
import Header from "./components/header";
import Form from "./components/form";
import ResumePreview from "./components/resumePreview";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [resumeData, setResumeData] = useState({
    professionalSummary: "",
    education: [],
    skills: "",
    careerObjective: "",
    experience: [],
  });

  const updateResumeData = (data) => {
    setResumeData(data);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Form resumeData={resumeData} updateResumeData={updateResumeData} />
        <ResumePreview resumeData={resumeData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

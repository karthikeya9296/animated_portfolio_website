const Resume = () => {

  return (
    <div className="resume">
    
      <div className="header">
        <h1>Karthikeya Gummadi</h1>
        <p>Arlington, VA | gummadikarthikeya3@gmail.com | (571)237-0444 | LinkedIn: Karthikeya</p>

        <p>Objective:</p>
        <p>AI graduate student at George Washington University with a strong background in Machine Learning and Natural Language Processing (NLP), Artificial Intelligence (AI), seeking summer internship to leverage AI knowledge to make a tangible impact in field. Academic background includes expertise in Machine Learning, Natural Language Processing (NLP), and Data Science. Hands-on experience developing an AI-powered chatbot improved customer support in telecommunications sector.</p>
      </div>
      
      <div className="education">
        <h2>Education</h2>

        <h3>The George Washington University, School of Engineering & Applied Science Washington, DC</h3>
        <p>Master of Science in Computer Science</p>
        <p>April 2025</p>
        <ul>
          <li>Major in Machine Intelligence and Cognition.</li>
        </ul>
        <p>Relevant Coursework: Machine Learning, Data mining, Deep Learning, Database Management Systems</p>
      </div>

      <div className="skills">
        <h2>Skills</h2>
      
        <p><b>Technical:</b> Python, TensorFlow, Keras, PyTorch, Java, C/C++, JavaScript, R, SQL, HTML/CSS, Tableau</p>
        <p><b>Machine Learning:</b> Neural networks, computer vision, NLP, predictive modeling.</p>
        <p><b>Tools:</b> Git, MATLAB, Pandas, AWS, Azure</p>
      </div>

      <div className="experience">
       <h2>Work Experience</h2>

       <h3>Enh Isecure Hyderabad, India</h3>
       <p>Machine Learning Intern specializing in Cybersecurity</p> 
       <p>May 2022 - December 2022</p>
       <ul>
         <li>Developed anomaly detection models using LSTM neural networks to detect network intrusions, improving threat detection rate by 43%.</li>
         <li>Implemented malware analysis automation using Python and OpenCV to extract file features, cutting analysis time by 52%.</li>
         <li>Created a phishing website classifier model in TensorFlow with 95% accuracy, enhancing organization's email security capabilities.</li>
         <li>Established a streamlined process for incorporating external threat intelligence sources.</li>
         <li>Improved the organization's ability to identify and respond to emerging cyber threats promptly.</li>
       </ul>
      </div>

      <div className="projects">
      <h2>Projects</h2>

      <h3>Guided Implementation of Facial Recognition Technology | Nov 2021 - Mar 2022</h3>
      <ul>
        <li>Implemented cutting-edge Facial Recognition technology for attendance tracking, resulting in increased efficiency.</li>
        <li>Led a team of 10 through the successful implementation.</li>
        <li>Achieved a 42% reduction in faculty time spent on manual attendance marking.</li>
      </ul>

      <h3>Engineered Voice-Based Platform for SYSK4| Sept 2021 - Dec 2021</h3>
      <ul>
       <li>Developed a voice-based platform utilizing conversational AI technology to enhance customer experience.</li>
       <li>Led a cross-functional team of 4 through the engineering and launch process.</li>
       <li>Contributed to a 40% rise in customer retention.</li>
       <li>Elevated customer satisfaction scores by 25%.</li>
      </ul>
    
      {/* Other projects */}
    
    </div>

    <div className="achievements">
      <h2>Achievements</h2>
      <ul>
        <li>Earned the SEAS Merit Award, providing a 25% tuition discount for each semester while maintaining good academic standing in the Computer Science graduate program at the School of Engineering and Applied Science.</li>
        <li>Completed specialized certifications in high-demand fields including cybersecurity, supply chain, and quantum computing through courses from leading providers IBM, Google, UC Irvine, and KAIST.</li>
        <li>Earned credentials in core computer science topics such as operating systems, databases, data structures, and artificial intelligence through rigorous online programs from top institutions including UCSD, UC Irvine, and University of Colorado.</li>  
      </ul>
    </div>

  </div>
  )
}

export default Resume;

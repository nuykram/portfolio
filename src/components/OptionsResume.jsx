import '../styles/OptionsResume.css'

const pdfLink = 'https://nuykram.github.io/portfolio/assets/resume-test-a8042857.pdf'

const OptionsResume = ({ setView }) => {
  const openPdf = (link) => {
    window.open(link, "_blank", "noreferrer");
  }
  return (
    <div className='resume-options-container'>
      <div className='resume-options-select'>
        <p
          onClick={ ()=>{openPdf(pdfLink)} }
        >
          Show PDF in New Tab
        </p>
      </div>
      <div className='resume-options-select'>
        <p
          onClick={ ()=>{setView('home')} }
        >
          Go Back
        </p>
      </div>
    </div>
  );
}

export default OptionsResume;
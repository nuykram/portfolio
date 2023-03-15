import  { useState, useEffect, useRef } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import Resume from '../assets/pdf/resume-test.pdf'

import '../styles/ResumePdfView.css'

const ResumePdfView = () => {
  const ref = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  },[]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div ref={ref} className='document-main'>
      <Document
        className='document-page'
        file={Resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          className='document-page'
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={1}
          width={width}
        />
      </Document>
    </div>
  );
}

export default ResumePdfView;
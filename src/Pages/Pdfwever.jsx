import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const PDFViewer = () => {
  const location = useLocation();
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const generatePDF = () => {
      const doc = new jsPDF();
      doc.text(location.state.content, 10, 10);
      const pdf = doc.output('datauristring');
      setPdfData(pdf);
    };

    if (location.state && location.state.content) {
      generatePDF();
    }
  }, [location.state]);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(location.state.content, 10, 10);
    doc.save('university-details.pdf');
  };

  return (
    <div className="container pt-[200px]">
      <h1>PDF Viewer</h1>
      {pdfData && (
        <div>
          <Document file={pdfData}>
            <Page pageNumber={1} />
          </Document>
          <button
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;

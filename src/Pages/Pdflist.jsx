import React from 'react';
import { Link } from 'react-router-dom';

const PDFList = () => {
  const pdfFiles = [
    { name: 'Sample PDF 1', path: '/pdfs/sample1.pdf' },
    { name: 'Sample PDF 2', path: '/pdfs/sample2.pdf' },
    // Add more PDFs as needed
  ];

  return (
    <div className="container pt-[200px]">
      <h1>Available PDFs</h1>
      <ul>
        {pdfFiles.map((pdf, index) => (
          <li key={index}>
            <Link to={`/pdf-viewer?file=${pdf.path}`}>{pdf.name}</Link>
            {' '}
            <a href={pdf.path} download className="ml-4 text-blue-500">
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;

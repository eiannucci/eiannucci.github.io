import React from 'react';

export const FileDownload = () => {
  const handleDownload = () => {
    // Replace the file URL with the actual URL of your resume file
    const resumeUrl = 'https://resume-elijah-iannucci.tiiny.site/';

    // Open the resume URL in a new browser tab
    window.open(resumeUrl, '_blank');
  };

  return (
    <div onClick={handleDownload}>
      <div className={'btn btn-primary'}><span>Open Resume</span></div>
    </div>
  );
};
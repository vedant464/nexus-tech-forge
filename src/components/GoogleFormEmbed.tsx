import React from 'react';

interface GoogleFormEmbedProps {
  formUrl: string; // The Google Form URL
}

export default function GoogleFormEmbed({ formUrl }: GoogleFormEmbedProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Join ROI Tech Club
          </h2>
          <p className="text-muted-foreground">
            Fill out the form below to apply for membership
          </p>
        </div>
        
        <div className="w-full">
          <iframe
            src={formUrl}
            width="100%"
            height="800px"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="ROI Tech Club Registration Form"
            className="rounded-lg"
          >
            Loading…
          </iframe>
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Having trouble with the form? Contact us at{' '}
            <a href="mailto:vedantt2830@gmail.com" className="text-primary hover:underline">
              vedantt2830@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 
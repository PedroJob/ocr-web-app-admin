import React from 'react';

interface Props {
  message?: string;
}

const ProgressIndicator = ({ message }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-center">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-center align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
      {message && <span className="text-center">{message}</span>}
    </div>
  );
};

export default ProgressIndicator;

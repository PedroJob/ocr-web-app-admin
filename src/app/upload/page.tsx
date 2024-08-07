'use client';

import { Backend_URL } from '@/lib/Constants';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import ocrService from '@/services/ocr-service';
import ProgressIndicator from '@/components/ProgressIndicator';
import { FileDto } from '@/types/file.interface';

interface FileUpload {
  message: string;
  result: FileDto;
}

const UploadPage = () => {
  const { data: session } = useSession();
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<FileUpload | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    try {
      setLoading(true);
      const response = await ocrService
        .getOcrResult(file, session?.backendTokens?.accessToken || '')
        .then((res) => {
          setLoading(false);
          return res;
        });

      if (response.ok) {
        const data = (await response.json()) as FileUpload;
        setData(data);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to upload the file.');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred while uploading the file.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded bg-white p-8 shadow-md">
        {loading ? (
          <ProgressIndicator message="Processing your file" />
        ) : (
          <>
            {data ? (
              <div className="text-center">
                <h2 className="mb-4 text-2xl font-bold">{data.message}</h2>
                <button
                  onClick={() => (window.location.href = `/summary/${data.result.id}`)}
                  className="w-full rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
                >
                  Go to Summary
                </button>
              </div>
            ) : (
              <form onSubmit={handleUpload}>
                <h1 className="mb-4 text-2xl font-bold">Upload File</h1>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="mb-4 w-full rounded border px-3 py-2"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
                >
                  Upload
                </button>
                {error && <p className="mt-4 text-red-500">{error}</p>}
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UploadPage;

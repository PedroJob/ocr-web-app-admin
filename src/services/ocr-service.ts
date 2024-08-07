import { Backend_URL } from '@/lib/Constants';
import { API } from '../utils/api';
import { getToken } from 'next-auth/jwt';
import { NextApiRequest } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getSession } from 'next-auth/react';

class OcrService extends API {
  constructor() {
    super(Backend_URL + '/ocr');
  }

  async getOcrResult(image: File, token: string) {
    const session = await getSession();
    const userId = session?.user.id.toString() || '';
    const formData = new FormData();
    formData.append('file', image);
    formData.append('userId', userId);
    const res = await fetch(Backend_URL + '/ocr/upload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      throw new Error('Failed to upload the file.');
    }

    return res;
  }
}

const ocrService = new OcrService();
export default ocrService;

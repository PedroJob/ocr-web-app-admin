import { Backend_URL } from '@/lib/Constants';
import { API } from '@/utils/api';

class SessionService extends API {
  constructor() {
    super(Backend_URL + '/auth');
  }

  async login(userEmail: string, userPassword: string) {
    return this.request('POST', 'login', null, JSON.stringify({ userEmail, userPassword }), null);
  }

  async register(name: string, email: string, password: string) {
    return this.request('POST', 'register', null, JSON.stringify({ name, email, password }), null);
  }
}

const sessionService = new SessionService();
export default sessionService;

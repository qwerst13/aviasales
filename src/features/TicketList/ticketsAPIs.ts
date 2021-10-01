import { TicketInterface } from '../../common/TicketInterface';

interface TokenResponse {
  searchId: string;
}

interface TicketsResponse {
  tickets: TicketInterface[];
  stop: boolean;
}

const mainLink = 'https://front-test.beta.aviasales.ru';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const reserveLink = 'https://aviasales-test-api.java-mentor.com';

export async function fetchTickets(token: string): Promise<TicketsResponse> {
  const response = await fetch(`${mainLink}/tickets?searchId=${token}`);
  return response.json();
}

export async function fetchToken(): Promise<TokenResponse> {
  const response = await fetch(`${mainLink}/search`);
  return response.json();
}

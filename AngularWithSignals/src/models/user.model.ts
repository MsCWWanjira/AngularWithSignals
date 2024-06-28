export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      city: string;
    };
    phone: string;
    website: string;
    company: {
      catchPhrase: string;
    };
  }
  
  export interface Tweet {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
import Typesense from 'typesense';

const client = new Typesense.Client({
  nodes: [
    {
      host: 'localhost', // Replace with your Typesense server address
      port: '8108',      // Replace with your Typesense server port
      protocol: 'http',  // Change to 'https' if using SSL
    },
  ],
  apiKey: 'api_key_05071198', // Replace with your Typesense API key
});

export default client;

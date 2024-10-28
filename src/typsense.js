import Typesense from 'typesense';

const client = new Typesense.Client({
  nodes: [
    {
      host: 'localhost', 
      port: '8108',      
      protocol: 'http',  
    },
  ],
  apiKey: 'api_key_05071198', 
});

export default client;

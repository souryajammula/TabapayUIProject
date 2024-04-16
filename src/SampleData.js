import { v4 as uuidv4 } from 'uuid';

export const sampleData = [
  {
    id: uuidv4(),
    parentId: null, // Root node has no parent
    name: "Platform",
    contents:[],
    description:"Secure, reliable and lower cost instant payments for Fintech innovators. we offer direct access to 15 banking partners, 14 networks, multiple geographies, innovative products and features in one unified API",
    children: [
      {
        id: uuidv4(),
        parentId: "root", // Assuming "root" as the ID of the parent node
        name: "Products",
        contents:[],
        children: [
          {
            id: uuidv4(),
            parentId: "products",
            name: "Payouts",
            description:"Push funds for limitless use cases",
            contents:[
              { heading: 'Domestic Push to card', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Cross-border push to card', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Credit card bill payments', para: 'A frictionless and secure way for users to make payments' }
            ]
          },
          {
            id: uuidv4(),
            parentId: "products",
            name: "Payments",
            description: "Process payments for any customer journey",
            contents:[
              { heading: 'Account Funding', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Debt repayment', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Subscriptions & bill payments', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'B2B services', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Digital Goods & Services', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'cross-border', para: 'A frictionless and secure way for users to make payments' }
            ]
          },
          {
            id: uuidv4(),
            parentId: "products",
            name: "PayFac",
            description:"Coming Soon",
            contents:[
              { heading: 'RFP via RTP', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'ACH debit', para: 'A frictionless and secure way for users to make payments' }
            ],
            children: [
              {
                id: uuidv4(),
                parentId: "PayFac",
                name: "PayFac Child",
                description: "Coming soon feature",
                contents:[
                  { heading: 'Account Funding', para: 'A frictionless and secure way for users to make payments' },
                  { heading: 'Debt repayment', para: 'A frictionless and secure way for users to make payments' },
                  ]
              }
            ]
          }
        ]
      },
      {
        id: uuidv4(),
        parentId: "root",
        name: "Features",
        contents:[],
        children: [
          {
            id: uuidv4(),
            parentId: "features",
            name: "Authentication & Fraud Mitigation",
            description:"Reduce risk with Tabapay Shield",
            contents:[
              { heading: 'Apple pay/Google pay', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'AVS', para: 'A frictionless and secure way for users to make payments' },
              { heading: '3DS', para: 'A frictionless and secure way for users to make payments' }
            ]
          },
          {
            id: uuidv4(),
            parentId: "features",
            name: "Compliance",
            description:"Tools to manage PCI compliance and AML",
            contents:[
              { heading: 'PCU Compliance', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Tokenization', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'AML', para: 'A frictionless and secure way for users to make payments' }
            ]
          },
          {
            id: uuidv4(),
            parentId: "features",
            name: "Self-service Portal",
            description:"A single source of truth for all your reporting needs",
            contents:[
              { heading: 'Report and Invoices', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Card Entry', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Transaction status Research', para: 'A frictionless and secure way for users to make payments' }
            ]
          },
          {
            id: uuidv4(),
            parentId: "features",
            name: "Channels",
            description:"Omnichannel Payouts and Payments",
            contents:[
              { heading: 'In app', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Online', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Virtual Terminal', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'In-person', para: 'A frictionless and secure way for users to make payments' }
            ]
          },
          {
            id: uuidv4(),
            parentId: "features",
            name: "Frictionless Payment Experience",
            description:"For your Customers",
            contents:[
              { heading: 'Apple pay/Google Pay', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Account updater', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Authorization rates', para: 'A frictionless and secure way for users to make payments' },
              
            ]
            
          }
        ]
      },
      {
        id: uuidv4(),
        parentId: "root",
        name: "Connections",
        contents:[],
        children: [
          {
            id: uuidv4(),
            parentId: "connections",
            name: "API",
            description:"Access everything Tabapay has to offer with our unified API",
            contents:[]
          },
          {
            id: uuidv4(),
            parentId: "connections",
            name: "Networks",
            description:"Direct connections to 14 networks",
            contents:[
              { heading: 'Full cost Transparancy for every transaction', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Least cost routing tech', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Unique inter change categories', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'Payment Optimization', para: 'A frictionless and secure way for users to make payments' },
              { heading: 'No Gateway fees', para: 'A frictionNo gatewaless and secure way for users to make payments' }
            ]
          },
          {
            id: uuidv4(),
            parentId: "connections",
            name: "Banks",
            description:"Partnerships with banks that provide banking services for the majority of FinTechs",
            contents:[]
          },
          {
            id: uuidv4(),
            parentId: "connections",
            name: "Integrated Partners",
            description:"Partners that offer embedded money movement",
            contents:[]
          }
        ]
      }
    ]
  }
];

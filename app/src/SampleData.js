// import {v4} from 'uuid';

// export const seasons = [
//   {
//     id: v4(),
//     name: "Platform",
//     description:"Secure, reliable and lower cost instant payments for Fintech innovators. we offer direct access to 15 banking partners, 14 networks, multiple geographies, innovative products and features in one unified API",
//     children: [
//       {
//         id: v4(),
//         name: "Products",
//         children: [
//           {
//             id: v4(),
//             name: "Payouts",
//             description:"Push funds for limitless use cases",
//             children: [
//               {
//                 id: v4(),
//                 name: "PayOut-Child",
//                 description: "Test"
//               }
//             ]
//           },

//           {
//             id: v4(),
//             name: "Payments",
//             description: "Process payments for any customer journey"
//           },
//           {
//             id: v4(),
//             name: "PayFac",
//             description:"Coming Soon"
//           }
//         ]
//       },
//       {
//         id: v4(),
//         name: "Features",
//         children: [
//           {
//             id: v4(),
//             name: "Authentication & Fraud Mitigation",
//             description:"Reduce risk with Tabapay Shield"
//           },
//           {
//             id: v4(),
//             name: "Compliance",
//             description:"Tools to manage PCI compliance and AML"
//           },
//           {
//             id: v4(),
//             name: "Self-service Portal",
//             description:"A single source of truth for all yourreporting needs"
//           },
//           {
//             id: v4(),
//             name: "Channels",
//             description:"Omnichannel Payouts and Payments"
//           },
//           {
//             id: v4(),
//             name: "Frictionless Payment Experience",
//             descriptiom:"For your Customers"
//           }
//         ]
//       },
//       {
//         id: v4(),
//         name: "Connections",
//         children: [
//           {
//             id: v4(),
//             name: "API",
//             description:"Access everything Tabapay has to offer with our unified API"
//           },
//           {
//             id: v4(),
//             name: "Networks",
//             description:"Direct connections to 14 networks"
//           },
//           {
//             id: v4(),
//             name: "Banks",
//             description:"Partnerships with banks that provide banking services for the majority of FinTechs"
//           },
//           {
//             id: v4(),
//             name: "Integrated Partners",
//             description:"Partners that offer embedded money movement"
//           }
//         ]

//       }
//     ]
//   }
// ];

// const raw_seasons = [
//   {
//     name: "December",
//     type: "Winter,Chill",
//     route: "/December"
//   }
// ];

// const types = [...new Set(raw_seasons.map((season) => season.type))];
// console.log(types);
// const mock_seasons = [];
// let multiType = [];
// let multi = false;

// types.map((type) => {
//   console.log(type);
//   const children = [];
//   raw_seasons.map((season) => {
//     if (type.includes(",")) {
//       console.log(type);
//       multi = true;
//       multiType = type.split(",");

//       children.push(
//         Object.assign(
//           {},
//           { name: multiType[1], id: "v4()", route: season.route }
//         )
//       );
//       console.log(children);
//     }

//     // if (season.type === type) {
//     //   children.push(
//     //     Object.assign(
//     //       {},
//     //       { name: season.name, id: "v4()", route: season.route }
//     //     )
//     //   );
//     // }
//   });
//   if (multi) {
//     mock_seasons.push(
//       Object.assign(
//         {},
//         { name: multiType[0], children: children, id: "v4()" }
//       )
//     );
//     console.log(mock_seasons);
//     multi = false;
//   } else {
//     mock_seasons.push(
//       Object.assign({}, { name: type, children: children, id: "v4()" })
//     );
//   }
// });
import { v4 as uuidv4 } from 'uuid';

export const seasons = [
  {
    id: uuidv4(),
    parentId: null, // Root node has no parent
    name: "Platform",
    description:"Secure, reliable and lower cost instant payments for Fintech innovators. we offer direct access to 15 banking partners, 14 networks, multiple geographies, innovative products and features in one unified API",
    children: [
      {
        id: uuidv4(),
        parentId: "root", // Assuming "root" as the ID of the parent node
        name: "Products",
        children: [
          {
            id: uuidv4(),
            parentId: "products",
            name: "Payouts",
            description:"Push funds for limitless use cases",
            children: [
              {
                id: uuidv4(),
                parentId: "payouts",
                name: "PayOut-Child",
                description: "Test"
              }
            ]
          },
          {
            id: uuidv4(),
            parentId: "products",
            name: "Payments",
            description: "Process payments for any customer journey",
            children: [
              {
                id: uuidv4(),
                parentId: "payments",
                name: "payment-Child",
                description: "Test"
              }
            ]
          },
          {
            id: uuidv4(),
            parentId: "products",
            name: "PayFac",
            description:"Coming Soon"
          }
        ]
      },
      {
        id: uuidv4(),
        parentId: "root",
        name: "Features",
        children: [
          {
            id: uuidv4(),
            parentId: "features",
            name: "Authentication & Fraud Mitigation",
            description:"Reduce risk with Tabapay Shield"
          },
          {
            id: uuidv4(),
            parentId: "features",
            name: "Compliance",
            description:"Tools to manage PCI compliance and AML"
          },
          {
            id: uuidv4(),
            parentId: "features",
            name: "Self-service Portal",
            description:"A single source of truth for all your reporting needs"
          },
          {
            id: uuidv4(),
            parentId: "features",
            name: "Channels",
            description:"Omnichannel Payouts and Payments"
          },
          {
            id: uuidv4(),
            parentId: "features",
            name: "Frictionless Payment Experience",
            description:"For your Customers"
          }
        ]
      },
      {
        id: uuidv4(),
        parentId: "root",
        name: "Connections",
        children: [
          {
            id: uuidv4(),
            parentId: "connections",
            name: "API",
            description:"Access everything Tabapay has to offer with our unified API"
          },
          {
            id: uuidv4(),
            parentId: "connections",
            name: "Networks",
            description:"Direct connections to 14 networks"
          },
          {
            id: uuidv4(),
            parentId: "connections",
            name: "Banks",
            description:"Partnerships with banks that provide banking services for the majority of FinTechs"
          },
          {
            id: uuidv4(),
            parentId: "connections",
            name: "Integrated Partners",
            description:"Partners that offer embedded money movement"
          }
        ]
      }
    ]
  }
];

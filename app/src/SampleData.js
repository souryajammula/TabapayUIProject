import {v4} from 'uuid';

export const seasons = [
  {
    id: v4(),
    name: "Platform",
    children: [
      {
        id: v4(),
        name: "Payments",
        children: [
          {
            id: v4(),
            name: "Pay by card",
            route: "/PBC"
          },

          {
            id: v4(),
            name: "Pay by Account",
            route: "/PBA"
          }
        ]
      },{
        id: v4(),
        name: "Payouts",
        children: [
          {
            id: v4(),
            name: "Payout by card",
            route: "/POBC"
          },

          {
            id: v4(),
            name: "Payout by Account",
            route: "/POBA"
          }
        ]
      }
    ]
  }
];

const raw_seasons = [
  {
    name: "December",
    type: "Winter,Chill",
    route: "/December"
  }
];

const types = [...new Set(raw_seasons.map((season) => season.type))];
console.log(types);
const mock_seasons = [];
let multiType = [];
let multi = false;

types.map((type) => {
  console.log(type);
  const children = [];
  raw_seasons.map((season) => {
    if (type.includes(",")) {
      console.log(type);
      multi = true;
      multiType = type.split(",");

      children.push(
        Object.assign(
          {},
          { name: multiType[1], id: "v4()", route: season.route }
        )
      );
      console.log(children);
    }

    // if (season.type === type) {
    //   children.push(
    //     Object.assign(
    //       {},
    //       { name: season.name, id: "v4()", route: season.route }
    //     )
    //   );
    // }
  });
  if (multi) {
    mock_seasons.push(
      Object.assign(
        {},
        { name: multiType[0], children: children, id: "v4()" }
      )
    );
    console.log(mock_seasons);
    multi = false;
  } else {
    mock_seasons.push(
      Object.assign({}, { name: type, children: children, id: "v4()" })
    );
  }
});

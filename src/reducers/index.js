const initialState = {
  notes: [
    {
      id: "_n1",
      title: "Wake me up when Vue ends",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
    },
    {
      id: "_n2",
      title: "Como es An Gular?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
    },
    {
      id: "_n3",
      title: "Du bist Reactish",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "5 days",
    },
    {
      id: "_n4",
      title: "Reactuj się kto moze!",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "10 days",
    },
  ],
  articles: [
    {
      id: "_a1",
      title: "React on my mind",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl: "https://youtube.com/helloroman",
      created: "1 day",
    },
    {
      id: "_a2",
      title: "Wish you React",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl: "https://youtube.com/helloroman",
      created: "1 day",
    },
    {
      id: "_a3",
      title: "You gave React a bad name",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl: "https://youtube.com/helloroman",
      created: "5 days",
    },
    {
      id: "_a4",
      title: "Is it React you looking for?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      articleUrl: "https://youtube.com/helloroman",
      created: "10 days",
    },
  ],
  twitters: [
    {
      id: "_t1",
      title: "Hello Roman",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
      twitterName: "hello_roman",
    },
    {
      id: "_t2",
      title: "Redux guy",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
      twitterName: "dan_abramov",
    },
    {
      id: "_t3",
      title: "React router stuff",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "5 days",
      twitterName: "mjackson",
    },
    {
      id: "_t4",
      title: "Super animacje!",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "10 days",
      twitterName: "sarah_edo",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;

export const data = {
  anchorButtons: [
    { id: "expect", name: "What can i expect" },
    { id: "brands", name: "Our brands" },
    { id: "stories", name: "Costumer stories" },
  ],
  page: [
    {
      id: 1,
      title: "Startpage",
      pagelayout: [
        {
          id: 1,
          title: "Welcome to a new kind of experience.",
          buttonName: "string",
          imgLink: "string",
          buttonLink: "string",
          imgAlt: "string",
        },
      ],
    },
  ],

  contentOne: {
    header:
      "Reimagine happy dogs with free play-days and their own personal caretaker.",
    steps: [
      {
        id: 1,
        title: "Header 1",
        text: "Description of the first step!",
        img_path: "happy-dog.png",
      },
      {
        id: 2,
        title: "Header 2",
        text: "Description of the second awseome step!",
        img_path: "dog-eating.png",
      },
      {
        id: 3,
        title: "Header 3",
        text: "Description of the third step with lots of power!",
        img_path: "dog-butterfly.png",
      },
    ],
  },
  contentTwo: {
    anchorId: "expect",
    header:
      "We will take care of your dog and in the meantime learn it new tricks!",
    steps: [
      {
        id: 1,
        title: "Sleep",
        text: "We will make your dog sleep like a baby.",
        img_path: "dog-sleeping.png",
      },
      {
        id: 2,
        title: "Standing dog",
        text: "We will teach it to stand.",
        img_path: "dog-stand.png",
      },
      {
        id: 3,
        title: "Sit!",
        text: "We will teach it to sit.",
        img_path: "dog-sit.png",
      },
    ],
  },
  simpleText: {
    header: "We guarantee you a 100% happy dog!",
    text: "Free treats included.",
  },
  costumerRanking: {
    header: "SEE HOW OTHER COSTUMERS RANK US",
    stars: 4,
    text: "4 out of 5 stars from 133 customer reviews",
  },
  costumerReviews: {
    anchorId: "stories",
    reviews: [
      {
        text: "My dog will not leave this place!",
        subtext: "Tom Havard",
        picture: "happy-corgi.jpg",
        picAlt: "BIld av huoadg5888 från Pixabay",
        color: "#ef5777",
      },
      {
        text: "Dog heaven!",
        subtext: "Ashly Gorgon",
        picture: "happy-corgi.jpg",
        picAlt: "BIld av huoadg5888 från Pixabay",
        color: "#ffc048",
      },
      {
        text: "This is a company you can trust your dog with.",
        subtext: "Sally Mostard",
        picture: "happy-corgi.jpg",
        picAlt: "BIld av huoadg5888 från Pixabay",
        color: "#9ce5fd",
      },
    ],
  },
  brands: {
    anchorId: "brands",
    images: [
      {
        image: "Brands.png",
        imageAlt: "Brand 1",
      },
      {
        image: "Brands2.png",
        imageAlt: "Brand 2",
      },
      {
        image: "Brands3.png",
        imageAlt: "Brand 3",
      },
      {
        image: "Brands4.png",
        imageAlt: "Brand 4",
      },
      {
        image: "Brands5.png",
        imageAlt: "Brand 5",
      },
    ],
  },
};

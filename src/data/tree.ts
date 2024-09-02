import { Tree } from "@/types";

export const trees: Tree[] = [
  {
    title: "Call to Action",
    slug: "call-to-action",
    category: {
      id: 1,
      title: "UI/UX",
      color: "green",
    },
    description:
      "CTAs directly impact user experience and conversion rates. A well-chosen CTA guides users towards the desired action while minimizing confusion and enhancing user satisfaction.",
    question: {
      id: 1,
      text: "Is the Button the main call to action?",
      answers: [
        {
          id: 11,
          text: "Yes",
          description: "This action is the primary CTA.",
          question: {
            id: 2,
            text: "Do you need an icon to reinforce the action?",
            answers: [
              {
                id: 21,
                text: "Yes",
                question: {
                  id: 3,
                  text: "Do you have space available?",
                  answers: [
                    {
                      id: 31,
                      text: "Yes",
                      description: "Space is not a concern.",
                      result: {
                        text: "Use Primary Button with Icon Right or Left.",
                      },
                    },
                    {
                      id: 32,
                      text: "No",
                      description: "Space is limited.",

                      result: {
                        text: "Use Primary Button",
                      },
                    },
                  ],
                },
              },
              {
                id: 22,
                text: "No",
                result: {
                  text: "Use Primary Button",
                },
              },
            ],
          },
        },
        {
          id: 12,
          text: "No",
          description: "This action is important but not critical.",
          question: {
            id: 4,
            text: "Is the action relevant to the primary CTA?",
            answers: [
              {
                id: 41,
                text: "Yes",
                description: "Action is related to the primary CTA.",
                question: {
                  id: 5,
                  text: "Does the action require a lot of emphasis?",
                  answers: [
                    {
                      id: 51,
                      text: "Yes",
                      description: "I'd like to really emphasize this action.",
                      result: {
                        text: "Use Secondary Button",
                      },
                    },
                    {
                      id: 52,
                      text: "No",
                      description:
                        "This action does not require a lot of emphasis.",
                      result: {
                        text: "Use Tertiary Button",
                      },
                    },
                  ],
                },
              },
              {
                id: 42,
                text: "No",
                description:
                  "Action is related to the page/content of the page.",
                question: {
                  id: 6,
                  text: "Does this action require a lot of emphasis?",
                  answers: [
                    {
                      id: 61,
                      text: "Yes",
                      description: "This action should be emphasized.",
                      result: { text: "Use Secondary Button" },
                    },
                    {
                      id: 62,
                      text: "No",
                      description:
                        "Very little emphasis is needed for this action.",
                      question: {
                        id: 7,
                        text: "Do you have space available?",
                        answers: [
                          {
                            id: 71,
                            text: "Yes",
                            description: "Space is not a concern.",
                            result: { text: "Use Tertiary Icon Button" },
                          },
                          {
                            id: 72,
                            text: "No",
                            description: "Space is limited.",
                            result: { text: "Use Tertiary Text Button" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    title: "Notifications",
    slug: "notifications",
    category: {
      id: 1,
      title: "UI/UX",
      color: "green",
    },
    description:
      "Notification is crucial for user experience and engagement. An appropriately chosen notification method ensures important information is effectively communicated without disrupting the user’s workflow.",
  },
  {
    title: "Modals",
    slug: "modals",
    category: {
      id: 1,
      title: "UI/UX",
      color: "green",
    },
    description:
      "A well-chosen component presents necessary information without distracting the user, allowing for efficient task completion.",
  },
  {
    title: "Adding new component",
    slug: "adding-new-component",
    category: {
      id: 2,
      title: "Management",
      color: "purple",
    },
    description:
      "It should enhance the design's ability to meet user needs and improve the overall experience. It is essential to carefully evaluate whether each new component will positively contribute to the system's integrity and user experience.",
  },
];

import { faker } from "@faker-js/faker";
import { seedStory } from "@storybook-addon-faker/addon";
export const Default = seedStory(
  () => ({
    args: {
      loading: false,
    },
  }),
  {
    faker: faker,
    seed: 999,
  }
);

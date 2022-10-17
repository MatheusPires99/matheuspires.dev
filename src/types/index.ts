export type Technology = {
  id: string;
  name: string;
  websiteUrl: string;
  image: {
    url: string;
  };
  highlightColor:
    | "cyan"
    | "green"
    | "yellow"
    | "pink"
    | "blue"
    | "orange"
    | "black"
    | "red";
};

import * as Scrivito from "scrivito";

const SocialFeedWidget = Scrivito.provideWidgetClass("SocialFeedWidget", {
  attributes: {
    shareButtons: [
      "multienum",
      {values: ["facebook", "twitter", "linkedin"]}
    ]
  },
});

export default SocialFeedWidget;

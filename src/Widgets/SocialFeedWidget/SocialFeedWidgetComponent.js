import * as React from "react";
import * as Scrivito from "scrivito";
import { FacebookShareButton,
         TwitterShareButton,
         LinkedinShareButton,
         FacebookIcon,
         TwitterIcon,
         LinkedinIcon  } from 'react-share';

import "./SocialFeedWidget.scss";



Scrivito.provideComponent("SocialFeedWidget", ({ widget }) => {

  const currentPage = Scrivito.currentPage()
  
  if(!currentPage) return;

  const currentPageUrl = Scrivito.urlFor(currentPage);

  return widget.get("shareButtons").map(shareButton => {
    switch (shareButton) {
      case "facebook":
        return (
          <FacebookShareButton 
              key={'fb'}
              className={'btn'}
              url={currentPageUrl}>
            <FacebookIcon round size={32} />
          </FacebookShareButton>
        );
        case "twitter":
          return (
            <TwitterShareButton 
                key={'tw'}
                className={'btn'}
                url={currentPageUrl}>
              <TwitterIcon round size={32} />
            </TwitterShareButton>
        );
        case "linkedin":
          return (
            <LinkedinShareButton 
                key={'li'}
                className={'btn'}
                url={currentPageUrl}>
              <LinkedinIcon round size={32} />
            </LinkedinShareButton>
        );         
    }
  });
})

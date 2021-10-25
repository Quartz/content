"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlePartsFragmentDoc = void 0;
const client_1 = require("@apollo/client");
const ArticleTeaserParts_1 = require("./ArticleTeaserParts");
const AuthorParts_1 = require("./AuthorParts");
const BlockParts_1 = require("./BlockParts");
const GuideParts_1 = require("./GuideParts");
const ObsessionParts_1 = require("./ObsessionParts");
const ProjectParts_1 = require("./ProjectParts");
const SeriesParts_1 = require("./SeriesParts");
const ShowParts_1 = require("./ShowParts");
exports.ArticlePartsFragmentDoc = client_1.gql `
    fragment ArticleParts on Post {
  ...ArticleTeaserParts
  authors: coAuthors {
    nodes {
      ...AuthorParts
    }
  }
  blocks {
    ...BlockParts
  }
  brandSafety
  canonicalUrl
  colorScheme
  excerpt
  featuredImageSize
  flags {
    nodes {
      name
      slug
    }
  }
  footnotes
  guides {
    nodes {
      ...GuideParts
    }
  }
  interactiveSource
  interactiveShowHeader
  locations {
    nodes {
      name
    }
  }
  metered
  modifiedGmt
  obsessions {
    nodes {
      ...ObsessionParts
    }
  }
  paywalled
  projects {
    nodes {
      ...ProjectParts
    }
  }
  readNext
  serieses {
    nodes {
      ...SeriesParts
    }
  }
  shows {
    nodes {
      ...ShowParts
    }
  }
  slug
  seoTitle
  socialDescription
  socialImage
  socialTitle
  subtype
  suppressAds
  tags(where: {orderby: COUNT}, last: 20) {
    nodes {
      id
      name
      slug
    }
  }
  topics {
    nodes {
      id
      name
      slug
    }
  }
  trackingUrls
}
    ${ArticleTeaserParts_1.ArticleTeaserPartsFragmentDoc}
${AuthorParts_1.AuthorPartsFragmentDoc}
${BlockParts_1.BlockPartsFragmentDoc}
${GuideParts_1.GuidePartsFragmentDoc}
${ObsessionParts_1.ObsessionPartsFragmentDoc}
${ProjectParts_1.ProjectPartsFragmentDoc}
${SeriesParts_1.SeriesPartsFragmentDoc}
${ShowParts_1.ShowPartsFragmentDoc}`;
//# sourceMappingURL=ArticleParts.js.map
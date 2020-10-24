import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import { BlockPartsFragmentDoc } from './BlockParts';
import { GuidePartsFragmentDoc } from './GuideParts';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { ProjectPartsFragmentDoc } from './ProjectParts';
import { SeriesPartsFragmentDoc } from './SeriesParts';
import { ShowPartsFragmentDoc } from './ShowParts';
export const ArticlePartsFragmentDoc = /*#__PURE__*/ gql `
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
  canonicalUrl
  classifications
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
    ${ArticleTeaserPartsFragmentDoc}
${AuthorPartsFragmentDoc}
${BlockPartsFragmentDoc}
${GuidePartsFragmentDoc}
${ObsessionPartsFragmentDoc}
${ProjectPartsFragmentDoc}
${SeriesPartsFragmentDoc}
${ShowPartsFragmentDoc}`;
//# sourceMappingURL=ArticleParts.js.map
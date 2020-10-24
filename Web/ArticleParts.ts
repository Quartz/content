import type * as Types from './types';

import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { AuthorPartsFragment } from './AuthorParts';
import type { BlockPartsFragment } from './BlockParts';
import type { GuidePartsFragment } from './GuideParts';
import type { ObsessionPartsFragment } from './ObsessionParts';
import type { ProjectPartsFragment } from './ProjectParts';
import type { SeriesPartsFragment } from './SeriesParts';
import type { ShowPartsFragment } from './ShowParts';
import { gql } from '@apollo/client';
import { ArticleTeaserPartsFragmentDoc } from './ArticleTeaserParts';
import { AuthorPartsFragmentDoc } from './AuthorParts';
import { BlockPartsFragmentDoc } from './BlockParts';
import { GuidePartsFragmentDoc } from './GuideParts';
import { ObsessionPartsFragmentDoc } from './ObsessionParts';
import { ProjectPartsFragmentDoc } from './ProjectParts';
import { SeriesPartsFragmentDoc } from './SeriesParts';
import { ShowPartsFragmentDoc } from './ShowParts';
export type ArticlePartsFragment = (
  { __typename?: 'Post' }
  & Pick<Types.Post, 'canonicalUrl' | 'classifications' | 'excerpt' | 'featuredImageSize' | 'footnotes' | 'interactiveSource' | 'interactiveShowHeader' | 'metered' | 'modifiedGmt' | 'paywalled' | 'readNext' | 'slug' | 'seoTitle' | 'socialDescription' | 'socialImage' | 'socialTitle' | 'subtype' | 'suppressAds' | 'trackingUrls'>
  & { authors?: Types.Maybe<(
    { __typename?: 'PostToCoAuthorConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'CoAuthor' }
      & AuthorPartsFragment
    )>>> }
  )>, blocks?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Block' }
    & BlockPartsFragment
  )>>>, flags?: Types.Maybe<(
    { __typename?: 'PostToFlagConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Flag' }
      & Pick<Types.Flag, 'name' | 'slug'>
    )>>> }
  )>, guides?: Types.Maybe<(
    { __typename?: 'PostToGuideConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Guide' }
      & GuidePartsFragment
    )>>> }
  )>, locations?: Types.Maybe<(
    { __typename?: 'PostToLocationConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Location' }
      & Pick<Types.Location, 'name'>
    )>>> }
  )>, obsessions?: Types.Maybe<(
    { __typename?: 'PostToObsessionConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Obsession' }
      & ObsessionPartsFragment
    )>>> }
  )>, projects?: Types.Maybe<(
    { __typename?: 'PostToProjectConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Project' }
      & ProjectPartsFragment
    )>>> }
  )>, serieses?: Types.Maybe<(
    { __typename?: 'PostToSeriesConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Series' }
      & SeriesPartsFragment
    )>>> }
  )>, shows?: Types.Maybe<(
    { __typename?: 'PostToShowConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Show' }
      & ShowPartsFragment
    )>>> }
  )>, tags?: Types.Maybe<(
    { __typename?: 'PostToTagConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Tag' }
      & Pick<Types.Tag, 'id' | 'name' | 'slug'>
    )>>> }
  )>, topics?: Types.Maybe<(
    { __typename?: 'PostToTopicConnection' }
    & { nodes?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Topic' }
      & Pick<Types.Topic, 'id' | 'name' | 'slug'>
    )>>> }
  )> }
  & ArticleTeaserPartsFragment
);

export const ArticlePartsFragmentDoc = /*#__PURE__*/ gql`
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
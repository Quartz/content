import type * as Types from './types';
import type { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import type { AuthorPartsFragment } from './AuthorParts';
import type { BlockPartsFragment } from './BlockParts';
import type { GuidePartsFragment } from './GuideParts';
import type { ObsessionPartsFragment } from './ObsessionParts';
import type { ProjectPartsFragment } from './ProjectParts';
import type { SeriesPartsFragment } from './SeriesParts';
import type { ShowPartsFragment } from './ShowParts';
export declare type ArticlePartsFragment = ({
    __typename?: 'Post';
    brandSafety?: Types.Maybe<Array<Types.Maybe<number>>>;
    canonicalUrl?: Types.Maybe<string>;
    colorScheme?: Types.Maybe<Array<Types.Maybe<string>>>;
    excerpt?: Types.Maybe<string>;
    featuredImageSize?: Types.Maybe<string>;
    footnotes?: Types.Maybe<Array<Types.Maybe<string>>>;
    interactiveSource?: Types.Maybe<string>;
    interactiveShowHeader?: Types.Maybe<boolean>;
    metered?: Types.Maybe<boolean>;
    modifiedGmt?: Types.Maybe<string>;
    paywalled?: Types.Maybe<boolean>;
    readNext?: Types.Maybe<Array<Types.Maybe<string>>>;
    slug?: Types.Maybe<string>;
    seoTitle?: Types.Maybe<string>;
    socialDescription?: Types.Maybe<string>;
    socialImage?: Types.Maybe<string>;
    socialTitle?: Types.Maybe<string>;
    subtype?: Types.Maybe<string>;
    suppressAds?: Types.Maybe<boolean>;
    trackingUrls?: Types.Maybe<Array<Types.Maybe<string>>>;
    authors?: Types.Maybe<{
        __typename?: 'PostToCoAuthorConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'CoAuthor';
        } & AuthorPartsFragment)>>>;
    }>;
    blocks?: Types.Maybe<Array<Types.Maybe<({
        __typename?: 'Block';
    } & BlockPartsFragment)>>>;
    flags?: Types.Maybe<{
        __typename?: 'PostToFlagConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Flag';
            name?: Types.Maybe<string>;
            slug?: Types.Maybe<string>;
        }>>>;
    }>;
    guides?: Types.Maybe<{
        __typename?: 'PostToGuideConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Guide';
        } & GuidePartsFragment)>>>;
    }>;
    locations?: Types.Maybe<{
        __typename?: 'PostToLocationConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Location';
            name?: Types.Maybe<string>;
        }>>>;
    }>;
    obsessions?: Types.Maybe<{
        __typename?: 'PostToObsessionConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Obsession';
        } & ObsessionPartsFragment)>>>;
    }>;
    projects?: Types.Maybe<{
        __typename?: 'PostToProjectConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Project';
        } & ProjectPartsFragment)>>>;
    }>;
    serieses?: Types.Maybe<{
        __typename?: 'PostToSeriesConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Series';
        } & SeriesPartsFragment)>>>;
    }>;
    shows?: Types.Maybe<{
        __typename?: 'PostToShowConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Show';
        } & ShowPartsFragment)>>>;
    }>;
    tags?: Types.Maybe<{
        __typename?: 'PostToTagConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Tag';
            id: string;
            name?: Types.Maybe<string>;
            slug?: Types.Maybe<string>;
        }>>>;
    }>;
    topics?: Types.Maybe<{
        __typename?: 'PostToTopicConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<{
            __typename?: 'Topic';
            id: string;
            name?: Types.Maybe<string>;
            slug?: Types.Maybe<string>;
        }>>>;
    }>;
} & ArticleTeaserPartsFragment);
export declare const ArticlePartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=ArticleParts.d.ts.map
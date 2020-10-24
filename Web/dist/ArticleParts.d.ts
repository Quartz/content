import * as Types from './types';
import { ArticleTeaserPartsFragment } from './ArticleTeaserParts';
import { AuthorPartsFragment } from './AuthorParts';
import { BlockPartsFragment } from './BlockParts';
import { GuidePartsFragment } from './GuideParts';
import { ObsessionPartsFragment } from './ObsessionParts';
import { ProjectPartsFragment } from './ProjectParts';
import { SeriesPartsFragment } from './SeriesParts';
import { ShowPartsFragment } from './ShowParts';
export declare type ArticlePartsFragment = ({
    __typename?: 'Post';
} & Pick<Types.Post, 'canonicalUrl' | 'classifications' | 'excerpt' | 'featuredImageSize' | 'footnotes' | 'interactiveSource' | 'interactiveShowHeader' | 'metered' | 'modifiedGmt' | 'paywalled' | 'readNext' | 'slug' | 'seoTitle' | 'socialDescription' | 'socialImage' | 'socialTitle' | 'subtype' | 'suppressAds' | 'trackingUrls'> & {
    authors?: Types.Maybe<({
        __typename?: 'PostToCoAuthorConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'CoAuthor';
        } & AuthorPartsFragment)>>>;
    })>;
    blocks?: Types.Maybe<Array<Types.Maybe<({
        __typename?: 'Block';
    } & BlockPartsFragment)>>>;
    flags?: Types.Maybe<({
        __typename?: 'PostToFlagConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Flag';
        } & Pick<Types.Flag, 'name' | 'slug'>)>>>;
    })>;
    guides?: Types.Maybe<({
        __typename?: 'PostToGuideConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Guide';
        } & GuidePartsFragment)>>>;
    })>;
    locations?: Types.Maybe<({
        __typename?: 'PostToLocationConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Location';
        } & Pick<Types.Location, 'name'>)>>>;
    })>;
    obsessions?: Types.Maybe<({
        __typename?: 'PostToObsessionConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Obsession';
        } & ObsessionPartsFragment)>>>;
    })>;
    projects?: Types.Maybe<({
        __typename?: 'PostToProjectConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Project';
        } & ProjectPartsFragment)>>>;
    })>;
    serieses?: Types.Maybe<({
        __typename?: 'PostToSeriesConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Series';
        } & SeriesPartsFragment)>>>;
    })>;
    shows?: Types.Maybe<({
        __typename?: 'PostToShowConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Show';
        } & ShowPartsFragment)>>>;
    })>;
    tags?: Types.Maybe<({
        __typename?: 'PostToTagConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Tag';
        } & Pick<Types.Tag, 'id' | 'name' | 'slug'>)>>>;
    })>;
    topics?: Types.Maybe<({
        __typename?: 'PostToTopicConnection';
    } & {
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'Topic';
        } & Pick<Types.Topic, 'id' | 'name' | 'slug'>)>>>;
    })>;
} & ArticleTeaserPartsFragment);
export declare const ArticlePartsFragmentDoc: import("@apollo/client").DocumentNode;

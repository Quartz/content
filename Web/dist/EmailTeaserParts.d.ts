import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
import type { AuthorPartsFragment } from './AuthorParts';
export declare type EmailTeaserPartsFragment = {
    __typename?: 'Email';
    id: string;
    dateGmt?: Types.Maybe<string>;
    emailId: number;
    link?: Types.Maybe<string>;
    slug?: Types.Maybe<string>;
    segment?: Types.Maybe<string>;
    seoTitle?: Types.Maybe<string>;
    socialDescription?: Types.Maybe<string>;
    socialTitle?: Types.Maybe<string>;
    subject?: Types.Maybe<string>;
    title?: Types.Maybe<string>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    socialImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    authors?: Types.Maybe<{
        __typename?: 'EmailToCoAuthorConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'CoAuthor';
        } & AuthorPartsFragment)>>>;
    }>;
};
export declare const EmailTeaserPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=EmailTeaserParts.d.ts.map
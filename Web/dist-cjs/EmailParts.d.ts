import type * as Types from './types';
import type { AuthorPartsFragment } from './AuthorParts';
import type { MediaPartsFragment } from './MediaParts';
export declare type EmailPartsFragment = {
    __typename?: 'Email';
    id: string;
    dateGmt?: Types.Maybe<string>;
    emailId: number;
    link?: Types.Maybe<string>;
    segment?: Types.Maybe<string>;
    seoTitle?: Types.Maybe<string>;
    socialDescription?: Types.Maybe<string>;
    socialTitle?: Types.Maybe<string>;
    subject?: Types.Maybe<string>;
    title?: Types.Maybe<string>;
    authors?: Types.Maybe<{
        __typename?: 'EmailToCoAuthorConnection';
        nodes?: Types.Maybe<Array<Types.Maybe<({
            __typename?: 'CoAuthor';
        } & AuthorPartsFragment)>>>;
    }>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    socialImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
};
export declare const EmailPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=EmailParts.d.ts.map
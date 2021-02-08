import type * as Types from './types';
import type { BlockPartsFragment } from './BlockParts';
import type { MediaPartsFragment } from './MediaParts';
export declare type EmailPartsFragment = {
    __typename?: 'Email';
    id: string;
    dateGmt?: Types.Maybe<string>;
    emailId: number;
    segment?: Types.Maybe<string>;
    seoTitle?: Types.Maybe<string>;
    socialDescription?: Types.Maybe<string>;
    subject?: Types.Maybe<string>;
    title?: Types.Maybe<string>;
    blocks?: Types.Maybe<Array<Types.Maybe<({
        __typename?: 'Block';
    } & BlockPartsFragment)>>>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
    socialImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
};
export declare const EmailPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=EmailParts.d.ts.map
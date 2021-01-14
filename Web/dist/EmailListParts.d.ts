import type * as Types from './types';
import type { MediaPartsFragment } from './MediaParts';
export declare type EmailListPartsFragment = {
    __typename?: 'EmailList';
    id: string;
    description?: Types.Maybe<string>;
    link?: Types.Maybe<string>;
    listId?: Types.Maybe<number>;
    name?: Types.Maybe<string>;
    slug?: Types.Maybe<string>;
    summary?: Types.Maybe<string>;
    subtitle?: Types.Maybe<string>;
    isPrivate?: Types.Maybe<boolean>;
    featuredImage?: Types.Maybe<({
        __typename?: 'MediaItem';
    } & MediaPartsFragment)>;
};
export declare const EmailListPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=EmailListParts.d.ts.map
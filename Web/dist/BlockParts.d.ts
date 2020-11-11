import type * as Types from './types';
export declare type BlockPartsFragment = {
    __typename?: 'Block';
    id?: Types.Maybe<string>;
    innerHtml?: Types.Maybe<string>;
    tagName?: Types.Maybe<string>;
    type?: Types.Maybe<Types.BlockNameEnum>;
    attributes?: Types.Maybe<Array<Types.Maybe<{
        __typename?: 'Attribute';
        name?: Types.Maybe<string>;
        value?: Types.Maybe<string>;
    }>>>;
};
export declare const BlockPartsFragmentDoc: import("@apollo/client").DocumentNode;
//# sourceMappingURL=BlockParts.d.ts.map
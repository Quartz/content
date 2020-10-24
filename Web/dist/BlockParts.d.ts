import type * as Types from './types';
export declare type BlockPartsFragment = ({
    __typename?: 'Block';
} & Pick<Types.Block, 'id' | 'innerHtml' | 'tagName' | 'type'> & {
    attributes?: Types.Maybe<Array<Types.Maybe<({
        __typename?: 'Attribute';
    } & Pick<Types.Attribute, 'name' | 'value'>)>>>;
});
export declare const BlockPartsFragmentDoc: import("@apollo/client").DocumentNode;

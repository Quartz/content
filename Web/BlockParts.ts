import type * as Types from './types';

import { gql } from '@apollo/client';
export type BlockPartsFragment = { __typename?: 'Block', id?: Types.Maybe<string>, innerHtml?: Types.Maybe<string>, tagName?: Types.Maybe<string>, type?: Types.Maybe<Types.BlockNameEnum>, attributes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Attribute', name?: Types.Maybe<string>, value?: Types.Maybe<string> }>>> };

export const BlockPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment BlockParts on Block {
  attributes {
    name
    value
  }
  id
  innerHtml
  tagName
  type
}
    `;
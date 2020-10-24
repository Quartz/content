import type * as Types from './types';

import { gql } from '@apollo/client';
export type BlockPartsFragment = (
  { __typename?: 'Block' }
  & Pick<Types.Block, 'id' | 'innerHtml' | 'tagName' | 'type'>
  & { attributes?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Attribute' }
    & Pick<Types.Attribute, 'name' | 'value'>
  )>>> }
);

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
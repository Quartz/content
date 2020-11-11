import type * as Types from './types';

import { gql } from '@apollo/client';
export type ProjectPartsFragment = { __typename?: 'Project', id: string, count?: Types.Maybe<number>, description?: Types.Maybe<string>, shortDescription?: Types.Maybe<string>, link?: Types.Maybe<string>, name?: Types.Maybe<string>, slug?: Types.Maybe<string> };

export const ProjectPartsFragmentDoc = /*#__PURE__*/ gql`
    fragment ProjectParts on Project {
  id
  count
  description
  shortDescription
  link
  name
  slug
}
    `;
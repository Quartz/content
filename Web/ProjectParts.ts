import * as Types from './types';

import { gql } from '@apollo/client';
export type ProjectPartsFragment = (
  { __typename?: 'Project' }
  & Pick<Types.Project, 'id' | 'count' | 'description' | 'shortDescription' | 'link' | 'name' | 'slug'>
);

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
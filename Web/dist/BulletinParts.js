import { gql } from '@apollo/client';
import { MediaPartsFragmentDoc } from './MediaParts';
export const BulletinPartsFragmentDoc = /*#__PURE__*/ gql `
    fragment BulletinParts on Bulletin {
  link
  title
  dateGmt
  featuredImage {
    ...MediaParts
  }
  bulletin {
    sponsor {
      name
    }
    campaign {
      id
    }
    clientTracking {
      article
      elsewhere
    }
  }
}
    ${MediaPartsFragmentDoc}`;
//# sourceMappingURL=BulletinParts.js.map
import * as Types from './types';
export declare type ProjectPartsFragment = ({
    __typename?: 'Project';
} & Pick<Types.Project, 'id' | 'count' | 'description' | 'shortDescription' | 'link' | 'name' | 'slug'>);
export declare const ProjectPartsFragmentDoc: import("@apollo/client").DocumentNode;

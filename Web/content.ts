import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery';
  /**
   * A 0bject
   * @deprecated 
   */
  blogPost?: Maybe<BlogPost>;
  /**
   * A blogPost object
   * @deprecated 
   */
  blogPostBy?: Maybe<BlogPost>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  blogPosts?: Maybe<RootQueryToBlogPostConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  bulletin?: Maybe<Bulletin>;
  /**
   * A bulletin object
   * @deprecated 
   */
  bulletinBy?: Maybe<Bulletin>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  bulletins?: Maybe<RootQueryToBulletinConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  card?: Maybe<Card>;
  /**
   * A card object
   * @deprecated 
   */
  cardBy?: Maybe<Card>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  cards?: Maybe<RootQueryToCardConnection>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  categories?: Maybe<RootQueryToCategoryConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  category?: Maybe<Category>;
  /**
   * A 0bject
   * @deprecated 
   */
  chapter?: Maybe<Chapter>;
  /**
   * A chapter object
   * @deprecated 
   */
  chapterBy?: Maybe<Chapter>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  chapters?: Maybe<RootQueryToChapterConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  coAuthor?: Maybe<CoAuthor>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  coAuthors?: Maybe<RootQueryToCoAuthorConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  collection?: Maybe<Collection>;
  /**
   * A collection object
   * @deprecated 
   */
  collectionBy?: Maybe<Collection>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  collections?: Maybe<RootQueryToCollectionConnection>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  content?: Maybe<RootQueryToContentUnionConnection>;
  /**
   * Get an object in the content union by its object (WordPress) ID.
   * @deprecated 
   */
  contentBy?: Maybe<ContentUnion>;
  /**
   * A 0bject
   * @deprecated 
   */
  edition?: Maybe<Edition>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  editions?: Maybe<RootQueryToEditionConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  email?: Maybe<Email>;
  /**
   * A email object
   * @deprecated 
   */
  emailBy?: Maybe<Email>;
  /**
   * A 0bject
   * @deprecated 
   */
  emailList?: Maybe<EmailList>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  emailLists?: Maybe<RootQueryToEmailListConnection>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  emails?: Maybe<RootQueryToEmailConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  flag?: Maybe<Flag>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  flags?: Maybe<RootQueryToFlagConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  guide?: Maybe<Guide>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  guides?: Maybe<RootQueryToGuideConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  location?: Maybe<Location>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  locations?: Maybe<RootQueryToLocationConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  mediaItem?: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated 
   */
  mediaItemBy?: Maybe<MediaItem>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  /**
   * A WordPress navigation menu
   * @deprecated 
   */
  menu?: Maybe<Menu>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  menus?: Maybe<RootQueryToMenuConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  nug?: Maybe<Nug>;
  /**
   * A nug object
   * @deprecated 
   */
  nugBy?: Maybe<Nug>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  nugs?: Maybe<RootQueryToNugConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  obsession?: Maybe<Obsession>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  obsessions?: Maybe<RootQueryToObsessionConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  page?: Maybe<Page>;
  /**
   * A page object
   * @deprecated 
   */
  pageBy?: Maybe<Page>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  pages?: Maybe<RootQueryToPageConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  post?: Maybe<Post>;
  /**
   * A post object
   * @deprecated 
   */
  postBy?: Maybe<Post>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  posts?: Maybe<RootQueryToPostConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  project?: Maybe<Project>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  projects?: Maybe<RootQueryToProjectConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  promotion?: Maybe<Promotion>;
  /**
   * A promotion object
   * @deprecated 
   */
  promotionBy?: Maybe<Promotion>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  promotions?: Maybe<RootQueryToPromotionConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  push?: Maybe<Push>;
  /**
   * A push object
   * @deprecated 
   */
  pushBy?: Maybe<Push>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  pushes?: Maybe<RootQueryToPushConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  revision?: Maybe<Revision>;
  /**
   * A revision object
   * @deprecated 
   */
  revisionBy?: Maybe<Revision>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  revisions?: Maybe<RootQueryToRevisionConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  series?: Maybe<Series>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  serieses?: Maybe<RootQueryToSeriesConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  show?: Maybe<Show>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  shows?: Maybe<RootQueryToShowConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  stack?: Maybe<Stack>;
  /**
   * A stack object
   * @deprecated 
   */
  stackBy?: Maybe<Stack>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  stacks?: Maybe<RootQueryToStackConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  tag?: Maybe<Tag>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  tags?: Maybe<RootQueryToTagConnection>;
  /**
   * A 0bject
   * @deprecated 
   */
  topic?: Maybe<Topic>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  topics?: Maybe<RootQueryToTopicConnection>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  trendingPosts?: Maybe<RootQueryToPostConnection>;
  /**
   * Returns a user
   * @deprecated 
   */
  user?: Maybe<User>;
  /**
   * Connection between the RootQuery type and the RootQuery type
   * @deprecated 
   */
  users?: Maybe<RootQueryToUserConnection>;
};


/** The root entry point into the Graph */
export type RootQueryBlogPostArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryBlogPostByArgs = {
  id?: Maybe<Scalars['ID']>;
  blogPostId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryBlogPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToBlogPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryBulletinArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryBulletinByArgs = {
  id?: Maybe<Scalars['ID']>;
  bulletinId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToBulletinConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCardArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryCardByArgs = {
  id?: Maybe<Scalars['ID']>;
  cardId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryCardsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCardConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryChapterArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryChapterByArgs = {
  id?: Maybe<Scalars['ID']>;
  chapterId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryChaptersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToChapterConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCoAuthorArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryCoAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCoAuthorConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCollectionArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryCollectionByArgs = {
  id?: Maybe<Scalars['ID']>;
  collectionId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCollectionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToContentUnionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentByArgs = {
  objectId?: Maybe<Scalars['Int']>;
};


/** The root entry point into the Graph */
export type RootQueryEditionArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryEditionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToEditionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryEmailArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryEmailByArgs = {
  id?: Maybe<Scalars['ID']>;
  emailId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryEmailListArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryEmailListsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToEmailListConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryEmailsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToEmailConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryFlagArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryFlagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToFlagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryGuideArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryGuidesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToGuideConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryLocationArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryLocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToLocationConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: Maybe<Scalars['ID']>;
  mediaItemId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryNugArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryNugByArgs = {
  id?: Maybe<Scalars['ID']>;
  nugId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryNugsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToNugConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryObsessionArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryObsessionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToObsessionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: Maybe<Scalars['ID']>;
  pageId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: Maybe<Scalars['ID']>;
  postId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryProjectArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryProjectsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProjectConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPromotionArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryPromotionByArgs = {
  id?: Maybe<Scalars['ID']>;
  promotionId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPromotionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPromotionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPushArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryPushByArgs = {
  id?: Maybe<Scalars['ID']>;
  pushId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryPushesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPushConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRevisionArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryRevisionByArgs = {
  id?: Maybe<Scalars['ID']>;
  revisionId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToRevisionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQuerySeriesArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQuerySeriesesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToSeriesConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryShowArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryShowsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToShowConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryStackArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryStackByArgs = {
  id?: Maybe<Scalars['ID']>;
  stackId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryStacksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToStackConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTopicArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryTopicsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTopicConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTrendingPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID'];
};


/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToUserConnectionWhereArgs>;
};

/** The blogPost type */
export type BlogPost = Node & {
  __typename?: 'BlogPost';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  blogPostId: Scalars['Int'];
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the blogPost type and the blogPost type
   * @deprecated 
   */
  tags?: Maybe<BlogPostToTagConnection>;
  /**
   * Terms connected to the blogPost
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the blogPost
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the blogPost
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The blogPost type */
export type BlogPostAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The blogPost type */
export type BlogPostContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The blogPost type */
export type BlogPostExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The blogPost type */
export type BlogPostTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BlogPostToTagConnectionWhereArgs>;
};


/** The blogPost type */
export type BlogPostTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The blogPost type */
export type BlogPostTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The blogPost type */
export type BlogPostTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The blogPost type */
export type BlogPostTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object */
  id: Scalars['ID'];
};

/** Allowed Post Types */
export enum PostTypeEnum {
  Attachment = 'ATTACHMENT',
  Blog = 'BLOG',
  Bulletin = 'BULLETIN',
  Chapter = 'CHAPTER',
  Collection = 'COLLECTION',
  Nug = 'NUG',
  Page = 'PAGE',
  Post = 'POST',
  Promotion = 'PROMOTION',
  Push = 'PUSH',
  QzCard = 'QZ_CARD',
  QzEmail = 'QZ_EMAIL',
  QzStack = 'QZ_STACK',
  Revision = 'REVISION'
}

export type PostObjectUnion = Post | Page | MediaItem | Revision | Push | Email | Card | Chapter | Promotion | BlogPost | Nug | Collection | Stack | Bulletin;

/** The post type */
export type Post = Node & {
  __typename?: 'Post';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * Bulletin data
   * @deprecated 
   */
  bulletin?: Maybe<BulletinData>;
  /**
   * URL to use with canonical meta tag
   * @deprecated 
   */
  canonicalUrl?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  categories?: Maybe<PostToCategoryConnection>;
  /**
   * Contextual classifications for anti-targeting
   * @deprecated 
   */
  classifications?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  coAuthors?: Maybe<PostToCoAuthorConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  comments?: Maybe<PostToCommentConnection>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * Flag to disable AMP version of post
   * @deprecated 
   */
  disableAmp?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  editions?: Maybe<PostToEditionConnection>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * &quot;T-shirt&quot; size of featured image
   * @deprecated 
   */
  featuredImageSize?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  flags?: Maybe<PostToFlagConnection>;
  /**
   * Article footnotes
   * @deprecated 
   */
  footnotes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  guides?: Maybe<PostToGuideConnection>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Flag to show header for interactive posts
   * @deprecated 
   */
  interactiveShowHeader?: Maybe<Scalars['Boolean']>;
  /**
   * Interactive Source
   * @deprecated 
   */
  interactiveSource?: Maybe<Scalars['String']>;
  /**
   * Article kicker
   * @deprecated 
   */
  kicker?: Maybe<Scalars['String']>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  locations?: Maybe<PostToLocationConnection>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * This post counts towards and can display the metered paywall
   * @deprecated 
   */
  metered?: Maybe<Scalars['Boolean']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  obsessions?: Maybe<PostToObsessionConnection>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * Show the paywall for this post
   * @deprecated 
   */
  paywalled?: Maybe<Scalars['Boolean']>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * Platform (news) ID for this post
   * @deprecated 
   */
  platformId?: Maybe<Scalars['Int']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  postId: Scalars['Int'];
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  projects?: Maybe<PostToProjectConnection>;
  /**
   * Article recommendations
   * @deprecated 
   */
  readNext?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * SEO title
   * @deprecated 
   */
  seoTitle?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  serieses?: Maybe<PostToSeriesConnection>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  shows?: Maybe<PostToShowConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * OpenGraph (meta) description
   * @deprecated 
   */
  socialDescription?: Maybe<Scalars['String']>;
  /**
   * Social image url
   * @deprecated 
   */
  socialImage?: Maybe<Scalars['String']>;
  /**
   * OpenGraph (meta) title
   * @deprecated 
   */
  socialTitle?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Article type
   * @deprecated 
   */
  subtype?: Maybe<Scalars['String']>;
  /**
   * Suppress ads on this article page
   * @deprecated 
   */
  suppressAds?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  tags?: Maybe<PostToTagConnection>;
  /**
   * Terms connected to the post
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the post
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the post
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * Connection between the post type and the post type
   * @deprecated 
   */
  topics?: Maybe<PostToTopicConnection>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * List of tracking urls
   * @deprecated 
   */
  trackingUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Trailer video data
   * @deprecated 
   */
  trailerVideo?: Maybe<VideoData>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
  /**
   * Video data
   * @deprecated 
   */
  video?: Maybe<VideoData>;
};


/** The post type */
export type PostAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The post type */
export type PostCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCategoryConnectionWhereArgs>;
};


/** The post type */
export type PostCoAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCoAuthorConnectionWhereArgs>;
};


/** The post type */
export type PostCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCommentConnectionWhereArgs>;
};


/** The post type */
export type PostContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostEditionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToEditionConnectionWhereArgs>;
};


/** The post type */
export type PostExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostFlagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToFlagConnectionWhereArgs>;
};


/** The post type */
export type PostGuidesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToGuideConnectionWhereArgs>;
};


/** The post type */
export type PostLocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToLocationConnectionWhereArgs>;
};


/** The post type */
export type PostObsessionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToObsessionConnectionWhereArgs>;
};


/** The post type */
export type PostProjectsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToProjectConnectionWhereArgs>;
};


/** The post type */
export type PostSeriesesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToSeriesConnectionWhereArgs>;
};


/** The post type */
export type PostShowsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToShowConnectionWhereArgs>;
};


/** The post type */
export type PostTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTagConnectionWhereArgs>;
};


/** The post type */
export type PostTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The post type */
export type PostTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The post type */
export type PostTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The post type */
export type PostTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostTopicsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTopicConnectionWhereArgs>;
};

/** A User object */
export type User = Node & {
  __typename?: 'User';
  /**
   * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
   * @deprecated 
   */
  avatar?: Maybe<Avatar>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  blogPosts?: Maybe<UserToBlogPostConnection>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  bulletins?: Maybe<UserToBulletinConnection>;
  /**
   * This field is the id of the user. The id of the user matches WP_User-&gt;ID field and the value in the ID column for the &quot;users&quot; table in SQL.
   * @deprecated 
   */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * User metadata option name. Usually it will be &quot;wp_capabilities&quot;.
   * @deprecated 
   */
  capKey?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  cards?: Maybe<UserToCardConnection>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  chapters?: Maybe<UserToChapterConnection>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  collections?: Maybe<UserToCollectionConnection>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  comments?: Maybe<UserToCommentConnection>;
  /**
   * Description of the user.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Email of the user. This is equivalent to the WP_User-&gt;user_email property.
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  emails?: Maybe<UserToEmailConnection>;
  /**
   * A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps.
   * @deprecated 
   */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
   * @deprecated 
   */
  firstName?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the user
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
   * @deprecated 
   */
  lastName?: Maybe<Scalars['String']>;
  /**
   * The preferred language locale set for the user. Value derived from get_user_locale().
   * @deprecated 
   */
  locale?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  mediaItems?: Maybe<UserToMediaItemConnection>;
  /**
   * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated 
   */
  nicename?: Maybe<Scalars['String']>;
  /**
   * Nickname of the user.
   * @deprecated 
   */
  nickname?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  nugs?: Maybe<UserToNugConnection>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  pages?: Maybe<UserToPageConnection>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  posts?: Maybe<UserToPostConnection>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  promotions?: Maybe<UserToPromotionConnection>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  pushes?: Maybe<UserToPushConnection>;
  /**
   * The date the user registered or was created. The field follows a full ISO8601 date string format.
   * @deprecated 
   */
  registeredDate?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  revisions?: Maybe<UserToRevisionConnection>;
  /**
   * A list of roles that the user has. Roles can be used for querying for certain types of users, but should not be used in permissions checks.
   * @deprecated 
   */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Connection between the User type and the User type
   * @deprecated 
   */
  stacks?: Maybe<UserToStackConnection>;
  /**
   * A website url that is associated with the user.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
  /**
   * The Id of the user. Equivelant to WP_User-&gt;ID
   * @deprecated 
   */
  userId?: Maybe<Scalars['Int']>;
  /**
   * Username for the user. This field is equivalent to WP_User-&gt;user_login.
   * @deprecated 
   */
  username?: Maybe<Scalars['String']>;
};


/** A User object */
export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
  forceDefault?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<AvatarRatingEnum>;
};


/** A User object */
export type UserBlogPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToBlogPostConnectionWhereArgs>;
};


/** A User object */
export type UserBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToBulletinConnectionWhereArgs>;
};


/** A User object */
export type UserCardsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToCardConnectionWhereArgs>;
};


/** A User object */
export type UserChaptersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToChapterConnectionWhereArgs>;
};


/** A User object */
export type UserCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToCollectionConnectionWhereArgs>;
};


/** A User object */
export type UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToCommentConnectionWhereArgs>;
};


/** A User object */
export type UserEmailsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToEmailConnectionWhereArgs>;
};


/** A User object */
export type UserMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToMediaItemConnectionWhereArgs>;
};


/** A User object */
export type UserNugsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToNugConnectionWhereArgs>;
};


/** A User object */
export type UserPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPageConnectionWhereArgs>;
};


/** A User object */
export type UserPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPostConnectionWhereArgs>;
};


/** A User object */
export type UserPromotionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPromotionConnectionWhereArgs>;
};


/** A User object */
export type UserPushesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPushConnectionWhereArgs>;
};


/** A User object */
export type UserRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToRevisionConnectionWhereArgs>;
};


/** A User object */
export type UserStacksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToStackConnectionWhereArgs>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X'
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar';
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   * @deprecated 
   */
  default?: Maybe<Scalars['String']>;
  /**
   * HTML attributes to insert in the IMG element. Is not sanitized.
   * @deprecated 
   */
  extraAttr?: Maybe<Scalars['String']>;
  /**
   * Whether to always show the default image, never the Gravatar.
   * @deprecated 
   */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the avatar was successfully found.
   * @deprecated 
   */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /**
   * Height of the avatar image.
   * @deprecated 
   */
  height?: Maybe<Scalars['Int']>;
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   * @deprecated 
   */
  rating?: Maybe<Scalars['String']>;
  /**
   * Type of url scheme to use. Typically HTTP vs. HTTPS.
   * @deprecated 
   */
  scheme?: Maybe<Scalars['String']>;
  /**
   * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
   * @deprecated 
   */
  size?: Maybe<Scalars['Int']>;
  /**
   * URL for the gravatar image source.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
  /**
   * Width of the avatar image.
   * @deprecated 
   */
  width?: Maybe<Scalars['Int']>;
};

/** Arguments for filtering the UserToBlogPostConnection connection */
export type UserToBlogPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Coauthor type */
export enum AuthorType {
  Guest = 'GUEST',
  Wordpress = 'WORDPRESS'
}

/** Filter the connection based on input */
export type DateQueryInput = {
  after?: Maybe<DateInput>;
  before?: Maybe<DateInput>;
  /** Column to query against */
  column?: Maybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: Maybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: Maybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: Maybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: Maybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: Maybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
};

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED'
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  And = 'AND',
  Or = 'OR'
}

/** Quartz edition */
export enum EditionName {
  Africa = 'AFRICA',
  India = 'INDIA',
  Quartz = 'QUARTZ',
  Quartzy = 'QUARTZY',
  Work = 'WORK'
}

/** The MimeType of the object */
export enum MimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageHeic = 'IMAGE_HEIC',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageTiff = 'IMAGE_TIFF',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  field: PostObjectsConnectionOrderbyEnum;
  order?: Maybe<OrderEnum>;
};

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by membership editor’s choice */
  Membership = 'MEMBERSHIP',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** The cardinality of the connection order */
export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Get popular posts */
export type PopularQuery = {
  edition?: Maybe<EditionName>;
};

/** Get a preview of a post */
export type PreviewQuery = {
  /** Current timestamp in UNIX epoch */
  time?: Maybe<Scalars['Int']>;
  /** Validation token */
  token?: Maybe<Scalars['String']>;
};

/** Get recommended posts related to a given post */
export type RecommendedQuery = {
  id?: Maybe<Scalars['Int']>;
};

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the editor-ok status */
  EditorOk = 'EDITOR_OK',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the hold status */
  Hold = 'HOLD',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending-edit status */
  PendingEdit = 'PENDING_EDIT',
  /** Objects with the pending-revision status */
  PendingRevision = 'PENDING_REVISION',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the ready-to-publish status */
  ReadyToPublish = 'READY_TO_PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
  /** Objects with the writing status */
  Writing = 'WRITING'
}

/** Connection between the User type and the User type */
export type UserToBlogPostConnection = {
  __typename?: 'UserToBlogPostConnection';
  /**
   * Edges for the UserToBlogPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToBlogPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<BlogPost>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToBlogPostConnectionEdge = {
  __typename?: 'UserToBlogPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<BlogPost>;
};

/** Information about pagination in a connection. */
export type WpPageInfo = {
  __typename?: 'WPPageInfo';
  /**
   * When paginating forwards, the cursor to continue.
   * @deprecated 
   */
  endCursor?: Maybe<Scalars['String']>;
  /**
   * When paginating forwards, are there more items?
   * @deprecated 
   */
  hasNextPage: Scalars['Boolean'];
  /**
   * When paginating backwards, are there more items?
   * @deprecated 
   */
  hasPreviousPage: Scalars['Boolean'];
  /**
   * When paginating backwards, the cursor to continue.
   * @deprecated 
   */
  startCursor?: Maybe<Scalars['String']>;
};

/** An Post Type object */
export type PostType = Node & {
  __typename?: 'PostType';
  /**
   * Whether this content type should can be exported.
   * @deprecated 
   */
  canExport?: Maybe<Scalars['Boolean']>;
  /**
   * List of Taxonomies connected to the Post Type
   * @deprecated 
   */
  connectedTaxonomies?: Maybe<Array<Maybe<Taxonomy>>>;
  /**
   * A list of Taxonomies associated with the post type
   * @deprecated 
   */
  connectedTaxonomyNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether delete this type of content when the author of it is deleted from the system.
   * @deprecated 
   */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /**
   * Description of the content type.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Whether to exclude posts with this post type from front end search results.
   * @deprecated 
   */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /**
   * The plural name of the post type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /**
   * The singular name of the post type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /**
   * Whether this content type should have archives. Content archives are generated by type and by date.
   * @deprecated 
   */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the post type is hierarchical, for example pages.
   * @deprecated 
   */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  id: Scalars['ID'];
  /**
   * Display name of the content type.
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Details about the post type labels.
   * @deprecated 
   */
  labels?: Maybe<PostTypeLabelDetails>;
  /**
   * The name of the icon file to display as a menu icon.
   * @deprecated 
   */
  menuIcon?: Maybe<Scalars['String']>;
  /**
   * The position of this post type in the menu. Only applies if show_in_menu is true.
   * @deprecated 
   */
  menuPosition?: Maybe<Scalars['Int']>;
  /**
   * The internal name of the post type. This should not be used for display purposes.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether a post type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention.
   * @deprecated 
   */
  public?: Maybe<Scalars['Boolean']>;
  /**
   * Whether queries can be performed on the front end for the post type as part of parse_request().
   * @deprecated 
   */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /**
   * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  restBase?: Maybe<Scalars['String']>;
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated 
   */
  restControllerClass?: Maybe<Scalars['String']>;
  /**
   * Makes this post type available via the admin bar.
   * @deprecated 
   */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type to the GraphQL Schema.
   * @deprecated 
   */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Where to show the post type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that.
   * @deprecated 
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /**
   * Makes this post type available for selection in navigation menus.
   * @deprecated 
   */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  showInRest?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to generate and allow a UI for managing this post type in the admin.
   * @deprecated 
   */
  showUi?: Maybe<Scalars['Boolean']>;
};


/** An Post Type object */
export type PostTypeConnectedTaxonomiesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** An Post Type object */
export type PostTypeConnectedTaxonomyNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
  Category = 'CATEGORY',
  Coauthor = 'COAUTHOR',
  Edition = 'EDITION',
  Emaillist = 'EMAILLIST',
  Flag = 'FLAG',
  Guide = 'GUIDE',
  Location = 'LOCATION',
  Obsession = 'OBSESSION',
  Project = 'PROJECT',
  Series = 'SERIES',
  Show = 'SHOW',
  Tag = 'TAG',
  Topic = 'TOPIC'
}

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  /**
   * A list of Post Types associated with the taxonomy
   * @deprecated 
   */
  connectedPostTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * List of Post Types connected to the Taxonomy
   * @deprecated 
   */
  connectedPostTypes?: Maybe<Array<Maybe<PostType>>>;
  /**
   * Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The plural name of the post type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /**
   * The singular name of the post type within the GraphQL Schema.
   * @deprecated 
   */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /**
   * Whether the taxonomy is hierarchical
   * @deprecated 
   */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  id: Scalars['ID'];
  /**
   * Name of the taxonomy shown in the menu. Usually plural.
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether the taxonomy is publicly queryable
   * @deprecated 
   */
  public?: Maybe<Scalars['Boolean']>;
  /**
   * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  restBase?: Maybe<Scalars['String']>;
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated 
   */
  restControllerClass?: Maybe<Scalars['String']>;
  /**
   * Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud
   * @deprecated 
   */
  showCloud?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to display a column for the taxonomy on its post type listing screens.
   * @deprecated 
   */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type to the GraphQL Schema.
   * @deprecated 
   */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to show the taxonomy in the admin menu
   * @deprecated 
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /**
   * Whether the taxonomy is available for selection in navigation menus.
   * @deprecated 
   */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to show the taxonomy in the quick/bulk edit panel.
   * @deprecated 
   */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
   * @deprecated 
   */
  showInRest?: Maybe<Scalars['Boolean']>;
  /**
   * Whether to generate and allow a UI for managing terms in this taxonomy in the admin
   * @deprecated 
   */
  showUi?: Maybe<Scalars['Boolean']>;
};


/** A taxonomy object */
export type TaxonomyConnectedPostTypeNamesArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** A taxonomy object */
export type TaxonomyConnectedPostTypesArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  /**
   * Default is ‘Add New’ for both hierarchical and non-hierarchical types.
   * @deprecated 
   */
  addNew?: Maybe<Scalars['String']>;
  /**
   * Label for adding a new singular item.
   * @deprecated 
   */
  addNewItem?: Maybe<Scalars['String']>;
  /**
   * Label to signify all items in a submenu link.
   * @deprecated 
   */
  allItems?: Maybe<Scalars['String']>;
  /**
   * Label for archives in nav menus
   * @deprecated 
   */
  archives?: Maybe<Scalars['String']>;
  /**
   * Label for the attributes meta box.
   * @deprecated 
   */
  attributes?: Maybe<Scalars['String']>;
  /**
   * Label for editing a singular item.
   * @deprecated 
   */
  editItem?: Maybe<Scalars['String']>;
  /**
   * Label for the Featured Image meta box title.
   * @deprecated 
   */
  featuredImage?: Maybe<Scalars['String']>;
  /**
   * Label for the table views hidden heading.
   * @deprecated 
   */
  filterItemsList?: Maybe<Scalars['String']>;
  /**
   * Label for the media frame button.
   * @deprecated 
   */
  insertIntoItem?: Maybe<Scalars['String']>;
  /**
   * Label for the table hidden heading.
   * @deprecated 
   */
  itemsList?: Maybe<Scalars['String']>;
  /**
   * Label for the table pagination hidden heading.
   * @deprecated 
   */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /**
   * Label for the menu name.
   * @deprecated 
   */
  menuName?: Maybe<Scalars['String']>;
  /**
   * General name for the post type, usually plural.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Label for the new item page title.
   * @deprecated 
   */
  newItem?: Maybe<Scalars['String']>;
  /**
   * Label used when no items are found.
   * @deprecated 
   */
  notFound?: Maybe<Scalars['String']>;
  /**
   * Label used when no items are in the trash.
   * @deprecated 
   */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /**
   * Label used to prefix parents of hierarchical items.
   * @deprecated 
   */
  parentItemColon?: Maybe<Scalars['String']>;
  /**
   * Label for removing the featured image.
   * @deprecated 
   */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /**
   * Label for searching plural items.
   * @deprecated 
   */
  searchItems?: Maybe<Scalars['String']>;
  /**
   * Label for setting the featured image.
   * @deprecated 
   */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /**
   * Name for one object of this post type.
   * @deprecated 
   */
  singularName?: Maybe<Scalars['String']>;
  /**
   * Label for the media frame filter.
   * @deprecated 
   */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /**
   * Label in the media frame for using a featured image.
   * @deprecated 
   */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /**
   * Label for viewing a singular item.
   * @deprecated 
   */
  viewItem?: Maybe<Scalars['String']>;
  /**
   * Label for viewing post type archives.
   * @deprecated 
   */
  viewItems?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the UserToBulletinConnection connection */
export type UserToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToBulletinConnection = {
  __typename?: 'UserToBulletinConnection';
  /**
   * Edges for the UserToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToBulletinConnectionEdge = {
  __typename?: 'UserToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** The bulletin type */
export type Bulletin = Node & {
  __typename?: 'Bulletin';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * Bulletin data
   * @deprecated 
   */
  bulletin?: Maybe<BulletinData>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  bulletinId: Scalars['Int'];
  /**
   * URL to use with canonical meta tag
   * @deprecated 
   */
  canonicalUrl?: Maybe<Scalars['String']>;
  /**
   * Contextual classifications for anti-targeting
   * @deprecated 
   */
  classifications?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  coAuthors?: Maybe<BulletinToCoAuthorConnection>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * Flag to disable AMP version of post
   * @deprecated 
   */
  disableAmp?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  editions?: Maybe<BulletinToEditionConnection>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  flags?: Maybe<BulletinToFlagConnection>;
  /**
   * Article footnotes
   * @deprecated 
   */
  footnotes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  locations?: Maybe<BulletinToLocationConnection>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * This post counts towards and can display the metered paywall
   * @deprecated 
   */
  metered?: Maybe<Scalars['Boolean']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  obsessions?: Maybe<BulletinToObsessionConnection>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * Show the paywall for this post
   * @deprecated 
   */
  paywalled?: Maybe<Scalars['Boolean']>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * Platform (news) ID for this post
   * @deprecated 
   */
  platformId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  projects?: Maybe<BulletinToProjectConnection>;
  /**
   * Article recommendations
   * @deprecated 
   */
  readNext?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  serieses?: Maybe<BulletinToSeriesConnection>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  shows?: Maybe<BulletinToShowConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Social image url
   * @deprecated 
   */
  socialImage?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Suppress ads on this article page
   * @deprecated 
   */
  suppressAds?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  tags?: Maybe<BulletinToTagConnection>;
  /**
   * Terms connected to the bulletin
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the bulletin
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the bulletin
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * Connection between the bulletin type and the bulletin type
   * @deprecated 
   */
  topics?: Maybe<BulletinToTopicConnection>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * List of tracking urls
   * @deprecated 
   */
  trackingUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Trailer video data
   * @deprecated 
   */
  trailerVideo?: Maybe<VideoData>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
  /**
   * Video data
   * @deprecated 
   */
  video?: Maybe<VideoData>;
};


/** The bulletin type */
export type BulletinAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The bulletin type */
export type BulletinCoAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToCoAuthorConnectionWhereArgs>;
};


/** The bulletin type */
export type BulletinContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The bulletin type */
export type BulletinEditionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToEditionConnectionWhereArgs>;
};


/** The bulletin type */
export type BulletinExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The bulletin type */
export type BulletinFlagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToFlagConnectionWhereArgs>;
};


/** The bulletin type */
export type BulletinLocationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToLocationConnectionWhereArgs>;
};


/** The bulletin type */
export type BulletinObsessionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToObsessionConnectionWhereArgs>;
};


/** The bulletin type */
export type BulletinProjectsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToProjectConnectionWhereArgs>;
};


/** The bulletin type */
export type BulletinSeriesesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToSeriesConnectionWhereArgs>;
};


/** The bulletin type */
export type BulletinShowsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToShowConnectionWhereArgs>;
};


/** The bulletin type */
export type BulletinTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToTagConnectionWhereArgs>;
};


/** The bulletin type */
export type BulletinTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The bulletin type */
export type BulletinTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The bulletin type */
export type BulletinTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The bulletin type */
export type BulletinTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The bulletin type */
export type BulletinTopicsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<BulletinToTopicConnectionWhereArgs>;
};

/** Content block */
export type Block = {
  __typename?: 'Block';
  /**
   * Content block attributes
   * @deprecated 
   */
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  /**
   * Objects connected to this block
   * @deprecated 
   */
  connections?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * Relay ID of the block, encoding parent post ID and index
   * @deprecated 
   */
  id?: Maybe<Scalars['ID']>;
  /**
   * Content block inner HTML
   * @deprecated 
   */
  innerHtml?: Maybe<Scalars['String']>;
  /**
   * Content block tag name (suggested)
   * @deprecated 
   */
  tagName?: Maybe<Scalars['String']>;
  /**
   * Content block name
   * @deprecated 
   */
  type?: Maybe<BlockNameEnum>;
};

/** Content block attribute */
export type Attribute = {
  __typename?: 'Attribute';
  /**
   * Attribute name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Attribute value
   * @deprecated 
   */
  value?: Maybe<Scalars['String']>;
};

/** Allowed content block names */
export enum BlockNameEnum {
  Blockquote = 'BLOCKQUOTE',
  CoreArchives = 'CORE_ARCHIVES',
  CoreAudio = 'CORE_AUDIO',
  CoreBlock = 'CORE_BLOCK',
  CoreButton = 'CORE_BUTTON',
  CoreCategories = 'CORE_CATEGORIES',
  CoreCode = 'CORE_CODE',
  CoreColumn = 'CORE_COLUMN',
  CoreColumns = 'CORE_COLUMNS',
  CoreCoverImage = 'CORE_COVER_IMAGE',
  CoreEmbed = 'CORE_EMBED',
  CoreEmbedAnimoto = 'CORE_EMBED_ANIMOTO',
  CoreEmbedCloudup = 'CORE_EMBED_CLOUDUP',
  CoreEmbedCollegehumor = 'CORE_EMBED_COLLEGEHUMOR',
  CoreEmbedDailymotion = 'CORE_EMBED_DAILYMOTION',
  CoreEmbedFacebook = 'CORE_EMBED_FACEBOOK',
  CoreEmbedFlickr = 'CORE_EMBED_FLICKR',
  CoreEmbedFunnyordie = 'CORE_EMBED_FUNNYORDIE',
  CoreEmbedHulu = 'CORE_EMBED_HULU',
  CoreEmbedImgur = 'CORE_EMBED_IMGUR',
  CoreEmbedInstagram = 'CORE_EMBED_INSTAGRAM',
  CoreEmbedIssuu = 'CORE_EMBED_ISSUU',
  CoreEmbedKickstarter = 'CORE_EMBED_KICKSTARTER',
  CoreEmbedMeetupCom = 'CORE_EMBED_MEETUP_COM',
  CoreEmbedMixcloud = 'CORE_EMBED_MIXCLOUD',
  CoreEmbedPhotobucket = 'CORE_EMBED_PHOTOBUCKET',
  CoreEmbedPolldaddy = 'CORE_EMBED_POLLDADDY',
  CoreEmbedReddit = 'CORE_EMBED_REDDIT',
  CoreEmbedReverbnation = 'CORE_EMBED_REVERBNATION',
  CoreEmbedScreencast = 'CORE_EMBED_SCREENCAST',
  CoreEmbedScribd = 'CORE_EMBED_SCRIBD',
  CoreEmbedSlideshare = 'CORE_EMBED_SLIDESHARE',
  CoreEmbedSmugmug = 'CORE_EMBED_SMUGMUG',
  CoreEmbedSoundcloud = 'CORE_EMBED_SOUNDCLOUD',
  CoreEmbedSpeaker = 'CORE_EMBED_SPEAKER',
  CoreEmbedSpotify = 'CORE_EMBED_SPOTIFY',
  CoreEmbedTed = 'CORE_EMBED_TED',
  CoreEmbedTumblr = 'CORE_EMBED_TUMBLR',
  CoreEmbedTwitter = 'CORE_EMBED_TWITTER',
  CoreEmbedVideopress = 'CORE_EMBED_VIDEOPRESS',
  CoreEmbedVimeo = 'CORE_EMBED_VIMEO',
  CoreEmbedWordpress = 'CORE_EMBED_WORDPRESS',
  CoreEmbedWordpressTv = 'CORE_EMBED_WORDPRESS_TV',
  CoreEmbedYoutube = 'CORE_EMBED_YOUTUBE',
  CoreFile = 'CORE_FILE',
  CoreFreeform = 'CORE_FREEFORM',
  CoreGallery = 'CORE_GALLERY',
  CoreHeading = 'CORE_HEADING',
  CoreHtml = 'CORE_HTML',
  CoreImage = 'CORE_IMAGE',
  CoreLatestComments = 'CORE_LATEST_COMMENTS',
  CoreLatestPosts = 'CORE_LATEST_POSTS',
  CoreList = 'CORE_LIST',
  CoreMore = 'CORE_MORE',
  CoreNextpage = 'CORE_NEXTPAGE',
  CoreParagraph = 'CORE_PARAGRAPH',
  CorePreformatted = 'CORE_PREFORMATTED',
  CorePullquote = 'CORE_PULLQUOTE',
  CoreQuote = 'CORE_QUOTE',
  CoreSeparator = 'CORE_SEPARATOR',
  CoreShortcode = 'CORE_SHORTCODE',
  CoreSpacer = 'CORE_SPACER',
  CoreSubhead = 'CORE_SUBHEAD',
  CoreTable = 'CORE_TABLE',
  CoreTextColumns = 'CORE_TEXT_COLUMNS',
  CoreVerse = 'CORE_VERSE',
  CoreVideo = 'CORE_VIDEO',
  El = 'EL',
  EmbedAnimoto = 'EMBED_ANIMOTO',
  EmbedApiCrowdsignalComOembed = 'EMBED_API_CROWDSIGNAL_COM_OEMBED',
  EmbedGfycat = 'EMBED_GFYCAT',
  EmbedImgur = 'EMBED_IMGUR',
  EmbedMeetup = 'EMBED_MEETUP',
  EmbedScreencast = 'EMBED_SCREENCAST',
  EmbedSmugmug = 'EMBED_SMUGMUG',
  EmbedDatawrapper = 'EMBED_DATAWRAPPER',
  EmbedAtlas = 'EMBED_ATLAS',
  EmbedAudio = 'EMBED_AUDIO',
  EmbedCloudup = 'EMBED_CLOUDUP',
  EmbedCodepenIoApiOembed = 'EMBED_CODEPEN_IO_API_OEMBED',
  EmbedEmbedGettyimagesComOembed = 'EMBED_EMBED_GETTYIMAGES_COM_OEMBED_',
  EmbedSpotify = 'EMBED_SPOTIFY',
  EmbedFacebookAlternate = 'EMBED_FACEBOOK_ALTERNATE',
  EmbedFacebookAlternateVideo = 'EMBED_FACEBOOK_ALTERNATE_VIDEO',
  EmbedFacebookPhoto = 'EMBED_FACEBOOK_PHOTO',
  EmbedFacebookVideo = 'EMBED_FACEBOOK_VIDEO',
  EmbedWistia = 'EMBED_WISTIA',
  EmbedFlickr = 'EMBED_FLICKR',
  EmbedGithubGist = 'EMBED_GITHUB_GIST',
  EmbedGoogleplus = 'EMBED_GOOGLEPLUS',
  EmbedInlinePdfs = 'EMBED_INLINE_PDFS',
  EmbedIssuu = 'EMBED_ISSUU',
  EmbedIcloud = 'EMBED_ICLOUD',
  EmbedJetpackInstagram = 'EMBED_JETPACK_INSTAGRAM',
  EmbedJetpackInstagramAlternateFormat = 'EMBED_JETPACK_INSTAGRAM_ALTERNATE_FORMAT',
  EmbedMedium = 'EMBED_MEDIUM',
  EmbedQzObject = 'EMBED_QZ_OBJECT',
  EmbedOdesliCoOembed = 'EMBED_ODESLI_CO_OEMBED',
  EmbedPinterest = 'EMBED_PINTEREST',
  EmbedPublicApiWordpressComOembed_1_0 = 'EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED_1_0_',
  EmbedPublicApiWordpressComOembedForHttps_3A_2F_2FqzCom = 'EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED__FOR_HTTPS_3A_2F_2FQZ_COM',
  EmbedTwitter = 'EMBED_TWITTER',
  EmbedFacebook = 'EMBED_FACEBOOK',
  EmbedVine = 'EMBED_VINE',
  EmbedAmazon = 'EMBED_AMAZON',
  EmbedServicesCartoComOembed = 'EMBED_SERVICES_CARTO_COM_OEMBED',
  EmbedSketchfab = 'EMBED_SKETCHFAB',
  EmbedSoundcloud = 'EMBED_SOUNDCLOUD',
  EmbedSpeakerdeck = 'EMBED_SPEAKERDECK',
  EmbedVideo = 'EMBED_VIDEO',
  EmbedVimeo = 'EMBED_VIMEO',
  EmbedWordpressTv = 'EMBED_WORDPRESS_TV',
  EmbedWpcomVimeoEmbedUrl = 'EMBED_WPCOM_VIMEO_EMBED_URL',
  EmbedWpcomYoutubeEmbedCrazyUrl = 'EMBED_WPCOM_YOUTUBE_EMBED_CRAZY_URL',
  EmbedDailymotion = 'EMBED_DAILYMOTION',
  EmbedDocumentcloud = 'EMBED_DOCUMENTCLOUD',
  EmbedWwwHouzzComOembed = 'EMBED_WWW_HOUZZ_COM_OEMBED',
  EmbedKickstarter = 'EMBED_KICKSTARTER',
  EmbedLoom = 'EMBED_LOOM',
  EmbedMixcloud = 'EMBED_MIXCLOUD',
  EmbedReddit = 'EMBED_REDDIT',
  EmbedReverbnation = 'EMBED_REVERBNATION',
  EmbedScribd = 'EMBED_SCRIBD',
  EmbedSlideshare = 'EMBED_SLIDESHARE',
  EmbedSomeecards = 'EMBED_SOMEECARDS',
  EmbedTed = 'EMBED_TED',
  EmbedWwwTedComTalksOembedJson = 'EMBED_WWW_TED_COM_TALKS_OEMBED_JSON',
  EmbedTiktok = 'EMBED_TIKTOK',
  EmbedTumblr = 'EMBED_TUMBLR',
  EmbedYoutube = 'EMBED_YOUTUBE',
  Figure = 'FIGURE',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Hr = 'HR',
  Img = 'IMG',
  Ol = 'OL',
  P = 'P',
  Pre = 'PRE',
  QzItem = 'QZ_ITEM',
  QzPostTout = 'QZ_POST_TOUT',
  QzTaxonomyTerm = 'QZ_TAXONOMY_TERM',
  QzWifyAnswer = 'QZ_WIFY_ANSWER',
  SafeComment = 'SAFE_COMMENT',
  ShortcodeAnswer = 'SHORTCODE_ANSWER',
  ShortcodeArchiveorg = 'SHORTCODE_ARCHIVEORG',
  ShortcodeArchiveorgBook = 'SHORTCODE_ARCHIVEORG_BOOK',
  ShortcodeArchives = 'SHORTCODE_ARCHIVES',
  ShortcodeAudio = 'SHORTCODE_AUDIO',
  ShortcodeBandcamp = 'SHORTCODE_BANDCAMP',
  ShortcodeBrightcove = 'SHORTCODE_BRIGHTCOVE',
  ShortcodeCaption = 'SHORTCODE_CAPTION',
  ShortcodeCpiBroadbandMap = 'SHORTCODE_CPI_BROADBAND_MAP',
  ShortcodeCrowdsignal = 'SHORTCODE_CROWDSIGNAL',
  ShortcodeDailymotion = 'SHORTCODE_DAILYMOTION',
  ShortcodeDailymotionChannel = 'SHORTCODE_DAILYMOTION_CHANNEL',
  ShortcodeEmbed = 'SHORTCODE_EMBED',
  ShortcodeEndmatter = 'SHORTCODE_ENDMATTER',
  ShortcodeExplanation = 'SHORTCODE_EXPLANATION',
  ShortcodeFacebook = 'SHORTCODE_FACEBOOK',
  ShortcodeFlickr = 'SHORTCODE_FLICKR',
  ShortcodeGallery = 'SHORTCODE_GALLERY',
  ShortcodeGeoLocation = 'SHORTCODE_GEO_LOCATION',
  ShortcodeGetty = 'SHORTCODE_GETTY',
  ShortcodeGist = 'SHORTCODE_GIST',
  ShortcodeGoogleapps = 'SHORTCODE_GOOGLEAPPS',
  ShortcodeGooglemaps = 'SHORTCODE_GOOGLEMAPS',
  ShortcodeGoogleplus = 'SHORTCODE_GOOGLEPLUS',
  ShortcodeGravatar = 'SHORTCODE_GRAVATAR',
  ShortcodeGravatarProfile = 'SHORTCODE_GRAVATAR_PROFILE',
  ShortcodeHouzz = 'SHORTCODE_HOUZZ',
  ShortcodeHulu = 'SHORTCODE_HULU',
  ShortcodeInstagram = 'SHORTCODE_INSTAGRAM',
  ShortcodeKickstarter = 'SHORTCODE_KICKSTARTER',
  ShortcodeLatex = 'SHORTCODE_LATEX',
  ShortcodeMailchimpSubscriberPopup = 'SHORTCODE_MAILCHIMP_SUBSCRIBER_POPUP',
  ShortcodeMedium = 'SHORTCODE_MEDIUM',
  ShortcodeMixcloud = 'SHORTCODE_MIXCLOUD',
  ShortcodePlaylist = 'SHORTCODE_PLAYLIST',
  ShortcodePolldaddy = 'SHORTCODE_POLLDADDY',
  ShortcodePresentation = 'SHORTCODE_PRESENTATION',
  ShortcodePromoLink = 'SHORTCODE_PROMO_LINK',
  ShortcodePullquote = 'SHORTCODE_PULLQUOTE',
  ShortcodeQuartzyAd = 'SHORTCODE_QUARTZY_AD',
  ShortcodeQuartzyPs = 'SHORTCODE_QUARTZY_PS',
  ShortcodeQuestion = 'SHORTCODE_QUESTION',
  ShortcodeQuiz = 'SHORTCODE_QUIZ',
  ShortcodeQzAtlas = 'SHORTCODE_QZ_ATLAS',
  ShortcodeQzDailyBrief = 'SHORTCODE_QZ_DAILY_BRIEF',
  ShortcodeQzDatawrapper = 'SHORTCODE_QZ_DATAWRAPPER',
  ShortcodeQzFacebookPost = 'SHORTCODE_QZ_FACEBOOK_POST',
  ShortcodeQzFacebookVideo = 'SHORTCODE_QZ_FACEBOOK_VIDEO',
  ShortcodeQzFurtherReading = 'SHORTCODE_QZ_FURTHER_READING',
  ShortcodeQzGuidePromo = 'SHORTCODE_QZ_GUIDE_PROMO',
  ShortcodeQzIframe = 'SHORTCODE_QZ_IFRAME',
  ShortcodeQzInlineAd = 'SHORTCODE_QZ_INLINE_AD',
  ShortcodeQzInteractive = 'SHORTCODE_QZ_INTERACTIVE',
  ShortcodeQzRelatedStack = 'SHORTCODE_QZ_RELATED_STACK',
  ShortcodeQzSectionDivider = 'SHORTCODE_QZ_SECTION_DIVIDER',
  ShortcodeQzTips = 'SHORTCODE_QZ_TIPS',
  ShortcodeQzTopicUpdate = 'SHORTCODE_QZ_TOPIC_UPDATE',
  ShortcodeRecipe = 'SHORTCODE_RECIPE',
  ShortcodeRecipeDirections = 'SHORTCODE_RECIPE_DIRECTIONS',
  ShortcodeRecipeImage = 'SHORTCODE_RECIPE_IMAGE',
  ShortcodeRecipeIngredients = 'SHORTCODE_RECIPE_INGREDIENTS',
  ShortcodeRecipeNotes = 'SHORTCODE_RECIPE_NOTES',
  ShortcodeRecipeNutrition = 'SHORTCODE_RECIPE_NUTRITION',
  ShortcodeScribd = 'SHORTCODE_SCRIBD',
  ShortcodeSeriesRecirc = 'SHORTCODE_SERIES_RECIRC',
  ShortcodeSimplePayment = 'SHORTCODE_SIMPLE_PAYMENT',
  ShortcodeSitemap = 'SHORTCODE_SITEMAP',
  ShortcodeSlide = 'SHORTCODE_SLIDE',
  ShortcodeSlideshare = 'SHORTCODE_SLIDESHARE',
  ShortcodeSlideshow = 'SHORTCODE_SLIDESHOW',
  ShortcodeSoundcloud = 'SHORTCODE_SOUNDCLOUD',
  ShortcodeSpotify = 'SHORTCODE_SPOTIFY',
  ShortcodeStorify = 'SHORTCODE_STORIFY',
  ShortcodeTed = 'SHORTCODE_TED',
  ShortcodeTweet = 'SHORTCODE_TWEET',
  ShortcodeTwitch = 'SHORTCODE_TWITCH',
  ShortcodeTwitchtv = 'SHORTCODE_TWITCHTV',
  ShortcodeTwitterTimeline = 'SHORTCODE_TWITTER_TIMELINE',
  ShortcodeUntappdMenu = 'SHORTCODE_UNTAPPD_MENU',
  ShortcodeUpcomingevents = 'SHORTCODE_UPCOMINGEVENTS',
  ShortcodeUstream = 'SHORTCODE_USTREAM',
  ShortcodeUstreamsocial = 'SHORTCODE_USTREAMSOCIAL',
  ShortcodeVideo = 'SHORTCODE_VIDEO',
  ShortcodeVideopress = 'SHORTCODE_VIDEOPRESS',
  ShortcodeVimeo = 'SHORTCODE_VIMEO',
  ShortcodeVine = 'SHORTCODE_VINE',
  ShortcodeVr = 'SHORTCODE_VR',
  ShortcodeWpvideo = 'SHORTCODE_WPVIDEO',
  ShortcodeWpCaption = 'SHORTCODE_WP_CAPTION',
  ShortcodeWrong = 'SHORTCODE_WRONG',
  ShortcodeWufoo = 'SHORTCODE_WUFOO',
  ShortcodeYoutube = 'SHORTCODE_YOUTUBE',
  Table = 'TABLE',
  Ul = 'UL'
}

export type BulletinData = {
  __typename?: 'BulletinData';
  /**
   * Bulletin campaign data
   * @deprecated 
   */
  campaign?: Maybe<CampaignData>;
  /**
   * Bulletin client tracking URLs, a.k.a. third-party pixels
   * @deprecated 
   */
  clientTracking?: Maybe<ClientTrackingData>;
  /**
   * Bulletin sponsor data
   * @deprecated 
   */
  sponsor?: Maybe<CampaignData>;
};

export type CampaignData = {
  __typename?: 'CampaignData';
  /**
   * Sponsor/campaign attribution
   * @deprecated 
   */
  attribution?: Maybe<Scalars['String']>;
  /**
   * Sponsor/campaign ID
   * @deprecated 
   */
  id?: Maybe<Scalars['String']>;
  /**
   * Sponsor/campaign header image
   * @deprecated 
   */
  logo?: Maybe<Scalars['String']>;
  /**
   * Sponsor/campaign header image link
   * @deprecated 
   */
  logoLink?: Maybe<Scalars['String']>;
  /**
   * Sponsor/campaign name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Sponsor/campaign slug
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
};

export type ClientTrackingData = {
  __typename?: 'ClientTrackingData';
  /**
   * Client tracking URLs for use inside an bulletin context
   * @deprecated 
   */
  article?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Client tracking URLs for use outside an bulletin context
   * @deprecated 
   */
  elsewhere?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Sponsor/campaign header image link
   * @deprecated 
   */
  logo?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the BulletinToCoAuthorConnection connection */
export type BulletinToCoAuthorConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER'
}

/** Connection between the bulletin type and the bulletin type */
export type BulletinToCoAuthorConnection = {
  __typename?: 'BulletinToCoAuthorConnection';
  /**
   * Edges for the BulletinToCoAuthorConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToCoAuthorConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CoAuthor>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToCoAuthorConnectionEdge = {
  __typename?: 'BulletinToCoAuthorConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CoAuthor>;
};

/** The coAuthor type */
export type CoAuthor = Node & {
  __typename?: 'CoAuthor';
  /**
   * Author profile image
   * @deprecated 
   */
  avatar?: Maybe<Scalars['String']>;
  /**
   * Author bio
   * @deprecated 
   */
  bio?: Maybe<Scalars['String']>;
  /**
   * Connection between the coAuthor type and the coAuthor type
   * @deprecated 
   */
  bulletins?: Maybe<CoAuthorToBulletinConnection>;
  /**
   * Connection between the coAuthor type and the coAuthor type
   * @deprecated 
   */
  chapters?: Maybe<CoAuthorToChapterConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  coAuthorId?: Maybe<Scalars['Int']>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Author email address
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * Former staff
   * @deprecated 
   */
  emeritus?: Maybe<Scalars['Boolean']>;
  /**
   * Facebook URL
   * @deprecated 
   */
  facebook?: Maybe<Scalars['String']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The first_name of the author
   * @deprecated 
   */
  firstName?: Maybe<Scalars['String']>;
  /**
   * The global ID for the author
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Instagram URL
   * @deprecated 
   */
  instagram?: Maybe<Scalars['String']>;
  /**
   * The last_name of the author
   * @deprecated 
   */
  lastName?: Maybe<Scalars['String']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * LinkedIn URL
   * @deprecated 
   */
  linkedin?: Maybe<Scalars['String']>;
  /**
   * The display_name of the author
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Organization the user belongs to
   * @deprecated 
   */
  organization?: Maybe<Scalars['String']>;
  /**
   * Connection between the coAuthor type and the coAuthor type
   * @deprecated 
   */
  pages?: Maybe<CoAuthorToPageConnection>;
  /**
   * PGP fingerprint
   * @deprecated 
   */
  pgp?: Maybe<Scalars['String']>;
  /**
   * Connection between the coAuthor type and the coAuthor type
   * @deprecated 
   */
  posts?: Maybe<CoAuthorToPostConnection>;
  /**
   * The user_registered of the author
   * @deprecated 
   */
  registeredDate?: Maybe<Scalars['String']>;
  /**
   * Description of the author in 42 characters or less
   * @deprecated 
   */
  shortBio?: Maybe<Scalars['String']>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * The user_nicename of the author
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * Connection between the coAuthor type and the coAuthor type
   * @deprecated 
   */
  stacks?: Maybe<CoAuthorToStackConnection>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * Job title
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * Twitter URL
   * @deprecated 
   */
  twitter?: Maybe<Scalars['String']>;
  /**
   * The type of the author
   * @deprecated 
   */
  type?: Maybe<Scalars['String']>;
  /**
   * The user_url of the author
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
  /**
   * The user_login of the author
   * @deprecated 
   */
  username?: Maybe<Scalars['String']>;
  /**
   * Personal URL
   * @deprecated 
   */
  website?: Maybe<Scalars['String']>;
};


/** The coAuthor type */
export type CoAuthorBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CoAuthorToBulletinConnectionWhereArgs>;
};


/** The coAuthor type */
export type CoAuthorChaptersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CoAuthorToChapterConnectionWhereArgs>;
};


/** The coAuthor type */
export type CoAuthorPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CoAuthorToPageConnectionWhereArgs>;
};


/** The coAuthor type */
export type CoAuthorPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CoAuthorToPostConnectionWhereArgs>;
};


/** The coAuthor type */
export type CoAuthorStacksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CoAuthorToStackConnectionWhereArgs>;
};

/** Arguments for filtering the CoAuthorToBulletinConnection connection */
export type CoAuthorToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the coAuthor type and the coAuthor type */
export type CoAuthorToBulletinConnection = {
  __typename?: 'CoAuthorToBulletinConnection';
  /**
   * Edges for the CoAuthorToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CoAuthorToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type CoAuthorToBulletinConnectionEdge = {
  __typename?: 'CoAuthorToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Arguments for filtering the CoAuthorToChapterConnection connection */
export type CoAuthorToChapterConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the coAuthor type and the coAuthor type */
export type CoAuthorToChapterConnection = {
  __typename?: 'CoAuthorToChapterConnection';
  /**
   * Edges for the CoAuthorToChapterConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CoAuthorToChapterConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Chapter>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type CoAuthorToChapterConnectionEdge = {
  __typename?: 'CoAuthorToChapterConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Chapter>;
};

/** The chapter type */
export type Chapter = Node & {
  __typename?: 'Chapter';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  chapterId: Scalars['Int'];
  /**
   * Connection between the chapter type and the chapter type
   * @deprecated 
   */
  coAuthors?: Maybe<ChapterToCoAuthorConnection>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * Connection between the chapter type and the chapter type
   * @deprecated 
   */
  projects?: Maybe<ChapterToProjectConnection>;
  /**
   * SEO title
   * @deprecated 
   */
  seoTitle?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * OpenGraph (meta) description
   * @deprecated 
   */
  socialDescription?: Maybe<Scalars['String']>;
  /**
   * Social image url
   * @deprecated 
   */
  socialImage?: Maybe<Scalars['String']>;
  /**
   * OpenGraph (meta) title
   * @deprecated 
   */
  socialTitle?: Maybe<Scalars['String']>;
  /**
   * Sponsor data
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the chapter type and the chapter type
   * @deprecated 
   */
  tags?: Maybe<ChapterToTagConnection>;
  /**
   * Terms connected to the chapter
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the chapter
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the chapter
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The chapter type */
export type ChapterAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The chapter type */
export type ChapterCoAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ChapterToCoAuthorConnectionWhereArgs>;
};


/** The chapter type */
export type ChapterContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The chapter type */
export type ChapterExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The chapter type */
export type ChapterProjectsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ChapterToProjectConnectionWhereArgs>;
};


/** The chapter type */
export type ChapterTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ChapterToTagConnectionWhereArgs>;
};


/** The chapter type */
export type ChapterTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The chapter type */
export type ChapterTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The chapter type */
export type ChapterTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The chapter type */
export type ChapterTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the ChapterToCoAuthorConnection connection */
export type ChapterToCoAuthorConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the chapter type and the chapter type */
export type ChapterToCoAuthorConnection = {
  __typename?: 'ChapterToCoAuthorConnection';
  /**
   * Edges for the ChapterToCoAuthorConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ChapterToCoAuthorConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CoAuthor>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type ChapterToCoAuthorConnectionEdge = {
  __typename?: 'ChapterToCoAuthorConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CoAuthor>;
};

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = 'RAW',
  /** Apply the default WordPress rendering */
  Rendered = 'RENDERED'
}

/** Info on whether the object is locked by another user editing it */
export type EditLock = {
  __typename?: 'EditLock';
  /**
   * The time when the object was last edited
   * @deprecated 
   */
  editTime?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  user?: Maybe<User>;
};

/** The mediaItem type */
export type MediaItem = Node & {
  __typename?: 'MediaItem';
  /**
   * Alternative text to display when resource is not displayed
   * @deprecated 
   */
  altText?: Maybe<Scalars['String']>;
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * The caption for the resource
   * @deprecated 
   */
  caption?: Maybe<Scalars['String']>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Connection between the mediaItem type and the mediaItem type
   * @deprecated 
   */
  comments?: Maybe<MediaItemToCommentConnection>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated Use the description field instead of content
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Media credit / source
   * @deprecated 
   */
  credit?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * Description of the image (stored as post_content)
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated Use the caption field instead of excerpt
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Details about the mediaItem
   * @deprecated 
   */
  mediaDetails?: Maybe<MediaDetails>;
  /**
   * Type of resource
   * @deprecated 
   */
  mediaType?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  mediaItemId: Scalars['Int'];
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The mime type of the mediaItem
   * @deprecated 
   */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Url of the mediaItem
   * @deprecated 
   */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Terms connected to the mediaItem
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the mediaItem
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the mediaItem
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The mediaItem type */
export type MediaItemCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The mediaItem type */
export type MediaItemTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The mediaItem type */
export type MediaItemTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Array of author IDs to include comments for. */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID'
}

/** Connection between the mediaItem type and the mediaItem type */
export type MediaItemToCommentConnection = {
  __typename?: 'MediaItemToCommentConnection';
  /**
   * Edges for the MediaItemToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
  __typename?: 'MediaItemToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** A Comment object */
export type Comment = Node & {
  __typename?: 'Comment';
  /**
   * User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL.
   * @deprecated 
   */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
   * @deprecated 
   */
  approved?: Maybe<Scalars['String']>;
  /**
   * The author of the comment
   * @deprecated 
   */
  author?: Maybe<CommentAuthorUnion>;
  /**
   * IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL.
   * @deprecated 
   */
  authorIp?: Maybe<Scalars['String']>;
  /**
   * Connection between the Comment type and the Comment type
   * @deprecated 
   */
  children?: Maybe<CommentToCommentConnection>;
  /**
   * The object the comment was added to
   * @deprecated 
   */
  commentedOn?: Maybe<PostObjectUnion>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated 
   */
  commentId?: Maybe<Scalars['Int']>;
  /**
   * Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the user
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL.
   * @deprecated 
   */
  karma?: Maybe<Scalars['Int']>;
  /**
   * Parent comment of current comment. This field is equivalent to the WP_Comment instance matching the WP_Comment-&gt;comment_parent ID.
   * @deprecated 
   */
  parent?: Maybe<Comment>;
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL.
   * @deprecated 
   */
  type?: Maybe<Scalars['String']>;
};


/** A Comment object */
export type CommentChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CommentToCommentConnectionWhereArgs>;
};


/** A Comment object */
export type CommentContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

export type CommentAuthorUnion = User | CommentAuthor;

/** A Comment Author object */
export type CommentAuthor = Node & {
  __typename?: 'CommentAuthor';
  /**
   * The email for the comment author
   * @deprecated 
   */
  email?: Maybe<Scalars['String']>;
  /**
   * The globally unique identifier for the Comment Author user
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The name for the comment author.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The url the comment author.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Array of author IDs to include comments for. */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
  __typename?: 'CommentToCommentConnection';
  /**
   * Edges for the CommentToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
  __typename?: 'CommentToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails';
  /**
   * The height of the mediaItem
   * @deprecated 
   */
  file?: Maybe<Scalars['String']>;
  /**
   * The height of the mediaItem
   * @deprecated 
   */
  height?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  meta?: Maybe<MediaItemMeta>;
  /**
   * The available sizes of the mediaItem
   * @deprecated 
   */
  sizes?: Maybe<Array<Maybe<MediaSize>>>;
  /**
   * The width of the mediaItem
   * @deprecated 
   */
  width?: Maybe<Scalars['Int']>;
};

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  /** @deprecated  */
  aperture?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  camera?: Maybe<Scalars['String']>;
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>;
  /** @deprecated  */
  copyright?: Maybe<Scalars['String']>;
  /** @deprecated  */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  credit?: Maybe<Scalars['String']>;
  /** @deprecated  */
  focalLength?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  iso?: Maybe<Scalars['Int']>;
  /** @deprecated  */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  orientation?: Maybe<Scalars['String']>;
  /** @deprecated  */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** @deprecated  */
  title?: Maybe<Scalars['String']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize';
  /**
   * The file of the for the referenced size
   * @deprecated 
   */
  file?: Maybe<Scalars['String']>;
  /**
   * The height of the for the referenced size
   * @deprecated 
   */
  height?: Maybe<Scalars['String']>;
  /**
   * The mime type of the resource
   * @deprecated 
   */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The referenced size name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The url of the for the referenced size
   * @deprecated 
   */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The width of the for the referenced size
   * @deprecated 
   */
  width?: Maybe<Scalars['String']>;
};

export type TermObjectUnion = Category | Tag | EmailList | Obsession | Series | Topic | Show | Edition | Guide | Flag | Project | Location | CoAuthor;

/** The category type */
export type Category = Node & {
  __typename?: 'Category';
  /**
   * The ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<Category>>>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the category type and the category type
   * @deprecated 
   */
  children?: Maybe<CategoryToCategoryConnection>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global ID for the category
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The parent object
   * @deprecated 
   */
  parent?: Maybe<Category>;
  /**
   * Connection between the category type and the category type
   * @deprecated 
   */
  posts?: Maybe<CategoryToPostConnection>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The category type */
export type CategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
};


/** The category type */
export type CategoryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToPostConnectionWhereArgs>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
  __typename?: 'CategoryToCategoryConnection';
  /**
   * Edges for the CategoryToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
  __typename?: 'CategoryToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the category type and the category type */
export type CategoryToPostConnection = {
  __typename?: 'CategoryToPostConnection';
  /**
   * Edges for the CategoryToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
  __typename?: 'CategoryToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

export type SponsorData = {
  __typename?: 'SponsorData';
  /**
   * Sponsor/campaign attribution
   * @deprecated 
   */
  attribution?: Maybe<Scalars['String']>;
  /**
   * Bulletin campaign data
   * @deprecated 
   */
  campaign?: Maybe<CampaignData>;
  /**
   * Bulletin client tracking URLs, a.k.a. third-party pixels
   * @deprecated 
   */
  clientTracking?: Maybe<ClientTrackingData>;
  /**
   * Sponsor/campaign ID
   * @deprecated 
   */
  id?: Maybe<Scalars['String']>;
  /**
   * Sponsor/campaign header image
   * @deprecated 
   */
  logo?: Maybe<Scalars['String']>;
  /**
   * Sponsor/campaign header image link
   * @deprecated 
   */
  logoLink?: Maybe<Scalars['String']>;
  /**
   * Sponsor/campaign name
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Sponsor/campaign slug
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
};

/** The tag type */
export type Tag = Node & {
  __typename?: 'Tag';
  /**
   * Connection between the tag type and the tag type
   * @deprecated 
   */
  blogPosts?: Maybe<TagToBlogPostConnection>;
  /**
   * Connection between the tag type and the tag type
   * @deprecated 
   */
  bulletins?: Maybe<TagToBulletinConnection>;
  /**
   * Connection between the tag type and the tag type
   * @deprecated 
   */
  cards?: Maybe<TagToCardConnection>;
  /**
   * Connection between the tag type and the tag type
   * @deprecated 
   */
  chapters?: Maybe<TagToChapterConnection>;
  /**
   * Connection between the tag type and the tag type
   * @deprecated 
   */
  collections?: Maybe<TagToCollectionConnection>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global ID for the post_tag
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Image credit for featured image.
   * @deprecated 
   */
  imageCredit?: Maybe<Scalars['String']>;
  /**
   * Featured image for this tag.
   * @deprecated 
   */
  imageUrl?: Maybe<Scalars['String']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the tag type and the tag type
   * @deprecated 
   */
  nugs?: Maybe<TagToNugConnection>;
  /**
   * Connection between the tag type and the tag type
   * @deprecated 
   */
  posts?: Maybe<TagToPostConnection>;
  /**
   * Connection between the tag type and the tag type
   * @deprecated 
   */
  promotions?: Maybe<TagToPromotionConnection>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * Connection between the tag type and the tag type
   * @deprecated 
   */
  stacks?: Maybe<TagToStackConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  tagId?: Maybe<Scalars['Int']>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The tag type */
export type TagBlogPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToBlogPostConnectionWhereArgs>;
};


/** The tag type */
export type TagBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToBulletinConnectionWhereArgs>;
};


/** The tag type */
export type TagCardsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToCardConnectionWhereArgs>;
};


/** The tag type */
export type TagChaptersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToChapterConnectionWhereArgs>;
};


/** The tag type */
export type TagCollectionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToCollectionConnectionWhereArgs>;
};


/** The tag type */
export type TagNugsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToNugConnectionWhereArgs>;
};


/** The tag type */
export type TagPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToPostConnectionWhereArgs>;
};


/** The tag type */
export type TagPromotionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToPromotionConnectionWhereArgs>;
};


/** The tag type */
export type TagStacksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToStackConnectionWhereArgs>;
};

/** Arguments for filtering the TagToBlogPostConnection connection */
export type TagToBlogPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the tag type */
export type TagToBlogPostConnection = {
  __typename?: 'TagToBlogPostConnection';
  /**
   * Edges for the TagToBlogPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToBlogPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<BlogPost>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToBlogPostConnectionEdge = {
  __typename?: 'TagToBlogPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<BlogPost>;
};

/** Arguments for filtering the TagToBulletinConnection connection */
export type TagToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the tag type */
export type TagToBulletinConnection = {
  __typename?: 'TagToBulletinConnection';
  /**
   * Edges for the TagToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToBulletinConnectionEdge = {
  __typename?: 'TagToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Arguments for filtering the TagToCardConnection connection */
export type TagToCardConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the tag type */
export type TagToCardConnection = {
  __typename?: 'TagToCardConnection';
  /**
   * Edges for the TagToCardConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToCardConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Card>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToCardConnectionEdge = {
  __typename?: 'TagToCardConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Card>;
};

/** The card type */
export type Card = Node & {
  __typename?: 'Card';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  cardId: Scalars['Int'];
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Kicker
   * @deprecated 
   */
  kicker?: Maybe<Scalars['String']>;
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * Media attached to the card
   * @deprecated 
   */
  media?: Maybe<Array<Maybe<MediaItem>>>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * PollDaddy ID
   * @deprecated 
   */
  pollId?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the card type and the card type
   * @deprecated 
   */
  tags?: Maybe<CardToTagConnection>;
  /**
   * Terms connected to the card
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the card
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the card
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Card type
   * @deprecated 
   */
  type?: Maybe<Scalars['String']>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The card type */
export type CardAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The card type */
export type CardContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The card type */
export type CardExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The card type */
export type CardTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CardToTagConnectionWhereArgs>;
};


/** The card type */
export type CardTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The card type */
export type CardTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The card type */
export type CardTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The card type */
export type CardTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the CardToTagConnection connection */
export type CardToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the card type and the card type */
export type CardToTagConnection = {
  __typename?: 'CardToTagConnection';
  /**
   * Edges for the CardToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CardToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type CardToTagConnectionEdge = {
  __typename?: 'CardToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the TagToChapterConnection connection */
export type TagToChapterConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the tag type */
export type TagToChapterConnection = {
  __typename?: 'TagToChapterConnection';
  /**
   * Edges for the TagToChapterConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToChapterConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Chapter>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToChapterConnectionEdge = {
  __typename?: 'TagToChapterConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Chapter>;
};

/** Arguments for filtering the TagToCollectionConnection connection */
export type TagToCollectionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the tag type */
export type TagToCollectionConnection = {
  __typename?: 'TagToCollectionConnection';
  /**
   * Edges for the TagToCollectionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToCollectionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Collection>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToCollectionConnectionEdge = {
  __typename?: 'TagToCollectionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Collection>;
};

/** The collection type */
export type Collection = Node & {
  __typename?: 'Collection';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  collectionId: Scalars['Int'];
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the collection type and the collection type
   * @deprecated 
   */
  tags?: Maybe<CollectionToTagConnection>;
  /**
   * Terms connected to the collection
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the collection
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the collection
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The collection type */
export type CollectionAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The collection type */
export type CollectionContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The collection type */
export type CollectionExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The collection type */
export type CollectionTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CollectionToTagConnectionWhereArgs>;
};


/** The collection type */
export type CollectionTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The collection type */
export type CollectionTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The collection type */
export type CollectionTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The collection type */
export type CollectionTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the CollectionToTagConnection connection */
export type CollectionToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the collection type and the collection type */
export type CollectionToTagConnection = {
  __typename?: 'CollectionToTagConnection';
  /**
   * Edges for the CollectionToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CollectionToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type CollectionToTagConnectionEdge = {
  __typename?: 'CollectionToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the TagToNugConnection connection */
export type TagToNugConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the tag type */
export type TagToNugConnection = {
  __typename?: 'TagToNugConnection';
  /**
   * Edges for the TagToNugConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToNugConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Nug>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToNugConnectionEdge = {
  __typename?: 'TagToNugConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Nug>;
};

/** The nug type */
export type Nug = Node & {
  __typename?: 'Nug';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * Connection between the nug type and the nug type
   * @deprecated 
   */
  emailLists?: Maybe<NugToEmailListConnection>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  nugId: Scalars['Int'];
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the nug type and the nug type
   * @deprecated 
   */
  tags?: Maybe<NugToTagConnection>;
  /**
   * Terms connected to the nug
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the nug
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the nug
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * Connection between the nug type and the nug type
   * @deprecated 
   */
  topics?: Maybe<NugToTopicConnection>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The nug type */
export type NugAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The nug type */
export type NugContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The nug type */
export type NugEmailListsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<NugToEmailListConnectionWhereArgs>;
};


/** The nug type */
export type NugExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The nug type */
export type NugTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<NugToTagConnectionWhereArgs>;
};


/** The nug type */
export type NugTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The nug type */
export type NugTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The nug type */
export type NugTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The nug type */
export type NugTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The nug type */
export type NugTopicsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<NugToTopicConnectionWhereArgs>;
};

/** Arguments for filtering the NugToEmailListConnection connection */
export type NugToEmailListConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the nug type and the nug type */
export type NugToEmailListConnection = {
  __typename?: 'NugToEmailListConnection';
  /**
   * Edges for the NugToEmailListConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<NugToEmailListConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EmailList>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type NugToEmailListConnectionEdge = {
  __typename?: 'NugToEmailListConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EmailList>;
};

/** The emailList type */
export type EmailList = Node & {
  __typename?: 'EmailList';
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  emailListId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the emailList type and the emailList type
   * @deprecated 
   */
  emails?: Maybe<EmailListToEmailConnection>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global ID for the qz_email_list
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The id for the list in Sendgrid.
   * @deprecated 
   */
  listId?: Maybe<Scalars['Int']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the emailList type and the emailList type
   * @deprecated 
   */
  nugs?: Maybe<EmailListToNugConnection>;
  /**
   * Popup category for the email.
   * @deprecated 
   */
  popupCategory?: Maybe<Scalars['String']>;
  /**
   * Determines if the email is publicly visible or not.
   * @deprecated 
   */
  private?: Maybe<Scalars['Boolean']>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * Used to describe the delivery time.
   * @deprecated 
   */
  subtitle?: Maybe<Scalars['String']>;
  /**
   * A summary of what this list is for.
   * @deprecated 
   */
  summary?: Maybe<Scalars['String']>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The emailList type */
export type EmailListEmailsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<EmailListToEmailConnectionWhereArgs>;
};


/** The emailList type */
export type EmailListNugsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<EmailListToNugConnectionWhereArgs>;
};

/** Arguments for filtering the EmailListToEmailConnection connection */
export type EmailListToEmailConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the emailList type and the emailList type */
export type EmailListToEmailConnection = {
  __typename?: 'EmailListToEmailConnection';
  /**
   * Edges for the EmailListToEmailConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<EmailListToEmailConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Email>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type EmailListToEmailConnectionEdge = {
  __typename?: 'EmailListToEmailConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Email>;
};

/** The email type */
export type Email = Node & {
  __typename?: 'Email';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * Cards belonging to the stack
   * @deprecated 
   */
  cards?: Maybe<Array<Maybe<Card>>>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * Connection between the email type and the email type
   * @deprecated 
   */
  emailLists?: Maybe<EmailToEmailListConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  emailId: Scalars['Int'];
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The id for the list in Sendgrid
   * @deprecated 
   */
  html?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * Slug that the segment belongs to
   * @deprecated 
   */
  segment?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this email.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Email subject line
   * @deprecated 
   */
  subject?: Maybe<Scalars['String']>;
  /**
   * Terms connected to the email
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the email
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the email
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The email type */
export type EmailAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The email type */
export type EmailContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The email type */
export type EmailEmailListsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<EmailToEmailListConnectionWhereArgs>;
};


/** The email type */
export type EmailExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The email type */
export type EmailTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The email type */
export type EmailTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The email type */
export type EmailTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The email type */
export type EmailTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the EmailToEmailListConnection connection */
export type EmailToEmailListConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the email type and the email type */
export type EmailToEmailListConnection = {
  __typename?: 'EmailToEmailListConnection';
  /**
   * Edges for the EmailToEmailListConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<EmailToEmailListConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EmailList>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type EmailToEmailListConnectionEdge = {
  __typename?: 'EmailToEmailListConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EmailList>;
};

/** Arguments for filtering the EmailListToNugConnection connection */
export type EmailListToNugConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the emailList type and the emailList type */
export type EmailListToNugConnection = {
  __typename?: 'EmailListToNugConnection';
  /**
   * Edges for the EmailListToNugConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<EmailListToNugConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Nug>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type EmailListToNugConnectionEdge = {
  __typename?: 'EmailListToNugConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Nug>;
};

/** Arguments for filtering the NugToTagConnection connection */
export type NugToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the nug type and the nug type */
export type NugToTagConnection = {
  __typename?: 'NugToTagConnection';
  /**
   * Edges for the NugToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<NugToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type NugToTagConnectionEdge = {
  __typename?: 'NugToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the NugToTopicConnection connection */
export type NugToTopicConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the nug type and the nug type */
export type NugToTopicConnection = {
  __typename?: 'NugToTopicConnection';
  /**
   * Edges for the NugToTopicConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<NugToTopicConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Topic>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type NugToTopicConnectionEdge = {
  __typename?: 'NugToTopicConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Topic>;
};

/** The topic type */
export type Topic = Node & {
  __typename?: 'Topic';
  /**
   * The ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<Topic>>>;
  /**
   * Connection between the topic type and the topic type
   * @deprecated 
   */
  bulletins?: Maybe<TopicToBulletinConnection>;
  /**
   * Connection between the topic type and the topic type
   * @deprecated 
   */
  children?: Maybe<TopicToTopicConnection>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * Connection between the Topic type and the Topic type
   * @deprecated 
   */
  guides?: Maybe<TopicToGuideConnection>;
  /**
   * The global ID for the topic
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Image credit for featured image.
   * @deprecated 
   */
  imageCredit?: Maybe<Scalars['String']>;
  /**
   * Featured image for this topic.
   * @deprecated 
   */
  imageUrl?: Maybe<Scalars['String']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the topic type and the topic type
   * @deprecated 
   */
  nugs?: Maybe<TopicToNugConnection>;
  /**
   * The parent object
   * @deprecated 
   */
  parent?: Maybe<Topic>;
  /**
   * Connection between the topic type and the topic type
   * @deprecated 
   */
  posts?: Maybe<TopicToPostConnection>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  topicId?: Maybe<Scalars['Int']>;
};


/** The topic type */
export type TopicBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TopicToBulletinConnectionWhereArgs>;
};


/** The topic type */
export type TopicChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TopicToTopicConnectionWhereArgs>;
};


/** The topic type */
export type TopicGuidesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The topic type */
export type TopicNugsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TopicToNugConnectionWhereArgs>;
};


/** The topic type */
export type TopicPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TopicToPostConnectionWhereArgs>;
};

/** Arguments for filtering the TopicToBulletinConnection connection */
export type TopicToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the topic type and the topic type */
export type TopicToBulletinConnection = {
  __typename?: 'TopicToBulletinConnection';
  /**
   * Edges for the TopicToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TopicToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TopicToBulletinConnectionEdge = {
  __typename?: 'TopicToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Arguments for filtering the TopicToTopicConnection connection */
export type TopicToTopicConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the topic type and the topic type */
export type TopicToTopicConnection = {
  __typename?: 'TopicToTopicConnection';
  /**
   * Edges for the TopicToTopicConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TopicToTopicConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Topic>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type TopicToTopicConnectionEdge = {
  __typename?: 'TopicToTopicConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Topic>;
};

/** Connection between the Topic type and the Topic type */
export type TopicToGuideConnection = {
  __typename?: 'TopicToGuideConnection';
  /**
   * Edges for the TopicToGuideConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TopicToGuideConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Guide>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TopicToGuideConnectionEdge = {
  __typename?: 'TopicToGuideConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Guide>;
};

/** The guide type */
export type Guide = Node & {
  __typename?: 'Guide';
  /**
   * Series theme colors
   * @deprecated 
   */
  colors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Email list ID associated with series
   * @deprecated 
   */
  emailListId?: Maybe<Scalars['Int']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  guideId?: Maybe<Scalars['Int']>;
  /**
   * Series images
   * @deprecated 
   */
  headerImages?: Maybe<Array<Maybe<HeaderImages>>>;
  /**
   * Series header videos
   * @deprecated 
   */
  headerVideos?: Maybe<Array<Maybe<HeaderVideos>>>;
  /**
   * The global ID for the guide
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Custom order for posts
   * @deprecated 
   */
  postOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**
   * Connection between the guide type and the guide type
   * @deprecated 
   */
  posts?: Maybe<GuideToPostConnection>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * Title of series on social media.
   * @deprecated 
   */
  socialTitle?: Maybe<Scalars['String']>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The guide type */
export type GuidePostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GuideToPostConnectionWhereArgs>;
};

export type HeaderImages = {
  __typename?: 'HeaderImages';
  /**
   * Series image
   * @deprecated 
   */
  image?: Maybe<MediaItem>;
  /**
   * Series image layer
   * @deprecated 
   */
  layer?: Maybe<Scalars['Int']>;
  /**
   * Series image size
   * @deprecated 
   */
  size?: Maybe<Scalars['String']>;
};

export type HeaderVideos = {
  __typename?: 'HeaderVideos';
  /**
   * Series header video mp4
   * @deprecated 
   */
  mp4?: Maybe<MediaItem>;
  /**
   * Series header video poster image
   * @deprecated 
   */
  poster?: Maybe<MediaItem>;
  /**
   * Series video size
   * @deprecated 
   */
  size?: Maybe<Scalars['String']>;
  /**
   * Series header video webm
   * @deprecated 
   */
  webm?: Maybe<MediaItem>;
};

/** Arguments for filtering the GuideToPostConnection connection */
export type GuideToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the guide type and the guide type */
export type GuideToPostConnection = {
  __typename?: 'GuideToPostConnection';
  /**
   * Edges for the GuideToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<GuideToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type GuideToPostConnectionEdge = {
  __typename?: 'GuideToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the TopicToNugConnection connection */
export type TopicToNugConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the topic type and the topic type */
export type TopicToNugConnection = {
  __typename?: 'TopicToNugConnection';
  /**
   * Edges for the TopicToNugConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TopicToNugConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Nug>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TopicToNugConnectionEdge = {
  __typename?: 'TopicToNugConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Nug>;
};

/** Arguments for filtering the TopicToPostConnection connection */
export type TopicToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the topic type and the topic type */
export type TopicToPostConnection = {
  __typename?: 'TopicToPostConnection';
  /**
   * Edges for the TopicToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TopicToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TopicToPostConnectionEdge = {
  __typename?: 'TopicToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the tag type */
export type TagToPostConnection = {
  __typename?: 'TagToPostConnection';
  /**
   * Edges for the TagToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = {
  __typename?: 'TagToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the TagToPromotionConnection connection */
export type TagToPromotionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the tag type */
export type TagToPromotionConnection = {
  __typename?: 'TagToPromotionConnection';
  /**
   * Edges for the TagToPromotionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToPromotionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Promotion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToPromotionConnectionEdge = {
  __typename?: 'TagToPromotionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Promotion>;
};

/** The promotion type */
export type Promotion = Node & {
  __typename?: 'Promotion';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * Destination path or URL to promoted content
   * @deprecated 
   */
  destination?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * Connection between the promotion type and the promotion type
   * @deprecated 
   */
  obsessions?: Maybe<PromotionToObsessionConnection>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  promotionId: Scalars['Int'];
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Connection between the promotion type and the promotion type
   * @deprecated 
   */
  tags?: Maybe<PromotionToTagConnection>;
  /**
   * Terms connected to the promotion
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the promotion
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the promotion
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The promotion type */
export type PromotionAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The promotion type */
export type PromotionContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The promotion type */
export type PromotionExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The promotion type */
export type PromotionObsessionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PromotionToObsessionConnectionWhereArgs>;
};


/** The promotion type */
export type PromotionTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PromotionToTagConnectionWhereArgs>;
};


/** The promotion type */
export type PromotionTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The promotion type */
export type PromotionTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The promotion type */
export type PromotionTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The promotion type */
export type PromotionTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the PromotionToObsessionConnection connection */
export type PromotionToObsessionConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the promotion type and the promotion type */
export type PromotionToObsessionConnection = {
  __typename?: 'PromotionToObsessionConnection';
  /**
   * Edges for the PromotionToObsessionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PromotionToObsessionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Obsession>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PromotionToObsessionConnectionEdge = {
  __typename?: 'PromotionToObsessionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Obsession>;
};

/** The obsession type */
export type Obsession = Node & {
  __typename?: 'Obsession';
  /**
   * Connection between the obsession type and the obsession type
   * @deprecated 
   */
  bulletins?: Maybe<ObsessionToBulletinConnection>;
  /**
   * Connection between the Obsession type and the Obsession type
   * @deprecated 
   */
  content?: Maybe<ObsessionToContentUnionConnection>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Get an object in the content union by its object (WordPress) ID.
   * @deprecated 
   */
  emailList?: Maybe<EmailList>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global ID for the obsession
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Image credit for featured image.
   * @deprecated 
   */
  imageCredit?: Maybe<Scalars['String']>;
  /**
   * Featured image for this obsession.
   * @deprecated 
   */
  imageUrl?: Maybe<Scalars['String']>;
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  obsessionId?: Maybe<Scalars['Int']>;
  /**
   * Connection between the obsession type and the obsession type
   * @deprecated 
   */
  posts?: Maybe<ObsessionToPostConnection>;
  /**
   * Connection between the obsession type and the obsession type
   * @deprecated 
   */
  promotions?: Maybe<ObsessionToPromotionConnection>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * Details in 53 characters or less.
   * @deprecated 
   */
  subtitle?: Maybe<Scalars['String']>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The obsession type */
export type ObsessionBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ObsessionToBulletinConnectionWhereArgs>;
};


/** The obsession type */
export type ObsessionContentArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


/** The obsession type */
export type ObsessionPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ObsessionToPostConnectionWhereArgs>;
};


/** The obsession type */
export type ObsessionPromotionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ObsessionToPromotionConnectionWhereArgs>;
};

/** Arguments for filtering the ObsessionToBulletinConnection connection */
export type ObsessionToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the obsession type and the obsession type */
export type ObsessionToBulletinConnection = {
  __typename?: 'ObsessionToBulletinConnection';
  /**
   * Edges for the ObsessionToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ObsessionToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type ObsessionToBulletinConnectionEdge = {
  __typename?: 'ObsessionToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Connection between the Obsession type and the Obsession type */
export type ObsessionToContentUnionConnection = {
  __typename?: 'ObsessionToContentUnionConnection';
  /**
   * Edges for the ObsessionToContentUnionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ObsessionToContentUnionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentUnion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ObsessionToContentUnionConnectionEdge = {
  __typename?: 'ObsessionToContentUnionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentUnion>;
};

export type ContentUnion = Post | Page | MediaItem | Email | Card | Chapter | Promotion | Collection | Stack | Bulletin;

/** The page type */
export type Page = Node & {
  __typename?: 'Page';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * Connection between the page type and the page type
   * @deprecated 
   */
  childPages?: Maybe<PageToPageConnection>;
  /**
   * Connection between the page type and the page type
   * @deprecated 
   */
  coAuthors?: Maybe<PageToCoAuthorConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
   * @deprecated 
   */
  commentCount?: Maybe<Scalars['Int']>;
  /**
   * Connection between the page type and the page type
   * @deprecated 
   */
  comments?: Maybe<PageToCommentConnection>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  pageId: Scalars['Int'];
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Terms connected to the page
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the page
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the page
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The page type */
export type PageAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The page type */
export type PageChildPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToPageConnectionWhereArgs>;
};


/** The page type */
export type PageCoAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToCoAuthorConnectionWhereArgs>;
};


/** The page type */
export type PageCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToCommentConnectionWhereArgs>;
};


/** The page type */
export type PageContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The page type */
export type PageExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The page type */
export type PageTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The page type */
export type PageTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The page type */
export type PageTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The page type */
export type PageTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the PageToPageConnection connection */
export type PageToPageConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the page type and the page type */
export type PageToPageConnection = {
  __typename?: 'PageToPageConnection';
  /**
   * Edges for the PageToPageConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PageToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type PageToPageConnectionEdge = {
  __typename?: 'PageToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** Arguments for filtering the PageToCoAuthorConnection connection */
export type PageToCoAuthorConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the page type and the page type */
export type PageToCoAuthorConnection = {
  __typename?: 'PageToCoAuthorConnection';
  /**
   * Edges for the PageToCoAuthorConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PageToCoAuthorConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CoAuthor>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PageToCoAuthorConnectionEdge = {
  __typename?: 'PageToCoAuthorConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CoAuthor>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Array of author IDs to include comments for. */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the page type and the page type */
export type PageToCommentConnection = {
  __typename?: 'PageToCommentConnection';
  /**
   * Edges for the PageToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
  __typename?: 'PageToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** The stack type */
export type Stack = Node & {
  __typename?: 'Stack';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * URL to use with canonical meta tag
   * @deprecated 
   */
  canonicalUrl?: Maybe<Scalars['String']>;
  /**
   * Cards belonging to the stack
   * @deprecated 
   */
  cards?: Maybe<Array<Maybe<Card>>>;
  /**
   * Contextual classifications for anti-targeting
   * @deprecated 
   */
  classifications?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Connection between the stack type and the stack type
   * @deprecated 
   */
  coAuthors?: Maybe<StackToCoAuthorConnection>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * Flag to disable AMP version of post
   * @deprecated 
   */
  disableAmp?: Maybe<Scalars['Boolean']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The featured image for the object
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * Article footnotes
   * @deprecated 
   */
  footnotes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * This post counts towards and can display the metered paywall
   * @deprecated 
   */
  metered?: Maybe<Scalars['Boolean']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * Show the paywall for this post
   * @deprecated 
   */
  paywalled?: Maybe<Scalars['Boolean']>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * Platform (news) ID for this post
   * @deprecated 
   */
  platformId?: Maybe<Scalars['Int']>;
  /**
   * Article recommendations
   * @deprecated 
   */
  readNext?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Connection between the stack type and the stack type
   * @deprecated 
   */
  serieses?: Maybe<StackToSeriesConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * Social image url
   * @deprecated 
   */
  socialImage?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  stackId: Scalars['Int'];
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Suppress ads on this article page
   * @deprecated 
   */
  suppressAds?: Maybe<Scalars['Boolean']>;
  /**
   * Connection between the stack type and the stack type
   * @deprecated 
   */
  tags?: Maybe<StackToTagConnection>;
  /**
   * Terms connected to the stack
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the stack
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the stack
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * List of tracking urls
   * @deprecated 
   */
  trackingUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Trailer video data
   * @deprecated 
   */
  trailerVideo?: Maybe<VideoData>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
  /**
   * Video data
   * @deprecated 
   */
  video?: Maybe<VideoData>;
};


/** The stack type */
export type StackAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The stack type */
export type StackCoAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<StackToCoAuthorConnectionWhereArgs>;
};


/** The stack type */
export type StackContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The stack type */
export type StackExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The stack type */
export type StackSeriesesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<StackToSeriesConnectionWhereArgs>;
};


/** The stack type */
export type StackTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<StackToTagConnectionWhereArgs>;
};


/** The stack type */
export type StackTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The stack type */
export type StackTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The stack type */
export type StackTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The stack type */
export type StackTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the StackToCoAuthorConnection connection */
export type StackToCoAuthorConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the stack type and the stack type */
export type StackToCoAuthorConnection = {
  __typename?: 'StackToCoAuthorConnection';
  /**
   * Edges for the StackToCoAuthorConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<StackToCoAuthorConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CoAuthor>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type StackToCoAuthorConnectionEdge = {
  __typename?: 'StackToCoAuthorConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CoAuthor>;
};

/** Arguments for filtering the StackToSeriesConnection connection */
export type StackToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the stack type and the stack type */
export type StackToSeriesConnection = {
  __typename?: 'StackToSeriesConnection';
  /**
   * Edges for the StackToSeriesConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<StackToSeriesConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type StackToSeriesConnectionEdge = {
  __typename?: 'StackToSeriesConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Series>;
};

/** The series type */
export type Series = Node & {
  __typename?: 'Series';
  /**
   * Connection between the series type and the series type
   * @deprecated 
   */
  bulletins?: Maybe<SeriesToBulletinConnection>;
  /**
   * Series theme colors
   * @deprecated 
   */
  colors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Email list ID associated with series
   * @deprecated 
   */
  emailListId?: Maybe<Scalars['Int']>;
  /**
   * Whether the series has ended.
   * @deprecated 
   */
  ended?: Maybe<Scalars['Boolean']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * Series images
   * @deprecated 
   */
  headerImages?: Maybe<Array<Maybe<HeaderImages>>>;
  /**
   * Series header videos
   * @deprecated 
   */
  headerVideos?: Maybe<Array<Maybe<HeaderVideos>>>;
  /**
   * The global ID for the series
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Custom order for posts
   * @deprecated 
   */
  postOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**
   * Connection between the series type and the series type
   * @deprecated 
   */
  posts?: Maybe<SeriesToPostConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  seriesId?: Maybe<Scalars['Int']>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * Whether to show the series TOC on article pages.
   * @deprecated 
   */
  showToc?: Maybe<Scalars['Boolean']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * Title of series on social media.
   * @deprecated 
   */
  socialTitle?: Maybe<Scalars['String']>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * Connection between the series type and the series type
   * @deprecated 
   */
  stacks?: Maybe<SeriesToStackConnection>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The series type */
export type SeriesBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<SeriesToBulletinConnectionWhereArgs>;
};


/** The series type */
export type SeriesPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<SeriesToPostConnectionWhereArgs>;
};


/** The series type */
export type SeriesStacksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<SeriesToStackConnectionWhereArgs>;
};

/** Arguments for filtering the SeriesToBulletinConnection connection */
export type SeriesToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the series type and the series type */
export type SeriesToBulletinConnection = {
  __typename?: 'SeriesToBulletinConnection';
  /**
   * Edges for the SeriesToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<SeriesToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type SeriesToBulletinConnectionEdge = {
  __typename?: 'SeriesToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Arguments for filtering the SeriesToPostConnection connection */
export type SeriesToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the series type and the series type */
export type SeriesToPostConnection = {
  __typename?: 'SeriesToPostConnection';
  /**
   * Edges for the SeriesToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<SeriesToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type SeriesToPostConnectionEdge = {
  __typename?: 'SeriesToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the SeriesToStackConnection connection */
export type SeriesToStackConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the series type and the series type */
export type SeriesToStackConnection = {
  __typename?: 'SeriesToStackConnection';
  /**
   * Edges for the SeriesToStackConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<SeriesToStackConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Stack>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type SeriesToStackConnectionEdge = {
  __typename?: 'SeriesToStackConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Stack>;
};

/** Arguments for filtering the StackToTagConnection connection */
export type StackToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the stack type and the stack type */
export type StackToTagConnection = {
  __typename?: 'StackToTagConnection';
  /**
   * Edges for the StackToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<StackToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type StackToTagConnectionEdge = {
  __typename?: 'StackToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

export type VideoData = {
  __typename?: 'VideoData';
  /**
   * Autoplay enabled/disabled
   * @deprecated 
   */
  autoplay?: Maybe<Scalars['Boolean']>;
  /**
   * Length of video in seconds
   * @deprecated 
   */
  duration?: Maybe<Scalars['Int']>;
  /**
   * End time in seconds
   * @deprecated 
   */
  endTime?: Maybe<Scalars['Int']>;
  /**
   * Episode number
   * @deprecated 
   */
  episode?: Maybe<Scalars['Int']>;
  /**
   * YouTube video ID
   * @deprecated 
   */
  id?: Maybe<Scalars['String']>;
  /**
   * YouTube playlist ID
   * @deprecated 
   */
  playlistId?: Maybe<Scalars['String']>;
  /**
   * Related videos enabled/disabled
   * @deprecated 
   */
  related?: Maybe<Scalars['Boolean']>;
  /**
   * Season number
   * @deprecated 
   */
  season?: Maybe<Scalars['Int']>;
  /**
   * Start time in seconds
   * @deprecated 
   */
  startTime?: Maybe<Scalars['Int']>;
  /**
   * The type of video: youtube or vimeo
   * @deprecated 
   */
  type?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ObsessionToPostConnection connection */
export type ObsessionToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the obsession type and the obsession type */
export type ObsessionToPostConnection = {
  __typename?: 'ObsessionToPostConnection';
  /**
   * Edges for the ObsessionToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ObsessionToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type ObsessionToPostConnectionEdge = {
  __typename?: 'ObsessionToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the ObsessionToPromotionConnection connection */
export type ObsessionToPromotionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the obsession type and the obsession type */
export type ObsessionToPromotionConnection = {
  __typename?: 'ObsessionToPromotionConnection';
  /**
   * Edges for the ObsessionToPromotionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ObsessionToPromotionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Promotion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type ObsessionToPromotionConnectionEdge = {
  __typename?: 'ObsessionToPromotionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Promotion>;
};

/** Arguments for filtering the PromotionToTagConnection connection */
export type PromotionToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the promotion type and the promotion type */
export type PromotionToTagConnection = {
  __typename?: 'PromotionToTagConnection';
  /**
   * Edges for the PromotionToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PromotionToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PromotionToTagConnectionEdge = {
  __typename?: 'PromotionToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the TagToStackConnection connection */
export type TagToStackConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the tag type */
export type TagToStackConnection = {
  __typename?: 'TagToStackConnection';
  /**
   * Edges for the TagToStackConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<TagToStackConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Stack>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type TagToStackConnectionEdge = {
  __typename?: 'TagToStackConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Stack>;
};

/** The show type */
export type Show = Node & {
  __typename?: 'Show';
  /**
   * Connection between the show type and the show type
   * @deprecated 
   */
  bulletins?: Maybe<ShowToBulletinConnection>;
  /**
   * Show theme colors
   * @deprecated 
   */
  colors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * Show images
   * @deprecated 
   */
  headerImages?: Maybe<Array<Maybe<ShowHeaderImages>>>;
  /**
   * Show header videos
   * @deprecated 
   */
  headerVideos?: Maybe<Array<Maybe<ShowHeaderVideos>>>;
  /**
   * The global ID for the show
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Custom order for posts
   * @deprecated 
   */
  postOrder?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /**
   * Connection between the show type and the show type
   * @deprecated 
   */
  posts?: Maybe<ShowToPostConnection>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  showId?: Maybe<Scalars['Int']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The show type */
export type ShowBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ShowToBulletinConnectionWhereArgs>;
};


/** The show type */
export type ShowPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ShowToPostConnectionWhereArgs>;
};

/** Arguments for filtering the ShowToBulletinConnection connection */
export type ShowToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the show type and the show type */
export type ShowToBulletinConnection = {
  __typename?: 'ShowToBulletinConnection';
  /**
   * Edges for the ShowToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ShowToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type ShowToBulletinConnectionEdge = {
  __typename?: 'ShowToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

export type ShowHeaderImages = {
  __typename?: 'ShowHeaderImages';
  /**
   * Series image
   * @deprecated 
   */
  image?: Maybe<MediaItem>;
  /**
   * Series image layer
   * @deprecated 
   */
  layer?: Maybe<Scalars['Int']>;
  /**
   * Series image size
   * @deprecated 
   */
  size?: Maybe<Scalars['String']>;
};

export type ShowHeaderVideos = {
  __typename?: 'ShowHeaderVideos';
  /**
   * Series header video mp4
   * @deprecated 
   */
  mp4?: Maybe<MediaItem>;
  /**
   * Series header video poster image
   * @deprecated 
   */
  poster?: Maybe<MediaItem>;
  /**
   * Series video size
   * @deprecated 
   */
  size?: Maybe<Scalars['String']>;
  /**
   * Series header video webm
   * @deprecated 
   */
  webm?: Maybe<MediaItem>;
};

/** Arguments for filtering the ShowToPostConnection connection */
export type ShowToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the show type and the show type */
export type ShowToPostConnection = {
  __typename?: 'ShowToPostConnection';
  /**
   * Edges for the ShowToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ShowToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type ShowToPostConnectionEdge = {
  __typename?: 'ShowToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** The edition type */
export type Edition = Node & {
  __typename?: 'Edition';
  /**
   * Connection between the edition type and the edition type
   * @deprecated 
   */
  bulletins?: Maybe<EditionToBulletinConnection>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  editionId?: Maybe<Scalars['Int']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global ID for the edition
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the edition type and the edition type
   * @deprecated 
   */
  posts?: Maybe<EditionToPostConnection>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The edition type */
export type EditionBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<EditionToBulletinConnectionWhereArgs>;
};


/** The edition type */
export type EditionPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<EditionToPostConnectionWhereArgs>;
};

/** Arguments for filtering the EditionToBulletinConnection connection */
export type EditionToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the edition type and the edition type */
export type EditionToBulletinConnection = {
  __typename?: 'EditionToBulletinConnection';
  /**
   * Edges for the EditionToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<EditionToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type EditionToBulletinConnectionEdge = {
  __typename?: 'EditionToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Arguments for filtering the EditionToPostConnection connection */
export type EditionToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the edition type and the edition type */
export type EditionToPostConnection = {
  __typename?: 'EditionToPostConnection';
  /**
   * Edges for the EditionToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<EditionToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type EditionToPostConnectionEdge = {
  __typename?: 'EditionToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** The flag type */
export type Flag = Node & {
  __typename?: 'Flag';
  /**
   * Connection between the flag type and the flag type
   * @deprecated 
   */
  bulletins?: Maybe<FlagToBulletinConnection>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  flagId?: Maybe<Scalars['Int']>;
  /**
   * The global ID for the flag
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the flag type and the flag type
   * @deprecated 
   */
  posts?: Maybe<FlagToPostConnection>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The flag type */
export type FlagBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<FlagToBulletinConnectionWhereArgs>;
};


/** The flag type */
export type FlagPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<FlagToPostConnectionWhereArgs>;
};

/** Arguments for filtering the FlagToBulletinConnection connection */
export type FlagToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the flag type and the flag type */
export type FlagToBulletinConnection = {
  __typename?: 'FlagToBulletinConnection';
  /**
   * Edges for the FlagToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<FlagToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type FlagToBulletinConnectionEdge = {
  __typename?: 'FlagToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Arguments for filtering the FlagToPostConnection connection */
export type FlagToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the flag type and the flag type */
export type FlagToPostConnection = {
  __typename?: 'FlagToPostConnection';
  /**
   * Edges for the FlagToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<FlagToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type FlagToPostConnectionEdge = {
  __typename?: 'FlagToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** The project type */
export type Project = Node & {
  __typename?: 'Project';
  /**
   * Connection between the project type and the project type
   * @deprecated 
   */
  bulletins?: Maybe<ProjectToBulletinConnection>;
  /**
   * Connection between the project type and the project type
   * @deprecated 
   */
  chapters?: Maybe<ProjectToChapterConnection>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global ID for the project
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the project type and the project type
   * @deprecated 
   */
  posts?: Maybe<ProjectToPostConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  projectId?: Maybe<Scalars['Int']>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The project type */
export type ProjectBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProjectToBulletinConnectionWhereArgs>;
};


/** The project type */
export type ProjectChaptersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProjectToChapterConnectionWhereArgs>;
};


/** The project type */
export type ProjectPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProjectToPostConnectionWhereArgs>;
};

/** Arguments for filtering the ProjectToBulletinConnection connection */
export type ProjectToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the project type and the project type */
export type ProjectToBulletinConnection = {
  __typename?: 'ProjectToBulletinConnection';
  /**
   * Edges for the ProjectToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProjectToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type ProjectToBulletinConnectionEdge = {
  __typename?: 'ProjectToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Arguments for filtering the ProjectToChapterConnection connection */
export type ProjectToChapterConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the project type and the project type */
export type ProjectToChapterConnection = {
  __typename?: 'ProjectToChapterConnection';
  /**
   * Edges for the ProjectToChapterConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProjectToChapterConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Chapter>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type ProjectToChapterConnectionEdge = {
  __typename?: 'ProjectToChapterConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Chapter>;
};

/** Arguments for filtering the ProjectToPostConnection connection */
export type ProjectToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the project type and the project type */
export type ProjectToPostConnection = {
  __typename?: 'ProjectToPostConnection';
  /**
   * Edges for the ProjectToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ProjectToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type ProjectToPostConnectionEdge = {
  __typename?: 'ProjectToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** The location type */
export type Location = Node & {
  __typename?: 'Location';
  /**
   * Connection between the location type and the location type
   * @deprecated 
   */
  bulletins?: Maybe<LocationToBulletinConnection>;
  /**
   * The number of objects connected to this term.
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * The description of the object
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The featured image for this term.
   * @deprecated 
   */
  featuredImage?: Maybe<MediaItem>;
  /**
   * The global ID for the location
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The link to the term
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  locationId?: Maybe<Scalars['Int']>;
  /**
   * The human friendly name of the object.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Connection between the location type and the location type
   * @deprecated 
   */
  posts?: Maybe<LocationToPostConnection>;
  /**
   * The short description for this term.
   * @deprecated 
   */
  shortDescription?: Maybe<Scalars['String']>;
  /**
   * An alphanumeric identifier for the object unique to its type.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The social image for this series.
   * @deprecated 
   */
  socialImage?: Maybe<MediaItem>;
  /**
   * The sponsor.
   * @deprecated 
   */
  sponsor?: Maybe<SponsorData>;
  /**
   * The name of the taxonomy this term belongs to
   * @deprecated 
   */
  taxonomy?: Maybe<Taxonomy>;
  /**
   * The ID of the term group that this term object belongs to
   * @deprecated 
   */
  termGroupId?: Maybe<Scalars['Int']>;
  /**
   * The taxonomy ID that the object is associated with
   * @deprecated 
   */
  termTaxonomyId?: Maybe<Scalars['Int']>;
};


/** The location type */
export type LocationBulletinsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<LocationToBulletinConnectionWhereArgs>;
};


/** The location type */
export type LocationPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<LocationToPostConnectionWhereArgs>;
};

/** Arguments for filtering the LocationToBulletinConnection connection */
export type LocationToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the location type and the location type */
export type LocationToBulletinConnection = {
  __typename?: 'LocationToBulletinConnection';
  /**
   * Edges for the LocationToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<LocationToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type LocationToBulletinConnectionEdge = {
  __typename?: 'LocationToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Arguments for filtering the LocationToPostConnection connection */
export type LocationToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the location type and the location type */
export type LocationToPostConnection = {
  __typename?: 'LocationToPostConnection';
  /**
   * Edges for the LocationToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<LocationToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type LocationToPostConnectionEdge = {
  __typename?: 'LocationToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the ChapterToProjectConnection connection */
export type ChapterToProjectConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the chapter type and the chapter type */
export type ChapterToProjectConnection = {
  __typename?: 'ChapterToProjectConnection';
  /**
   * Edges for the ChapterToProjectConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ChapterToProjectConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Project>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type ChapterToProjectConnectionEdge = {
  __typename?: 'ChapterToProjectConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Project>;
};

/** Arguments for filtering the ChapterToTagConnection connection */
export type ChapterToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the chapter type and the chapter type */
export type ChapterToTagConnection = {
  __typename?: 'ChapterToTagConnection';
  /**
   * Edges for the ChapterToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<ChapterToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type ChapterToTagConnectionEdge = {
  __typename?: 'ChapterToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the CoAuthorToPageConnection connection */
export type CoAuthorToPageConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the coAuthor type and the coAuthor type */
export type CoAuthorToPageConnection = {
  __typename?: 'CoAuthorToPageConnection';
  /**
   * Edges for the CoAuthorToPageConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CoAuthorToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type CoAuthorToPageConnectionEdge = {
  __typename?: 'CoAuthorToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** Arguments for filtering the CoAuthorToPostConnection connection */
export type CoAuthorToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the coAuthor type and the coAuthor type */
export type CoAuthorToPostConnection = {
  __typename?: 'CoAuthorToPostConnection';
  /**
   * Edges for the CoAuthorToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CoAuthorToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type CoAuthorToPostConnectionEdge = {
  __typename?: 'CoAuthorToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the CoAuthorToStackConnection connection */
export type CoAuthorToStackConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the coAuthor type and the coAuthor type */
export type CoAuthorToStackConnection = {
  __typename?: 'CoAuthorToStackConnection';
  /**
   * Edges for the CoAuthorToStackConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<CoAuthorToStackConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Stack>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type CoAuthorToStackConnectionEdge = {
  __typename?: 'CoAuthorToStackConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Stack>;
};

/** Arguments for filtering the BulletinToEditionConnection connection */
export type BulletinToEditionConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the bulletin type and the bulletin type */
export type BulletinToEditionConnection = {
  __typename?: 'BulletinToEditionConnection';
  /**
   * Edges for the BulletinToEditionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToEditionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Edition>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToEditionConnectionEdge = {
  __typename?: 'BulletinToEditionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Edition>;
};

/** Arguments for filtering the BulletinToFlagConnection connection */
export type BulletinToFlagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the bulletin type and the bulletin type */
export type BulletinToFlagConnection = {
  __typename?: 'BulletinToFlagConnection';
  /**
   * Edges for the BulletinToFlagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToFlagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Flag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToFlagConnectionEdge = {
  __typename?: 'BulletinToFlagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Flag>;
};

/** Arguments for filtering the BulletinToLocationConnection connection */
export type BulletinToLocationConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the bulletin type and the bulletin type */
export type BulletinToLocationConnection = {
  __typename?: 'BulletinToLocationConnection';
  /**
   * Edges for the BulletinToLocationConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToLocationConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Location>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToLocationConnectionEdge = {
  __typename?: 'BulletinToLocationConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Location>;
};

/** Arguments for filtering the BulletinToObsessionConnection connection */
export type BulletinToObsessionConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the bulletin type and the bulletin type */
export type BulletinToObsessionConnection = {
  __typename?: 'BulletinToObsessionConnection';
  /**
   * Edges for the BulletinToObsessionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToObsessionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Obsession>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToObsessionConnectionEdge = {
  __typename?: 'BulletinToObsessionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Obsession>;
};

/** Arguments for filtering the BulletinToProjectConnection connection */
export type BulletinToProjectConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the bulletin type and the bulletin type */
export type BulletinToProjectConnection = {
  __typename?: 'BulletinToProjectConnection';
  /**
   * Edges for the BulletinToProjectConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToProjectConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Project>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToProjectConnectionEdge = {
  __typename?: 'BulletinToProjectConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Project>;
};

/** Arguments for filtering the BulletinToSeriesConnection connection */
export type BulletinToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the bulletin type and the bulletin type */
export type BulletinToSeriesConnection = {
  __typename?: 'BulletinToSeriesConnection';
  /**
   * Edges for the BulletinToSeriesConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToSeriesConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToSeriesConnectionEdge = {
  __typename?: 'BulletinToSeriesConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Series>;
};

/** Arguments for filtering the BulletinToShowConnection connection */
export type BulletinToShowConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the bulletin type and the bulletin type */
export type BulletinToShowConnection = {
  __typename?: 'BulletinToShowConnection';
  /**
   * Edges for the BulletinToShowConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToShowConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Show>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToShowConnectionEdge = {
  __typename?: 'BulletinToShowConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Show>;
};

/** Arguments for filtering the BulletinToTagConnection connection */
export type BulletinToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the bulletin type and the bulletin type */
export type BulletinToTagConnection = {
  __typename?: 'BulletinToTagConnection';
  /**
   * Edges for the BulletinToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToTagConnectionEdge = {
  __typename?: 'BulletinToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the BulletinToTopicConnection connection */
export type BulletinToTopicConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the bulletin type and the bulletin type */
export type BulletinToTopicConnection = {
  __typename?: 'BulletinToTopicConnection';
  /**
   * Edges for the BulletinToTopicConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BulletinToTopicConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Topic>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BulletinToTopicConnectionEdge = {
  __typename?: 'BulletinToTopicConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Topic>;
};

/** Arguments for filtering the UserToCardConnection connection */
export type UserToCardConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToCardConnection = {
  __typename?: 'UserToCardConnection';
  /**
   * Edges for the UserToCardConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToCardConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Card>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToCardConnectionEdge = {
  __typename?: 'UserToCardConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Card>;
};

/** Arguments for filtering the UserToChapterConnection connection */
export type UserToChapterConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToChapterConnection = {
  __typename?: 'UserToChapterConnection';
  /**
   * Edges for the UserToChapterConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToChapterConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Chapter>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToChapterConnectionEdge = {
  __typename?: 'UserToChapterConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Chapter>;
};

/** Arguments for filtering the UserToCollectionConnection connection */
export type UserToCollectionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToCollectionConnection = {
  __typename?: 'UserToCollectionConnection';
  /**
   * Edges for the UserToCollectionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToCollectionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Collection>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToCollectionConnectionEdge = {
  __typename?: 'UserToCollectionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Collection>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Array of author IDs to include comments for. */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the User type and the User type */
export type UserToCommentConnection = {
  __typename?: 'UserToCommentConnection';
  /**
   * Edges for the UserToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
  __typename?: 'UserToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Arguments for filtering the UserToEmailConnection connection */
export type UserToEmailConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToEmailConnection = {
  __typename?: 'UserToEmailConnection';
  /**
   * Edges for the UserToEmailConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToEmailConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Email>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToEmailConnectionEdge = {
  __typename?: 'UserToEmailConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Email>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToMediaItemConnection = {
  __typename?: 'UserToMediaItemConnection';
  /**
   * Edges for the UserToMediaItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
  __typename?: 'UserToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MediaItem>;
};

/** Arguments for filtering the UserToNugConnection connection */
export type UserToNugConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToNugConnection = {
  __typename?: 'UserToNugConnection';
  /**
   * Edges for the UserToNugConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToNugConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Nug>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToNugConnectionEdge = {
  __typename?: 'UserToNugConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Nug>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToPageConnection = {
  __typename?: 'UserToPageConnection';
  /**
   * Edges for the UserToPageConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = {
  __typename?: 'UserToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToPostConnection = {
  __typename?: 'UserToPostConnection';
  /**
   * Edges for the UserToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = {
  __typename?: 'UserToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the UserToPromotionConnection connection */
export type UserToPromotionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToPromotionConnection = {
  __typename?: 'UserToPromotionConnection';
  /**
   * Edges for the UserToPromotionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToPromotionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Promotion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToPromotionConnectionEdge = {
  __typename?: 'UserToPromotionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Promotion>;
};

/** Arguments for filtering the UserToPushConnection connection */
export type UserToPushConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToPushConnection = {
  __typename?: 'UserToPushConnection';
  /**
   * Edges for the UserToPushConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToPushConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Push>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToPushConnectionEdge = {
  __typename?: 'UserToPushConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Push>;
};

/** The push type */
export type Push = Node & {
  __typename?: 'Push';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Structured / parsed post content described as a shallow tree of block elements
   * @deprecated 
   */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  pushId: Scalars['Int'];
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Terms connected to the push
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the push
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the push
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The push type */
export type PushAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The push type */
export type PushContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The push type */
export type PushExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The push type */
export type PushTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The push type */
export type PushTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The push type */
export type PushTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The push type */
export type PushTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the UserToRevisionConnection connection */
export type UserToRevisionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToRevisionConnection = {
  __typename?: 'UserToRevisionConnection';
  /**
   * Edges for the UserToRevisionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToRevisionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Revision>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToRevisionConnectionEdge = {
  __typename?: 'UserToRevisionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Revision>;
};

/** The revision type */
export type Revision = Node & {
  __typename?: 'Revision';
  /**
   * Ancestors of the object
   * @deprecated 
   */
  ancestors?: Maybe<Array<Maybe<PostObjectUnion>>>;
  /**
   * The author field will return a queryable User type matching the post&#039;s author.
   * @deprecated 
   */
  author?: Maybe<User>;
  /**
   * Whether the comments are open or closed for this particular post.
   * @deprecated 
   */
  commentStatus?: Maybe<Scalars['String']>;
  /**
   * The content of the post.
   * @deprecated 
   */
  content?: Maybe<Scalars['String']>;
  /**
   * Post publishing date.
   * @deprecated 
   */
  date?: Maybe<Scalars['String']>;
  /**
   * The publishing date set in GMT.
   * @deprecated 
   */
  dateGmt?: Maybe<Scalars['String']>;
  /**
   * The desired slug of the post
   * @deprecated 
   */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * The user that most recently edited the object
   * @deprecated 
   */
  editLast?: Maybe<User>;
  /**
   * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
   * @deprecated 
   */
  editLock?: Maybe<EditLock>;
  /**
   * The RSS enclosure for the object
   * @deprecated 
   */
  enclosure?: Maybe<Scalars['String']>;
  /**
   * The excerpt of the post.
   * @deprecated 
   */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
   * @deprecated 
   */
  guid?: Maybe<Scalars['String']>;
  /**
   * The globally unique ID for the object
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * The permalink of the post
   * @deprecated 
   */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
   * @deprecated 
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
   * @deprecated 
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
   * @deprecated 
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The parent of the object. The parent object can be of various types
   * @deprecated 
   */
  parent?: Maybe<PostObjectUnion>;
  /**
   * URLs that have been pinged.
   * @deprecated 
   */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Whether the pings are open or closed for this particular post.
   * @deprecated 
   */
  pingStatus?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated 
   */
  revisionId: Scalars['Int'];
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
  /**
   * The current status of the object
   * @deprecated 
   */
  status?: Maybe<Scalars['String']>;
  /**
   * Terms connected to the revision
   * @deprecated 
   */
  termNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Terms connected to the revision
   * @deprecated 
   */
  terms?: Maybe<Array<Maybe<TermObjectUnion>>>;
  /**
   * Terms connected to the revision
   * @deprecated 
   */
  termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URLs queued to be pinged.
   * @deprecated 
   */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * URI path for the resource
   * @deprecated 
   */
  uri?: Maybe<Scalars['String']>;
};


/** The revision type */
export type RevisionAncestorsArgs = {
  types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};


/** The revision type */
export type RevisionContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The revision type */
export type RevisionExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


/** The revision type */
export type RevisionTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The revision type */
export type RevisionTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The revision type */
export type RevisionTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};


/** The revision type */
export type RevisionTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Arguments for filtering the UserToStackConnection connection */
export type UserToStackConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the User type */
export type UserToStackConnection = {
  __typename?: 'UserToStackConnection';
  /**
   * Edges for the UserToStackConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<UserToStackConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Stack>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type UserToStackConnectionEdge = {
  __typename?: 'UserToStackConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Stack>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToCategoryConnection = {
  __typename?: 'PostToCategoryConnection';
  /**
   * Edges for the PostToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
  __typename?: 'PostToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Arguments for filtering the PostToCoAuthorConnection connection */
export type PostToCoAuthorConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToCoAuthorConnection = {
  __typename?: 'PostToCoAuthorConnection';
  /**
   * Edges for the PostToCoAuthorConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToCoAuthorConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CoAuthor>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToCoAuthorConnectionEdge = {
  __typename?: 'PostToCoAuthorConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CoAuthor>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>;
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Array of author IDs to include comments for. */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
};

/** Connection between the post type and the post type */
export type PostToCommentConnection = {
  __typename?: 'PostToCommentConnection';
  /**
   * Edges for the PostToCommentConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
  __typename?: 'PostToCommentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Comment>;
};

/** Arguments for filtering the PostToEditionConnection connection */
export type PostToEditionConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToEditionConnection = {
  __typename?: 'PostToEditionConnection';
  /**
   * Edges for the PostToEditionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToEditionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Edition>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToEditionConnectionEdge = {
  __typename?: 'PostToEditionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Edition>;
};

/** Arguments for filtering the PostToFlagConnection connection */
export type PostToFlagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToFlagConnection = {
  __typename?: 'PostToFlagConnection';
  /**
   * Edges for the PostToFlagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToFlagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Flag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToFlagConnectionEdge = {
  __typename?: 'PostToFlagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Flag>;
};

/** Arguments for filtering the PostToGuideConnection connection */
export type PostToGuideConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToGuideConnection = {
  __typename?: 'PostToGuideConnection';
  /**
   * Edges for the PostToGuideConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToGuideConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Guide>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToGuideConnectionEdge = {
  __typename?: 'PostToGuideConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Guide>;
};

/** Arguments for filtering the PostToLocationConnection connection */
export type PostToLocationConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToLocationConnection = {
  __typename?: 'PostToLocationConnection';
  /**
   * Edges for the PostToLocationConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToLocationConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Location>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToLocationConnectionEdge = {
  __typename?: 'PostToLocationConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Location>;
};

/** Arguments for filtering the PostToObsessionConnection connection */
export type PostToObsessionConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToObsessionConnection = {
  __typename?: 'PostToObsessionConnection';
  /**
   * Edges for the PostToObsessionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToObsessionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Obsession>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToObsessionConnectionEdge = {
  __typename?: 'PostToObsessionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Obsession>;
};

/** Arguments for filtering the PostToProjectConnection connection */
export type PostToProjectConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToProjectConnection = {
  __typename?: 'PostToProjectConnection';
  /**
   * Edges for the PostToProjectConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToProjectConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Project>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToProjectConnectionEdge = {
  __typename?: 'PostToProjectConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Project>;
};

/** Arguments for filtering the PostToSeriesConnection connection */
export type PostToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToSeriesConnection = {
  __typename?: 'PostToSeriesConnection';
  /**
   * Edges for the PostToSeriesConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToSeriesConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToSeriesConnectionEdge = {
  __typename?: 'PostToSeriesConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Series>;
};

/** Arguments for filtering the PostToShowConnection connection */
export type PostToShowConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToShowConnection = {
  __typename?: 'PostToShowConnection';
  /**
   * Edges for the PostToShowConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToShowConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Show>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToShowConnectionEdge = {
  __typename?: 'PostToShowConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Show>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToTagConnection = {
  __typename?: 'PostToTagConnection';
  /**
   * Edges for the PostToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = {
  __typename?: 'PostToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the PostToTopicConnection connection */
export type PostToTopicConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the post type */
export type PostToTopicConnection = {
  __typename?: 'PostToTopicConnection';
  /**
   * Edges for the PostToTopicConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<PostToTopicConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Topic>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type PostToTopicConnectionEdge = {
  __typename?: 'PostToTopicConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Topic>;
};

/** Arguments for filtering the BlogPostToTagConnection connection */
export type BlogPostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the blogPost type and the blogPost type */
export type BlogPostToTagConnection = {
  __typename?: 'BlogPostToTagConnection';
  /**
   * Edges for the BlogPostToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<BlogPostToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type BlogPostToTagConnectionEdge = {
  __typename?: 'BlogPostToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the RootQueryToBlogPostConnection connection */
export type RootQueryToBlogPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToBlogPostConnection = {
  __typename?: 'RootQueryToBlogPostConnection';
  /**
   * Edges for the RootQueryToBlogPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToBlogPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<BlogPost>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToBlogPostConnectionEdge = {
  __typename?: 'RootQueryToBlogPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<BlogPost>;
};

/** Arguments for filtering the RootQueryToBulletinConnection connection */
export type RootQueryToBulletinConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToBulletinConnection = {
  __typename?: 'RootQueryToBulletinConnection';
  /**
   * Edges for the RootQueryToBulletinConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToBulletinConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Bulletin>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToBulletinConnectionEdge = {
  __typename?: 'RootQueryToBulletinConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Bulletin>;
};

/** Arguments for filtering the RootQueryToCardConnection connection */
export type RootQueryToCardConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToCardConnection = {
  __typename?: 'RootQueryToCardConnection';
  /**
   * Edges for the RootQueryToCardConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCardConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Card>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToCardConnectionEdge = {
  __typename?: 'RootQueryToCardConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Card>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToCategoryConnection = {
  __typename?: 'RootQueryToCategoryConnection';
  /**
   * Edges for the RootQueryToCategoryConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Category>;
};

/** Arguments for filtering the RootQueryToChapterConnection connection */
export type RootQueryToChapterConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToChapterConnection = {
  __typename?: 'RootQueryToChapterConnection';
  /**
   * Edges for the RootQueryToChapterConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToChapterConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Chapter>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToChapterConnectionEdge = {
  __typename?: 'RootQueryToChapterConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Chapter>;
};

/** Arguments for filtering the RootQueryToCoAuthorConnection connection */
export type RootQueryToCoAuthorConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToCoAuthorConnection = {
  __typename?: 'RootQueryToCoAuthorConnection';
  /**
   * Edges for the RootQueryToCoAuthorConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCoAuthorConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<CoAuthor>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToCoAuthorConnectionEdge = {
  __typename?: 'RootQueryToCoAuthorConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<CoAuthor>;
};

/** Arguments for filtering the RootQueryToCollectionConnection connection */
export type RootQueryToCollectionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToCollectionConnection = {
  __typename?: 'RootQueryToCollectionConnection';
  /**
   * Edges for the RootQueryToCollectionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToCollectionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Collection>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToCollectionConnectionEdge = {
  __typename?: 'RootQueryToCollectionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Collection>;
};

/** Arguments for filtering the RootQueryToContentUnionConnection connection */
export type RootQueryToContentUnionConnectionWhereArgs = {
  /** Search terms */
  search?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToContentUnionConnection = {
  __typename?: 'RootQueryToContentUnionConnection';
  /**
   * Edges for the RootQueryToContentUnionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentUnionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<ContentUnion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentUnionConnectionEdge = {
  __typename?: 'RootQueryToContentUnionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<ContentUnion>;
};

/** Arguments for filtering the RootQueryToEditionConnection connection */
export type RootQueryToEditionConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToEditionConnection = {
  __typename?: 'RootQueryToEditionConnection';
  /**
   * Edges for the RootQueryToEditionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToEditionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Edition>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToEditionConnectionEdge = {
  __typename?: 'RootQueryToEditionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Edition>;
};

/** Arguments for filtering the RootQueryToEmailListConnection connection */
export type RootQueryToEmailListConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToEmailListConnection = {
  __typename?: 'RootQueryToEmailListConnection';
  /**
   * Edges for the RootQueryToEmailListConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToEmailListConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<EmailList>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToEmailListConnectionEdge = {
  __typename?: 'RootQueryToEmailListConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<EmailList>;
};

/** Arguments for filtering the RootQueryToEmailConnection connection */
export type RootQueryToEmailConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToEmailConnection = {
  __typename?: 'RootQueryToEmailConnection';
  /**
   * Edges for the RootQueryToEmailConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToEmailConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Email>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToEmailConnectionEdge = {
  __typename?: 'RootQueryToEmailConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Email>;
};

/** Arguments for filtering the RootQueryToFlagConnection connection */
export type RootQueryToFlagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToFlagConnection = {
  __typename?: 'RootQueryToFlagConnection';
  /**
   * Edges for the RootQueryToFlagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToFlagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Flag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToFlagConnectionEdge = {
  __typename?: 'RootQueryToFlagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Flag>;
};

/** Arguments for filtering the RootQueryToGuideConnection connection */
export type RootQueryToGuideConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToGuideConnection = {
  __typename?: 'RootQueryToGuideConnection';
  /**
   * Edges for the RootQueryToGuideConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToGuideConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Guide>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToGuideConnectionEdge = {
  __typename?: 'RootQueryToGuideConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Guide>;
};

/** Arguments for filtering the RootQueryToLocationConnection connection */
export type RootQueryToLocationConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToLocationConnection = {
  __typename?: 'RootQueryToLocationConnection';
  /**
   * Edges for the RootQueryToLocationConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToLocationConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Location>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToLocationConnectionEdge = {
  __typename?: 'RootQueryToLocationConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Location>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToMediaItemConnection = {
  __typename?: 'RootQueryToMediaItemConnection';
  /**
   * Edges for the RootQueryToMediaItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MediaItem>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = {
  __typename?: 'Menu';
  /**
   * The number of items in the menu
   * @deprecated 
   */
  count?: Maybe<Scalars['Int']>;
  /**
   * ID of the nav menu.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Connection between the Menu type and the Menu type
   * @deprecated 
   */
  menuItems?: Maybe<MenuToMenuItemConnection>;
  /**
   * WP ID of the nav menu.
   * @deprecated 
   */
  menuId?: Maybe<Scalars['Int']>;
  /**
   * Display name of the menu. Equivalent to WP_Term-&gt;name.
   * @deprecated 
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The url friendly name of the menu. Equivalent to WP_Term-&gt;slug
   * @deprecated 
   */
  slug?: Maybe<Scalars['String']>;
};


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
};

/** Registered menu locations */
export enum MenuLocationEnum {
  About = 'ABOUT',
  AuthorsWork = 'AUTHORS_WORK',
  CaseStudiesCreative = 'CASE_STUDIES_CREATIVE',
  ChartsAfrica = 'CHARTS_AFRICA',
  ChartsIndia = 'CHARTS_INDIA',
  ChartsQuartz = 'CHARTS_QUARTZ',
  ClientsCreative = 'CLIENTS_CREATIVE',
  FeaturedQuartz = 'FEATURED_QUARTZ',
  FeaturesMarketingMembers = 'FEATURES_MARKETING_MEMBERS',
  FeaturesMembers = 'FEATURES_MEMBERS',
  FeaturesVideoMembers = 'FEATURES_VIDEO_MEMBERS',
  Obsessions = 'OBSESSIONS',
  ObsessionsAfrica = 'OBSESSIONS_AFRICA',
  ObsessionsIndia = 'OBSESSIONS_INDIA',
  ObsessionsQuartz = 'OBSESSIONS_QUARTZ',
  ObsessionsQuartzy = 'OBSESSIONS_QUARTZY',
  ObsessionsWork = 'OBSESSIONS_WORK',
  PlayerVideo = 'PLAYER_VIDEO',
  PremiumMembers = 'PREMIUM_MEMBERS',
  ShowsVideo = 'SHOWS_VIDEO',
  TopAfrica = 'TOP_AFRICA',
  TopIndia = 'TOP_INDIA',
  TopQuartz = 'TOP_QUARTZ',
  TopQuartzy = 'TOP_QUARTZY',
  TopWork = 'TOP_WORK',
  VideosQuartz = 'VIDEOS_QUARTZ',
  VideosQuartzy = 'VIDEOS_QUARTZY'
}

/** Connection between the Menu type and the Menu type */
export type MenuToMenuItemConnection = {
  __typename?: 'MenuToMenuItemConnection';
  /**
   * Edges for the MenuToMenuItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
  __typename?: 'MenuToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MenuItem>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = {
  __typename?: 'MenuItem';
  /**
   * Connection between the MenuItem type and the MenuItem type
   * @deprecated 
   */
  childItems?: Maybe<MenuItemToMenuItemConnection>;
  /**
   * The object connected to this menu item.
   * @deprecated 
   */
  connectedObject?: Maybe<MenuItemObjectUnion>;
  /**
   * Class attribute for the menu item link
   * @deprecated 
   */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Description of the menu item.
   * @deprecated 
   */
  description?: Maybe<Scalars['String']>;
  /**
   * Relay ID of the menu item.
   * @deprecated 
   */
  id: Scalars['ID'];
  /**
   * Label or title of the menu item.
   * @deprecated 
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Link relationship (XFN) of the menu item.
   * @deprecated 
   */
  linkRelationship?: Maybe<Scalars['String']>;
  /**
   * WP ID of the menu item.
   * @deprecated 
   */
  menuItemId?: Maybe<Scalars['Int']>;
  /**
   * Target attribute for the menu item link.
   * @deprecated 
   */
  target?: Maybe<Scalars['String']>;
  /**
   * Title attribute for the menu item link
   * @deprecated 
   */
  title?: Maybe<Scalars['String']>;
  /**
   * URL or destination of the menu item.
   * @deprecated 
   */
  url?: Maybe<Scalars['String']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
  __typename?: 'MenuItemToMenuItemConnection';
  /**
   * Edges for the MenuItemToMenuItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MenuItem>;
};

export type MenuItemObjectUnion = Post | Page | Email | Chapter | Promotion | BlogPost | Nug | Collection | Category | Tag | EmailList | Obsession | Topic | Show | CoAuthor | MenuItem;

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToMenuItemConnection = {
  __typename?: 'RootQueryToMenuItemConnection';
  /**
   * Edges for the RootQueryToMenuItemConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<MenuItem>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToMenuConnection = {
  __typename?: 'RootQueryToMenuConnection';
  /**
   * Edges for the RootQueryToMenuConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Menu>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
  __typename?: 'RootQueryToMenuConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Menu>;
};

/** Arguments for filtering the RootQueryToNugConnection connection */
export type RootQueryToNugConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToNugConnection = {
  __typename?: 'RootQueryToNugConnection';
  /**
   * Edges for the RootQueryToNugConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToNugConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Nug>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToNugConnectionEdge = {
  __typename?: 'RootQueryToNugConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Nug>;
};

/** Arguments for filtering the RootQueryToObsessionConnection connection */
export type RootQueryToObsessionConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToObsessionConnection = {
  __typename?: 'RootQueryToObsessionConnection';
  /**
   * Edges for the RootQueryToObsessionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToObsessionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Obsession>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToObsessionConnectionEdge = {
  __typename?: 'RootQueryToObsessionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Obsession>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPageConnection = {
  __typename?: 'RootQueryToPageConnection';
  /**
   * Edges for the RootQueryToPageConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
  __typename?: 'RootQueryToPageConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Page>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPostConnection = {
  __typename?: 'RootQueryToPostConnection';
  /**
   * Edges for the RootQueryToPostConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
  __typename?: 'RootQueryToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Post>;
};

/** Arguments for filtering the RootQueryToProjectConnection connection */
export type RootQueryToProjectConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToProjectConnection = {
  __typename?: 'RootQueryToProjectConnection';
  /**
   * Edges for the RootQueryToProjectConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToProjectConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Project>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToProjectConnectionEdge = {
  __typename?: 'RootQueryToProjectConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Project>;
};

/** Arguments for filtering the RootQueryToPromotionConnection connection */
export type RootQueryToPromotionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPromotionConnection = {
  __typename?: 'RootQueryToPromotionConnection';
  /**
   * Edges for the RootQueryToPromotionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPromotionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Promotion>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToPromotionConnectionEdge = {
  __typename?: 'RootQueryToPromotionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Promotion>;
};

/** Arguments for filtering the RootQueryToPushConnection connection */
export type RootQueryToPushConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToPushConnection = {
  __typename?: 'RootQueryToPushConnection';
  /**
   * Edges for the RootQueryToPushConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToPushConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Push>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToPushConnectionEdge = {
  __typename?: 'RootQueryToPushConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Push>;
};

/** Arguments for filtering the RootQueryToRevisionConnection connection */
export type RootQueryToRevisionConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToRevisionConnection = {
  __typename?: 'RootQueryToRevisionConnection';
  /**
   * Edges for the RootQueryToRevisionConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToRevisionConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Revision>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToRevisionConnectionEdge = {
  __typename?: 'RootQueryToRevisionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Revision>;
};

/** Arguments for filtering the RootQueryToSeriesConnection connection */
export type RootQueryToSeriesConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToSeriesConnection = {
  __typename?: 'RootQueryToSeriesConnection';
  /**
   * Edges for the RootQueryToSeriesConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToSeriesConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToSeriesConnectionEdge = {
  __typename?: 'RootQueryToSeriesConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Series>;
};

/** Arguments for filtering the RootQueryToShowConnection connection */
export type RootQueryToShowConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToShowConnection = {
  __typename?: 'RootQueryToShowConnection';
  /**
   * Edges for the RootQueryToShowConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToShowConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Show>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToShowConnectionEdge = {
  __typename?: 'RootQueryToShowConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Show>;
};

/** Arguments for filtering the RootQueryToStackConnection connection */
export type RootQueryToStackConnectionWhereArgs = {
  /**
   * The user that's connected as the author of the object. Use the
   * 							userId for the author object.
   */
  author?: Maybe<Scalars['Int']>;
  authorType?: Maybe<AuthorType>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /**
   * Find objects NOT connected to author(s) in the array of author's
   * 							userIds
   */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /**
   * Array of category IDs, used to display objects from one
   * 										category OR another
   */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  edition?: Maybe<EditionName>;
  /**
   * True for objects with passwords; False for objects without passwords;
   * 							null for all objects with or without passwords
   */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Specify IDs NOT to retrieve. If this is used in the same query as "in",
   * 							it will be ignored
   */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /**
   * Use ID to return only children. Use 0 to return only top-level
   * 							items
   */
  parent?: Maybe<Scalars['String']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  popular?: Maybe<PopularQuery>;
  preview?: Maybe<PreviewQuery>;
  recommended?: Maybe<RecommendedQuery>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /**
   * Array of tag IDs, used to display objects from one tag OR
   * 							another
   */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of tag slugs, used to display objects from one tag OR
   * 							another
   */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Array of tag slugs, used to exclude objects in specified
   * 							tags
   */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToStackConnection = {
  __typename?: 'RootQueryToStackConnection';
  /**
   * Edges for the RootQueryToStackConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToStackConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Stack>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  postTypeInfo?: Maybe<PostType>;
};

/** An edge in a connection */
export type RootQueryToStackConnectionEdge = {
  __typename?: 'RootQueryToStackConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Stack>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToTagConnection = {
  __typename?: 'RootQueryToTagConnection';
  /**
   * Edges for the RootQueryToTagConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
  __typename?: 'RootQueryToTagConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Tag>;
};

/** Arguments for filtering the RootQueryToTopicConnection connection */
export type RootQueryToTopicConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default true */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>;
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToTopicConnection = {
  __typename?: 'RootQueryToTopicConnection';
  /**
   * Edges for the RootQueryToTopicConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToTopicConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<Topic>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
  /**
   * Information about the type of content being queried
   * @deprecated 
   */
  taxonomyInfo?: Maybe<Taxonomy>;
};

/** An edge in a connection */
export type RootQueryToTopicConnectionEdge = {
  __typename?: 'RootQueryToTopicConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<Topic>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<Array<Maybe<PostTypeEnum>>>;
  /** Array of comment IDs to include. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The user login. */
  login?: Maybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: Maybe<Scalars['Int']>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: Maybe<Scalars['Int']>;
  /** The user nicename. */
  nicename?: Maybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: Maybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: Maybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<Array<Maybe<UsersConnectionSearchColumnEnum>>>;
};

/** Names of available user roles */
export enum UserRoleEnum {
  Administrator = 'ADMINISTRATOR',
  Author = 'AUTHOR',
  Business = 'BUSINESS',
  Contributor = 'CONTRIBUTOR',
  Editor = 'EDITOR',
  Subscriber = 'SUBSCRIBER',
  VipSupport = 'VIP_SUPPORT',
  VipSupportInactive = 'VIP_SUPPORT__INACTIVE_'
}

/** Column used for searching for users */
export enum UsersConnectionSearchColumnEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Login = 'LOGIN',
  Nicename = 'NICENAME',
  Url = 'URL'
}

/** Connection between the RootQuery type and the RootQuery type */
export type RootQueryToUserConnection = {
  __typename?: 'RootQueryToUserConnection';
  /**
   * Edges for the RootQueryToUserConnection connection
   * @deprecated 
   */
  edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
  /**
   * The nodes of the connection, without the edges
   * @deprecated 
   */
  nodes?: Maybe<Array<Maybe<User>>>;
  /**
   * Information about pagination in a connection.
   * @deprecated 
   */
  pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
  __typename?: 'RootQueryToUserConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated 
   */
  cursor?: Maybe<Scalars['String']>;
  /**
   * The item at the end of the edge
   * @deprecated 
   */
  node?: Maybe<User>;
};

export type ArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ArticleQuery = (
  { __typename?: 'RootQuery' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & ArticlePartsFragment
  )> }
);

export type ArticlePreviewQueryVariables = Exact<{
  id: Scalars['Int'];
  time: Scalars['Int'];
  token: Scalars['String'];
}>;


export type ArticlePreviewQuery = (
  { __typename?: 'RootQuery' }
  & { posts?: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & ArticlePartsFragment
    )>>> }
  )> }
);

export type ArticleTeaserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ArticleTeaserQuery = (
  { __typename?: 'RootQuery' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & ArticleTeaserPartsFragment
  )> }
);

export type ArticlesByGuideQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;


export type ArticlesByGuideQuery = (
  { __typename?: 'RootQuery' }
  & { guides?: Maybe<(
    { __typename?: 'RootQueryToGuideConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Guide' }
      & { posts?: Maybe<(
        { __typename?: 'GuideToPostConnection' }
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>>, pageInfo?: Maybe<(
          { __typename?: 'WPPageInfo' }
          & Pick<WpPageInfo, 'hasNextPage' | 'endCursor'>
        )> }
      )> }
      & GuidePartsFragment
    )>>> }
  )> }
);

export type ArticlesByObsessionQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  slug: Array<Maybe<Scalars['String']>>;
}>;


export type ArticlesByObsessionQuery = (
  { __typename?: 'RootQuery' }
  & { obsessions?: Maybe<(
    { __typename?: 'RootQueryToObsessionConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Obsession' }
      & { posts?: Maybe<(
        { __typename?: 'ObsessionToContentUnionConnection' }
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        ) | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | { __typename?: 'Email' } | { __typename?: 'Card' } | { __typename?: 'Chapter' } | (
          { __typename?: 'Promotion' }
          & PromotionPartsFragment
        ) | { __typename?: 'Collection' } | { __typename?: 'Stack' } | (
          { __typename?: 'Bulletin' }
          & BulletinPartsFragment
        )>>>, pageInfo?: Maybe<(
          { __typename?: 'WPPageInfo' }
          & Pick<WpPageInfo, 'endCursor' | 'hasNextPage'>
        )> }
      )> }
      & ObsessionPartsFragment
    )>>> }
  )> }
);

export type ArticlesBySeriesQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;


export type ArticlesBySeriesQuery = (
  { __typename?: 'RootQuery' }
  & { serieses?: Maybe<(
    { __typename?: 'RootQueryToSeriesConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Series' }
      & { posts?: Maybe<(
        { __typename?: 'SeriesToPostConnection' }
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>>, pageInfo?: Maybe<(
          { __typename?: 'WPPageInfo' }
          & Pick<WpPageInfo, 'endCursor' | 'hasNextPage'>
        )> }
      )> }
      & SeriesPartsFragment
    )>>> }
  )> }
);

export type ArticlesByShowQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;


export type ArticlesByShowQuery = (
  { __typename?: 'RootQuery' }
  & { shows?: Maybe<(
    { __typename?: 'RootQueryToShowConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Show' }
      & { posts?: Maybe<(
        { __typename?: 'ShowToPostConnection' }
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>>, pageInfo?: Maybe<(
          { __typename?: 'WPPageInfo' }
          & Pick<WpPageInfo, 'endCursor' | 'hasNextPage'>
        )> }
      )> }
      & ShowPartsFragment
    )>>> }
  )> }
);

export type ArticlesByTagQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;


export type ArticlesByTagQuery = (
  { __typename?: 'RootQuery' }
  & { tags?: Maybe<(
    { __typename?: 'RootQueryToTagConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & { posts?: Maybe<(
        { __typename?: 'TagToPostConnection' }
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>>, pageInfo?: Maybe<(
          { __typename?: 'WPPageInfo' }
          & Pick<WpPageInfo, 'endCursor' | 'hasNextPage'>
        )> }
      )> }
      & TagPartsFragment
    )>>> }
  )> }
);

export type ArticlesByTopicQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;


export type ArticlesByTopicQuery = (
  { __typename?: 'RootQuery' }
  & { topics?: Maybe<(
    { __typename?: 'RootQueryToTopicConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Topic' }
      & { posts?: Maybe<(
        { __typename?: 'TopicToPostConnection' }
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>>, pageInfo?: Maybe<(
          { __typename?: 'WPPageInfo' }
          & Pick<WpPageInfo, 'endCursor' | 'hasNextPage'>
        )> }
      )> }
      & TopicPartsFragment
    )>>> }
  )> }
);

export type ContentBySearchTermQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  search: Scalars['String'];
}>;


export type ContentBySearchTermQuery = (
  { __typename?: 'RootQuery' }
  & { content?: Maybe<(
    { __typename?: 'RootQueryToContentUnionConnection' }
    & { pageInfo?: Maybe<(
      { __typename?: 'WPPageInfo' }
      & Pick<WpPageInfo, 'endCursor' | 'hasNextPage'>
    )>, nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'trackingUrls'>
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | { __typename?: 'MediaItem' } | { __typename?: 'Email' } | { __typename?: 'Card' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'Collection' } | { __typename?: 'Stack' } | { __typename?: 'Bulletin' }>>> }
  )> }
);

export type LatestArticlesQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  edition?: Maybe<EditionName>;
  postsPerPage?: Maybe<Scalars['Int']>;
}>;


export type LatestArticlesQuery = (
  { __typename?: 'RootQuery' }
  & { posts?: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>>, pageInfo?: Maybe<(
      { __typename?: 'WPPageInfo' }
      & Pick<WpPageInfo, 'endCursor' | 'hasNextPage'>
    )> }
  )> }
);

export type PromotionPartsFragment = (
  { __typename?: 'Promotion' }
  & Pick<Promotion, 'content' | 'dateGmt' | 'destination' | 'id' | 'link' | 'modified' | 'title'>
  & { description: Promotion['excerpt'] }
  & { featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> }
);

export type DiscoverQueryVariables = Exact<{
  topics: Array<Maybe<Scalars['String']>>;
}>;


export type DiscoverQuery = (
  { __typename?: 'RootQuery' }
  & { latest?: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>> }
  )>, trendingPosts?: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    )>>> }
  )>, topics?: Maybe<(
    { __typename?: 'RootQueryToTopicConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Topic' }
      & { posts?: Maybe<(
        { __typename?: 'TopicToPostConnection' }
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>> }
      )> }
      & TopicPartsFragment
    )>>> }
  )> }
);

export type ArticlePartsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'canonicalUrl' | 'classifications' | 'excerpt' | 'featuredImageSize' | 'footnotes' | 'interactiveSource' | 'interactiveShowHeader' | 'metered' | 'modifiedGmt' | 'paywalled' | 'readNext' | 'slug' | 'seoTitle' | 'socialDescription' | 'socialImage' | 'socialTitle' | 'subtype' | 'suppressAds' | 'trackingUrls'>
  & { authors?: Maybe<(
    { __typename?: 'PostToCoAuthorConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'CoAuthor' }
      & AuthorPartsFragment
    )>>> }
  )>, blocks?: Maybe<Array<Maybe<(
    { __typename?: 'Block' }
    & BlockPartsFragment
  )>>>, flags?: Maybe<(
    { __typename?: 'PostToFlagConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Flag' }
      & Pick<Flag, 'name' | 'slug'>
    )>>> }
  )>, guides?: Maybe<(
    { __typename?: 'PostToGuideConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Guide' }
      & GuidePartsFragment
    )>>> }
  )>, locations?: Maybe<(
    { __typename?: 'PostToLocationConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Location' }
      & Pick<Location, 'name'>
    )>>> }
  )>, obsessions?: Maybe<(
    { __typename?: 'PostToObsessionConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Obsession' }
      & ObsessionPartsFragment
    )>>> }
  )>, projects?: Maybe<(
    { __typename?: 'PostToProjectConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Project' }
      & ProjectPartsFragment
    )>>> }
  )>, serieses?: Maybe<(
    { __typename?: 'PostToSeriesConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Series' }
      & SeriesPartsFragment
    )>>> }
  )>, shows?: Maybe<(
    { __typename?: 'PostToShowConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Show' }
      & ShowPartsFragment
    )>>> }
  )>, tags?: Maybe<(
    { __typename?: 'PostToTagConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name' | 'slug'>
    )>>> }
  )>, topics?: Maybe<(
    { __typename?: 'PostToTopicConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Topic' }
      & Pick<Topic, 'id' | 'name' | 'slug'>
    )>>> }
  )> }
  & ArticleTeaserPartsFragment
);

export type ArticleTeaserPartsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'dateGmt' | 'id' | 'kicker' | 'link' | 'postId' | 'title'>
  & { bulletin?: Maybe<(
    { __typename?: 'BulletinData' }
    & { campaign?: Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<CampaignData, 'id' | 'logo' | 'name' | 'slug'>
    )>, sponsor?: Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<CampaignData, 'attribution' | 'id' | 'slug' | 'name'>
    )>, clientTracking?: Maybe<(
      { __typename?: 'ClientTrackingData' }
      & Pick<ClientTrackingData, 'article' | 'elsewhere' | 'logo'>
    )> }
  )>, editions?: Maybe<(
    { __typename?: 'PostToEditionConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Edition' }
      & Pick<Edition, 'name' | 'slug'>
    )>>> }
  )>, featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, trailerVideo?: Maybe<(
    { __typename?: 'VideoData' }
    & VideoPartsFragment
  )>, video?: Maybe<(
    { __typename?: 'VideoData' }
    & VideoPartsFragment
  )> }
);

export type AuthorPartsFragment = (
  { __typename?: 'CoAuthor' }
  & Pick<CoAuthor, 'avatar' | 'bio' | 'emeritus' | 'email' | 'facebook' | 'firstName' | 'id' | 'instagram' | 'lastName' | 'linkedin' | 'name' | 'organization' | 'pgp' | 'shortBio' | 'title' | 'twitter' | 'type' | 'url' | 'username' | 'website'>
);

export type BlockPartsFragment = (
  { __typename?: 'Block' }
  & Pick<Block, 'id' | 'innerHtml' | 'tagName' | 'type'>
  & { attributes?: Maybe<Array<Maybe<(
    { __typename?: 'Attribute' }
    & Pick<Attribute, 'name' | 'value'>
  )>>> }
);

export type BulletinPartsFragment = (
  { __typename?: 'Bulletin' }
  & Pick<Bulletin, 'link' | 'title' | 'dateGmt'>
  & { featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, bulletin?: Maybe<(
    { __typename?: 'BulletinData' }
    & { sponsor?: Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<CampaignData, 'name'>
    )>, campaign?: Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<CampaignData, 'id'>
    )>, clientTracking?: Maybe<(
      { __typename?: 'ClientTrackingData' }
      & Pick<ClientTrackingData, 'article' | 'elsewhere'>
    )> }
  )> }
);

export type GuidePartsFragment = (
  { __typename?: 'Guide' }
  & Pick<Guide, 'id' | 'guideId' | 'link' | 'count' | 'description' | 'shortDescription' | 'name' | 'slug' | 'socialTitle' | 'colors'>
  & { featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, socialImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, headerImages?: Maybe<Array<Maybe<(
    { __typename?: 'HeaderImages' }
    & Pick<HeaderImages, 'layer' | 'size'>
    & { image?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }
  )>>> }
);

export type HomeCollectionPartsFragment = (
  { __typename?: 'Collection' }
  & Pick<Collection, 'id' | 'title'>
  & { featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, blocks?: Maybe<Array<Maybe<(
    { __typename?: 'Block' }
    & { connections?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | (
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    ) | { __typename?: 'Revision' } | { __typename?: 'Push' } | { __typename?: 'Email' } | { __typename?: 'Card' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | (
      { __typename?: 'Nug' }
      & NugPartsFragment
    ) | { __typename?: 'Collection' } | { __typename?: 'Stack' } | { __typename?: 'Bulletin' }>>> }
    & BlockPartsFragment
  )>>> }
);

export type MediaPartsFragment = (
  { __typename?: 'MediaItem' }
  & Pick<MediaItem, 'altText' | 'caption' | 'credit' | 'id' | 'sourceUrl' | 'title'>
  & { mediaDetails?: Maybe<(
    { __typename?: 'MediaDetails' }
    & Pick<MediaDetails, 'height' | 'width'>
  )> }
);

export type NugPartsFragment = (
  { __typename?: 'Nug' }
  & Pick<Nug, 'id' | 'dateGmt' | 'link' | 'modifiedGmt' | 'nugId' | 'slug' | 'title'>
  & { blocks?: Maybe<Array<Maybe<(
    { __typename?: 'Block' }
    & { connections?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & ArticleTeaserPartsFragment
    ) | { __typename?: 'Page' } | (
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    ) | { __typename?: 'Revision' } | { __typename?: 'Push' } | { __typename?: 'Email' } | { __typename?: 'Card' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Stack' } | { __typename?: 'Bulletin' }>>> }
    & BlockPartsFragment
  )>>>, emailLists?: Maybe<(
    { __typename?: 'NugToEmailListConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'EmailList' }
      & Pick<EmailList, 'emailListId' | 'listId' | 'name'>
    )>>> }
  )> }
);

export type ObsessionPartsFragment = (
  { __typename?: 'Obsession' }
  & Pick<Obsession, 'id' | 'description' | 'link' | 'name' | 'shortDescription' | 'slug' | 'subtitle'>
  & { featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, sponsor?: Maybe<(
    { __typename?: 'SponsorData' }
    & Pick<SponsorData, 'name'>
    & { campaign?: Maybe<(
      { __typename?: 'CampaignData' }
      & Pick<CampaignData, 'id' | 'logo' | 'logoLink'>
    )> }
  )> }
);

export type ProjectPartsFragment = (
  { __typename?: 'Project' }
  & Pick<Project, 'id' | 'count' | 'description' | 'shortDescription' | 'link' | 'name' | 'slug'>
);

export type SeriesPartsFragment = (
  { __typename?: 'Series' }
  & Pick<Series, 'colors' | 'count' | 'description' | 'emailListId' | 'ended' | 'id' | 'link' | 'name' | 'postOrder' | 'shortDescription' | 'showToc' | 'slug' | 'socialTitle'>
  & { featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, headerImages?: Maybe<Array<Maybe<(
    { __typename?: 'HeaderImages' }
    & Pick<HeaderImages, 'layer' | 'size'>
    & { image?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }
  )>>>, headerVideos?: Maybe<Array<Maybe<(
    { __typename?: 'HeaderVideos' }
    & Pick<HeaderVideos, 'size'>
    & { mp4?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )>, webm?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )>, poster?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }
  )>>>, socialImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> }
);

export type ShowPartsFragment = (
  { __typename?: 'Show' }
  & Pick<Show, 'colors' | 'count' | 'description' | 'id' | 'link' | 'name' | 'postOrder' | 'shortDescription' | 'slug'>
  & { featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )>, headerImages?: Maybe<Array<Maybe<(
    { __typename?: 'ShowHeaderImages' }
    & Pick<ShowHeaderImages, 'layer' | 'size'>
    & { image?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }
  )>>>, headerVideos?: Maybe<Array<Maybe<(
    { __typename?: 'ShowHeaderVideos' }
    & Pick<ShowHeaderVideos, 'size'>
    & { mp4?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )>, webm?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )>, poster?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaPartsFragment
    )> }
  )>>>, socialImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> }
);

export type TagPartsFragment = (
  { __typename?: 'Tag' }
  & Pick<Tag, 'count' | 'description' | 'id' | 'link' | 'name' | 'shortDescription' | 'slug' | 'tagId'>
  & { featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> }
);

export type TopicPartsFragment = (
  { __typename?: 'Topic' }
  & Pick<Topic, 'description' | 'id' | 'link' | 'name' | 'shortDescription' | 'slug' | 'topicId'>
  & { featuredImage?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaPartsFragment
  )> }
);

export type VideoPartsFragment = (
  { __typename?: 'VideoData' }
  & Pick<VideoData, 'id' | 'duration' | 'episode' | 'playlistId' | 'season' | 'type'>
);

export type GuidesQueryVariables = Exact<{
  before?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  postsPerGuide?: Maybe<Scalars['Int']>;
}>;


export type GuidesQuery = (
  { __typename?: 'RootQuery' }
  & { guides?: Maybe<(
    { __typename?: 'RootQueryToGuideConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Guide' }
      & { posts?: Maybe<(
        { __typename?: 'GuideToPostConnection' }
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & ArticleTeaserPartsFragment
        )>>> }
      )> }
      & GuidePartsFragment
    )>>>, pageInfo?: Maybe<(
      { __typename?: 'WPPageInfo' }
      & Pick<WpPageInfo, 'hasPreviousPage' | 'startCursor'>
    )> }
  )> }
);

export type GuidesBySlugQueryVariables = Exact<{
  perPage: Scalars['Int'];
  slugs: Array<Maybe<Scalars['String']>>;
}>;


export type GuidesBySlugQuery = (
  { __typename?: 'RootQuery' }
  & { guides?: Maybe<(
    { __typename?: 'RootQueryToGuideConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Guide' }
      & GuidePartsFragment
    )>>> }
  )> }
);

export type HomeCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeCollectionQuery = (
  { __typename?: 'RootQuery' }
  & { collections?: Maybe<(
    { __typename?: 'RootQueryToCollectionConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Collection' }
      & HomeCollectionPartsFragment
    )>>> }
  )> }
);

export type HomeCollectionPreviewQueryVariables = Exact<{
  id: Scalars['Int'];
  time: Scalars['Int'];
  token: Scalars['String'];
}>;


export type HomeCollectionPreviewQuery = (
  { __typename?: 'RootQuery' }
  & { collections?: Maybe<(
    { __typename?: 'RootQueryToCollectionConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Collection' }
      & HomeCollectionPartsFragment
    )>>> }
  )> }
);

export type MemberHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type MemberHomeQuery = (
  { __typename?: 'RootQuery' }
  & { features?: Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'id'>
      & { connectedObject?: Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | (
        { __typename?: 'Tag' }
        & { posts?: Maybe<(
          { __typename?: 'TagToPostConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'Post' }
            & ArticleTeaserPartsFragment
          )>>> }
        )> }
        & TagPartsFragment
      ) | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> }
    )>>> }
  )>, guides?: Maybe<(
    { __typename?: 'RootQueryToGuideConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Guide' }
      & GuidePartsFragment
    )>>> }
  )> }
);

export type MemberVideoQueryVariables = Exact<{ [key: string]: never; }>;


export type MemberVideoQuery = (
  { __typename?: 'RootQuery' }
  & { features?: Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'id'>
      & { connectedObject?: Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | (
        { __typename?: 'Tag' }
        & { posts?: Maybe<(
          { __typename?: 'TagToPostConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'Post' }
            & ArticleTeaserPartsFragment
          )>>> }
        )> }
        & TagPartsFragment
      ) | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> }
    )>>> }
  )> }
);

export type VideoHubQueryVariables = Exact<{ [key: string]: never; }>;


export type VideoHubQuery = (
  { __typename?: 'RootQuery' }
  & { featuredVideoPlayer?: Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'MenuItem' }
      & { connectedObject?: Maybe<(
        { __typename?: 'Post' }
        & { shows?: Maybe<(
          { __typename?: 'PostToShowConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'Show' }
            & ShowPartsFragment
          )>>> }
        )> }
        & ArticleTeaserPartsFragment
      ) | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | { __typename?: 'Tag' } | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | { __typename?: 'Show' } | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> }
    )>>> }
  )>, latest?: Maybe<(
    { __typename?: 'RootQueryToTagConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & { posts?: Maybe<(
        { __typename?: 'TagToPostConnection' }
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & { shows?: Maybe<(
            { __typename?: 'PostToShowConnection' }
            & { nodes?: Maybe<Array<Maybe<(
              { __typename?: 'Show' }
              & ShowPartsFragment
            )>>> }
          )> }
          & ArticleTeaserPartsFragment
        )>>> }
      )> }
    )>>> }
  )>, featuredShows?: Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'MenuItem' }
      & { connectedObject?: Maybe<{ __typename?: 'Post' } | { __typename?: 'Page' } | { __typename?: 'Email' } | { __typename?: 'Chapter' } | { __typename?: 'Promotion' } | { __typename?: 'BlogPost' } | { __typename?: 'Nug' } | { __typename?: 'Collection' } | { __typename?: 'Category' } | { __typename?: 'Tag' } | { __typename?: 'EmailList' } | { __typename?: 'Obsession' } | { __typename?: 'Topic' } | (
        { __typename?: 'Show' }
        & { posts?: Maybe<(
          { __typename?: 'ShowToPostConnection' }
          & { nodes?: Maybe<Array<Maybe<(
            { __typename?: 'Post' }
            & ArticleTeaserPartsFragment
          )>>> }
        )> }
        & ShowPartsFragment
      ) | { __typename?: 'CoAuthor' } | { __typename?: 'MenuItem' }> }
    )>>> }
  )>, allShows?: Maybe<(
    { __typename?: 'RootQueryToShowConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Show' }
      & ShowPartsFragment
    )>>> }
  )> }
);

export type NugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type NugQuery = (
  { __typename?: 'RootQuery' }
  & { nugBy?: Maybe<(
    { __typename?: 'Nug' }
    & NugPartsFragment
  )> }
);

export type NugsByTagQueryVariables = Exact<{
  perPage: Scalars['Int'];
  tag: Array<Maybe<Scalars['String']>>;
}>;


export type NugsByTagQuery = (
  { __typename?: 'RootQuery' }
  & { nugs?: Maybe<(
    { __typename?: 'RootQueryToNugConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Nug' }
      & NugPartsFragment
    )>>> }
  )> }
);

export const MediaPartsFragmentDoc = gql`
    fragment MediaParts on MediaItem {
  altText
  caption
  credit
  id
  mediaDetails {
    height
    width
  }
  sourceUrl
  title
}
    `;
export const PromotionPartsFragmentDoc = gql`
    fragment PromotionParts on Promotion {
  content
  dateGmt
  description: excerpt(format: RAW)
  destination
  featuredImage {
    ...MediaParts
  }
  id
  link
  modified
  title
}
    ${MediaPartsFragmentDoc}`;
export const VideoPartsFragmentDoc = gql`
    fragment VideoParts on VideoData {
  id
  duration
  episode
  playlistId
  season
  type
}
    `;
export const ArticleTeaserPartsFragmentDoc = gql`
    fragment ArticleTeaserParts on Post {
  bulletin {
    campaign {
      id
      logo
      name
      slug
    }
    sponsor {
      attribution
      id
      slug
      name
    }
    clientTracking {
      article
      elsewhere
      logo
    }
  }
  dateGmt
  editions {
    nodes {
      name
      slug
    }
  }
  featuredImage {
    ...MediaParts
  }
  id
  kicker
  link
  postId
  title
  trailerVideo {
    ...VideoParts
  }
  video {
    ...VideoParts
  }
}
    ${MediaPartsFragmentDoc}
${VideoPartsFragmentDoc}`;
export const AuthorPartsFragmentDoc = gql`
    fragment AuthorParts on CoAuthor {
  avatar
  bio
  emeritus
  email
  facebook
  firstName
  id
  instagram
  lastName
  linkedin
  name
  organization
  pgp
  shortBio
  title
  twitter
  type
  url
  username
  website
}
    `;
export const BlockPartsFragmentDoc = gql`
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
export const GuidePartsFragmentDoc = gql`
    fragment GuideParts on Guide {
  id
  guideId
  link
  count
  description
  shortDescription
  name
  slug
  featuredImage {
    ...MediaParts
  }
  socialImage {
    ...MediaParts
  }
  socialTitle
  colors
  headerImages {
    layer
    size
    image {
      ...MediaParts
    }
  }
}
    ${MediaPartsFragmentDoc}`;
export const ObsessionPartsFragmentDoc = gql`
    fragment ObsessionParts on Obsession {
  id
  description
  link
  name
  shortDescription
  slug
  subtitle
  featuredImage {
    ...MediaParts
  }
  sponsor {
    name
    campaign {
      id
      logo
      logoLink
    }
  }
}
    ${MediaPartsFragmentDoc}`;
export const ProjectPartsFragmentDoc = gql`
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
export const SeriesPartsFragmentDoc = gql`
    fragment SeriesParts on Series {
  colors
  count
  description
  emailListId
  ended
  featuredImage {
    ...MediaParts
  }
  headerImages {
    layer
    size
    image {
      ...MediaParts
    }
  }
  headerVideos {
    size
    mp4 {
      ...MediaParts
    }
    webm {
      ...MediaParts
    }
    poster {
      ...MediaParts
    }
  }
  id
  link
  name
  postOrder
  shortDescription
  showToc
  slug
  socialImage {
    ...MediaParts
  }
  socialTitle
}
    ${MediaPartsFragmentDoc}`;
export const ShowPartsFragmentDoc = gql`
    fragment ShowParts on Show {
  colors
  count
  description
  featuredImage {
    ...MediaParts
  }
  headerImages {
    layer
    size
    image {
      ...MediaParts
    }
  }
  headerVideos {
    size
    mp4 {
      ...MediaParts
    }
    webm {
      ...MediaParts
    }
    poster {
      ...MediaParts
    }
  }
  id
  link
  name
  postOrder
  shortDescription
  slug
  socialImage {
    ...MediaParts
  }
}
    ${MediaPartsFragmentDoc}`;
export const ArticlePartsFragmentDoc = gql`
    fragment ArticleParts on Post {
  ...ArticleTeaserParts
  authors: coAuthors {
    nodes {
      ...AuthorParts
    }
  }
  blocks {
    ...BlockParts
  }
  canonicalUrl
  classifications
  excerpt
  featuredImageSize
  flags {
    nodes {
      name
      slug
    }
  }
  footnotes
  guides {
    nodes {
      ...GuideParts
    }
  }
  interactiveSource
  interactiveShowHeader
  locations {
    nodes {
      name
    }
  }
  metered
  modifiedGmt
  obsessions {
    nodes {
      ...ObsessionParts
    }
  }
  paywalled
  projects {
    nodes {
      ...ProjectParts
    }
  }
  readNext
  serieses {
    nodes {
      ...SeriesParts
    }
  }
  shows {
    nodes {
      ...ShowParts
    }
  }
  slug
  seoTitle
  socialDescription
  socialImage
  socialTitle
  subtype
  suppressAds
  tags(where: {orderby: COUNT}, last: 20) {
    nodes {
      id
      name
      slug
    }
  }
  topics {
    nodes {
      id
      name
      slug
    }
  }
  trackingUrls
}
    ${ArticleTeaserPartsFragmentDoc}
${AuthorPartsFragmentDoc}
${BlockPartsFragmentDoc}
${GuidePartsFragmentDoc}
${ObsessionPartsFragmentDoc}
${ProjectPartsFragmentDoc}
${SeriesPartsFragmentDoc}
${ShowPartsFragmentDoc}`;
export const BulletinPartsFragmentDoc = gql`
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
export const NugPartsFragmentDoc = gql`
    fragment NugParts on Nug {
  id
  blocks {
    ...BlockParts
    connections {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on MediaItem {
        ...MediaParts
      }
    }
  }
  dateGmt
  emailLists {
    nodes {
      emailListId
      listId
      name
    }
  }
  link
  modifiedGmt
  nugId
  slug
  title
}
    ${BlockPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${MediaPartsFragmentDoc}`;
export const HomeCollectionPartsFragmentDoc = gql`
    fragment HomeCollectionParts on Collection {
  id
  title
  featuredImage {
    ...MediaParts
  }
  blocks {
    ...BlockParts
    connections {
      ... on Post {
        ...ArticleTeaserParts
      }
      ... on MediaItem {
        ...MediaParts
      }
      ... on Nug {
        ...NugParts
      }
    }
  }
}
    ${MediaPartsFragmentDoc}
${BlockPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${NugPartsFragmentDoc}`;
export const TagPartsFragmentDoc = gql`
    fragment TagParts on Tag {
  count
  description
  featuredImage {
    ...MediaParts
  }
  id
  link
  name
  shortDescription
  slug
  tagId
}
    ${MediaPartsFragmentDoc}`;
export const TopicPartsFragmentDoc = gql`
    fragment TopicParts on Topic {
  description
  featuredImage {
    ...MediaParts
  }
  id
  link
  name
  shortDescription
  slug
  topicId
}
    ${MediaPartsFragmentDoc}`;
export const ArticleDocument = gql`
    query Article($id: ID!) {
  post(id: $id) {
    ...ArticleParts
  }
}
    ${ArticlePartsFragmentDoc}`;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleQuery(baseOptions?: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, baseOptions);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, baseOptions);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const ArticlePreviewDocument = gql`
    query ArticlePreview($id: Int!, $time: Int!, $token: String!) {
  posts(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...ArticleParts
    }
  }
}
    ${ArticlePartsFragmentDoc}`;

/**
 * __useArticlePreviewQuery__
 *
 * To run a query within a React component, call `useArticlePreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlePreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlePreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useArticlePreviewQuery(baseOptions?: Apollo.QueryHookOptions<ArticlePreviewQuery, ArticlePreviewQueryVariables>) {
        return Apollo.useQuery<ArticlePreviewQuery, ArticlePreviewQueryVariables>(ArticlePreviewDocument, baseOptions);
      }
export function useArticlePreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlePreviewQuery, ArticlePreviewQueryVariables>) {
          return Apollo.useLazyQuery<ArticlePreviewQuery, ArticlePreviewQueryVariables>(ArticlePreviewDocument, baseOptions);
        }
export type ArticlePreviewQueryHookResult = ReturnType<typeof useArticlePreviewQuery>;
export type ArticlePreviewLazyQueryHookResult = ReturnType<typeof useArticlePreviewLazyQuery>;
export type ArticlePreviewQueryResult = Apollo.QueryResult<ArticlePreviewQuery, ArticlePreviewQueryVariables>;
export const ArticleTeaserDocument = gql`
    query ArticleTeaser($id: ID!) {
  post(id: $id) {
    ...ArticleTeaserParts
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticleTeaserQuery__
 *
 * To run a query within a React component, call `useArticleTeaserQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleTeaserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleTeaserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleTeaserQuery(baseOptions?: Apollo.QueryHookOptions<ArticleTeaserQuery, ArticleTeaserQueryVariables>) {
        return Apollo.useQuery<ArticleTeaserQuery, ArticleTeaserQueryVariables>(ArticleTeaserDocument, baseOptions);
      }
export function useArticleTeaserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleTeaserQuery, ArticleTeaserQueryVariables>) {
          return Apollo.useLazyQuery<ArticleTeaserQuery, ArticleTeaserQueryVariables>(ArticleTeaserDocument, baseOptions);
        }
export type ArticleTeaserQueryHookResult = ReturnType<typeof useArticleTeaserQuery>;
export type ArticleTeaserLazyQueryHookResult = ReturnType<typeof useArticleTeaserLazyQuery>;
export type ArticleTeaserQueryResult = Apollo.QueryResult<ArticleTeaserQuery, ArticleTeaserQueryVariables>;
export const ArticlesByGuideDocument = gql`
    query ArticlesByGuide($after: String = "", $perPage: Int, $slug: [String]) {
  guides(where: {slug: $slug}) {
    nodes {
      ...GuideParts
      posts(after: $after, first: $perPage, where: {orderby: {field: DATE, order: ASC}}) {
        nodes {
          ...ArticleTeaserParts
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
}
    ${GuidePartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesByGuideQuery__
 *
 * To run a query within a React component, call `useArticlesByGuideQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByGuideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByGuideQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByGuideQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByGuideQuery, ArticlesByGuideQueryVariables>) {
        return Apollo.useQuery<ArticlesByGuideQuery, ArticlesByGuideQueryVariables>(ArticlesByGuideDocument, baseOptions);
      }
export function useArticlesByGuideLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByGuideQuery, ArticlesByGuideQueryVariables>) {
          return Apollo.useLazyQuery<ArticlesByGuideQuery, ArticlesByGuideQueryVariables>(ArticlesByGuideDocument, baseOptions);
        }
export type ArticlesByGuideQueryHookResult = ReturnType<typeof useArticlesByGuideQuery>;
export type ArticlesByGuideLazyQueryHookResult = ReturnType<typeof useArticlesByGuideLazyQuery>;
export type ArticlesByGuideQueryResult = Apollo.QueryResult<ArticlesByGuideQuery, ArticlesByGuideQueryVariables>;
export const ArticlesByObsessionDocument = gql`
    query ArticlesByObsession($after: String = "", $perPage: Int = 10, $slug: [String]!) {
  obsessions(where: {slug: $slug}) {
    nodes {
      ...ObsessionParts
      posts: content(after: $after, first: $perPage) {
        nodes {
          ... on Post {
            ...ArticleTeaserParts
          }
          ... on Bulletin {
            ...BulletinParts
          }
          ... on Promotion {
            ...PromotionParts
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${ObsessionPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${BulletinPartsFragmentDoc}
${PromotionPartsFragmentDoc}`;

/**
 * __useArticlesByObsessionQuery__
 *
 * To run a query within a React component, call `useArticlesByObsessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByObsessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByObsessionQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByObsessionQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>) {
        return Apollo.useQuery<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>(ArticlesByObsessionDocument, baseOptions);
      }
export function useArticlesByObsessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>) {
          return Apollo.useLazyQuery<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>(ArticlesByObsessionDocument, baseOptions);
        }
export type ArticlesByObsessionQueryHookResult = ReturnType<typeof useArticlesByObsessionQuery>;
export type ArticlesByObsessionLazyQueryHookResult = ReturnType<typeof useArticlesByObsessionLazyQuery>;
export type ArticlesByObsessionQueryResult = Apollo.QueryResult<ArticlesByObsessionQuery, ArticlesByObsessionQueryVariables>;
export const ArticlesBySeriesDocument = gql`
    query ArticlesBySeries($after: String = "", $perPage: Int, $slug: [String]) {
  serieses(where: {slug: $slug}) {
    nodes {
      ...SeriesParts
      posts(after: $after, first: $perPage) {
        nodes {
          ...ArticleTeaserParts
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${SeriesPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesBySeriesQuery__
 *
 * To run a query within a React component, call `useArticlesBySeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesBySeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesBySeriesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesBySeriesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>) {
        return Apollo.useQuery<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>(ArticlesBySeriesDocument, baseOptions);
      }
export function useArticlesBySeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>) {
          return Apollo.useLazyQuery<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>(ArticlesBySeriesDocument, baseOptions);
        }
export type ArticlesBySeriesQueryHookResult = ReturnType<typeof useArticlesBySeriesQuery>;
export type ArticlesBySeriesLazyQueryHookResult = ReturnType<typeof useArticlesBySeriesLazyQuery>;
export type ArticlesBySeriesQueryResult = Apollo.QueryResult<ArticlesBySeriesQuery, ArticlesBySeriesQueryVariables>;
export const ArticlesByShowDocument = gql`
    query ArticlesByShow($after: String = "", $perPage: Int, $slug: [String]) {
  shows(where: {slug: $slug}) {
    nodes {
      ...ShowParts
      posts(after: $after, first: $perPage) {
        nodes {
          ...ArticleTeaserParts
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${ShowPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesByShowQuery__
 *
 * To run a query within a React component, call `useArticlesByShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByShowQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByShowQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByShowQuery, ArticlesByShowQueryVariables>) {
        return Apollo.useQuery<ArticlesByShowQuery, ArticlesByShowQueryVariables>(ArticlesByShowDocument, baseOptions);
      }
export function useArticlesByShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByShowQuery, ArticlesByShowQueryVariables>) {
          return Apollo.useLazyQuery<ArticlesByShowQuery, ArticlesByShowQueryVariables>(ArticlesByShowDocument, baseOptions);
        }
export type ArticlesByShowQueryHookResult = ReturnType<typeof useArticlesByShowQuery>;
export type ArticlesByShowLazyQueryHookResult = ReturnType<typeof useArticlesByShowLazyQuery>;
export type ArticlesByShowQueryResult = Apollo.QueryResult<ArticlesByShowQuery, ArticlesByShowQueryVariables>;
export const ArticlesByTagDocument = gql`
    query ArticlesByTag($after: String = "", $perPage: Int, $slug: [String]) {
  tags(where: {slug: $slug}) {
    nodes {
      ...TagParts
      posts(after: $after, first: $perPage) {
        nodes {
          ...ArticleTeaserParts
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${TagPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesByTagQuery__
 *
 * To run a query within a React component, call `useArticlesByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByTagQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByTagQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByTagQuery, ArticlesByTagQueryVariables>) {
        return Apollo.useQuery<ArticlesByTagQuery, ArticlesByTagQueryVariables>(ArticlesByTagDocument, baseOptions);
      }
export function useArticlesByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByTagQuery, ArticlesByTagQueryVariables>) {
          return Apollo.useLazyQuery<ArticlesByTagQuery, ArticlesByTagQueryVariables>(ArticlesByTagDocument, baseOptions);
        }
export type ArticlesByTagQueryHookResult = ReturnType<typeof useArticlesByTagQuery>;
export type ArticlesByTagLazyQueryHookResult = ReturnType<typeof useArticlesByTagLazyQuery>;
export type ArticlesByTagQueryResult = Apollo.QueryResult<ArticlesByTagQuery, ArticlesByTagQueryVariables>;
export const ArticlesByTopicDocument = gql`
    query ArticlesByTopic($after: String = "", $perPage: Int, $slug: [String]) {
  topics(where: {slug: $slug}) {
    nodes {
      ...TopicParts
      posts(after: $after, first: $perPage) {
        nodes {
          ...ArticleTeaserParts
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}
    ${TopicPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useArticlesByTopicQuery__
 *
 * To run a query within a React component, call `useArticlesByTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesByTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesByTopicQuery({
 *   variables: {
 *      after: // value for 'after'
 *      perPage: // value for 'perPage'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticlesByTopicQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>) {
        return Apollo.useQuery<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>(ArticlesByTopicDocument, baseOptions);
      }
export function useArticlesByTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>) {
          return Apollo.useLazyQuery<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>(ArticlesByTopicDocument, baseOptions);
        }
export type ArticlesByTopicQueryHookResult = ReturnType<typeof useArticlesByTopicQuery>;
export type ArticlesByTopicLazyQueryHookResult = ReturnType<typeof useArticlesByTopicLazyQuery>;
export type ArticlesByTopicQueryResult = Apollo.QueryResult<ArticlesByTopicQuery, ArticlesByTopicQueryVariables>;
export const ContentBySearchTermDocument = gql`
    query ContentBySearchTerm($after: String = "", $limit: Int = 10, $search: String!) {
  content(after: $after, first: $limit, where: {search: $search}) {
    pageInfo {
      endCursor
      hasNextPage
    }
    nodes {
      ... on Post {
        trackingUrls
        ...ArticleTeaserParts
      }
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useContentBySearchTermQuery__
 *
 * To run a query within a React component, call `useContentBySearchTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useContentBySearchTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContentBySearchTermQuery({
 *   variables: {
 *      after: // value for 'after'
 *      limit: // value for 'limit'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useContentBySearchTermQuery(baseOptions?: Apollo.QueryHookOptions<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>) {
        return Apollo.useQuery<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>(ContentBySearchTermDocument, baseOptions);
      }
export function useContentBySearchTermLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>) {
          return Apollo.useLazyQuery<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>(ContentBySearchTermDocument, baseOptions);
        }
export type ContentBySearchTermQueryHookResult = ReturnType<typeof useContentBySearchTermQuery>;
export type ContentBySearchTermLazyQueryHookResult = ReturnType<typeof useContentBySearchTermLazyQuery>;
export type ContentBySearchTermQueryResult = Apollo.QueryResult<ContentBySearchTermQuery, ContentBySearchTermQueryVariables>;
export const LatestArticlesDocument = gql`
    query LatestArticles($after: String = "", $edition: EditionName, $postsPerPage: Int) {
  posts(after: $after, first: $postsPerPage, where: {edition: $edition}) {
    nodes {
      ...ArticleTeaserParts
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useLatestArticlesQuery__
 *
 * To run a query within a React component, call `useLatestArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestArticlesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      edition: // value for 'edition'
 *      postsPerPage: // value for 'postsPerPage'
 *   },
 * });
 */
export function useLatestArticlesQuery(baseOptions?: Apollo.QueryHookOptions<LatestArticlesQuery, LatestArticlesQueryVariables>) {
        return Apollo.useQuery<LatestArticlesQuery, LatestArticlesQueryVariables>(LatestArticlesDocument, baseOptions);
      }
export function useLatestArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestArticlesQuery, LatestArticlesQueryVariables>) {
          return Apollo.useLazyQuery<LatestArticlesQuery, LatestArticlesQueryVariables>(LatestArticlesDocument, baseOptions);
        }
export type LatestArticlesQueryHookResult = ReturnType<typeof useLatestArticlesQuery>;
export type LatestArticlesLazyQueryHookResult = ReturnType<typeof useLatestArticlesLazyQuery>;
export type LatestArticlesQueryResult = Apollo.QueryResult<LatestArticlesQuery, LatestArticlesQueryVariables>;
export const DiscoverDocument = gql`
    query Discover($topics: [String]!) {
  latest: posts(first: 5) {
    nodes {
      ...ArticleTeaserParts
    }
  }
  trendingPosts(first: 5) {
    nodes {
      ...ArticleTeaserParts
    }
  }
  topics(first: 7, where: {slug: $topics}) {
    nodes {
      ...TopicParts
      posts(first: 3) {
        nodes {
          ...ArticleTeaserParts
        }
      }
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${TopicPartsFragmentDoc}`;

/**
 * __useDiscoverQuery__
 *
 * To run a query within a React component, call `useDiscoverQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscoverQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscoverQuery({
 *   variables: {
 *      topics: // value for 'topics'
 *   },
 * });
 */
export function useDiscoverQuery(baseOptions?: Apollo.QueryHookOptions<DiscoverQuery, DiscoverQueryVariables>) {
        return Apollo.useQuery<DiscoverQuery, DiscoverQueryVariables>(DiscoverDocument, baseOptions);
      }
export function useDiscoverLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscoverQuery, DiscoverQueryVariables>) {
          return Apollo.useLazyQuery<DiscoverQuery, DiscoverQueryVariables>(DiscoverDocument, baseOptions);
        }
export type DiscoverQueryHookResult = ReturnType<typeof useDiscoverQuery>;
export type DiscoverLazyQueryHookResult = ReturnType<typeof useDiscoverLazyQuery>;
export type DiscoverQueryResult = Apollo.QueryResult<DiscoverQuery, DiscoverQueryVariables>;
export const GuidesDocument = gql`
    query Guides($before: String = "", $perPage: Int = 10, $postsPerGuide: Int = 1) {
  guides(before: $before, last: $perPage, where: {orderby: TERM_ID}) {
    nodes {
      ...GuideParts
      posts(last: $postsPerGuide) {
        nodes {
          ...ArticleTeaserParts
        }
      }
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}
    ${GuidePartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useGuidesQuery__
 *
 * To run a query within a React component, call `useGuidesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesQuery({
 *   variables: {
 *      before: // value for 'before'
 *      perPage: // value for 'perPage'
 *      postsPerGuide: // value for 'postsPerGuide'
 *   },
 * });
 */
export function useGuidesQuery(baseOptions?: Apollo.QueryHookOptions<GuidesQuery, GuidesQueryVariables>) {
        return Apollo.useQuery<GuidesQuery, GuidesQueryVariables>(GuidesDocument, baseOptions);
      }
export function useGuidesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuidesQuery, GuidesQueryVariables>) {
          return Apollo.useLazyQuery<GuidesQuery, GuidesQueryVariables>(GuidesDocument, baseOptions);
        }
export type GuidesQueryHookResult = ReturnType<typeof useGuidesQuery>;
export type GuidesLazyQueryHookResult = ReturnType<typeof useGuidesLazyQuery>;
export type GuidesQueryResult = Apollo.QueryResult<GuidesQuery, GuidesQueryVariables>;
export const GuidesBySlugDocument = gql`
    query GuidesBySlug($perPage: Int!, $slugs: [String]!) {
  guides(first: $perPage, where: {slug: $slugs}) {
    nodes {
      ...GuideParts
    }
  }
}
    ${GuidePartsFragmentDoc}`;

/**
 * __useGuidesBySlugQuery__
 *
 * To run a query within a React component, call `useGuidesBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuidesBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuidesBySlugQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      slugs: // value for 'slugs'
 *   },
 * });
 */
export function useGuidesBySlugQuery(baseOptions?: Apollo.QueryHookOptions<GuidesBySlugQuery, GuidesBySlugQueryVariables>) {
        return Apollo.useQuery<GuidesBySlugQuery, GuidesBySlugQueryVariables>(GuidesBySlugDocument, baseOptions);
      }
export function useGuidesBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuidesBySlugQuery, GuidesBySlugQueryVariables>) {
          return Apollo.useLazyQuery<GuidesBySlugQuery, GuidesBySlugQueryVariables>(GuidesBySlugDocument, baseOptions);
        }
export type GuidesBySlugQueryHookResult = ReturnType<typeof useGuidesBySlugQuery>;
export type GuidesBySlugLazyQueryHookResult = ReturnType<typeof useGuidesBySlugLazyQuery>;
export type GuidesBySlugQueryResult = Apollo.QueryResult<GuidesBySlugQuery, GuidesBySlugQueryVariables>;
export const HomeCollectionDocument = gql`
    query HomeCollection {
  collections(first: 1, where: {tagSlugIn: ["home"]}) {
    nodes {
      ...HomeCollectionParts
    }
  }
}
    ${HomeCollectionPartsFragmentDoc}`;

/**
 * __useHomeCollectionQuery__
 *
 * To run a query within a React component, call `useHomeCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeCollectionQuery(baseOptions?: Apollo.QueryHookOptions<HomeCollectionQuery, HomeCollectionQueryVariables>) {
        return Apollo.useQuery<HomeCollectionQuery, HomeCollectionQueryVariables>(HomeCollectionDocument, baseOptions);
      }
export function useHomeCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCollectionQuery, HomeCollectionQueryVariables>) {
          return Apollo.useLazyQuery<HomeCollectionQuery, HomeCollectionQueryVariables>(HomeCollectionDocument, baseOptions);
        }
export type HomeCollectionQueryHookResult = ReturnType<typeof useHomeCollectionQuery>;
export type HomeCollectionLazyQueryHookResult = ReturnType<typeof useHomeCollectionLazyQuery>;
export type HomeCollectionQueryResult = Apollo.QueryResult<HomeCollectionQuery, HomeCollectionQueryVariables>;
export const HomeCollectionPreviewDocument = gql`
    query HomeCollectionPreview($id: Int!, $time: Int!, $token: String!) {
  collections(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...HomeCollectionParts
    }
  }
}
    ${HomeCollectionPartsFragmentDoc}`;

/**
 * __useHomeCollectionPreviewQuery__
 *
 * To run a query within a React component, call `useHomeCollectionPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCollectionPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCollectionPreviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *      time: // value for 'time'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useHomeCollectionPreviewQuery(baseOptions?: Apollo.QueryHookOptions<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>) {
        return Apollo.useQuery<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>(HomeCollectionPreviewDocument, baseOptions);
      }
export function useHomeCollectionPreviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>) {
          return Apollo.useLazyQuery<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>(HomeCollectionPreviewDocument, baseOptions);
        }
export type HomeCollectionPreviewQueryHookResult = ReturnType<typeof useHomeCollectionPreviewQuery>;
export type HomeCollectionPreviewLazyQueryHookResult = ReturnType<typeof useHomeCollectionPreviewLazyQuery>;
export type HomeCollectionPreviewQueryResult = Apollo.QueryResult<HomeCollectionPreviewQuery, HomeCollectionPreviewQueryVariables>;
export const MemberHomeDocument = gql`
    query MemberHome {
  features: menuItems(first: 3, where: {location: FEATURES_MEMBERS}) {
    nodes {
      id
      connectedObject {
        ... on Tag {
          ...TagParts
          posts(first: 3, where: {orderby: {field: MEMBERSHIP}}) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
  guides(last: 6, where: {orderby: TERM_ORDER}) {
    nodes {
      ...GuideParts
    }
  }
}
    ${TagPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}
${GuidePartsFragmentDoc}`;

/**
 * __useMemberHomeQuery__
 *
 * To run a query within a React component, call `useMemberHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemberHomeQuery(baseOptions?: Apollo.QueryHookOptions<MemberHomeQuery, MemberHomeQueryVariables>) {
        return Apollo.useQuery<MemberHomeQuery, MemberHomeQueryVariables>(MemberHomeDocument, baseOptions);
      }
export function useMemberHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberHomeQuery, MemberHomeQueryVariables>) {
          return Apollo.useLazyQuery<MemberHomeQuery, MemberHomeQueryVariables>(MemberHomeDocument, baseOptions);
        }
export type MemberHomeQueryHookResult = ReturnType<typeof useMemberHomeQuery>;
export type MemberHomeLazyQueryHookResult = ReturnType<typeof useMemberHomeLazyQuery>;
export type MemberHomeQueryResult = Apollo.QueryResult<MemberHomeQuery, MemberHomeQueryVariables>;
export const MemberVideoDocument = gql`
    query MemberVideo {
  features: menuItems(first: 3, where: {location: FEATURES_VIDEO_MEMBERS}) {
    nodes {
      id
      connectedObject {
        ... on Tag {
          ...TagParts
          posts(first: 6, where: {orderby: {field: MEMBERSHIP}}) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
}
    ${TagPartsFragmentDoc}
${ArticleTeaserPartsFragmentDoc}`;

/**
 * __useMemberVideoQuery__
 *
 * To run a query within a React component, call `useMemberVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberVideoQuery({
 *   variables: {
 *   },
 * });
 */
export function useMemberVideoQuery(baseOptions?: Apollo.QueryHookOptions<MemberVideoQuery, MemberVideoQueryVariables>) {
        return Apollo.useQuery<MemberVideoQuery, MemberVideoQueryVariables>(MemberVideoDocument, baseOptions);
      }
export function useMemberVideoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MemberVideoQuery, MemberVideoQueryVariables>) {
          return Apollo.useLazyQuery<MemberVideoQuery, MemberVideoQueryVariables>(MemberVideoDocument, baseOptions);
        }
export type MemberVideoQueryHookResult = ReturnType<typeof useMemberVideoQuery>;
export type MemberVideoLazyQueryHookResult = ReturnType<typeof useMemberVideoLazyQuery>;
export type MemberVideoQueryResult = Apollo.QueryResult<MemberVideoQuery, MemberVideoQueryVariables>;
export const VideoHubDocument = gql`
    query VideoHub {
  featuredVideoPlayer: menuItems(where: {location: PLAYER_VIDEO}) {
    nodes {
      connectedObject {
        ...ArticleTeaserParts
        ... on Post {
          shows {
            nodes {
              ...ShowParts
            }
          }
        }
      }
    }
  }
  latest: tags(where: {slug: "quartz-video"}) {
    nodes {
      posts(first: 6) {
        nodes {
          ...ArticleTeaserParts
          shows {
            nodes {
              ...ShowParts
            }
          }
        }
      }
    }
  }
  featuredShows: menuItems(where: {location: SHOWS_VIDEO}) {
    nodes {
      connectedObject {
        ... on Show {
          ...ShowParts
          posts(first: 6) {
            nodes {
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
  }
  allShows: shows(last: 40, where: {orderby: TERM_ID}) {
    nodes {
      ...ShowParts
    }
  }
}
    ${ArticleTeaserPartsFragmentDoc}
${ShowPartsFragmentDoc}`;

/**
 * __useVideoHubQuery__
 *
 * To run a query within a React component, call `useVideoHubQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideoHubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideoHubQuery({
 *   variables: {
 *   },
 * });
 */
export function useVideoHubQuery(baseOptions?: Apollo.QueryHookOptions<VideoHubQuery, VideoHubQueryVariables>) {
        return Apollo.useQuery<VideoHubQuery, VideoHubQueryVariables>(VideoHubDocument, baseOptions);
      }
export function useVideoHubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideoHubQuery, VideoHubQueryVariables>) {
          return Apollo.useLazyQuery<VideoHubQuery, VideoHubQueryVariables>(VideoHubDocument, baseOptions);
        }
export type VideoHubQueryHookResult = ReturnType<typeof useVideoHubQuery>;
export type VideoHubLazyQueryHookResult = ReturnType<typeof useVideoHubLazyQuery>;
export type VideoHubQueryResult = Apollo.QueryResult<VideoHubQuery, VideoHubQueryVariables>;
export const NugDocument = gql`
    query Nug($slug: String!) {
  nugBy(slug: $slug) {
    ...NugParts
  }
}
    ${NugPartsFragmentDoc}`;

/**
 * __useNugQuery__
 *
 * To run a query within a React component, call `useNugQuery` and pass it any options that fit your needs.
 * When your component renders, `useNugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useNugQuery(baseOptions?: Apollo.QueryHookOptions<NugQuery, NugQueryVariables>) {
        return Apollo.useQuery<NugQuery, NugQueryVariables>(NugDocument, baseOptions);
      }
export function useNugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NugQuery, NugQueryVariables>) {
          return Apollo.useLazyQuery<NugQuery, NugQueryVariables>(NugDocument, baseOptions);
        }
export type NugQueryHookResult = ReturnType<typeof useNugQuery>;
export type NugLazyQueryHookResult = ReturnType<typeof useNugLazyQuery>;
export type NugQueryResult = Apollo.QueryResult<NugQuery, NugQueryVariables>;
export const NugsByTagDocument = gql`
    query NugsByTag($perPage: Int!, $tag: [String]!) {
  nugs(first: $perPage, where: {tagSlugIn: $tag}) {
    nodes {
      ...NugParts
    }
  }
}
    ${NugPartsFragmentDoc}`;

/**
 * __useNugsByTagQuery__
 *
 * To run a query within a React component, call `useNugsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useNugsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNugsByTagQuery({
 *   variables: {
 *      perPage: // value for 'perPage'
 *      tag: // value for 'tag'
 *   },
 * });
 */
export function useNugsByTagQuery(baseOptions?: Apollo.QueryHookOptions<NugsByTagQuery, NugsByTagQueryVariables>) {
        return Apollo.useQuery<NugsByTagQuery, NugsByTagQueryVariables>(NugsByTagDocument, baseOptions);
      }
export function useNugsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NugsByTagQuery, NugsByTagQueryVariables>) {
          return Apollo.useLazyQuery<NugsByTagQuery, NugsByTagQueryVariables>(NugsByTagDocument, baseOptions);
        }
export type NugsByTagQueryHookResult = ReturnType<typeof useNugsByTagQuery>;
export type NugsByTagLazyQueryHookResult = ReturnType<typeof useNugsByTagLazyQuery>;
export type NugsByTagQueryResult = Apollo.QueryResult<NugsByTagQuery, NugsByTagQueryVariables>;
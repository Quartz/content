export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
/** The root entry point into the Graph */
export declare type RootQuery = {
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
export declare type RootQueryBlogPostArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryBlogPostByArgs = {
    id?: Maybe<Scalars['ID']>;
    blogPostId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryBlogPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToBlogPostConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryBulletinArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryBulletinByArgs = {
    id?: Maybe<Scalars['ID']>;
    bulletinId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToBulletinConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryCardArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryCardByArgs = {
    id?: Maybe<Scalars['ID']>;
    cardId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryCardsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToCardConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryCategoriesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryCategoryArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryChapterArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryChapterByArgs = {
    id?: Maybe<Scalars['ID']>;
    chapterId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryChaptersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToChapterConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryCoAuthorArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryCoAuthorsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToCoAuthorConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryCollectionArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryCollectionByArgs = {
    id?: Maybe<Scalars['ID']>;
    collectionId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryCollectionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToCollectionConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryContentArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToContentUnionConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryContentByArgs = {
    objectId?: Maybe<Scalars['Int']>;
};
/** The root entry point into the Graph */
export declare type RootQueryEditionArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryEditionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToEditionConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryEmailArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryEmailByArgs = {
    id?: Maybe<Scalars['ID']>;
    emailId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryEmailListArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryEmailListsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToEmailListConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryEmailsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToEmailConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryFlagArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryFlagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToFlagConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryGuideArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryGuidesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToGuideConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryLocationArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryLocationsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToLocationConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryMediaItemArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryMediaItemByArgs = {
    id?: Maybe<Scalars['ID']>;
    mediaItemId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryMediaItemsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryMenuArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryMenuItemsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryMenusArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryNugArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryNugByArgs = {
    id?: Maybe<Scalars['ID']>;
    nugId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryNugsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToNugConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryObsessionArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryObsessionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToObsessionConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryPageArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryPageByArgs = {
    id?: Maybe<Scalars['ID']>;
    pageId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryPagesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToPageConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryPostArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryPostByArgs = {
    id?: Maybe<Scalars['ID']>;
    postId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToPostConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryProjectArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryProjectsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToProjectConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryPromotionArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryPromotionByArgs = {
    id?: Maybe<Scalars['ID']>;
    promotionId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryPromotionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToPromotionConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryPushArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryPushByArgs = {
    id?: Maybe<Scalars['ID']>;
    pushId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryPushesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToPushConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryRevisionArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryRevisionByArgs = {
    id?: Maybe<Scalars['ID']>;
    revisionId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryRevisionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToRevisionConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQuerySeriesArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQuerySeriesesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToSeriesConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryShowArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryShowsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToShowConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryStackArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryStackByArgs = {
    id?: Maybe<Scalars['ID']>;
    stackId?: Maybe<Scalars['Int']>;
    uri?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryStacksArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToStackConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryTagArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToTagConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryTopicArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryTopicsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToTopicConnectionWhereArgs>;
};
/** The root entry point into the Graph */
export declare type RootQueryTrendingPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
};
/** The root entry point into the Graph */
export declare type RootQueryUserArgs = {
    id: Scalars['ID'];
};
/** The root entry point into the Graph */
export declare type RootQueryUsersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<RootQueryToUserConnectionWhereArgs>;
};
/** The blogPost type */
export declare type BlogPost = Node & {
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
export declare type BlogPostAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The blogPost type */
export declare type BlogPostContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The blogPost type */
export declare type BlogPostExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The blogPost type */
export declare type BlogPostTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BlogPostToTagConnectionWhereArgs>;
};
/** The blogPost type */
export declare type BlogPostTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The blogPost type */
export declare type BlogPostTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The blogPost type */
export declare type BlogPostTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The blogPost type */
export declare type BlogPostTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** An object with an ID */
export declare type Node = {
    /** The id of the object */
    id: Scalars['ID'];
};
/** Allowed Post Types */
export declare type PostTypeEnum = 'ATTACHMENT' | 'BLOG' | 'BULLETIN' | 'CHAPTER' | 'COLLECTION' | 'NUG' | 'PAGE' | 'POST' | 'PROMOTION' | 'PUSH' | 'QZ_CARD' | 'QZ_EMAIL' | 'QZ_STACK' | 'REVISION';
export declare type PostObjectUnion = Post | Page | MediaItem | Revision | Push | Email | Card | Chapter | Promotion | BlogPost | Nug | Collection | Stack | Bulletin;
/** The post type */
export declare type Post = Node & {
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
export declare type PostAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The post type */
export declare type PostCategoriesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToCategoryConnectionWhereArgs>;
};
/** The post type */
export declare type PostCoAuthorsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToCoAuthorConnectionWhereArgs>;
};
/** The post type */
export declare type PostCommentsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToCommentConnectionWhereArgs>;
};
/** The post type */
export declare type PostContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The post type */
export declare type PostEditionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToEditionConnectionWhereArgs>;
};
/** The post type */
export declare type PostExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The post type */
export declare type PostFlagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToFlagConnectionWhereArgs>;
};
/** The post type */
export declare type PostGuidesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToGuideConnectionWhereArgs>;
};
/** The post type */
export declare type PostLocationsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToLocationConnectionWhereArgs>;
};
/** The post type */
export declare type PostObsessionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToObsessionConnectionWhereArgs>;
};
/** The post type */
export declare type PostProjectsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToProjectConnectionWhereArgs>;
};
/** The post type */
export declare type PostSeriesesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToSeriesConnectionWhereArgs>;
};
/** The post type */
export declare type PostShowsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToShowConnectionWhereArgs>;
};
/** The post type */
export declare type PostTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToTagConnectionWhereArgs>;
};
/** The post type */
export declare type PostTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The post type */
export declare type PostTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The post type */
export declare type PostTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The post type */
export declare type PostTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The post type */
export declare type PostTopicsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PostToTopicConnectionWhereArgs>;
};
/** A User object */
export declare type User = Node & {
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
export declare type UserAvatarArgs = {
    size?: Maybe<Scalars['Int']>;
    forceDefault?: Maybe<Scalars['Boolean']>;
    rating?: Maybe<AvatarRatingEnum>;
};
/** A User object */
export declare type UserBlogPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToBlogPostConnectionWhereArgs>;
};
/** A User object */
export declare type UserBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToBulletinConnectionWhereArgs>;
};
/** A User object */
export declare type UserCardsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToCardConnectionWhereArgs>;
};
/** A User object */
export declare type UserChaptersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToChapterConnectionWhereArgs>;
};
/** A User object */
export declare type UserCollectionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToCollectionConnectionWhereArgs>;
};
/** A User object */
export declare type UserCommentsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToCommentConnectionWhereArgs>;
};
/** A User object */
export declare type UserEmailsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToEmailConnectionWhereArgs>;
};
/** A User object */
export declare type UserMediaItemsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToMediaItemConnectionWhereArgs>;
};
/** A User object */
export declare type UserNugsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToNugConnectionWhereArgs>;
};
/** A User object */
export declare type UserPagesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToPageConnectionWhereArgs>;
};
/** A User object */
export declare type UserPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToPostConnectionWhereArgs>;
};
/** A User object */
export declare type UserPromotionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToPromotionConnectionWhereArgs>;
};
/** A User object */
export declare type UserPushesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToPushConnectionWhereArgs>;
};
/** A User object */
export declare type UserRevisionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToRevisionConnectionWhereArgs>;
};
/** A User object */
export declare type UserStacksArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<UserToStackConnectionWhereArgs>;
};
/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export declare type AvatarRatingEnum = 'G' | 'PG' | 'R' | 'X';
/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export declare type Avatar = {
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
export declare type UserToBlogPostConnectionWhereArgs = {
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
export declare type AuthorType = 'GUEST' | 'WORDPRESS';
/** Filter the connection based on input */
export declare type DateQueryInput = {
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
export declare type DateInput = {
    /** Day of the month (from 1 to 31) */
    day?: Maybe<Scalars['Int']>;
    /** Month number (from 1 to 12) */
    month?: Maybe<Scalars['Int']>;
    /** 4 digit year (e.g. 2017) */
    year?: Maybe<Scalars['Int']>;
};
/** The column to use when filtering by date */
export declare type PostObjectsConnectionDateColumnEnum = 'DATE' | 'MODIFIED';
/** The logical relation between each item in the array when there are more than one. */
export declare type RelationEnum = 'AND' | 'OR';
/** Quartz edition */
export declare type EditionName = 'AFRICA' | 'INDIA' | 'QUARTZ' | 'QUARTZY' | 'WORK';
/** The MimeType of the object */
export declare type MimeTypeEnum = 'APPLICATION_JAVA' | 'APPLICATION_MSWORD' | 'APPLICATION_OCTET_STREAM' | 'APPLICATION_ONENOTE' | 'APPLICATION_OXPS' | 'APPLICATION_PDF' | 'APPLICATION_RAR' | 'APPLICATION_RTF' | 'APPLICATION_TTAF_XML' | 'APPLICATION_VND_APPLE_KEYNOTE' | 'APPLICATION_VND_APPLE_NUMBERS' | 'APPLICATION_VND_APPLE_PAGES' | 'APPLICATION_VND_MS_ACCESS' | 'APPLICATION_VND_MS_EXCEL' | 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12' | 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12' | 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12' | 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12' | 'APPLICATION_VND_MS_POWERPOINT' | 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12' | 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12' | 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12' | 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12' | 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12' | 'APPLICATION_VND_MS_PROJECT' | 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12' | 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12' | 'APPLICATION_VND_MS_WRITE' | 'APPLICATION_VND_MS_XPSDOCUMENT' | 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART' | 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE' | 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA' | 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS' | 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION' | 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET' | 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE' | 'APPLICATION_WORDPERFECT' | 'APPLICATION_X_7Z_COMPRESSED' | 'APPLICATION_X_GZIP' | 'APPLICATION_X_TAR' | 'APPLICATION_ZIP' | 'AUDIO_AAC' | 'AUDIO_FLAC' | 'AUDIO_MIDI' | 'AUDIO_MPEG' | 'AUDIO_OGG' | 'AUDIO_WAV' | 'AUDIO_X_MATROSKA' | 'AUDIO_X_MS_WAX' | 'AUDIO_X_MS_WMA' | 'AUDIO_X_REALAUDIO' | 'IMAGE_BMP' | 'IMAGE_GIF' | 'IMAGE_HEIC' | 'IMAGE_JPEG' | 'IMAGE_PNG' | 'IMAGE_TIFF' | 'IMAGE_X_ICON' | 'TEXT_CALENDAR' | 'TEXT_CSS' | 'TEXT_CSV' | 'TEXT_PLAIN' | 'TEXT_RICHTEXT' | 'TEXT_TAB_SEPARATED_VALUES' | 'TEXT_VTT' | 'VIDEO_3GPP' | 'VIDEO_3GPP2' | 'VIDEO_AVI' | 'VIDEO_DIVX' | 'VIDEO_MP4' | 'VIDEO_MPEG' | 'VIDEO_OGG' | 'VIDEO_QUICKTIME' | 'VIDEO_WEBM' | 'VIDEO_X_MATROSKA' | 'VIDEO_X_MS_ASF' | 'VIDEO_X_MS_WM' | 'VIDEO_X_MS_WMV' | 'VIDEO_X_MS_WMX';
/** Options for ordering the connection */
export declare type PostObjectsConnectionOrderbyInput = {
    field: PostObjectsConnectionOrderbyEnum;
    order?: Maybe<OrderEnum>;
};
/** Field to order the connection by */
export declare type PostObjectsConnectionOrderbyEnum = 
/** Order by author */
'AUTHOR'
/** Order by publish date */
 | 'DATE'
/** Preserve the ID order given in the IN array */
 | 'IN'
/** Order by membership editor’s choice */
 | 'MEMBERSHIP'
/** Order by the menu order value */
 | 'MENU_ORDER'
/** Order by last modified date */
 | 'MODIFIED'
/** Preserve slug order given in the NAME_IN array */
 | 'NAME_IN'
/** Order by parent ID */
 | 'PARENT'
/** Order by slug */
 | 'SLUG'
/** Order by title */
 | 'TITLE';
/** The cardinality of the connection order */
export declare type OrderEnum = 'ASC' | 'DESC';
/** Get popular posts */
export declare type PopularQuery = {
    edition?: Maybe<EditionName>;
};
/** Get a preview of a post */
export declare type PreviewQuery = {
    /** Current timestamp in UNIX epoch */
    time?: Maybe<Scalars['Int']>;
    /** Validation token */
    token?: Maybe<Scalars['String']>;
};
/** Get recommended posts related to a given post */
export declare type RecommendedQuery = {
    id?: Maybe<Scalars['Int']>;
};
/** The status of the object. */
export declare type PostStatusEnum = 
/** Objects with the auto-draft status */
'AUTO_DRAFT'
/** Objects with the draft status */
 | 'DRAFT'
/** Objects with the editor-ok status */
 | 'EDITOR_OK'
/** Objects with the future status */
 | 'FUTURE'
/** Objects with the hold status */
 | 'HOLD'
/** Objects with the inherit status */
 | 'INHERIT'
/** Objects with the pending-edit status */
 | 'PENDING_EDIT'
/** Objects with the pending-revision status */
 | 'PENDING_REVISION'
/** Objects with the private status */
 | 'PRIVATE'
/** Objects with the publish status */
 | 'PUBLISH'
/** Objects with the ready-to-publish status */
 | 'READY_TO_PUBLISH'
/** Objects with the request-completed status */
 | 'REQUEST_COMPLETED'
/** Objects with the request-confirmed status */
 | 'REQUEST_CONFIRMED'
/** Objects with the request-failed status */
 | 'REQUEST_FAILED'
/** Objects with the request-pending status */
 | 'REQUEST_PENDING'
/** Objects with the trash status */
 | 'TRASH'
/** Objects with the writing status */
 | 'WRITING';
/** Connection between the User type and the User type */
export declare type UserToBlogPostConnection = {
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
export declare type UserToBlogPostConnectionEdge = {
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
export declare type WpPageInfo = {
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
export declare type PostType = Node & {
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
export declare type PostTypeConnectedTaxonomiesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** An Post Type object */
export declare type PostTypeConnectedTaxonomyNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** Allowed taxonomies */
export declare type TaxonomyEnum = 'CATEGORY' | 'COAUTHOR' | 'EDITION' | 'EMAILLIST' | 'FLAG' | 'GUIDE' | 'LOCATION' | 'OBSESSION' | 'PROJECT' | 'SERIES' | 'SHOW' | 'TAG' | 'TOPIC';
/** A taxonomy object */
export declare type Taxonomy = Node & {
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
export declare type TaxonomyConnectedPostTypeNamesArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** A taxonomy object */
export declare type TaxonomyConnectedPostTypesArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** Details for labels of the PostType */
export declare type PostTypeLabelDetails = {
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
export declare type UserToBulletinConnectionWhereArgs = {
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
export declare type UserToBulletinConnection = {
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
export declare type UserToBulletinConnectionEdge = {
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
export declare type Bulletin = Node & {
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
export declare type BulletinAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The bulletin type */
export declare type BulletinCoAuthorsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToCoAuthorConnectionWhereArgs>;
};
/** The bulletin type */
export declare type BulletinContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The bulletin type */
export declare type BulletinEditionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToEditionConnectionWhereArgs>;
};
/** The bulletin type */
export declare type BulletinExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The bulletin type */
export declare type BulletinFlagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToFlagConnectionWhereArgs>;
};
/** The bulletin type */
export declare type BulletinLocationsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToLocationConnectionWhereArgs>;
};
/** The bulletin type */
export declare type BulletinObsessionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToObsessionConnectionWhereArgs>;
};
/** The bulletin type */
export declare type BulletinProjectsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToProjectConnectionWhereArgs>;
};
/** The bulletin type */
export declare type BulletinSeriesesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToSeriesConnectionWhereArgs>;
};
/** The bulletin type */
export declare type BulletinShowsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToShowConnectionWhereArgs>;
};
/** The bulletin type */
export declare type BulletinTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToTagConnectionWhereArgs>;
};
/** The bulletin type */
export declare type BulletinTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The bulletin type */
export declare type BulletinTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The bulletin type */
export declare type BulletinTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The bulletin type */
export declare type BulletinTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The bulletin type */
export declare type BulletinTopicsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<BulletinToTopicConnectionWhereArgs>;
};
/** Content block */
export declare type Block = {
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
export declare type Attribute = {
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
export declare type BlockNameEnum = 'BLOCKQUOTE' | 'CORE_ARCHIVES' | 'CORE_AUDIO' | 'CORE_BLOCK' | 'CORE_BUTTON' | 'CORE_CATEGORIES' | 'CORE_CODE' | 'CORE_COLUMN' | 'CORE_COLUMNS' | 'CORE_COVER_IMAGE' | 'CORE_EMBED' | 'CORE_EMBED_ANIMOTO' | 'CORE_EMBED_CLOUDUP' | 'CORE_EMBED_COLLEGEHUMOR' | 'CORE_EMBED_DAILYMOTION' | 'CORE_EMBED_FACEBOOK' | 'CORE_EMBED_FLICKR' | 'CORE_EMBED_FUNNYORDIE' | 'CORE_EMBED_HULU' | 'CORE_EMBED_IMGUR' | 'CORE_EMBED_INSTAGRAM' | 'CORE_EMBED_ISSUU' | 'CORE_EMBED_KICKSTARTER' | 'CORE_EMBED_MEETUP_COM' | 'CORE_EMBED_MIXCLOUD' | 'CORE_EMBED_PHOTOBUCKET' | 'CORE_EMBED_POLLDADDY' | 'CORE_EMBED_REDDIT' | 'CORE_EMBED_REVERBNATION' | 'CORE_EMBED_SCREENCAST' | 'CORE_EMBED_SCRIBD' | 'CORE_EMBED_SLIDESHARE' | 'CORE_EMBED_SMUGMUG' | 'CORE_EMBED_SOUNDCLOUD' | 'CORE_EMBED_SPEAKER' | 'CORE_EMBED_SPOTIFY' | 'CORE_EMBED_TED' | 'CORE_EMBED_TUMBLR' | 'CORE_EMBED_TWITTER' | 'CORE_EMBED_VIDEOPRESS' | 'CORE_EMBED_VIMEO' | 'CORE_EMBED_WORDPRESS' | 'CORE_EMBED_WORDPRESS_TV' | 'CORE_EMBED_YOUTUBE' | 'CORE_FILE' | 'CORE_FREEFORM' | 'CORE_GALLERY' | 'CORE_HEADING' | 'CORE_HTML' | 'CORE_IMAGE' | 'CORE_LATEST_COMMENTS' | 'CORE_LATEST_POSTS' | 'CORE_LIST' | 'CORE_MORE' | 'CORE_NEXTPAGE' | 'CORE_PARAGRAPH' | 'CORE_PREFORMATTED' | 'CORE_PULLQUOTE' | 'CORE_QUOTE' | 'CORE_SEPARATOR' | 'CORE_SHORTCODE' | 'CORE_SPACER' | 'CORE_SUBHEAD' | 'CORE_TABLE' | 'CORE_TEXT_COLUMNS' | 'CORE_VERSE' | 'CORE_VIDEO' | 'EL' | 'EMBED_ANIMOTO' | 'EMBED_API_CROWDSIGNAL_COM_OEMBED' | 'EMBED_GFYCAT' | 'EMBED_IMGUR' | 'EMBED_MEETUP' | 'EMBED_SCREENCAST' | 'EMBED_SMUGMUG' | 'EMBED_DATAWRAPPER' | 'EMBED_ATLAS' | 'EMBED_AUDIO' | 'EMBED_CLOUDUP' | 'EMBED_CODEPEN_IO_API_OEMBED' | 'EMBED_EMBED_GETTYIMAGES_COM_OEMBED_' | 'EMBED_SPOTIFY' | 'EMBED_FACEBOOK_ALTERNATE' | 'EMBED_FACEBOOK_ALTERNATE_VIDEO' | 'EMBED_FACEBOOK_PHOTO' | 'EMBED_FACEBOOK_VIDEO' | 'EMBED_WISTIA' | 'EMBED_FLICKR' | 'EMBED_GITHUB_GIST' | 'EMBED_GOOGLEPLUS' | 'EMBED_INLINE_PDFS' | 'EMBED_ISSUU' | 'EMBED_ICLOUD' | 'EMBED_JETPACK_INSTAGRAM' | 'EMBED_JETPACK_INSTAGRAM_ALTERNATE_FORMAT' | 'EMBED_MEDIUM' | 'EMBED_QZ_OBJECT' | 'EMBED_ODESLI_CO_OEMBED' | 'EMBED_PINTEREST' | 'EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED_1_0_' | 'EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED__FOR_HTTPS_3A_2F_2FQZ_COM' | 'EMBED_TWITTER' | 'EMBED_FACEBOOK' | 'EMBED_VINE' | 'EMBED_AMAZON' | 'EMBED_SERVICES_CARTO_COM_OEMBED' | 'EMBED_SKETCHFAB' | 'EMBED_SOUNDCLOUD' | 'EMBED_SPEAKERDECK' | 'EMBED_VIDEO' | 'EMBED_VIMEO' | 'EMBED_WORDPRESS_TV' | 'EMBED_WPCOM_VIMEO_EMBED_URL' | 'EMBED_WPCOM_YOUTUBE_EMBED_CRAZY_URL' | 'EMBED_DAILYMOTION' | 'EMBED_DOCUMENTCLOUD' | 'EMBED_WWW_HOUZZ_COM_OEMBED' | 'EMBED_KICKSTARTER' | 'EMBED_LOOM' | 'EMBED_MIXCLOUD' | 'EMBED_REDDIT' | 'EMBED_REVERBNATION' | 'EMBED_SCRIBD' | 'EMBED_SLIDESHARE' | 'EMBED_SOMEECARDS' | 'EMBED_TED' | 'EMBED_WWW_TED_COM_TALKS_OEMBED_JSON' | 'EMBED_TIKTOK' | 'EMBED_TUMBLR' | 'EMBED_YOUTUBE' | 'FIGURE' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'HR' | 'IMG' | 'OL' | 'P' | 'PRE' | 'QZ_ITEM' | 'QZ_POST_TOUT' | 'QZ_TAXONOMY_TERM' | 'QZ_WIFY_ANSWER' | 'SAFE_COMMENT' | 'SHORTCODE_ANSWER' | 'SHORTCODE_ARCHIVEORG' | 'SHORTCODE_ARCHIVEORG_BOOK' | 'SHORTCODE_ARCHIVES' | 'SHORTCODE_AUDIO' | 'SHORTCODE_BANDCAMP' | 'SHORTCODE_BRIGHTCOVE' | 'SHORTCODE_CAPTION' | 'SHORTCODE_CPI_BROADBAND_MAP' | 'SHORTCODE_CROWDSIGNAL' | 'SHORTCODE_DAILYMOTION' | 'SHORTCODE_DAILYMOTION_CHANNEL' | 'SHORTCODE_EMBED' | 'SHORTCODE_ENDMATTER' | 'SHORTCODE_EXPLANATION' | 'SHORTCODE_FACEBOOK' | 'SHORTCODE_FLICKR' | 'SHORTCODE_GALLERY' | 'SHORTCODE_GEO_LOCATION' | 'SHORTCODE_GETTY' | 'SHORTCODE_GIST' | 'SHORTCODE_GOOGLEAPPS' | 'SHORTCODE_GOOGLEMAPS' | 'SHORTCODE_GOOGLEPLUS' | 'SHORTCODE_GRAVATAR' | 'SHORTCODE_GRAVATAR_PROFILE' | 'SHORTCODE_HOUZZ' | 'SHORTCODE_HULU' | 'SHORTCODE_INSTAGRAM' | 'SHORTCODE_KICKSTARTER' | 'SHORTCODE_LATEX' | 'SHORTCODE_MAILCHIMP_SUBSCRIBER_POPUP' | 'SHORTCODE_MEDIUM' | 'SHORTCODE_MIXCLOUD' | 'SHORTCODE_PLAYLIST' | 'SHORTCODE_POLLDADDY' | 'SHORTCODE_PRESENTATION' | 'SHORTCODE_PROMO_LINK' | 'SHORTCODE_PULLQUOTE' | 'SHORTCODE_QUARTZY_AD' | 'SHORTCODE_QUARTZY_PS' | 'SHORTCODE_QUESTION' | 'SHORTCODE_QUIZ' | 'SHORTCODE_QZ_ATLAS' | 'SHORTCODE_QZ_DAILY_BRIEF' | 'SHORTCODE_QZ_DATAWRAPPER' | 'SHORTCODE_QZ_FACEBOOK_POST' | 'SHORTCODE_QZ_FACEBOOK_VIDEO' | 'SHORTCODE_QZ_FURTHER_READING' | 'SHORTCODE_QZ_GUIDE_PROMO' | 'SHORTCODE_QZ_IFRAME' | 'SHORTCODE_QZ_INLINE_AD' | 'SHORTCODE_QZ_INTERACTIVE' | 'SHORTCODE_QZ_RELATED_STACK' | 'SHORTCODE_QZ_SECTION_DIVIDER' | 'SHORTCODE_QZ_TIPS' | 'SHORTCODE_QZ_TOPIC_UPDATE' | 'SHORTCODE_RECIPE' | 'SHORTCODE_RECIPE_DIRECTIONS' | 'SHORTCODE_RECIPE_IMAGE' | 'SHORTCODE_RECIPE_INGREDIENTS' | 'SHORTCODE_RECIPE_NOTES' | 'SHORTCODE_RECIPE_NUTRITION' | 'SHORTCODE_SCRIBD' | 'SHORTCODE_SERIES_RECIRC' | 'SHORTCODE_SIMPLE_PAYMENT' | 'SHORTCODE_SITEMAP' | 'SHORTCODE_SLIDE' | 'SHORTCODE_SLIDESHARE' | 'SHORTCODE_SLIDESHOW' | 'SHORTCODE_SOUNDCLOUD' | 'SHORTCODE_SPOTIFY' | 'SHORTCODE_STORIFY' | 'SHORTCODE_TED' | 'SHORTCODE_TWEET' | 'SHORTCODE_TWITCH' | 'SHORTCODE_TWITCHTV' | 'SHORTCODE_TWITTER_TIMELINE' | 'SHORTCODE_UNTAPPD_MENU' | 'SHORTCODE_UPCOMINGEVENTS' | 'SHORTCODE_USTREAM' | 'SHORTCODE_USTREAMSOCIAL' | 'SHORTCODE_VIDEO' | 'SHORTCODE_VIDEOPRESS' | 'SHORTCODE_VIMEO' | 'SHORTCODE_VINE' | 'SHORTCODE_VR' | 'SHORTCODE_WPVIDEO' | 'SHORTCODE_WP_CAPTION' | 'SHORTCODE_WRONG' | 'SHORTCODE_WUFOO' | 'SHORTCODE_YOUTUBE' | 'TABLE' | 'UL';
export declare type BulletinData = {
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
export declare type CampaignData = {
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
export declare type ClientTrackingData = {
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
export declare type BulletinToCoAuthorConnectionWhereArgs = {
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
export declare type TermObjectsConnectionOrderbyEnum = 'COUNT' | 'DESCRIPTION' | 'NAME' | 'SLUG' | 'TERM_GROUP' | 'TERM_ID' | 'TERM_ORDER';
/** Connection between the bulletin type and the bulletin type */
export declare type BulletinToCoAuthorConnection = {
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
export declare type BulletinToCoAuthorConnectionEdge = {
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
export declare type CoAuthor = Node & {
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
export declare type CoAuthorBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CoAuthorToBulletinConnectionWhereArgs>;
};
/** The coAuthor type */
export declare type CoAuthorChaptersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CoAuthorToChapterConnectionWhereArgs>;
};
/** The coAuthor type */
export declare type CoAuthorPagesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CoAuthorToPageConnectionWhereArgs>;
};
/** The coAuthor type */
export declare type CoAuthorPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CoAuthorToPostConnectionWhereArgs>;
};
/** The coAuthor type */
export declare type CoAuthorStacksArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CoAuthorToStackConnectionWhereArgs>;
};
/** Arguments for filtering the CoAuthorToBulletinConnection connection */
export declare type CoAuthorToBulletinConnectionWhereArgs = {
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
export declare type CoAuthorToBulletinConnection = {
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
export declare type CoAuthorToBulletinConnectionEdge = {
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
export declare type CoAuthorToChapterConnectionWhereArgs = {
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
export declare type CoAuthorToChapterConnection = {
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
export declare type CoAuthorToChapterConnectionEdge = {
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
export declare type Chapter = Node & {
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
export declare type ChapterAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The chapter type */
export declare type ChapterCoAuthorsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ChapterToCoAuthorConnectionWhereArgs>;
};
/** The chapter type */
export declare type ChapterContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The chapter type */
export declare type ChapterExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The chapter type */
export declare type ChapterProjectsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ChapterToProjectConnectionWhereArgs>;
};
/** The chapter type */
export declare type ChapterTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ChapterToTagConnectionWhereArgs>;
};
/** The chapter type */
export declare type ChapterTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The chapter type */
export declare type ChapterTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The chapter type */
export declare type ChapterTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The chapter type */
export declare type ChapterTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the ChapterToCoAuthorConnection connection */
export declare type ChapterToCoAuthorConnectionWhereArgs = {
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
export declare type ChapterToCoAuthorConnection = {
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
export declare type ChapterToCoAuthorConnectionEdge = {
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
export declare type PostObjectFieldFormatEnum = 
/** Provide the field value directly from database */
'RAW'
/** Apply the default WordPress rendering */
 | 'RENDERED';
/** Info on whether the object is locked by another user editing it */
export declare type EditLock = {
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
export declare type MediaItem = Node & {
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
export declare type MediaItemAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The mediaItem type */
export declare type MediaItemCommentsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
};
/** The mediaItem type */
export declare type MediaItemContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The mediaItem type */
export declare type MediaItemExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The mediaItem type */
export declare type MediaItemTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The mediaItem type */
export declare type MediaItemTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The mediaItem type */
export declare type MediaItemTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The mediaItem type */
export declare type MediaItemTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the MediaItemToCommentConnection connection */
export declare type MediaItemToCommentConnectionWhereArgs = {
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
export declare type CommentsConnectionOrderbyEnum = 'COMMENT_AGENT' | 'COMMENT_APPROVED' | 'COMMENT_AUTHOR' | 'COMMENT_AUTHOR_EMAIL' | 'COMMENT_AUTHOR_IP' | 'COMMENT_AUTHOR_URL' | 'COMMENT_CONTENT' | 'COMMENT_DATE' | 'COMMENT_DATE_GMT' | 'COMMENT_ID' | 'COMMENT_IN' | 'COMMENT_KARMA' | 'COMMENT_PARENT' | 'COMMENT_POST_ID' | 'COMMENT_TYPE' | 'USER_ID';
/** Connection between the mediaItem type and the mediaItem type */
export declare type MediaItemToCommentConnection = {
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
export declare type MediaItemToCommentConnectionEdge = {
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
export declare type Comment = Node & {
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
export declare type CommentChildrenArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CommentToCommentConnectionWhereArgs>;
};
/** A Comment object */
export declare type CommentContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
export declare type CommentAuthorUnion = User | CommentAuthor;
/** A Comment Author object */
export declare type CommentAuthor = Node & {
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
export declare type CommentToCommentConnectionWhereArgs = {
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
export declare type CommentToCommentConnection = {
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
export declare type CommentToCommentConnectionEdge = {
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
export declare type MediaDetails = {
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
export declare type MediaItemMeta = {
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
export declare type MediaSize = {
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
export declare type TermObjectUnion = Category | Tag | EmailList | Obsession | Series | Topic | Show | Edition | Guide | Flag | Project | Location | CoAuthor;
/** The category type */
export declare type Category = Node & {
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
export declare type CategoryChildrenArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
};
/** The category type */
export declare type CategoryPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CategoryToPostConnectionWhereArgs>;
};
/** Arguments for filtering the CategoryToCategoryConnection connection */
export declare type CategoryToCategoryConnectionWhereArgs = {
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
export declare type CategoryToCategoryConnection = {
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
export declare type CategoryToCategoryConnectionEdge = {
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
export declare type CategoryToPostConnectionWhereArgs = {
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
export declare type CategoryToPostConnection = {
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
export declare type CategoryToPostConnectionEdge = {
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
export declare type SponsorData = {
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
export declare type Tag = Node & {
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
export declare type TagBlogPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TagToBlogPostConnectionWhereArgs>;
};
/** The tag type */
export declare type TagBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TagToBulletinConnectionWhereArgs>;
};
/** The tag type */
export declare type TagCardsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TagToCardConnectionWhereArgs>;
};
/** The tag type */
export declare type TagChaptersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TagToChapterConnectionWhereArgs>;
};
/** The tag type */
export declare type TagCollectionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TagToCollectionConnectionWhereArgs>;
};
/** The tag type */
export declare type TagNugsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TagToNugConnectionWhereArgs>;
};
/** The tag type */
export declare type TagPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TagToPostConnectionWhereArgs>;
};
/** The tag type */
export declare type TagPromotionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TagToPromotionConnectionWhereArgs>;
};
/** The tag type */
export declare type TagStacksArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TagToStackConnectionWhereArgs>;
};
/** Arguments for filtering the TagToBlogPostConnection connection */
export declare type TagToBlogPostConnectionWhereArgs = {
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
export declare type TagToBlogPostConnection = {
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
export declare type TagToBlogPostConnectionEdge = {
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
export declare type TagToBulletinConnectionWhereArgs = {
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
export declare type TagToBulletinConnection = {
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
export declare type TagToBulletinConnectionEdge = {
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
export declare type TagToCardConnectionWhereArgs = {
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
export declare type TagToCardConnection = {
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
export declare type TagToCardConnectionEdge = {
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
export declare type Card = Node & {
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
export declare type CardAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The card type */
export declare type CardContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The card type */
export declare type CardExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The card type */
export declare type CardTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CardToTagConnectionWhereArgs>;
};
/** The card type */
export declare type CardTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The card type */
export declare type CardTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The card type */
export declare type CardTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The card type */
export declare type CardTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the CardToTagConnection connection */
export declare type CardToTagConnectionWhereArgs = {
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
export declare type CardToTagConnection = {
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
export declare type CardToTagConnectionEdge = {
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
export declare type TagToChapterConnectionWhereArgs = {
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
export declare type TagToChapterConnection = {
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
export declare type TagToChapterConnectionEdge = {
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
export declare type TagToCollectionConnectionWhereArgs = {
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
export declare type TagToCollectionConnection = {
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
export declare type TagToCollectionConnectionEdge = {
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
export declare type Collection = Node & {
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
export declare type CollectionAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The collection type */
export declare type CollectionContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The collection type */
export declare type CollectionExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The collection type */
export declare type CollectionTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<CollectionToTagConnectionWhereArgs>;
};
/** The collection type */
export declare type CollectionTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The collection type */
export declare type CollectionTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The collection type */
export declare type CollectionTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The collection type */
export declare type CollectionTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the CollectionToTagConnection connection */
export declare type CollectionToTagConnectionWhereArgs = {
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
export declare type CollectionToTagConnection = {
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
export declare type CollectionToTagConnectionEdge = {
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
export declare type TagToNugConnectionWhereArgs = {
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
export declare type TagToNugConnection = {
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
export declare type TagToNugConnectionEdge = {
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
export declare type Nug = Node & {
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
export declare type NugAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The nug type */
export declare type NugContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The nug type */
export declare type NugEmailListsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<NugToEmailListConnectionWhereArgs>;
};
/** The nug type */
export declare type NugExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The nug type */
export declare type NugTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<NugToTagConnectionWhereArgs>;
};
/** The nug type */
export declare type NugTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The nug type */
export declare type NugTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The nug type */
export declare type NugTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The nug type */
export declare type NugTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The nug type */
export declare type NugTopicsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<NugToTopicConnectionWhereArgs>;
};
/** Arguments for filtering the NugToEmailListConnection connection */
export declare type NugToEmailListConnectionWhereArgs = {
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
export declare type NugToEmailListConnection = {
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
export declare type NugToEmailListConnectionEdge = {
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
export declare type EmailList = Node & {
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
export declare type EmailListEmailsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<EmailListToEmailConnectionWhereArgs>;
};
/** The emailList type */
export declare type EmailListNugsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<EmailListToNugConnectionWhereArgs>;
};
/** Arguments for filtering the EmailListToEmailConnection connection */
export declare type EmailListToEmailConnectionWhereArgs = {
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
export declare type EmailListToEmailConnection = {
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
export declare type EmailListToEmailConnectionEdge = {
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
export declare type Email = Node & {
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
export declare type EmailAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The email type */
export declare type EmailContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The email type */
export declare type EmailEmailListsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<EmailToEmailListConnectionWhereArgs>;
};
/** The email type */
export declare type EmailExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The email type */
export declare type EmailTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The email type */
export declare type EmailTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The email type */
export declare type EmailTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The email type */
export declare type EmailTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the EmailToEmailListConnection connection */
export declare type EmailToEmailListConnectionWhereArgs = {
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
export declare type EmailToEmailListConnection = {
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
export declare type EmailToEmailListConnectionEdge = {
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
export declare type EmailListToNugConnectionWhereArgs = {
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
export declare type EmailListToNugConnection = {
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
export declare type EmailListToNugConnectionEdge = {
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
export declare type NugToTagConnectionWhereArgs = {
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
export declare type NugToTagConnection = {
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
export declare type NugToTagConnectionEdge = {
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
export declare type NugToTopicConnectionWhereArgs = {
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
export declare type NugToTopicConnection = {
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
export declare type NugToTopicConnectionEdge = {
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
export declare type Topic = Node & {
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
export declare type TopicBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TopicToBulletinConnectionWhereArgs>;
};
/** The topic type */
export declare type TopicChildrenArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TopicToTopicConnectionWhereArgs>;
};
/** The topic type */
export declare type TopicGuidesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
};
/** The topic type */
export declare type TopicNugsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TopicToNugConnectionWhereArgs>;
};
/** The topic type */
export declare type TopicPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<TopicToPostConnectionWhereArgs>;
};
/** Arguments for filtering the TopicToBulletinConnection connection */
export declare type TopicToBulletinConnectionWhereArgs = {
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
export declare type TopicToBulletinConnection = {
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
export declare type TopicToBulletinConnectionEdge = {
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
export declare type TopicToTopicConnectionWhereArgs = {
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
export declare type TopicToTopicConnection = {
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
export declare type TopicToTopicConnectionEdge = {
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
export declare type TopicToGuideConnection = {
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
export declare type TopicToGuideConnectionEdge = {
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
export declare type Guide = Node & {
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
export declare type GuidePostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<GuideToPostConnectionWhereArgs>;
};
export declare type HeaderImages = {
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
export declare type HeaderVideos = {
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
export declare type GuideToPostConnectionWhereArgs = {
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
export declare type GuideToPostConnection = {
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
export declare type GuideToPostConnectionEdge = {
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
export declare type TopicToNugConnectionWhereArgs = {
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
export declare type TopicToNugConnection = {
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
export declare type TopicToNugConnectionEdge = {
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
export declare type TopicToPostConnectionWhereArgs = {
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
export declare type TopicToPostConnection = {
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
export declare type TopicToPostConnectionEdge = {
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
export declare type TagToPostConnectionWhereArgs = {
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
export declare type TagToPostConnection = {
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
export declare type TagToPostConnectionEdge = {
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
export declare type TagToPromotionConnectionWhereArgs = {
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
export declare type TagToPromotionConnection = {
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
export declare type TagToPromotionConnectionEdge = {
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
export declare type Promotion = Node & {
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
export declare type PromotionAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The promotion type */
export declare type PromotionContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The promotion type */
export declare type PromotionExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The promotion type */
export declare type PromotionObsessionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PromotionToObsessionConnectionWhereArgs>;
};
/** The promotion type */
export declare type PromotionTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PromotionToTagConnectionWhereArgs>;
};
/** The promotion type */
export declare type PromotionTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The promotion type */
export declare type PromotionTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The promotion type */
export declare type PromotionTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The promotion type */
export declare type PromotionTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the PromotionToObsessionConnection connection */
export declare type PromotionToObsessionConnectionWhereArgs = {
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
export declare type PromotionToObsessionConnection = {
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
export declare type PromotionToObsessionConnectionEdge = {
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
export declare type Obsession = Node & {
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
     * Connection between the Obsession type and the Obsession type
     * @deprecated
     */
    essentials?: Maybe<ObsessionToCollectionConnection>;
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
export declare type ObsessionBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ObsessionToBulletinConnectionWhereArgs>;
};
/** The obsession type */
export declare type ObsessionContentArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
};
/** The obsession type */
export declare type ObsessionEssentialsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
};
/** The obsession type */
export declare type ObsessionPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ObsessionToPostConnectionWhereArgs>;
};
/** The obsession type */
export declare type ObsessionPromotionsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ObsessionToPromotionConnectionWhereArgs>;
};
/** Arguments for filtering the ObsessionToBulletinConnection connection */
export declare type ObsessionToBulletinConnectionWhereArgs = {
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
export declare type ObsessionToBulletinConnection = {
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
export declare type ObsessionToBulletinConnectionEdge = {
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
export declare type ObsessionToContentUnionConnection = {
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
export declare type ObsessionToContentUnionConnectionEdge = {
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
export declare type ContentUnion = Post | Page | MediaItem | Email | Card | Chapter | Promotion | Collection | Stack | Bulletin;
/** The page type */
export declare type Page = Node & {
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
export declare type PageAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The page type */
export declare type PageChildPagesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PageToPageConnectionWhereArgs>;
};
/** The page type */
export declare type PageCoAuthorsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PageToCoAuthorConnectionWhereArgs>;
};
/** The page type */
export declare type PageCommentsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<PageToCommentConnectionWhereArgs>;
};
/** The page type */
export declare type PageContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The page type */
export declare type PageExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The page type */
export declare type PageTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The page type */
export declare type PageTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The page type */
export declare type PageTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The page type */
export declare type PageTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the PageToPageConnection connection */
export declare type PageToPageConnectionWhereArgs = {
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
export declare type PageToPageConnection = {
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
export declare type PageToPageConnectionEdge = {
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
export declare type PageToCoAuthorConnectionWhereArgs = {
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
export declare type PageToCoAuthorConnection = {
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
export declare type PageToCoAuthorConnectionEdge = {
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
export declare type PageToCommentConnectionWhereArgs = {
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
export declare type PageToCommentConnection = {
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
export declare type PageToCommentConnectionEdge = {
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
export declare type Stack = Node & {
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
export declare type StackAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The stack type */
export declare type StackCoAuthorsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<StackToCoAuthorConnectionWhereArgs>;
};
/** The stack type */
export declare type StackContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The stack type */
export declare type StackExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The stack type */
export declare type StackSeriesesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<StackToSeriesConnectionWhereArgs>;
};
/** The stack type */
export declare type StackTagsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<StackToTagConnectionWhereArgs>;
};
/** The stack type */
export declare type StackTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The stack type */
export declare type StackTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The stack type */
export declare type StackTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The stack type */
export declare type StackTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the StackToCoAuthorConnection connection */
export declare type StackToCoAuthorConnectionWhereArgs = {
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
export declare type StackToCoAuthorConnection = {
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
export declare type StackToCoAuthorConnectionEdge = {
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
export declare type StackToSeriesConnectionWhereArgs = {
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
export declare type StackToSeriesConnection = {
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
export declare type StackToSeriesConnectionEdge = {
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
export declare type Series = Node & {
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
export declare type SeriesBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<SeriesToBulletinConnectionWhereArgs>;
};
/** The series type */
export declare type SeriesPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<SeriesToPostConnectionWhereArgs>;
};
/** The series type */
export declare type SeriesStacksArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<SeriesToStackConnectionWhereArgs>;
};
/** Arguments for filtering the SeriesToBulletinConnection connection */
export declare type SeriesToBulletinConnectionWhereArgs = {
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
export declare type SeriesToBulletinConnection = {
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
export declare type SeriesToBulletinConnectionEdge = {
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
export declare type SeriesToPostConnectionWhereArgs = {
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
export declare type SeriesToPostConnection = {
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
export declare type SeriesToPostConnectionEdge = {
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
export declare type SeriesToStackConnectionWhereArgs = {
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
export declare type SeriesToStackConnection = {
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
export declare type SeriesToStackConnectionEdge = {
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
export declare type StackToTagConnectionWhereArgs = {
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
export declare type StackToTagConnection = {
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
export declare type StackToTagConnectionEdge = {
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
export declare type VideoData = {
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
/** Connection between the Obsession type and the Obsession type */
export declare type ObsessionToCollectionConnection = {
    __typename?: 'ObsessionToCollectionConnection';
    /**
     * Edges for the ObsessionToCollectionConnection connection
     * @deprecated
     */
    edges?: Maybe<Array<Maybe<ObsessionToCollectionConnectionEdge>>>;
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
};
/** An edge in a connection */
export declare type ObsessionToCollectionConnectionEdge = {
    __typename?: 'ObsessionToCollectionConnectionEdge';
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
/** Arguments for filtering the ObsessionToPostConnection connection */
export declare type ObsessionToPostConnectionWhereArgs = {
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
export declare type ObsessionToPostConnection = {
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
export declare type ObsessionToPostConnectionEdge = {
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
export declare type ObsessionToPromotionConnectionWhereArgs = {
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
export declare type ObsessionToPromotionConnection = {
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
export declare type ObsessionToPromotionConnectionEdge = {
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
export declare type PromotionToTagConnectionWhereArgs = {
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
export declare type PromotionToTagConnection = {
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
export declare type PromotionToTagConnectionEdge = {
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
export declare type TagToStackConnectionWhereArgs = {
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
export declare type TagToStackConnection = {
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
export declare type TagToStackConnectionEdge = {
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
export declare type Show = Node & {
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
export declare type ShowBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ShowToBulletinConnectionWhereArgs>;
};
/** The show type */
export declare type ShowPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ShowToPostConnectionWhereArgs>;
};
/** Arguments for filtering the ShowToBulletinConnection connection */
export declare type ShowToBulletinConnectionWhereArgs = {
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
export declare type ShowToBulletinConnection = {
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
export declare type ShowToBulletinConnectionEdge = {
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
export declare type ShowHeaderImages = {
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
export declare type ShowHeaderVideos = {
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
export declare type ShowToPostConnectionWhereArgs = {
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
export declare type ShowToPostConnection = {
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
export declare type ShowToPostConnectionEdge = {
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
export declare type Edition = Node & {
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
export declare type EditionBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<EditionToBulletinConnectionWhereArgs>;
};
/** The edition type */
export declare type EditionPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<EditionToPostConnectionWhereArgs>;
};
/** Arguments for filtering the EditionToBulletinConnection connection */
export declare type EditionToBulletinConnectionWhereArgs = {
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
export declare type EditionToBulletinConnection = {
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
export declare type EditionToBulletinConnectionEdge = {
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
export declare type EditionToPostConnectionWhereArgs = {
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
export declare type EditionToPostConnection = {
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
export declare type EditionToPostConnectionEdge = {
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
export declare type Flag = Node & {
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
export declare type FlagBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<FlagToBulletinConnectionWhereArgs>;
};
/** The flag type */
export declare type FlagPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<FlagToPostConnectionWhereArgs>;
};
/** Arguments for filtering the FlagToBulletinConnection connection */
export declare type FlagToBulletinConnectionWhereArgs = {
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
export declare type FlagToBulletinConnection = {
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
export declare type FlagToBulletinConnectionEdge = {
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
export declare type FlagToPostConnectionWhereArgs = {
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
export declare type FlagToPostConnection = {
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
export declare type FlagToPostConnectionEdge = {
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
export declare type Project = Node & {
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
export declare type ProjectBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ProjectToBulletinConnectionWhereArgs>;
};
/** The project type */
export declare type ProjectChaptersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ProjectToChapterConnectionWhereArgs>;
};
/** The project type */
export declare type ProjectPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<ProjectToPostConnectionWhereArgs>;
};
/** Arguments for filtering the ProjectToBulletinConnection connection */
export declare type ProjectToBulletinConnectionWhereArgs = {
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
export declare type ProjectToBulletinConnection = {
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
export declare type ProjectToBulletinConnectionEdge = {
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
export declare type ProjectToChapterConnectionWhereArgs = {
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
export declare type ProjectToChapterConnection = {
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
export declare type ProjectToChapterConnectionEdge = {
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
export declare type ProjectToPostConnectionWhereArgs = {
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
export declare type ProjectToPostConnection = {
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
export declare type ProjectToPostConnectionEdge = {
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
export declare type Location = Node & {
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
export declare type LocationBulletinsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<LocationToBulletinConnectionWhereArgs>;
};
/** The location type */
export declare type LocationPostsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<LocationToPostConnectionWhereArgs>;
};
/** Arguments for filtering the LocationToBulletinConnection connection */
export declare type LocationToBulletinConnectionWhereArgs = {
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
export declare type LocationToBulletinConnection = {
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
export declare type LocationToBulletinConnectionEdge = {
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
export declare type LocationToPostConnectionWhereArgs = {
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
export declare type LocationToPostConnection = {
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
export declare type LocationToPostConnectionEdge = {
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
export declare type ChapterToProjectConnectionWhereArgs = {
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
export declare type ChapterToProjectConnection = {
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
export declare type ChapterToProjectConnectionEdge = {
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
export declare type ChapterToTagConnectionWhereArgs = {
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
export declare type ChapterToTagConnection = {
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
export declare type ChapterToTagConnectionEdge = {
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
export declare type CoAuthorToPageConnectionWhereArgs = {
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
export declare type CoAuthorToPageConnection = {
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
export declare type CoAuthorToPageConnectionEdge = {
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
export declare type CoAuthorToPostConnectionWhereArgs = {
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
export declare type CoAuthorToPostConnection = {
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
export declare type CoAuthorToPostConnectionEdge = {
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
export declare type CoAuthorToStackConnectionWhereArgs = {
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
export declare type CoAuthorToStackConnection = {
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
export declare type CoAuthorToStackConnectionEdge = {
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
export declare type BulletinToEditionConnectionWhereArgs = {
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
export declare type BulletinToEditionConnection = {
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
export declare type BulletinToEditionConnectionEdge = {
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
export declare type BulletinToFlagConnectionWhereArgs = {
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
export declare type BulletinToFlagConnection = {
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
export declare type BulletinToFlagConnectionEdge = {
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
export declare type BulletinToLocationConnectionWhereArgs = {
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
export declare type BulletinToLocationConnection = {
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
export declare type BulletinToLocationConnectionEdge = {
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
export declare type BulletinToObsessionConnectionWhereArgs = {
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
export declare type BulletinToObsessionConnection = {
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
export declare type BulletinToObsessionConnectionEdge = {
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
export declare type BulletinToProjectConnectionWhereArgs = {
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
export declare type BulletinToProjectConnection = {
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
export declare type BulletinToProjectConnectionEdge = {
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
export declare type BulletinToSeriesConnectionWhereArgs = {
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
export declare type BulletinToSeriesConnection = {
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
export declare type BulletinToSeriesConnectionEdge = {
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
export declare type BulletinToShowConnectionWhereArgs = {
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
export declare type BulletinToShowConnection = {
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
export declare type BulletinToShowConnectionEdge = {
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
export declare type BulletinToTagConnectionWhereArgs = {
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
export declare type BulletinToTagConnection = {
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
export declare type BulletinToTagConnectionEdge = {
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
export declare type BulletinToTopicConnectionWhereArgs = {
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
export declare type BulletinToTopicConnection = {
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
export declare type BulletinToTopicConnectionEdge = {
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
export declare type UserToCardConnectionWhereArgs = {
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
export declare type UserToCardConnection = {
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
export declare type UserToCardConnectionEdge = {
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
export declare type UserToChapterConnectionWhereArgs = {
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
export declare type UserToChapterConnection = {
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
export declare type UserToChapterConnectionEdge = {
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
export declare type UserToCollectionConnectionWhereArgs = {
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
export declare type UserToCollectionConnection = {
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
export declare type UserToCollectionConnectionEdge = {
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
export declare type UserToCommentConnectionWhereArgs = {
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
export declare type UserToCommentConnection = {
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
export declare type UserToCommentConnectionEdge = {
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
export declare type UserToEmailConnectionWhereArgs = {
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
export declare type UserToEmailConnection = {
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
export declare type UserToEmailConnectionEdge = {
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
export declare type UserToMediaItemConnectionWhereArgs = {
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
export declare type UserToMediaItemConnection = {
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
export declare type UserToMediaItemConnectionEdge = {
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
export declare type UserToNugConnectionWhereArgs = {
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
export declare type UserToNugConnection = {
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
export declare type UserToNugConnectionEdge = {
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
export declare type UserToPageConnectionWhereArgs = {
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
export declare type UserToPageConnection = {
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
export declare type UserToPageConnectionEdge = {
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
export declare type UserToPostConnectionWhereArgs = {
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
export declare type UserToPostConnection = {
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
export declare type UserToPostConnectionEdge = {
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
export declare type UserToPromotionConnectionWhereArgs = {
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
export declare type UserToPromotionConnection = {
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
export declare type UserToPromotionConnectionEdge = {
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
export declare type UserToPushConnectionWhereArgs = {
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
export declare type UserToPushConnection = {
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
export declare type UserToPushConnectionEdge = {
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
export declare type Push = Node & {
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
export declare type PushAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The push type */
export declare type PushContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The push type */
export declare type PushExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The push type */
export declare type PushTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The push type */
export declare type PushTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The push type */
export declare type PushTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The push type */
export declare type PushTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the UserToRevisionConnection connection */
export declare type UserToRevisionConnectionWhereArgs = {
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
export declare type UserToRevisionConnection = {
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
export declare type UserToRevisionConnectionEdge = {
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
export declare type Revision = Node & {
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
export declare type RevisionAncestorsArgs = {
    types?: Maybe<Array<Maybe<PostTypeEnum>>>;
};
/** The revision type */
export declare type RevisionContentArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The revision type */
export declare type RevisionExcerptArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** The revision type */
export declare type RevisionTermNamesArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The revision type */
export declare type RevisionTermsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The revision type */
export declare type RevisionTermSlugsArgs = {
    taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
};
/** The revision type */
export declare type RevisionTitleArgs = {
    format?: Maybe<PostObjectFieldFormatEnum>;
};
/** Arguments for filtering the UserToStackConnection connection */
export declare type UserToStackConnectionWhereArgs = {
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
export declare type UserToStackConnection = {
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
export declare type UserToStackConnectionEdge = {
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
export declare type PostToCategoryConnectionWhereArgs = {
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
export declare type PostToCategoryConnection = {
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
export declare type PostToCategoryConnectionEdge = {
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
export declare type PostToCoAuthorConnectionWhereArgs = {
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
export declare type PostToCoAuthorConnection = {
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
export declare type PostToCoAuthorConnectionEdge = {
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
export declare type PostToCommentConnectionWhereArgs = {
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
export declare type PostToCommentConnection = {
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
export declare type PostToCommentConnectionEdge = {
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
export declare type PostToEditionConnectionWhereArgs = {
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
export declare type PostToEditionConnection = {
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
export declare type PostToEditionConnectionEdge = {
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
export declare type PostToFlagConnectionWhereArgs = {
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
export declare type PostToFlagConnection = {
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
export declare type PostToFlagConnectionEdge = {
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
export declare type PostToGuideConnectionWhereArgs = {
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
export declare type PostToGuideConnection = {
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
export declare type PostToGuideConnectionEdge = {
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
export declare type PostToLocationConnectionWhereArgs = {
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
export declare type PostToLocationConnection = {
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
export declare type PostToLocationConnectionEdge = {
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
export declare type PostToObsessionConnectionWhereArgs = {
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
export declare type PostToObsessionConnection = {
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
export declare type PostToObsessionConnectionEdge = {
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
export declare type PostToProjectConnectionWhereArgs = {
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
export declare type PostToProjectConnection = {
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
export declare type PostToProjectConnectionEdge = {
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
export declare type PostToSeriesConnectionWhereArgs = {
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
export declare type PostToSeriesConnection = {
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
export declare type PostToSeriesConnectionEdge = {
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
export declare type PostToShowConnectionWhereArgs = {
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
export declare type PostToShowConnection = {
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
export declare type PostToShowConnectionEdge = {
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
export declare type PostToTagConnectionWhereArgs = {
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
export declare type PostToTagConnection = {
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
export declare type PostToTagConnectionEdge = {
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
export declare type PostToTopicConnectionWhereArgs = {
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
export declare type PostToTopicConnection = {
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
export declare type PostToTopicConnectionEdge = {
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
export declare type BlogPostToTagConnectionWhereArgs = {
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
export declare type BlogPostToTagConnection = {
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
export declare type BlogPostToTagConnectionEdge = {
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
export declare type RootQueryToBlogPostConnectionWhereArgs = {
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
export declare type RootQueryToBlogPostConnection = {
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
export declare type RootQueryToBlogPostConnectionEdge = {
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
export declare type RootQueryToBulletinConnectionWhereArgs = {
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
export declare type RootQueryToBulletinConnection = {
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
export declare type RootQueryToBulletinConnectionEdge = {
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
export declare type RootQueryToCardConnectionWhereArgs = {
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
export declare type RootQueryToCardConnection = {
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
export declare type RootQueryToCardConnectionEdge = {
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
export declare type RootQueryToCategoryConnectionWhereArgs = {
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
export declare type RootQueryToCategoryConnection = {
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
export declare type RootQueryToCategoryConnectionEdge = {
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
export declare type RootQueryToChapterConnectionWhereArgs = {
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
export declare type RootQueryToChapterConnection = {
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
export declare type RootQueryToChapterConnectionEdge = {
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
export declare type RootQueryToCoAuthorConnectionWhereArgs = {
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
export declare type RootQueryToCoAuthorConnection = {
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
export declare type RootQueryToCoAuthorConnectionEdge = {
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
export declare type RootQueryToCollectionConnectionWhereArgs = {
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
export declare type RootQueryToCollectionConnection = {
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
export declare type RootQueryToCollectionConnectionEdge = {
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
export declare type RootQueryToContentUnionConnectionWhereArgs = {
    /** Search terms */
    search?: Maybe<Scalars['String']>;
};
/** Connection between the RootQuery type and the RootQuery type */
export declare type RootQueryToContentUnionConnection = {
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
export declare type RootQueryToContentUnionConnectionEdge = {
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
export declare type RootQueryToEditionConnectionWhereArgs = {
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
export declare type RootQueryToEditionConnection = {
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
export declare type RootQueryToEditionConnectionEdge = {
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
export declare type RootQueryToEmailListConnectionWhereArgs = {
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
export declare type RootQueryToEmailListConnection = {
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
export declare type RootQueryToEmailListConnectionEdge = {
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
export declare type RootQueryToEmailConnectionWhereArgs = {
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
export declare type RootQueryToEmailConnection = {
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
export declare type RootQueryToEmailConnectionEdge = {
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
export declare type RootQueryToFlagConnectionWhereArgs = {
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
export declare type RootQueryToFlagConnection = {
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
export declare type RootQueryToFlagConnectionEdge = {
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
export declare type RootQueryToGuideConnectionWhereArgs = {
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
export declare type RootQueryToGuideConnection = {
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
export declare type RootQueryToGuideConnectionEdge = {
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
export declare type RootQueryToLocationConnectionWhereArgs = {
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
export declare type RootQueryToLocationConnection = {
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
export declare type RootQueryToLocationConnectionEdge = {
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
export declare type RootQueryToMediaItemConnectionWhereArgs = {
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
export declare type RootQueryToMediaItemConnection = {
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
export declare type RootQueryToMediaItemConnectionEdge = {
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
export declare type Menu = {
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
export declare type MenuMenuItemsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
};
/** Arguments for filtering the MenuToMenuItemConnection connection */
export declare type MenuToMenuItemConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars['Int']>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
};
/** Registered menu locations */
export declare type MenuLocationEnum = 'ABOUT' | 'AUTHORS_WORK' | 'CASE_STUDIES_CREATIVE' | 'CHARTS_AFRICA' | 'CHARTS_INDIA' | 'CHARTS_QUARTZ' | 'CLIENTS_CREATIVE' | 'FEATURED_QUARTZ' | 'FEATURES_MARKETING_MEMBERS' | 'FEATURES_MEMBERS' | 'FEATURES_VIDEO_MEMBERS' | 'OBSESSIONS' | 'OBSESSIONS_AFRICA' | 'OBSESSIONS_INDIA' | 'OBSESSIONS_QUARTZ' | 'OBSESSIONS_QUARTZY' | 'OBSESSIONS_WORK' | 'PLAYER_VIDEO' | 'PREMIUM_MEMBERS' | 'SHOWS_VIDEO' | 'TOP_AFRICA' | 'TOP_INDIA' | 'TOP_QUARTZ' | 'TOP_QUARTZY' | 'TOP_WORK' | 'VIDEOS_QUARTZ' | 'VIDEOS_QUARTZY';
/** Connection between the Menu type and the Menu type */
export declare type MenuToMenuItemConnection = {
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
export declare type MenuToMenuItemConnectionEdge = {
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
export declare type MenuItem = {
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
export declare type MenuItemChildItemsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};
/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export declare type MenuItemToMenuItemConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars['Int']>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
};
/** Connection between the MenuItem type and the MenuItem type */
export declare type MenuItemToMenuItemConnection = {
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
export declare type MenuItemToMenuItemConnectionEdge = {
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
export declare type MenuItemObjectUnion = Post | Page | Email | Chapter | Promotion | BlogPost | Nug | Collection | Category | Tag | EmailList | Obsession | Topic | Show | CoAuthor | MenuItem;
/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export declare type RootQueryToMenuItemConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars['Int']>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
};
/** Connection between the RootQuery type and the RootQuery type */
export declare type RootQueryToMenuItemConnection = {
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
export declare type RootQueryToMenuItemConnectionEdge = {
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
export declare type RootQueryToMenuConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars['Int']>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
    /** The slug of the menu to query items for */
    slug?: Maybe<Scalars['String']>;
};
/** Connection between the RootQuery type and the RootQuery type */
export declare type RootQueryToMenuConnection = {
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
export declare type RootQueryToMenuConnectionEdge = {
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
export declare type RootQueryToNugConnectionWhereArgs = {
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
export declare type RootQueryToNugConnection = {
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
export declare type RootQueryToNugConnectionEdge = {
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
export declare type RootQueryToObsessionConnectionWhereArgs = {
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
export declare type RootQueryToObsessionConnection = {
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
export declare type RootQueryToObsessionConnectionEdge = {
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
export declare type RootQueryToPageConnectionWhereArgs = {
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
export declare type RootQueryToPageConnection = {
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
export declare type RootQueryToPageConnectionEdge = {
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
export declare type RootQueryToPostConnectionWhereArgs = {
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
export declare type RootQueryToPostConnection = {
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
export declare type RootQueryToPostConnectionEdge = {
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
export declare type RootQueryToProjectConnectionWhereArgs = {
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
export declare type RootQueryToProjectConnection = {
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
export declare type RootQueryToProjectConnectionEdge = {
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
export declare type RootQueryToPromotionConnectionWhereArgs = {
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
export declare type RootQueryToPromotionConnection = {
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
export declare type RootQueryToPromotionConnectionEdge = {
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
export declare type RootQueryToPushConnectionWhereArgs = {
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
export declare type RootQueryToPushConnection = {
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
export declare type RootQueryToPushConnectionEdge = {
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
export declare type RootQueryToRevisionConnectionWhereArgs = {
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
export declare type RootQueryToRevisionConnection = {
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
export declare type RootQueryToRevisionConnectionEdge = {
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
export declare type RootQueryToSeriesConnectionWhereArgs = {
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
export declare type RootQueryToSeriesConnection = {
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
export declare type RootQueryToSeriesConnectionEdge = {
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
export declare type RootQueryToShowConnectionWhereArgs = {
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
export declare type RootQueryToShowConnection = {
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
export declare type RootQueryToShowConnectionEdge = {
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
export declare type RootQueryToStackConnectionWhereArgs = {
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
export declare type RootQueryToStackConnection = {
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
export declare type RootQueryToStackConnectionEdge = {
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
export declare type RootQueryToTagConnectionWhereArgs = {
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
export declare type RootQueryToTagConnection = {
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
export declare type RootQueryToTagConnectionEdge = {
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
export declare type RootQueryToTopicConnectionWhereArgs = {
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
export declare type RootQueryToTopicConnection = {
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
export declare type RootQueryToTopicConnectionEdge = {
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
export declare type RootQueryToUserConnectionWhereArgs = {
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
export declare type UserRoleEnum = 'ADMINISTRATOR' | 'AUTHOR' | 'BUSINESS' | 'CONTRIBUTOR' | 'EDITOR' | 'SUBSCRIBER' | 'VIP_SUPPORT' | 'VIP_SUPPORT__INACTIVE_';
/** Column used for searching for users */
export declare type UsersConnectionSearchColumnEnum = 'EMAIL' | 'ID' | 'LOGIN' | 'NICENAME' | 'URL';
/** Connection between the RootQuery type and the RootQuery type */
export declare type RootQueryToUserConnection = {
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
export declare type RootQueryToUserConnectionEdge = {
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
//# sourceMappingURL=types.d.ts.map
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
/** Allowed Post Types */
export declare type PostTypeEnum = 'ATTACHMENT' | 'BLOG' | 'BULLETIN' | 'CHAPTER' | 'COLLECTION' | 'NUG' | 'PAGE' | 'POST' | 'PROMOTION' | 'QZ_CARD' | 'QZ_EMAIL' | 'QZ_STACK' | 'REVISION';
/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export declare type AvatarRatingEnum = 'G' | 'PG' | 'R' | 'X';
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
/** Allowed taxonomies */
export declare type TaxonomyEnum = 'CATEGORY' | 'COAUTHOR' | 'EDITION' | 'EMAILLIST' | 'FLAG' | 'GUIDE' | 'LOCATION' | 'OBSESSION' | 'PROJECT' | 'SERIES' | 'SHOW' | 'TAG' | 'TOPIC';
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
/** Allowed content block names */
export declare type BlockNameEnum = 'BLOCKQUOTE' | 'CORE_ARCHIVES' | 'CORE_AUDIO' | 'CORE_BLOCK' | 'CORE_BUTTON' | 'CORE_CATEGORIES' | 'CORE_CODE' | 'CORE_COLUMN' | 'CORE_COLUMNS' | 'CORE_COVER_IMAGE' | 'CORE_EMBED' | 'CORE_EMBED_ANIMOTO' | 'CORE_EMBED_CLOUDUP' | 'CORE_EMBED_COLLEGEHUMOR' | 'CORE_EMBED_DAILYMOTION' | 'CORE_EMBED_FACEBOOK' | 'CORE_EMBED_FLICKR' | 'CORE_EMBED_FUNNYORDIE' | 'CORE_EMBED_HULU' | 'CORE_EMBED_IMGUR' | 'CORE_EMBED_INSTAGRAM' | 'CORE_EMBED_ISSUU' | 'CORE_EMBED_KICKSTARTER' | 'CORE_EMBED_MEETUP_COM' | 'CORE_EMBED_MIXCLOUD' | 'CORE_EMBED_PHOTOBUCKET' | 'CORE_EMBED_POLLDADDY' | 'CORE_EMBED_REDDIT' | 'CORE_EMBED_REVERBNATION' | 'CORE_EMBED_SCREENCAST' | 'CORE_EMBED_SCRIBD' | 'CORE_EMBED_SLIDESHARE' | 'CORE_EMBED_SMUGMUG' | 'CORE_EMBED_SOUNDCLOUD' | 'CORE_EMBED_SPEAKER' | 'CORE_EMBED_SPOTIFY' | 'CORE_EMBED_TED' | 'CORE_EMBED_TUMBLR' | 'CORE_EMBED_TWITTER' | 'CORE_EMBED_VIDEOPRESS' | 'CORE_EMBED_VIMEO' | 'CORE_EMBED_WORDPRESS' | 'CORE_EMBED_WORDPRESS_TV' | 'CORE_EMBED_YOUTUBE' | 'CORE_FILE' | 'CORE_FREEFORM' | 'CORE_GALLERY' | 'CORE_HEADING' | 'CORE_HTML' | 'CORE_IMAGE' | 'CORE_LATEST_COMMENTS' | 'CORE_LATEST_POSTS' | 'CORE_LIST' | 'CORE_MORE' | 'CORE_NEXTPAGE' | 'CORE_PARAGRAPH' | 'CORE_PREFORMATTED' | 'CORE_PULLQUOTE' | 'CORE_QUOTE' | 'CORE_SEPARATOR' | 'CORE_SHORTCODE' | 'CORE_SPACER' | 'CORE_SUBHEAD' | 'CORE_TABLE' | 'CORE_TEXT_COLUMNS' | 'CORE_VERSE' | 'CORE_VIDEO' | 'EL' | 'EMBED_ANIMOTO' | 'EMBED_API_CROWDSIGNAL_COM_OEMBED' | 'EMBED_GFYCAT' | 'EMBED_IMGUR' | 'EMBED_MEETUP' | 'EMBED_SCREENCAST' | 'EMBED_SMUGMUG' | 'EMBED_DATAWRAPPER' | 'EMBED_ATLAS' | 'EMBED_AUDIO' | 'EMBED_CLOUDUP' | 'EMBED_CODEPEN_IO_API_OEMBED' | 'EMBED_EMBED_GETTYIMAGES_COM_OEMBED_' | 'EMBED_SPOTIFY' | 'EMBED_FACEBOOK_ALTERNATE' | 'EMBED_FACEBOOK_ALTERNATE_VIDEO' | 'EMBED_FACEBOOK_PHOTO' | 'EMBED_FACEBOOK_VIDEO' | 'EMBED_WISTIA' | 'EMBED_FLICKR' | 'EMBED_GITHUB_GIST' | 'EMBED_GOOGLEPLUS' | 'EMBED_INSTAGRAM' | 'EMBED_INLINE_PDFS' | 'EMBED_ISSUU' | 'EMBED_ICLOUD' | 'EMBED_MEDIUM' | 'EMBED_QZ_OBJECT' | 'EMBED_ODESLI_CO_OEMBED' | 'EMBED_PINTEREST' | 'EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED_1_0_' | 'EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED__FOR_HTTPS_3A_2F_2FQZ_COM' | 'EMBED_TWITTER' | 'EMBED_FACEBOOK' | 'EMBED_VINE' | 'EMBED_AMAZON' | 'EMBED_SERVICES_CARTO_COM_OEMBED' | 'EMBED_SKETCHFAB' | 'EMBED_SOUNDCLOUD' | 'EMBED_SPEAKERDECK' | 'EMBED_VIDEO' | 'EMBED_VIMEO' | 'EMBED_WORDPRESS_TV' | 'EMBED_WPCOM_VIMEO_EMBED_URL' | 'EMBED_WPCOM_YOUTUBE_EMBED_CRAZY_URL' | 'EMBED_DAILYMOTION' | 'EMBED_DOCUMENTCLOUD' | 'EMBED_WWW_HOUZZ_COM_OEMBED' | 'EMBED_KICKSTARTER' | 'EMBED_LOOM' | 'EMBED_MIXCLOUD' | 'EMBED_REDDIT' | 'EMBED_REVERBNATION' | 'EMBED_SCRIBD' | 'EMBED_SLIDESHARE' | 'EMBED_SOMEECARDS' | 'EMBED_TED' | 'EMBED_WWW_TED_COM_TALKS_OEMBED_JSON' | 'EMBED_TIKTOK' | 'EMBED_TUMBLR' | 'EMBED_YOUTUBE' | 'FIGURE' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'HR' | 'IMG' | 'OL' | 'P' | 'PRE' | 'QZ_ITEM' | 'QZ_POST_TOUT' | 'QZ_TAXONOMY_TERM' | 'QZ_WIFY_ANSWER' | 'SAFE_COMMENT' | 'SHORTCODE_ANSWER' | 'SHORTCODE_ARCHIVEORG' | 'SHORTCODE_ARCHIVEORG_BOOK' | 'SHORTCODE_ARCHIVES' | 'SHORTCODE_AUDIO' | 'SHORTCODE_BANDCAMP' | 'SHORTCODE_BRIGHTCOVE' | 'SHORTCODE_CAPTION' | 'SHORTCODE_CPI_BROADBAND_MAP' | 'SHORTCODE_CROWDSIGNAL' | 'SHORTCODE_DAILYMOTION' | 'SHORTCODE_DAILYMOTION_CHANNEL' | 'SHORTCODE_EMBED' | 'SHORTCODE_ENDMATTER' | 'SHORTCODE_EXPLANATION' | 'SHORTCODE_FACEBOOK' | 'SHORTCODE_FLICKR' | 'SHORTCODE_GALLERY' | 'SHORTCODE_GEO_LOCATION' | 'SHORTCODE_GETTY' | 'SHORTCODE_GIST' | 'SHORTCODE_GOOGLEAPPS' | 'SHORTCODE_GOOGLEMAPS' | 'SHORTCODE_GOOGLEPLUS' | 'SHORTCODE_GRAVATAR' | 'SHORTCODE_GRAVATAR_PROFILE' | 'SHORTCODE_HOUZZ' | 'SHORTCODE_HULU' | 'SHORTCODE_INSTAGRAM' | 'SHORTCODE_KICKSTARTER' | 'SHORTCODE_LATEX' | 'SHORTCODE_MAILCHIMP_SUBSCRIBER_POPUP' | 'SHORTCODE_MEDIUM' | 'SHORTCODE_MIXCLOUD' | 'SHORTCODE_PLAYLIST' | 'SHORTCODE_POLLDADDY' | 'SHORTCODE_PRESENTATION' | 'SHORTCODE_PROMO_LINK' | 'SHORTCODE_PULLQUOTE' | 'SHORTCODE_QUARTZY_AD' | 'SHORTCODE_QUARTZY_PS' | 'SHORTCODE_QUESTION' | 'SHORTCODE_QUIZ' | 'SHORTCODE_QZ_ATLAS' | 'SHORTCODE_QZ_DAILY_BRIEF' | 'SHORTCODE_QZ_DATAWRAPPER' | 'SHORTCODE_QZ_FACEBOOK_POST' | 'SHORTCODE_QZ_FACEBOOK_VIDEO' | 'SHORTCODE_QZ_FURTHER_READING' | 'SHORTCODE_QZ_GUIDE_PROMO' | 'SHORTCODE_QZ_IFRAME' | 'SHORTCODE_QZ_INLINE_AD' | 'SHORTCODE_QZ_INTERACTIVE' | 'SHORTCODE_QZ_RELATED_STACK' | 'SHORTCODE_QZ_SECTION_DIVIDER' | 'SHORTCODE_QZ_TIPS' | 'SHORTCODE_QZ_TOPIC_UPDATE' | 'SHORTCODE_RECIPE' | 'SHORTCODE_RECIPE_DIRECTIONS' | 'SHORTCODE_RECIPE_IMAGE' | 'SHORTCODE_RECIPE_INGREDIENTS' | 'SHORTCODE_RECIPE_NOTES' | 'SHORTCODE_RECIPE_NUTRITION' | 'SHORTCODE_SCRIBD' | 'SHORTCODE_SERIES_RECIRC' | 'SHORTCODE_SIMPLE_PAYMENT' | 'SHORTCODE_SITEMAP' | 'SHORTCODE_SLIDE' | 'SHORTCODE_SLIDESHARE' | 'SHORTCODE_SLIDESHOW' | 'SHORTCODE_SOUNDCLOUD' | 'SHORTCODE_SPOTIFY' | 'SHORTCODE_STORIFY' | 'SHORTCODE_TED' | 'SHORTCODE_TWEET' | 'SHORTCODE_TWITCH' | 'SHORTCODE_TWITCHTV' | 'SHORTCODE_TWITTER_TIMELINE' | 'SHORTCODE_UNTAPPD_MENU' | 'SHORTCODE_UPCOMINGEVENTS' | 'SHORTCODE_USTREAM' | 'SHORTCODE_USTREAMSOCIAL' | 'SHORTCODE_VIDEO' | 'SHORTCODE_VIDEOPRESS' | 'SHORTCODE_VIMEO' | 'SHORTCODE_VINE' | 'SHORTCODE_VR' | 'SHORTCODE_WPVIDEO' | 'SHORTCODE_WP_CAPTION' | 'SHORTCODE_WRONG' | 'SHORTCODE_WUFOO' | 'SHORTCODE_YOUTUBE' | 'TABLE' | 'UL';
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
/** The format of post field data. */
export declare type PostObjectFieldFormatEnum = 
/** Provide the field value directly from database */
'RAW'
/** Apply the default WordPress rendering */
 | 'RENDERED';
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
/** Arguments for filtering the TagToEmailConnection connection */
export declare type TagToEmailConnectionWhereArgs = {
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
/** Arguments for filtering the EmailToTagConnection connection */
export declare type EmailToTagConnectionWhereArgs = {
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
/** Arguments for filtering the RootQueryToContentUnionConnection connection */
export declare type RootQueryToContentUnionConnectionWhereArgs = {
    /** Search terms */
    search?: Maybe<Scalars['String']>;
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
/** Arguments for filtering the MenuToMenuItemConnection connection */
export declare type MenuToMenuItemConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars['Int']>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
};
/** Registered menu locations */
export declare type MenuLocationEnum = 'ABOUT' | 'AUTHORS_WORK' | 'CASE_STUDIES_CREATIVE' | 'CHARTS_AFRICA' | 'CHARTS_INDIA' | 'CHARTS_QUARTZ' | 'CLIENTS_CREATIVE' | 'FEATURED_QUARTZ' | 'FEATURES_MARKETING_MEMBERS' | 'FEATURES_MEMBERS' | 'FEATURES_VIDEO_MEMBERS' | 'OBSESSIONS' | 'OBSESSIONS_AFRICA' | 'OBSESSIONS_INDIA' | 'OBSESSIONS_QUARTZ' | 'OBSESSIONS_QUARTZY' | 'OBSESSIONS_WORK' | 'PLAYER_VIDEO' | 'PREMIUM_MEMBERS' | 'SHOWS_VIDEO' | 'TOP_AFRICA' | 'TOP_INDIA' | 'TOP_QUARTZ' | 'TOP_QUARTZY' | 'TOP_WORK' | 'VIDEOS_QUARTZ' | 'VIDEOS_QUARTZY';
/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export declare type MenuItemToMenuItemConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars['Int']>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
};
/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export declare type RootQueryToMenuItemConnectionWhereArgs = {
    /** The ID of the object */
    id?: Maybe<Scalars['Int']>;
    /** The menu location for the menu being queried */
    location?: Maybe<MenuLocationEnum>;
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
//# sourceMappingURL=types.d.ts.map
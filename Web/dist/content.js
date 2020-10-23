"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNugsByTagLazyQuery = exports.useNugsByTagQuery = exports.NugsByTagDocument = exports.useNugLazyQuery = exports.useNugQuery = exports.NugDocument = exports.useVideoHubLazyQuery = exports.useVideoHubQuery = exports.VideoHubDocument = exports.useMemberVideoLazyQuery = exports.useMemberVideoQuery = exports.MemberVideoDocument = exports.useMemberHomeLazyQuery = exports.useMemberHomeQuery = exports.MemberHomeDocument = exports.useHomeCollectionPreviewLazyQuery = exports.useHomeCollectionPreviewQuery = exports.HomeCollectionPreviewDocument = exports.useHomeCollectionLazyQuery = exports.useHomeCollectionQuery = exports.HomeCollectionDocument = exports.useGuidesBySlugLazyQuery = exports.useGuidesBySlugQuery = exports.GuidesBySlugDocument = exports.useGuidesLazyQuery = exports.useGuidesQuery = exports.GuidesDocument = exports.useDiscoverLazyQuery = exports.useDiscoverQuery = exports.DiscoverDocument = exports.useLatestArticlesLazyQuery = exports.useLatestArticlesQuery = exports.LatestArticlesDocument = exports.useContentBySearchTermLazyQuery = exports.useContentBySearchTermQuery = exports.ContentBySearchTermDocument = exports.useArticlesByTopicLazyQuery = exports.useArticlesByTopicQuery = exports.ArticlesByTopicDocument = exports.useArticlesByTagLazyQuery = exports.useArticlesByTagQuery = exports.ArticlesByTagDocument = exports.useArticlesByShowLazyQuery = exports.useArticlesByShowQuery = exports.ArticlesByShowDocument = exports.useArticlesBySeriesLazyQuery = exports.useArticlesBySeriesQuery = exports.ArticlesBySeriesDocument = exports.useArticlesByObsessionLazyQuery = exports.useArticlesByObsessionQuery = exports.ArticlesByObsessionDocument = exports.useArticlesByGuideLazyQuery = exports.useArticlesByGuideQuery = exports.ArticlesByGuideDocument = exports.useArticleTeaserLazyQuery = exports.useArticleTeaserQuery = exports.ArticleTeaserDocument = exports.useArticlePreviewLazyQuery = exports.useArticlePreviewQuery = exports.ArticlePreviewDocument = exports.useArticleLazyQuery = exports.useArticleQuery = exports.ArticleDocument = exports.TopicPartsFragmentDoc = exports.TagPartsFragmentDoc = exports.HomeCollectionPartsFragmentDoc = exports.NugPartsFragmentDoc = exports.BulletinPartsFragmentDoc = exports.ArticlePartsFragmentDoc = exports.ShowPartsFragmentDoc = exports.SeriesPartsFragmentDoc = exports.ProjectPartsFragmentDoc = exports.ObsessionPartsFragmentDoc = exports.GuidePartsFragmentDoc = exports.BlockPartsFragmentDoc = exports.AuthorPartsFragmentDoc = exports.ArticleTeaserPartsFragmentDoc = exports.VideoPartsFragmentDoc = exports.PromotionPartsFragmentDoc = exports.MediaPartsFragmentDoc = exports.UsersConnectionSearchColumnEnum = exports.UserRoleEnum = exports.MenuLocationEnum = exports.CommentsConnectionOrderbyEnum = exports.PostObjectFieldFormatEnum = exports.TermObjectsConnectionOrderbyEnum = exports.BlockNameEnum = exports.TaxonomyEnum = exports.PostStatusEnum = exports.OrderEnum = exports.PostObjectsConnectionOrderbyEnum = exports.MimeTypeEnum = exports.EditionName = exports.RelationEnum = exports.PostObjectsConnectionDateColumnEnum = exports.AuthorType = exports.AvatarRatingEnum = exports.PostTypeEnum = void 0;
const client_1 = require("@apollo/client");
const Apollo = require("@apollo/client");
/** Allowed Post Types */
var PostTypeEnum;
(function (PostTypeEnum) {
    PostTypeEnum["Attachment"] = "ATTACHMENT";
    PostTypeEnum["Blog"] = "BLOG";
    PostTypeEnum["Bulletin"] = "BULLETIN";
    PostTypeEnum["Chapter"] = "CHAPTER";
    PostTypeEnum["Collection"] = "COLLECTION";
    PostTypeEnum["Nug"] = "NUG";
    PostTypeEnum["Page"] = "PAGE";
    PostTypeEnum["Post"] = "POST";
    PostTypeEnum["Promotion"] = "PROMOTION";
    PostTypeEnum["Push"] = "PUSH";
    PostTypeEnum["QzCard"] = "QZ_CARD";
    PostTypeEnum["QzEmail"] = "QZ_EMAIL";
    PostTypeEnum["QzStack"] = "QZ_STACK";
    PostTypeEnum["Revision"] = "REVISION";
})(PostTypeEnum = exports.PostTypeEnum || (exports.PostTypeEnum = {}));
/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
var AvatarRatingEnum;
(function (AvatarRatingEnum) {
    AvatarRatingEnum["G"] = "G";
    AvatarRatingEnum["Pg"] = "PG";
    AvatarRatingEnum["R"] = "R";
    AvatarRatingEnum["X"] = "X";
})(AvatarRatingEnum = exports.AvatarRatingEnum || (exports.AvatarRatingEnum = {}));
/** Coauthor type */
var AuthorType;
(function (AuthorType) {
    AuthorType["Guest"] = "GUEST";
    AuthorType["Wordpress"] = "WORDPRESS";
})(AuthorType = exports.AuthorType || (exports.AuthorType = {}));
/** The column to use when filtering by date */
var PostObjectsConnectionDateColumnEnum;
(function (PostObjectsConnectionDateColumnEnum) {
    PostObjectsConnectionDateColumnEnum["Date"] = "DATE";
    PostObjectsConnectionDateColumnEnum["Modified"] = "MODIFIED";
})(PostObjectsConnectionDateColumnEnum = exports.PostObjectsConnectionDateColumnEnum || (exports.PostObjectsConnectionDateColumnEnum = {}));
/** The logical relation between each item in the array when there are more than one. */
var RelationEnum;
(function (RelationEnum) {
    RelationEnum["And"] = "AND";
    RelationEnum["Or"] = "OR";
})(RelationEnum = exports.RelationEnum || (exports.RelationEnum = {}));
/** Quartz edition */
var EditionName;
(function (EditionName) {
    EditionName["Africa"] = "AFRICA";
    EditionName["India"] = "INDIA";
    EditionName["Quartz"] = "QUARTZ";
    EditionName["Quartzy"] = "QUARTZY";
    EditionName["Work"] = "WORK";
})(EditionName = exports.EditionName || (exports.EditionName = {}));
/** The MimeType of the object */
var MimeTypeEnum;
(function (MimeTypeEnum) {
    MimeTypeEnum["ApplicationJava"] = "APPLICATION_JAVA";
    MimeTypeEnum["ApplicationMsword"] = "APPLICATION_MSWORD";
    MimeTypeEnum["ApplicationOctetStream"] = "APPLICATION_OCTET_STREAM";
    MimeTypeEnum["ApplicationOnenote"] = "APPLICATION_ONENOTE";
    MimeTypeEnum["ApplicationOxps"] = "APPLICATION_OXPS";
    MimeTypeEnum["ApplicationPdf"] = "APPLICATION_PDF";
    MimeTypeEnum["ApplicationRar"] = "APPLICATION_RAR";
    MimeTypeEnum["ApplicationRtf"] = "APPLICATION_RTF";
    MimeTypeEnum["ApplicationTtafXml"] = "APPLICATION_TTAF_XML";
    MimeTypeEnum["ApplicationVndAppleKeynote"] = "APPLICATION_VND_APPLE_KEYNOTE";
    MimeTypeEnum["ApplicationVndAppleNumbers"] = "APPLICATION_VND_APPLE_NUMBERS";
    MimeTypeEnum["ApplicationVndApplePages"] = "APPLICATION_VND_APPLE_PAGES";
    MimeTypeEnum["ApplicationVndMsAccess"] = "APPLICATION_VND_MS_ACCESS";
    MimeTypeEnum["ApplicationVndMsExcel"] = "APPLICATION_VND_MS_EXCEL";
    MimeTypeEnum["ApplicationVndMsExcelAddinMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsExcelSheetBinaryMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsExcelSheetMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsExcelTemplateMacroenabled_12"] = "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsPowerpoint"] = "APPLICATION_VND_MS_POWERPOINT";
    MimeTypeEnum["ApplicationVndMsPowerpointAddinMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsPowerpointPresentationMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsPowerpointSlideshowMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsPowerpointSlideMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsPowerpointTemplateMacroenabled_12"] = "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsProject"] = "APPLICATION_VND_MS_PROJECT";
    MimeTypeEnum["ApplicationVndMsWordDocumentMacroenabled_12"] = "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsWordTemplateMacroenabled_12"] = "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12";
    MimeTypeEnum["ApplicationVndMsWrite"] = "APPLICATION_VND_MS_WRITE";
    MimeTypeEnum["ApplicationVndMsXpsdocument"] = "APPLICATION_VND_MS_XPSDOCUMENT";
    MimeTypeEnum["ApplicationVndOasisOpendocumentChart"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART";
    MimeTypeEnum["ApplicationVndOasisOpendocumentDatabase"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE";
    MimeTypeEnum["ApplicationVndOasisOpendocumentFormula"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA";
    MimeTypeEnum["ApplicationVndOasisOpendocumentGraphics"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS";
    MimeTypeEnum["ApplicationVndOasisOpendocumentPresentation"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION";
    MimeTypeEnum["ApplicationVndOasisOpendocumentSpreadsheet"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET";
    MimeTypeEnum["ApplicationVndOasisOpendocumentText"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT";
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION";
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE";
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW";
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE";
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET";
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE";
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT";
    MimeTypeEnum["ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE";
    MimeTypeEnum["ApplicationWordperfect"] = "APPLICATION_WORDPERFECT";
    MimeTypeEnum["ApplicationX_7ZCompressed"] = "APPLICATION_X_7Z_COMPRESSED";
    MimeTypeEnum["ApplicationXGzip"] = "APPLICATION_X_GZIP";
    MimeTypeEnum["ApplicationXTar"] = "APPLICATION_X_TAR";
    MimeTypeEnum["ApplicationZip"] = "APPLICATION_ZIP";
    MimeTypeEnum["AudioAac"] = "AUDIO_AAC";
    MimeTypeEnum["AudioFlac"] = "AUDIO_FLAC";
    MimeTypeEnum["AudioMidi"] = "AUDIO_MIDI";
    MimeTypeEnum["AudioMpeg"] = "AUDIO_MPEG";
    MimeTypeEnum["AudioOgg"] = "AUDIO_OGG";
    MimeTypeEnum["AudioWav"] = "AUDIO_WAV";
    MimeTypeEnum["AudioXMatroska"] = "AUDIO_X_MATROSKA";
    MimeTypeEnum["AudioXMsWax"] = "AUDIO_X_MS_WAX";
    MimeTypeEnum["AudioXMsWma"] = "AUDIO_X_MS_WMA";
    MimeTypeEnum["AudioXRealaudio"] = "AUDIO_X_REALAUDIO";
    MimeTypeEnum["ImageBmp"] = "IMAGE_BMP";
    MimeTypeEnum["ImageGif"] = "IMAGE_GIF";
    MimeTypeEnum["ImageHeic"] = "IMAGE_HEIC";
    MimeTypeEnum["ImageJpeg"] = "IMAGE_JPEG";
    MimeTypeEnum["ImagePng"] = "IMAGE_PNG";
    MimeTypeEnum["ImageTiff"] = "IMAGE_TIFF";
    MimeTypeEnum["ImageXIcon"] = "IMAGE_X_ICON";
    MimeTypeEnum["TextCalendar"] = "TEXT_CALENDAR";
    MimeTypeEnum["TextCss"] = "TEXT_CSS";
    MimeTypeEnum["TextCsv"] = "TEXT_CSV";
    MimeTypeEnum["TextPlain"] = "TEXT_PLAIN";
    MimeTypeEnum["TextRichtext"] = "TEXT_RICHTEXT";
    MimeTypeEnum["TextTabSeparatedValues"] = "TEXT_TAB_SEPARATED_VALUES";
    MimeTypeEnum["TextVtt"] = "TEXT_VTT";
    MimeTypeEnum["Video_3Gpp"] = "VIDEO_3GPP";
    MimeTypeEnum["Video_3Gpp2"] = "VIDEO_3GPP2";
    MimeTypeEnum["VideoAvi"] = "VIDEO_AVI";
    MimeTypeEnum["VideoDivx"] = "VIDEO_DIVX";
    MimeTypeEnum["VideoMp4"] = "VIDEO_MP4";
    MimeTypeEnum["VideoMpeg"] = "VIDEO_MPEG";
    MimeTypeEnum["VideoOgg"] = "VIDEO_OGG";
    MimeTypeEnum["VideoQuicktime"] = "VIDEO_QUICKTIME";
    MimeTypeEnum["VideoWebm"] = "VIDEO_WEBM";
    MimeTypeEnum["VideoXMatroska"] = "VIDEO_X_MATROSKA";
    MimeTypeEnum["VideoXMsAsf"] = "VIDEO_X_MS_ASF";
    MimeTypeEnum["VideoXMsWm"] = "VIDEO_X_MS_WM";
    MimeTypeEnum["VideoXMsWmv"] = "VIDEO_X_MS_WMV";
    MimeTypeEnum["VideoXMsWmx"] = "VIDEO_X_MS_WMX";
})(MimeTypeEnum = exports.MimeTypeEnum || (exports.MimeTypeEnum = {}));
/** Field to order the connection by */
var PostObjectsConnectionOrderbyEnum;
(function (PostObjectsConnectionOrderbyEnum) {
    /** Order by author */
    PostObjectsConnectionOrderbyEnum["Author"] = "AUTHOR";
    /** Order by publish date */
    PostObjectsConnectionOrderbyEnum["Date"] = "DATE";
    /** Preserve the ID order given in the IN array */
    PostObjectsConnectionOrderbyEnum["In"] = "IN";
    /** Order by membership editor’s choice */
    PostObjectsConnectionOrderbyEnum["Membership"] = "MEMBERSHIP";
    /** Order by the menu order value */
    PostObjectsConnectionOrderbyEnum["MenuOrder"] = "MENU_ORDER";
    /** Order by last modified date */
    PostObjectsConnectionOrderbyEnum["Modified"] = "MODIFIED";
    /** Preserve slug order given in the NAME_IN array */
    PostObjectsConnectionOrderbyEnum["NameIn"] = "NAME_IN";
    /** Order by parent ID */
    PostObjectsConnectionOrderbyEnum["Parent"] = "PARENT";
    /** Order by slug */
    PostObjectsConnectionOrderbyEnum["Slug"] = "SLUG";
    /** Order by title */
    PostObjectsConnectionOrderbyEnum["Title"] = "TITLE";
})(PostObjectsConnectionOrderbyEnum = exports.PostObjectsConnectionOrderbyEnum || (exports.PostObjectsConnectionOrderbyEnum = {}));
/** The cardinality of the connection order */
var OrderEnum;
(function (OrderEnum) {
    OrderEnum["Asc"] = "ASC";
    OrderEnum["Desc"] = "DESC";
})(OrderEnum = exports.OrderEnum || (exports.OrderEnum = {}));
/** The status of the object. */
var PostStatusEnum;
(function (PostStatusEnum) {
    /** Objects with the auto-draft status */
    PostStatusEnum["AutoDraft"] = "AUTO_DRAFT";
    /** Objects with the draft status */
    PostStatusEnum["Draft"] = "DRAFT";
    /** Objects with the editor-ok status */
    PostStatusEnum["EditorOk"] = "EDITOR_OK";
    /** Objects with the future status */
    PostStatusEnum["Future"] = "FUTURE";
    /** Objects with the hold status */
    PostStatusEnum["Hold"] = "HOLD";
    /** Objects with the inherit status */
    PostStatusEnum["Inherit"] = "INHERIT";
    /** Objects with the pending-edit status */
    PostStatusEnum["PendingEdit"] = "PENDING_EDIT";
    /** Objects with the pending-revision status */
    PostStatusEnum["PendingRevision"] = "PENDING_REVISION";
    /** Objects with the private status */
    PostStatusEnum["Private"] = "PRIVATE";
    /** Objects with the publish status */
    PostStatusEnum["Publish"] = "PUBLISH";
    /** Objects with the ready-to-publish status */
    PostStatusEnum["ReadyToPublish"] = "READY_TO_PUBLISH";
    /** Objects with the request-completed status */
    PostStatusEnum["RequestCompleted"] = "REQUEST_COMPLETED";
    /** Objects with the request-confirmed status */
    PostStatusEnum["RequestConfirmed"] = "REQUEST_CONFIRMED";
    /** Objects with the request-failed status */
    PostStatusEnum["RequestFailed"] = "REQUEST_FAILED";
    /** Objects with the request-pending status */
    PostStatusEnum["RequestPending"] = "REQUEST_PENDING";
    /** Objects with the trash status */
    PostStatusEnum["Trash"] = "TRASH";
    /** Objects with the writing status */
    PostStatusEnum["Writing"] = "WRITING";
})(PostStatusEnum = exports.PostStatusEnum || (exports.PostStatusEnum = {}));
/** Allowed taxonomies */
var TaxonomyEnum;
(function (TaxonomyEnum) {
    TaxonomyEnum["Category"] = "CATEGORY";
    TaxonomyEnum["Coauthor"] = "COAUTHOR";
    TaxonomyEnum["Edition"] = "EDITION";
    TaxonomyEnum["Emaillist"] = "EMAILLIST";
    TaxonomyEnum["Flag"] = "FLAG";
    TaxonomyEnum["Guide"] = "GUIDE";
    TaxonomyEnum["Location"] = "LOCATION";
    TaxonomyEnum["Obsession"] = "OBSESSION";
    TaxonomyEnum["Project"] = "PROJECT";
    TaxonomyEnum["Series"] = "SERIES";
    TaxonomyEnum["Show"] = "SHOW";
    TaxonomyEnum["Tag"] = "TAG";
    TaxonomyEnum["Topic"] = "TOPIC";
})(TaxonomyEnum = exports.TaxonomyEnum || (exports.TaxonomyEnum = {}));
/** Allowed content block names */
var BlockNameEnum;
(function (BlockNameEnum) {
    BlockNameEnum["Blockquote"] = "BLOCKQUOTE";
    BlockNameEnum["CoreArchives"] = "CORE_ARCHIVES";
    BlockNameEnum["CoreAudio"] = "CORE_AUDIO";
    BlockNameEnum["CoreBlock"] = "CORE_BLOCK";
    BlockNameEnum["CoreButton"] = "CORE_BUTTON";
    BlockNameEnum["CoreCategories"] = "CORE_CATEGORIES";
    BlockNameEnum["CoreCode"] = "CORE_CODE";
    BlockNameEnum["CoreColumn"] = "CORE_COLUMN";
    BlockNameEnum["CoreColumns"] = "CORE_COLUMNS";
    BlockNameEnum["CoreCoverImage"] = "CORE_COVER_IMAGE";
    BlockNameEnum["CoreEmbed"] = "CORE_EMBED";
    BlockNameEnum["CoreEmbedAnimoto"] = "CORE_EMBED_ANIMOTO";
    BlockNameEnum["CoreEmbedCloudup"] = "CORE_EMBED_CLOUDUP";
    BlockNameEnum["CoreEmbedCollegehumor"] = "CORE_EMBED_COLLEGEHUMOR";
    BlockNameEnum["CoreEmbedDailymotion"] = "CORE_EMBED_DAILYMOTION";
    BlockNameEnum["CoreEmbedFacebook"] = "CORE_EMBED_FACEBOOK";
    BlockNameEnum["CoreEmbedFlickr"] = "CORE_EMBED_FLICKR";
    BlockNameEnum["CoreEmbedFunnyordie"] = "CORE_EMBED_FUNNYORDIE";
    BlockNameEnum["CoreEmbedHulu"] = "CORE_EMBED_HULU";
    BlockNameEnum["CoreEmbedImgur"] = "CORE_EMBED_IMGUR";
    BlockNameEnum["CoreEmbedInstagram"] = "CORE_EMBED_INSTAGRAM";
    BlockNameEnum["CoreEmbedIssuu"] = "CORE_EMBED_ISSUU";
    BlockNameEnum["CoreEmbedKickstarter"] = "CORE_EMBED_KICKSTARTER";
    BlockNameEnum["CoreEmbedMeetupCom"] = "CORE_EMBED_MEETUP_COM";
    BlockNameEnum["CoreEmbedMixcloud"] = "CORE_EMBED_MIXCLOUD";
    BlockNameEnum["CoreEmbedPhotobucket"] = "CORE_EMBED_PHOTOBUCKET";
    BlockNameEnum["CoreEmbedPolldaddy"] = "CORE_EMBED_POLLDADDY";
    BlockNameEnum["CoreEmbedReddit"] = "CORE_EMBED_REDDIT";
    BlockNameEnum["CoreEmbedReverbnation"] = "CORE_EMBED_REVERBNATION";
    BlockNameEnum["CoreEmbedScreencast"] = "CORE_EMBED_SCREENCAST";
    BlockNameEnum["CoreEmbedScribd"] = "CORE_EMBED_SCRIBD";
    BlockNameEnum["CoreEmbedSlideshare"] = "CORE_EMBED_SLIDESHARE";
    BlockNameEnum["CoreEmbedSmugmug"] = "CORE_EMBED_SMUGMUG";
    BlockNameEnum["CoreEmbedSoundcloud"] = "CORE_EMBED_SOUNDCLOUD";
    BlockNameEnum["CoreEmbedSpeaker"] = "CORE_EMBED_SPEAKER";
    BlockNameEnum["CoreEmbedSpotify"] = "CORE_EMBED_SPOTIFY";
    BlockNameEnum["CoreEmbedTed"] = "CORE_EMBED_TED";
    BlockNameEnum["CoreEmbedTumblr"] = "CORE_EMBED_TUMBLR";
    BlockNameEnum["CoreEmbedTwitter"] = "CORE_EMBED_TWITTER";
    BlockNameEnum["CoreEmbedVideopress"] = "CORE_EMBED_VIDEOPRESS";
    BlockNameEnum["CoreEmbedVimeo"] = "CORE_EMBED_VIMEO";
    BlockNameEnum["CoreEmbedWordpress"] = "CORE_EMBED_WORDPRESS";
    BlockNameEnum["CoreEmbedWordpressTv"] = "CORE_EMBED_WORDPRESS_TV";
    BlockNameEnum["CoreEmbedYoutube"] = "CORE_EMBED_YOUTUBE";
    BlockNameEnum["CoreFile"] = "CORE_FILE";
    BlockNameEnum["CoreFreeform"] = "CORE_FREEFORM";
    BlockNameEnum["CoreGallery"] = "CORE_GALLERY";
    BlockNameEnum["CoreHeading"] = "CORE_HEADING";
    BlockNameEnum["CoreHtml"] = "CORE_HTML";
    BlockNameEnum["CoreImage"] = "CORE_IMAGE";
    BlockNameEnum["CoreLatestComments"] = "CORE_LATEST_COMMENTS";
    BlockNameEnum["CoreLatestPosts"] = "CORE_LATEST_POSTS";
    BlockNameEnum["CoreList"] = "CORE_LIST";
    BlockNameEnum["CoreMore"] = "CORE_MORE";
    BlockNameEnum["CoreNextpage"] = "CORE_NEXTPAGE";
    BlockNameEnum["CoreParagraph"] = "CORE_PARAGRAPH";
    BlockNameEnum["CorePreformatted"] = "CORE_PREFORMATTED";
    BlockNameEnum["CorePullquote"] = "CORE_PULLQUOTE";
    BlockNameEnum["CoreQuote"] = "CORE_QUOTE";
    BlockNameEnum["CoreSeparator"] = "CORE_SEPARATOR";
    BlockNameEnum["CoreShortcode"] = "CORE_SHORTCODE";
    BlockNameEnum["CoreSpacer"] = "CORE_SPACER";
    BlockNameEnum["CoreSubhead"] = "CORE_SUBHEAD";
    BlockNameEnum["CoreTable"] = "CORE_TABLE";
    BlockNameEnum["CoreTextColumns"] = "CORE_TEXT_COLUMNS";
    BlockNameEnum["CoreVerse"] = "CORE_VERSE";
    BlockNameEnum["CoreVideo"] = "CORE_VIDEO";
    BlockNameEnum["El"] = "EL";
    BlockNameEnum["EmbedAnimoto"] = "EMBED_ANIMOTO";
    BlockNameEnum["EmbedApiCrowdsignalComOembed"] = "EMBED_API_CROWDSIGNAL_COM_OEMBED";
    BlockNameEnum["EmbedGfycat"] = "EMBED_GFYCAT";
    BlockNameEnum["EmbedImgur"] = "EMBED_IMGUR";
    BlockNameEnum["EmbedMeetup"] = "EMBED_MEETUP";
    BlockNameEnum["EmbedScreencast"] = "EMBED_SCREENCAST";
    BlockNameEnum["EmbedSmugmug"] = "EMBED_SMUGMUG";
    BlockNameEnum["EmbedDatawrapper"] = "EMBED_DATAWRAPPER";
    BlockNameEnum["EmbedAtlas"] = "EMBED_ATLAS";
    BlockNameEnum["EmbedAudio"] = "EMBED_AUDIO";
    BlockNameEnum["EmbedCloudup"] = "EMBED_CLOUDUP";
    BlockNameEnum["EmbedCodepenIoApiOembed"] = "EMBED_CODEPEN_IO_API_OEMBED";
    BlockNameEnum["EmbedEmbedGettyimagesComOembed"] = "EMBED_EMBED_GETTYIMAGES_COM_OEMBED_";
    BlockNameEnum["EmbedSpotify"] = "EMBED_SPOTIFY";
    BlockNameEnum["EmbedFacebookAlternate"] = "EMBED_FACEBOOK_ALTERNATE";
    BlockNameEnum["EmbedFacebookAlternateVideo"] = "EMBED_FACEBOOK_ALTERNATE_VIDEO";
    BlockNameEnum["EmbedFacebookPhoto"] = "EMBED_FACEBOOK_PHOTO";
    BlockNameEnum["EmbedFacebookVideo"] = "EMBED_FACEBOOK_VIDEO";
    BlockNameEnum["EmbedWistia"] = "EMBED_WISTIA";
    BlockNameEnum["EmbedFlickr"] = "EMBED_FLICKR";
    BlockNameEnum["EmbedGithubGist"] = "EMBED_GITHUB_GIST";
    BlockNameEnum["EmbedGoogleplus"] = "EMBED_GOOGLEPLUS";
    BlockNameEnum["EmbedInlinePdfs"] = "EMBED_INLINE_PDFS";
    BlockNameEnum["EmbedIssuu"] = "EMBED_ISSUU";
    BlockNameEnum["EmbedIcloud"] = "EMBED_ICLOUD";
    BlockNameEnum["EmbedJetpackInstagram"] = "EMBED_JETPACK_INSTAGRAM";
    BlockNameEnum["EmbedJetpackInstagramAlternateFormat"] = "EMBED_JETPACK_INSTAGRAM_ALTERNATE_FORMAT";
    BlockNameEnum["EmbedMedium"] = "EMBED_MEDIUM";
    BlockNameEnum["EmbedQzObject"] = "EMBED_QZ_OBJECT";
    BlockNameEnum["EmbedOdesliCoOembed"] = "EMBED_ODESLI_CO_OEMBED";
    BlockNameEnum["EmbedPinterest"] = "EMBED_PINTEREST";
    BlockNameEnum["EmbedPublicApiWordpressComOembed_1_0"] = "EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED_1_0_";
    BlockNameEnum["EmbedPublicApiWordpressComOembedForHttps_3A_2F_2FqzCom"] = "EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED__FOR_HTTPS_3A_2F_2FQZ_COM";
    BlockNameEnum["EmbedTwitter"] = "EMBED_TWITTER";
    BlockNameEnum["EmbedFacebook"] = "EMBED_FACEBOOK";
    BlockNameEnum["EmbedVine"] = "EMBED_VINE";
    BlockNameEnum["EmbedAmazon"] = "EMBED_AMAZON";
    BlockNameEnum["EmbedServicesCartoComOembed"] = "EMBED_SERVICES_CARTO_COM_OEMBED";
    BlockNameEnum["EmbedSketchfab"] = "EMBED_SKETCHFAB";
    BlockNameEnum["EmbedSoundcloud"] = "EMBED_SOUNDCLOUD";
    BlockNameEnum["EmbedSpeakerdeck"] = "EMBED_SPEAKERDECK";
    BlockNameEnum["EmbedVideo"] = "EMBED_VIDEO";
    BlockNameEnum["EmbedVimeo"] = "EMBED_VIMEO";
    BlockNameEnum["EmbedWordpressTv"] = "EMBED_WORDPRESS_TV";
    BlockNameEnum["EmbedWpcomVimeoEmbedUrl"] = "EMBED_WPCOM_VIMEO_EMBED_URL";
    BlockNameEnum["EmbedWpcomYoutubeEmbedCrazyUrl"] = "EMBED_WPCOM_YOUTUBE_EMBED_CRAZY_URL";
    BlockNameEnum["EmbedDailymotion"] = "EMBED_DAILYMOTION";
    BlockNameEnum["EmbedDocumentcloud"] = "EMBED_DOCUMENTCLOUD";
    BlockNameEnum["EmbedWwwHouzzComOembed"] = "EMBED_WWW_HOUZZ_COM_OEMBED";
    BlockNameEnum["EmbedKickstarter"] = "EMBED_KICKSTARTER";
    BlockNameEnum["EmbedLoom"] = "EMBED_LOOM";
    BlockNameEnum["EmbedMixcloud"] = "EMBED_MIXCLOUD";
    BlockNameEnum["EmbedReddit"] = "EMBED_REDDIT";
    BlockNameEnum["EmbedReverbnation"] = "EMBED_REVERBNATION";
    BlockNameEnum["EmbedScribd"] = "EMBED_SCRIBD";
    BlockNameEnum["EmbedSlideshare"] = "EMBED_SLIDESHARE";
    BlockNameEnum["EmbedSomeecards"] = "EMBED_SOMEECARDS";
    BlockNameEnum["EmbedTed"] = "EMBED_TED";
    BlockNameEnum["EmbedWwwTedComTalksOembedJson"] = "EMBED_WWW_TED_COM_TALKS_OEMBED_JSON";
    BlockNameEnum["EmbedTiktok"] = "EMBED_TIKTOK";
    BlockNameEnum["EmbedTumblr"] = "EMBED_TUMBLR";
    BlockNameEnum["EmbedYoutube"] = "EMBED_YOUTUBE";
    BlockNameEnum["Figure"] = "FIGURE";
    BlockNameEnum["H1"] = "H1";
    BlockNameEnum["H2"] = "H2";
    BlockNameEnum["H3"] = "H3";
    BlockNameEnum["H4"] = "H4";
    BlockNameEnum["H5"] = "H5";
    BlockNameEnum["H6"] = "H6";
    BlockNameEnum["Hr"] = "HR";
    BlockNameEnum["Img"] = "IMG";
    BlockNameEnum["Ol"] = "OL";
    BlockNameEnum["P"] = "P";
    BlockNameEnum["Pre"] = "PRE";
    BlockNameEnum["QzItem"] = "QZ_ITEM";
    BlockNameEnum["QzPostTout"] = "QZ_POST_TOUT";
    BlockNameEnum["QzTaxonomyTerm"] = "QZ_TAXONOMY_TERM";
    BlockNameEnum["QzWifyAnswer"] = "QZ_WIFY_ANSWER";
    BlockNameEnum["SafeComment"] = "SAFE_COMMENT";
    BlockNameEnum["ShortcodeAnswer"] = "SHORTCODE_ANSWER";
    BlockNameEnum["ShortcodeArchiveorg"] = "SHORTCODE_ARCHIVEORG";
    BlockNameEnum["ShortcodeArchiveorgBook"] = "SHORTCODE_ARCHIVEORG_BOOK";
    BlockNameEnum["ShortcodeArchives"] = "SHORTCODE_ARCHIVES";
    BlockNameEnum["ShortcodeAudio"] = "SHORTCODE_AUDIO";
    BlockNameEnum["ShortcodeBandcamp"] = "SHORTCODE_BANDCAMP";
    BlockNameEnum["ShortcodeBrightcove"] = "SHORTCODE_BRIGHTCOVE";
    BlockNameEnum["ShortcodeCaption"] = "SHORTCODE_CAPTION";
    BlockNameEnum["ShortcodeCpiBroadbandMap"] = "SHORTCODE_CPI_BROADBAND_MAP";
    BlockNameEnum["ShortcodeCrowdsignal"] = "SHORTCODE_CROWDSIGNAL";
    BlockNameEnum["ShortcodeDailymotion"] = "SHORTCODE_DAILYMOTION";
    BlockNameEnum["ShortcodeDailymotionChannel"] = "SHORTCODE_DAILYMOTION_CHANNEL";
    BlockNameEnum["ShortcodeEmbed"] = "SHORTCODE_EMBED";
    BlockNameEnum["ShortcodeEndmatter"] = "SHORTCODE_ENDMATTER";
    BlockNameEnum["ShortcodeExplanation"] = "SHORTCODE_EXPLANATION";
    BlockNameEnum["ShortcodeFacebook"] = "SHORTCODE_FACEBOOK";
    BlockNameEnum["ShortcodeFlickr"] = "SHORTCODE_FLICKR";
    BlockNameEnum["ShortcodeGallery"] = "SHORTCODE_GALLERY";
    BlockNameEnum["ShortcodeGeoLocation"] = "SHORTCODE_GEO_LOCATION";
    BlockNameEnum["ShortcodeGetty"] = "SHORTCODE_GETTY";
    BlockNameEnum["ShortcodeGist"] = "SHORTCODE_GIST";
    BlockNameEnum["ShortcodeGoogleapps"] = "SHORTCODE_GOOGLEAPPS";
    BlockNameEnum["ShortcodeGooglemaps"] = "SHORTCODE_GOOGLEMAPS";
    BlockNameEnum["ShortcodeGoogleplus"] = "SHORTCODE_GOOGLEPLUS";
    BlockNameEnum["ShortcodeGravatar"] = "SHORTCODE_GRAVATAR";
    BlockNameEnum["ShortcodeGravatarProfile"] = "SHORTCODE_GRAVATAR_PROFILE";
    BlockNameEnum["ShortcodeHouzz"] = "SHORTCODE_HOUZZ";
    BlockNameEnum["ShortcodeHulu"] = "SHORTCODE_HULU";
    BlockNameEnum["ShortcodeInstagram"] = "SHORTCODE_INSTAGRAM";
    BlockNameEnum["ShortcodeKickstarter"] = "SHORTCODE_KICKSTARTER";
    BlockNameEnum["ShortcodeLatex"] = "SHORTCODE_LATEX";
    BlockNameEnum["ShortcodeMailchimpSubscriberPopup"] = "SHORTCODE_MAILCHIMP_SUBSCRIBER_POPUP";
    BlockNameEnum["ShortcodeMedium"] = "SHORTCODE_MEDIUM";
    BlockNameEnum["ShortcodeMixcloud"] = "SHORTCODE_MIXCLOUD";
    BlockNameEnum["ShortcodePlaylist"] = "SHORTCODE_PLAYLIST";
    BlockNameEnum["ShortcodePolldaddy"] = "SHORTCODE_POLLDADDY";
    BlockNameEnum["ShortcodePresentation"] = "SHORTCODE_PRESENTATION";
    BlockNameEnum["ShortcodePromoLink"] = "SHORTCODE_PROMO_LINK";
    BlockNameEnum["ShortcodePullquote"] = "SHORTCODE_PULLQUOTE";
    BlockNameEnum["ShortcodeQuartzyAd"] = "SHORTCODE_QUARTZY_AD";
    BlockNameEnum["ShortcodeQuartzyPs"] = "SHORTCODE_QUARTZY_PS";
    BlockNameEnum["ShortcodeQuestion"] = "SHORTCODE_QUESTION";
    BlockNameEnum["ShortcodeQuiz"] = "SHORTCODE_QUIZ";
    BlockNameEnum["ShortcodeQzAtlas"] = "SHORTCODE_QZ_ATLAS";
    BlockNameEnum["ShortcodeQzDailyBrief"] = "SHORTCODE_QZ_DAILY_BRIEF";
    BlockNameEnum["ShortcodeQzDatawrapper"] = "SHORTCODE_QZ_DATAWRAPPER";
    BlockNameEnum["ShortcodeQzFacebookPost"] = "SHORTCODE_QZ_FACEBOOK_POST";
    BlockNameEnum["ShortcodeQzFacebookVideo"] = "SHORTCODE_QZ_FACEBOOK_VIDEO";
    BlockNameEnum["ShortcodeQzFurtherReading"] = "SHORTCODE_QZ_FURTHER_READING";
    BlockNameEnum["ShortcodeQzGuidePromo"] = "SHORTCODE_QZ_GUIDE_PROMO";
    BlockNameEnum["ShortcodeQzIframe"] = "SHORTCODE_QZ_IFRAME";
    BlockNameEnum["ShortcodeQzInlineAd"] = "SHORTCODE_QZ_INLINE_AD";
    BlockNameEnum["ShortcodeQzInteractive"] = "SHORTCODE_QZ_INTERACTIVE";
    BlockNameEnum["ShortcodeQzRelatedStack"] = "SHORTCODE_QZ_RELATED_STACK";
    BlockNameEnum["ShortcodeQzSectionDivider"] = "SHORTCODE_QZ_SECTION_DIVIDER";
    BlockNameEnum["ShortcodeQzTips"] = "SHORTCODE_QZ_TIPS";
    BlockNameEnum["ShortcodeQzTopicUpdate"] = "SHORTCODE_QZ_TOPIC_UPDATE";
    BlockNameEnum["ShortcodeRecipe"] = "SHORTCODE_RECIPE";
    BlockNameEnum["ShortcodeRecipeDirections"] = "SHORTCODE_RECIPE_DIRECTIONS";
    BlockNameEnum["ShortcodeRecipeImage"] = "SHORTCODE_RECIPE_IMAGE";
    BlockNameEnum["ShortcodeRecipeIngredients"] = "SHORTCODE_RECIPE_INGREDIENTS";
    BlockNameEnum["ShortcodeRecipeNotes"] = "SHORTCODE_RECIPE_NOTES";
    BlockNameEnum["ShortcodeRecipeNutrition"] = "SHORTCODE_RECIPE_NUTRITION";
    BlockNameEnum["ShortcodeScribd"] = "SHORTCODE_SCRIBD";
    BlockNameEnum["ShortcodeSeriesRecirc"] = "SHORTCODE_SERIES_RECIRC";
    BlockNameEnum["ShortcodeSimplePayment"] = "SHORTCODE_SIMPLE_PAYMENT";
    BlockNameEnum["ShortcodeSitemap"] = "SHORTCODE_SITEMAP";
    BlockNameEnum["ShortcodeSlide"] = "SHORTCODE_SLIDE";
    BlockNameEnum["ShortcodeSlideshare"] = "SHORTCODE_SLIDESHARE";
    BlockNameEnum["ShortcodeSlideshow"] = "SHORTCODE_SLIDESHOW";
    BlockNameEnum["ShortcodeSoundcloud"] = "SHORTCODE_SOUNDCLOUD";
    BlockNameEnum["ShortcodeSpotify"] = "SHORTCODE_SPOTIFY";
    BlockNameEnum["ShortcodeStorify"] = "SHORTCODE_STORIFY";
    BlockNameEnum["ShortcodeTed"] = "SHORTCODE_TED";
    BlockNameEnum["ShortcodeTweet"] = "SHORTCODE_TWEET";
    BlockNameEnum["ShortcodeTwitch"] = "SHORTCODE_TWITCH";
    BlockNameEnum["ShortcodeTwitchtv"] = "SHORTCODE_TWITCHTV";
    BlockNameEnum["ShortcodeTwitterTimeline"] = "SHORTCODE_TWITTER_TIMELINE";
    BlockNameEnum["ShortcodeUntappdMenu"] = "SHORTCODE_UNTAPPD_MENU";
    BlockNameEnum["ShortcodeUpcomingevents"] = "SHORTCODE_UPCOMINGEVENTS";
    BlockNameEnum["ShortcodeUstream"] = "SHORTCODE_USTREAM";
    BlockNameEnum["ShortcodeUstreamsocial"] = "SHORTCODE_USTREAMSOCIAL";
    BlockNameEnum["ShortcodeVideo"] = "SHORTCODE_VIDEO";
    BlockNameEnum["ShortcodeVideopress"] = "SHORTCODE_VIDEOPRESS";
    BlockNameEnum["ShortcodeVimeo"] = "SHORTCODE_VIMEO";
    BlockNameEnum["ShortcodeVine"] = "SHORTCODE_VINE";
    BlockNameEnum["ShortcodeVr"] = "SHORTCODE_VR";
    BlockNameEnum["ShortcodeWpvideo"] = "SHORTCODE_WPVIDEO";
    BlockNameEnum["ShortcodeWpCaption"] = "SHORTCODE_WP_CAPTION";
    BlockNameEnum["ShortcodeWrong"] = "SHORTCODE_WRONG";
    BlockNameEnum["ShortcodeWufoo"] = "SHORTCODE_WUFOO";
    BlockNameEnum["ShortcodeYoutube"] = "SHORTCODE_YOUTUBE";
    BlockNameEnum["Table"] = "TABLE";
    BlockNameEnum["Ul"] = "UL";
})(BlockNameEnum = exports.BlockNameEnum || (exports.BlockNameEnum = {}));
/** Options for ordering the connection by */
var TermObjectsConnectionOrderbyEnum;
(function (TermObjectsConnectionOrderbyEnum) {
    TermObjectsConnectionOrderbyEnum["Count"] = "COUNT";
    TermObjectsConnectionOrderbyEnum["Description"] = "DESCRIPTION";
    TermObjectsConnectionOrderbyEnum["Name"] = "NAME";
    TermObjectsConnectionOrderbyEnum["Slug"] = "SLUG";
    TermObjectsConnectionOrderbyEnum["TermGroup"] = "TERM_GROUP";
    TermObjectsConnectionOrderbyEnum["TermId"] = "TERM_ID";
    TermObjectsConnectionOrderbyEnum["TermOrder"] = "TERM_ORDER";
})(TermObjectsConnectionOrderbyEnum = exports.TermObjectsConnectionOrderbyEnum || (exports.TermObjectsConnectionOrderbyEnum = {}));
/** The format of post field data. */
var PostObjectFieldFormatEnum;
(function (PostObjectFieldFormatEnum) {
    /** Provide the field value directly from database */
    PostObjectFieldFormatEnum["Raw"] = "RAW";
    /** Apply the default WordPress rendering */
    PostObjectFieldFormatEnum["Rendered"] = "RENDERED";
})(PostObjectFieldFormatEnum = exports.PostObjectFieldFormatEnum || (exports.PostObjectFieldFormatEnum = {}));
/** Options for ordering the connection */
var CommentsConnectionOrderbyEnum;
(function (CommentsConnectionOrderbyEnum) {
    CommentsConnectionOrderbyEnum["CommentAgent"] = "COMMENT_AGENT";
    CommentsConnectionOrderbyEnum["CommentApproved"] = "COMMENT_APPROVED";
    CommentsConnectionOrderbyEnum["CommentAuthor"] = "COMMENT_AUTHOR";
    CommentsConnectionOrderbyEnum["CommentAuthorEmail"] = "COMMENT_AUTHOR_EMAIL";
    CommentsConnectionOrderbyEnum["CommentAuthorIp"] = "COMMENT_AUTHOR_IP";
    CommentsConnectionOrderbyEnum["CommentAuthorUrl"] = "COMMENT_AUTHOR_URL";
    CommentsConnectionOrderbyEnum["CommentContent"] = "COMMENT_CONTENT";
    CommentsConnectionOrderbyEnum["CommentDate"] = "COMMENT_DATE";
    CommentsConnectionOrderbyEnum["CommentDateGmt"] = "COMMENT_DATE_GMT";
    CommentsConnectionOrderbyEnum["CommentId"] = "COMMENT_ID";
    CommentsConnectionOrderbyEnum["CommentIn"] = "COMMENT_IN";
    CommentsConnectionOrderbyEnum["CommentKarma"] = "COMMENT_KARMA";
    CommentsConnectionOrderbyEnum["CommentParent"] = "COMMENT_PARENT";
    CommentsConnectionOrderbyEnum["CommentPostId"] = "COMMENT_POST_ID";
    CommentsConnectionOrderbyEnum["CommentType"] = "COMMENT_TYPE";
    CommentsConnectionOrderbyEnum["UserId"] = "USER_ID";
})(CommentsConnectionOrderbyEnum = exports.CommentsConnectionOrderbyEnum || (exports.CommentsConnectionOrderbyEnum = {}));
/** Registered menu locations */
var MenuLocationEnum;
(function (MenuLocationEnum) {
    MenuLocationEnum["About"] = "ABOUT";
    MenuLocationEnum["AuthorsWork"] = "AUTHORS_WORK";
    MenuLocationEnum["CaseStudiesCreative"] = "CASE_STUDIES_CREATIVE";
    MenuLocationEnum["ChartsAfrica"] = "CHARTS_AFRICA";
    MenuLocationEnum["ChartsIndia"] = "CHARTS_INDIA";
    MenuLocationEnum["ChartsQuartz"] = "CHARTS_QUARTZ";
    MenuLocationEnum["ClientsCreative"] = "CLIENTS_CREATIVE";
    MenuLocationEnum["FeaturedQuartz"] = "FEATURED_QUARTZ";
    MenuLocationEnum["FeaturesMarketingMembers"] = "FEATURES_MARKETING_MEMBERS";
    MenuLocationEnum["FeaturesMembers"] = "FEATURES_MEMBERS";
    MenuLocationEnum["FeaturesVideoMembers"] = "FEATURES_VIDEO_MEMBERS";
    MenuLocationEnum["Obsessions"] = "OBSESSIONS";
    MenuLocationEnum["ObsessionsAfrica"] = "OBSESSIONS_AFRICA";
    MenuLocationEnum["ObsessionsIndia"] = "OBSESSIONS_INDIA";
    MenuLocationEnum["ObsessionsQuartz"] = "OBSESSIONS_QUARTZ";
    MenuLocationEnum["ObsessionsQuartzy"] = "OBSESSIONS_QUARTZY";
    MenuLocationEnum["ObsessionsWork"] = "OBSESSIONS_WORK";
    MenuLocationEnum["PlayerVideo"] = "PLAYER_VIDEO";
    MenuLocationEnum["PremiumMembers"] = "PREMIUM_MEMBERS";
    MenuLocationEnum["ShowsVideo"] = "SHOWS_VIDEO";
    MenuLocationEnum["TopAfrica"] = "TOP_AFRICA";
    MenuLocationEnum["TopIndia"] = "TOP_INDIA";
    MenuLocationEnum["TopQuartz"] = "TOP_QUARTZ";
    MenuLocationEnum["TopQuartzy"] = "TOP_QUARTZY";
    MenuLocationEnum["TopWork"] = "TOP_WORK";
    MenuLocationEnum["VideosQuartz"] = "VIDEOS_QUARTZ";
    MenuLocationEnum["VideosQuartzy"] = "VIDEOS_QUARTZY";
})(MenuLocationEnum = exports.MenuLocationEnum || (exports.MenuLocationEnum = {}));
/** Names of available user roles */
var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum["Administrator"] = "ADMINISTRATOR";
    UserRoleEnum["Author"] = "AUTHOR";
    UserRoleEnum["Business"] = "BUSINESS";
    UserRoleEnum["Contributor"] = "CONTRIBUTOR";
    UserRoleEnum["Editor"] = "EDITOR";
    UserRoleEnum["Subscriber"] = "SUBSCRIBER";
    UserRoleEnum["VipSupport"] = "VIP_SUPPORT";
    UserRoleEnum["VipSupportInactive"] = "VIP_SUPPORT__INACTIVE_";
})(UserRoleEnum = exports.UserRoleEnum || (exports.UserRoleEnum = {}));
/** Column used for searching for users */
var UsersConnectionSearchColumnEnum;
(function (UsersConnectionSearchColumnEnum) {
    UsersConnectionSearchColumnEnum["Email"] = "EMAIL";
    UsersConnectionSearchColumnEnum["Id"] = "ID";
    UsersConnectionSearchColumnEnum["Login"] = "LOGIN";
    UsersConnectionSearchColumnEnum["Nicename"] = "NICENAME";
    UsersConnectionSearchColumnEnum["Url"] = "URL";
})(UsersConnectionSearchColumnEnum = exports.UsersConnectionSearchColumnEnum || (exports.UsersConnectionSearchColumnEnum = {}));
exports.MediaPartsFragmentDoc = client_1.gql `
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
exports.PromotionPartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}`;
exports.VideoPartsFragmentDoc = client_1.gql `
    fragment VideoParts on VideoData {
  id
  duration
  episode
  playlistId
  season
  type
}
    `;
exports.ArticleTeaserPartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}
${exports.VideoPartsFragmentDoc}`;
exports.AuthorPartsFragmentDoc = client_1.gql `
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
exports.BlockPartsFragmentDoc = client_1.gql `
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
exports.GuidePartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}`;
exports.ObsessionPartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}`;
exports.ProjectPartsFragmentDoc = client_1.gql `
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
exports.SeriesPartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}`;
exports.ShowPartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}`;
exports.ArticlePartsFragmentDoc = client_1.gql `
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
    ${exports.ArticleTeaserPartsFragmentDoc}
${exports.AuthorPartsFragmentDoc}
${exports.BlockPartsFragmentDoc}
${exports.GuidePartsFragmentDoc}
${exports.ObsessionPartsFragmentDoc}
${exports.ProjectPartsFragmentDoc}
${exports.SeriesPartsFragmentDoc}
${exports.ShowPartsFragmentDoc}`;
exports.BulletinPartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}`;
exports.NugPartsFragmentDoc = client_1.gql `
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
    ${exports.BlockPartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}
${exports.MediaPartsFragmentDoc}`;
exports.HomeCollectionPartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}
${exports.BlockPartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}
${exports.NugPartsFragmentDoc}`;
exports.TagPartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}`;
exports.TopicPartsFragmentDoc = client_1.gql `
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
    ${exports.MediaPartsFragmentDoc}`;
exports.ArticleDocument = client_1.gql `
    query Article($id: ID!) {
  post(id: $id) {
    ...ArticleParts
  }
}
    ${exports.ArticlePartsFragmentDoc}`;
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
function useArticleQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticleDocument, baseOptions);
}
exports.useArticleQuery = useArticleQuery;
function useArticleLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticleDocument, baseOptions);
}
exports.useArticleLazyQuery = useArticleLazyQuery;
exports.ArticlePreviewDocument = client_1.gql `
    query ArticlePreview($id: Int!, $time: Int!, $token: String!) {
  posts(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...ArticleParts
    }
  }
}
    ${exports.ArticlePartsFragmentDoc}`;
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
function useArticlePreviewQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticlePreviewDocument, baseOptions);
}
exports.useArticlePreviewQuery = useArticlePreviewQuery;
function useArticlePreviewLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticlePreviewDocument, baseOptions);
}
exports.useArticlePreviewLazyQuery = useArticlePreviewLazyQuery;
exports.ArticleTeaserDocument = client_1.gql `
    query ArticleTeaser($id: ID!) {
  post(id: $id) {
    ...ArticleTeaserParts
  }
}
    ${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useArticleTeaserQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticleTeaserDocument, baseOptions);
}
exports.useArticleTeaserQuery = useArticleTeaserQuery;
function useArticleTeaserLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticleTeaserDocument, baseOptions);
}
exports.useArticleTeaserLazyQuery = useArticleTeaserLazyQuery;
exports.ArticlesByGuideDocument = client_1.gql `
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
    ${exports.GuidePartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useArticlesByGuideQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticlesByGuideDocument, baseOptions);
}
exports.useArticlesByGuideQuery = useArticlesByGuideQuery;
function useArticlesByGuideLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticlesByGuideDocument, baseOptions);
}
exports.useArticlesByGuideLazyQuery = useArticlesByGuideLazyQuery;
exports.ArticlesByObsessionDocument = client_1.gql `
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
    ${exports.ObsessionPartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}
${exports.BulletinPartsFragmentDoc}
${exports.PromotionPartsFragmentDoc}`;
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
function useArticlesByObsessionQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticlesByObsessionDocument, baseOptions);
}
exports.useArticlesByObsessionQuery = useArticlesByObsessionQuery;
function useArticlesByObsessionLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticlesByObsessionDocument, baseOptions);
}
exports.useArticlesByObsessionLazyQuery = useArticlesByObsessionLazyQuery;
exports.ArticlesBySeriesDocument = client_1.gql `
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
    ${exports.SeriesPartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useArticlesBySeriesQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticlesBySeriesDocument, baseOptions);
}
exports.useArticlesBySeriesQuery = useArticlesBySeriesQuery;
function useArticlesBySeriesLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticlesBySeriesDocument, baseOptions);
}
exports.useArticlesBySeriesLazyQuery = useArticlesBySeriesLazyQuery;
exports.ArticlesByShowDocument = client_1.gql `
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
    ${exports.ShowPartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useArticlesByShowQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticlesByShowDocument, baseOptions);
}
exports.useArticlesByShowQuery = useArticlesByShowQuery;
function useArticlesByShowLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticlesByShowDocument, baseOptions);
}
exports.useArticlesByShowLazyQuery = useArticlesByShowLazyQuery;
exports.ArticlesByTagDocument = client_1.gql `
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
    ${exports.TagPartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useArticlesByTagQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticlesByTagDocument, baseOptions);
}
exports.useArticlesByTagQuery = useArticlesByTagQuery;
function useArticlesByTagLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticlesByTagDocument, baseOptions);
}
exports.useArticlesByTagLazyQuery = useArticlesByTagLazyQuery;
exports.ArticlesByTopicDocument = client_1.gql `
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
    ${exports.TopicPartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useArticlesByTopicQuery(baseOptions) {
    return Apollo.useQuery(exports.ArticlesByTopicDocument, baseOptions);
}
exports.useArticlesByTopicQuery = useArticlesByTopicQuery;
function useArticlesByTopicLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ArticlesByTopicDocument, baseOptions);
}
exports.useArticlesByTopicLazyQuery = useArticlesByTopicLazyQuery;
exports.ContentBySearchTermDocument = client_1.gql `
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
    ${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useContentBySearchTermQuery(baseOptions) {
    return Apollo.useQuery(exports.ContentBySearchTermDocument, baseOptions);
}
exports.useContentBySearchTermQuery = useContentBySearchTermQuery;
function useContentBySearchTermLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.ContentBySearchTermDocument, baseOptions);
}
exports.useContentBySearchTermLazyQuery = useContentBySearchTermLazyQuery;
exports.LatestArticlesDocument = client_1.gql `
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
    ${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useLatestArticlesQuery(baseOptions) {
    return Apollo.useQuery(exports.LatestArticlesDocument, baseOptions);
}
exports.useLatestArticlesQuery = useLatestArticlesQuery;
function useLatestArticlesLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.LatestArticlesDocument, baseOptions);
}
exports.useLatestArticlesLazyQuery = useLatestArticlesLazyQuery;
exports.DiscoverDocument = client_1.gql `
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
    ${exports.ArticleTeaserPartsFragmentDoc}
${exports.TopicPartsFragmentDoc}`;
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
function useDiscoverQuery(baseOptions) {
    return Apollo.useQuery(exports.DiscoverDocument, baseOptions);
}
exports.useDiscoverQuery = useDiscoverQuery;
function useDiscoverLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.DiscoverDocument, baseOptions);
}
exports.useDiscoverLazyQuery = useDiscoverLazyQuery;
exports.GuidesDocument = client_1.gql `
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
    ${exports.GuidePartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useGuidesQuery(baseOptions) {
    return Apollo.useQuery(exports.GuidesDocument, baseOptions);
}
exports.useGuidesQuery = useGuidesQuery;
function useGuidesLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GuidesDocument, baseOptions);
}
exports.useGuidesLazyQuery = useGuidesLazyQuery;
exports.GuidesBySlugDocument = client_1.gql `
    query GuidesBySlug($perPage: Int!, $slugs: [String]!) {
  guides(first: $perPage, where: {slug: $slugs}) {
    nodes {
      ...GuideParts
    }
  }
}
    ${exports.GuidePartsFragmentDoc}`;
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
function useGuidesBySlugQuery(baseOptions) {
    return Apollo.useQuery(exports.GuidesBySlugDocument, baseOptions);
}
exports.useGuidesBySlugQuery = useGuidesBySlugQuery;
function useGuidesBySlugLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.GuidesBySlugDocument, baseOptions);
}
exports.useGuidesBySlugLazyQuery = useGuidesBySlugLazyQuery;
exports.HomeCollectionDocument = client_1.gql `
    query HomeCollection {
  collections(first: 1, where: {tagSlugIn: ["home"]}) {
    nodes {
      ...HomeCollectionParts
    }
  }
}
    ${exports.HomeCollectionPartsFragmentDoc}`;
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
function useHomeCollectionQuery(baseOptions) {
    return Apollo.useQuery(exports.HomeCollectionDocument, baseOptions);
}
exports.useHomeCollectionQuery = useHomeCollectionQuery;
function useHomeCollectionLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.HomeCollectionDocument, baseOptions);
}
exports.useHomeCollectionLazyQuery = useHomeCollectionLazyQuery;
exports.HomeCollectionPreviewDocument = client_1.gql `
    query HomeCollectionPreview($id: Int!, $time: Int!, $token: String!) {
  collections(where: {id: $id, preview: {time: $time, token: $token}}) {
    nodes {
      ...HomeCollectionParts
    }
  }
}
    ${exports.HomeCollectionPartsFragmentDoc}`;
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
function useHomeCollectionPreviewQuery(baseOptions) {
    return Apollo.useQuery(exports.HomeCollectionPreviewDocument, baseOptions);
}
exports.useHomeCollectionPreviewQuery = useHomeCollectionPreviewQuery;
function useHomeCollectionPreviewLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.HomeCollectionPreviewDocument, baseOptions);
}
exports.useHomeCollectionPreviewLazyQuery = useHomeCollectionPreviewLazyQuery;
exports.MemberHomeDocument = client_1.gql `
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
    ${exports.TagPartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}
${exports.GuidePartsFragmentDoc}`;
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
function useMemberHomeQuery(baseOptions) {
    return Apollo.useQuery(exports.MemberHomeDocument, baseOptions);
}
exports.useMemberHomeQuery = useMemberHomeQuery;
function useMemberHomeLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.MemberHomeDocument, baseOptions);
}
exports.useMemberHomeLazyQuery = useMemberHomeLazyQuery;
exports.MemberVideoDocument = client_1.gql `
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
    ${exports.TagPartsFragmentDoc}
${exports.ArticleTeaserPartsFragmentDoc}`;
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
function useMemberVideoQuery(baseOptions) {
    return Apollo.useQuery(exports.MemberVideoDocument, baseOptions);
}
exports.useMemberVideoQuery = useMemberVideoQuery;
function useMemberVideoLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.MemberVideoDocument, baseOptions);
}
exports.useMemberVideoLazyQuery = useMemberVideoLazyQuery;
exports.VideoHubDocument = client_1.gql `
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
    ${exports.ArticleTeaserPartsFragmentDoc}
${exports.ShowPartsFragmentDoc}`;
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
function useVideoHubQuery(baseOptions) {
    return Apollo.useQuery(exports.VideoHubDocument, baseOptions);
}
exports.useVideoHubQuery = useVideoHubQuery;
function useVideoHubLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.VideoHubDocument, baseOptions);
}
exports.useVideoHubLazyQuery = useVideoHubLazyQuery;
exports.NugDocument = client_1.gql `
    query Nug($slug: String!) {
  nugBy(slug: $slug) {
    ...NugParts
  }
}
    ${exports.NugPartsFragmentDoc}`;
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
function useNugQuery(baseOptions) {
    return Apollo.useQuery(exports.NugDocument, baseOptions);
}
exports.useNugQuery = useNugQuery;
function useNugLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.NugDocument, baseOptions);
}
exports.useNugLazyQuery = useNugLazyQuery;
exports.NugsByTagDocument = client_1.gql `
    query NugsByTag($perPage: Int!, $tag: [String]!) {
  nugs(first: $perPage, where: {tagSlugIn: $tag}) {
    nodes {
      ...NugParts
    }
  }
}
    ${exports.NugPartsFragmentDoc}`;
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
function useNugsByTagQuery(baseOptions) {
    return Apollo.useQuery(exports.NugsByTagDocument, baseOptions);
}
exports.useNugsByTagQuery = useNugsByTagQuery;
function useNugsByTagLazyQuery(baseOptions) {
    return Apollo.useLazyQuery(exports.NugsByTagDocument, baseOptions);
}
exports.useNugsByTagLazyQuery = useNugsByTagLazyQuery;
//# sourceMappingURL=content.js.map
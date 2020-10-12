// @generated
//  This file was automatically generated and should not be edited.

import Apollo
import Foundation

/// Allowed content block names
public enum BlockNameEnum: RawRepresentable, Equatable, Hashable, CaseIterable, Apollo.JSONDecodable, Apollo.JSONEncodable {
  public typealias RawValue = String
  case blockquote
  case coreArchives
  case coreAudio
  case coreBlock
  case coreButton
  case coreCategories
  case coreCode
  case coreColumn
  case coreColumns
  case coreCoverImage
  case coreEmbed
  case coreEmbedAnimoto
  case coreEmbedCloudup
  case coreEmbedCollegehumor
  case coreEmbedDailymotion
  case coreEmbedFacebook
  case coreEmbedFlickr
  case coreEmbedFunnyordie
  case coreEmbedHulu
  case coreEmbedImgur
  case coreEmbedInstagram
  case coreEmbedIssuu
  case coreEmbedKickstarter
  case coreEmbedMeetupCom
  case coreEmbedMixcloud
  case coreEmbedPhotobucket
  case coreEmbedPolldaddy
  case coreEmbedReddit
  case coreEmbedReverbnation
  case coreEmbedScreencast
  case coreEmbedScribd
  case coreEmbedSlideshare
  case coreEmbedSmugmug
  case coreEmbedSoundcloud
  case coreEmbedSpeaker
  case coreEmbedSpotify
  case coreEmbedTed
  case coreEmbedTumblr
  case coreEmbedTwitter
  case coreEmbedVideopress
  case coreEmbedVimeo
  case coreEmbedWordpress
  case coreEmbedWordpressTv
  case coreEmbedYoutube
  case coreFile
  case coreFreeform
  case coreGallery
  case coreHeading
  case coreHtml
  case coreImage
  case coreLatestComments
  case coreLatestPosts
  case coreList
  case coreMore
  case coreNextpage
  case coreParagraph
  case corePreformatted
  case corePullquote
  case coreQuote
  case coreSeparator
  case coreShortcode
  case coreSpacer
  case coreSubhead
  case coreTable
  case coreTextColumns
  case coreVerse
  case coreVideo
  case el
  case embedAnimoto
  case embedApiCrowdsignalComOembed
  case embedGfycat
  case embedImgur
  case embedMeetup
  case embedScreencast
  case embedSmugmug
  case embedDatawrapper
  case embedAtlas
  case embedAudio
  case embedCloudup
  case embedCodepenIoApiOembed
  case embedEmbedGettyimagesComOembed_
  case embedSpotify
  case embedFacebookAlternate
  case embedFacebookAlternateVideo
  case embedFacebookPhoto
  case embedFacebookVideo
  case embedWistia
  case embedFlickr
  case embedGithubGist
  case embedGoogleplus
  case embedInlinePdfs
  case embedIssuu
  case embedIcloud
  case embedJetpackInstagram
  case embedJetpackInstagramAlternateFormat
  case embedMedium
  case embedQzObject
  case embedOdesliCoOembed
  case embedPinterest
  case embedPublicApiWordpressComOembed_1_0_
  case embedPublicApiWordpressComOembedForHttps_3A_2F_2FqzCom
  case embedTwitter
  case embedFacebook
  case embedVine
  case embedAmazon
  case embedServicesCartoComOembed
  case embedSketchfab
  case embedSoundcloud
  case embedSpeakerdeck
  case embedVideo
  case embedVimeo
  case embedWordpressTv
  case embedWpcomVimeoEmbedUrl
  case embedWpcomYoutubeEmbedCrazyUrl
  case embedDailymotion
  case embedDocumentcloud
  case embedWwwHouzzComOembed
  case embedKickstarter
  case embedLoom
  case embedMixcloud
  case embedReddit
  case embedReverbnation
  case embedScribd
  case embedSlideshare
  case embedSomeecards
  case embedTed
  case embedWwwTedComTalksOembedJson
  case embedTiktok
  case embedTumblr
  case embedYoutube
  case figure
  case h1
  case h2
  case h3
  case h4
  case h5
  case h6
  case hr
  case img
  case ol
  case p
  case pre
  case qzItem
  case qzPostTout
  case qzTaxonomyTerm
  case qzWifyAnswer
  case safeComment
  case shortcodeAnswer
  case shortcodeArchiveorg
  case shortcodeArchiveorgBook
  case shortcodeArchives
  case shortcodeAudio
  case shortcodeBandcamp
  case shortcodeBrightcove
  case shortcodeCaption
  case shortcodeCpiBroadbandMap
  case shortcodeCrowdsignal
  case shortcodeDailymotion
  case shortcodeDailymotionChannel
  case shortcodeEmbed
  case shortcodeEndmatter
  case shortcodeExplanation
  case shortcodeFacebook
  case shortcodeFlickr
  case shortcodeGallery
  case shortcodeGeoLocation
  case shortcodeGetty
  case shortcodeGist
  case shortcodeGoogleapps
  case shortcodeGooglemaps
  case shortcodeGoogleplus
  case shortcodeGravatar
  case shortcodeGravatarProfile
  case shortcodeHouzz
  case shortcodeHulu
  case shortcodeInstagram
  case shortcodeKickstarter
  case shortcodeLatex
  case shortcodeMailchimpSubscriberPopup
  case shortcodeMedium
  case shortcodeMixcloud
  case shortcodePlaylist
  case shortcodePolldaddy
  case shortcodePresentation
  case shortcodePromoLink
  case shortcodePullquote
  case shortcodeQuartzyAd
  case shortcodeQuartzyPs
  case shortcodeQuestion
  case shortcodeQuiz
  case shortcodeQzAtlas
  case shortcodeQzDailyBrief
  case shortcodeQzDatawrapper
  case shortcodeQzFacebookPost
  case shortcodeQzFacebookVideo
  case shortcodeQzFurtherReading
  case shortcodeQzGuidePromo
  case shortcodeQzIframe
  case shortcodeQzInlineAd
  case shortcodeQzInteractive
  case shortcodeQzRelatedStack
  case shortcodeQzSectionDivider
  case shortcodeQzTips
  case shortcodeQzTopicUpdate
  case shortcodeRecipe
  case shortcodeRecipeDirections
  case shortcodeRecipeImage
  case shortcodeRecipeIngredients
  case shortcodeRecipeNotes
  case shortcodeRecipeNutrition
  case shortcodeScribd
  case shortcodeSeriesRecirc
  case shortcodeSimplePayment
  case shortcodeSitemap
  case shortcodeSlide
  case shortcodeSlideshare
  case shortcodeSlideshow
  case shortcodeSoundcloud
  case shortcodeSpotify
  case shortcodeStorify
  case shortcodeTed
  case shortcodeTweet
  case shortcodeTwitch
  case shortcodeTwitchtv
  case shortcodeTwitterTimeline
  case shortcodeUntappdMenu
  case shortcodeUpcomingevents
  case shortcodeUstream
  case shortcodeUstreamsocial
  case shortcodeVideo
  case shortcodeVideopress
  case shortcodeVimeo
  case shortcodeVine
  case shortcodeVr
  case shortcodeWpvideo
  case shortcodeWpCaption
  case shortcodeWrong
  case shortcodeWufoo
  case shortcodeYoutube
  case table
  case ul
  /// Auto generated constant for unknown enum values
  case __unknown(RawValue)

  public init?(rawValue: RawValue) {
    switch rawValue {
      case "BLOCKQUOTE": self = .blockquote
      case "CORE_ARCHIVES": self = .coreArchives
      case "CORE_AUDIO": self = .coreAudio
      case "CORE_BLOCK": self = .coreBlock
      case "CORE_BUTTON": self = .coreButton
      case "CORE_CATEGORIES": self = .coreCategories
      case "CORE_CODE": self = .coreCode
      case "CORE_COLUMN": self = .coreColumn
      case "CORE_COLUMNS": self = .coreColumns
      case "CORE_COVER_IMAGE": self = .coreCoverImage
      case "CORE_EMBED": self = .coreEmbed
      case "CORE_EMBED_ANIMOTO": self = .coreEmbedAnimoto
      case "CORE_EMBED_CLOUDUP": self = .coreEmbedCloudup
      case "CORE_EMBED_COLLEGEHUMOR": self = .coreEmbedCollegehumor
      case "CORE_EMBED_DAILYMOTION": self = .coreEmbedDailymotion
      case "CORE_EMBED_FACEBOOK": self = .coreEmbedFacebook
      case "CORE_EMBED_FLICKR": self = .coreEmbedFlickr
      case "CORE_EMBED_FUNNYORDIE": self = .coreEmbedFunnyordie
      case "CORE_EMBED_HULU": self = .coreEmbedHulu
      case "CORE_EMBED_IMGUR": self = .coreEmbedImgur
      case "CORE_EMBED_INSTAGRAM": self = .coreEmbedInstagram
      case "CORE_EMBED_ISSUU": self = .coreEmbedIssuu
      case "CORE_EMBED_KICKSTARTER": self = .coreEmbedKickstarter
      case "CORE_EMBED_MEETUP_COM": self = .coreEmbedMeetupCom
      case "CORE_EMBED_MIXCLOUD": self = .coreEmbedMixcloud
      case "CORE_EMBED_PHOTOBUCKET": self = .coreEmbedPhotobucket
      case "CORE_EMBED_POLLDADDY": self = .coreEmbedPolldaddy
      case "CORE_EMBED_REDDIT": self = .coreEmbedReddit
      case "CORE_EMBED_REVERBNATION": self = .coreEmbedReverbnation
      case "CORE_EMBED_SCREENCAST": self = .coreEmbedScreencast
      case "CORE_EMBED_SCRIBD": self = .coreEmbedScribd
      case "CORE_EMBED_SLIDESHARE": self = .coreEmbedSlideshare
      case "CORE_EMBED_SMUGMUG": self = .coreEmbedSmugmug
      case "CORE_EMBED_SOUNDCLOUD": self = .coreEmbedSoundcloud
      case "CORE_EMBED_SPEAKER": self = .coreEmbedSpeaker
      case "CORE_EMBED_SPOTIFY": self = .coreEmbedSpotify
      case "CORE_EMBED_TED": self = .coreEmbedTed
      case "CORE_EMBED_TUMBLR": self = .coreEmbedTumblr
      case "CORE_EMBED_TWITTER": self = .coreEmbedTwitter
      case "CORE_EMBED_VIDEOPRESS": self = .coreEmbedVideopress
      case "CORE_EMBED_VIMEO": self = .coreEmbedVimeo
      case "CORE_EMBED_WORDPRESS": self = .coreEmbedWordpress
      case "CORE_EMBED_WORDPRESS_TV": self = .coreEmbedWordpressTv
      case "CORE_EMBED_YOUTUBE": self = .coreEmbedYoutube
      case "CORE_FILE": self = .coreFile
      case "CORE_FREEFORM": self = .coreFreeform
      case "CORE_GALLERY": self = .coreGallery
      case "CORE_HEADING": self = .coreHeading
      case "CORE_HTML": self = .coreHtml
      case "CORE_IMAGE": self = .coreImage
      case "CORE_LATEST_COMMENTS": self = .coreLatestComments
      case "CORE_LATEST_POSTS": self = .coreLatestPosts
      case "CORE_LIST": self = .coreList
      case "CORE_MORE": self = .coreMore
      case "CORE_NEXTPAGE": self = .coreNextpage
      case "CORE_PARAGRAPH": self = .coreParagraph
      case "CORE_PREFORMATTED": self = .corePreformatted
      case "CORE_PULLQUOTE": self = .corePullquote
      case "CORE_QUOTE": self = .coreQuote
      case "CORE_SEPARATOR": self = .coreSeparator
      case "CORE_SHORTCODE": self = .coreShortcode
      case "CORE_SPACER": self = .coreSpacer
      case "CORE_SUBHEAD": self = .coreSubhead
      case "CORE_TABLE": self = .coreTable
      case "CORE_TEXT_COLUMNS": self = .coreTextColumns
      case "CORE_VERSE": self = .coreVerse
      case "CORE_VIDEO": self = .coreVideo
      case "EL": self = .el
      case "EMBED_ANIMOTO": self = .embedAnimoto
      case "EMBED_API_CROWDSIGNAL_COM_OEMBED": self = .embedApiCrowdsignalComOembed
      case "EMBED_GFYCAT": self = .embedGfycat
      case "EMBED_IMGUR": self = .embedImgur
      case "EMBED_MEETUP": self = .embedMeetup
      case "EMBED_SCREENCAST": self = .embedScreencast
      case "EMBED_SMUGMUG": self = .embedSmugmug
      case "EMBED_DATAWRAPPER": self = .embedDatawrapper
      case "EMBED_ATLAS": self = .embedAtlas
      case "EMBED_AUDIO": self = .embedAudio
      case "EMBED_CLOUDUP": self = .embedCloudup
      case "EMBED_CODEPEN_IO_API_OEMBED": self = .embedCodepenIoApiOembed
      case "EMBED_EMBED_GETTYIMAGES_COM_OEMBED_": self = .embedEmbedGettyimagesComOembed_
      case "EMBED_SPOTIFY": self = .embedSpotify
      case "EMBED_FACEBOOK_ALTERNATE": self = .embedFacebookAlternate
      case "EMBED_FACEBOOK_ALTERNATE_VIDEO": self = .embedFacebookAlternateVideo
      case "EMBED_FACEBOOK_PHOTO": self = .embedFacebookPhoto
      case "EMBED_FACEBOOK_VIDEO": self = .embedFacebookVideo
      case "EMBED_WISTIA": self = .embedWistia
      case "EMBED_FLICKR": self = .embedFlickr
      case "EMBED_GITHUB_GIST": self = .embedGithubGist
      case "EMBED_GOOGLEPLUS": self = .embedGoogleplus
      case "EMBED_INLINE_PDFS": self = .embedInlinePdfs
      case "EMBED_ISSUU": self = .embedIssuu
      case "EMBED_ICLOUD": self = .embedIcloud
      case "EMBED_JETPACK_INSTAGRAM": self = .embedJetpackInstagram
      case "EMBED_JETPACK_INSTAGRAM_ALTERNATE_FORMAT": self = .embedJetpackInstagramAlternateFormat
      case "EMBED_MEDIUM": self = .embedMedium
      case "EMBED_QZ_OBJECT": self = .embedQzObject
      case "EMBED_ODESLI_CO_OEMBED": self = .embedOdesliCoOembed
      case "EMBED_PINTEREST": self = .embedPinterest
      case "EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED_1_0_": self = .embedPublicApiWordpressComOembed_1_0_
      case "EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED__FOR_HTTPS_3A_2F_2FQZ_COM": self = .embedPublicApiWordpressComOembedForHttps_3A_2F_2FqzCom
      case "EMBED_TWITTER": self = .embedTwitter
      case "EMBED_FACEBOOK": self = .embedFacebook
      case "EMBED_VINE": self = .embedVine
      case "EMBED_AMAZON": self = .embedAmazon
      case "EMBED_SERVICES_CARTO_COM_OEMBED": self = .embedServicesCartoComOembed
      case "EMBED_SKETCHFAB": self = .embedSketchfab
      case "EMBED_SOUNDCLOUD": self = .embedSoundcloud
      case "EMBED_SPEAKERDECK": self = .embedSpeakerdeck
      case "EMBED_VIDEO": self = .embedVideo
      case "EMBED_VIMEO": self = .embedVimeo
      case "EMBED_WORDPRESS_TV": self = .embedWordpressTv
      case "EMBED_WPCOM_VIMEO_EMBED_URL": self = .embedWpcomVimeoEmbedUrl
      case "EMBED_WPCOM_YOUTUBE_EMBED_CRAZY_URL": self = .embedWpcomYoutubeEmbedCrazyUrl
      case "EMBED_DAILYMOTION": self = .embedDailymotion
      case "EMBED_DOCUMENTCLOUD": self = .embedDocumentcloud
      case "EMBED_WWW_HOUZZ_COM_OEMBED": self = .embedWwwHouzzComOembed
      case "EMBED_KICKSTARTER": self = .embedKickstarter
      case "EMBED_LOOM": self = .embedLoom
      case "EMBED_MIXCLOUD": self = .embedMixcloud
      case "EMBED_REDDIT": self = .embedReddit
      case "EMBED_REVERBNATION": self = .embedReverbnation
      case "EMBED_SCRIBD": self = .embedScribd
      case "EMBED_SLIDESHARE": self = .embedSlideshare
      case "EMBED_SOMEECARDS": self = .embedSomeecards
      case "EMBED_TED": self = .embedTed
      case "EMBED_WWW_TED_COM_TALKS_OEMBED_JSON": self = .embedWwwTedComTalksOembedJson
      case "EMBED_TIKTOK": self = .embedTiktok
      case "EMBED_TUMBLR": self = .embedTumblr
      case "EMBED_YOUTUBE": self = .embedYoutube
      case "FIGURE": self = .figure
      case "H1": self = .h1
      case "H2": self = .h2
      case "H3": self = .h3
      case "H4": self = .h4
      case "H5": self = .h5
      case "H6": self = .h6
      case "HR": self = .hr
      case "IMG": self = .img
      case "OL": self = .ol
      case "P": self = .p
      case "PRE": self = .pre
      case "QZ_ITEM": self = .qzItem
      case "QZ_POST_TOUT": self = .qzPostTout
      case "QZ_TAXONOMY_TERM": self = .qzTaxonomyTerm
      case "QZ_WIFY_ANSWER": self = .qzWifyAnswer
      case "SAFE_COMMENT": self = .safeComment
      case "SHORTCODE_ANSWER": self = .shortcodeAnswer
      case "SHORTCODE_ARCHIVEORG": self = .shortcodeArchiveorg
      case "SHORTCODE_ARCHIVEORG_BOOK": self = .shortcodeArchiveorgBook
      case "SHORTCODE_ARCHIVES": self = .shortcodeArchives
      case "SHORTCODE_AUDIO": self = .shortcodeAudio
      case "SHORTCODE_BANDCAMP": self = .shortcodeBandcamp
      case "SHORTCODE_BRIGHTCOVE": self = .shortcodeBrightcove
      case "SHORTCODE_CAPTION": self = .shortcodeCaption
      case "SHORTCODE_CPI_BROADBAND_MAP": self = .shortcodeCpiBroadbandMap
      case "SHORTCODE_CROWDSIGNAL": self = .shortcodeCrowdsignal
      case "SHORTCODE_DAILYMOTION": self = .shortcodeDailymotion
      case "SHORTCODE_DAILYMOTION_CHANNEL": self = .shortcodeDailymotionChannel
      case "SHORTCODE_EMBED": self = .shortcodeEmbed
      case "SHORTCODE_ENDMATTER": self = .shortcodeEndmatter
      case "SHORTCODE_EXPLANATION": self = .shortcodeExplanation
      case "SHORTCODE_FACEBOOK": self = .shortcodeFacebook
      case "SHORTCODE_FLICKR": self = .shortcodeFlickr
      case "SHORTCODE_GALLERY": self = .shortcodeGallery
      case "SHORTCODE_GEO_LOCATION": self = .shortcodeGeoLocation
      case "SHORTCODE_GETTY": self = .shortcodeGetty
      case "SHORTCODE_GIST": self = .shortcodeGist
      case "SHORTCODE_GOOGLEAPPS": self = .shortcodeGoogleapps
      case "SHORTCODE_GOOGLEMAPS": self = .shortcodeGooglemaps
      case "SHORTCODE_GOOGLEPLUS": self = .shortcodeGoogleplus
      case "SHORTCODE_GRAVATAR": self = .shortcodeGravatar
      case "SHORTCODE_GRAVATAR_PROFILE": self = .shortcodeGravatarProfile
      case "SHORTCODE_HOUZZ": self = .shortcodeHouzz
      case "SHORTCODE_HULU": self = .shortcodeHulu
      case "SHORTCODE_INSTAGRAM": self = .shortcodeInstagram
      case "SHORTCODE_KICKSTARTER": self = .shortcodeKickstarter
      case "SHORTCODE_LATEX": self = .shortcodeLatex
      case "SHORTCODE_MAILCHIMP_SUBSCRIBER_POPUP": self = .shortcodeMailchimpSubscriberPopup
      case "SHORTCODE_MEDIUM": self = .shortcodeMedium
      case "SHORTCODE_MIXCLOUD": self = .shortcodeMixcloud
      case "SHORTCODE_PLAYLIST": self = .shortcodePlaylist
      case "SHORTCODE_POLLDADDY": self = .shortcodePolldaddy
      case "SHORTCODE_PRESENTATION": self = .shortcodePresentation
      case "SHORTCODE_PROMO_LINK": self = .shortcodePromoLink
      case "SHORTCODE_PULLQUOTE": self = .shortcodePullquote
      case "SHORTCODE_QUARTZY_AD": self = .shortcodeQuartzyAd
      case "SHORTCODE_QUARTZY_PS": self = .shortcodeQuartzyPs
      case "SHORTCODE_QUESTION": self = .shortcodeQuestion
      case "SHORTCODE_QUIZ": self = .shortcodeQuiz
      case "SHORTCODE_QZ_ATLAS": self = .shortcodeQzAtlas
      case "SHORTCODE_QZ_DAILY_BRIEF": self = .shortcodeQzDailyBrief
      case "SHORTCODE_QZ_DATAWRAPPER": self = .shortcodeQzDatawrapper
      case "SHORTCODE_QZ_FACEBOOK_POST": self = .shortcodeQzFacebookPost
      case "SHORTCODE_QZ_FACEBOOK_VIDEO": self = .shortcodeQzFacebookVideo
      case "SHORTCODE_QZ_FURTHER_READING": self = .shortcodeQzFurtherReading
      case "SHORTCODE_QZ_GUIDE_PROMO": self = .shortcodeQzGuidePromo
      case "SHORTCODE_QZ_IFRAME": self = .shortcodeQzIframe
      case "SHORTCODE_QZ_INLINE_AD": self = .shortcodeQzInlineAd
      case "SHORTCODE_QZ_INTERACTIVE": self = .shortcodeQzInteractive
      case "SHORTCODE_QZ_RELATED_STACK": self = .shortcodeQzRelatedStack
      case "SHORTCODE_QZ_SECTION_DIVIDER": self = .shortcodeQzSectionDivider
      case "SHORTCODE_QZ_TIPS": self = .shortcodeQzTips
      case "SHORTCODE_QZ_TOPIC_UPDATE": self = .shortcodeQzTopicUpdate
      case "SHORTCODE_RECIPE": self = .shortcodeRecipe
      case "SHORTCODE_RECIPE_DIRECTIONS": self = .shortcodeRecipeDirections
      case "SHORTCODE_RECIPE_IMAGE": self = .shortcodeRecipeImage
      case "SHORTCODE_RECIPE_INGREDIENTS": self = .shortcodeRecipeIngredients
      case "SHORTCODE_RECIPE_NOTES": self = .shortcodeRecipeNotes
      case "SHORTCODE_RECIPE_NUTRITION": self = .shortcodeRecipeNutrition
      case "SHORTCODE_SCRIBD": self = .shortcodeScribd
      case "SHORTCODE_SERIES_RECIRC": self = .shortcodeSeriesRecirc
      case "SHORTCODE_SIMPLE_PAYMENT": self = .shortcodeSimplePayment
      case "SHORTCODE_SITEMAP": self = .shortcodeSitemap
      case "SHORTCODE_SLIDE": self = .shortcodeSlide
      case "SHORTCODE_SLIDESHARE": self = .shortcodeSlideshare
      case "SHORTCODE_SLIDESHOW": self = .shortcodeSlideshow
      case "SHORTCODE_SOUNDCLOUD": self = .shortcodeSoundcloud
      case "SHORTCODE_SPOTIFY": self = .shortcodeSpotify
      case "SHORTCODE_STORIFY": self = .shortcodeStorify
      case "SHORTCODE_TED": self = .shortcodeTed
      case "SHORTCODE_TWEET": self = .shortcodeTweet
      case "SHORTCODE_TWITCH": self = .shortcodeTwitch
      case "SHORTCODE_TWITCHTV": self = .shortcodeTwitchtv
      case "SHORTCODE_TWITTER_TIMELINE": self = .shortcodeTwitterTimeline
      case "SHORTCODE_UNTAPPD_MENU": self = .shortcodeUntappdMenu
      case "SHORTCODE_UPCOMINGEVENTS": self = .shortcodeUpcomingevents
      case "SHORTCODE_USTREAM": self = .shortcodeUstream
      case "SHORTCODE_USTREAMSOCIAL": self = .shortcodeUstreamsocial
      case "SHORTCODE_VIDEO": self = .shortcodeVideo
      case "SHORTCODE_VIDEOPRESS": self = .shortcodeVideopress
      case "SHORTCODE_VIMEO": self = .shortcodeVimeo
      case "SHORTCODE_VINE": self = .shortcodeVine
      case "SHORTCODE_VR": self = .shortcodeVr
      case "SHORTCODE_WPVIDEO": self = .shortcodeWpvideo
      case "SHORTCODE_WP_CAPTION": self = .shortcodeWpCaption
      case "SHORTCODE_WRONG": self = .shortcodeWrong
      case "SHORTCODE_WUFOO": self = .shortcodeWufoo
      case "SHORTCODE_YOUTUBE": self = .shortcodeYoutube
      case "TABLE": self = .table
      case "UL": self = .ul
      default: self = .__unknown(rawValue)
    }
  }

  public var rawValue: RawValue {
    switch self {
      case .blockquote: return "BLOCKQUOTE"
      case .coreArchives: return "CORE_ARCHIVES"
      case .coreAudio: return "CORE_AUDIO"
      case .coreBlock: return "CORE_BLOCK"
      case .coreButton: return "CORE_BUTTON"
      case .coreCategories: return "CORE_CATEGORIES"
      case .coreCode: return "CORE_CODE"
      case .coreColumn: return "CORE_COLUMN"
      case .coreColumns: return "CORE_COLUMNS"
      case .coreCoverImage: return "CORE_COVER_IMAGE"
      case .coreEmbed: return "CORE_EMBED"
      case .coreEmbedAnimoto: return "CORE_EMBED_ANIMOTO"
      case .coreEmbedCloudup: return "CORE_EMBED_CLOUDUP"
      case .coreEmbedCollegehumor: return "CORE_EMBED_COLLEGEHUMOR"
      case .coreEmbedDailymotion: return "CORE_EMBED_DAILYMOTION"
      case .coreEmbedFacebook: return "CORE_EMBED_FACEBOOK"
      case .coreEmbedFlickr: return "CORE_EMBED_FLICKR"
      case .coreEmbedFunnyordie: return "CORE_EMBED_FUNNYORDIE"
      case .coreEmbedHulu: return "CORE_EMBED_HULU"
      case .coreEmbedImgur: return "CORE_EMBED_IMGUR"
      case .coreEmbedInstagram: return "CORE_EMBED_INSTAGRAM"
      case .coreEmbedIssuu: return "CORE_EMBED_ISSUU"
      case .coreEmbedKickstarter: return "CORE_EMBED_KICKSTARTER"
      case .coreEmbedMeetupCom: return "CORE_EMBED_MEETUP_COM"
      case .coreEmbedMixcloud: return "CORE_EMBED_MIXCLOUD"
      case .coreEmbedPhotobucket: return "CORE_EMBED_PHOTOBUCKET"
      case .coreEmbedPolldaddy: return "CORE_EMBED_POLLDADDY"
      case .coreEmbedReddit: return "CORE_EMBED_REDDIT"
      case .coreEmbedReverbnation: return "CORE_EMBED_REVERBNATION"
      case .coreEmbedScreencast: return "CORE_EMBED_SCREENCAST"
      case .coreEmbedScribd: return "CORE_EMBED_SCRIBD"
      case .coreEmbedSlideshare: return "CORE_EMBED_SLIDESHARE"
      case .coreEmbedSmugmug: return "CORE_EMBED_SMUGMUG"
      case .coreEmbedSoundcloud: return "CORE_EMBED_SOUNDCLOUD"
      case .coreEmbedSpeaker: return "CORE_EMBED_SPEAKER"
      case .coreEmbedSpotify: return "CORE_EMBED_SPOTIFY"
      case .coreEmbedTed: return "CORE_EMBED_TED"
      case .coreEmbedTumblr: return "CORE_EMBED_TUMBLR"
      case .coreEmbedTwitter: return "CORE_EMBED_TWITTER"
      case .coreEmbedVideopress: return "CORE_EMBED_VIDEOPRESS"
      case .coreEmbedVimeo: return "CORE_EMBED_VIMEO"
      case .coreEmbedWordpress: return "CORE_EMBED_WORDPRESS"
      case .coreEmbedWordpressTv: return "CORE_EMBED_WORDPRESS_TV"
      case .coreEmbedYoutube: return "CORE_EMBED_YOUTUBE"
      case .coreFile: return "CORE_FILE"
      case .coreFreeform: return "CORE_FREEFORM"
      case .coreGallery: return "CORE_GALLERY"
      case .coreHeading: return "CORE_HEADING"
      case .coreHtml: return "CORE_HTML"
      case .coreImage: return "CORE_IMAGE"
      case .coreLatestComments: return "CORE_LATEST_COMMENTS"
      case .coreLatestPosts: return "CORE_LATEST_POSTS"
      case .coreList: return "CORE_LIST"
      case .coreMore: return "CORE_MORE"
      case .coreNextpage: return "CORE_NEXTPAGE"
      case .coreParagraph: return "CORE_PARAGRAPH"
      case .corePreformatted: return "CORE_PREFORMATTED"
      case .corePullquote: return "CORE_PULLQUOTE"
      case .coreQuote: return "CORE_QUOTE"
      case .coreSeparator: return "CORE_SEPARATOR"
      case .coreShortcode: return "CORE_SHORTCODE"
      case .coreSpacer: return "CORE_SPACER"
      case .coreSubhead: return "CORE_SUBHEAD"
      case .coreTable: return "CORE_TABLE"
      case .coreTextColumns: return "CORE_TEXT_COLUMNS"
      case .coreVerse: return "CORE_VERSE"
      case .coreVideo: return "CORE_VIDEO"
      case .el: return "EL"
      case .embedAnimoto: return "EMBED_ANIMOTO"
      case .embedApiCrowdsignalComOembed: return "EMBED_API_CROWDSIGNAL_COM_OEMBED"
      case .embedGfycat: return "EMBED_GFYCAT"
      case .embedImgur: return "EMBED_IMGUR"
      case .embedMeetup: return "EMBED_MEETUP"
      case .embedScreencast: return "EMBED_SCREENCAST"
      case .embedSmugmug: return "EMBED_SMUGMUG"
      case .embedDatawrapper: return "EMBED_DATAWRAPPER"
      case .embedAtlas: return "EMBED_ATLAS"
      case .embedAudio: return "EMBED_AUDIO"
      case .embedCloudup: return "EMBED_CLOUDUP"
      case .embedCodepenIoApiOembed: return "EMBED_CODEPEN_IO_API_OEMBED"
      case .embedEmbedGettyimagesComOembed_: return "EMBED_EMBED_GETTYIMAGES_COM_OEMBED_"
      case .embedSpotify: return "EMBED_SPOTIFY"
      case .embedFacebookAlternate: return "EMBED_FACEBOOK_ALTERNATE"
      case .embedFacebookAlternateVideo: return "EMBED_FACEBOOK_ALTERNATE_VIDEO"
      case .embedFacebookPhoto: return "EMBED_FACEBOOK_PHOTO"
      case .embedFacebookVideo: return "EMBED_FACEBOOK_VIDEO"
      case .embedWistia: return "EMBED_WISTIA"
      case .embedFlickr: return "EMBED_FLICKR"
      case .embedGithubGist: return "EMBED_GITHUB_GIST"
      case .embedGoogleplus: return "EMBED_GOOGLEPLUS"
      case .embedInlinePdfs: return "EMBED_INLINE_PDFS"
      case .embedIssuu: return "EMBED_ISSUU"
      case .embedIcloud: return "EMBED_ICLOUD"
      case .embedJetpackInstagram: return "EMBED_JETPACK_INSTAGRAM"
      case .embedJetpackInstagramAlternateFormat: return "EMBED_JETPACK_INSTAGRAM_ALTERNATE_FORMAT"
      case .embedMedium: return "EMBED_MEDIUM"
      case .embedQzObject: return "EMBED_QZ_OBJECT"
      case .embedOdesliCoOembed: return "EMBED_ODESLI_CO_OEMBED"
      case .embedPinterest: return "EMBED_PINTEREST"
      case .embedPublicApiWordpressComOembed_1_0_: return "EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED_1_0_"
      case .embedPublicApiWordpressComOembedForHttps_3A_2F_2FqzCom: return "EMBED_PUBLIC_API_WORDPRESS_COM_OEMBED__FOR_HTTPS_3A_2F_2FQZ_COM"
      case .embedTwitter: return "EMBED_TWITTER"
      case .embedFacebook: return "EMBED_FACEBOOK"
      case .embedVine: return "EMBED_VINE"
      case .embedAmazon: return "EMBED_AMAZON"
      case .embedServicesCartoComOembed: return "EMBED_SERVICES_CARTO_COM_OEMBED"
      case .embedSketchfab: return "EMBED_SKETCHFAB"
      case .embedSoundcloud: return "EMBED_SOUNDCLOUD"
      case .embedSpeakerdeck: return "EMBED_SPEAKERDECK"
      case .embedVideo: return "EMBED_VIDEO"
      case .embedVimeo: return "EMBED_VIMEO"
      case .embedWordpressTv: return "EMBED_WORDPRESS_TV"
      case .embedWpcomVimeoEmbedUrl: return "EMBED_WPCOM_VIMEO_EMBED_URL"
      case .embedWpcomYoutubeEmbedCrazyUrl: return "EMBED_WPCOM_YOUTUBE_EMBED_CRAZY_URL"
      case .embedDailymotion: return "EMBED_DAILYMOTION"
      case .embedDocumentcloud: return "EMBED_DOCUMENTCLOUD"
      case .embedWwwHouzzComOembed: return "EMBED_WWW_HOUZZ_COM_OEMBED"
      case .embedKickstarter: return "EMBED_KICKSTARTER"
      case .embedLoom: return "EMBED_LOOM"
      case .embedMixcloud: return "EMBED_MIXCLOUD"
      case .embedReddit: return "EMBED_REDDIT"
      case .embedReverbnation: return "EMBED_REVERBNATION"
      case .embedScribd: return "EMBED_SCRIBD"
      case .embedSlideshare: return "EMBED_SLIDESHARE"
      case .embedSomeecards: return "EMBED_SOMEECARDS"
      case .embedTed: return "EMBED_TED"
      case .embedWwwTedComTalksOembedJson: return "EMBED_WWW_TED_COM_TALKS_OEMBED_JSON"
      case .embedTiktok: return "EMBED_TIKTOK"
      case .embedTumblr: return "EMBED_TUMBLR"
      case .embedYoutube: return "EMBED_YOUTUBE"
      case .figure: return "FIGURE"
      case .h1: return "H1"
      case .h2: return "H2"
      case .h3: return "H3"
      case .h4: return "H4"
      case .h5: return "H5"
      case .h6: return "H6"
      case .hr: return "HR"
      case .img: return "IMG"
      case .ol: return "OL"
      case .p: return "P"
      case .pre: return "PRE"
      case .qzItem: return "QZ_ITEM"
      case .qzPostTout: return "QZ_POST_TOUT"
      case .qzTaxonomyTerm: return "QZ_TAXONOMY_TERM"
      case .qzWifyAnswer: return "QZ_WIFY_ANSWER"
      case .safeComment: return "SAFE_COMMENT"
      case .shortcodeAnswer: return "SHORTCODE_ANSWER"
      case .shortcodeArchiveorg: return "SHORTCODE_ARCHIVEORG"
      case .shortcodeArchiveorgBook: return "SHORTCODE_ARCHIVEORG_BOOK"
      case .shortcodeArchives: return "SHORTCODE_ARCHIVES"
      case .shortcodeAudio: return "SHORTCODE_AUDIO"
      case .shortcodeBandcamp: return "SHORTCODE_BANDCAMP"
      case .shortcodeBrightcove: return "SHORTCODE_BRIGHTCOVE"
      case .shortcodeCaption: return "SHORTCODE_CAPTION"
      case .shortcodeCpiBroadbandMap: return "SHORTCODE_CPI_BROADBAND_MAP"
      case .shortcodeCrowdsignal: return "SHORTCODE_CROWDSIGNAL"
      case .shortcodeDailymotion: return "SHORTCODE_DAILYMOTION"
      case .shortcodeDailymotionChannel: return "SHORTCODE_DAILYMOTION_CHANNEL"
      case .shortcodeEmbed: return "SHORTCODE_EMBED"
      case .shortcodeEndmatter: return "SHORTCODE_ENDMATTER"
      case .shortcodeExplanation: return "SHORTCODE_EXPLANATION"
      case .shortcodeFacebook: return "SHORTCODE_FACEBOOK"
      case .shortcodeFlickr: return "SHORTCODE_FLICKR"
      case .shortcodeGallery: return "SHORTCODE_GALLERY"
      case .shortcodeGeoLocation: return "SHORTCODE_GEO_LOCATION"
      case .shortcodeGetty: return "SHORTCODE_GETTY"
      case .shortcodeGist: return "SHORTCODE_GIST"
      case .shortcodeGoogleapps: return "SHORTCODE_GOOGLEAPPS"
      case .shortcodeGooglemaps: return "SHORTCODE_GOOGLEMAPS"
      case .shortcodeGoogleplus: return "SHORTCODE_GOOGLEPLUS"
      case .shortcodeGravatar: return "SHORTCODE_GRAVATAR"
      case .shortcodeGravatarProfile: return "SHORTCODE_GRAVATAR_PROFILE"
      case .shortcodeHouzz: return "SHORTCODE_HOUZZ"
      case .shortcodeHulu: return "SHORTCODE_HULU"
      case .shortcodeInstagram: return "SHORTCODE_INSTAGRAM"
      case .shortcodeKickstarter: return "SHORTCODE_KICKSTARTER"
      case .shortcodeLatex: return "SHORTCODE_LATEX"
      case .shortcodeMailchimpSubscriberPopup: return "SHORTCODE_MAILCHIMP_SUBSCRIBER_POPUP"
      case .shortcodeMedium: return "SHORTCODE_MEDIUM"
      case .shortcodeMixcloud: return "SHORTCODE_MIXCLOUD"
      case .shortcodePlaylist: return "SHORTCODE_PLAYLIST"
      case .shortcodePolldaddy: return "SHORTCODE_POLLDADDY"
      case .shortcodePresentation: return "SHORTCODE_PRESENTATION"
      case .shortcodePromoLink: return "SHORTCODE_PROMO_LINK"
      case .shortcodePullquote: return "SHORTCODE_PULLQUOTE"
      case .shortcodeQuartzyAd: return "SHORTCODE_QUARTZY_AD"
      case .shortcodeQuartzyPs: return "SHORTCODE_QUARTZY_PS"
      case .shortcodeQuestion: return "SHORTCODE_QUESTION"
      case .shortcodeQuiz: return "SHORTCODE_QUIZ"
      case .shortcodeQzAtlas: return "SHORTCODE_QZ_ATLAS"
      case .shortcodeQzDailyBrief: return "SHORTCODE_QZ_DAILY_BRIEF"
      case .shortcodeQzDatawrapper: return "SHORTCODE_QZ_DATAWRAPPER"
      case .shortcodeQzFacebookPost: return "SHORTCODE_QZ_FACEBOOK_POST"
      case .shortcodeQzFacebookVideo: return "SHORTCODE_QZ_FACEBOOK_VIDEO"
      case .shortcodeQzFurtherReading: return "SHORTCODE_QZ_FURTHER_READING"
      case .shortcodeQzGuidePromo: return "SHORTCODE_QZ_GUIDE_PROMO"
      case .shortcodeQzIframe: return "SHORTCODE_QZ_IFRAME"
      case .shortcodeQzInlineAd: return "SHORTCODE_QZ_INLINE_AD"
      case .shortcodeQzInteractive: return "SHORTCODE_QZ_INTERACTIVE"
      case .shortcodeQzRelatedStack: return "SHORTCODE_QZ_RELATED_STACK"
      case .shortcodeQzSectionDivider: return "SHORTCODE_QZ_SECTION_DIVIDER"
      case .shortcodeQzTips: return "SHORTCODE_QZ_TIPS"
      case .shortcodeQzTopicUpdate: return "SHORTCODE_QZ_TOPIC_UPDATE"
      case .shortcodeRecipe: return "SHORTCODE_RECIPE"
      case .shortcodeRecipeDirections: return "SHORTCODE_RECIPE_DIRECTIONS"
      case .shortcodeRecipeImage: return "SHORTCODE_RECIPE_IMAGE"
      case .shortcodeRecipeIngredients: return "SHORTCODE_RECIPE_INGREDIENTS"
      case .shortcodeRecipeNotes: return "SHORTCODE_RECIPE_NOTES"
      case .shortcodeRecipeNutrition: return "SHORTCODE_RECIPE_NUTRITION"
      case .shortcodeScribd: return "SHORTCODE_SCRIBD"
      case .shortcodeSeriesRecirc: return "SHORTCODE_SERIES_RECIRC"
      case .shortcodeSimplePayment: return "SHORTCODE_SIMPLE_PAYMENT"
      case .shortcodeSitemap: return "SHORTCODE_SITEMAP"
      case .shortcodeSlide: return "SHORTCODE_SLIDE"
      case .shortcodeSlideshare: return "SHORTCODE_SLIDESHARE"
      case .shortcodeSlideshow: return "SHORTCODE_SLIDESHOW"
      case .shortcodeSoundcloud: return "SHORTCODE_SOUNDCLOUD"
      case .shortcodeSpotify: return "SHORTCODE_SPOTIFY"
      case .shortcodeStorify: return "SHORTCODE_STORIFY"
      case .shortcodeTed: return "SHORTCODE_TED"
      case .shortcodeTweet: return "SHORTCODE_TWEET"
      case .shortcodeTwitch: return "SHORTCODE_TWITCH"
      case .shortcodeTwitchtv: return "SHORTCODE_TWITCHTV"
      case .shortcodeTwitterTimeline: return "SHORTCODE_TWITTER_TIMELINE"
      case .shortcodeUntappdMenu: return "SHORTCODE_UNTAPPD_MENU"
      case .shortcodeUpcomingevents: return "SHORTCODE_UPCOMINGEVENTS"
      case .shortcodeUstream: return "SHORTCODE_USTREAM"
      case .shortcodeUstreamsocial: return "SHORTCODE_USTREAMSOCIAL"
      case .shortcodeVideo: return "SHORTCODE_VIDEO"
      case .shortcodeVideopress: return "SHORTCODE_VIDEOPRESS"
      case .shortcodeVimeo: return "SHORTCODE_VIMEO"
      case .shortcodeVine: return "SHORTCODE_VINE"
      case .shortcodeVr: return "SHORTCODE_VR"
      case .shortcodeWpvideo: return "SHORTCODE_WPVIDEO"
      case .shortcodeWpCaption: return "SHORTCODE_WP_CAPTION"
      case .shortcodeWrong: return "SHORTCODE_WRONG"
      case .shortcodeWufoo: return "SHORTCODE_WUFOO"
      case .shortcodeYoutube: return "SHORTCODE_YOUTUBE"
      case .table: return "TABLE"
      case .ul: return "UL"
      case .__unknown(let value): return value
    }
  }

  public static func == (lhs: BlockNameEnum, rhs: BlockNameEnum) -> Bool {
    switch (lhs, rhs) {
      case (.blockquote, .blockquote): return true
      case (.coreArchives, .coreArchives): return true
      case (.coreAudio, .coreAudio): return true
      case (.coreBlock, .coreBlock): return true
      case (.coreButton, .coreButton): return true
      case (.coreCategories, .coreCategories): return true
      case (.coreCode, .coreCode): return true
      case (.coreColumn, .coreColumn): return true
      case (.coreColumns, .coreColumns): return true
      case (.coreCoverImage, .coreCoverImage): return true
      case (.coreEmbed, .coreEmbed): return true
      case (.coreEmbedAnimoto, .coreEmbedAnimoto): return true
      case (.coreEmbedCloudup, .coreEmbedCloudup): return true
      case (.coreEmbedCollegehumor, .coreEmbedCollegehumor): return true
      case (.coreEmbedDailymotion, .coreEmbedDailymotion): return true
      case (.coreEmbedFacebook, .coreEmbedFacebook): return true
      case (.coreEmbedFlickr, .coreEmbedFlickr): return true
      case (.coreEmbedFunnyordie, .coreEmbedFunnyordie): return true
      case (.coreEmbedHulu, .coreEmbedHulu): return true
      case (.coreEmbedImgur, .coreEmbedImgur): return true
      case (.coreEmbedInstagram, .coreEmbedInstagram): return true
      case (.coreEmbedIssuu, .coreEmbedIssuu): return true
      case (.coreEmbedKickstarter, .coreEmbedKickstarter): return true
      case (.coreEmbedMeetupCom, .coreEmbedMeetupCom): return true
      case (.coreEmbedMixcloud, .coreEmbedMixcloud): return true
      case (.coreEmbedPhotobucket, .coreEmbedPhotobucket): return true
      case (.coreEmbedPolldaddy, .coreEmbedPolldaddy): return true
      case (.coreEmbedReddit, .coreEmbedReddit): return true
      case (.coreEmbedReverbnation, .coreEmbedReverbnation): return true
      case (.coreEmbedScreencast, .coreEmbedScreencast): return true
      case (.coreEmbedScribd, .coreEmbedScribd): return true
      case (.coreEmbedSlideshare, .coreEmbedSlideshare): return true
      case (.coreEmbedSmugmug, .coreEmbedSmugmug): return true
      case (.coreEmbedSoundcloud, .coreEmbedSoundcloud): return true
      case (.coreEmbedSpeaker, .coreEmbedSpeaker): return true
      case (.coreEmbedSpotify, .coreEmbedSpotify): return true
      case (.coreEmbedTed, .coreEmbedTed): return true
      case (.coreEmbedTumblr, .coreEmbedTumblr): return true
      case (.coreEmbedTwitter, .coreEmbedTwitter): return true
      case (.coreEmbedVideopress, .coreEmbedVideopress): return true
      case (.coreEmbedVimeo, .coreEmbedVimeo): return true
      case (.coreEmbedWordpress, .coreEmbedWordpress): return true
      case (.coreEmbedWordpressTv, .coreEmbedWordpressTv): return true
      case (.coreEmbedYoutube, .coreEmbedYoutube): return true
      case (.coreFile, .coreFile): return true
      case (.coreFreeform, .coreFreeform): return true
      case (.coreGallery, .coreGallery): return true
      case (.coreHeading, .coreHeading): return true
      case (.coreHtml, .coreHtml): return true
      case (.coreImage, .coreImage): return true
      case (.coreLatestComments, .coreLatestComments): return true
      case (.coreLatestPosts, .coreLatestPosts): return true
      case (.coreList, .coreList): return true
      case (.coreMore, .coreMore): return true
      case (.coreNextpage, .coreNextpage): return true
      case (.coreParagraph, .coreParagraph): return true
      case (.corePreformatted, .corePreformatted): return true
      case (.corePullquote, .corePullquote): return true
      case (.coreQuote, .coreQuote): return true
      case (.coreSeparator, .coreSeparator): return true
      case (.coreShortcode, .coreShortcode): return true
      case (.coreSpacer, .coreSpacer): return true
      case (.coreSubhead, .coreSubhead): return true
      case (.coreTable, .coreTable): return true
      case (.coreTextColumns, .coreTextColumns): return true
      case (.coreVerse, .coreVerse): return true
      case (.coreVideo, .coreVideo): return true
      case (.el, .el): return true
      case (.embedAnimoto, .embedAnimoto): return true
      case (.embedApiCrowdsignalComOembed, .embedApiCrowdsignalComOembed): return true
      case (.embedGfycat, .embedGfycat): return true
      case (.embedImgur, .embedImgur): return true
      case (.embedMeetup, .embedMeetup): return true
      case (.embedScreencast, .embedScreencast): return true
      case (.embedSmugmug, .embedSmugmug): return true
      case (.embedDatawrapper, .embedDatawrapper): return true
      case (.embedAtlas, .embedAtlas): return true
      case (.embedAudio, .embedAudio): return true
      case (.embedCloudup, .embedCloudup): return true
      case (.embedCodepenIoApiOembed, .embedCodepenIoApiOembed): return true
      case (.embedEmbedGettyimagesComOembed_, .embedEmbedGettyimagesComOembed_): return true
      case (.embedSpotify, .embedSpotify): return true
      case (.embedFacebookAlternate, .embedFacebookAlternate): return true
      case (.embedFacebookAlternateVideo, .embedFacebookAlternateVideo): return true
      case (.embedFacebookPhoto, .embedFacebookPhoto): return true
      case (.embedFacebookVideo, .embedFacebookVideo): return true
      case (.embedWistia, .embedWistia): return true
      case (.embedFlickr, .embedFlickr): return true
      case (.embedGithubGist, .embedGithubGist): return true
      case (.embedGoogleplus, .embedGoogleplus): return true
      case (.embedInlinePdfs, .embedInlinePdfs): return true
      case (.embedIssuu, .embedIssuu): return true
      case (.embedIcloud, .embedIcloud): return true
      case (.embedJetpackInstagram, .embedJetpackInstagram): return true
      case (.embedJetpackInstagramAlternateFormat, .embedJetpackInstagramAlternateFormat): return true
      case (.embedMedium, .embedMedium): return true
      case (.embedQzObject, .embedQzObject): return true
      case (.embedOdesliCoOembed, .embedOdesliCoOembed): return true
      case (.embedPinterest, .embedPinterest): return true
      case (.embedPublicApiWordpressComOembed_1_0_, .embedPublicApiWordpressComOembed_1_0_): return true
      case (.embedPublicApiWordpressComOembedForHttps_3A_2F_2FqzCom, .embedPublicApiWordpressComOembedForHttps_3A_2F_2FqzCom): return true
      case (.embedTwitter, .embedTwitter): return true
      case (.embedFacebook, .embedFacebook): return true
      case (.embedVine, .embedVine): return true
      case (.embedAmazon, .embedAmazon): return true
      case (.embedServicesCartoComOembed, .embedServicesCartoComOembed): return true
      case (.embedSketchfab, .embedSketchfab): return true
      case (.embedSoundcloud, .embedSoundcloud): return true
      case (.embedSpeakerdeck, .embedSpeakerdeck): return true
      case (.embedVideo, .embedVideo): return true
      case (.embedVimeo, .embedVimeo): return true
      case (.embedWordpressTv, .embedWordpressTv): return true
      case (.embedWpcomVimeoEmbedUrl, .embedWpcomVimeoEmbedUrl): return true
      case (.embedWpcomYoutubeEmbedCrazyUrl, .embedWpcomYoutubeEmbedCrazyUrl): return true
      case (.embedDailymotion, .embedDailymotion): return true
      case (.embedDocumentcloud, .embedDocumentcloud): return true
      case (.embedWwwHouzzComOembed, .embedWwwHouzzComOembed): return true
      case (.embedKickstarter, .embedKickstarter): return true
      case (.embedLoom, .embedLoom): return true
      case (.embedMixcloud, .embedMixcloud): return true
      case (.embedReddit, .embedReddit): return true
      case (.embedReverbnation, .embedReverbnation): return true
      case (.embedScribd, .embedScribd): return true
      case (.embedSlideshare, .embedSlideshare): return true
      case (.embedSomeecards, .embedSomeecards): return true
      case (.embedTed, .embedTed): return true
      case (.embedWwwTedComTalksOembedJson, .embedWwwTedComTalksOembedJson): return true
      case (.embedTiktok, .embedTiktok): return true
      case (.embedTumblr, .embedTumblr): return true
      case (.embedYoutube, .embedYoutube): return true
      case (.figure, .figure): return true
      case (.h1, .h1): return true
      case (.h2, .h2): return true
      case (.h3, .h3): return true
      case (.h4, .h4): return true
      case (.h5, .h5): return true
      case (.h6, .h6): return true
      case (.hr, .hr): return true
      case (.img, .img): return true
      case (.ol, .ol): return true
      case (.p, .p): return true
      case (.pre, .pre): return true
      case (.qzItem, .qzItem): return true
      case (.qzPostTout, .qzPostTout): return true
      case (.qzTaxonomyTerm, .qzTaxonomyTerm): return true
      case (.qzWifyAnswer, .qzWifyAnswer): return true
      case (.safeComment, .safeComment): return true
      case (.shortcodeAnswer, .shortcodeAnswer): return true
      case (.shortcodeArchiveorg, .shortcodeArchiveorg): return true
      case (.shortcodeArchiveorgBook, .shortcodeArchiveorgBook): return true
      case (.shortcodeArchives, .shortcodeArchives): return true
      case (.shortcodeAudio, .shortcodeAudio): return true
      case (.shortcodeBandcamp, .shortcodeBandcamp): return true
      case (.shortcodeBrightcove, .shortcodeBrightcove): return true
      case (.shortcodeCaption, .shortcodeCaption): return true
      case (.shortcodeCpiBroadbandMap, .shortcodeCpiBroadbandMap): return true
      case (.shortcodeCrowdsignal, .shortcodeCrowdsignal): return true
      case (.shortcodeDailymotion, .shortcodeDailymotion): return true
      case (.shortcodeDailymotionChannel, .shortcodeDailymotionChannel): return true
      case (.shortcodeEmbed, .shortcodeEmbed): return true
      case (.shortcodeEndmatter, .shortcodeEndmatter): return true
      case (.shortcodeExplanation, .shortcodeExplanation): return true
      case (.shortcodeFacebook, .shortcodeFacebook): return true
      case (.shortcodeFlickr, .shortcodeFlickr): return true
      case (.shortcodeGallery, .shortcodeGallery): return true
      case (.shortcodeGeoLocation, .shortcodeGeoLocation): return true
      case (.shortcodeGetty, .shortcodeGetty): return true
      case (.shortcodeGist, .shortcodeGist): return true
      case (.shortcodeGoogleapps, .shortcodeGoogleapps): return true
      case (.shortcodeGooglemaps, .shortcodeGooglemaps): return true
      case (.shortcodeGoogleplus, .shortcodeGoogleplus): return true
      case (.shortcodeGravatar, .shortcodeGravatar): return true
      case (.shortcodeGravatarProfile, .shortcodeGravatarProfile): return true
      case (.shortcodeHouzz, .shortcodeHouzz): return true
      case (.shortcodeHulu, .shortcodeHulu): return true
      case (.shortcodeInstagram, .shortcodeInstagram): return true
      case (.shortcodeKickstarter, .shortcodeKickstarter): return true
      case (.shortcodeLatex, .shortcodeLatex): return true
      case (.shortcodeMailchimpSubscriberPopup, .shortcodeMailchimpSubscriberPopup): return true
      case (.shortcodeMedium, .shortcodeMedium): return true
      case (.shortcodeMixcloud, .shortcodeMixcloud): return true
      case (.shortcodePlaylist, .shortcodePlaylist): return true
      case (.shortcodePolldaddy, .shortcodePolldaddy): return true
      case (.shortcodePresentation, .shortcodePresentation): return true
      case (.shortcodePromoLink, .shortcodePromoLink): return true
      case (.shortcodePullquote, .shortcodePullquote): return true
      case (.shortcodeQuartzyAd, .shortcodeQuartzyAd): return true
      case (.shortcodeQuartzyPs, .shortcodeQuartzyPs): return true
      case (.shortcodeQuestion, .shortcodeQuestion): return true
      case (.shortcodeQuiz, .shortcodeQuiz): return true
      case (.shortcodeQzAtlas, .shortcodeQzAtlas): return true
      case (.shortcodeQzDailyBrief, .shortcodeQzDailyBrief): return true
      case (.shortcodeQzDatawrapper, .shortcodeQzDatawrapper): return true
      case (.shortcodeQzFacebookPost, .shortcodeQzFacebookPost): return true
      case (.shortcodeQzFacebookVideo, .shortcodeQzFacebookVideo): return true
      case (.shortcodeQzFurtherReading, .shortcodeQzFurtherReading): return true
      case (.shortcodeQzGuidePromo, .shortcodeQzGuidePromo): return true
      case (.shortcodeQzIframe, .shortcodeQzIframe): return true
      case (.shortcodeQzInlineAd, .shortcodeQzInlineAd): return true
      case (.shortcodeQzInteractive, .shortcodeQzInteractive): return true
      case (.shortcodeQzRelatedStack, .shortcodeQzRelatedStack): return true
      case (.shortcodeQzSectionDivider, .shortcodeQzSectionDivider): return true
      case (.shortcodeQzTips, .shortcodeQzTips): return true
      case (.shortcodeQzTopicUpdate, .shortcodeQzTopicUpdate): return true
      case (.shortcodeRecipe, .shortcodeRecipe): return true
      case (.shortcodeRecipeDirections, .shortcodeRecipeDirections): return true
      case (.shortcodeRecipeImage, .shortcodeRecipeImage): return true
      case (.shortcodeRecipeIngredients, .shortcodeRecipeIngredients): return true
      case (.shortcodeRecipeNotes, .shortcodeRecipeNotes): return true
      case (.shortcodeRecipeNutrition, .shortcodeRecipeNutrition): return true
      case (.shortcodeScribd, .shortcodeScribd): return true
      case (.shortcodeSeriesRecirc, .shortcodeSeriesRecirc): return true
      case (.shortcodeSimplePayment, .shortcodeSimplePayment): return true
      case (.shortcodeSitemap, .shortcodeSitemap): return true
      case (.shortcodeSlide, .shortcodeSlide): return true
      case (.shortcodeSlideshare, .shortcodeSlideshare): return true
      case (.shortcodeSlideshow, .shortcodeSlideshow): return true
      case (.shortcodeSoundcloud, .shortcodeSoundcloud): return true
      case (.shortcodeSpotify, .shortcodeSpotify): return true
      case (.shortcodeStorify, .shortcodeStorify): return true
      case (.shortcodeTed, .shortcodeTed): return true
      case (.shortcodeTweet, .shortcodeTweet): return true
      case (.shortcodeTwitch, .shortcodeTwitch): return true
      case (.shortcodeTwitchtv, .shortcodeTwitchtv): return true
      case (.shortcodeTwitterTimeline, .shortcodeTwitterTimeline): return true
      case (.shortcodeUntappdMenu, .shortcodeUntappdMenu): return true
      case (.shortcodeUpcomingevents, .shortcodeUpcomingevents): return true
      case (.shortcodeUstream, .shortcodeUstream): return true
      case (.shortcodeUstreamsocial, .shortcodeUstreamsocial): return true
      case (.shortcodeVideo, .shortcodeVideo): return true
      case (.shortcodeVideopress, .shortcodeVideopress): return true
      case (.shortcodeVimeo, .shortcodeVimeo): return true
      case (.shortcodeVine, .shortcodeVine): return true
      case (.shortcodeVr, .shortcodeVr): return true
      case (.shortcodeWpvideo, .shortcodeWpvideo): return true
      case (.shortcodeWpCaption, .shortcodeWpCaption): return true
      case (.shortcodeWrong, .shortcodeWrong): return true
      case (.shortcodeWufoo, .shortcodeWufoo): return true
      case (.shortcodeYoutube, .shortcodeYoutube): return true
      case (.table, .table): return true
      case (.ul, .ul): return true
      case (.__unknown(let lhsValue), .__unknown(let rhsValue)): return lhsValue == rhsValue
      default: return false
    }
  }

  public static var allCases: [BlockNameEnum] {
    return [
      .blockquote,
      .coreArchives,
      .coreAudio,
      .coreBlock,
      .coreButton,
      .coreCategories,
      .coreCode,
      .coreColumn,
      .coreColumns,
      .coreCoverImage,
      .coreEmbed,
      .coreEmbedAnimoto,
      .coreEmbedCloudup,
      .coreEmbedCollegehumor,
      .coreEmbedDailymotion,
      .coreEmbedFacebook,
      .coreEmbedFlickr,
      .coreEmbedFunnyordie,
      .coreEmbedHulu,
      .coreEmbedImgur,
      .coreEmbedInstagram,
      .coreEmbedIssuu,
      .coreEmbedKickstarter,
      .coreEmbedMeetupCom,
      .coreEmbedMixcloud,
      .coreEmbedPhotobucket,
      .coreEmbedPolldaddy,
      .coreEmbedReddit,
      .coreEmbedReverbnation,
      .coreEmbedScreencast,
      .coreEmbedScribd,
      .coreEmbedSlideshare,
      .coreEmbedSmugmug,
      .coreEmbedSoundcloud,
      .coreEmbedSpeaker,
      .coreEmbedSpotify,
      .coreEmbedTed,
      .coreEmbedTumblr,
      .coreEmbedTwitter,
      .coreEmbedVideopress,
      .coreEmbedVimeo,
      .coreEmbedWordpress,
      .coreEmbedWordpressTv,
      .coreEmbedYoutube,
      .coreFile,
      .coreFreeform,
      .coreGallery,
      .coreHeading,
      .coreHtml,
      .coreImage,
      .coreLatestComments,
      .coreLatestPosts,
      .coreList,
      .coreMore,
      .coreNextpage,
      .coreParagraph,
      .corePreformatted,
      .corePullquote,
      .coreQuote,
      .coreSeparator,
      .coreShortcode,
      .coreSpacer,
      .coreSubhead,
      .coreTable,
      .coreTextColumns,
      .coreVerse,
      .coreVideo,
      .el,
      .embedAnimoto,
      .embedApiCrowdsignalComOembed,
      .embedGfycat,
      .embedImgur,
      .embedMeetup,
      .embedScreencast,
      .embedSmugmug,
      .embedDatawrapper,
      .embedAtlas,
      .embedAudio,
      .embedCloudup,
      .embedCodepenIoApiOembed,
      .embedEmbedGettyimagesComOembed_,
      .embedSpotify,
      .embedFacebookAlternate,
      .embedFacebookAlternateVideo,
      .embedFacebookPhoto,
      .embedFacebookVideo,
      .embedWistia,
      .embedFlickr,
      .embedGithubGist,
      .embedGoogleplus,
      .embedInlinePdfs,
      .embedIssuu,
      .embedIcloud,
      .embedJetpackInstagram,
      .embedJetpackInstagramAlternateFormat,
      .embedMedium,
      .embedQzObject,
      .embedOdesliCoOembed,
      .embedPinterest,
      .embedPublicApiWordpressComOembed_1_0_,
      .embedPublicApiWordpressComOembedForHttps_3A_2F_2FqzCom,
      .embedTwitter,
      .embedFacebook,
      .embedVine,
      .embedAmazon,
      .embedServicesCartoComOembed,
      .embedSketchfab,
      .embedSoundcloud,
      .embedSpeakerdeck,
      .embedVideo,
      .embedVimeo,
      .embedWordpressTv,
      .embedWpcomVimeoEmbedUrl,
      .embedWpcomYoutubeEmbedCrazyUrl,
      .embedDailymotion,
      .embedDocumentcloud,
      .embedWwwHouzzComOembed,
      .embedKickstarter,
      .embedLoom,
      .embedMixcloud,
      .embedReddit,
      .embedReverbnation,
      .embedScribd,
      .embedSlideshare,
      .embedSomeecards,
      .embedTed,
      .embedWwwTedComTalksOembedJson,
      .embedTiktok,
      .embedTumblr,
      .embedYoutube,
      .figure,
      .h1,
      .h2,
      .h3,
      .h4,
      .h5,
      .h6,
      .hr,
      .img,
      .ol,
      .p,
      .pre,
      .qzItem,
      .qzPostTout,
      .qzTaxonomyTerm,
      .qzWifyAnswer,
      .safeComment,
      .shortcodeAnswer,
      .shortcodeArchiveorg,
      .shortcodeArchiveorgBook,
      .shortcodeArchives,
      .shortcodeAudio,
      .shortcodeBandcamp,
      .shortcodeBrightcove,
      .shortcodeCaption,
      .shortcodeCpiBroadbandMap,
      .shortcodeCrowdsignal,
      .shortcodeDailymotion,
      .shortcodeDailymotionChannel,
      .shortcodeEmbed,
      .shortcodeEndmatter,
      .shortcodeExplanation,
      .shortcodeFacebook,
      .shortcodeFlickr,
      .shortcodeGallery,
      .shortcodeGeoLocation,
      .shortcodeGetty,
      .shortcodeGist,
      .shortcodeGoogleapps,
      .shortcodeGooglemaps,
      .shortcodeGoogleplus,
      .shortcodeGravatar,
      .shortcodeGravatarProfile,
      .shortcodeHouzz,
      .shortcodeHulu,
      .shortcodeInstagram,
      .shortcodeKickstarter,
      .shortcodeLatex,
      .shortcodeMailchimpSubscriberPopup,
      .shortcodeMedium,
      .shortcodeMixcloud,
      .shortcodePlaylist,
      .shortcodePolldaddy,
      .shortcodePresentation,
      .shortcodePromoLink,
      .shortcodePullquote,
      .shortcodeQuartzyAd,
      .shortcodeQuartzyPs,
      .shortcodeQuestion,
      .shortcodeQuiz,
      .shortcodeQzAtlas,
      .shortcodeQzDailyBrief,
      .shortcodeQzDatawrapper,
      .shortcodeQzFacebookPost,
      .shortcodeQzFacebookVideo,
      .shortcodeQzFurtherReading,
      .shortcodeQzGuidePromo,
      .shortcodeQzIframe,
      .shortcodeQzInlineAd,
      .shortcodeQzInteractive,
      .shortcodeQzRelatedStack,
      .shortcodeQzSectionDivider,
      .shortcodeQzTips,
      .shortcodeQzTopicUpdate,
      .shortcodeRecipe,
      .shortcodeRecipeDirections,
      .shortcodeRecipeImage,
      .shortcodeRecipeIngredients,
      .shortcodeRecipeNotes,
      .shortcodeRecipeNutrition,
      .shortcodeScribd,
      .shortcodeSeriesRecirc,
      .shortcodeSimplePayment,
      .shortcodeSitemap,
      .shortcodeSlide,
      .shortcodeSlideshare,
      .shortcodeSlideshow,
      .shortcodeSoundcloud,
      .shortcodeSpotify,
      .shortcodeStorify,
      .shortcodeTed,
      .shortcodeTweet,
      .shortcodeTwitch,
      .shortcodeTwitchtv,
      .shortcodeTwitterTimeline,
      .shortcodeUntappdMenu,
      .shortcodeUpcomingevents,
      .shortcodeUstream,
      .shortcodeUstreamsocial,
      .shortcodeVideo,
      .shortcodeVideopress,
      .shortcodeVimeo,
      .shortcodeVine,
      .shortcodeVr,
      .shortcodeWpvideo,
      .shortcodeWpCaption,
      .shortcodeWrong,
      .shortcodeWufoo,
      .shortcodeYoutube,
      .table,
      .ul,
    ]
  }
}

public final class HomeCollectionQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query HomeCollection {
      collections(first: 1, where: {tagSlugIn: ["home"]}) {
        __typename
        nodes {
          __typename
          ...HomeCollectionParts
        }
      }
    }
    """

  public let operationName: String = "HomeCollection"

  public let operationIdentifier: String? = "2fdcf44677281005a68ccd9fe9e7fe77cf2ec1a2ee38475f8632351ad6b0d25e"

  public var queryDocument: String { return operationDefinition.appending("\n" + HomeCollectionParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + ArticleListItemParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + NugParts.fragmentDefinition) }

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("collections", arguments: ["first": 1, "where": ["tagSlugIn": ["home"]]], type: .object(Collection.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(collections: Collection? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "collections": collections.flatMap { (value: Collection) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var collections: Collection? {
      get {
        return (resultMap["collections"] as? ResultMap).flatMap { Collection(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "collections")
      }
    }

    public struct Collection: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToCollectionConnection"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("nodes", type: .list(.object(Node.selections))),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(nodes: [Node?]? = nil) {
        self.init(unsafeResultMap: ["__typename": "RootQueryToCollectionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// The nodes of the connection, without the edges
      @available(*, deprecated, message: "")
      public var nodes: [Node?]? {
        get {
          return (resultMap["nodes"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Node?] in value.map { (value: ResultMap?) -> Node? in value.flatMap { (value: ResultMap) -> Node in Node(unsafeResultMap: value) } } }
        }
        set {
          resultMap.updateValue(newValue.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, forKey: "nodes")
        }
      }

      public struct Node: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Collection"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(HomeCollectionParts.self),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        public var fragments: Fragments {
          get {
            return Fragments(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }

        public struct Fragments {
          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public var homeCollectionParts: HomeCollectionParts {
            get {
              return HomeCollectionParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }
    }
  }
}

public final class HomeCollectionPreviewQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query HomeCollectionPreview($id: Int!, $time: Int!, $token: String!) {
      collections(where: {id: $id, preview: {time: $time, token: $token}}) {
        __typename
        nodes {
          __typename
          ...HomeCollectionParts
        }
      }
    }
    """

  public let operationName: String = "HomeCollectionPreview"

  public let operationIdentifier: String? = "0a16463f8c0ac815ad2dfb5224580cecbaeda084b6513c67666e88e479814543"

  public var queryDocument: String { return operationDefinition.appending("\n" + HomeCollectionParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + ArticleListItemParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + NugParts.fragmentDefinition) }

  public var id: Int
  public var time: Int
  public var token: String

  public init(id: Int, time: Int, token: String) {
    self.id = id
    self.time = time
    self.token = token
  }

  public var variables: GraphQLMap? {
    return ["id": id, "time": time, "token": token]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("collections", arguments: ["where": ["id": GraphQLVariable("id"), "preview": ["time": GraphQLVariable("time"), "token": GraphQLVariable("token")]]], type: .object(Collection.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(collections: Collection? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "collections": collections.flatMap { (value: Collection) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var collections: Collection? {
      get {
        return (resultMap["collections"] as? ResultMap).flatMap { Collection(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "collections")
      }
    }

    public struct Collection: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToCollectionConnection"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("nodes", type: .list(.object(Node.selections))),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(nodes: [Node?]? = nil) {
        self.init(unsafeResultMap: ["__typename": "RootQueryToCollectionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// The nodes of the connection, without the edges
      @available(*, deprecated, message: "")
      public var nodes: [Node?]? {
        get {
          return (resultMap["nodes"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Node?] in value.map { (value: ResultMap?) -> Node? in value.flatMap { (value: ResultMap) -> Node in Node(unsafeResultMap: value) } } }
        }
        set {
          resultMap.updateValue(newValue.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, forKey: "nodes")
        }
      }

      public struct Node: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Collection"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(HomeCollectionParts.self),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        public var fragments: Fragments {
          get {
            return Fragments(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }

        public struct Fragments {
          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public var homeCollectionParts: HomeCollectionParts {
            get {
              return HomeCollectionParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }
    }
  }
}

public struct ArticleListItemParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment ArticleListItemParts on Post {
      __typename
      ...ArticleTeaserParts
      editions {
        __typename
        edges {
          __typename
          node {
            __typename
            name
            slug
          }
        }
      }
    }
    """

  public static let possibleTypes: [String] = ["Post"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLFragmentSpread(ArticleTeaserParts.self),
      GraphQLField("editions", type: .object(Edition.selections)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var editions: Edition? {
    get {
      return (resultMap["editions"] as? ResultMap).flatMap { Edition(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "editions")
    }
  }

  public var fragments: Fragments {
    get {
      return Fragments(unsafeResultMap: resultMap)
    }
    set {
      resultMap += newValue.resultMap
    }
  }

  public struct Fragments {
    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public var articleTeaserParts: ArticleTeaserParts {
      get {
        return ArticleTeaserParts(unsafeResultMap: resultMap)
      }
      set {
        resultMap += newValue.resultMap
      }
    }
  }

  public struct Edition: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToEditionConnection"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("edges", type: .list(.object(Edge.selections))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(edges: [Edge?]? = nil) {
      self.init(unsafeResultMap: ["__typename": "PostToEditionConnection", "edges": edges.flatMap { (value: [Edge?]) -> [ResultMap?] in value.map { (value: Edge?) -> ResultMap? in value.flatMap { (value: Edge) -> ResultMap in value.resultMap } } }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Edges for the PostToEditionConnection connection
    @available(*, deprecated, message: "")
    public var edges: [Edge?]? {
      get {
        return (resultMap["edges"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Edge?] in value.map { (value: ResultMap?) -> Edge? in value.flatMap { (value: ResultMap) -> Edge in Edge(unsafeResultMap: value) } } }
      }
      set {
        resultMap.updateValue(newValue.flatMap { (value: [Edge?]) -> [ResultMap?] in value.map { (value: Edge?) -> ResultMap? in value.flatMap { (value: Edge) -> ResultMap in value.resultMap } } }, forKey: "edges")
      }
    }

    public struct Edge: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["PostToEditionConnectionEdge"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("node", type: .object(Node.selections)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(node: Node? = nil) {
        self.init(unsafeResultMap: ["__typename": "PostToEditionConnectionEdge", "node": node.flatMap { (value: Node) -> ResultMap in value.resultMap }])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// The item at the end of the edge
      @available(*, deprecated, message: "")
      public var node: Node? {
        get {
          return (resultMap["node"] as? ResultMap).flatMap { Node(unsafeResultMap: $0) }
        }
        set {
          resultMap.updateValue(newValue?.resultMap, forKey: "node")
        }
      }

      public struct Node: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Edition"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("name", type: .scalar(String.self)),
            GraphQLField("slug", type: .scalar(String.self)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(name: String? = nil, slug: String? = nil) {
          self.init(unsafeResultMap: ["__typename": "Edition", "name": name, "slug": slug])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// The human friendly name of the object.
        @available(*, deprecated, message: "")
        public var name: String? {
          get {
            return resultMap["name"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "name")
          }
        }

        /// An alphanumeric identifier for the object unique to its type.
        @available(*, deprecated, message: "")
        public var slug: String? {
          get {
            return resultMap["slug"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "slug")
          }
        }
      }
    }
  }
}

public struct ArticleTeaserParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment ArticleTeaserParts on Post {
      __typename
      bulletin {
        __typename
        campaign {
          __typename
          id
          logo
          name
          slug
        }
        sponsor {
          __typename
          attribution
          id
          slug
          name
        }
        clientTracking {
          __typename
          article
          elsewhere
          logo
        }
      }
      dateGmt
      featuredImage {
        __typename
        ...MediaParts
      }
      flags {
        __typename
        edges {
          __typename
          node {
            __typename
            name
            slug
          }
        }
      }
      video {
        __typename
        ...VideoParts
      }
      id
      kicker
      link
      postId
      title
      video {
        __typename
        ...VideoParts
      }
      trailerVideo {
        __typename
        ...VideoParts
      }
    }
    """

  public static let possibleTypes: [String] = ["Post"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("bulletin", type: .object(Bulletin.selections)),
      GraphQLField("dateGmt", type: .scalar(String.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("flags", type: .object(Flag.selections)),
      GraphQLField("video", type: .object(Video.selections)),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("kicker", type: .scalar(String.self)),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("postId", type: .nonNull(.scalar(Int.self))),
      GraphQLField("title", type: .scalar(String.self)),
      GraphQLField("video", type: .object(Video.selections)),
      GraphQLField("trailerVideo", type: .object(TrailerVideo.selections)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(bulletin: Bulletin? = nil, dateGmt: String? = nil, featuredImage: FeaturedImage? = nil, flags: Flag? = nil, video: Video? = nil, id: GraphQLID, kicker: String? = nil, link: String? = nil, postId: Int, title: String? = nil, trailerVideo: TrailerVideo? = nil) {
    self.init(unsafeResultMap: ["__typename": "Post", "bulletin": bulletin.flatMap { (value: Bulletin) -> ResultMap in value.resultMap }, "dateGmt": dateGmt, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "flags": flags.flatMap { (value: Flag) -> ResultMap in value.resultMap }, "video": video.flatMap { (value: Video) -> ResultMap in value.resultMap }, "id": id, "kicker": kicker, "link": link, "postId": postId, "title": title, "trailerVideo": trailerVideo.flatMap { (value: TrailerVideo) -> ResultMap in value.resultMap }])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// Bulletin data
  @available(*, deprecated, message: "")
  public var bulletin: Bulletin? {
    get {
      return (resultMap["bulletin"] as? ResultMap).flatMap { Bulletin(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "bulletin")
    }
  }

  /// The publishing date set in GMT.
  @available(*, deprecated, message: "")
  public var dateGmt: String? {
    get {
      return resultMap["dateGmt"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "dateGmt")
    }
  }

  /// The featured image for the object
  @available(*, deprecated, message: "")
  public var featuredImage: FeaturedImage? {
    get {
      return (resultMap["featuredImage"] as? ResultMap).flatMap { FeaturedImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "featuredImage")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var flags: Flag? {
    get {
      return (resultMap["flags"] as? ResultMap).flatMap { Flag(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "flags")
    }
  }

  /// Video data
  @available(*, deprecated, message: "")
  public var video: Video? {
    get {
      return (resultMap["video"] as? ResultMap).flatMap { Video(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "video")
    }
  }

  /// The globally unique ID for the object
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// Article kicker
  @available(*, deprecated, message: "")
  public var kicker: String? {
    get {
      return resultMap["kicker"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "kicker")
    }
  }

  /// The permalink of the post
  @available(*, deprecated, message: "")
  public var link: String? {
    get {
      return resultMap["link"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "link")
    }
  }

  /// The id field matches the WP_Post-&gt;ID field.
  @available(*, deprecated, message: "")
  public var postId: Int {
    get {
      return resultMap["postId"]! as! Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "postId")
    }
  }

  /// The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
  @available(*, deprecated, message: "")
  public var title: String? {
    get {
      return resultMap["title"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "title")
    }
  }

  /// Trailer video data
  @available(*, deprecated, message: "")
  public var trailerVideo: TrailerVideo? {
    get {
      return (resultMap["trailerVideo"] as? ResultMap).flatMap { TrailerVideo(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "trailerVideo")
    }
  }

  public struct Bulletin: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["BulletinData"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("campaign", type: .object(Campaign.selections)),
        GraphQLField("sponsor", type: .object(Sponsor.selections)),
        GraphQLField("clientTracking", type: .object(ClientTracking.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(campaign: Campaign? = nil, sponsor: Sponsor? = nil, clientTracking: ClientTracking? = nil) {
      self.init(unsafeResultMap: ["__typename": "BulletinData", "campaign": campaign.flatMap { (value: Campaign) -> ResultMap in value.resultMap }, "sponsor": sponsor.flatMap { (value: Sponsor) -> ResultMap in value.resultMap }, "clientTracking": clientTracking.flatMap { (value: ClientTracking) -> ResultMap in value.resultMap }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Bulletin campaign data
    @available(*, deprecated, message: "")
    public var campaign: Campaign? {
      get {
        return (resultMap["campaign"] as? ResultMap).flatMap { Campaign(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "campaign")
      }
    }

    /// Bulletin sponsor data
    @available(*, deprecated, message: "")
    public var sponsor: Sponsor? {
      get {
        return (resultMap["sponsor"] as? ResultMap).flatMap { Sponsor(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "sponsor")
      }
    }

    /// Bulletin client tracking URLs, a.k.a. third-party pixels
    @available(*, deprecated, message: "")
    public var clientTracking: ClientTracking? {
      get {
        return (resultMap["clientTracking"] as? ResultMap).flatMap { ClientTracking(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "clientTracking")
      }
    }

    public struct Campaign: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["CampaignData"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("id", type: .scalar(String.self)),
          GraphQLField("logo", type: .scalar(String.self)),
          GraphQLField("name", type: .scalar(String.self)),
          GraphQLField("slug", type: .scalar(String.self)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(id: String? = nil, logo: String? = nil, name: String? = nil, slug: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "CampaignData", "id": id, "logo": logo, "name": name, "slug": slug])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// Sponsor/campaign ID
      @available(*, deprecated, message: "")
      public var id: String? {
        get {
          return resultMap["id"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "id")
        }
      }

      /// Sponsor/campaign header image
      @available(*, deprecated, message: "")
      public var logo: String? {
        get {
          return resultMap["logo"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "logo")
        }
      }

      /// Sponsor/campaign name
      @available(*, deprecated, message: "")
      public var name: String? {
        get {
          return resultMap["name"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "name")
        }
      }

      /// Sponsor/campaign slug
      @available(*, deprecated, message: "")
      public var slug: String? {
        get {
          return resultMap["slug"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "slug")
        }
      }
    }

    public struct Sponsor: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["CampaignData"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("attribution", type: .scalar(String.self)),
          GraphQLField("id", type: .scalar(String.self)),
          GraphQLField("slug", type: .scalar(String.self)),
          GraphQLField("name", type: .scalar(String.self)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(attribution: String? = nil, id: String? = nil, slug: String? = nil, name: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "CampaignData", "attribution": attribution, "id": id, "slug": slug, "name": name])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// Sponsor/campaign attribution
      @available(*, deprecated, message: "")
      public var attribution: String? {
        get {
          return resultMap["attribution"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "attribution")
        }
      }

      /// Sponsor/campaign ID
      @available(*, deprecated, message: "")
      public var id: String? {
        get {
          return resultMap["id"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "id")
        }
      }

      /// Sponsor/campaign slug
      @available(*, deprecated, message: "")
      public var slug: String? {
        get {
          return resultMap["slug"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "slug")
        }
      }

      /// Sponsor/campaign name
      @available(*, deprecated, message: "")
      public var name: String? {
        get {
          return resultMap["name"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "name")
        }
      }
    }

    public struct ClientTracking: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["ClientTrackingData"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("article", type: .list(.scalar(String.self))),
          GraphQLField("elsewhere", type: .list(.scalar(String.self))),
          GraphQLField("logo", type: .scalar(String.self)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(article: [String?]? = nil, elsewhere: [String?]? = nil, logo: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "ClientTrackingData", "article": article, "elsewhere": elsewhere, "logo": logo])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// Client tracking URLs for use inside an bulletin context
      @available(*, deprecated, message: "")
      public var article: [String?]? {
        get {
          return resultMap["article"] as? [String?]
        }
        set {
          resultMap.updateValue(newValue, forKey: "article")
        }
      }

      /// Client tracking URLs for use outside an bulletin context
      @available(*, deprecated, message: "")
      public var elsewhere: [String?]? {
        get {
          return resultMap["elsewhere"] as? [String?]
        }
        set {
          resultMap.updateValue(newValue, forKey: "elsewhere")
        }
      }

      /// Sponsor/campaign header image link
      @available(*, deprecated, message: "")
      public var logo: String? {
        get {
          return resultMap["logo"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "logo")
        }
      }
    }
  }

  public struct FeaturedImage: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["MediaItem"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLFragmentSpread(MediaParts.self),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    public var fragments: Fragments {
      get {
        return Fragments(unsafeResultMap: resultMap)
      }
      set {
        resultMap += newValue.resultMap
      }
    }

    public struct Fragments {
      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public var mediaParts: MediaParts {
        get {
          return MediaParts(unsafeResultMap: resultMap)
        }
        set {
          resultMap += newValue.resultMap
        }
      }
    }
  }

  public struct Flag: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToFlagConnection"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("edges", type: .list(.object(Edge.selections))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(edges: [Edge?]? = nil) {
      self.init(unsafeResultMap: ["__typename": "PostToFlagConnection", "edges": edges.flatMap { (value: [Edge?]) -> [ResultMap?] in value.map { (value: Edge?) -> ResultMap? in value.flatMap { (value: Edge) -> ResultMap in value.resultMap } } }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Edges for the PostToFlagConnection connection
    @available(*, deprecated, message: "")
    public var edges: [Edge?]? {
      get {
        return (resultMap["edges"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Edge?] in value.map { (value: ResultMap?) -> Edge? in value.flatMap { (value: ResultMap) -> Edge in Edge(unsafeResultMap: value) } } }
      }
      set {
        resultMap.updateValue(newValue.flatMap { (value: [Edge?]) -> [ResultMap?] in value.map { (value: Edge?) -> ResultMap? in value.flatMap { (value: Edge) -> ResultMap in value.resultMap } } }, forKey: "edges")
      }
    }

    public struct Edge: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["PostToFlagConnectionEdge"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("node", type: .object(Node.selections)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(node: Node? = nil) {
        self.init(unsafeResultMap: ["__typename": "PostToFlagConnectionEdge", "node": node.flatMap { (value: Node) -> ResultMap in value.resultMap }])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// The item at the end of the edge
      @available(*, deprecated, message: "")
      public var node: Node? {
        get {
          return (resultMap["node"] as? ResultMap).flatMap { Node(unsafeResultMap: $0) }
        }
        set {
          resultMap.updateValue(newValue?.resultMap, forKey: "node")
        }
      }

      public struct Node: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Flag"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("name", type: .scalar(String.self)),
            GraphQLField("slug", type: .scalar(String.self)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(name: String? = nil, slug: String? = nil) {
          self.init(unsafeResultMap: ["__typename": "Flag", "name": name, "slug": slug])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// The human friendly name of the object.
        @available(*, deprecated, message: "")
        public var name: String? {
          get {
            return resultMap["name"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "name")
          }
        }

        /// An alphanumeric identifier for the object unique to its type.
        @available(*, deprecated, message: "")
        public var slug: String? {
          get {
            return resultMap["slug"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "slug")
          }
        }
      }
    }
  }

  public struct Video: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["VideoData"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLFragmentSpread(VideoParts.self),
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(id: String? = nil, duration: Int? = nil, episode: Int? = nil, playlistId: String? = nil, season: Int? = nil, type: String? = nil) {
      self.init(unsafeResultMap: ["__typename": "VideoData", "id": id, "duration": duration, "episode": episode, "playlistId": playlistId, "season": season, "type": type])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    public var fragments: Fragments {
      get {
        return Fragments(unsafeResultMap: resultMap)
      }
      set {
        resultMap += newValue.resultMap
      }
    }

    public struct Fragments {
      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public var videoParts: VideoParts {
        get {
          return VideoParts(unsafeResultMap: resultMap)
        }
        set {
          resultMap += newValue.resultMap
        }
      }
    }
  }

  public struct TrailerVideo: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["VideoData"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLFragmentSpread(VideoParts.self),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(id: String? = nil, duration: Int? = nil, episode: Int? = nil, playlistId: String? = nil, season: Int? = nil, type: String? = nil) {
      self.init(unsafeResultMap: ["__typename": "VideoData", "id": id, "duration": duration, "episode": episode, "playlistId": playlistId, "season": season, "type": type])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    public var fragments: Fragments {
      get {
        return Fragments(unsafeResultMap: resultMap)
      }
      set {
        resultMap += newValue.resultMap
      }
    }

    public struct Fragments {
      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public var videoParts: VideoParts {
        get {
          return VideoParts(unsafeResultMap: resultMap)
        }
        set {
          resultMap += newValue.resultMap
        }
      }
    }
  }
}

public struct BlockParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment BlockParts on Block {
      __typename
      attributes {
        __typename
        name
        value
      }
      id
      innerHtml
      tagName
      type
    }
    """

  public static let possibleTypes: [String] = ["Block"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("attributes", type: .list(.object(Attribute.selections))),
      GraphQLField("id", type: .scalar(GraphQLID.self)),
      GraphQLField("innerHtml", type: .scalar(String.self)),
      GraphQLField("tagName", type: .scalar(String.self)),
      GraphQLField("type", type: .scalar(BlockNameEnum.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(attributes: [Attribute?]? = nil, id: GraphQLID? = nil, innerHtml: String? = nil, tagName: String? = nil, type: BlockNameEnum? = nil) {
    self.init(unsafeResultMap: ["__typename": "Block", "attributes": attributes.flatMap { (value: [Attribute?]) -> [ResultMap?] in value.map { (value: Attribute?) -> ResultMap? in value.flatMap { (value: Attribute) -> ResultMap in value.resultMap } } }, "id": id, "innerHtml": innerHtml, "tagName": tagName, "type": type])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// Content block attributes
  @available(*, deprecated, message: "")
  public var attributes: [Attribute?]? {
    get {
      return (resultMap["attributes"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Attribute?] in value.map { (value: ResultMap?) -> Attribute? in value.flatMap { (value: ResultMap) -> Attribute in Attribute(unsafeResultMap: value) } } }
    }
    set {
      resultMap.updateValue(newValue.flatMap { (value: [Attribute?]) -> [ResultMap?] in value.map { (value: Attribute?) -> ResultMap? in value.flatMap { (value: Attribute) -> ResultMap in value.resultMap } } }, forKey: "attributes")
    }
  }

  /// Relay ID of the block, encoding parent post ID and index
  @available(*, deprecated, message: "")
  public var id: GraphQLID? {
    get {
      return resultMap["id"] as? GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// Content block inner HTML
  @available(*, deprecated, message: "")
  public var innerHtml: String? {
    get {
      return resultMap["innerHtml"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "innerHtml")
    }
  }

  /// Content block tag name (suggested)
  @available(*, deprecated, message: "")
  public var tagName: String? {
    get {
      return resultMap["tagName"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "tagName")
    }
  }

  /// Content block name
  @available(*, deprecated, message: "")
  public var type: BlockNameEnum? {
    get {
      return resultMap["type"] as? BlockNameEnum
    }
    set {
      resultMap.updateValue(newValue, forKey: "type")
    }
  }

  public struct Attribute: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["Attribute"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("name", type: .scalar(String.self)),
        GraphQLField("value", type: .scalar(String.self)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(name: String? = nil, value: String? = nil) {
      self.init(unsafeResultMap: ["__typename": "Attribute", "name": name, "value": value])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Attribute name
    @available(*, deprecated, message: "")
    public var name: String? {
      get {
        return resultMap["name"] as? String
      }
      set {
        resultMap.updateValue(newValue, forKey: "name")
      }
    }

    /// Attribute value
    @available(*, deprecated, message: "")
    public var value: String? {
      get {
        return resultMap["value"] as? String
      }
      set {
        resultMap.updateValue(newValue, forKey: "value")
      }
    }
  }
}

public struct MediaParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment MediaParts on MediaItem {
      __typename
      altText
      caption
      credit
      id
      mediaDetails {
        __typename
        height
        width
      }
      sourceUrl
      title
    }
    """

  public static let possibleTypes: [String] = ["MediaItem"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("altText", type: .scalar(String.self)),
      GraphQLField("caption", type: .scalar(String.self)),
      GraphQLField("credit", type: .scalar(String.self)),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("mediaDetails", type: .object(MediaDetail.selections)),
      GraphQLField("sourceUrl", type: .scalar(String.self)),
      GraphQLField("title", type: .scalar(String.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(altText: String? = nil, caption: String? = nil, credit: String? = nil, id: GraphQLID, mediaDetails: MediaDetail? = nil, sourceUrl: String? = nil, title: String? = nil) {
    self.init(unsafeResultMap: ["__typename": "MediaItem", "altText": altText, "caption": caption, "credit": credit, "id": id, "mediaDetails": mediaDetails.flatMap { (value: MediaDetail) -> ResultMap in value.resultMap }, "sourceUrl": sourceUrl, "title": title])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// Alternative text to display when resource is not displayed
  @available(*, deprecated, message: "")
  public var altText: String? {
    get {
      return resultMap["altText"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "altText")
    }
  }

  /// The caption for the resource
  @available(*, deprecated, message: "")
  public var caption: String? {
    get {
      return resultMap["caption"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "caption")
    }
  }

  /// Media credit / source
  @available(*, deprecated, message: "")
  public var credit: String? {
    get {
      return resultMap["credit"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "credit")
    }
  }

  /// The globally unique ID for the object
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// Details about the mediaItem
  @available(*, deprecated, message: "")
  public var mediaDetails: MediaDetail? {
    get {
      return (resultMap["mediaDetails"] as? ResultMap).flatMap { MediaDetail(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "mediaDetails")
    }
  }

  /// Url of the mediaItem
  @available(*, deprecated, message: "")
  public var sourceUrl: String? {
    get {
      return resultMap["sourceUrl"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "sourceUrl")
    }
  }

  /// The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
  @available(*, deprecated, message: "")
  public var title: String? {
    get {
      return resultMap["title"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "title")
    }
  }

  public struct MediaDetail: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["MediaDetails"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("height", type: .scalar(Int.self)),
        GraphQLField("width", type: .scalar(Int.self)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(height: Int? = nil, width: Int? = nil) {
      self.init(unsafeResultMap: ["__typename": "MediaDetails", "height": height, "width": width])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// The height of the mediaItem
    @available(*, deprecated, message: "")
    public var height: Int? {
      get {
        return resultMap["height"] as? Int
      }
      set {
        resultMap.updateValue(newValue, forKey: "height")
      }
    }

    /// The width of the mediaItem
    @available(*, deprecated, message: "")
    public var width: Int? {
      get {
        return resultMap["width"] as? Int
      }
      set {
        resultMap.updateValue(newValue, forKey: "width")
      }
    }
  }
}

public struct NugParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment NugParts on Nug {
      __typename
      id
      blocks {
        __typename
        ...BlockParts
        connections {
          __typename
          ... on Post {
            ...ArticleListItemParts
          }
          ... on MediaItem {
            ...MediaParts
          }
        }
      }
      emailLists {
        __typename
        edges {
          __typename
          node {
            __typename
            emailListId
            listId
            name
          }
        }
      }
      title
    }
    """

  public static let possibleTypes: [String] = ["Nug"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("blocks", type: .list(.object(Block.selections))),
      GraphQLField("emailLists", type: .object(EmailList.selections)),
      GraphQLField("title", type: .scalar(String.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(id: GraphQLID, blocks: [Block?]? = nil, emailLists: EmailList? = nil, title: String? = nil) {
    self.init(unsafeResultMap: ["__typename": "Nug", "id": id, "blocks": blocks.flatMap { (value: [Block?]) -> [ResultMap?] in value.map { (value: Block?) -> ResultMap? in value.flatMap { (value: Block) -> ResultMap in value.resultMap } } }, "emailLists": emailLists.flatMap { (value: EmailList) -> ResultMap in value.resultMap }, "title": title])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// The globally unique ID for the object
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// Structured / parsed post content described as a shallow tree of block elements
  @available(*, deprecated, message: "")
  public var blocks: [Block?]? {
    get {
      return (resultMap["blocks"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Block?] in value.map { (value: ResultMap?) -> Block? in value.flatMap { (value: ResultMap) -> Block in Block(unsafeResultMap: value) } } }
    }
    set {
      resultMap.updateValue(newValue.flatMap { (value: [Block?]) -> [ResultMap?] in value.map { (value: Block?) -> ResultMap? in value.flatMap { (value: Block) -> ResultMap in value.resultMap } } }, forKey: "blocks")
    }
  }

  /// Connection between the nug type and the nug type
  @available(*, deprecated, message: "")
  public var emailLists: EmailList? {
    get {
      return (resultMap["emailLists"] as? ResultMap).flatMap { EmailList(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "emailLists")
    }
  }

  /// The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
  @available(*, deprecated, message: "")
  public var title: String? {
    get {
      return resultMap["title"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "title")
    }
  }

  public struct Block: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["Block"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLFragmentSpread(BlockParts.self),
        GraphQLField("connections", type: .list(.object(Connection.selections))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Objects connected to this block
    @available(*, deprecated, message: "")
    public var connections: [Connection?]? {
      get {
        return (resultMap["connections"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Connection?] in value.map { (value: ResultMap?) -> Connection? in value.flatMap { (value: ResultMap) -> Connection in Connection(unsafeResultMap: value) } } }
      }
      set {
        resultMap.updateValue(newValue.flatMap { (value: [Connection?]) -> [ResultMap?] in value.map { (value: Connection?) -> ResultMap? in value.flatMap { (value: Connection) -> ResultMap in value.resultMap } } }, forKey: "connections")
      }
    }

    public var fragments: Fragments {
      get {
        return Fragments(unsafeResultMap: resultMap)
      }
      set {
        resultMap += newValue.resultMap
      }
    }

    public struct Fragments {
      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public var blockParts: BlockParts {
        get {
          return BlockParts(unsafeResultMap: resultMap)
        }
        set {
          resultMap += newValue.resultMap
        }
      }
    }

    public struct Connection: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["Post", "Page", "MediaItem", "Revision", "Push", "Email", "Card", "Chapter", "Promotion", "BlogPost", "Nug", "Collection", "Stack", "Bulletin"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLTypeCase(
            variants: ["Post": AsPost.selections, "MediaItem": AsMediaItem.selections],
            default: [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            ]
          )
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public static func makePage() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Page"])
      }

      public static func makeRevision() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Revision"])
      }

      public static func makePush() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Push"])
      }

      public static func makeEmail() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Email"])
      }

      public static func makeCard() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Card"])
      }

      public static func makeChapter() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Chapter"])
      }

      public static func makePromotion() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Promotion"])
      }

      public static func makeBlogPost() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "BlogPost"])
      }

      public static func makeNug() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Nug"])
      }

      public static func makeCollection() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Collection"])
      }

      public static func makeStack() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Stack"])
      }

      public static func makeBulletin() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Bulletin"])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      public var asPost: AsPost? {
        get {
          if !AsPost.possibleTypes.contains(__typename) { return nil }
          return AsPost(unsafeResultMap: resultMap)
        }
        set {
          guard let newValue = newValue else { return }
          resultMap = newValue.resultMap
        }
      }

      public struct AsPost: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Post"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(ArticleListItemParts.self),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        public var fragments: Fragments {
          get {
            return Fragments(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }

        public struct Fragments {
          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public var articleListItemParts: ArticleListItemParts {
            get {
              return ArticleListItemParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }

      public var asMediaItem: AsMediaItem? {
        get {
          if !AsMediaItem.possibleTypes.contains(__typename) { return nil }
          return AsMediaItem(unsafeResultMap: resultMap)
        }
        set {
          guard let newValue = newValue else { return }
          resultMap = newValue.resultMap
        }
      }

      public struct AsMediaItem: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["MediaItem"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(MediaParts.self),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        public var fragments: Fragments {
          get {
            return Fragments(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }

        public struct Fragments {
          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public var mediaParts: MediaParts {
            get {
              return MediaParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }
    }
  }

  public struct EmailList: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["NugToEmailListConnection"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("edges", type: .list(.object(Edge.selections))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(edges: [Edge?]? = nil) {
      self.init(unsafeResultMap: ["__typename": "NugToEmailListConnection", "edges": edges.flatMap { (value: [Edge?]) -> [ResultMap?] in value.map { (value: Edge?) -> ResultMap? in value.flatMap { (value: Edge) -> ResultMap in value.resultMap } } }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Edges for the NugToEmailListConnection connection
    @available(*, deprecated, message: "")
    public var edges: [Edge?]? {
      get {
        return (resultMap["edges"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Edge?] in value.map { (value: ResultMap?) -> Edge? in value.flatMap { (value: ResultMap) -> Edge in Edge(unsafeResultMap: value) } } }
      }
      set {
        resultMap.updateValue(newValue.flatMap { (value: [Edge?]) -> [ResultMap?] in value.map { (value: Edge?) -> ResultMap? in value.flatMap { (value: Edge) -> ResultMap in value.resultMap } } }, forKey: "edges")
      }
    }

    public struct Edge: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["NugToEmailListConnectionEdge"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("node", type: .object(Node.selections)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(node: Node? = nil) {
        self.init(unsafeResultMap: ["__typename": "NugToEmailListConnectionEdge", "node": node.flatMap { (value: Node) -> ResultMap in value.resultMap }])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// The item at the end of the edge
      @available(*, deprecated, message: "")
      public var node: Node? {
        get {
          return (resultMap["node"] as? ResultMap).flatMap { Node(unsafeResultMap: $0) }
        }
        set {
          resultMap.updateValue(newValue?.resultMap, forKey: "node")
        }
      }

      public struct Node: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["EmailList"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("emailListId", type: .scalar(Int.self)),
            GraphQLField("listId", type: .scalar(Int.self)),
            GraphQLField("name", type: .scalar(String.self)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(emailListId: Int? = nil, listId: Int? = nil, name: String? = nil) {
          self.init(unsafeResultMap: ["__typename": "EmailList", "emailListId": emailListId, "listId": listId, "name": name])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// The id field matches the WP_Post-&gt;ID field.
        @available(*, deprecated, message: "")
        public var emailListId: Int? {
          get {
            return resultMap["emailListId"] as? Int
          }
          set {
            resultMap.updateValue(newValue, forKey: "emailListId")
          }
        }

        /// The id for the list in Sendgrid.
        @available(*, deprecated, message: "")
        public var listId: Int? {
          get {
            return resultMap["listId"] as? Int
          }
          set {
            resultMap.updateValue(newValue, forKey: "listId")
          }
        }

        /// The human friendly name of the object.
        @available(*, deprecated, message: "")
        public var name: String? {
          get {
            return resultMap["name"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "name")
          }
        }
      }
    }
  }
}

public struct VideoParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment VideoParts on VideoData {
      __typename
      id
      duration
      episode
      playlistId
      season
      type
    }
    """

  public static let possibleTypes: [String] = ["VideoData"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("id", type: .scalar(String.self)),
      GraphQLField("duration", type: .scalar(Int.self)),
      GraphQLField("episode", type: .scalar(Int.self)),
      GraphQLField("playlistId", type: .scalar(String.self)),
      GraphQLField("season", type: .scalar(Int.self)),
      GraphQLField("type", type: .scalar(String.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(id: String? = nil, duration: Int? = nil, episode: Int? = nil, playlistId: String? = nil, season: Int? = nil, type: String? = nil) {
    self.init(unsafeResultMap: ["__typename": "VideoData", "id": id, "duration": duration, "episode": episode, "playlistId": playlistId, "season": season, "type": type])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// YouTube video ID
  @available(*, deprecated, message: "")
  public var id: String? {
    get {
      return resultMap["id"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// Length of video in seconds
  @available(*, deprecated, message: "")
  public var duration: Int? {
    get {
      return resultMap["duration"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "duration")
    }
  }

  /// Episode number
  @available(*, deprecated, message: "")
  public var episode: Int? {
    get {
      return resultMap["episode"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "episode")
    }
  }

  /// YouTube playlist ID
  @available(*, deprecated, message: "")
  public var playlistId: String? {
    get {
      return resultMap["playlistId"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "playlistId")
    }
  }

  /// Season number
  @available(*, deprecated, message: "")
  public var season: Int? {
    get {
      return resultMap["season"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "season")
    }
  }

  /// The type of video: youtube or vimeo
  @available(*, deprecated, message: "")
  public var type: String? {
    get {
      return resultMap["type"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "type")
    }
  }
}

public struct HomeCollectionParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment HomeCollectionParts on Collection {
      __typename
      id
      title
      featuredImage {
        __typename
        ...MediaParts
      }
      blocks {
        __typename
        ...BlockParts
        connections {
          __typename
          ... on Post {
            ...ArticleListItemParts
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
    """

  public static let possibleTypes: [String] = ["Collection"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("title", type: .scalar(String.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("blocks", type: .list(.object(Block.selections))),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(id: GraphQLID, title: String? = nil, featuredImage: FeaturedImage? = nil, blocks: [Block?]? = nil) {
    self.init(unsafeResultMap: ["__typename": "Collection", "id": id, "title": title, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "blocks": blocks.flatMap { (value: [Block?]) -> [ResultMap?] in value.map { (value: Block?) -> ResultMap? in value.flatMap { (value: Block) -> ResultMap in value.resultMap } } }])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// The globally unique ID for the object
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
  @available(*, deprecated, message: "")
  public var title: String? {
    get {
      return resultMap["title"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "title")
    }
  }

  /// The featured image for the object
  @available(*, deprecated, message: "")
  public var featuredImage: FeaturedImage? {
    get {
      return (resultMap["featuredImage"] as? ResultMap).flatMap { FeaturedImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "featuredImage")
    }
  }

  /// Structured / parsed post content described as a shallow tree of block elements
  @available(*, deprecated, message: "")
  public var blocks: [Block?]? {
    get {
      return (resultMap["blocks"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Block?] in value.map { (value: ResultMap?) -> Block? in value.flatMap { (value: ResultMap) -> Block in Block(unsafeResultMap: value) } } }
    }
    set {
      resultMap.updateValue(newValue.flatMap { (value: [Block?]) -> [ResultMap?] in value.map { (value: Block?) -> ResultMap? in value.flatMap { (value: Block) -> ResultMap in value.resultMap } } }, forKey: "blocks")
    }
  }

  public struct FeaturedImage: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["MediaItem"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLFragmentSpread(MediaParts.self),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    public var fragments: Fragments {
      get {
        return Fragments(unsafeResultMap: resultMap)
      }
      set {
        resultMap += newValue.resultMap
      }
    }

    public struct Fragments {
      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public var mediaParts: MediaParts {
        get {
          return MediaParts(unsafeResultMap: resultMap)
        }
        set {
          resultMap += newValue.resultMap
        }
      }
    }
  }

  public struct Block: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["Block"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLFragmentSpread(BlockParts.self),
        GraphQLField("connections", type: .list(.object(Connection.selections))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Objects connected to this block
    @available(*, deprecated, message: "")
    public var connections: [Connection?]? {
      get {
        return (resultMap["connections"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Connection?] in value.map { (value: ResultMap?) -> Connection? in value.flatMap { (value: ResultMap) -> Connection in Connection(unsafeResultMap: value) } } }
      }
      set {
        resultMap.updateValue(newValue.flatMap { (value: [Connection?]) -> [ResultMap?] in value.map { (value: Connection?) -> ResultMap? in value.flatMap { (value: Connection) -> ResultMap in value.resultMap } } }, forKey: "connections")
      }
    }

    public var fragments: Fragments {
      get {
        return Fragments(unsafeResultMap: resultMap)
      }
      set {
        resultMap += newValue.resultMap
      }
    }

    public struct Fragments {
      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public var blockParts: BlockParts {
        get {
          return BlockParts(unsafeResultMap: resultMap)
        }
        set {
          resultMap += newValue.resultMap
        }
      }
    }

    public struct Connection: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["Post", "Page", "MediaItem", "Revision", "Push", "Email", "Card", "Chapter", "Promotion", "BlogPost", "Nug", "Collection", "Stack", "Bulletin"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLTypeCase(
            variants: ["Post": AsPost.selections, "MediaItem": AsMediaItem.selections, "Nug": AsNug.selections],
            default: [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            ]
          )
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public static func makePage() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Page"])
      }

      public static func makeRevision() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Revision"])
      }

      public static func makePush() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Push"])
      }

      public static func makeEmail() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Email"])
      }

      public static func makeCard() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Card"])
      }

      public static func makeChapter() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Chapter"])
      }

      public static func makePromotion() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Promotion"])
      }

      public static func makeBlogPost() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "BlogPost"])
      }

      public static func makeCollection() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Collection"])
      }

      public static func makeStack() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Stack"])
      }

      public static func makeBulletin() -> Connection {
        return Connection(unsafeResultMap: ["__typename": "Bulletin"])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      public var asPost: AsPost? {
        get {
          if !AsPost.possibleTypes.contains(__typename) { return nil }
          return AsPost(unsafeResultMap: resultMap)
        }
        set {
          guard let newValue = newValue else { return }
          resultMap = newValue.resultMap
        }
      }

      public struct AsPost: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Post"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(ArticleListItemParts.self),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        public var fragments: Fragments {
          get {
            return Fragments(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }

        public struct Fragments {
          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public var articleListItemParts: ArticleListItemParts {
            get {
              return ArticleListItemParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }

      public var asMediaItem: AsMediaItem? {
        get {
          if !AsMediaItem.possibleTypes.contains(__typename) { return nil }
          return AsMediaItem(unsafeResultMap: resultMap)
        }
        set {
          guard let newValue = newValue else { return }
          resultMap = newValue.resultMap
        }
      }

      public struct AsMediaItem: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["MediaItem"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(MediaParts.self),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        public var fragments: Fragments {
          get {
            return Fragments(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }

        public struct Fragments {
          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public var mediaParts: MediaParts {
            get {
              return MediaParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }

      public var asNug: AsNug? {
        get {
          if !AsNug.possibleTypes.contains(__typename) { return nil }
          return AsNug(unsafeResultMap: resultMap)
        }
        set {
          guard let newValue = newValue else { return }
          resultMap = newValue.resultMap
        }
      }

      public struct AsNug: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Nug"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(NugParts.self),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        public var fragments: Fragments {
          get {
            return Fragments(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }

        public struct Fragments {
          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public var nugParts: NugParts {
            get {
              return NugParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }
    }
  }
}

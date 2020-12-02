// @generated
//  This file was automatically generated and should not be edited.

import Apollo
import Foundation

/// Quartz edition
public enum EditionName: RawRepresentable, Equatable, Hashable, CaseIterable, Apollo.JSONDecodable, Apollo.JSONEncodable {
  public typealias RawValue = String
  case africa
  case india
  case quartz
  case quartzy
  case work
  /// Auto generated constant for unknown enum values
  case __unknown(RawValue)

  public init?(rawValue: RawValue) {
    switch rawValue {
      case "AFRICA": self = .africa
      case "INDIA": self = .india
      case "QUARTZ": self = .quartz
      case "QUARTZY": self = .quartzy
      case "WORK": self = .work
      default: self = .__unknown(rawValue)
    }
  }

  public var rawValue: RawValue {
    switch self {
      case .africa: return "AFRICA"
      case .india: return "INDIA"
      case .quartz: return "QUARTZ"
      case .quartzy: return "QUARTZY"
      case .work: return "WORK"
      case .__unknown(let value): return value
    }
  }

  public static func == (lhs: EditionName, rhs: EditionName) -> Bool {
    switch (lhs, rhs) {
      case (.africa, .africa): return true
      case (.india, .india): return true
      case (.quartz, .quartz): return true
      case (.quartzy, .quartzy): return true
      case (.work, .work): return true
      case (.__unknown(let lhsValue), .__unknown(let rhsValue)): return lhsValue == rhsValue
      default: return false
    }
  }

  public static var allCases: [EditionName] {
    return [
      .africa,
      .india,
      .quartz,
      .quartzy,
      .work,
    ]
  }
}

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
  case embedInstagram
  case embedInlinePdfs
  case embedIssuu
  case embedIcloud
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
      case "EMBED_INSTAGRAM": self = .embedInstagram
      case "EMBED_INLINE_PDFS": self = .embedInlinePdfs
      case "EMBED_ISSUU": self = .embedIssuu
      case "EMBED_ICLOUD": self = .embedIcloud
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
      case .embedInstagram: return "EMBED_INSTAGRAM"
      case .embedInlinePdfs: return "EMBED_INLINE_PDFS"
      case .embedIssuu: return "EMBED_ISSUU"
      case .embedIcloud: return "EMBED_ICLOUD"
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
      case (.embedInstagram, .embedInstagram): return true
      case (.embedInlinePdfs, .embedInlinePdfs): return true
      case (.embedIssuu, .embedIssuu): return true
      case (.embedIcloud, .embedIcloud): return true
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
      .embedInstagram,
      .embedInlinePdfs,
      .embedIssuu,
      .embedIcloud,
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

public final class ArticleQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query Article($id: ID!) {
      post(id: $id) {
        __typename
        ...ArticleParts
      }
    }
    """

  public let operationName: String = "Article"

  public let operationIdentifier: String? = "67b5119549bc53d5ac66803b18c5f0d913e507cae092eb460bbb58c1957349d2"

  public var queryDocument: String { return operationDefinition.appending("\n" + ArticleParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + AuthorParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + GuideParts.fragmentDefinition).appending("\n" + ObsessionParts.fragmentDefinition).appending("\n" + ProjectParts.fragmentDefinition).appending("\n" + SeriesParts.fragmentDefinition).appending("\n" + ShowParts.fragmentDefinition) }

  public var id: GraphQLID

  public init(id: GraphQLID) {
    self.id = id
  }

  public var variables: GraphQLMap? {
    return ["id": id]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("post", arguments: ["id": GraphQLVariable("id")], type: .object(Post.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(post: Post? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "post": post.flatMap { (value: Post) -> ResultMap in value.resultMap }])
    }

    /// A 0bject
    @available(*, deprecated, message: "")
    public var post: Post? {
      get {
        return (resultMap["post"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "post")
      }
    }

    public struct Post: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["Post"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLFragmentSpread(ArticleParts.self),
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

        public var articleParts: ArticleParts {
          get {
            return ArticleParts(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }
      }
    }
  }
}

public final class ArticlePreviewQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query ArticlePreview($id: Int!, $time: Int!, $token: String!) {
      posts(where: {id: $id, preview: {time: $time, token: $token}}) {
        __typename
        nodes {
          __typename
          ...ArticleParts
        }
      }
    }
    """

  public let operationName: String = "ArticlePreview"

  public let operationIdentifier: String? = "bc6f831dabffa4774dc928c9e4f6a6f5b16a9b0821ea4d1c310d5f0a0e9401f4"

  public var queryDocument: String { return operationDefinition.appending("\n" + ArticleParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + AuthorParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + GuideParts.fragmentDefinition).appending("\n" + ObsessionParts.fragmentDefinition).appending("\n" + ProjectParts.fragmentDefinition).appending("\n" + SeriesParts.fragmentDefinition).appending("\n" + ShowParts.fragmentDefinition) }

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
        GraphQLField("posts", arguments: ["where": ["id": GraphQLVariable("id"), "preview": ["time": GraphQLVariable("time"), "token": GraphQLVariable("token")]]], type: .object(Post.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(posts: Post? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "posts": posts.flatMap { (value: Post) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var posts: Post? {
      get {
        return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "posts")
      }
    }

    public struct Post: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToPostConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Post"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(ArticleParts.self),
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

          public var articleParts: ArticleParts {
            get {
              return ArticleParts(unsafeResultMap: resultMap)
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

public final class ArticlesByGuideQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query ArticlesByGuide($after: String = "", $perPage: Int, $slug: [String]) {
      guides(where: {slug: $slug}) {
        __typename
        nodes {
          __typename
          ...GuideParts
          posts(after: $after, first: $perPage, where: {orderby: {field: DATE, order: ASC}}) {
            __typename
            nodes {
              __typename
              ...ArticleTeaserParts
            }
            pageInfo {
              __typename
              hasNextPage
              endCursor
            }
          }
        }
      }
    }
    """

  public let operationName: String = "ArticlesByGuide"

  public let operationIdentifier: String? = "f7776b4b4a65fdc2223131481d5cddb7c1ae7596ca0466c523df1976cefd942c"

  public var queryDocument: String { return operationDefinition.appending("\n" + GuideParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var after: String?
  public var perPage: Int?
  public var slug: [String?]?

  public init(after: String? = nil, perPage: Int? = nil, slug: [String?]? = nil) {
    self.after = after
    self.perPage = perPage
    self.slug = slug
  }

  public var variables: GraphQLMap? {
    return ["after": after, "perPage": perPage, "slug": slug]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("guides", arguments: ["where": ["slug": GraphQLVariable("slug")]], type: .object(Guide.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(guides: Guide? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "guides": guides.flatMap { (value: Guide) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var guides: Guide? {
      get {
        return (resultMap["guides"] as? ResultMap).flatMap { Guide(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "guides")
      }
    }

    public struct Guide: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToGuideConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToGuideConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Guide"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(GuideParts.self),
            GraphQLField("posts", arguments: ["after": GraphQLVariable("after"), "first": GraphQLVariable("perPage"), "where": ["orderby": ["field": "DATE", "order": "ASC"]]], type: .object(Post.selections)),
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

        /// Connection between the guide type and the guide type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

          public var guideParts: GuideParts {
            get {
              return GuideParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["GuideToPostConnection"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
              GraphQLField("nodes", type: .list(.object(Node.selections))),
              GraphQLField("pageInfo", type: .object(PageInfo.selections)),
            ]
          }

          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public init(nodes: [Node?]? = nil, pageInfo: PageInfo? = nil) {
            self.init(unsafeResultMap: ["__typename": "GuideToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, "pageInfo": pageInfo.flatMap { (value: PageInfo) -> ResultMap in value.resultMap }])
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

          /// Information about pagination in a connection.
          @available(*, deprecated, message: "")
          public var pageInfo: PageInfo? {
            get {
              return (resultMap["pageInfo"] as? ResultMap).flatMap { PageInfo(unsafeResultMap: $0) }
            }
            set {
              resultMap.updateValue(newValue?.resultMap, forKey: "pageInfo")
            }
          }

          public struct Node: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["Post"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ArticleTeaserParts.self),
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

              public var articleTeaserParts: ArticleTeaserParts {
                get {
                  return ArticleTeaserParts(unsafeResultMap: resultMap)
                }
                set {
                  resultMap += newValue.resultMap
                }
              }
            }
          }

          public struct PageInfo: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["WPPageInfo"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLField("hasNextPage", type: .nonNull(.scalar(Bool.self))),
                GraphQLField("endCursor", type: .scalar(String.self)),
              ]
            }

            public private(set) var resultMap: ResultMap

            public init(unsafeResultMap: ResultMap) {
              self.resultMap = unsafeResultMap
            }

            public init(hasNextPage: Bool, endCursor: String? = nil) {
              self.init(unsafeResultMap: ["__typename": "WPPageInfo", "hasNextPage": hasNextPage, "endCursor": endCursor])
            }

            public var __typename: String {
              get {
                return resultMap["__typename"]! as! String
              }
              set {
                resultMap.updateValue(newValue, forKey: "__typename")
              }
            }

            /// When paginating forwards, are there more items?
            @available(*, deprecated, message: "")
            public var hasNextPage: Bool {
              get {
                return resultMap["hasNextPage"]! as! Bool
              }
              set {
                resultMap.updateValue(newValue, forKey: "hasNextPage")
              }
            }

            /// When paginating forwards, the cursor to continue.
            @available(*, deprecated, message: "")
            public var endCursor: String? {
              get {
                return resultMap["endCursor"] as? String
              }
              set {
                resultMap.updateValue(newValue, forKey: "endCursor")
              }
            }
          }
        }
      }
    }
  }
}

public final class ArticlesByObsessionQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query ArticlesByObsession($after: String = "", $perPage: Int = 10, $slug: [String]!) {
      obsessions(where: {slug: $slug}) {
        __typename
        nodes {
          __typename
          ...ObsessionParts
          posts: content(after: $after, first: $perPage) {
            __typename
            nodes {
              __typename
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
              __typename
              endCursor
              hasNextPage
            }
          }
        }
      }
    }
    """

  public let operationName: String = "ArticlesByObsession"

  public let operationIdentifier: String? = "f2140ac83a3eea9ac20c8eb82d62535304537efa6117bade19381bd010edab6d"

  public var queryDocument: String { return operationDefinition.appending("\n" + ObsessionParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + BulletinParts.fragmentDefinition).appending("\n" + PromotionParts.fragmentDefinition) }

  public var after: String?
  public var perPage: Int?
  public var slug: [String?]

  public init(after: String? = nil, perPage: Int? = nil, slug: [String?]) {
    self.after = after
    self.perPage = perPage
    self.slug = slug
  }

  public var variables: GraphQLMap? {
    return ["after": after, "perPage": perPage, "slug": slug]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("obsessions", arguments: ["where": ["slug": GraphQLVariable("slug")]], type: .object(Obsession.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(obsessions: Obsession? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "obsessions": obsessions.flatMap { (value: Obsession) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var obsessions: Obsession? {
      get {
        return (resultMap["obsessions"] as? ResultMap).flatMap { Obsession(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "obsessions")
      }
    }

    public struct Obsession: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToObsessionConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToObsessionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Obsession"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(ObsessionParts.self),
            GraphQLField("content", alias: "posts", arguments: ["after": GraphQLVariable("after"), "first": GraphQLVariable("perPage")], type: .object(Post.selections)),
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

        /// Connection between the Obsession type and the Obsession type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

          public var obsessionParts: ObsessionParts {
            get {
              return ObsessionParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["ObsessionToContentUnionConnection"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
              GraphQLField("nodes", type: .list(.object(Node.selections))),
              GraphQLField("pageInfo", type: .object(PageInfo.selections)),
            ]
          }

          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public init(nodes: [Node?]? = nil, pageInfo: PageInfo? = nil) {
            self.init(unsafeResultMap: ["__typename": "ObsessionToContentUnionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, "pageInfo": pageInfo.flatMap { (value: PageInfo) -> ResultMap in value.resultMap }])
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

          /// Information about pagination in a connection.
          @available(*, deprecated, message: "")
          public var pageInfo: PageInfo? {
            get {
              return (resultMap["pageInfo"] as? ResultMap).flatMap { PageInfo(unsafeResultMap: $0) }
            }
            set {
              resultMap.updateValue(newValue?.resultMap, forKey: "pageInfo")
            }
          }

          public struct Node: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["Post", "Page", "MediaItem", "Email", "Card", "Chapter", "Promotion", "Collection", "Stack", "Bulletin"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLTypeCase(
                  variants: ["Post": AsPost.selections, "Bulletin": AsBulletin.selections, "Promotion": AsPromotion.selections],
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

            public static func makePage() -> Node {
              return Node(unsafeResultMap: ["__typename": "Page"])
            }

            public static func makeMediaItem() -> Node {
              return Node(unsafeResultMap: ["__typename": "MediaItem"])
            }

            public static func makeEmail() -> Node {
              return Node(unsafeResultMap: ["__typename": "Email"])
            }

            public static func makeCard() -> Node {
              return Node(unsafeResultMap: ["__typename": "Card"])
            }

            public static func makeChapter() -> Node {
              return Node(unsafeResultMap: ["__typename": "Chapter"])
            }

            public static func makeCollection() -> Node {
              return Node(unsafeResultMap: ["__typename": "Collection"])
            }

            public static func makeStack() -> Node {
              return Node(unsafeResultMap: ["__typename": "Stack"])
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
                  GraphQLFragmentSpread(ArticleTeaserParts.self),
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

                public var articleTeaserParts: ArticleTeaserParts {
                  get {
                    return ArticleTeaserParts(unsafeResultMap: resultMap)
                  }
                  set {
                    resultMap += newValue.resultMap
                  }
                }
              }
            }

            public var asBulletin: AsBulletin? {
              get {
                if !AsBulletin.possibleTypes.contains(__typename) { return nil }
                return AsBulletin(unsafeResultMap: resultMap)
              }
              set {
                guard let newValue = newValue else { return }
                resultMap = newValue.resultMap
              }
            }

            public struct AsBulletin: GraphQLSelectionSet {
              public static let possibleTypes: [String] = ["Bulletin"]

              public static var selections: [GraphQLSelection] {
                return [
                  GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                  GraphQLFragmentSpread(BulletinParts.self),
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

                public var bulletinParts: BulletinParts {
                  get {
                    return BulletinParts(unsafeResultMap: resultMap)
                  }
                  set {
                    resultMap += newValue.resultMap
                  }
                }
              }
            }

            public var asPromotion: AsPromotion? {
              get {
                if !AsPromotion.possibleTypes.contains(__typename) { return nil }
                return AsPromotion(unsafeResultMap: resultMap)
              }
              set {
                guard let newValue = newValue else { return }
                resultMap = newValue.resultMap
              }
            }

            public struct AsPromotion: GraphQLSelectionSet {
              public static let possibleTypes: [String] = ["Promotion"]

              public static var selections: [GraphQLSelection] {
                return [
                  GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                  GraphQLFragmentSpread(PromotionParts.self),
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

                public var promotionParts: PromotionParts {
                  get {
                    return PromotionParts(unsafeResultMap: resultMap)
                  }
                  set {
                    resultMap += newValue.resultMap
                  }
                }
              }
            }
          }

          public struct PageInfo: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["WPPageInfo"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLField("endCursor", type: .scalar(String.self)),
                GraphQLField("hasNextPage", type: .nonNull(.scalar(Bool.self))),
              ]
            }

            public private(set) var resultMap: ResultMap

            public init(unsafeResultMap: ResultMap) {
              self.resultMap = unsafeResultMap
            }

            public init(endCursor: String? = nil, hasNextPage: Bool) {
              self.init(unsafeResultMap: ["__typename": "WPPageInfo", "endCursor": endCursor, "hasNextPage": hasNextPage])
            }

            public var __typename: String {
              get {
                return resultMap["__typename"]! as! String
              }
              set {
                resultMap.updateValue(newValue, forKey: "__typename")
              }
            }

            /// When paginating forwards, the cursor to continue.
            @available(*, deprecated, message: "")
            public var endCursor: String? {
              get {
                return resultMap["endCursor"] as? String
              }
              set {
                resultMap.updateValue(newValue, forKey: "endCursor")
              }
            }

            /// When paginating forwards, are there more items?
            @available(*, deprecated, message: "")
            public var hasNextPage: Bool {
              get {
                return resultMap["hasNextPage"]! as! Bool
              }
              set {
                resultMap.updateValue(newValue, forKey: "hasNextPage")
              }
            }
          }
        }
      }
    }
  }
}

public final class ArticlesBySeriesQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query ArticlesBySeries($after: String = "", $perPage: Int, $slug: [String]) {
      serieses(where: {slug: $slug}) {
        __typename
        nodes {
          __typename
          ...SeriesParts
          posts(after: $after, first: $perPage) {
            __typename
            nodes {
              __typename
              ...ArticleTeaserParts
            }
            pageInfo {
              __typename
              endCursor
              hasNextPage
            }
          }
        }
      }
    }
    """

  public let operationName: String = "ArticlesBySeries"

  public let operationIdentifier: String? = "380f6922ac604e037efe022522e15c52f49c55880b60a020d8dbfce0b33088e7"

  public var queryDocument: String { return operationDefinition.appending("\n" + SeriesParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var after: String?
  public var perPage: Int?
  public var slug: [String?]?

  public init(after: String? = nil, perPage: Int? = nil, slug: [String?]? = nil) {
    self.after = after
    self.perPage = perPage
    self.slug = slug
  }

  public var variables: GraphQLMap? {
    return ["after": after, "perPage": perPage, "slug": slug]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("serieses", arguments: ["where": ["slug": GraphQLVariable("slug")]], type: .object(Seriese.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(serieses: Seriese? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "serieses": serieses.flatMap { (value: Seriese) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var serieses: Seriese? {
      get {
        return (resultMap["serieses"] as? ResultMap).flatMap { Seriese(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "serieses")
      }
    }

    public struct Seriese: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToSeriesConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToSeriesConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Series"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(SeriesParts.self),
            GraphQLField("posts", arguments: ["after": GraphQLVariable("after"), "first": GraphQLVariable("perPage")], type: .object(Post.selections)),
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

        /// Connection between the series type and the series type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

          public var seriesParts: SeriesParts {
            get {
              return SeriesParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["SeriesToPostConnection"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
              GraphQLField("nodes", type: .list(.object(Node.selections))),
              GraphQLField("pageInfo", type: .object(PageInfo.selections)),
            ]
          }

          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public init(nodes: [Node?]? = nil, pageInfo: PageInfo? = nil) {
            self.init(unsafeResultMap: ["__typename": "SeriesToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, "pageInfo": pageInfo.flatMap { (value: PageInfo) -> ResultMap in value.resultMap }])
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

          /// Information about pagination in a connection.
          @available(*, deprecated, message: "")
          public var pageInfo: PageInfo? {
            get {
              return (resultMap["pageInfo"] as? ResultMap).flatMap { PageInfo(unsafeResultMap: $0) }
            }
            set {
              resultMap.updateValue(newValue?.resultMap, forKey: "pageInfo")
            }
          }

          public struct Node: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["Post"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ArticleTeaserParts.self),
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

              public var articleTeaserParts: ArticleTeaserParts {
                get {
                  return ArticleTeaserParts(unsafeResultMap: resultMap)
                }
                set {
                  resultMap += newValue.resultMap
                }
              }
            }
          }

          public struct PageInfo: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["WPPageInfo"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLField("endCursor", type: .scalar(String.self)),
                GraphQLField("hasNextPage", type: .nonNull(.scalar(Bool.self))),
              ]
            }

            public private(set) var resultMap: ResultMap

            public init(unsafeResultMap: ResultMap) {
              self.resultMap = unsafeResultMap
            }

            public init(endCursor: String? = nil, hasNextPage: Bool) {
              self.init(unsafeResultMap: ["__typename": "WPPageInfo", "endCursor": endCursor, "hasNextPage": hasNextPage])
            }

            public var __typename: String {
              get {
                return resultMap["__typename"]! as! String
              }
              set {
                resultMap.updateValue(newValue, forKey: "__typename")
              }
            }

            /// When paginating forwards, the cursor to continue.
            @available(*, deprecated, message: "")
            public var endCursor: String? {
              get {
                return resultMap["endCursor"] as? String
              }
              set {
                resultMap.updateValue(newValue, forKey: "endCursor")
              }
            }

            /// When paginating forwards, are there more items?
            @available(*, deprecated, message: "")
            public var hasNextPage: Bool {
              get {
                return resultMap["hasNextPage"]! as! Bool
              }
              set {
                resultMap.updateValue(newValue, forKey: "hasNextPage")
              }
            }
          }
        }
      }
    }
  }
}

public final class ArticlesByShowQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query ArticlesByShow($after: String = "", $perPage: Int, $slug: [String]) {
      shows(where: {slug: $slug}) {
        __typename
        nodes {
          __typename
          ...ShowParts
          posts(after: $after, first: $perPage) {
            __typename
            nodes {
              __typename
              ...ArticleTeaserParts
            }
            pageInfo {
              __typename
              endCursor
              hasNextPage
            }
          }
        }
      }
    }
    """

  public let operationName: String = "ArticlesByShow"

  public let operationIdentifier: String? = "d246b44feda61a364731c8800aaa80d206b516e66f6c77913f5b00a91798361d"

  public var queryDocument: String { return operationDefinition.appending("\n" + ShowParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var after: String?
  public var perPage: Int?
  public var slug: [String?]?

  public init(after: String? = nil, perPage: Int? = nil, slug: [String?]? = nil) {
    self.after = after
    self.perPage = perPage
    self.slug = slug
  }

  public var variables: GraphQLMap? {
    return ["after": after, "perPage": perPage, "slug": slug]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("shows", arguments: ["where": ["slug": GraphQLVariable("slug")]], type: .object(Show.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(shows: Show? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "shows": shows.flatMap { (value: Show) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var shows: Show? {
      get {
        return (resultMap["shows"] as? ResultMap).flatMap { Show(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "shows")
      }
    }

    public struct Show: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToShowConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToShowConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Show"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(ShowParts.self),
            GraphQLField("posts", arguments: ["after": GraphQLVariable("after"), "first": GraphQLVariable("perPage")], type: .object(Post.selections)),
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

        /// Connection between the show type and the show type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

          public var showParts: ShowParts {
            get {
              return ShowParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["ShowToPostConnection"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
              GraphQLField("nodes", type: .list(.object(Node.selections))),
              GraphQLField("pageInfo", type: .object(PageInfo.selections)),
            ]
          }

          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public init(nodes: [Node?]? = nil, pageInfo: PageInfo? = nil) {
            self.init(unsafeResultMap: ["__typename": "ShowToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, "pageInfo": pageInfo.flatMap { (value: PageInfo) -> ResultMap in value.resultMap }])
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

          /// Information about pagination in a connection.
          @available(*, deprecated, message: "")
          public var pageInfo: PageInfo? {
            get {
              return (resultMap["pageInfo"] as? ResultMap).flatMap { PageInfo(unsafeResultMap: $0) }
            }
            set {
              resultMap.updateValue(newValue?.resultMap, forKey: "pageInfo")
            }
          }

          public struct Node: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["Post"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ArticleTeaserParts.self),
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

              public var articleTeaserParts: ArticleTeaserParts {
                get {
                  return ArticleTeaserParts(unsafeResultMap: resultMap)
                }
                set {
                  resultMap += newValue.resultMap
                }
              }
            }
          }

          public struct PageInfo: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["WPPageInfo"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLField("endCursor", type: .scalar(String.self)),
                GraphQLField("hasNextPage", type: .nonNull(.scalar(Bool.self))),
              ]
            }

            public private(set) var resultMap: ResultMap

            public init(unsafeResultMap: ResultMap) {
              self.resultMap = unsafeResultMap
            }

            public init(endCursor: String? = nil, hasNextPage: Bool) {
              self.init(unsafeResultMap: ["__typename": "WPPageInfo", "endCursor": endCursor, "hasNextPage": hasNextPage])
            }

            public var __typename: String {
              get {
                return resultMap["__typename"]! as! String
              }
              set {
                resultMap.updateValue(newValue, forKey: "__typename")
              }
            }

            /// When paginating forwards, the cursor to continue.
            @available(*, deprecated, message: "")
            public var endCursor: String? {
              get {
                return resultMap["endCursor"] as? String
              }
              set {
                resultMap.updateValue(newValue, forKey: "endCursor")
              }
            }

            /// When paginating forwards, are there more items?
            @available(*, deprecated, message: "")
            public var hasNextPage: Bool {
              get {
                return resultMap["hasNextPage"]! as! Bool
              }
              set {
                resultMap.updateValue(newValue, forKey: "hasNextPage")
              }
            }
          }
        }
      }
    }
  }
}

public final class ArticlesByTagQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query ArticlesByTag($after: String = "", $perPage: Int, $slug: [String]) {
      tags(where: {slug: $slug}) {
        __typename
        nodes {
          __typename
          ...TagParts
          posts(after: $after, first: $perPage) {
            __typename
            nodes {
              __typename
              ...ArticleTeaserParts
            }
            pageInfo {
              __typename
              endCursor
              hasNextPage
            }
          }
        }
      }
    }
    """

  public let operationName: String = "ArticlesByTag"

  public let operationIdentifier: String? = "a62a1767c0f6ac124a8005acdc0ec60cb950892b30a9905133ae74b89be9c3f9"

  public var queryDocument: String { return operationDefinition.appending("\n" + TagParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var after: String?
  public var perPage: Int?
  public var slug: [String?]?

  public init(after: String? = nil, perPage: Int? = nil, slug: [String?]? = nil) {
    self.after = after
    self.perPage = perPage
    self.slug = slug
  }

  public var variables: GraphQLMap? {
    return ["after": after, "perPage": perPage, "slug": slug]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("tags", arguments: ["where": ["slug": GraphQLVariable("slug")]], type: .object(Tag.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(tags: Tag? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "tags": tags.flatMap { (value: Tag) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var tags: Tag? {
      get {
        return (resultMap["tags"] as? ResultMap).flatMap { Tag(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "tags")
      }
    }

    public struct Tag: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToTagConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToTagConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Tag"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(TagParts.self),
            GraphQLField("posts", arguments: ["after": GraphQLVariable("after"), "first": GraphQLVariable("perPage")], type: .object(Post.selections)),
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

        /// Connection between the tag type and the tag type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

          public var tagParts: TagParts {
            get {
              return TagParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["TagToPostConnection"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
              GraphQLField("nodes", type: .list(.object(Node.selections))),
              GraphQLField("pageInfo", type: .object(PageInfo.selections)),
            ]
          }

          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public init(nodes: [Node?]? = nil, pageInfo: PageInfo? = nil) {
            self.init(unsafeResultMap: ["__typename": "TagToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, "pageInfo": pageInfo.flatMap { (value: PageInfo) -> ResultMap in value.resultMap }])
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

          /// Information about pagination in a connection.
          @available(*, deprecated, message: "")
          public var pageInfo: PageInfo? {
            get {
              return (resultMap["pageInfo"] as? ResultMap).flatMap { PageInfo(unsafeResultMap: $0) }
            }
            set {
              resultMap.updateValue(newValue?.resultMap, forKey: "pageInfo")
            }
          }

          public struct Node: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["Post"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ArticleTeaserParts.self),
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

              public var articleTeaserParts: ArticleTeaserParts {
                get {
                  return ArticleTeaserParts(unsafeResultMap: resultMap)
                }
                set {
                  resultMap += newValue.resultMap
                }
              }
            }
          }

          public struct PageInfo: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["WPPageInfo"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLField("endCursor", type: .scalar(String.self)),
                GraphQLField("hasNextPage", type: .nonNull(.scalar(Bool.self))),
              ]
            }

            public private(set) var resultMap: ResultMap

            public init(unsafeResultMap: ResultMap) {
              self.resultMap = unsafeResultMap
            }

            public init(endCursor: String? = nil, hasNextPage: Bool) {
              self.init(unsafeResultMap: ["__typename": "WPPageInfo", "endCursor": endCursor, "hasNextPage": hasNextPage])
            }

            public var __typename: String {
              get {
                return resultMap["__typename"]! as! String
              }
              set {
                resultMap.updateValue(newValue, forKey: "__typename")
              }
            }

            /// When paginating forwards, the cursor to continue.
            @available(*, deprecated, message: "")
            public var endCursor: String? {
              get {
                return resultMap["endCursor"] as? String
              }
              set {
                resultMap.updateValue(newValue, forKey: "endCursor")
              }
            }

            /// When paginating forwards, are there more items?
            @available(*, deprecated, message: "")
            public var hasNextPage: Bool {
              get {
                return resultMap["hasNextPage"]! as! Bool
              }
              set {
                resultMap.updateValue(newValue, forKey: "hasNextPage")
              }
            }
          }
        }
      }
    }
  }
}

public final class ArticlesByTopicQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query ArticlesByTopic($after: String = "", $perPage: Int, $slug: [String]) {
      topics(where: {slug: $slug}) {
        __typename
        nodes {
          __typename
          ...TopicParts
          posts(after: $after, first: $perPage) {
            __typename
            nodes {
              __typename
              ...ArticleTeaserParts
            }
            pageInfo {
              __typename
              endCursor
              hasNextPage
            }
          }
        }
      }
    }
    """

  public let operationName: String = "ArticlesByTopic"

  public let operationIdentifier: String? = "670f1576a9c6f0ace10bd9960111590f2ba69421fce16f0273b0be16474cd183"

  public var queryDocument: String { return operationDefinition.appending("\n" + TopicParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var after: String?
  public var perPage: Int?
  public var slug: [String?]?

  public init(after: String? = nil, perPage: Int? = nil, slug: [String?]? = nil) {
    self.after = after
    self.perPage = perPage
    self.slug = slug
  }

  public var variables: GraphQLMap? {
    return ["after": after, "perPage": perPage, "slug": slug]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("topics", arguments: ["where": ["slug": GraphQLVariable("slug")]], type: .object(Topic.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(topics: Topic? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "topics": topics.flatMap { (value: Topic) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var topics: Topic? {
      get {
        return (resultMap["topics"] as? ResultMap).flatMap { Topic(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "topics")
      }
    }

    public struct Topic: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToTopicConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToTopicConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Topic"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(TopicParts.self),
            GraphQLField("posts", arguments: ["after": GraphQLVariable("after"), "first": GraphQLVariable("perPage")], type: .object(Post.selections)),
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

        /// Connection between the topic type and the topic type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

          public var topicParts: TopicParts {
            get {
              return TopicParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["TopicToPostConnection"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
              GraphQLField("nodes", type: .list(.object(Node.selections))),
              GraphQLField("pageInfo", type: .object(PageInfo.selections)),
            ]
          }

          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public init(nodes: [Node?]? = nil, pageInfo: PageInfo? = nil) {
            self.init(unsafeResultMap: ["__typename": "TopicToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, "pageInfo": pageInfo.flatMap { (value: PageInfo) -> ResultMap in value.resultMap }])
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

          /// Information about pagination in a connection.
          @available(*, deprecated, message: "")
          public var pageInfo: PageInfo? {
            get {
              return (resultMap["pageInfo"] as? ResultMap).flatMap { PageInfo(unsafeResultMap: $0) }
            }
            set {
              resultMap.updateValue(newValue?.resultMap, forKey: "pageInfo")
            }
          }

          public struct Node: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["Post"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ArticleTeaserParts.self),
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

              public var articleTeaserParts: ArticleTeaserParts {
                get {
                  return ArticleTeaserParts(unsafeResultMap: resultMap)
                }
                set {
                  resultMap += newValue.resultMap
                }
              }
            }
          }

          public struct PageInfo: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["WPPageInfo"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLField("endCursor", type: .scalar(String.self)),
                GraphQLField("hasNextPage", type: .nonNull(.scalar(Bool.self))),
              ]
            }

            public private(set) var resultMap: ResultMap

            public init(unsafeResultMap: ResultMap) {
              self.resultMap = unsafeResultMap
            }

            public init(endCursor: String? = nil, hasNextPage: Bool) {
              self.init(unsafeResultMap: ["__typename": "WPPageInfo", "endCursor": endCursor, "hasNextPage": hasNextPage])
            }

            public var __typename: String {
              get {
                return resultMap["__typename"]! as! String
              }
              set {
                resultMap.updateValue(newValue, forKey: "__typename")
              }
            }

            /// When paginating forwards, the cursor to continue.
            @available(*, deprecated, message: "")
            public var endCursor: String? {
              get {
                return resultMap["endCursor"] as? String
              }
              set {
                resultMap.updateValue(newValue, forKey: "endCursor")
              }
            }

            /// When paginating forwards, are there more items?
            @available(*, deprecated, message: "")
            public var hasNextPage: Bool {
              get {
                return resultMap["hasNextPage"]! as! Bool
              }
              set {
                resultMap.updateValue(newValue, forKey: "hasNextPage")
              }
            }
          }
        }
      }
    }
  }
}

public final class ArticleTeaserQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query ArticleTeaser($id: ID!) {
      post(id: $id) {
        __typename
        ...ArticleTeaserParts
      }
    }
    """

  public let operationName: String = "ArticleTeaser"

  public let operationIdentifier: String? = "e534e24d941a317f09b76efef907a092f163093c3e9ac27d7d5a8cb319b71cc5"

  public var queryDocument: String { return operationDefinition.appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var id: GraphQLID

  public init(id: GraphQLID) {
    self.id = id
  }

  public var variables: GraphQLMap? {
    return ["id": id]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("post", arguments: ["id": GraphQLVariable("id")], type: .object(Post.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(post: Post? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "post": post.flatMap { (value: Post) -> ResultMap in value.resultMap }])
    }

    /// A 0bject
    @available(*, deprecated, message: "")
    public var post: Post? {
      get {
        return (resultMap["post"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "post")
      }
    }

    public struct Post: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["Post"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLFragmentSpread(ArticleTeaserParts.self),
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

        public var articleTeaserParts: ArticleTeaserParts {
          get {
            return ArticleTeaserParts(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }
      }
    }
  }
}

public final class ContentBySearchTermQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query ContentBySearchTerm($after: String = "", $limit: Int = 10, $search: String!) {
      content(after: $after, first: $limit, where: {search: $search}) {
        __typename
        pageInfo {
          __typename
          endCursor
          hasNextPage
        }
        nodes {
          __typename
          ... on Post {
            trackingUrls
            ...ArticleTeaserParts
          }
        }
      }
    }
    """

  public let operationName: String = "ContentBySearchTerm"

  public let operationIdentifier: String? = "44dc6236bcf170f638f62c36977b652eeef80e3089b750256068e44f716f9ad7"

  public var queryDocument: String { return operationDefinition.appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var after: String?
  public var limit: Int?
  public var search: String

  public init(after: String? = nil, limit: Int? = nil, search: String) {
    self.after = after
    self.limit = limit
    self.search = search
  }

  public var variables: GraphQLMap? {
    return ["after": after, "limit": limit, "search": search]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("content", arguments: ["after": GraphQLVariable("after"), "first": GraphQLVariable("limit"), "where": ["search": GraphQLVariable("search")]], type: .object(Content.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(content: Content? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "content": content.flatMap { (value: Content) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var content: Content? {
      get {
        return (resultMap["content"] as? ResultMap).flatMap { Content(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "content")
      }
    }

    public struct Content: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToContentUnionConnection"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("pageInfo", type: .object(PageInfo.selections)),
          GraphQLField("nodes", type: .list(.object(Node.selections))),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(pageInfo: PageInfo? = nil, nodes: [Node?]? = nil) {
        self.init(unsafeResultMap: ["__typename": "RootQueryToContentUnionConnection", "pageInfo": pageInfo.flatMap { (value: PageInfo) -> ResultMap in value.resultMap }, "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// Information about pagination in a connection.
      @available(*, deprecated, message: "")
      public var pageInfo: PageInfo? {
        get {
          return (resultMap["pageInfo"] as? ResultMap).flatMap { PageInfo(unsafeResultMap: $0) }
        }
        set {
          resultMap.updateValue(newValue?.resultMap, forKey: "pageInfo")
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

      public struct PageInfo: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["WPPageInfo"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("endCursor", type: .scalar(String.self)),
            GraphQLField("hasNextPage", type: .nonNull(.scalar(Bool.self))),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(endCursor: String? = nil, hasNextPage: Bool) {
          self.init(unsafeResultMap: ["__typename": "WPPageInfo", "endCursor": endCursor, "hasNextPage": hasNextPage])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// When paginating forwards, the cursor to continue.
        @available(*, deprecated, message: "")
        public var endCursor: String? {
          get {
            return resultMap["endCursor"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "endCursor")
          }
        }

        /// When paginating forwards, are there more items?
        @available(*, deprecated, message: "")
        public var hasNextPage: Bool {
          get {
            return resultMap["hasNextPage"]! as! Bool
          }
          set {
            resultMap.updateValue(newValue, forKey: "hasNextPage")
          }
        }
      }

      public struct Node: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Post", "Page", "MediaItem", "Email", "Card", "Chapter", "Promotion", "Collection", "Stack", "Bulletin"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLTypeCase(
              variants: ["Post": AsPost.selections],
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

        public static func makePage() -> Node {
          return Node(unsafeResultMap: ["__typename": "Page"])
        }

        public static func makeMediaItem() -> Node {
          return Node(unsafeResultMap: ["__typename": "MediaItem"])
        }

        public static func makeEmail() -> Node {
          return Node(unsafeResultMap: ["__typename": "Email"])
        }

        public static func makeCard() -> Node {
          return Node(unsafeResultMap: ["__typename": "Card"])
        }

        public static func makeChapter() -> Node {
          return Node(unsafeResultMap: ["__typename": "Chapter"])
        }

        public static func makePromotion() -> Node {
          return Node(unsafeResultMap: ["__typename": "Promotion"])
        }

        public static func makeCollection() -> Node {
          return Node(unsafeResultMap: ["__typename": "Collection"])
        }

        public static func makeStack() -> Node {
          return Node(unsafeResultMap: ["__typename": "Stack"])
        }

        public static func makeBulletin() -> Node {
          return Node(unsafeResultMap: ["__typename": "Bulletin"])
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
              GraphQLField("trackingUrls", type: .list(.scalar(String.self))),
              GraphQLFragmentSpread(ArticleTeaserParts.self),
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

          /// List of tracking urls
          @available(*, deprecated, message: "")
          public var trackingUrls: [String?]? {
            get {
              return resultMap["trackingUrls"] as? [String?]
            }
            set {
              resultMap.updateValue(newValue, forKey: "trackingUrls")
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
        }
      }
    }
  }
}

public final class LatestArticlesQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query LatestArticles($after: String = "", $edition: EditionName, $postsPerPage: Int) {
      posts(after: $after, first: $postsPerPage, where: {edition: $edition}) {
        __typename
        nodes {
          __typename
          ...ArticleTeaserParts
        }
        pageInfo {
          __typename
          endCursor
          hasNextPage
        }
      }
    }
    """

  public let operationName: String = "LatestArticles"

  public let operationIdentifier: String? = "122e5d9b2a49ecd134a6c44a75fbfbda3d10ca2aa6b767e3457c6696adb963c8"

  public var queryDocument: String { return operationDefinition.appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var after: String?
  public var edition: EditionName?
  public var postsPerPage: Int?

  public init(after: String? = nil, edition: EditionName? = nil, postsPerPage: Int? = nil) {
    self.after = after
    self.edition = edition
    self.postsPerPage = postsPerPage
  }

  public var variables: GraphQLMap? {
    return ["after": after, "edition": edition, "postsPerPage": postsPerPage]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("posts", arguments: ["after": GraphQLVariable("after"), "first": GraphQLVariable("postsPerPage"), "where": ["edition": GraphQLVariable("edition")]], type: .object(Post.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(posts: Post? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "posts": posts.flatMap { (value: Post) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var posts: Post? {
      get {
        return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "posts")
      }
    }

    public struct Post: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToPostConnection"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("nodes", type: .list(.object(Node.selections))),
          GraphQLField("pageInfo", type: .object(PageInfo.selections)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(nodes: [Node?]? = nil, pageInfo: PageInfo? = nil) {
        self.init(unsafeResultMap: ["__typename": "RootQueryToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, "pageInfo": pageInfo.flatMap { (value: PageInfo) -> ResultMap in value.resultMap }])
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

      /// Information about pagination in a connection.
      @available(*, deprecated, message: "")
      public var pageInfo: PageInfo? {
        get {
          return (resultMap["pageInfo"] as? ResultMap).flatMap { PageInfo(unsafeResultMap: $0) }
        }
        set {
          resultMap.updateValue(newValue?.resultMap, forKey: "pageInfo")
        }
      }

      public struct Node: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Post"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(ArticleTeaserParts.self),
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

          public var articleTeaserParts: ArticleTeaserParts {
            get {
              return ArticleTeaserParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }

      public struct PageInfo: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["WPPageInfo"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("endCursor", type: .scalar(String.self)),
            GraphQLField("hasNextPage", type: .nonNull(.scalar(Bool.self))),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(endCursor: String? = nil, hasNextPage: Bool) {
          self.init(unsafeResultMap: ["__typename": "WPPageInfo", "endCursor": endCursor, "hasNextPage": hasNextPage])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// When paginating forwards, the cursor to continue.
        @available(*, deprecated, message: "")
        public var endCursor: String? {
          get {
            return resultMap["endCursor"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "endCursor")
          }
        }

        /// When paginating forwards, are there more items?
        @available(*, deprecated, message: "")
        public var hasNextPage: Bool {
          get {
            return resultMap["hasNextPage"]! as! Bool
          }
          set {
            resultMap.updateValue(newValue, forKey: "hasNextPage")
          }
        }
      }
    }
  }
}

public final class EssentialsByArticleQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query EssentialsByArticle($id: ID!) {
      post(id: $id) {
        __typename
        id
        obsessions {
          __typename
          nodes {
            __typename
            ...ObsessionParts
            essentials(first: 1) {
              __typename
              nodes {
                __typename
                ...CollectionParts
              }
            }
          }
        }
        guides {
          __typename
          nodes {
            __typename
            ...GuideParts
            essentials(first: 1) {
              __typename
              nodes {
                __typename
                ...CollectionParts
              }
            }
          }
        }
      }
    }
    """

  public let operationName: String = "EssentialsByArticle"

  public let operationIdentifier: String? = "687be87a985daf1abc3641947ee69e96896d956a6a7c21d364c933329564da73"

  public var queryDocument: String { return operationDefinition.appending("\n" + ObsessionParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + CollectionParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + NugParts.fragmentDefinition).appending("\n" + GuideParts.fragmentDefinition) }

  public var id: GraphQLID

  public init(id: GraphQLID) {
    self.id = id
  }

  public var variables: GraphQLMap? {
    return ["id": id]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("post", arguments: ["id": GraphQLVariable("id")], type: .object(Post.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(post: Post? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "post": post.flatMap { (value: Post) -> ResultMap in value.resultMap }])
    }

    /// A 0bject
    @available(*, deprecated, message: "")
    public var post: Post? {
      get {
        return (resultMap["post"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "post")
      }
    }

    public struct Post: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["Post"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
          GraphQLField("obsessions", type: .object(Obsession.selections)),
          GraphQLField("guides", type: .object(Guide.selections)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(id: GraphQLID, obsessions: Obsession? = nil, guides: Guide? = nil) {
        self.init(unsafeResultMap: ["__typename": "Post", "id": id, "obsessions": obsessions.flatMap { (value: Obsession) -> ResultMap in value.resultMap }, "guides": guides.flatMap { (value: Guide) -> ResultMap in value.resultMap }])
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

      /// Connection between the post type and the post type
      @available(*, deprecated, message: "")
      public var obsessions: Obsession? {
        get {
          return (resultMap["obsessions"] as? ResultMap).flatMap { Obsession(unsafeResultMap: $0) }
        }
        set {
          resultMap.updateValue(newValue?.resultMap, forKey: "obsessions")
        }
      }

      /// Connection between the post type and the post type
      @available(*, deprecated, message: "")
      public var guides: Guide? {
        get {
          return (resultMap["guides"] as? ResultMap).flatMap { Guide(unsafeResultMap: $0) }
        }
        set {
          resultMap.updateValue(newValue?.resultMap, forKey: "guides")
        }
      }

      public struct Obsession: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["PostToObsessionConnection"]

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
          self.init(unsafeResultMap: ["__typename": "PostToObsessionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
          public static let possibleTypes: [String] = ["Obsession"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
              GraphQLFragmentSpread(ObsessionParts.self),
              GraphQLField("essentials", arguments: ["first": 1], type: .object(Essential.selections)),
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

          /// Connection between the Obsession type and the Obsession type
          @available(*, deprecated, message: "")
          public var essentials: Essential? {
            get {
              return (resultMap["essentials"] as? ResultMap).flatMap { Essential(unsafeResultMap: $0) }
            }
            set {
              resultMap.updateValue(newValue?.resultMap, forKey: "essentials")
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

            public var obsessionParts: ObsessionParts {
              get {
                return ObsessionParts(unsafeResultMap: resultMap)
              }
              set {
                resultMap += newValue.resultMap
              }
            }
          }

          public struct Essential: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["ObsessionToCollectionConnection"]

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
              self.init(unsafeResultMap: ["__typename": "ObsessionToCollectionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
                  GraphQLFragmentSpread(CollectionParts.self),
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

                public var collectionParts: CollectionParts {
                  get {
                    return CollectionParts(unsafeResultMap: resultMap)
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

      public struct Guide: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["PostToGuideConnection"]

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
          self.init(unsafeResultMap: ["__typename": "PostToGuideConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
          public static let possibleTypes: [String] = ["Guide"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
              GraphQLFragmentSpread(GuideParts.self),
              GraphQLField("essentials", arguments: ["first": 1], type: .object(Essential.selections)),
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

          /// Connection between the Guide type and the Guide type
          @available(*, deprecated, message: "")
          public var essentials: Essential? {
            get {
              return (resultMap["essentials"] as? ResultMap).flatMap { Essential(unsafeResultMap: $0) }
            }
            set {
              resultMap.updateValue(newValue?.resultMap, forKey: "essentials")
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

            public var guideParts: GuideParts {
              get {
                return GuideParts(unsafeResultMap: resultMap)
              }
              set {
                resultMap += newValue.resultMap
              }
            }
          }

          public struct Essential: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["GuideToCollectionConnection"]

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
              self.init(unsafeResultMap: ["__typename": "GuideToCollectionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
                  GraphQLFragmentSpread(CollectionParts.self),
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

                public var collectionParts: CollectionParts {
                  get {
                    return CollectionParts(unsafeResultMap: resultMap)
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
    }
  }
}

public final class EssentialsByGuideQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query EssentialsByGuide($slug: String!) {
      guides(where: {slug: [$slug]}) {
        __typename
        nodes {
          __typename
          essentials(first: 1) {
            __typename
            nodes {
              __typename
              ...CollectionParts
            }
          }
        }
      }
    }
    """

  public let operationName: String = "EssentialsByGuide"

  public let operationIdentifier: String? = "9bb66a7b48d5f0b72ec317ce51872019079ee22d2be8d5cd552d6177ddb6e69a"

  public var queryDocument: String { return operationDefinition.appending("\n" + CollectionParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + NugParts.fragmentDefinition) }

  public var slug: String

  public init(slug: String) {
    self.slug = slug
  }

  public var variables: GraphQLMap? {
    return ["slug": slug]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("guides", arguments: ["where": ["slug": [GraphQLVariable("slug")]]], type: .object(Guide.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(guides: Guide? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "guides": guides.flatMap { (value: Guide) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var guides: Guide? {
      get {
        return (resultMap["guides"] as? ResultMap).flatMap { Guide(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "guides")
      }
    }

    public struct Guide: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToGuideConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToGuideConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Guide"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("essentials", arguments: ["first": 1], type: .object(Essential.selections)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(essentials: Essential? = nil) {
          self.init(unsafeResultMap: ["__typename": "Guide", "essentials": essentials.flatMap { (value: Essential) -> ResultMap in value.resultMap }])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// Connection between the Guide type and the Guide type
        @available(*, deprecated, message: "")
        public var essentials: Essential? {
          get {
            return (resultMap["essentials"] as? ResultMap).flatMap { Essential(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "essentials")
          }
        }

        public struct Essential: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["GuideToCollectionConnection"]

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
            self.init(unsafeResultMap: ["__typename": "GuideToCollectionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
                GraphQLFragmentSpread(CollectionParts.self),
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

              public var collectionParts: CollectionParts {
                get {
                  return CollectionParts(unsafeResultMap: resultMap)
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
  }
}

public final class EssentialsByObsessionQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query EssentialsByObsession($slug: String!) {
      obsessions(where: {slug: [$slug]}) {
        __typename
        nodes {
          __typename
          essentials(first: 1) {
            __typename
            nodes {
              __typename
              ...CollectionParts
            }
          }
        }
      }
    }
    """

  public let operationName: String = "EssentialsByObsession"

  public let operationIdentifier: String? = "b9bf3b370e0b516799bf5132355353702975773e8c54cc7bd2c318fa943fea9a"

  public var queryDocument: String { return operationDefinition.appending("\n" + CollectionParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + NugParts.fragmentDefinition) }

  public var slug: String

  public init(slug: String) {
    self.slug = slug
  }

  public var variables: GraphQLMap? {
    return ["slug": slug]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("obsessions", arguments: ["where": ["slug": [GraphQLVariable("slug")]]], type: .object(Obsession.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(obsessions: Obsession? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "obsessions": obsessions.flatMap { (value: Obsession) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var obsessions: Obsession? {
      get {
        return (resultMap["obsessions"] as? ResultMap).flatMap { Obsession(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "obsessions")
      }
    }

    public struct Obsession: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToObsessionConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToObsessionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Obsession"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("essentials", arguments: ["first": 1], type: .object(Essential.selections)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(essentials: Essential? = nil) {
          self.init(unsafeResultMap: ["__typename": "Obsession", "essentials": essentials.flatMap { (value: Essential) -> ResultMap in value.resultMap }])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// Connection between the Obsession type and the Obsession type
        @available(*, deprecated, message: "")
        public var essentials: Essential? {
          get {
            return (resultMap["essentials"] as? ResultMap).flatMap { Essential(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "essentials")
          }
        }

        public struct Essential: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["ObsessionToCollectionConnection"]

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
            self.init(unsafeResultMap: ["__typename": "ObsessionToCollectionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
                GraphQLFragmentSpread(CollectionParts.self),
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

              public var collectionParts: CollectionParts {
                get {
                  return CollectionParts(unsafeResultMap: resultMap)
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
  }
}

public final class DiscoverQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query Discover($topics: [String]!) {
      latest: posts(first: 5) {
        __typename
        nodes {
          __typename
          ...ArticleTeaserParts
        }
      }
      trendingPosts(first: 5) {
        __typename
        nodes {
          __typename
          ...ArticleTeaserParts
        }
      }
      topics(first: 7, where: {slug: $topics}) {
        __typename
        nodes {
          __typename
          ...TopicParts
          posts(first: 3) {
            __typename
            nodes {
              __typename
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
    """

  public let operationName: String = "Discover"

  public let operationIdentifier: String? = "c9563403249a40b285c1167b5b5b65507a69e7835e65bcf7f41674e316f3dc54"

  public var queryDocument: String { return operationDefinition.appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + TopicParts.fragmentDefinition) }

  public var topics: [String?]

  public init(topics: [String?]) {
    self.topics = topics
  }

  public var variables: GraphQLMap? {
    return ["topics": topics]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("posts", alias: "latest", arguments: ["first": 5], type: .object(Latest.selections)),
        GraphQLField("trendingPosts", arguments: ["first": 5], type: .object(TrendingPost.selections)),
        GraphQLField("topics", arguments: ["first": 7, "where": ["slug": GraphQLVariable("topics")]], type: .object(Topic.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(latest: Latest? = nil, trendingPosts: TrendingPost? = nil, topics: Topic? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "latest": latest.flatMap { (value: Latest) -> ResultMap in value.resultMap }, "trendingPosts": trendingPosts.flatMap { (value: TrendingPost) -> ResultMap in value.resultMap }, "topics": topics.flatMap { (value: Topic) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var latest: Latest? {
      get {
        return (resultMap["latest"] as? ResultMap).flatMap { Latest(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "latest")
      }
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var trendingPosts: TrendingPost? {
      get {
        return (resultMap["trendingPosts"] as? ResultMap).flatMap { TrendingPost(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "trendingPosts")
      }
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var topics: Topic? {
      get {
        return (resultMap["topics"] as? ResultMap).flatMap { Topic(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "topics")
      }
    }

    public struct Latest: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToPostConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Post"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(ArticleTeaserParts.self),
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

          public var articleTeaserParts: ArticleTeaserParts {
            get {
              return ArticleTeaserParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }
    }

    public struct TrendingPost: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToPostConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Post"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(ArticleTeaserParts.self),
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

          public var articleTeaserParts: ArticleTeaserParts {
            get {
              return ArticleTeaserParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }
      }
    }

    public struct Topic: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToTopicConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToTopicConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Topic"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(TopicParts.self),
            GraphQLField("posts", arguments: ["first": 3], type: .object(Post.selections)),
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

        /// Connection between the topic type and the topic type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

          public var topicParts: TopicParts {
            get {
              return TopicParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["TopicToPostConnection"]

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
            self.init(unsafeResultMap: ["__typename": "TopicToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
            public static let possibleTypes: [String] = ["Post"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ArticleTeaserParts.self),
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

              public var articleTeaserParts: ArticleTeaserParts {
                get {
                  return ArticleTeaserParts(unsafeResultMap: resultMap)
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
  }
}

public final class GuidesQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query Guides($before: String = "", $perPage: Int = 10, $postsPerGuide: Int = 1) {
      guides(before: $before, last: $perPage, where: {orderby: TERM_ID}) {
        __typename
        nodes {
          __typename
          ...GuideParts
          posts(last: $postsPerGuide) {
            __typename
            nodes {
              __typename
              ...ArticleTeaserParts
            }
          }
        }
        pageInfo {
          __typename
          hasPreviousPage
          startCursor
        }
      }
    }
    """

  public let operationName: String = "Guides"

  public let operationIdentifier: String? = "9c67d1bec30edb71a0862e3a2a4564191360bd0f6ac186b30a0b20fcd8d49e53"

  public var queryDocument: String { return operationDefinition.appending("\n" + GuideParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var before: String?
  public var perPage: Int?
  public var postsPerGuide: Int?

  public init(before: String? = nil, perPage: Int? = nil, postsPerGuide: Int? = nil) {
    self.before = before
    self.perPage = perPage
    self.postsPerGuide = postsPerGuide
  }

  public var variables: GraphQLMap? {
    return ["before": before, "perPage": perPage, "postsPerGuide": postsPerGuide]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("guides", arguments: ["before": GraphQLVariable("before"), "last": GraphQLVariable("perPage"), "where": ["orderby": "TERM_ID"]], type: .object(Guide.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(guides: Guide? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "guides": guides.flatMap { (value: Guide) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var guides: Guide? {
      get {
        return (resultMap["guides"] as? ResultMap).flatMap { Guide(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "guides")
      }
    }

    public struct Guide: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToGuideConnection"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("nodes", type: .list(.object(Node.selections))),
          GraphQLField("pageInfo", type: .object(PageInfo.selections)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(nodes: [Node?]? = nil, pageInfo: PageInfo? = nil) {
        self.init(unsafeResultMap: ["__typename": "RootQueryToGuideConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, "pageInfo": pageInfo.flatMap { (value: PageInfo) -> ResultMap in value.resultMap }])
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

      /// Information about pagination in a connection.
      @available(*, deprecated, message: "")
      public var pageInfo: PageInfo? {
        get {
          return (resultMap["pageInfo"] as? ResultMap).flatMap { PageInfo(unsafeResultMap: $0) }
        }
        set {
          resultMap.updateValue(newValue?.resultMap, forKey: "pageInfo")
        }
      }

      public struct Node: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Guide"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(GuideParts.self),
            GraphQLField("posts", arguments: ["last": GraphQLVariable("postsPerGuide")], type: .object(Post.selections)),
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

        /// Connection between the guide type and the guide type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

          public var guideParts: GuideParts {
            get {
              return GuideParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["GuideToPostConnection"]

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
            self.init(unsafeResultMap: ["__typename": "GuideToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
            public static let possibleTypes: [String] = ["Post"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ArticleTeaserParts.self),
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

              public var articleTeaserParts: ArticleTeaserParts {
                get {
                  return ArticleTeaserParts(unsafeResultMap: resultMap)
                }
                set {
                  resultMap += newValue.resultMap
                }
              }
            }
          }
        }
      }

      public struct PageInfo: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["WPPageInfo"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("hasPreviousPage", type: .nonNull(.scalar(Bool.self))),
            GraphQLField("startCursor", type: .scalar(String.self)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(hasPreviousPage: Bool, startCursor: String? = nil) {
          self.init(unsafeResultMap: ["__typename": "WPPageInfo", "hasPreviousPage": hasPreviousPage, "startCursor": startCursor])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// When paginating backwards, are there more items?
        @available(*, deprecated, message: "")
        public var hasPreviousPage: Bool {
          get {
            return resultMap["hasPreviousPage"]! as! Bool
          }
          set {
            resultMap.updateValue(newValue, forKey: "hasPreviousPage")
          }
        }

        /// When paginating backwards, the cursor to continue.
        @available(*, deprecated, message: "")
        public var startCursor: String? {
          get {
            return resultMap["startCursor"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "startCursor")
          }
        }
      }
    }
  }
}

public final class GuidesBySlugQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query GuidesBySlug($perPage: Int!, $slugs: [String]!) {
      guides(first: $perPage, where: {slug: $slugs}) {
        __typename
        nodes {
          __typename
          ...GuideParts
        }
      }
    }
    """

  public let operationName: String = "GuidesBySlug"

  public let operationIdentifier: String? = "a5242afcda999203dfa1b958ffe840ac91be36d402e42874d48d9c453bf3ad76"

  public var queryDocument: String { return operationDefinition.appending("\n" + GuideParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition) }

  public var perPage: Int
  public var slugs: [String?]

  public init(perPage: Int, slugs: [String?]) {
    self.perPage = perPage
    self.slugs = slugs
  }

  public var variables: GraphQLMap? {
    return ["perPage": perPage, "slugs": slugs]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("guides", arguments: ["first": GraphQLVariable("perPage"), "where": ["slug": GraphQLVariable("slugs")]], type: .object(Guide.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(guides: Guide? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "guides": guides.flatMap { (value: Guide) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var guides: Guide? {
      get {
        return (resultMap["guides"] as? ResultMap).flatMap { Guide(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "guides")
      }
    }

    public struct Guide: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToGuideConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToGuideConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Guide"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(GuideParts.self),
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

          public var guideParts: GuideParts {
            get {
              return GuideParts(unsafeResultMap: resultMap)
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

public final class HomeCollectionQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query HomeCollection {
      collections(first: 1, where: {tagSlugIn: ["home"]}) {
        __typename
        nodes {
          __typename
          ...CollectionParts
        }
      }
    }
    """

  public let operationName: String = "HomeCollection"

  public let operationIdentifier: String? = "880bec07806bd78f8f0187d049012aa6350a3183d846bc0e58ac949ee7b26e62"

  public var queryDocument: String { return operationDefinition.appending("\n" + CollectionParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + NugParts.fragmentDefinition) }

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
            GraphQLFragmentSpread(CollectionParts.self),
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

          public var collectionParts: CollectionParts {
            get {
              return CollectionParts(unsafeResultMap: resultMap)
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
          ...CollectionParts
        }
      }
    }
    """

  public let operationName: String = "HomeCollectionPreview"

  public let operationIdentifier: String? = "a1b3c74e90ed0b7164d5b1be05ea95a43b0a312e0fd2cf1685ac370ddafa5456"

  public var queryDocument: String { return operationDefinition.appending("\n" + CollectionParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + NugParts.fragmentDefinition) }

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
            GraphQLFragmentSpread(CollectionParts.self),
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

          public var collectionParts: CollectionParts {
            get {
              return CollectionParts(unsafeResultMap: resultMap)
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

public final class MemberHomeQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query MemberHome {
      features: menuItems(first: 3, where: {location: FEATURES_MEMBERS}) {
        __typename
        nodes {
          __typename
          id
          connectedObject {
            __typename
            ... on Tag {
              ...TagParts
              posts(first: 3, where: {orderby: {field: MEMBERSHIP}}) {
                __typename
                nodes {
                  __typename
                  ...ArticleTeaserParts
                }
              }
            }
          }
        }
      }
      guides(last: 6, where: {orderby: TERM_ORDER}) {
        __typename
        nodes {
          __typename
          ...GuideParts
          posts(last: 1) {
            __typename
            nodes {
              __typename
              ...ArticleTeaserParts
            }
          }
        }
      }
    }
    """

  public let operationName: String = "MemberHome"

  public let operationIdentifier: String? = "cebfc2131d886a10270bd560badcbe264c2ceccbccc2f01d35238347e3daf575"

  public var queryDocument: String { return operationDefinition.appending("\n" + TagParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + GuideParts.fragmentDefinition) }

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("menuItems", alias: "features", arguments: ["first": 3, "where": ["location": "FEATURES_MEMBERS"]], type: .object(Feature.selections)),
        GraphQLField("guides", arguments: ["last": 6, "where": ["orderby": "TERM_ORDER"]], type: .object(Guide.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(features: Feature? = nil, guides: Guide? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "features": features.flatMap { (value: Feature) -> ResultMap in value.resultMap }, "guides": guides.flatMap { (value: Guide) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var features: Feature? {
      get {
        return (resultMap["features"] as? ResultMap).flatMap { Feature(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "features")
      }
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var guides: Guide? {
      get {
        return (resultMap["guides"] as? ResultMap).flatMap { Guide(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "guides")
      }
    }

    public struct Feature: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToMenuItemConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToMenuItemConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["MenuItem"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
            GraphQLField("connectedObject", type: .object(ConnectedObject.selections)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(id: GraphQLID, connectedObject: ConnectedObject? = nil) {
          self.init(unsafeResultMap: ["__typename": "MenuItem", "id": id, "connectedObject": connectedObject.flatMap { (value: ConnectedObject) -> ResultMap in value.resultMap }])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// Relay ID of the menu item.
        @available(*, deprecated, message: "")
        public var id: GraphQLID {
          get {
            return resultMap["id"]! as! GraphQLID
          }
          set {
            resultMap.updateValue(newValue, forKey: "id")
          }
        }

        /// The object connected to this menu item.
        @available(*, deprecated, message: "")
        public var connectedObject: ConnectedObject? {
          get {
            return (resultMap["connectedObject"] as? ResultMap).flatMap { ConnectedObject(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "connectedObject")
          }
        }

        public struct ConnectedObject: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["Post", "Page", "Email", "Chapter", "Promotion", "BlogPost", "Nug", "Collection", "Category", "Tag", "EmailList", "Obsession", "Topic", "Show", "CoAuthor", "MenuItem"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLTypeCase(
                variants: ["Tag": AsTag.selections],
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

          public static func makePost() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Post"])
          }

          public static func makePage() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Page"])
          }

          public static func makeEmail() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Email"])
          }

          public static func makeChapter() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Chapter"])
          }

          public static func makePromotion() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Promotion"])
          }

          public static func makeBlogPost() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "BlogPost"])
          }

          public static func makeNug() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Nug"])
          }

          public static func makeCollection() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Collection"])
          }

          public static func makeCategory() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Category"])
          }

          public static func makeEmailList() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "EmailList"])
          }

          public static func makeObsession() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Obsession"])
          }

          public static func makeTopic() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Topic"])
          }

          public static func makeShow() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Show"])
          }

          public static func makeCoAuthor() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "CoAuthor"])
          }

          public static func makeMenuItem() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "MenuItem"])
          }

          public var __typename: String {
            get {
              return resultMap["__typename"]! as! String
            }
            set {
              resultMap.updateValue(newValue, forKey: "__typename")
            }
          }

          public var asTag: AsTag? {
            get {
              if !AsTag.possibleTypes.contains(__typename) { return nil }
              return AsTag(unsafeResultMap: resultMap)
            }
            set {
              guard let newValue = newValue else { return }
              resultMap = newValue.resultMap
            }
          }

          public struct AsTag: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["Tag"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(TagParts.self),
                GraphQLField("posts", arguments: ["first": 3, "where": ["orderby": ["field": "MEMBERSHIP"]]], type: .object(Post.selections)),
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

            /// Connection between the tag type and the tag type
            @available(*, deprecated, message: "")
            public var posts: Post? {
              get {
                return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
              }
              set {
                resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

              public var tagParts: TagParts {
                get {
                  return TagParts(unsafeResultMap: resultMap)
                }
                set {
                  resultMap += newValue.resultMap
                }
              }
            }

            public struct Post: GraphQLSelectionSet {
              public static let possibleTypes: [String] = ["TagToPostConnection"]

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
                self.init(unsafeResultMap: ["__typename": "TagToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
                public static let possibleTypes: [String] = ["Post"]

                public static var selections: [GraphQLSelection] {
                  return [
                    GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                    GraphQLFragmentSpread(ArticleTeaserParts.self),
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

                  public var articleTeaserParts: ArticleTeaserParts {
                    get {
                      return ArticleTeaserParts(unsafeResultMap: resultMap)
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
      }
    }

    public struct Guide: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToGuideConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToGuideConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Guide"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(GuideParts.self),
            GraphQLField("posts", arguments: ["last": 1], type: .object(Post.selections)),
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

        /// Connection between the guide type and the guide type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

          public var guideParts: GuideParts {
            get {
              return GuideParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["GuideToPostConnection"]

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
            self.init(unsafeResultMap: ["__typename": "GuideToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
            public static let possibleTypes: [String] = ["Post"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ArticleTeaserParts.self),
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

              public var articleTeaserParts: ArticleTeaserParts {
                get {
                  return ArticleTeaserParts(unsafeResultMap: resultMap)
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
  }
}

public final class MemberVideoQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query MemberVideo {
      features: menuItems(first: 3, where: {location: FEATURES_VIDEO_MEMBERS}) {
        __typename
        nodes {
          __typename
          id
          connectedObject {
            __typename
            ... on Tag {
              ...TagParts
              posts(first: 6, where: {orderby: {field: MEMBERSHIP}}) {
                __typename
                nodes {
                  __typename
                  ...ArticleTeaserParts
                }
              }
            }
          }
        }
      }
    }
    """

  public let operationName: String = "MemberVideo"

  public let operationIdentifier: String? = "594edcab1e9411725c891ed7b7b7c1ef05b325b8e9400875c988b0a0bf29005c"

  public var queryDocument: String { return operationDefinition.appending("\n" + TagParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("menuItems", alias: "features", arguments: ["first": 3, "where": ["location": "FEATURES_VIDEO_MEMBERS"]], type: .object(Feature.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(features: Feature? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "features": features.flatMap { (value: Feature) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var features: Feature? {
      get {
        return (resultMap["features"] as? ResultMap).flatMap { Feature(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "features")
      }
    }

    public struct Feature: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToMenuItemConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToMenuItemConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["MenuItem"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
            GraphQLField("connectedObject", type: .object(ConnectedObject.selections)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(id: GraphQLID, connectedObject: ConnectedObject? = nil) {
          self.init(unsafeResultMap: ["__typename": "MenuItem", "id": id, "connectedObject": connectedObject.flatMap { (value: ConnectedObject) -> ResultMap in value.resultMap }])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// Relay ID of the menu item.
        @available(*, deprecated, message: "")
        public var id: GraphQLID {
          get {
            return resultMap["id"]! as! GraphQLID
          }
          set {
            resultMap.updateValue(newValue, forKey: "id")
          }
        }

        /// The object connected to this menu item.
        @available(*, deprecated, message: "")
        public var connectedObject: ConnectedObject? {
          get {
            return (resultMap["connectedObject"] as? ResultMap).flatMap { ConnectedObject(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "connectedObject")
          }
        }

        public struct ConnectedObject: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["Post", "Page", "Email", "Chapter", "Promotion", "BlogPost", "Nug", "Collection", "Category", "Tag", "EmailList", "Obsession", "Topic", "Show", "CoAuthor", "MenuItem"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLTypeCase(
                variants: ["Tag": AsTag.selections],
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

          public static func makePost() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Post"])
          }

          public static func makePage() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Page"])
          }

          public static func makeEmail() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Email"])
          }

          public static func makeChapter() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Chapter"])
          }

          public static func makePromotion() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Promotion"])
          }

          public static func makeBlogPost() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "BlogPost"])
          }

          public static func makeNug() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Nug"])
          }

          public static func makeCollection() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Collection"])
          }

          public static func makeCategory() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Category"])
          }

          public static func makeEmailList() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "EmailList"])
          }

          public static func makeObsession() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Obsession"])
          }

          public static func makeTopic() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Topic"])
          }

          public static func makeShow() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Show"])
          }

          public static func makeCoAuthor() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "CoAuthor"])
          }

          public static func makeMenuItem() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "MenuItem"])
          }

          public var __typename: String {
            get {
              return resultMap["__typename"]! as! String
            }
            set {
              resultMap.updateValue(newValue, forKey: "__typename")
            }
          }

          public var asTag: AsTag? {
            get {
              if !AsTag.possibleTypes.contains(__typename) { return nil }
              return AsTag(unsafeResultMap: resultMap)
            }
            set {
              guard let newValue = newValue else { return }
              resultMap = newValue.resultMap
            }
          }

          public struct AsTag: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["Tag"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(TagParts.self),
                GraphQLField("posts", arguments: ["first": 6, "where": ["orderby": ["field": "MEMBERSHIP"]]], type: .object(Post.selections)),
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

            /// Connection between the tag type and the tag type
            @available(*, deprecated, message: "")
            public var posts: Post? {
              get {
                return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
              }
              set {
                resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

              public var tagParts: TagParts {
                get {
                  return TagParts(unsafeResultMap: resultMap)
                }
                set {
                  resultMap += newValue.resultMap
                }
              }
            }

            public struct Post: GraphQLSelectionSet {
              public static let possibleTypes: [String] = ["TagToPostConnection"]

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
                self.init(unsafeResultMap: ["__typename": "TagToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
                public static let possibleTypes: [String] = ["Post"]

                public static var selections: [GraphQLSelection] {
                  return [
                    GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                    GraphQLFragmentSpread(ArticleTeaserParts.self),
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

                  public var articleTeaserParts: ArticleTeaserParts {
                    get {
                      return ArticleTeaserParts(unsafeResultMap: resultMap)
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
      }
    }
  }
}

public final class VideoHubQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query VideoHub {
      featuredVideoPlayer: menuItems(where: {location: PLAYER_VIDEO}) {
        __typename
        nodes {
          __typename
          connectedObject {
            __typename
            ...ArticleTeaserParts
            ... on Post {
              shows {
                __typename
                nodes {
                  __typename
                  ...ShowParts
                }
              }
            }
          }
        }
      }
      latest: tags(where: {slug: "quartz-video"}) {
        __typename
        nodes {
          __typename
          posts(first: 6) {
            __typename
            nodes {
              __typename
              ...ArticleTeaserParts
              shows {
                __typename
                nodes {
                  __typename
                  ...ShowParts
                }
              }
            }
          }
        }
      }
      featuredShows: menuItems(where: {location: SHOWS_VIDEO}) {
        __typename
        nodes {
          __typename
          connectedObject {
            __typename
            ... on Show {
              ...ShowParts
              posts(first: 6) {
                __typename
                nodes {
                  __typename
                  ...ArticleTeaserParts
                }
              }
            }
          }
        }
      }
      allShows: shows(last: 40, where: {orderby: TERM_ID}) {
        __typename
        nodes {
          __typename
          ...ShowParts
        }
      }
    }
    """

  public let operationName: String = "VideoHub"

  public let operationIdentifier: String? = "3135d497a3ab785dc17419c8807a3ebaa05240bd7b1acb10f652cb0919d9abca"

  public var queryDocument: String { return operationDefinition.appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition).appending("\n" + ShowParts.fragmentDefinition) }

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("menuItems", alias: "featuredVideoPlayer", arguments: ["where": ["location": "PLAYER_VIDEO"]], type: .object(FeaturedVideoPlayer.selections)),
        GraphQLField("tags", alias: "latest", arguments: ["where": ["slug": "quartz-video"]], type: .object(Latest.selections)),
        GraphQLField("menuItems", alias: "featuredShows", arguments: ["where": ["location": "SHOWS_VIDEO"]], type: .object(FeaturedShow.selections)),
        GraphQLField("shows", alias: "allShows", arguments: ["last": 40, "where": ["orderby": "TERM_ID"]], type: .object(AllShow.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(featuredVideoPlayer: FeaturedVideoPlayer? = nil, latest: Latest? = nil, featuredShows: FeaturedShow? = nil, allShows: AllShow? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "featuredVideoPlayer": featuredVideoPlayer.flatMap { (value: FeaturedVideoPlayer) -> ResultMap in value.resultMap }, "latest": latest.flatMap { (value: Latest) -> ResultMap in value.resultMap }, "featuredShows": featuredShows.flatMap { (value: FeaturedShow) -> ResultMap in value.resultMap }, "allShows": allShows.flatMap { (value: AllShow) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var featuredVideoPlayer: FeaturedVideoPlayer? {
      get {
        return (resultMap["featuredVideoPlayer"] as? ResultMap).flatMap { FeaturedVideoPlayer(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "featuredVideoPlayer")
      }
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var latest: Latest? {
      get {
        return (resultMap["latest"] as? ResultMap).flatMap { Latest(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "latest")
      }
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var featuredShows: FeaturedShow? {
      get {
        return (resultMap["featuredShows"] as? ResultMap).flatMap { FeaturedShow(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "featuredShows")
      }
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var allShows: AllShow? {
      get {
        return (resultMap["allShows"] as? ResultMap).flatMap { AllShow(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "allShows")
      }
    }

    public struct FeaturedVideoPlayer: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToMenuItemConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToMenuItemConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["MenuItem"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("connectedObject", type: .object(ConnectedObject.selections)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(connectedObject: ConnectedObject? = nil) {
          self.init(unsafeResultMap: ["__typename": "MenuItem", "connectedObject": connectedObject.flatMap { (value: ConnectedObject) -> ResultMap in value.resultMap }])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// The object connected to this menu item.
        @available(*, deprecated, message: "")
        public var connectedObject: ConnectedObject? {
          get {
            return (resultMap["connectedObject"] as? ResultMap).flatMap { ConnectedObject(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "connectedObject")
          }
        }

        public struct ConnectedObject: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["Post", "Page", "Email", "Chapter", "Promotion", "BlogPost", "Nug", "Collection", "Category", "Tag", "EmailList", "Obsession", "Topic", "Show", "CoAuthor", "MenuItem"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLTypeCase(
                variants: ["Post": AsPost.selections],
                default: [
                  GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                  GraphQLFragmentSpread(ArticleTeaserParts.self),
                ]
              )
            ]
          }

          public private(set) var resultMap: ResultMap

          public init(unsafeResultMap: ResultMap) {
            self.resultMap = unsafeResultMap
          }

          public static func makePage() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Page"])
          }

          public static func makeEmail() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Email"])
          }

          public static func makeChapter() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Chapter"])
          }

          public static func makePromotion() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Promotion"])
          }

          public static func makeBlogPost() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "BlogPost"])
          }

          public static func makeNug() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Nug"])
          }

          public static func makeCollection() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Collection"])
          }

          public static func makeCategory() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Category"])
          }

          public static func makeTag() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Tag"])
          }

          public static func makeEmailList() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "EmailList"])
          }

          public static func makeObsession() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Obsession"])
          }

          public static func makeTopic() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Topic"])
          }

          public static func makeShow() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Show"])
          }

          public static func makeCoAuthor() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "CoAuthor"])
          }

          public static func makeMenuItem() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "MenuItem"])
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

            public var articleTeaserParts: ArticleTeaserParts? {
              get {
                if !ArticleTeaserParts.possibleTypes.contains(resultMap["__typename"]! as! String) { return nil }
                return ArticleTeaserParts(unsafeResultMap: resultMap)
              }
              set {
                guard let newValue = newValue else { return }
                resultMap += newValue.resultMap
              }
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
                GraphQLFragmentSpread(ArticleTeaserParts.self),
                GraphQLField("shows", type: .object(Show.selections)),
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
            public var shows: Show? {
              get {
                return (resultMap["shows"] as? ResultMap).flatMap { Show(unsafeResultMap: $0) }
              }
              set {
                resultMap.updateValue(newValue?.resultMap, forKey: "shows")
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

            public struct Show: GraphQLSelectionSet {
              public static let possibleTypes: [String] = ["PostToShowConnection"]

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
                self.init(unsafeResultMap: ["__typename": "PostToShowConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
                public static let possibleTypes: [String] = ["Show"]

                public static var selections: [GraphQLSelection] {
                  return [
                    GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                    GraphQLFragmentSpread(ShowParts.self),
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

                  public var showParts: ShowParts {
                    get {
                      return ShowParts(unsafeResultMap: resultMap)
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
      }
    }

    public struct Latest: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToTagConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToTagConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Tag"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("posts", arguments: ["first": 6], type: .object(Post.selections)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(posts: Post? = nil) {
          self.init(unsafeResultMap: ["__typename": "Tag", "posts": posts.flatMap { (value: Post) -> ResultMap in value.resultMap }])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// Connection between the tag type and the tag type
        @available(*, deprecated, message: "")
        public var posts: Post? {
          get {
            return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "posts")
          }
        }

        public struct Post: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["TagToPostConnection"]

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
            self.init(unsafeResultMap: ["__typename": "TagToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
            public static let possibleTypes: [String] = ["Post"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ArticleTeaserParts.self),
                GraphQLField("shows", type: .object(Show.selections)),
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
            public var shows: Show? {
              get {
                return (resultMap["shows"] as? ResultMap).flatMap { Show(unsafeResultMap: $0) }
              }
              set {
                resultMap.updateValue(newValue?.resultMap, forKey: "shows")
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

            public struct Show: GraphQLSelectionSet {
              public static let possibleTypes: [String] = ["PostToShowConnection"]

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
                self.init(unsafeResultMap: ["__typename": "PostToShowConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
                public static let possibleTypes: [String] = ["Show"]

                public static var selections: [GraphQLSelection] {
                  return [
                    GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                    GraphQLFragmentSpread(ShowParts.self),
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

                  public var showParts: ShowParts {
                    get {
                      return ShowParts(unsafeResultMap: resultMap)
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
      }
    }

    public struct FeaturedShow: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToMenuItemConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToMenuItemConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["MenuItem"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("connectedObject", type: .object(ConnectedObject.selections)),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(connectedObject: ConnectedObject? = nil) {
          self.init(unsafeResultMap: ["__typename": "MenuItem", "connectedObject": connectedObject.flatMap { (value: ConnectedObject) -> ResultMap in value.resultMap }])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        /// The object connected to this menu item.
        @available(*, deprecated, message: "")
        public var connectedObject: ConnectedObject? {
          get {
            return (resultMap["connectedObject"] as? ResultMap).flatMap { ConnectedObject(unsafeResultMap: $0) }
          }
          set {
            resultMap.updateValue(newValue?.resultMap, forKey: "connectedObject")
          }
        }

        public struct ConnectedObject: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["Post", "Page", "Email", "Chapter", "Promotion", "BlogPost", "Nug", "Collection", "Category", "Tag", "EmailList", "Obsession", "Topic", "Show", "CoAuthor", "MenuItem"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLTypeCase(
                variants: ["Show": AsShow.selections],
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

          public static func makePost() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Post"])
          }

          public static func makePage() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Page"])
          }

          public static func makeEmail() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Email"])
          }

          public static func makeChapter() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Chapter"])
          }

          public static func makePromotion() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Promotion"])
          }

          public static func makeBlogPost() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "BlogPost"])
          }

          public static func makeNug() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Nug"])
          }

          public static func makeCollection() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Collection"])
          }

          public static func makeCategory() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Category"])
          }

          public static func makeTag() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Tag"])
          }

          public static func makeEmailList() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "EmailList"])
          }

          public static func makeObsession() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Obsession"])
          }

          public static func makeTopic() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "Topic"])
          }

          public static func makeCoAuthor() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "CoAuthor"])
          }

          public static func makeMenuItem() -> ConnectedObject {
            return ConnectedObject(unsafeResultMap: ["__typename": "MenuItem"])
          }

          public var __typename: String {
            get {
              return resultMap["__typename"]! as! String
            }
            set {
              resultMap.updateValue(newValue, forKey: "__typename")
            }
          }

          public var asShow: AsShow? {
            get {
              if !AsShow.possibleTypes.contains(__typename) { return nil }
              return AsShow(unsafeResultMap: resultMap)
            }
            set {
              guard let newValue = newValue else { return }
              resultMap = newValue.resultMap
            }
          }

          public struct AsShow: GraphQLSelectionSet {
            public static let possibleTypes: [String] = ["Show"]

            public static var selections: [GraphQLSelection] {
              return [
                GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                GraphQLFragmentSpread(ShowParts.self),
                GraphQLField("posts", arguments: ["first": 6], type: .object(Post.selections)),
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

            /// Connection between the show type and the show type
            @available(*, deprecated, message: "")
            public var posts: Post? {
              get {
                return (resultMap["posts"] as? ResultMap).flatMap { Post(unsafeResultMap: $0) }
              }
              set {
                resultMap.updateValue(newValue?.resultMap, forKey: "posts")
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

              public var showParts: ShowParts {
                get {
                  return ShowParts(unsafeResultMap: resultMap)
                }
                set {
                  resultMap += newValue.resultMap
                }
              }
            }

            public struct Post: GraphQLSelectionSet {
              public static let possibleTypes: [String] = ["ShowToPostConnection"]

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
                self.init(unsafeResultMap: ["__typename": "ShowToPostConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
                public static let possibleTypes: [String] = ["Post"]

                public static var selections: [GraphQLSelection] {
                  return [
                    GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
                    GraphQLFragmentSpread(ArticleTeaserParts.self),
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

                  public var articleTeaserParts: ArticleTeaserParts {
                    get {
                      return ArticleTeaserParts(unsafeResultMap: resultMap)
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
      }
    }

    public struct AllShow: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToShowConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToShowConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Show"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(ShowParts.self),
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

          public var showParts: ShowParts {
            get {
              return ShowParts(unsafeResultMap: resultMap)
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

public final class NugsByTagQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query NugsByTag($perPage: Int!, $tag: [String]!) {
      nugs(first: $perPage, where: {tagSlugIn: $tag}) {
        __typename
        nodes {
          __typename
          ...NugParts
        }
      }
    }
    """

  public let operationName: String = "NugsByTag"

  public let operationIdentifier: String? = "2090a2c92fd564ed980c03e7a2d24ab1200d38a24d33ff8fa717c8baa287e34e"

  public var queryDocument: String { return operationDefinition.appending("\n" + NugParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition).appending("\n" + ArticleTeaserParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + VideoParts.fragmentDefinition) }

  public var perPage: Int
  public var tag: [String?]

  public init(perPage: Int, tag: [String?]) {
    self.perPage = perPage
    self.tag = tag
  }

  public var variables: GraphQLMap? {
    return ["perPage": perPage, "tag": tag]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("nugs", arguments: ["first": GraphQLVariable("perPage"), "where": ["tagSlugIn": GraphQLVariable("tag")]], type: .object(Nug.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(nugs: Nug? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "nugs": nugs.flatMap { (value: Nug) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var nugs: Nug? {
      get {
        return (resultMap["nugs"] as? ResultMap).flatMap { Nug(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "nugs")
      }
    }

    public struct Nug: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToNugConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToNugConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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

public final class PromotionsByTagQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query PromotionsByTag($perPage: Int!, $slug: [String]!) {
      promotions(first: $perPage, where: {tagSlugIn: $slug}) {
        __typename
        nodes {
          __typename
          ...PromotionParts
          blocks {
            __typename
            ...BlockParts
          }
        }
      }
    }
    """

  public let operationName: String = "PromotionsByTag"

  public let operationIdentifier: String? = "5a3a1e3e00e3bce150c8ae2a81e61b5f70ab20a3819e1ab4a29077f9c7c5ce6f"

  public var queryDocument: String { return operationDefinition.appending("\n" + PromotionParts.fragmentDefinition).appending("\n" + MediaParts.fragmentDefinition).appending("\n" + BlockParts.fragmentDefinition) }

  public var perPage: Int
  public var slug: [String?]

  public init(perPage: Int, slug: [String?]) {
    self.perPage = perPage
    self.slug = slug
  }

  public var variables: GraphQLMap? {
    return ["perPage": perPage, "slug": slug]
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["RootQuery"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("promotions", arguments: ["first": GraphQLVariable("perPage"), "where": ["tagSlugIn": GraphQLVariable("slug")]], type: .object(Promotion.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(promotions: Promotion? = nil) {
      self.init(unsafeResultMap: ["__typename": "RootQuery", "promotions": promotions.flatMap { (value: Promotion) -> ResultMap in value.resultMap }])
    }

    /// Connection between the RootQuery type and the RootQuery type
    @available(*, deprecated, message: "")
    public var promotions: Promotion? {
      get {
        return (resultMap["promotions"] as? ResultMap).flatMap { Promotion(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "promotions")
      }
    }

    public struct Promotion: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["RootQueryToPromotionConnection"]

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
        self.init(unsafeResultMap: ["__typename": "RootQueryToPromotionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
        public static let possibleTypes: [String] = ["Promotion"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLFragmentSpread(PromotionParts.self),
            GraphQLField("blocks", type: .list(.object(Block.selections))),
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

          public var promotionParts: PromotionParts {
            get {
              return PromotionParts(unsafeResultMap: resultMap)
            }
            set {
              resultMap += newValue.resultMap
            }
          }
        }

        public struct Block: GraphQLSelectionSet {
          public static let possibleTypes: [String] = ["Block"]

          public static var selections: [GraphQLSelection] {
            return [
              GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
              GraphQLFragmentSpread(BlockParts.self),
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

            public var blockParts: BlockParts {
              get {
                return BlockParts(unsafeResultMap: resultMap)
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
}

public struct PromotionParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment PromotionParts on Promotion {
      __typename
      content
      dateGmt
      description: excerpt(format: RAW)
      destination
      featuredImage {
        __typename
        ...MediaParts
      }
      id
      link
      modified
      title
    }
    """

  public static let possibleTypes: [String] = ["Promotion"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("content", type: .scalar(String.self)),
      GraphQLField("dateGmt", type: .scalar(String.self)),
      GraphQLField("excerpt", alias: "description", arguments: ["format": "RAW"], type: .scalar(String.self)),
      GraphQLField("destination", type: .scalar(String.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("modified", type: .scalar(String.self)),
      GraphQLField("title", type: .scalar(String.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(content: String? = nil, dateGmt: String? = nil, description: String? = nil, destination: String? = nil, featuredImage: FeaturedImage? = nil, id: GraphQLID, link: String? = nil, modified: String? = nil, title: String? = nil) {
    self.init(unsafeResultMap: ["__typename": "Promotion", "content": content, "dateGmt": dateGmt, "description": description, "destination": destination, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "id": id, "link": link, "modified": modified, "title": title])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// The content of the post.
  @available(*, deprecated, message: "")
  public var content: String? {
    get {
      return resultMap["content"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "content")
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

  /// The excerpt of the post.
  @available(*, deprecated, message: "")
  public var description: String? {
    get {
      return resultMap["description"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "description")
    }
  }

  /// Destination path or URL to promoted content
  @available(*, deprecated, message: "")
  public var destination: String? {
    get {
      return resultMap["destination"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "destination")
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

  /// The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
  @available(*, deprecated, message: "")
  public var modified: String? {
    get {
      return resultMap["modified"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "modified")
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
}

public struct ArticleParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment ArticleParts on Post {
      __typename
      ...ArticleTeaserParts
      authors: coAuthors {
        __typename
        nodes {
          __typename
          ...AuthorParts
        }
      }
      blocks {
        __typename
        ...BlockParts
      }
      canonicalUrl
      classifications
      excerpt
      featuredImageSize
      flags {
        __typename
        nodes {
          __typename
          name
          slug
        }
      }
      footnotes
      guides {
        __typename
        nodes {
          __typename
          ...GuideParts
        }
      }
      interactiveSource
      interactiveShowHeader
      locations {
        __typename
        nodes {
          __typename
          name
        }
      }
      metered
      modifiedGmt
      obsessions {
        __typename
        nodes {
          __typename
          ...ObsessionParts
        }
      }
      paywalled
      projects {
        __typename
        nodes {
          __typename
          ...ProjectParts
        }
      }
      readNext
      serieses {
        __typename
        nodes {
          __typename
          ...SeriesParts
        }
      }
      shows {
        __typename
        nodes {
          __typename
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
        __typename
        nodes {
          __typename
          id
          name
          slug
        }
      }
      topics {
        __typename
        nodes {
          __typename
          id
          name
          slug
        }
      }
      trackingUrls
    }
    """

  public static let possibleTypes: [String] = ["Post"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLFragmentSpread(ArticleTeaserParts.self),
      GraphQLField("coAuthors", alias: "authors", type: .object(Author.selections)),
      GraphQLField("blocks", type: .list(.object(Block.selections))),
      GraphQLField("canonicalUrl", type: .scalar(String.self)),
      GraphQLField("classifications", type: .list(.scalar(String.self))),
      GraphQLField("excerpt", type: .scalar(String.self)),
      GraphQLField("featuredImageSize", type: .scalar(String.self)),
      GraphQLField("flags", type: .object(Flag.selections)),
      GraphQLField("footnotes", type: .list(.scalar(String.self))),
      GraphQLField("guides", type: .object(Guide.selections)),
      GraphQLField("interactiveSource", type: .scalar(String.self)),
      GraphQLField("interactiveShowHeader", type: .scalar(Bool.self)),
      GraphQLField("locations", type: .object(Location.selections)),
      GraphQLField("metered", type: .scalar(Bool.self)),
      GraphQLField("modifiedGmt", type: .scalar(String.self)),
      GraphQLField("obsessions", type: .object(Obsession.selections)),
      GraphQLField("paywalled", type: .scalar(Bool.self)),
      GraphQLField("projects", type: .object(Project.selections)),
      GraphQLField("readNext", type: .list(.scalar(String.self))),
      GraphQLField("serieses", type: .object(Seriese.selections)),
      GraphQLField("shows", type: .object(Show.selections)),
      GraphQLField("slug", type: .scalar(String.self)),
      GraphQLField("seoTitle", type: .scalar(String.self)),
      GraphQLField("socialDescription", type: .scalar(String.self)),
      GraphQLField("socialImage", type: .scalar(String.self)),
      GraphQLField("socialTitle", type: .scalar(String.self)),
      GraphQLField("subtype", type: .scalar(String.self)),
      GraphQLField("suppressAds", type: .scalar(Bool.self)),
      GraphQLField("tags", arguments: ["where": ["orderby": "COUNT"], "last": 20], type: .object(Tag.selections)),
      GraphQLField("topics", type: .object(Topic.selections)),
      GraphQLField("trackingUrls", type: .list(.scalar(String.self))),
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
  public var authors: Author? {
    get {
      return (resultMap["authors"] as? ResultMap).flatMap { Author(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "authors")
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

  /// URL to use with canonical meta tag
  @available(*, deprecated, message: "")
  public var canonicalUrl: String? {
    get {
      return resultMap["canonicalUrl"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "canonicalUrl")
    }
  }

  /// Contextual classifications for anti-targeting
  @available(*, deprecated, message: "")
  public var classifications: [String?]? {
    get {
      return resultMap["classifications"] as? [String?]
    }
    set {
      resultMap.updateValue(newValue, forKey: "classifications")
    }
  }

  /// The excerpt of the post.
  @available(*, deprecated, message: "")
  public var excerpt: String? {
    get {
      return resultMap["excerpt"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "excerpt")
    }
  }

  /// &quot;T-shirt&quot; size of featured image
  @available(*, deprecated, message: "")
  public var featuredImageSize: String? {
    get {
      return resultMap["featuredImageSize"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "featuredImageSize")
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

  /// Article footnotes
  @available(*, deprecated, message: "")
  public var footnotes: [String?]? {
    get {
      return resultMap["footnotes"] as? [String?]
    }
    set {
      resultMap.updateValue(newValue, forKey: "footnotes")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var guides: Guide? {
    get {
      return (resultMap["guides"] as? ResultMap).flatMap { Guide(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "guides")
    }
  }

  /// Interactive Source
  @available(*, deprecated, message: "")
  public var interactiveSource: String? {
    get {
      return resultMap["interactiveSource"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "interactiveSource")
    }
  }

  /// Flag to show header for interactive posts
  @available(*, deprecated, message: "")
  public var interactiveShowHeader: Bool? {
    get {
      return resultMap["interactiveShowHeader"] as? Bool
    }
    set {
      resultMap.updateValue(newValue, forKey: "interactiveShowHeader")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var locations: Location? {
    get {
      return (resultMap["locations"] as? ResultMap).flatMap { Location(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "locations")
    }
  }

  /// This post counts towards and can display the metered paywall
  @available(*, deprecated, message: "")
  public var metered: Bool? {
    get {
      return resultMap["metered"] as? Bool
    }
    set {
      resultMap.updateValue(newValue, forKey: "metered")
    }
  }

  /// The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
  @available(*, deprecated, message: "")
  public var modifiedGmt: String? {
    get {
      return resultMap["modifiedGmt"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "modifiedGmt")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var obsessions: Obsession? {
    get {
      return (resultMap["obsessions"] as? ResultMap).flatMap { Obsession(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "obsessions")
    }
  }

  /// Show the paywall for this post
  @available(*, deprecated, message: "")
  public var paywalled: Bool? {
    get {
      return resultMap["paywalled"] as? Bool
    }
    set {
      resultMap.updateValue(newValue, forKey: "paywalled")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var projects: Project? {
    get {
      return (resultMap["projects"] as? ResultMap).flatMap { Project(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "projects")
    }
  }

  /// Article recommendations
  @available(*, deprecated, message: "")
  public var readNext: [String?]? {
    get {
      return resultMap["readNext"] as? [String?]
    }
    set {
      resultMap.updateValue(newValue, forKey: "readNext")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var serieses: Seriese? {
    get {
      return (resultMap["serieses"] as? ResultMap).flatMap { Seriese(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "serieses")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var shows: Show? {
    get {
      return (resultMap["shows"] as? ResultMap).flatMap { Show(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "shows")
    }
  }

  /// The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
  @available(*, deprecated, message: "")
  public var slug: String? {
    get {
      return resultMap["slug"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "slug")
    }
  }

  /// SEO title
  @available(*, deprecated, message: "")
  public var seoTitle: String? {
    get {
      return resultMap["seoTitle"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "seoTitle")
    }
  }

  /// OpenGraph (meta) description
  @available(*, deprecated, message: "")
  public var socialDescription: String? {
    get {
      return resultMap["socialDescription"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "socialDescription")
    }
  }

  /// Social image url
  @available(*, deprecated, message: "")
  public var socialImage: String? {
    get {
      return resultMap["socialImage"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "socialImage")
    }
  }

  /// OpenGraph (meta) title
  @available(*, deprecated, message: "")
  public var socialTitle: String? {
    get {
      return resultMap["socialTitle"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "socialTitle")
    }
  }

  /// Article type
  @available(*, deprecated, message: "")
  public var subtype: String? {
    get {
      return resultMap["subtype"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "subtype")
    }
  }

  /// Suppress ads on this article page
  @available(*, deprecated, message: "")
  public var suppressAds: Bool? {
    get {
      return resultMap["suppressAds"] as? Bool
    }
    set {
      resultMap.updateValue(newValue, forKey: "suppressAds")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var tags: Tag? {
    get {
      return (resultMap["tags"] as? ResultMap).flatMap { Tag(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "tags")
    }
  }

  /// Connection between the post type and the post type
  @available(*, deprecated, message: "")
  public var topics: Topic? {
    get {
      return (resultMap["topics"] as? ResultMap).flatMap { Topic(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "topics")
    }
  }

  /// List of tracking urls
  @available(*, deprecated, message: "")
  public var trackingUrls: [String?]? {
    get {
      return resultMap["trackingUrls"] as? [String?]
    }
    set {
      resultMap.updateValue(newValue, forKey: "trackingUrls")
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

  public struct Author: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToCoAuthorConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToCoAuthorConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
      public static let possibleTypes: [String] = ["CoAuthor"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLFragmentSpread(AuthorParts.self),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(avatar: String? = nil, bio: String? = nil, emeritus: Bool? = nil, email: String? = nil, facebook: String? = nil, firstName: String? = nil, id: GraphQLID, instagram: String? = nil, lastName: String? = nil, linkedin: String? = nil, name: String? = nil, organization: String? = nil, pgp: String? = nil, shortBio: String? = nil, title: String? = nil, twitter: String? = nil, type: String? = nil, url: String? = nil, username: String? = nil, website: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "CoAuthor", "avatar": avatar, "bio": bio, "emeritus": emeritus, "email": email, "facebook": facebook, "firstName": firstName, "id": id, "instagram": instagram, "lastName": lastName, "linkedin": linkedin, "name": name, "organization": organization, "pgp": pgp, "shortBio": shortBio, "title": title, "twitter": twitter, "type": type, "url": url, "username": username, "website": website])
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

        public var authorParts: AuthorParts {
          get {
            return AuthorParts(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
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

      public var blockParts: BlockParts {
        get {
          return BlockParts(unsafeResultMap: resultMap)
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
        GraphQLField("nodes", type: .list(.object(Node.selections))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(nodes: [Node?]? = nil) {
      self.init(unsafeResultMap: ["__typename": "PostToFlagConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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

  public struct Guide: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToGuideConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToGuideConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
      public static let possibleTypes: [String] = ["Guide"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLFragmentSpread(GuideParts.self),
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

        public var guideParts: GuideParts {
          get {
            return GuideParts(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }
      }
    }
  }

  public struct Location: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToLocationConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToLocationConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
      public static let possibleTypes: [String] = ["Location"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("name", type: .scalar(String.self)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(name: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "Location", "name": name])
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
    }
  }

  public struct Obsession: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToObsessionConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToObsessionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
      public static let possibleTypes: [String] = ["Obsession"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLFragmentSpread(ObsessionParts.self),
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

        public var obsessionParts: ObsessionParts {
          get {
            return ObsessionParts(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }
      }
    }
  }

  public struct Project: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToProjectConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToProjectConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
      public static let possibleTypes: [String] = ["Project"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLFragmentSpread(ProjectParts.self),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(id: GraphQLID, count: Int? = nil, description: String? = nil, shortDescription: String? = nil, link: String? = nil, name: String? = nil, slug: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "Project", "id": id, "count": count, "description": description, "shortDescription": shortDescription, "link": link, "name": name, "slug": slug])
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

        public var projectParts: ProjectParts {
          get {
            return ProjectParts(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }
      }
    }
  }

  public struct Seriese: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToSeriesConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToSeriesConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
      public static let possibleTypes: [String] = ["Series"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLFragmentSpread(SeriesParts.self),
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

        public var seriesParts: SeriesParts {
          get {
            return SeriesParts(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }
      }
    }
  }

  public struct Show: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToShowConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToShowConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
      public static let possibleTypes: [String] = ["Show"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLFragmentSpread(ShowParts.self),
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

        public var showParts: ShowParts {
          get {
            return ShowParts(unsafeResultMap: resultMap)
          }
          set {
            resultMap += newValue.resultMap
          }
        }
      }
    }
  }

  public struct Tag: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToTagConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToTagConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
      public static let possibleTypes: [String] = ["Tag"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
          GraphQLField("name", type: .scalar(String.self)),
          GraphQLField("slug", type: .scalar(String.self)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(id: GraphQLID, name: String? = nil, slug: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "Tag", "id": id, "name": name, "slug": slug])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// The global ID for the post_tag
      @available(*, deprecated, message: "")
      public var id: GraphQLID {
        get {
          return resultMap["id"]! as! GraphQLID
        }
        set {
          resultMap.updateValue(newValue, forKey: "id")
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

  public struct Topic: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToTopicConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToTopicConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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
      public static let possibleTypes: [String] = ["Topic"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
          GraphQLField("name", type: .scalar(String.self)),
          GraphQLField("slug", type: .scalar(String.self)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(id: GraphQLID, name: String? = nil, slug: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "Topic", "id": id, "name": name, "slug": slug])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// The global ID for the topic
      @available(*, deprecated, message: "")
      public var id: GraphQLID {
        get {
          return resultMap["id"]! as! GraphQLID
        }
        set {
          resultMap.updateValue(newValue, forKey: "id")
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
      editions {
        __typename
        nodes {
          __typename
          name
          slug
        }
      }
      featuredImage {
        __typename
        ...MediaParts
      }
      id
      kicker
      link
      postId
      title
      trailerVideo {
        __typename
        ...VideoParts
      }
      video {
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
      GraphQLField("editions", type: .object(Edition.selections)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("kicker", type: .scalar(String.self)),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("postId", type: .nonNull(.scalar(Int.self))),
      GraphQLField("title", type: .scalar(String.self)),
      GraphQLField("trailerVideo", type: .object(TrailerVideo.selections)),
      GraphQLField("video", type: .object(Video.selections)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(bulletin: Bulletin? = nil, dateGmt: String? = nil, editions: Edition? = nil, featuredImage: FeaturedImage? = nil, id: GraphQLID, kicker: String? = nil, link: String? = nil, postId: Int, title: String? = nil, trailerVideo: TrailerVideo? = nil, video: Video? = nil) {
    self.init(unsafeResultMap: ["__typename": "Post", "bulletin": bulletin.flatMap { (value: Bulletin) -> ResultMap in value.resultMap }, "dateGmt": dateGmt, "editions": editions.flatMap { (value: Edition) -> ResultMap in value.resultMap }, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "id": id, "kicker": kicker, "link": link, "postId": postId, "title": title, "trailerVideo": trailerVideo.flatMap { (value: TrailerVideo) -> ResultMap in value.resultMap }, "video": video.flatMap { (value: Video) -> ResultMap in value.resultMap }])
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

  public struct Edition: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["PostToEditionConnection"]

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
      self.init(unsafeResultMap: ["__typename": "PostToEditionConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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

  public struct Video: GraphQLSelectionSet {
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

public struct AuthorParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment AuthorParts on CoAuthor {
      __typename
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
    """

  public static let possibleTypes: [String] = ["CoAuthor"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("avatar", type: .scalar(String.self)),
      GraphQLField("bio", type: .scalar(String.self)),
      GraphQLField("emeritus", type: .scalar(Bool.self)),
      GraphQLField("email", type: .scalar(String.self)),
      GraphQLField("facebook", type: .scalar(String.self)),
      GraphQLField("firstName", type: .scalar(String.self)),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("instagram", type: .scalar(String.self)),
      GraphQLField("lastName", type: .scalar(String.self)),
      GraphQLField("linkedin", type: .scalar(String.self)),
      GraphQLField("name", type: .scalar(String.self)),
      GraphQLField("organization", type: .scalar(String.self)),
      GraphQLField("pgp", type: .scalar(String.self)),
      GraphQLField("shortBio", type: .scalar(String.self)),
      GraphQLField("title", type: .scalar(String.self)),
      GraphQLField("twitter", type: .scalar(String.self)),
      GraphQLField("type", type: .scalar(String.self)),
      GraphQLField("url", type: .scalar(String.self)),
      GraphQLField("username", type: .scalar(String.self)),
      GraphQLField("website", type: .scalar(String.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(avatar: String? = nil, bio: String? = nil, emeritus: Bool? = nil, email: String? = nil, facebook: String? = nil, firstName: String? = nil, id: GraphQLID, instagram: String? = nil, lastName: String? = nil, linkedin: String? = nil, name: String? = nil, organization: String? = nil, pgp: String? = nil, shortBio: String? = nil, title: String? = nil, twitter: String? = nil, type: String? = nil, url: String? = nil, username: String? = nil, website: String? = nil) {
    self.init(unsafeResultMap: ["__typename": "CoAuthor", "avatar": avatar, "bio": bio, "emeritus": emeritus, "email": email, "facebook": facebook, "firstName": firstName, "id": id, "instagram": instagram, "lastName": lastName, "linkedin": linkedin, "name": name, "organization": organization, "pgp": pgp, "shortBio": shortBio, "title": title, "twitter": twitter, "type": type, "url": url, "username": username, "website": website])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// Author profile image
  @available(*, deprecated, message: "")
  public var avatar: String? {
    get {
      return resultMap["avatar"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "avatar")
    }
  }

  /// Author bio
  @available(*, deprecated, message: "")
  public var bio: String? {
    get {
      return resultMap["bio"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "bio")
    }
  }

  /// Former staff
  @available(*, deprecated, message: "")
  public var emeritus: Bool? {
    get {
      return resultMap["emeritus"] as? Bool
    }
    set {
      resultMap.updateValue(newValue, forKey: "emeritus")
    }
  }

  /// Author email address
  @available(*, deprecated, message: "")
  public var email: String? {
    get {
      return resultMap["email"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "email")
    }
  }

  /// Facebook URL
  @available(*, deprecated, message: "")
  public var facebook: String? {
    get {
      return resultMap["facebook"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "facebook")
    }
  }

  /// The first_name of the author
  @available(*, deprecated, message: "")
  public var firstName: String? {
    get {
      return resultMap["firstName"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "firstName")
    }
  }

  /// The global ID for the author
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// Instagram URL
  @available(*, deprecated, message: "")
  public var instagram: String? {
    get {
      return resultMap["instagram"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "instagram")
    }
  }

  /// The last_name of the author
  @available(*, deprecated, message: "")
  public var lastName: String? {
    get {
      return resultMap["lastName"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "lastName")
    }
  }

  /// LinkedIn URL
  @available(*, deprecated, message: "")
  public var linkedin: String? {
    get {
      return resultMap["linkedin"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "linkedin")
    }
  }

  /// The display_name of the author
  @available(*, deprecated, message: "")
  public var name: String? {
    get {
      return resultMap["name"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "name")
    }
  }

  /// Organization the user belongs to
  @available(*, deprecated, message: "")
  public var organization: String? {
    get {
      return resultMap["organization"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "organization")
    }
  }

  /// PGP fingerprint
  @available(*, deprecated, message: "")
  public var pgp: String? {
    get {
      return resultMap["pgp"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "pgp")
    }
  }

  /// Description of the author in 42 characters or less
  @available(*, deprecated, message: "")
  public var shortBio: String? {
    get {
      return resultMap["shortBio"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "shortBio")
    }
  }

  /// Job title
  @available(*, deprecated, message: "")
  public var title: String? {
    get {
      return resultMap["title"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "title")
    }
  }

  /// Twitter URL
  @available(*, deprecated, message: "")
  public var twitter: String? {
    get {
      return resultMap["twitter"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "twitter")
    }
  }

  /// The type of the author
  @available(*, deprecated, message: "")
  public var type: String? {
    get {
      return resultMap["type"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "type")
    }
  }

  /// The user_url of the author
  @available(*, deprecated, message: "")
  public var url: String? {
    get {
      return resultMap["url"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "url")
    }
  }

  /// The user_login of the author
  @available(*, deprecated, message: "")
  public var username: String? {
    get {
      return resultMap["username"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "username")
    }
  }

  /// Personal URL
  @available(*, deprecated, message: "")
  public var website: String? {
    get {
      return resultMap["website"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "website")
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

public struct BulletinParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment BulletinParts on Bulletin {
      __typename
      link
      title
      dateGmt
      featuredImage {
        __typename
        ...MediaParts
      }
      bulletin {
        __typename
        sponsor {
          __typename
          name
        }
        campaign {
          __typename
          id
        }
        clientTracking {
          __typename
          article
          elsewhere
        }
      }
    }
    """

  public static let possibleTypes: [String] = ["Bulletin"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("title", type: .scalar(String.self)),
      GraphQLField("dateGmt", type: .scalar(String.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("bulletin", type: .object(Bulletin.selections)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(link: String? = nil, title: String? = nil, dateGmt: String? = nil, featuredImage: FeaturedImage? = nil, bulletin: Bulletin? = nil) {
    self.init(unsafeResultMap: ["__typename": "Bulletin", "link": link, "title": title, "dateGmt": dateGmt, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "bulletin": bulletin.flatMap { (value: Bulletin) -> ResultMap in value.resultMap }])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
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

  public struct Bulletin: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["BulletinData"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("sponsor", type: .object(Sponsor.selections)),
        GraphQLField("campaign", type: .object(Campaign.selections)),
        GraphQLField("clientTracking", type: .object(ClientTracking.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(sponsor: Sponsor? = nil, campaign: Campaign? = nil, clientTracking: ClientTracking? = nil) {
      self.init(unsafeResultMap: ["__typename": "BulletinData", "sponsor": sponsor.flatMap { (value: Sponsor) -> ResultMap in value.resultMap }, "campaign": campaign.flatMap { (value: Campaign) -> ResultMap in value.resultMap }, "clientTracking": clientTracking.flatMap { (value: ClientTracking) -> ResultMap in value.resultMap }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
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

    public struct Sponsor: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["CampaignData"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("name", type: .scalar(String.self)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(name: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "CampaignData", "name": name])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
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

    public struct Campaign: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["CampaignData"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("id", type: .scalar(String.self)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(id: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "CampaignData", "id": id])
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
    }

    public struct ClientTracking: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["ClientTrackingData"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("article", type: .list(.scalar(String.self))),
          GraphQLField("elsewhere", type: .list(.scalar(String.self))),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(article: [String?]? = nil, elsewhere: [String?]? = nil) {
        self.init(unsafeResultMap: ["__typename": "ClientTrackingData", "article": article, "elsewhere": elsewhere])
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
    }
  }
}

public struct CollectionParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment CollectionParts on Collection {
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
            GraphQLFragmentSpread(ArticleTeaserParts.self),
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

          public var articleTeaserParts: ArticleTeaserParts {
            get {
              return ArticleTeaserParts(unsafeResultMap: resultMap)
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

public struct GuideParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment GuideParts on Guide {
      __typename
      id
      guideId
      hasEssentials
      link
      count
      description
      shortDescription
      name
      slug
      featuredImage {
        __typename
        ...MediaParts
      }
      socialImage {
        __typename
        ...MediaParts
      }
      socialTitle
      colors
      headerImages {
        __typename
        layer
        size
        image {
          __typename
          ...MediaParts
        }
      }
    }
    """

  public static let possibleTypes: [String] = ["Guide"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("guideId", type: .scalar(Int.self)),
      GraphQLField("hasEssentials", type: .scalar(Bool.self)),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("count", type: .scalar(Int.self)),
      GraphQLField("description", type: .scalar(String.self)),
      GraphQLField("shortDescription", type: .scalar(String.self)),
      GraphQLField("name", type: .scalar(String.self)),
      GraphQLField("slug", type: .scalar(String.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("socialImage", type: .object(SocialImage.selections)),
      GraphQLField("socialTitle", type: .scalar(String.self)),
      GraphQLField("colors", type: .list(.scalar(String.self))),
      GraphQLField("headerImages", type: .list(.object(HeaderImage.selections))),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(id: GraphQLID, guideId: Int? = nil, hasEssentials: Bool? = nil, link: String? = nil, count: Int? = nil, description: String? = nil, shortDescription: String? = nil, name: String? = nil, slug: String? = nil, featuredImage: FeaturedImage? = nil, socialImage: SocialImage? = nil, socialTitle: String? = nil, colors: [String?]? = nil, headerImages: [HeaderImage?]? = nil) {
    self.init(unsafeResultMap: ["__typename": "Guide", "id": id, "guideId": guideId, "hasEssentials": hasEssentials, "link": link, "count": count, "description": description, "shortDescription": shortDescription, "name": name, "slug": slug, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "socialImage": socialImage.flatMap { (value: SocialImage) -> ResultMap in value.resultMap }, "socialTitle": socialTitle, "colors": colors, "headerImages": headerImages.flatMap { (value: [HeaderImage?]) -> [ResultMap?] in value.map { (value: HeaderImage?) -> ResultMap? in value.flatMap { (value: HeaderImage) -> ResultMap in value.resultMap } } }])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// The global ID for the guide
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// The id field matches the WP_Post-&gt;ID field.
  @available(*, deprecated, message: "")
  public var guideId: Int? {
    get {
      return resultMap["guideId"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "guideId")
    }
  }

  /// Denotes whether there is an essentials collection associated with this term
  @available(*, deprecated, message: "")
  public var hasEssentials: Bool? {
    get {
      return resultMap["hasEssentials"] as? Bool
    }
    set {
      resultMap.updateValue(newValue, forKey: "hasEssentials")
    }
  }

  /// The link to the term
  @available(*, deprecated, message: "")
  public var link: String? {
    get {
      return resultMap["link"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "link")
    }
  }

  /// The number of objects connected to this term.
  @available(*, deprecated, message: "")
  public var count: Int? {
    get {
      return resultMap["count"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "count")
    }
  }

  /// The description of the object
  @available(*, deprecated, message: "")
  public var description: String? {
    get {
      return resultMap["description"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "description")
    }
  }

  /// The short description for this term.
  @available(*, deprecated, message: "")
  public var shortDescription: String? {
    get {
      return resultMap["shortDescription"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "shortDescription")
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

  /// The featured image for this term.
  @available(*, deprecated, message: "")
  public var featuredImage: FeaturedImage? {
    get {
      return (resultMap["featuredImage"] as? ResultMap).flatMap { FeaturedImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "featuredImage")
    }
  }

  /// The social image for this series.
  @available(*, deprecated, message: "")
  public var socialImage: SocialImage? {
    get {
      return (resultMap["socialImage"] as? ResultMap).flatMap { SocialImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "socialImage")
    }
  }

  /// Title of series on social media.
  @available(*, deprecated, message: "")
  public var socialTitle: String? {
    get {
      return resultMap["socialTitle"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "socialTitle")
    }
  }

  /// Series theme colors
  @available(*, deprecated, message: "")
  public var colors: [String?]? {
    get {
      return resultMap["colors"] as? [String?]
    }
    set {
      resultMap.updateValue(newValue, forKey: "colors")
    }
  }

  /// Series images
  @available(*, deprecated, message: "")
  public var headerImages: [HeaderImage?]? {
    get {
      return (resultMap["headerImages"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [HeaderImage?] in value.map { (value: ResultMap?) -> HeaderImage? in value.flatMap { (value: ResultMap) -> HeaderImage in HeaderImage(unsafeResultMap: value) } } }
    }
    set {
      resultMap.updateValue(newValue.flatMap { (value: [HeaderImage?]) -> [ResultMap?] in value.map { (value: HeaderImage?) -> ResultMap? in value.flatMap { (value: HeaderImage) -> ResultMap in value.resultMap } } }, forKey: "headerImages")
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

  public struct SocialImage: GraphQLSelectionSet {
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

  public struct HeaderImage: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["HeaderImages"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("layer", type: .scalar(Int.self)),
        GraphQLField("size", type: .scalar(String.self)),
        GraphQLField("image", type: .object(Image.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(layer: Int? = nil, size: String? = nil, image: Image? = nil) {
      self.init(unsafeResultMap: ["__typename": "HeaderImages", "layer": layer, "size": size, "image": image.flatMap { (value: Image) -> ResultMap in value.resultMap }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Series image layer
    @available(*, deprecated, message: "")
    public var layer: Int? {
      get {
        return resultMap["layer"] as? Int
      }
      set {
        resultMap.updateValue(newValue, forKey: "layer")
      }
    }

    /// Series image size
    @available(*, deprecated, message: "")
    public var size: String? {
      get {
        return resultMap["size"] as? String
      }
      set {
        resultMap.updateValue(newValue, forKey: "size")
      }
    }

    /// Series image
    @available(*, deprecated, message: "")
    public var image: Image? {
      get {
        return (resultMap["image"] as? ResultMap).flatMap { Image(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "image")
      }
    }

    public struct Image: GraphQLSelectionSet {
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
            ...ArticleTeaserParts
          }
          ... on MediaItem {
            ...MediaParts
          }
        }
      }
      dateGmt
      emailLists {
        __typename
        nodes {
          __typename
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
    """

  public static let possibleTypes: [String] = ["Nug"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("blocks", type: .list(.object(Block.selections))),
      GraphQLField("dateGmt", type: .scalar(String.self)),
      GraphQLField("emailLists", type: .object(EmailList.selections)),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("modifiedGmt", type: .scalar(String.self)),
      GraphQLField("nugId", type: .nonNull(.scalar(Int.self))),
      GraphQLField("slug", type: .scalar(String.self)),
      GraphQLField("title", type: .scalar(String.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(id: GraphQLID, blocks: [Block?]? = nil, dateGmt: String? = nil, emailLists: EmailList? = nil, link: String? = nil, modifiedGmt: String? = nil, nugId: Int, slug: String? = nil, title: String? = nil) {
    self.init(unsafeResultMap: ["__typename": "Nug", "id": id, "blocks": blocks.flatMap { (value: [Block?]) -> [ResultMap?] in value.map { (value: Block?) -> ResultMap? in value.flatMap { (value: Block) -> ResultMap in value.resultMap } } }, "dateGmt": dateGmt, "emailLists": emailLists.flatMap { (value: EmailList) -> ResultMap in value.resultMap }, "link": link, "modifiedGmt": modifiedGmt, "nugId": nugId, "slug": slug, "title": title])
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

  /// The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
  @available(*, deprecated, message: "")
  public var modifiedGmt: String? {
    get {
      return resultMap["modifiedGmt"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "modifiedGmt")
    }
  }

  /// The id field matches the WP_Post-&gt;ID field.
  @available(*, deprecated, message: "")
  public var nugId: Int {
    get {
      return resultMap["nugId"]! as! Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "nugId")
    }
  }

  /// The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
  @available(*, deprecated, message: "")
  public var slug: String? {
    get {
      return resultMap["slug"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "slug")
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
            GraphQLFragmentSpread(ArticleTeaserParts.self),
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

          public var articleTeaserParts: ArticleTeaserParts {
            get {
              return ArticleTeaserParts(unsafeResultMap: resultMap)
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
        GraphQLField("nodes", type: .list(.object(Node.selections))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(nodes: [Node?]? = nil) {
      self.init(unsafeResultMap: ["__typename": "NugToEmailListConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
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

public struct ObsessionParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment ObsessionParts on Obsession {
      __typename
      id
      description
      hasEssentials
      headerImage {
        __typename
        ...MediaParts
      }
      link
      name
      shortDescription
      slug
      subtitle
      featuredImage {
        __typename
        ...MediaParts
      }
      sponsor {
        __typename
        name
        campaign {
          __typename
          id
          logo
          logoLink
        }
      }
    }
    """

  public static let possibleTypes: [String] = ["Obsession"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("description", type: .scalar(String.self)),
      GraphQLField("hasEssentials", type: .scalar(Bool.self)),
      GraphQLField("headerImage", type: .object(HeaderImage.selections)),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("name", type: .scalar(String.self)),
      GraphQLField("shortDescription", type: .scalar(String.self)),
      GraphQLField("slug", type: .scalar(String.self)),
      GraphQLField("subtitle", type: .scalar(String.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("sponsor", type: .object(Sponsor.selections)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(id: GraphQLID, description: String? = nil, hasEssentials: Bool? = nil, headerImage: HeaderImage? = nil, link: String? = nil, name: String? = nil, shortDescription: String? = nil, slug: String? = nil, subtitle: String? = nil, featuredImage: FeaturedImage? = nil, sponsor: Sponsor? = nil) {
    self.init(unsafeResultMap: ["__typename": "Obsession", "id": id, "description": description, "hasEssentials": hasEssentials, "headerImage": headerImage.flatMap { (value: HeaderImage) -> ResultMap in value.resultMap }, "link": link, "name": name, "shortDescription": shortDescription, "slug": slug, "subtitle": subtitle, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "sponsor": sponsor.flatMap { (value: Sponsor) -> ResultMap in value.resultMap }])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// The global ID for the obsession
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// The description of the object
  @available(*, deprecated, message: "")
  public var description: String? {
    get {
      return resultMap["description"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "description")
    }
  }

  /// Denotes whether there is an essentials collection associated with this term
  @available(*, deprecated, message: "")
  public var hasEssentials: Bool? {
    get {
      return resultMap["hasEssentials"] as? Bool
    }
    set {
      resultMap.updateValue(newValue, forKey: "hasEssentials")
    }
  }

  /// The header image for the term landing page.
  @available(*, deprecated, message: "")
  public var headerImage: HeaderImage? {
    get {
      return (resultMap["headerImage"] as? ResultMap).flatMap { HeaderImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "headerImage")
    }
  }

  /// The link to the term
  @available(*, deprecated, message: "")
  public var link: String? {
    get {
      return resultMap["link"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "link")
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

  /// The short description for this term.
  @available(*, deprecated, message: "")
  public var shortDescription: String? {
    get {
      return resultMap["shortDescription"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "shortDescription")
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

  /// Details in 53 characters or less.
  @available(*, deprecated, message: "")
  public var subtitle: String? {
    get {
      return resultMap["subtitle"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "subtitle")
    }
  }

  /// The featured image for this term.
  @available(*, deprecated, message: "")
  public var featuredImage: FeaturedImage? {
    get {
      return (resultMap["featuredImage"] as? ResultMap).flatMap { FeaturedImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "featuredImage")
    }
  }

  /// The sponsor.
  @available(*, deprecated, message: "")
  public var sponsor: Sponsor? {
    get {
      return (resultMap["sponsor"] as? ResultMap).flatMap { Sponsor(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "sponsor")
    }
  }

  public struct HeaderImage: GraphQLSelectionSet {
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

  public struct Sponsor: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["SponsorData"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("name", type: .scalar(String.self)),
        GraphQLField("campaign", type: .object(Campaign.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(name: String? = nil, campaign: Campaign? = nil) {
      self.init(unsafeResultMap: ["__typename": "SponsorData", "name": name, "campaign": campaign.flatMap { (value: Campaign) -> ResultMap in value.resultMap }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
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

    public struct Campaign: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["CampaignData"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("id", type: .scalar(String.self)),
          GraphQLField("logo", type: .scalar(String.self)),
          GraphQLField("logoLink", type: .scalar(String.self)),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(id: String? = nil, logo: String? = nil, logoLink: String? = nil) {
        self.init(unsafeResultMap: ["__typename": "CampaignData", "id": id, "logo": logo, "logoLink": logoLink])
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

      /// Sponsor/campaign header image link
      @available(*, deprecated, message: "")
      public var logoLink: String? {
        get {
          return resultMap["logoLink"] as? String
        }
        set {
          resultMap.updateValue(newValue, forKey: "logoLink")
        }
      }
    }
  }
}

public struct ProjectParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment ProjectParts on Project {
      __typename
      id
      count
      description
      shortDescription
      link
      name
      slug
    }
    """

  public static let possibleTypes: [String] = ["Project"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("count", type: .scalar(Int.self)),
      GraphQLField("description", type: .scalar(String.self)),
      GraphQLField("shortDescription", type: .scalar(String.self)),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("name", type: .scalar(String.self)),
      GraphQLField("slug", type: .scalar(String.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(id: GraphQLID, count: Int? = nil, description: String? = nil, shortDescription: String? = nil, link: String? = nil, name: String? = nil, slug: String? = nil) {
    self.init(unsafeResultMap: ["__typename": "Project", "id": id, "count": count, "description": description, "shortDescription": shortDescription, "link": link, "name": name, "slug": slug])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// The global ID for the project
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// The number of objects connected to this term.
  @available(*, deprecated, message: "")
  public var count: Int? {
    get {
      return resultMap["count"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "count")
    }
  }

  /// The description of the object
  @available(*, deprecated, message: "")
  public var description: String? {
    get {
      return resultMap["description"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "description")
    }
  }

  /// The short description for this term.
  @available(*, deprecated, message: "")
  public var shortDescription: String? {
    get {
      return resultMap["shortDescription"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "shortDescription")
    }
  }

  /// The link to the term
  @available(*, deprecated, message: "")
  public var link: String? {
    get {
      return resultMap["link"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "link")
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

public struct SeriesParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment SeriesParts on Series {
      __typename
      colors
      count
      description
      emailListId
      ended
      featuredImage {
        __typename
        ...MediaParts
      }
      headerImages {
        __typename
        layer
        size
        image {
          __typename
          ...MediaParts
        }
      }
      headerVideos {
        __typename
        size
        mp4 {
          __typename
          ...MediaParts
        }
        webm {
          __typename
          ...MediaParts
        }
        poster {
          __typename
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
        __typename
        ...MediaParts
      }
      socialTitle
    }
    """

  public static let possibleTypes: [String] = ["Series"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("colors", type: .list(.scalar(String.self))),
      GraphQLField("count", type: .scalar(Int.self)),
      GraphQLField("description", type: .scalar(String.self)),
      GraphQLField("emailListId", type: .scalar(Int.self)),
      GraphQLField("ended", type: .scalar(Bool.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("headerImages", type: .list(.object(HeaderImage.selections))),
      GraphQLField("headerVideos", type: .list(.object(HeaderVideo.selections))),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("name", type: .scalar(String.self)),
      GraphQLField("postOrder", type: .list(.scalar(Int.self))),
      GraphQLField("shortDescription", type: .scalar(String.self)),
      GraphQLField("showToc", type: .scalar(Bool.self)),
      GraphQLField("slug", type: .scalar(String.self)),
      GraphQLField("socialImage", type: .object(SocialImage.selections)),
      GraphQLField("socialTitle", type: .scalar(String.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(colors: [String?]? = nil, count: Int? = nil, description: String? = nil, emailListId: Int? = nil, ended: Bool? = nil, featuredImage: FeaturedImage? = nil, headerImages: [HeaderImage?]? = nil, headerVideos: [HeaderVideo?]? = nil, id: GraphQLID, link: String? = nil, name: String? = nil, postOrder: [Int?]? = nil, shortDescription: String? = nil, showToc: Bool? = nil, slug: String? = nil, socialImage: SocialImage? = nil, socialTitle: String? = nil) {
    self.init(unsafeResultMap: ["__typename": "Series", "colors": colors, "count": count, "description": description, "emailListId": emailListId, "ended": ended, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "headerImages": headerImages.flatMap { (value: [HeaderImage?]) -> [ResultMap?] in value.map { (value: HeaderImage?) -> ResultMap? in value.flatMap { (value: HeaderImage) -> ResultMap in value.resultMap } } }, "headerVideos": headerVideos.flatMap { (value: [HeaderVideo?]) -> [ResultMap?] in value.map { (value: HeaderVideo?) -> ResultMap? in value.flatMap { (value: HeaderVideo) -> ResultMap in value.resultMap } } }, "id": id, "link": link, "name": name, "postOrder": postOrder, "shortDescription": shortDescription, "showToc": showToc, "slug": slug, "socialImage": socialImage.flatMap { (value: SocialImage) -> ResultMap in value.resultMap }, "socialTitle": socialTitle])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// Series theme colors
  @available(*, deprecated, message: "")
  public var colors: [String?]? {
    get {
      return resultMap["colors"] as? [String?]
    }
    set {
      resultMap.updateValue(newValue, forKey: "colors")
    }
  }

  /// The number of objects connected to this term.
  @available(*, deprecated, message: "")
  public var count: Int? {
    get {
      return resultMap["count"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "count")
    }
  }

  /// The description of the object
  @available(*, deprecated, message: "")
  public var description: String? {
    get {
      return resultMap["description"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "description")
    }
  }

  /// Email list ID associated with series
  @available(*, deprecated, message: "")
  public var emailListId: Int? {
    get {
      return resultMap["emailListId"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "emailListId")
    }
  }

  /// Whether the series has ended.
  @available(*, deprecated, message: "")
  public var ended: Bool? {
    get {
      return resultMap["ended"] as? Bool
    }
    set {
      resultMap.updateValue(newValue, forKey: "ended")
    }
  }

  /// The featured image for this term.
  @available(*, deprecated, message: "")
  public var featuredImage: FeaturedImage? {
    get {
      return (resultMap["featuredImage"] as? ResultMap).flatMap { FeaturedImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "featuredImage")
    }
  }

  /// Series images
  @available(*, deprecated, message: "")
  public var headerImages: [HeaderImage?]? {
    get {
      return (resultMap["headerImages"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [HeaderImage?] in value.map { (value: ResultMap?) -> HeaderImage? in value.flatMap { (value: ResultMap) -> HeaderImage in HeaderImage(unsafeResultMap: value) } } }
    }
    set {
      resultMap.updateValue(newValue.flatMap { (value: [HeaderImage?]) -> [ResultMap?] in value.map { (value: HeaderImage?) -> ResultMap? in value.flatMap { (value: HeaderImage) -> ResultMap in value.resultMap } } }, forKey: "headerImages")
    }
  }

  /// Series header videos
  @available(*, deprecated, message: "")
  public var headerVideos: [HeaderVideo?]? {
    get {
      return (resultMap["headerVideos"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [HeaderVideo?] in value.map { (value: ResultMap?) -> HeaderVideo? in value.flatMap { (value: ResultMap) -> HeaderVideo in HeaderVideo(unsafeResultMap: value) } } }
    }
    set {
      resultMap.updateValue(newValue.flatMap { (value: [HeaderVideo?]) -> [ResultMap?] in value.map { (value: HeaderVideo?) -> ResultMap? in value.flatMap { (value: HeaderVideo) -> ResultMap in value.resultMap } } }, forKey: "headerVideos")
    }
  }

  /// The global ID for the series
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// The link to the term
  @available(*, deprecated, message: "")
  public var link: String? {
    get {
      return resultMap["link"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "link")
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

  /// Custom order for posts
  @available(*, deprecated, message: "")
  public var postOrder: [Int?]? {
    get {
      return resultMap["postOrder"] as? [Int?]
    }
    set {
      resultMap.updateValue(newValue, forKey: "postOrder")
    }
  }

  /// The short description for this term.
  @available(*, deprecated, message: "")
  public var shortDescription: String? {
    get {
      return resultMap["shortDescription"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "shortDescription")
    }
  }

  /// Whether to show the series TOC on article pages.
  @available(*, deprecated, message: "")
  public var showToc: Bool? {
    get {
      return resultMap["showToc"] as? Bool
    }
    set {
      resultMap.updateValue(newValue, forKey: "showToc")
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

  /// The social image for this series.
  @available(*, deprecated, message: "")
  public var socialImage: SocialImage? {
    get {
      return (resultMap["socialImage"] as? ResultMap).flatMap { SocialImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "socialImage")
    }
  }

  /// Title of series on social media.
  @available(*, deprecated, message: "")
  public var socialTitle: String? {
    get {
      return resultMap["socialTitle"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "socialTitle")
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

  public struct HeaderImage: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["HeaderImages"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("layer", type: .scalar(Int.self)),
        GraphQLField("size", type: .scalar(String.self)),
        GraphQLField("image", type: .object(Image.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(layer: Int? = nil, size: String? = nil, image: Image? = nil) {
      self.init(unsafeResultMap: ["__typename": "HeaderImages", "layer": layer, "size": size, "image": image.flatMap { (value: Image) -> ResultMap in value.resultMap }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Series image layer
    @available(*, deprecated, message: "")
    public var layer: Int? {
      get {
        return resultMap["layer"] as? Int
      }
      set {
        resultMap.updateValue(newValue, forKey: "layer")
      }
    }

    /// Series image size
    @available(*, deprecated, message: "")
    public var size: String? {
      get {
        return resultMap["size"] as? String
      }
      set {
        resultMap.updateValue(newValue, forKey: "size")
      }
    }

    /// Series image
    @available(*, deprecated, message: "")
    public var image: Image? {
      get {
        return (resultMap["image"] as? ResultMap).flatMap { Image(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "image")
      }
    }

    public struct Image: GraphQLSelectionSet {
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

  public struct HeaderVideo: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["HeaderVideos"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("size", type: .scalar(String.self)),
        GraphQLField("mp4", type: .object(Mp4.selections)),
        GraphQLField("webm", type: .object(Webm.selections)),
        GraphQLField("poster", type: .object(Poster.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(size: String? = nil, mp4: Mp4? = nil, webm: Webm? = nil, poster: Poster? = nil) {
      self.init(unsafeResultMap: ["__typename": "HeaderVideos", "size": size, "mp4": mp4.flatMap { (value: Mp4) -> ResultMap in value.resultMap }, "webm": webm.flatMap { (value: Webm) -> ResultMap in value.resultMap }, "poster": poster.flatMap { (value: Poster) -> ResultMap in value.resultMap }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Series video size
    @available(*, deprecated, message: "")
    public var size: String? {
      get {
        return resultMap["size"] as? String
      }
      set {
        resultMap.updateValue(newValue, forKey: "size")
      }
    }

    /// Series header video mp4
    @available(*, deprecated, message: "")
    public var mp4: Mp4? {
      get {
        return (resultMap["mp4"] as? ResultMap).flatMap { Mp4(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "mp4")
      }
    }

    /// Series header video webm
    @available(*, deprecated, message: "")
    public var webm: Webm? {
      get {
        return (resultMap["webm"] as? ResultMap).flatMap { Webm(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "webm")
      }
    }

    /// Series header video poster image
    @available(*, deprecated, message: "")
    public var poster: Poster? {
      get {
        return (resultMap["poster"] as? ResultMap).flatMap { Poster(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "poster")
      }
    }

    public struct Mp4: GraphQLSelectionSet {
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

    public struct Webm: GraphQLSelectionSet {
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

    public struct Poster: GraphQLSelectionSet {
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

  public struct SocialImage: GraphQLSelectionSet {
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

public struct ShowParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment ShowParts on Show {
      __typename
      colors
      count
      description
      featuredImage {
        __typename
        ...MediaParts
      }
      headerImages {
        __typename
        layer
        size
        image {
          __typename
          ...MediaParts
        }
      }
      headerVideos {
        __typename
        size
        mp4 {
          __typename
          ...MediaParts
        }
        webm {
          __typename
          ...MediaParts
        }
        poster {
          __typename
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
        __typename
        ...MediaParts
      }
    }
    """

  public static let possibleTypes: [String] = ["Show"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("colors", type: .list(.scalar(String.self))),
      GraphQLField("count", type: .scalar(Int.self)),
      GraphQLField("description", type: .scalar(String.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("headerImages", type: .list(.object(HeaderImage.selections))),
      GraphQLField("headerVideos", type: .list(.object(HeaderVideo.selections))),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("name", type: .scalar(String.self)),
      GraphQLField("postOrder", type: .list(.scalar(Int.self))),
      GraphQLField("shortDescription", type: .scalar(String.self)),
      GraphQLField("slug", type: .scalar(String.self)),
      GraphQLField("socialImage", type: .object(SocialImage.selections)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(colors: [String?]? = nil, count: Int? = nil, description: String? = nil, featuredImage: FeaturedImage? = nil, headerImages: [HeaderImage?]? = nil, headerVideos: [HeaderVideo?]? = nil, id: GraphQLID, link: String? = nil, name: String? = nil, postOrder: [Int?]? = nil, shortDescription: String? = nil, slug: String? = nil, socialImage: SocialImage? = nil) {
    self.init(unsafeResultMap: ["__typename": "Show", "colors": colors, "count": count, "description": description, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "headerImages": headerImages.flatMap { (value: [HeaderImage?]) -> [ResultMap?] in value.map { (value: HeaderImage?) -> ResultMap? in value.flatMap { (value: HeaderImage) -> ResultMap in value.resultMap } } }, "headerVideos": headerVideos.flatMap { (value: [HeaderVideo?]) -> [ResultMap?] in value.map { (value: HeaderVideo?) -> ResultMap? in value.flatMap { (value: HeaderVideo) -> ResultMap in value.resultMap } } }, "id": id, "link": link, "name": name, "postOrder": postOrder, "shortDescription": shortDescription, "slug": slug, "socialImage": socialImage.flatMap { (value: SocialImage) -> ResultMap in value.resultMap }])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// Show theme colors
  @available(*, deprecated, message: "")
  public var colors: [String?]? {
    get {
      return resultMap["colors"] as? [String?]
    }
    set {
      resultMap.updateValue(newValue, forKey: "colors")
    }
  }

  /// The number of objects connected to this term.
  @available(*, deprecated, message: "")
  public var count: Int? {
    get {
      return resultMap["count"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "count")
    }
  }

  /// The description of the object
  @available(*, deprecated, message: "")
  public var description: String? {
    get {
      return resultMap["description"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "description")
    }
  }

  /// The featured image for this term.
  @available(*, deprecated, message: "")
  public var featuredImage: FeaturedImage? {
    get {
      return (resultMap["featuredImage"] as? ResultMap).flatMap { FeaturedImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "featuredImage")
    }
  }

  /// Show images
  @available(*, deprecated, message: "")
  public var headerImages: [HeaderImage?]? {
    get {
      return (resultMap["headerImages"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [HeaderImage?] in value.map { (value: ResultMap?) -> HeaderImage? in value.flatMap { (value: ResultMap) -> HeaderImage in HeaderImage(unsafeResultMap: value) } } }
    }
    set {
      resultMap.updateValue(newValue.flatMap { (value: [HeaderImage?]) -> [ResultMap?] in value.map { (value: HeaderImage?) -> ResultMap? in value.flatMap { (value: HeaderImage) -> ResultMap in value.resultMap } } }, forKey: "headerImages")
    }
  }

  /// Show header videos
  @available(*, deprecated, message: "")
  public var headerVideos: [HeaderVideo?]? {
    get {
      return (resultMap["headerVideos"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [HeaderVideo?] in value.map { (value: ResultMap?) -> HeaderVideo? in value.flatMap { (value: ResultMap) -> HeaderVideo in HeaderVideo(unsafeResultMap: value) } } }
    }
    set {
      resultMap.updateValue(newValue.flatMap { (value: [HeaderVideo?]) -> [ResultMap?] in value.map { (value: HeaderVideo?) -> ResultMap? in value.flatMap { (value: HeaderVideo) -> ResultMap in value.resultMap } } }, forKey: "headerVideos")
    }
  }

  /// The global ID for the show
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// The link to the term
  @available(*, deprecated, message: "")
  public var link: String? {
    get {
      return resultMap["link"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "link")
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

  /// Custom order for posts
  @available(*, deprecated, message: "")
  public var postOrder: [Int?]? {
    get {
      return resultMap["postOrder"] as? [Int?]
    }
    set {
      resultMap.updateValue(newValue, forKey: "postOrder")
    }
  }

  /// The short description for this term.
  @available(*, deprecated, message: "")
  public var shortDescription: String? {
    get {
      return resultMap["shortDescription"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "shortDescription")
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

  /// The social image for this series.
  @available(*, deprecated, message: "")
  public var socialImage: SocialImage? {
    get {
      return (resultMap["socialImage"] as? ResultMap).flatMap { SocialImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "socialImage")
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

  public struct HeaderImage: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["ShowHeaderImages"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("layer", type: .scalar(Int.self)),
        GraphQLField("size", type: .scalar(String.self)),
        GraphQLField("image", type: .object(Image.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(layer: Int? = nil, size: String? = nil, image: Image? = nil) {
      self.init(unsafeResultMap: ["__typename": "ShowHeaderImages", "layer": layer, "size": size, "image": image.flatMap { (value: Image) -> ResultMap in value.resultMap }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Series image layer
    @available(*, deprecated, message: "")
    public var layer: Int? {
      get {
        return resultMap["layer"] as? Int
      }
      set {
        resultMap.updateValue(newValue, forKey: "layer")
      }
    }

    /// Series image size
    @available(*, deprecated, message: "")
    public var size: String? {
      get {
        return resultMap["size"] as? String
      }
      set {
        resultMap.updateValue(newValue, forKey: "size")
      }
    }

    /// Series image
    @available(*, deprecated, message: "")
    public var image: Image? {
      get {
        return (resultMap["image"] as? ResultMap).flatMap { Image(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "image")
      }
    }

    public struct Image: GraphQLSelectionSet {
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

  public struct HeaderVideo: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["ShowHeaderVideos"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
        GraphQLField("size", type: .scalar(String.self)),
        GraphQLField("mp4", type: .object(Mp4.selections)),
        GraphQLField("webm", type: .object(Webm.selections)),
        GraphQLField("poster", type: .object(Poster.selections)),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(size: String? = nil, mp4: Mp4? = nil, webm: Webm? = nil, poster: Poster? = nil) {
      self.init(unsafeResultMap: ["__typename": "ShowHeaderVideos", "size": size, "mp4": mp4.flatMap { (value: Mp4) -> ResultMap in value.resultMap }, "webm": webm.flatMap { (value: Webm) -> ResultMap in value.resultMap }, "poster": poster.flatMap { (value: Poster) -> ResultMap in value.resultMap }])
    }

    public var __typename: String {
      get {
        return resultMap["__typename"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "__typename")
      }
    }

    /// Series video size
    @available(*, deprecated, message: "")
    public var size: String? {
      get {
        return resultMap["size"] as? String
      }
      set {
        resultMap.updateValue(newValue, forKey: "size")
      }
    }

    /// Series header video mp4
    @available(*, deprecated, message: "")
    public var mp4: Mp4? {
      get {
        return (resultMap["mp4"] as? ResultMap).flatMap { Mp4(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "mp4")
      }
    }

    /// Series header video webm
    @available(*, deprecated, message: "")
    public var webm: Webm? {
      get {
        return (resultMap["webm"] as? ResultMap).flatMap { Webm(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "webm")
      }
    }

    /// Series header video poster image
    @available(*, deprecated, message: "")
    public var poster: Poster? {
      get {
        return (resultMap["poster"] as? ResultMap).flatMap { Poster(unsafeResultMap: $0) }
      }
      set {
        resultMap.updateValue(newValue?.resultMap, forKey: "poster")
      }
    }

    public struct Mp4: GraphQLSelectionSet {
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

    public struct Webm: GraphQLSelectionSet {
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

    public struct Poster: GraphQLSelectionSet {
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

  public struct SocialImage: GraphQLSelectionSet {
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

public struct TagParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment TagParts on Tag {
      __typename
      count
      description
      featuredImage {
        __typename
        ...MediaParts
      }
      id
      link
      name
      shortDescription
      slug
      tagId
    }
    """

  public static let possibleTypes: [String] = ["Tag"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("count", type: .scalar(Int.self)),
      GraphQLField("description", type: .scalar(String.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("name", type: .scalar(String.self)),
      GraphQLField("shortDescription", type: .scalar(String.self)),
      GraphQLField("slug", type: .scalar(String.self)),
      GraphQLField("tagId", type: .scalar(Int.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(count: Int? = nil, description: String? = nil, featuredImage: FeaturedImage? = nil, id: GraphQLID, link: String? = nil, name: String? = nil, shortDescription: String? = nil, slug: String? = nil, tagId: Int? = nil) {
    self.init(unsafeResultMap: ["__typename": "Tag", "count": count, "description": description, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "id": id, "link": link, "name": name, "shortDescription": shortDescription, "slug": slug, "tagId": tagId])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// The number of objects connected to this term.
  @available(*, deprecated, message: "")
  public var count: Int? {
    get {
      return resultMap["count"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "count")
    }
  }

  /// The description of the object
  @available(*, deprecated, message: "")
  public var description: String? {
    get {
      return resultMap["description"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "description")
    }
  }

  /// The featured image for this term.
  @available(*, deprecated, message: "")
  public var featuredImage: FeaturedImage? {
    get {
      return (resultMap["featuredImage"] as? ResultMap).flatMap { FeaturedImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "featuredImage")
    }
  }

  /// The global ID for the post_tag
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// The link to the term
  @available(*, deprecated, message: "")
  public var link: String? {
    get {
      return resultMap["link"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "link")
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

  /// The short description for this term.
  @available(*, deprecated, message: "")
  public var shortDescription: String? {
    get {
      return resultMap["shortDescription"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "shortDescription")
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

  /// The id field matches the WP_Post-&gt;ID field.
  @available(*, deprecated, message: "")
  public var tagId: Int? {
    get {
      return resultMap["tagId"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "tagId")
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
}

public struct TopicParts: GraphQLFragment {
  /// The raw GraphQL definition of this fragment.
  public static let fragmentDefinition: String =
    """
    fragment TopicParts on Topic {
      __typename
      description
      featuredImage {
        __typename
        ...MediaParts
      }
      id
      link
      name
      shortDescription
      slug
      topicId
    }
    """

  public static let possibleTypes: [String] = ["Topic"]

  public static var selections: [GraphQLSelection] {
    return [
      GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
      GraphQLField("description", type: .scalar(String.self)),
      GraphQLField("featuredImage", type: .object(FeaturedImage.selections)),
      GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
      GraphQLField("link", type: .scalar(String.self)),
      GraphQLField("name", type: .scalar(String.self)),
      GraphQLField("shortDescription", type: .scalar(String.self)),
      GraphQLField("slug", type: .scalar(String.self)),
      GraphQLField("topicId", type: .scalar(Int.self)),
    ]
  }

  public private(set) var resultMap: ResultMap

  public init(unsafeResultMap: ResultMap) {
    self.resultMap = unsafeResultMap
  }

  public init(description: String? = nil, featuredImage: FeaturedImage? = nil, id: GraphQLID, link: String? = nil, name: String? = nil, shortDescription: String? = nil, slug: String? = nil, topicId: Int? = nil) {
    self.init(unsafeResultMap: ["__typename": "Topic", "description": description, "featuredImage": featuredImage.flatMap { (value: FeaturedImage) -> ResultMap in value.resultMap }, "id": id, "link": link, "name": name, "shortDescription": shortDescription, "slug": slug, "topicId": topicId])
  }

  public var __typename: String {
    get {
      return resultMap["__typename"]! as! String
    }
    set {
      resultMap.updateValue(newValue, forKey: "__typename")
    }
  }

  /// The description of the object
  @available(*, deprecated, message: "")
  public var description: String? {
    get {
      return resultMap["description"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "description")
    }
  }

  /// The featured image for this term.
  @available(*, deprecated, message: "")
  public var featuredImage: FeaturedImage? {
    get {
      return (resultMap["featuredImage"] as? ResultMap).flatMap { FeaturedImage(unsafeResultMap: $0) }
    }
    set {
      resultMap.updateValue(newValue?.resultMap, forKey: "featuredImage")
    }
  }

  /// The global ID for the topic
  @available(*, deprecated, message: "")
  public var id: GraphQLID {
    get {
      return resultMap["id"]! as! GraphQLID
    }
    set {
      resultMap.updateValue(newValue, forKey: "id")
    }
  }

  /// The link to the term
  @available(*, deprecated, message: "")
  public var link: String? {
    get {
      return resultMap["link"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "link")
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

  /// The short description for this term.
  @available(*, deprecated, message: "")
  public var shortDescription: String? {
    get {
      return resultMap["shortDescription"] as? String
    }
    set {
      resultMap.updateValue(newValue, forKey: "shortDescription")
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

  /// The id field matches the WP_Post-&gt;ID field.
  @available(*, deprecated, message: "")
  public var topicId: Int? {
    get {
      return resultMap["topicId"] as? Int
    }
    set {
      resultMap.updateValue(newValue, forKey: "topicId")
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

//--------------------------------------------------------------
// Set browser startup page
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
//--------------------------------------------------------------
user_pref("browser.startup.page", 3);

//--------------------------------------------------------------
// Set HOME+NEWWINDOW
// about:home, custom URL, about:blank
//--------------------------------------------------------------
user_pref("browser.startup.homepage", "about:blank");

//--------------------------------------------------------------
// Set NEWTAB page
// true=Firefox Home, false=blank page
//--------------------------------------------------------------
user_pref("browser.newtabpage.enabled", false);

//--------------------------------------------------------------
// Disable sponsored content on Firefox Home
//--------------------------------------------------------------
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

//--------------------------------------------------------------
// Clear default topsites
//--------------------------------------------------------------
user_pref("browser.newtabpage.activity-stream.default.sites", "");

//--------------------------------------------------------------
// Disable geolocation service
//--------------------------------------------------------------
user_pref("geo.provider.network.url", "");

//--------------------------------------------------------------
// Disable using the OS' geolocation service
//--------------------------------------------------------------
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.provider.use_geoclue", false);

//--------------------------------------------------------------
// Disable recommendation pane in about:addons
//--------------------------------------------------------------
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

//--------------------------------------------------------------
// Disable personalized Extension Recommendations in about:addons
//--------------------------------------------------------------
user_pref("browser.discovery.enabled", false);

//--------------------------------------------------------------
// Disable shopping experience
//--------------------------------------------------------------
user_pref("browser.shopping.experience2023.enabled", false);

//--------------------------------------------------------------
// Disable new data submission
//--------------------------------------------------------------
user_pref("datareporting.policy.dataSubmissionEnabled", false);

//--------------------------------------------------------------
// Disable Health Reports
//--------------------------------------------------------------
user_pref("datareporting.healthreport.uploadEnabled", false);

//--------------------------------------------------------------
// Disable telemetry
//--------------------------------------------------------------
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

//--------------------------------------------------------------
// Disable Telemetry Coverage
//--------------------------------------------------------------
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

//--------------------------------------------------------------
// Disable PingCentre telemetry
//--------------------------------------------------------------
user_pref("browser.ping-centre.telemetry", false);

//--------------------------------------------------------------
// Disable Firefox Home telemetry
//--------------------------------------------------------------
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

//--------------------------------------------------------------
// Disable Studies
//--------------------------------------------------------------
user_pref("app.shield.optoutstudies.enabled", false);

//--------------------------------------------------------------
// Disable Normandy/Shield
//--------------------------------------------------------------
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

//--------------------------------------------------------------
// Disable Crash Reports
//--------------------------------------------------------------
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

//--------------------------------------------------------------
// Enforce no submission of backlogged Crash Reports
//--------------------------------------------------------------
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

//--------------------------------------------------------------
// Disable Captive Portal detection
//--------------------------------------------------------------
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

//--------------------------------------------------------------
// Disable Network Connectivity checks
//--------------------------------------------------------------
user_pref("network.connectivity-service.enabled", false);

//--------------------------------------------------------------
// Disable SB (Safe Browsing)
//--------------------------------------------------------------
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

//--------------------------------------------------------------
// Disable SB checks for downloads
//--------------------------------------------------------------
user_pref("browser.safebrowsing.downloads.enabled", false);

//--------------------------------------------------------------
// Disable SB checks for downloads (remote)
//--------------------------------------------------------------
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

//--------------------------------------------------------------
// Disable SB checks for unwanted software
//--------------------------------------------------------------
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

//--------------------------------------------------------------
// Disable "ignore this warning" on SB warnings
//--------------------------------------------------------------
user_pref("browser.safebrowsing.allowOverride", false);

//--------------------------------------------------------------
// Disable link prefetching
//--------------------------------------------------------------
user_pref("network.prefetch-next", false);

//--------------------------------------------------------------
// Disable DNS prefetching
//--------------------------------------------------------------
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

//--------------------------------------------------------------
// Disable predictor / prefetching
//--------------------------------------------------------------
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

//--------------------------------------------------------------
// Disable link-mouseover opening connection to linked server
//--------------------------------------------------------------
user_pref("network.http.speculative-parallel-limit", 0);

//--------------------------------------------------------------
// Disable mousedown speculative connections on bookmarks and history
//--------------------------------------------------------------
user_pref("browser.places.speculativeConnect.enabled", false);

//--------------------------------------------------------------
// Enforce no "Hyperlink Auditing" (click tracking)
//--------------------------------------------------------------
user_pref("browser.send_pings", false);

//--------------------------------------------------------------
// Enable DNS-over-HTTPS (DoH)
// 0=default, 2=increased (TRR (Trusted Recursive Resolver) first), 3=max (TRR only), 5=off (no rollout)
//--------------------------------------------------------------
user_pref("network.trr.mode", 5);

//--------------------------------------------------------------
// Disable location bar making speculative connections
//--------------------------------------------------------------
user_pref("browser.urlbar.speculativeConnect.enabled", false);

//--------------------------------------------------------------
// Disable location bar contextual suggestions
//--------------------------------------------------------------
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

//--------------------------------------------------------------
// Disable live search suggestions
//--------------------------------------------------------------
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);

//--------------------------------------------------------------
// Disable urlbar trending search suggestions
//--------------------------------------------------------------
user_pref("browser.urlbar.trending.featureGate", false);

//--------------------------------------------------------------
// Disable urlbar suggestions
//--------------------------------------------------------------
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);

//--------------------------------------------------------------
// Disable urlbar clipboard suggestions
//--------------------------------------------------------------
user_pref("browser.urlbar.clipboard.featureGate", false);

//--------------------------------------------------------------
// Disable search and form history
//--------------------------------------------------------------
user_pref("browser.formfill.enable", false);

//--------------------------------------------------------------
// Disable coloring of visited links
//--------------------------------------------------------------
user_pref("layout.css.visited_links_enabled", false);

//--------------------------------------------------------------
// Disable auto-filling username & password form fields
//--------------------------------------------------------------
user_pref("signon.autofillForms", false);

//--------------------------------------------------------------
// Disable formless login capture for Password Manager
//--------------------------------------------------------------
user_pref("signon.formlessCapture.enabled", false);

//--------------------------------------------------------------
// Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources
// 0 = don't allow sub-resources to open HTTP authentication credentials dialogs
// 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 2 = allow sub-resources to open HTTP authentication credentials dialogs
//--------------------------------------------------------------
user_pref("network.auth.subresource-http-auth-allow", 1);

//--------------------------------------------------------------
// Enforce no automatic authentication on Microsoft sites
//--------------------------------------------------------------
user_pref("network.http.windows-sso.enabled", false);

//--------------------------------------------------------------
// 1602: control the amount of cross-origin information to send
// 0=send full URI, 1=scheme+host+port+path, 2=scheme+host+port
//--------------------------------------------------------------
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

//--------------------------------------------------------------
// Prevent scripts from moving and resizing open windows
//--------------------------------------------------------------
user_pref("dom.disable_window_move_resize", true);

//--------------------------------------------------------------
// Enforce PDFJS, disable PDFJS scripting
//--------------------------------------------------------------
user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableScripting", false);

//--------------------------------------------------------------
// Disable middle click on new tab button opening URLs or searches using clipboard
//--------------------------------------------------------------
user_pref("browser.tabs.searchclipboardfor.middleclick", false);

//--------------------------------------------------------------
// Enable user interaction always asking where to download
//--------------------------------------------------------------
user_pref("browser.download.useDownloadDir", false);

//--------------------------------------------------------------
// Disable downloads panel opening on every download
//--------------------------------------------------------------
user_pref("browser.download.alwaysOpenPanel", false);

//--------------------------------------------------------------
// Disable adding downloads to the system's "recent documents" list
//--------------------------------------------------------------
user_pref("browser.download.manager.addToRecentDocs", false);

//--------------------------------------------------------------
// Enable user interaction always asking how to handle new mimetypes
//--------------------------------------------------------------
user_pref("browser.download.always_ask_before_handling_new_types", true);

//--------------------------------------------------------------
// Enable ETP Strict Mode
// ETP Strict Mode enables Total Cookie Protection (TCP)
//--------------------------------------------------------------
user_pref("browser.contentblocking.category", "strict");

//--------------------------------------------------------------
// Disable ETP web compat features
//--------------------------------------------------------------
user_pref("privacy.antitracking.enableWebcompat", false);

//--------------------------------------------------------------
// Enable Firefox clearing items on shutdown
//--------------------------------------------------------------
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

//--------------------------------------------------------------
// Set/enforce what items to clear on shutdown
//--------------------------------------------------------------
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.openWindows", false);

//--------------------------------------------------------------
// Enable RFP
//--------------------------------------------------------------
user_pref("privacy.resistFingerprinting", true);

//--------------------------------------------------------------
// Enforce links targeting new windows to open in a new tab instead
// 1=most recent window or tab, 2=new window, 3=new tab
//--------------------------------------------------------------
user_pref("browser.link.open_newwindow", 3);

//--------------------------------------------------------------
// Set all open window methods to abide by "browser.link.open_newwindow"
//--------------------------------------------------------------
user_pref("browser.link.open_newwindow.restriction", 0);

//--------------------------------------------------------------
// Disable WebGL (Web Graphics Library)
//--------------------------------------------------------------
user_pref("webgl.disabled", true);

//--------------------------------------------------------------
// Disable Form Autofill
//--------------------------------------------------------------
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

//--------------------------------------------------------------
// Enable the DNT (Do Not Track) HTTP header
//--------------------------------------------------------------
user_pref("privacy.donottrackheader.enabled", true);

//--------------------------------------------------------------
// Disable WebRTC (Web Real-Time Communication)
//--------------------------------------------------------------
user_pref("media.peerconnection.enabled", false);

//--------------------------------------------------------------
// Disable welcome notices
//--------------------------------------------------------------
user_pref("browser.startup.homepage_override.mstone", "ignore");

//--------------------------------------------------------------
// Disable recommending extensions/features as you browse
//--------------------------------------------------------------
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

//--------------------------------------------------------------
// Disable What's New toolbar icon
//--------------------------------------------------------------
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

//--------------------------------------------------------------
// Force use of custom font
//--------------------------------------------------------------
user_pref("browser.display.use_document_fonts", 0);
user_pref("browser.display.use_document_fonts.icon_font_allowlist", "");

//--------------------------------------------------------------
// Disable rendering of web fonts
//--------------------------------------------------------------
user_pref("gfx.downloadable_fonts.disable_cache", true);
user_pref("gfx.downloadable_fonts.enabled", false);

//--------------------------------------------------------------
// Set custom cursive font
//--------------------------------------------------------------
user_pref("font.name.cursive.ar", "Iosevka");
user_pref("font.name.cursive.el", "Iosevka");
user_pref("font.name.cursive.he", "Iosevka");
user_pref("font.name.cursive.th", "Iosevka");
user_pref("font.name.cursive.x-armn", "Iosevka");
user_pref("font.name.cursive.x-beng", "Iosevka");
user_pref("font.name.cursive.x-cans", "Iosevka");
user_pref("font.name.cursive.x-cyrillic", "Iosevka");
user_pref("font.name.cursive.x-devanagari", "Iosevka");
user_pref("font.name.cursive.x-ethi", "Iosevka");
user_pref("font.name.cursive.x-geor", "Iosevka");
user_pref("font.name.cursive.x-gujr", "Iosevka");
user_pref("font.name.cursive.x-guru", "Iosevka");
user_pref("font.name.cursive.x-khmr", "Iosevka");
user_pref("font.name.cursive.x-knda", "Iosevka");
user_pref("font.name.cursive.x-math", "Iosevka");
user_pref("font.name.cursive.x-mlym", "Iosevka");
user_pref("font.name.cursive.x-orya", "Iosevka");
user_pref("font.name.cursive.x-sinh", "Iosevka");
user_pref("font.name.cursive.x-tamil", "Iosevka");
user_pref("font.name.cursive.x-telu", "Iosevka");
user_pref("font.name.cursive.x-tibt", "Iosevka");
user_pref("font.name.cursive.x-unicode", "Iosevka");
user_pref("font.name.cursive.x-western", "Iosevka");

//--------------------------------------------------------------
// Set custom monospace font
//--------------------------------------------------------------
user_pref("font.name-list.monospace.x-math", "Iosevka");
user_pref("font.name-list.monospace.x-unicode", "Iosevka");
user_pref("font.name-list.monospace.x-western", "Iosevka");

user_pref("font.name.monospace.ar", "Iosevka");
user_pref("font.name.monospace.el", "Iosevka");
user_pref("font.name.monospace.he", "Iosevka");
user_pref("font.name.monospace.th", "Iosevka");
user_pref("font.name.monospace.x-armn", "Iosevka");
user_pref("font.name.monospace.x-beng", "Iosevka");
user_pref("font.name.monospace.x-cans", "Iosevka");
user_pref("font.name.monospace.x-cyrillic", "Iosevka");
user_pref("font.name.monospace.x-devanagari", "Iosevka");
user_pref("font.name.monospace.x-ethi", "Iosevka");
user_pref("font.name.monospace.x-geor", "Iosevka");
user_pref("font.name.monospace.x-gujr", "Iosevka");
user_pref("font.name.monospace.x-guru", "Iosevka");
user_pref("font.name.monospace.x-khmr", "Iosevka");
user_pref("font.name.monospace.x-knda", "Iosevka");
user_pref("font.name.monospace.x-math", "Iosevka");
user_pref("font.name.monospace.x-mlym", "Iosevka");
user_pref("font.name.monospace.x-orya", "Iosevka");
user_pref("font.name.monospace.x-sinh", "Iosevka");
user_pref("font.name.monospace.x-tamil", "Iosevka");
user_pref("font.name.monospace.x-telu", "Iosevka");
user_pref("font.name.monospace.x-tibt", "Iosevka");
user_pref("font.name.monospace.x-unicode", "Iosevka");
user_pref("font.name.monospace.x-western", "Iosevka");

//--------------------------------------------------------------
// Set custom sans-serif font
//--------------------------------------------------------------
user_pref("font.name-list.sans-serif.x-math", "Iosevka");
user_pref("font.name-list.sans-serif.x-unicode", "Iosevka");
user_pref("font.name-list.sans-serif.x-western", "Iosevka");

user_pref("font.name.sans-serif.ar", "Iosevka");
user_pref("font.name.sans-serif.el", "Iosevka");
user_pref("font.name.sans-serif.he", "Iosevka");
user_pref("font.name.sans-serif.th", "Iosevka");
user_pref("font.name.sans-serif.x-armn", "Iosevka");
user_pref("font.name.sans-serif.x-beng", "Iosevka");
user_pref("font.name.sans-serif.x-cans", "Iosevka");
user_pref("font.name.sans-serif.x-cyrillic", "Iosevka");
user_pref("font.name.sans-serif.x-devanagari", "Iosevka");
user_pref("font.name.sans-serif.x-ethi", "Iosevka");
user_pref("font.name.sans-serif.x-geor", "Iosevka");
user_pref("font.name.sans-serif.x-gujr", "Iosevka");
user_pref("font.name.sans-serif.x-guru", "Iosevka");
user_pref("font.name.sans-serif.x-khmr", "Iosevka");
user_pref("font.name.sans-serif.x-knda", "Iosevka");
user_pref("font.name.sans-serif.x-math", "Iosevka");
user_pref("font.name.sans-serif.x-mlym", "Iosevka");
user_pref("font.name.sans-serif.x-orya", "Iosevka");
user_pref("font.name.sans-serif.x-sinh", "Iosevka");
user_pref("font.name.sans-serif.x-tamil", "Iosevka");
user_pref("font.name.sans-serif.x-telu", "Iosevka");
user_pref("font.name.sans-serif.x-tibt", "Iosevka");
user_pref("font.name.sans-serif.x-unicode", "Iosevka");
user_pref("font.name.sans-serif.x-western", "Iosevka");

//--------------------------------------------------------------
// Set custom serif font
//--------------------------------------------------------------
user_pref("font.name-list.serif.x-math", "Iosevka");
user_pref("font.name-list.serif.x-unicode", "Iosevka");
user_pref("font.name-list.serif.x-western", "Iosevka");

user_pref("font.name.serif.ar", "Iosevka");
user_pref("font.name.serif.el", "Iosevka");
user_pref("font.name.serif.he", "Iosevka");
user_pref("font.name.serif.th", "Iosevka");
user_pref("font.name.serif.x-armn", "Iosevka");
user_pref("font.name.serif.x-beng", "Iosevka");
user_pref("font.name.serif.x-cans", "Iosevka");
user_pref("font.name.serif.x-cyrillic", "Iosevka");
user_pref("font.name.serif.x-devanagari", "Iosevka");
user_pref("font.name.serif.x-ethi", "Iosevka");
user_pref("font.name.serif.x-geor", "Iosevka");
user_pref("font.name.serif.x-gujr", "Iosevka");
user_pref("font.name.serif.x-guru", "Iosevka");
user_pref("font.name.serif.x-khmr", "Iosevka");
user_pref("font.name.serif.x-knda", "Iosevka");
user_pref("font.name.serif.x-math", "Iosevka");
user_pref("font.name.serif.x-mlym", "Iosevka");
user_pref("font.name.serif.x-orya", "Iosevka");
user_pref("font.name.serif.x-sinh", "Iosevka");
user_pref("font.name.serif.x-tamil", "Iosevka");
user_pref("font.name.serif.x-telu", "Iosevka");
user_pref("font.name.serif.x-tibt", "Iosevka");
user_pref("font.name.serif.x-unicode", "Iosevka");
user_pref("font.name.serif.x-western", "Iosevka");

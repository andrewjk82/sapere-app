// The "clay" look (soft, puffy, pastel) is the app's look for everyone: <html data-clay="1"> is set at start-up and the
// sidebar / Class page CSS (clay-sidebar.css, class-page.css) key off it. Importing this module is what applies it.
if (typeof document !== 'undefined') document.documentElement.setAttribute('data-clay', '1');

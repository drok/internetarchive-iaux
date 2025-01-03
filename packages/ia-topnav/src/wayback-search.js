import WaybackSearch from '../../ia-wayback-search';

import waybackSearchCSS from './styles/wayback-search.js';

class NavWaybackSearch extends WaybackSearch {
  static get styles() {
    return [WaybackSearch.styles, waybackSearchCSS];
  }
}

customElements.define('wayback-search', NavWaybackSearch);

export default NavWaybackSearch;

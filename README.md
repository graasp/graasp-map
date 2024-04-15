# Graasp Map

[![Latest version published on NPM](https://img.shields.io/npm/v/@graasp/map?logo=npm)](https://www.npmjs.com/package/@graasp/map)
[![Latest version released on Github](https://img.shields.io/github/package-json/v/graasp/graasp-map?color=deepskyblue&logo=github)](https://github.com/graasp/graasp-map/releases/latest)
![NPM package downloads per month](https://img.shields.io/npm/dm/@graasp/map?color=green)
![typescript version](https://img.shields.io/github/package-json/dependency-version/graasp/graasp-map/dev/typescript)

[![Storybook deployment](https://img.shields.io/badge/storybook-ui-%23FF4785?logo=storybook)](https://graasp.github.io/graasp-map/)
<a href="https://gitlocalize.com/repo/9355?utm_source=badge"> <img src="https://gitlocalize.com/repo/9355/whole_project/badge.svg" /> </a>

# Behaviors

- On load:
  - without item id:
    - without allowed geolocation and geolocation disabled: show the country form to choose a focus. Choosing a country will prevent loading lots of item at the same time.
    - with allowed geolocation: show the current position
  - with item id:
    - the item does not have a geolocation and geolocation disabled: show country form
    - the item has a geolocation (current or children): fit bounds of the map
    - the item does not have a geolocation but geolocation enabled: show the current position

If the user is logged out, geocoding and reverse geocoding are disabled.

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
    - Without allowed geolocation: show the country form to choose a focus. Choosing a country will
    - With allowed geolocation: show the current country (TBD)
  - with item id:
    - without any geolocation: show country form
    - with geolocation (current or children): fit bounds of the map

If the user is logged out, geocoding and reverse geocoding are disabled.

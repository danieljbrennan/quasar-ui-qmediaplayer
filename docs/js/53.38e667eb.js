(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{"0279":function(n,e,a){"use strict";a.r(e),e["default"]="<template>\n  <div style=\"max-width: 800px; width: 100%;\">\n    <q-select\n      v-model=\"iconSet\"\n      :options=\"iconSetOptions\"\n      label=\"Icon set\"\n      dense\n      borderless\n      emit-value\n      map-options\n      options-dense\n      style=\"min-width: 150px\"\n      class=\"q-ma-sm\"\n    />\n    <q-media-player\n      type=\"audio\"\n      :sources=\"sources\"\n      mobile-mode\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'https://raw.githubusercontent.com/quasarframework/quasar-ui-qmediaplayer/dev/demo/public/media/Scott_Holmes_-_04_-_Upbeat_Party.mp3',\n          type: 'audio/mp3'\n        }\n      ],\n      iconSet: this.$q.iconSet.name,\n      iconSetOptions: [\n        { label: 'Eva Icons', value: 'eva-icons' },\n        { label: 'Fontawesome', value: 'fontawesome-v5' },\n        { label: 'Ion Icons', value: 'ionicons-v4' },\n        { label: 'Material Icons', value: 'material-icons' },\n        { label: 'MDI', value: 'mdi-v4' },\n        { label: 'Themify', value: 'themify' },\n        { label: 'Line Awesome', value: 'line-awesome' }\n      ]\n    }\n  },\n  watch: {\n    iconSet (iconSet) {\n      switch (iconSet) {\n        case 'eva-icons':\n          this.changeIconSetToEvaIcons()\n          break\n        case 'fontawesome-v5':\n          this.changeIconSetToFontAwesome()\n          break\n        case 'ionicons-v4':\n          this.changeIconSetToIonIcons()\n          break\n        case 'material-icons':\n          this.changeIconSetToMaterialIcons()\n          break\n        case 'mdi-v4':\n          this.changeIconSetToMDI()\n          break\n        case 'themify':\n          this.changeIconSetToThemify()\n          break\n        case 'line-awesome':\n          this.changeIconSetToLineAwesome()\n          break\n      }\n    }\n  },\n  methods: {\n    // in this scenario, each icon set must have a\n    // path and cannot be loaded dynamically.\n    // This allows webpack to know each font that\n    // could be used so it is available for loading.\n    changeIconSetToEvaIcons () {\n      this.$q.iconSet = require('quasar/icon-set/eva-icons.js').default\n    },\n    changeIconSetToFontAwesome () {\n      this.$q.iconSet = require('quasar/icon-set/fontawesome-v5.js').default\n    },\n    changeIconSetToIonIcons () {\n      this.$q.iconSet = require('quasar/icon-set/ionicons-v4.js').default\n    },\n    changeIconSetToMaterialIcons () {\n      this.$q.iconSet = require('quasar/icon-set/material-icons.js').default\n    },\n    changeIconSetToMDI () {\n      this.$q.iconSet = require('quasar/icon-set/mdi-v4.js').default\n    },\n    changeIconSetToThemify () {\n      this.$q.iconSet = require('quasar/icon-set/themify.js').default\n    },\n    changeIconSetToLineAwesome () {\n      this.$q.iconSet = require('quasar/icon-set/line-awesome.js').default\n    }\n  }\n}\n<\/script>\n"}}]);
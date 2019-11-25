<template>
  <div class="container">
    <div class="tabs is-centered">
      <ul>
        <li :class="{'is-active': $route.matched.some(route => route.name === 'misc-charts')}">
          <nuxt-link to="/misc/charts">{{ $t('misc.charts_title') }}</nuxt-link>
        </li>
        <li :class="{'is-active': $route.matched.some(route => route.name === 'misc-rich-list')}">
          <nuxt-link to="/misc/rich-list">{{ $t('misc.rich_list_title') }}</nuxt-link>
        </li>
        <li :class="{'is-active': $route.matched.some(route => route.name === 'misc-raw-tx')}">
          <nuxt-link to="/misc/raw-tx">Send Raw Transaction</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child />
  </div>
</template>

<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" small>
        <country-flag :country="selectedLang.flag" size="normal" />
      </v-btn>
    </template>
    <v-list dir="ltr">
      <v-list-item
        active-class="danger"
        v-for="(item, i) in langs"
        :key="`Lang${i}`"
        :value="selectedLang"
        @change="switchLocale(item)"
        class="localeChangerList"
      >
        <country-flag :country="item.flag" size="small"/>
        <span class="ml-3">{{ item.lang.toUpperCase() }}</span>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
	data() {
		return {
			showMenu: false,
			selectedLang: {
				lang: 'en',
				flag: 'gb',
				class: 'btnEN'
			},
			langs: [
				{
					lang: 'en',
					flag: 'gb',
					class: 'btnEN'
				},
				{
					lang: 'tr',
					flag: 'tr',
					class: 'btnTr'
				},
				{
					lang: 'cn',
					flag: 'cn',
					class: 'btnCN'
				},
				{
					lang: 'es',
					flag: 'es',
					class: 'btnEs'
				},
				{
					lang: 'fa',
					flag: 'ir',
					class: 'btnFA'
				}
			]
		}
	},
	components: {
		CountryFlag
	},
	mounted() {
		this.selectedLang = this.langs.find((item) => {
			return item.lang === this.$store.state.locale
		})
		// change rtl when language is fa
		this.$vuetify.rtl = this.$store.state.locale === 'fa';
	},
	methods: {
		switchLocale(item) {
			this.selectedLang = item
			this.$store.commit('changeState', ['locale', item.lang]);
			this.$vuetify.lang.current = item.lang
			this.$i18n.locale = item.lang
			document.documentElement.lang = item.lang;
			// change rtl when language is fa
			this.$vuetify.rtl = this.$store.state.locale === 'fa';
		}
	},
	computed: {
		displayLocale() {
			return this.$i18n.locale
		}
	}
}
</script>

<style>
.localeChangerList:hover {
  background: #838383;
  cursor: pointer;
}
.normal-flag {
	transform: scale(.38) !important;
}
.v-list .flag {
	width: 60px;
}
</style>

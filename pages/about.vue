<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <v-card class="pa-5" width="700px">
      <v-card-title>
        {{ $t('about_title') }}
      </v-card-title>
      <v-card-text>
        <p>
          amvstrm is an anime streaming site website build with Nuxt.js 2 SPA and
          amvstrm's API with i18n and bookmarker to bookmarked anime to
          localstorage. It is fast and easy to deploy to the web.
          <br />
          <span>rip animixplay! 😭</span>
          <br />
          <strong>
            Disclaimer : We do not store copyright material in our server. We only scrape
            those data from 3rd party sources.
          </strong>
          <br />
        </p>
        <h2 class="mb-1">{{ $t('features.title') }}</h2>
        <ul>
          <li>Bookmarked any anime to localStorage</li>
          <li>Search any anime from gogoanime</li>
          <li>
            No Ads on the video player Using Plyr.link and nsPlayer as the video
            player embed with no ads (with additional goload embed)
          </li>
          <li>i18n switcher (ENG/KHMER)</li>
          <li>Fast and simple to deploy</li>
        </ul>
        <h2 class="my-2">Official amvstrm's website</h2>
        <p>This is our official website and beware any of those fake websites. We do not put ads and make money from it.</p>
        <ul>
          <li>amvstr.ml</li>
          <li>www2.amvstr.ml (Privacy friendly)</li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <div class="tw-flex tw-flex-col tw-items-start">
        <v-btn class="mb-1" href="https://docs.amvstr.ml">
          <v-icon>mdi-information</v-icon>
          Help
        </v-btn>
        <v-btn class="mb-1" href="https://github.com/amvstrm/amvstrm">
          <v-icon>mdi-github</v-icon>
          Github
        </v-btn>
        <v-btn class="mb-1" href="/privacy">
          <v-icon>mdi-lock</v-icon>
          {{ $t('privacy_policy') }}
        </v-btn>
      </div>
      </v-card-actions>
    </v-card>
    <v-card class="pa-5" width="700px">
      <v-card-title>
        {{ $t('contact-donation-title') }}
      </v-card-title>
      <v-card-text>
        <p>
          <strong>Email : </strong>
          <a href="mailto:admin@amvstr.ml">
            <strong>
              <span class="text-primary">
                <i>
                  <span class="mdi mdi-email">admin@amvstr.ml</span>
                </i>
              </span>
            </strong>
          </a>
        </p>
        <p>
          <strong>Donation :</strong><br />
          <a
            class="donate-with-crypto"
            href="https://l.aslnk.ml/amvstrm.donate.coinbase"
          >
            Coinbase (nsDev/NYT92)
          </a>
          <br />
          <a href="https://l.aslnk.ml/amvstrm.donate.liberapay"> Liberapay (amvstrm) </a>
        </p>
        <p>
          {{ $t('donation_desc') }}
        </p>
        <p>
          <strong>Powered By :</strong><br />
          <a href="https://railway.app?referralCode=SpsRaMStrmAffl">Railway</a>
          <br />
          <a href="https://cloudflare.com">Cloudflare</a> <br />
          <a href="https://vercel.com/">Vercel</a> <br />
          <a href="https://localazy.com">Localazy</a> <br />
        </p>
      </v-card-text>
    </v-card>
    <v-card class="pa-5" width="700px">
      <v-card-title>
        Status
      </v-card-title>
      <v-card-actions>
        <v-btn href="https://nsdev.checkly-dashboards.com" class="ma-1" target="_blank">
          <v-icon>mdi-server</v-icon>
          Check status
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'About',
      meta: [
        { name: 'og:image', content: '/seoimg.png' },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '630' },
        { name: 'og:image:type', content: 'image/png' },
        { name: 'og:image:alt', content: 'amvstrm' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'About | amvstrm' },
        {
          name: 'og:description',
          content: 'About amvstr.ml',
        },
        { name: 'og:url', content: 'https://amvstrm.com/about' },
        { name: 'og:site_name', content: 'About | amvstrm' },
        { name: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: 'https://amvstr.ml/about' },
        { name: 'twitter:title', content: 'About | amvstrm' },
        {
          name: 'twitter:description',
          content: 'About amvstr.ml',
        },
        { name: 'twitter:image', content: '/seoimg.png' },
      ],
    }
  },
}
</script>

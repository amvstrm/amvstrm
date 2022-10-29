<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <v-card class="pa-5" width="700px">
      <v-card-title>
        <span class="headline">{{ $t('about_title') }}</span>
      </v-card-title>
      <v-card-text>
        <p>
          {{ $t('about_description') }}
          <br />
          <strong
            >Beware : We do not store copyright material in our server. We only
            get those data from 3rd party sources.</strong
          >
          <br />
        </p>
        <h3 class="mb-1">{{ $t('features.title') }}</h3>
        <ul>
          <li>
            <p>{{ $t('features.li1') }}</p>
          </li>
          <li>
            <p>
              {{ $t('features.li2') }}
            </p>
          </li>
          <li>
            <p>{{ $t('features.li3') }}</p>
          </li>
        </ul>
      </v-card-text>
      <v-btn href="https://github.com/amvstrm/amvstrm" class="ma-1">
        <v-icon>mdi-github</v-icon>
        Github
      </v-btn>
      <v-btn href="/privacy" class="ma-1">
        <v-icon>mdi-lock</v-icon>
        {{ $t('privacy_policy') }}
      </v-btn>
    </v-card>
    <v-card class="pa-5" width="700px">
      <v-card-title>
        <span class="headline">{{ $t('contact-donation-title') }}</span>
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
            href="https://commerce.coinbase.com/checkout/dc5b4ea2-257e-4224-a2f5-234f019d43d0"
          >
            Coinbase (nsDev/NYT92)
          </a>
          <br />
          <a href="https://liberapay.com/amvstrm"> Liberapay (amvstrm) </a>
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
        <span class="headline">Translation (🇰🇭)</span>
      </v-card-title>
      <v-card-text>
        <p>
          {{ $t('translation_desc') }}
        </p>
      </v-card-text>
      <v-btn href="https://github.com/amvstrm/translation" class="ma-1">
        <v-icon>mdi-web</v-icon>
        Help us translate!
      </v-btn>
    </v-card>
    <v-card class="pa-5" width="700px">
      <v-card-title>
        <span class="headline">Status</span>
      </v-card-title>
      <v-card-actions>
        <v-btn
          href="https://nsdev.checklyhq.com"
          class="ma-1"
          target="_blank"
        >
          <v-icon>mdi-server</v-icon>
          Status Check
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

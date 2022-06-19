<template>
  <div>
    <v-row justify="start" class="flex-column">
      <v-col class="ma-6">
        <v-card class="pa-5">
          <v-card-title>
            <span class="headline">{{ $t("about_title") }}</span>
          </v-card-title>
          <v-card-text>
            <p>
              {{ $t("about_description") }}
              <br />
              <strong
                >Beware : We do not store copyright material in our
                server. We only get those data from user submissions and websites</strong>
              <br />
            </p>
            <h3 class="mb-1">{{ $t("features.title") }}</h3>
            <ul>
              <li>
                <p>{{ $t("features.li1") }}</p>
              </li>
              <li>
                <p>
                  {{ $t("features.li2") }}
                </p>
              </li>
              <li>
                <p>{{ $t("features.li3") }}</p>
              </li>
            </ul>
          </v-card-text>
          <v-btn href="/privacy" class="ma-1">
            <v-icon>mdi-lock</v-icon>
            {{ $t("privacy_policy") }}
          </v-btn>
        </v-card>
      </v-col>
      <v-col class="ma-6">
        <v-card class="pa-5">
          <v-card-title>
            <span class="headline">{{ $t("contact") }}</span>
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
              <strong>Support Our Website : </strong>
              <a
                class="donate-with-crypto"
                href="https://commerce.coinbase.com/checkout/dc5b4ea2-257e-4224-a2f5-234f019d43d0"
              >
                Coinbase (nsDev/NYT92)
              </a>
            </p>
            <p>
              <strong>Powered By :</strong><br/>
              <a href="https://railway.app?referralCode=SpsRaMStrmAffl">Railway</a> <br/>
              <a href="https://cloudflare.com">Cloudflare</a> <br/>
              <a href="https://vercel.com/">Vercel</a> <br/>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="ma-6">
        <v-card class="pa-5">
          <v-card-title>
            <span class="headline">Translation (🇰🇭)</span>
          </v-card-title>
          <v-card-text>
            <p>
              Help us translate our website in Khmer language, So Our Cambodian
              Visitor who does not know english and understands well.
            </p>
          </v-card-text>
          <v-btn href="https://localazy.com/p/amvstrm" class="ma-1">
            <v-icon>mdi-web</v-icon>
            Translate the website
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {};
</script>

// Powered By Playerjs.com 16.12.5
// nsplayer 2.5
/*
- Added Click to seek the video
- Increase Title and Subtitle Size
- Supported Vimeo and Dailymotion Embed
- Fix Small Issue
*/

if (!window.pljssglobal) {
    var pljssglobal = [];
    var pljssglobalid
}
if (window['PlayerjsAsync']) {
    setTimeout(PlayerjsAsync, 1)
};

function Playerjs(options) {
    var o = {
        play: false,
        audiosrc: [],
        audioctx: [],
        playerid: '',
        default_w: 640,
        default_h: 360,
        version: '',
        compilation: ['HLS', ''],
        compilations: '',
        fullscreen: false,
        realfullscreen: false,
        nativecontrols: false,
        fullwheel: false,
        fullscreen_start: false,
        airplay: false,
        pipwebkit: false,
        ispipkit: false,
        u: '#1CjUkw3UJxu5Hz2igAGT6THlhXOlhXNTdTLpgz2iGwvTGZLdGw29dz3TGZGThXOlhXOlGWNUMyupJTHMiWNUewvULyu4GZGTeXHlEXNlhTOlGWNULAKQIyutfBNT6XqhGwu5azuQ0yu9fTHMGwuihyRPGWNUFTHMiWNUdxux0wu5IAKJLySphwupIyu5LTHMiXNhGyNT6Yrm9WNUHz250AK9dv3paBRiJTHa7TK9jxRtjTHMiWNUgzGT6XqhGwuY0yu9fTHMGBRJ0zRsGWNU0CvmJTHMGBRt4BNTdTLmgA2J0yu9fTHMGBR9hWuiJxLoGWNUHzRJHyjT6XNhGyRQfxNT6XNhGBRt4BNT6TGTdTLxFAGT6TLpaBRiJTGhGyRJIxqT6XqhGyRJIxu9fARiFCqT6XqhGwu5azuQ0yu9fTHMGwuihyRPGWNUGxjT6XqhGwKBFTHMGXN4kTGhGwKBhwupIyu5LTHMGXrTEXrlEXrTEXrlGWNU0yvpdxqT6TGTdTKULA3pjxvpHyNT6XqhGxK9fBSYaCKsGZHThWNUGx2QgBKtjTHMGWrPGWNUkw2QdxqT6THPGWNUewvULyu4GZGThTOlEXNlhTGhGBRJhTHMhWNUkyR93BRJ0zRthzRQ5zRJkBNT6XNhGwKBHz2igAGT6THlhXOlhXNTdTKiJBSpJALYhwuYazKAGZGThTGhGwqT6THPGWNUaw29fzuQjx2JfTHMGXNlhTOlEXNTdTKYgzR9jTHMGxKxKxKxKTL0dTKYgzLpjz2iDzRJfxqT6CjUgAKpJAGT6XjhGz24GZHPdTLp5ARsGZGUkyRQhxqTdTKQHBRJgzGT6TKiazKsGWNUMTHM4WNUjz3tfxRJfxjT6THlfYjTdTLAGZHPhXNhGwqT6XqhGwuULTHMGXN4kTGhGwuigwuoGZGThWHoGWNUFz3xJAGT6THlGWNUHz2igAGT6THQFwutKxGTdTKYgzR9jwKAGZGUKxKxKxKwGWNUHz2igAKigwuoGZGUKxKxKxKwGWNUHz2igAK92xvTGZGUKxKxKxKwGWNUGBuxKxvTGZLdGz24GZHldTKYgzR9jTHMGxKxKxKxKTGhGwqT6XN41DqhGAR9kyvpaz24GZGUHz250AK9dAjTdTK1FAKBazGT6THPEXNlhTOPjTGhGyRQfxRiJTHMiWNUGx3mFxRpazKAGZGT1TOlEYqlhTGhGBRJhTHMiWNUMyupJTHMiWNUMyupJz25dyvxJTHMiWNUMwu5IzRtkw2QdxqT6THPfXjTdTKiazKt0yvmewvULyu5Gz3p0z20GZHPhWNU0z3m0yvlGZHPdTLpaARULw29dz3TGZGUKxKxKxKwGWNU0yvmGx3UgBu5Iyu5LTHMkWNUJCSmFzKoGZGTiWHXGWNU0yvmHz2igAGT6THlhXOlhXNTdTLpaASmFxRpazKAGZGT1TOAEYNl3TGhGBRJhxK9fBSYaCKsGZHPiWNU0yvmGx2PGZGTiTGhGBRJhwqT6THlfZNTdTKiazKt0yvmhz2JfBRtjTHMiWNUFzKJewvpaz24GZGUhz3YaBRJgzGTdTLpaAR1FAKBazGT6THlEXNlhTOlGWNUHBvY0z213yup0yNT6XS0dTKYgzLpjz2iDARiFCqT6CjUgAKpJAGT6XGhGz24GZHPdTKJHz24GZGT8A3xLTSBaxSpMnqAiZNAEyRtax2F0nqAiZNA#nSmFBREExO0LrrP1WHs2XGl4WHQXXj44Yj4jXHtOXj4hYrTeWHXkYjljTN4jXHsEXGliWHPjYvwiYq43YuXhTN45TOPfXOsjTOPfYOwjTOPfZOAfZshiYq41YHXEZq45wj41ZOoeWHo1WHs4YN0iWHX1TOleXq44CGAExKJdzO0LT2xKxKxKxGA#nQhgARQ0yO48vN9kBKA#TGhGyuYgzHTGZGUAzHikBKAEB2JIBRE9UkThASELTRFJyuBMBO0LXHmhCNAEBKJJB0UgCO0LXNlhTOThTOThUjm2xvUkyu9fnqAiWHPLTSFezR5knqBMBSphZJhgvN93B3AfBkXfz3ULvN8jXOlhvN9kBKALTSFezR5kZLFdyu5cnqBMBSphZJhgvN93B3AfBkXfz3ULvN8iZrI5vN94zRJfyjA#vR4ETNlEnNPeWqmSxu5JAKQ0z3T6TQYcxvpHyNl0XGlMXkw3ZOPaTN0EySp0AOaAW1hgB3B3WKUgyRteyuQfw29Iyu5LWKYgzthgA2eJBRYMTN0enJifTNlETOiIxvYHnIYjxuQ0xuoEB2J0yNmry2t0w2EfnQhgxRtkwk5AzGlETNl8xRtKAk48vN9IxuxknJifTNlETOiLTRJInqBSAK91ANAEA3pjz2eJnqBfz25JUjmkBSUgy2seB2JIBRE9UkPLTRxazRh9U25gzKsLTRxazRheALtdxr0LxvxJzK9IxNA#vR4ETNlETNlETOihwvpMTRo9U001WOPErOTdXqmOXq40WOPEXqhiWHoEXqhjTPhiWOP2TPXiWOP2WHwEXq40WOP3TOTdXrAErOsdXrAEoksfYGhiYjl2WOP2WHwEYGhiYGmXYGhjTPX2WOPfYNl1WHwdXql1WOPEuGmYXrPdXqmOXrlfYNhiTOPhWOPfYNliXNhjTPhiXNhiYGmOXrldXrwfYGliXN40WOP3TOPiWOP3TPhiYNhiYjmOXrofYGhiYjliYqhiYG42TOP1WOP2TPhiYqhjTPXiYqhiWHoEXrofYGhiTOP0WOPErOPiWOPEuGAEyuo9U1YMwvmJUjmKyuidnqAHxKxKxKxKUjmKyuidWvU1zRs9U25gzLaJAK8LnHiAW3mFBRE#vR4ETNlEnQhgxk5AzHiAW3Y2xk4GWNUaw29fXjT6THikBKAEB2JIBRE9UkThUjmMxuJLySo9UkThUk48xjm0AKQfA2xgAK09U3pjwu5kzRQ0xqEjWNlkVqA#nSmFBREExO0LrrP2WOAfXrX2YHPiXkTErOP2WOAfXrl5Xrw5YOsErOP1WHThZOP3ZOsdYj4iXOIiYHI0YqmXXrofXHA1XOIkWOAfXrl5Xrw5YOsEokP0WHT3Yrl5XjhkWHP5ZrPjYHT1TOPiWHl2XkP5YjhhTOAfXrX3Yro2YOsdXNmOXj4jXrP4Zrs5XqhhTOldXj4iZrIiXHwjYqlhWOAfXrl5Xrw5YOsEokldXrPfXOP5XHPjYGlkWHTiXrE5YrIiWOP0WHTiZOXkZOIEYj4iXkA1YOw0YqhiYN4jXrEkXkE5TPh3WHPkYks0YHo1WOPjWHo0Xrl0YHsEokofXrIkXkl4YrsdXrTfYOoiXOo2YqliWHA4YOX4YHwjWOPhWHl0XrAhXrEEXq43ZOokZOw2XGh3WHPhZrP2Zro1TPXiWHA4YOX4YHwjWOofXrA2YHX3XOsEYN4iZrXkXOE1YqhiWHA3YkT5XHX2TOAfXrX3Yro2YOsdXq43YkAjZrTkYGmOXrlfXOEiYkE0YNhiWHA3YkT5XHX2TOPjWHo5XOAhYHXdYN4iYkw2XkAhYqliXG40Zrl3XOwkWOAfXrl5Xrw5YOsErOPhWHw0YOsiYHAdYj4iXOIiYHI0YqmXXrXfXkEjZOI5YGhiXq41YrT0XOl0TPhiYGh3WHPkYHwiXrXjTQMLTRxazRh9UjYKxKxKxKwLnHiAW3mFBRE#nQhgxk48vN9kBKA#TGhGwuY0yu9fTHMGARiFCqTdTKQHBRJgzHTGZGUhwvtkxqTdTLp5ARsGZGUkBKAGWNUkw2QdxqT6THPGWNUkw2Qdxu92xvTGZGTeXqTdTK1FAKBazGT6THlEXNlhTOlGWNUGx2YgzR9jz3xJAGT6TG0iTGhGwqT6THPGWNUFz3xJAGT6TG0iTGhGBRJhTHMiWNUaw29fA2YgzR9jz3xJAGT6TG0iTGhGyuYgzLYHz2igAGT6TG0iTGhGwKAGZHPdTKULw29dz3TGZGTiwuQJxKwGWNUGx3mFxRpazKAGZGT3TOwEYql3TGhGwKBFz3xJAGT6THPGWNUGx2PGZGThTGhGwKBgTHMGXN4jTGhGyuYgzK1FAKBazGT6THlEXNlhTOTGWNU0yvmGx2YgzR9jTHMGxKxKxKxKTGhGBRJhw29dz3TGZGThXOlhXOlGWNU0yvmGx3UgBu5Iyu5LTHMkWNU0yvmGx2PGZGTiTGhGBRJhxK9fBSYaCKsGZHPiWNU0yvmhwupIyu5LTHMGYjl3TOAEYjTdTLpaARPGZGThWHAGWNUFzKJewvpaz24GZGUhz3YaBRJgzGTdTLpaASmgyu50xvTGZHPdTLpaASmgyu50xvUFzRJLzGT6TKiJxLoGDqhGw29fBSUgzQ9eBvpJTHa7TK9jxRtjTHM4WNUgzGT6XqhGyuYgzGT6TJifnSY2xjm3yup0yO0LXHQhCNAEyRtax2F0nqAjXSm4Ujm2yut3oK94nqAeXrIEWrP4TOTiTOThUjm2xvUkyu9fnqAiWHPLTSFezR5knqBMBSphZJhgvN93B3AfBkXfz3ULvN8jXOlhvN9kBKALTSFezR5kZLFdyu5cnqBMBSphZJhgvN93B3AfBkXfz3ULvN8iZrI5vN94zRJfyjA#vR4ETNlEnRAEA3pjz2eJnqBfz25JUjmkBSUgy2seB2JIBRE9UkPLTRxazRh9U25gzKsLTRxazRheALtdxr0LxvxJzK9IxNAEBSUFzLYKz3UenqB0AKQfA2iFBRsMWrP5WHlhXOlhXNhEWrP4WHlhXOlhXNILnJifTNlETNlETNl8ARQ0yNmInqBYXrAfYjh0WHXEokP3WHXdXj45TOP2WHAdXj45TOP2WHXdYN4kTPXiYq45WOofYjliYq45WOsfXjliYG4kWOsfYjmOXrAfYqh2WHIEXrEfXqh4WHoEXrEfXqhiXNmOXrEfXqhiXq42TOP3WHsdXrXfXqliYG4kWOP0WHXEokP1WHIdXrofYjliYq45WOP1WHXEXrwfXjhiYq43TPXiYG41WOP1WHIEXrwfZNhiYGliYjhiYGmOXrAfXjhiYGliYj41WOP1WHIEXrAfYjhiYq43TPXiZq4jWOP0WHTEXHlfXqhiXG4jTOThWHPdXrlEokThWHPdYj44TOP5WHTdYq44TOP3WHAdYN4kTQMLTRxazRh9UjYRpIxRpIwLTRxazRheALtdxr0LzK9fCKtjzjA#nQhgARQ0yO5AzGlETNlETNlEnSmFBREExO0LrrPkWHT4XGh2WHT4Xrs1YHT0TPXiXj4iXOThXOE2WOwfYOskXrl4ZOXEXrXfXOlhXro5Zqh2WHw5XOIhYro2TOPkWHlhXOP0ZrIdYG45XkI1YrwjYNmOXrXfXOlhXro5Zqh3WHP4ZOThYkljTOPkWHPhXHlhZOwdYj40XHwhXOX2YNliXj4jZOTdYj41ZrA1YrwjYNmOXrofXOP3WOEfXkXjYrs2XHoEXrofXHA3WOIfXOs1Yrs2XHoEXrofXHA3WOIfZrI5Yrs2XHoEokP0WHT3YjhiXN45Xks1YrwjTOPkWHE1XGhiXq45Xrw1YrwjTOPkWHT4XGhiXG40ZOw1YrwjTPXiXj4iXOThXOE2WOPjWHw1ZOPhZOEEXrXfXOlhXro5ZqhiXG44Zrs5XOs1TOPkWHlhXOP0ZrIdXrXfXro0Yrs2XGmOXrXfXOlhXro5ZqhiXj4kZrXjXOAEXrXfXrljXOl4YGhiXj42XkPhXOX2TOPkWHT4XGhiXj44XOT1YrwjTPXiXj40XHAdXrXfZro3Yrs2XGliXj45XrEdXrofXOw0Yrs2XGliYN4kWOPkWHI1ZOs1YHTEokP0WHoiXOP4ZrXdXrXfZrXhYHX2YjliYN41XrTjYHI3WOPkWHE3YkP5ZOwEXrofYrI4WOPkWHEhXHs1YHTEokP1WHA3XjhiXG43XkT1YrwjTOP2WHPkWOPiWHP1Zrs1YHTEXrwfXrXdZq45ZrI1YrwjYNmOXrwfXrXdZq44XHI1YrwjYNliYG4iXHEdZq42YrI1YrwjYNliYG4iXrIdZq40ZOI1YrwjYNmOXrwfXOw2WOEfYOI3Yrs2XHoEXrsfZNh3WHo4YOs1YHT0TOP0WHs5Yjh2WHT4Xrs1YHT0TPXiYN40XHs0YOA0WOwfXrliYrw0ZNliYN4iZOA2Yrl4WOsfZrI5Ykl2XroEXrXfZrX5WOsfZrI5Ykl2XroEokPkWHw5XOX0ZrTdYq45ZrI3XOwiYNliXj40YrT1YrT2WOwfXrliYrw0ZNliXj4jZOPdYG4jZOP1YrwjYNmXXrXfXHEjWOwfXHEiYrs2XHoEuGAExKJdzO0LT0xRpIxRpGA#nQhgARQ0yO5AzGlETNlETNlEnSmFBREExO0LrrsfYkE2WOAfXOl3Yrs2XHoErOTfYkP0WOAfXOl3Yrs2XHoEokTfXHE2WOAfXOl3Yrs2XHoEXGh3WHXhZrs1YHT0TOTdYj43YrI1YrwjYNmXXGhiXG4jYkP1YrwjTPXjWOPjWHAjXks1YHTEXG4jZOwdXrXfXOTkYrs2XGljWHAiYNhiXj4hXHX1YrwjTPh1WHA4YGhiXj4hXHX1YrwjTPh5WHE1YjhiYG44ZOP1YrwjTPXiXN4kYrAdXrAfXrEiYrs2XGliXqhiYG44ZOP1YrwjTOPiWOP2WHT3Zrs1YHTErOPiWOXfYksiYrs2XHoEokPiWOXfXrshYrs2XHoEXrlfXks3WOTfYkA0Yrs2XHoEZq44YrAdXj4iYrl1YrwjYNmXYq43ZOwdYj4hXOA1YrwjYNmyUjmKyuidnqAHpIxRpIxRUjmKyuidWvU1zRs9U25gzLaJAK8LnHiAW3mFBRE#vR4ETNlEnQhgxk5AzHiAW3Y2xk4GWNUaw29fXGT6THikBKAEB2JIBRE9UkTiASELTRFJyuBMBO0LXHmhCNAEBKJJB0UgCO0LWrP5TN0iZNljXqljXNAEBKtjA2JgzH0LXq4iUjm4zuifAk0LySp0AOaAW1hgB3B3WLAkWK9jx1hgXHlhXQhgA3xLUjm4zuifAka4zRJfyk0LySp0AOaAW1hgB3B3WLAkWK9jx1hgXrI5ZthgCRiazKdLnJifTNlETOiLTRJInqBSAK91ANAEA3pjz2eJnqBfz25JUjmkBSUgy2seB2JIBRE9UkPLTRxazRh9U25gzKsLTRxazRheALtdxr0LxvxJzK9IxNAEBSUFzLYKz3UenqB0AKQfA2iFBRsMWrP5WHlhXOlhXNhEWrP4WHlhXOlhXNILnJifTNlETNlETNl8xjm0AKQfA2xgAK09U3pjwu5kzRQ0xqEiYN4hXOlhXOldTOAfXOlhXOlhVqAEyuo9U0iazKsLTSY0AK9cxr0LT2xKxKxKxGAEA3pjz2eJWvBaxSpMnqAjUjmkBSUgy2sezRJfxuYFAO0LAK91zKoLTSY0AK9cxq1dyu5JyK9azH0LAK91zKoLnJifTNlETNlETNlETNlEnSmFBREExO0LrrlfXks5XrE1YkX0WOPfXkXhYrE1YOwErOofYOs0YrXkXGh1WHojYrIkXHIkUk48vN9hwvpMnJifTNlETNlETNlETNlEnSmFBREExO0LrrofYHw5YOP0YrodXq4kXkl1ZOs0YGmXXN41YkohYHAhYkTdYq40XHs5XkT5XjA#nQhgARQ0yO5AzGlETNlETNlEnQhgxk5AzGlETNlETNlEnSmFBREExO0LrrsfYkE2WOAfXOl4TPhjWHAiYNh3WHlhZNmOXG4jZOwdYj4hXOEEXGh3WHXiTOTdYj43YGmXXGhiXG4jYkTEokTdXrTfYkT0TOTfXHE2WOPkWHljYNljWHAiYNhiXj4hXHoErOsfYkE2WOPkWHljYNmXZq44YrAdXrwfZOEjTPXiXN4kYrAdXrAfXrEjTOPiWOP2WHE4XGliXqhiYG4jZNmXXrPdXj43YrTEokPiWOXfXrsiTOPhWHX1YjhjWHA3Yql5WHE1YjhkWHP1XqmXYq43ZOwdYj4hXOEEuGAExKJdzO0LT2xKxKxKxGAExKJdzN1jBuiJnqBfz256xvUgUk48vN9hwvpMnJifTNlETOiAW2A#vR48vN9kBKA#TGhGwuY0yu9fTHMGzvt0xqTdTKQHBRJgzHTGZGU1zK11BRsGWNU0CvmJTHMGA3xLTGhGzuQjx2JfTHMGXNl1TOlEYqTdTKULTHMiWNUGx2YgzR9jTHMGXuQFxuxKTGhGwKBgTHMGXN4jTGhGwKBhwupIyu5LTHMGYGl2TOwEYGTdTKJHz25ewvULyu4GZGThTOlEXNlhTGhGwKBFz3xJAGT6THPGWNUGx2PGZGThTGhGBRJhTHMiWNU0yvmhwupIyu5LTHMGYjl3TOAEYjTdTLpaARULwqT6THPGWNU0yvmKz250A2J6xqT6XrPdTLpaARULAK91zKpazKAGZHXdTLpaARULw29dz3TGZGUKxKxKxKwGWNU0yvmHz2igAGT6THlhXOlhXNTdTLpaARPGZGThWHAGWNUFzKJewvpaz24GZGUhz3YaBRJgzGTdTLpaASmgyu50xvTGZHPdTLpaASmgyu50xvUFzRJLzGT6TLUax2F0TL0dTKYgzLpjz2iDBK9dBu1JTHa7TK9jxRtjTHM5WNUgzGT6XqhGBSJhxqT6TLYMwvmJTGhGwuY0yu9fTHMGBK9dBu1JTGhGyNT6YNhGAK91zKpazKAGZGTiTGhGw3tkBR9eB2JIBREGZHPdTLAGZHAhWNUFTHMiWNUFwKAGZGThWHXGWNUFz3xJAGT6THlGWNUHz2igAGT6THQFwutKxGTdTKYgzR9jwKAGZGUKxKxKxKwGWNUHz2igAK92xvTGZGUKxKxKxKwGWNUMyupJTHMhWNUMyupJz3t0zvt0xqT6XqhGAK90wvpaz24GZGThTGhGwKBhwupIyu5LTHMGYqlhTOsEXNTdTKULTHMhWNUMwu5IzRsGZHPdTLmgA2J0yu9fTHMGw29fBSUgzSXeAKJLySoGWNUewvULyu4GZGThTOlEXNl1TGhGwu5azuQ0yu9fTHMGAR9kyvpaz24GWNUMyupJBu50yuikBRQjBRtITHMhWNUMyupJz25dxuQ2xqT6XNhGyRQfxRiJA2YFzRsGZGTiWHXGWNUMwu5IzRtHz2igAGT6TG0iTGhGxvFhwu5ITHMGXq40TGhGBRJhTHMiWNU0yvmGx2YgzR9jTHMGxKxKxKxKTGhGBRJhw29dz3TGZGThXOlhXOlGWNUdyu5JBRJhzuQjx2JfwK90BR9eTHMiYqhGBRJhwKBFTHMGXqTdTLpaARULAK91zKpazKAGZHXdTKiazKt0yvmhz2JfBRtjTHMiWNU0yvmKz250A2J6xqT6XrPdTK9fBR9hTHMiDqhGw29fBSUgzQ90yu1JTHa7TK9jxRtjTHM1WNUgzGT6XqhGwuY0yu9fTHMGBRJexqTdTLp5ARsGZGU0xvF0TGhGBRt4BNT6THl6XOlGWNUKz250A2J6xqT6XrPdTK1FAKBazGT6THlEXNlhTOPhTGhGw2iaw2dGZHldTLYJARQjwvpgAGT6TJhgTGhGyu52xvUkxvpazusGZHldTKQfyu1FBRJgzGT6TLmgA2J0yu9fTGhGA2FgB2p1AKQ0yu9fTHMiWNUdxvp0xvUkARQHyu5LTHMGXN4jTL0dTKYgzLpjz2iDxStjwvpaz24GZLdGz3UIxvTGZHwdTK9fTHMiWNUFw3paz24GZGUIBvUFBRJgzGTdTLp5ARsGZGU0xvF0TGhGBRt4BNT6TJhgTOl6XOlGWNUKz250A2J6xqT6XrPdTK1FAKBazGT6THlEXNlhTOlGWNUHzRJHyjT6XNhGwu5azuQ0yu9fTHMGAR9kyvpaz24GDqhGw29fBSUgzQ9GBuxKxvTGZLdGz3UIxvTGZHAdTK9fTHMiWNUaw29fTHMGnRpaBGmHzRQkAk0LzR9FxRtjVSUFzKoaUk48A3xLTRYdwvYknqBHyvUHBuiFAGFjwu5IVqAEBKJJB0UgCO0LXHsEXHsEYrlEYrlLnHiHyvUHzRsEw2iFA3X9U3mFBREMAKQfxNILTSY0AK9cxr0LVRYgzR9jVqAEw3E9UkshUjmHCr0LYrlLTST9UkThUjmKyuidnqBfz25JUjmkBSUgy2seB2JIBRE9UkTLTSY0AK9cxq1eyvpJAKiazuJ0nqAiXNBAWk48vN9kBKA#nQhgxRJ2nLi8DN5dz2QIxvTMAKQfxNIEC3mgA2J0yu9fZGmjxuiFBRJ2xreewvULyu46TN0jYvm4TOlEXNleXHthCOe3yup0yOMEYrmhCOe9WKigwupJAGFjwu5IVraGxuxgAKsEC2YgzLpJzLo6TNALZ2paA3mdwvI6TRUdz2YcZ3mFxRpazKAeBR9hZGliXOlJZ30fw2Jjw3tdwvTMAKQfxNIECj13xuUcyvoewu5azuQ0yu9fZGmjz3pFBRsEXLXEzRJfxuQjTRJfxKJfyvpJZ2Qfyu1FBRJgzHMEAK90wvpJTOUkTRiazKtFAGmazKxazKJ0xreMxuJLySo6TOPhXNs7WvBJwKeaBN10AKQfA2xgAK0ez3Uax2JfZGmHxu50xvTEw2tfBRtjZ3pjwu5kxK9jzq1gAKJLyu46TRYJzLpJAGmHxu50xvT7B2JIBRE6TOPhXNs7AR9kyvpaz246TRQGA29dBvpJZ3pgAOMEXOeGz3p0z206TOl7zRtKBOMEXOejyuBMBOMEXOeewvULyu46TRQ1BR87Dq5hwvpMVSUFzKoaTSekBSUgy2sexRQkyRQjAKQ5ZGliWNljXOl7A3pjz2eJWupFA2FgxKxkxvo6TOl7WvBJwKeaBN1FzKJewvpaz246TRpFA2EEXq41AjmJwvYJWuJfWu91BNmazKxazKJ0xreFzKJewvpaz246TRpFA2EEXq41AjmJwvYJWuJfWu91BNmazKxazKJ0xre9oN13xuUcyvoey2t5xLUFzutkTSUgBRQ0xqm7XrlhUqm7WvBJwKeaBN10AKQfA2xgAK06TSUgBRQ0xqEkYHmIxuAaZ3pjwu5kxK9jzrMEAK90wvpJVOX2XRpJxjI7Dv1ly2t5xLUFzutkTSUgBRQ0xqm7XrlhUqm7WvBJwKeaBN10AKQfA2xgAK06TSUgBRQ0xqEkYHmIxuAaZ3pjwu5kxK9jzrMEAK90wvpJVOX2XRpJxjI7Dv1lWvBJwKeaBN1cxvJKAKQexvXExRQkyNm7XNsEC3Y0AK9cxq1IwvYMwvUjwvI6TOPdTOThXOekBSUgy2sexRQkyR9KxLYJBOMEXOe9YrlJTSekBSUgy2sexRQkyRQjAKQ5ZGl4ZqhEXHlhZ3Y0AK9cxq1IwvYMz2xKA2t0ZGleXkthCOe9XrlhUqm7A3pjz2eJWupFA2FFALUFCrMEZOIdTOThXOekBSUgy2sexRQkyR9KxLYJBOMEWrPjYSm4Z319oReJCuxjwu1JAjmIwvYMTSdhUqm7A3pjz2eJWupFA2FFALUFCrMEXqhEXHlhZ3Y0AK9cxq1IwvYMz2xKA2t0ZGlhZ301XNsEC3Y0AK9cxq1IwvYMwvUjwvI6TOE5WNljXOl7A3pjz2eJWupFA2FgxKxkxvo6TN0kYvm4Z30iXOlJTSekBSUgy2sexRQkyRQjAKQ5ZGl4ZqhEXHlhZ3Y0AK9cxq1IwvYMz2xKA2t0ZGleXrT0ASE7Dv0GWNUFw3paz24GZGUGBuxKxvTGWNU0CvmJTHMGw3YkTGhGAR9kyvpaz24GZGUHxu50xvTGWNUkw2QdxqT6THPfXGTdTKYdyuYcTHMhWNUMyupJTHMiDqhGw29fBSUgzQ9kxvp0yu5LAjT6CjUgAKpJAGT6XrldTK9fTHMiWNUaw29fTHMGvR48A3xLTSBaxSpMnqAjXSm4UjmMxuJLySo9UkThASELTSxaxvBNz3E9Uj04TN04TOThTOThUjm2xvUkyu9fnqAiWHPLTSFezR5knqBMBSphZJhgvN93B3AfBkXfz3ULvN8jXOlhvN9kBKALTSFezR5kZLFdyu5cnqBMBSphZJhgvN93B3AfBkXfz3ULvN8iZrI5vN94zRJfyjA#vR4ETNlEnRAEA3pjz2eJnqBfz25JUjmkBSUgy2seB2JIBRE9UkPLTRxazRh9U25gzKsLTRxazRheALtdxr0LxvxJzK9IxNAEBSUFzLYKz3UenqB0AKQfA2iFBRsMWrEfXOlhXOlhWNleZN4hXOlhXOlaUk5AzGlETNlETNlEnSmFBREExO0LrrP3WHPkYqh4WHA4YNmOXrwfYrThXkAkWOEfYHXhXkP5YHIEXrwfXOP0Zrl4YNh4WHP5YOsiYOXkTOP1WHA3XHojYHTdYj42XOIjXOs1YGmOXrsfYrT5ZrokZqh3WHljXkE5YHEEXrsfYrA5XrTkZqh2WHX1ZOXiXHA3TOP1WHIhYqh1WHEiYqmOXrwfXHT3WOsfXHA5TOP2WHPkWOofZOP3TOP1WHEiXqh0WHo5ZqmXXrsfYrliWOofXrE5TPXiYq4iZOXdXj44YkPEXrofYkTiWOXfYkA0TOP0WHP4Yqh0WHl5YqmOXrXfYHoiYHE3XGh0WHojXOE3YHl4TOPjWHI3YHPhXkTdYN40YklhYrwhZNliXG4kZrl3Zro0WOofXHT3YrAkZOoEokPiWHEhYro4YrAdXj45ZOshZrP1ZqliXq4kYHI2ZOlkWOXfYOA5YHT3TOPiWHTiYGhjWHE2YqmOXrPfXOw1WOTfXHs4TOPhWHw2ZqhjTOPhWHTiZqhjTPh5WHA4XqhjTPX5WHXkXqhjTOEfZrX2WOTfXHs4TOEfYkE0WOTfZOw1TPX4WHwkXOXiZrw5WOXfYOA5YHT3TOEfXrI0YrP0XkXdXj45ZOshZrP1Zql3WHwhZrThYrs2WOofXHT3YrAkZOoEokAfXOTkZOI2ZNh0WHo3XOl1YHl4TOwfXks4XkPjYkAdYN40XHl4YkwhZNl1WHEiYqh0WHl5YqmOYq4jYkIdXj43YkXEYN44XrwdXj44Yjl0WHo5ZNh0WHP4ZNmXYN4iZOEdYN40ZrEEokXfZOAdYN44XrwEXj43YkXdYq4jYkIEYN4hZrsdYq44XrsEokofYOThZOA2XOEdYG4kYrEkXrT3Yjl0WHo3XOl1YHl4WOAfXOTkZOI2ZNl0WHTjYks3XkE0WOAfYHl5XHl1YrwEokXfZrE1XOIiYrIdZN4iZro1XrokXjlkWHo3ZrwjYjh4WHwkXOXiZrw5TOTfZOw1WOEfYkE0TPXjWHT2WOEfZrX1TOTdZq4kXjljWOIfYkEiTPhjWOPhWHTiZqmOXGhiXN42YHIEXG4jYrEdXrPfXOw0TOTfZOw1WOPiWHTiYGmOXj40YkI2XHAdXrPfXkw5YHEhXjlkWHI4Yrl5Xrs5WOPiWHEhYro4YrAEYN4jXHA1YkX4YNhiXG4kZrl3Zro0TPX0WHo3XOl1YHl4WOPjWHI3YHPhXkTEYN40XHl4YkwhZNhiXj42YOP2ZOAjTOofXOI1WOP0WHP4YqmOXj43YkXdXrofYkTiTOXfZOAdXrsfXrEkTOofXrE5WOP1WHshXqmXYN40ZrIdXrsfZOPiTPX0WHEiZNhiYG4iXjl1WHT4XqhiYG4jXHwEYq44XrsdXrsfZrl1TPX2WHX1ZOXiXHA3WOP1WHs3ZrPjXkIEYj4hXHX4Zrw4WOP1WHsjZrI0XkIEYj42XOIjXOs1YGhiYq43YkT0XHwjTPX4WHP5YOsiYOXkWOP2WHliYOIhZOoEZN42XklkXrI2ZqhiYG41XHlkYkXEZN43ZOodXrAfXrX1TPX4WHIkYqhiYj43YOTEZq4kXkPdXrEEZq43ZOPdXrEErOPhWHTiZqhiZNmOXrlfYHw5WOP4TOPiWHl2YNhiYj43YOTEXrPfXHP2WOP3WHPkYqmOXrPfXkw5YHEhXjhiYG41XHlkYkXEXrPfZOl1YOE1YjhiYG4hXro5XOE0TOPjWHX5XOA5YOodXrsfYkAjYOT2XGmOXrTfZrA2XrlkXGhiYq41XHI5YOX5TOPkWHw0Xrw4YkTdXrsfYrA5XrTkZqliYN4iZOsdXrsfZrl1TPXiYN43XGhiYG4jXHwEXrsfXrEjWOP2WHPkTOP1WHshXqhiYq44XrPErOP1WHEiXqhiYq41XOPEokP2WHPjZqhiYq4iZOXEXrwfXHT2WOP0WHAjTOP1WHIhYqhiYN4iZOsEokP1WHs3ZrPjXkIdXrXfYHoiYHE3XGliYq41XHI5YOX5WOPjWHI3YHPhXkTEXrsfYkAjYOT2XGhiXG4kZrl3Zro0TPXiYG4hXro5XOE0WOPiWHEhYro4YrAEXrwfYrThXkAkWOPiWHX2Zrw4XOXEXrAfXrX1WOPiWHTiYGmOXrAfYkojWOPiWHl2YqliZNhiXN42YHIEXrEdXrlfXHP5TPhiZNh5WHA4XqmOXrEdZq4kXjliYj43YNh4WHIkYqliYj4iXksdZN43ZOoErOP3WHPkYqh4WHA4YNmyTP0iXNhiXjmOZN4kYOXiYOs3YqhiXjl3WOPiWHw1YHE1YOTEYjhiXNmOYjh4WHX0XkP0YrA1TOEfXkokXro1YksdYjliXNh3TPXiXq42Yrw4YrojWOAEXrXdZN4kYOXiYOs3YqliXjhiXNmOXrXdXrPfYHs2ZOs0XGliXq42Yrw4YrojWOPkTOPhWOPkTQMLTRxazRh9UjYRpIxRpIwLTRxazRheALtdxr0LzK9fCKtjzjA#nQhgARQ0yO5AzGlETNl8vN9LnJifnQhgA3xLnGTdTKQHBRJgzGT6TLYJBSpazKBkTGhGAR9kyvpaz24GZGUHz250AK9dAj1jyuBMBNTdTK1FAKBazGT6THlEXNlhTOPhTGhGBSJhxqT6TLY2xjTdTLYHwuiJTHMGXqTdTLpaANT6XqhGBRJhwKBjz3tfxRJfxjT6XjhGwu5azuQ0yu9fTHMGAR9kyvpaz24GWNUGxjT6XqhGwKBhwupIyu5LTHMGYGl2TOwEYGTdTKULw29dz3TGZGTiwuQJxKwGWNUGx28GZGThWHTGWNUGx2QgBKtjTHMGXqTdTKULwqT6THlGWNUaw29fzuQjx2JfTHMGXNlhTOlEXNTdTLpaASmFxRpazKAGZGT3TOAEYjl3TGhGBRJhwKBFTHMGXqTdTLpaARPGZGThWHAGWNU0yvmKz250A2J6xqT6XrPdTLpaARiJBSpJALYhwuYazKAGZHldTLpaARYgzR9jTHMGXOlhXOlhTGhGBRJhwKBHz2igAGT6TKxKxKxKxGTdTLpaASmgyu50xvTGZHPdTLpaASmgyu50xvUFzRJLzGT6TLUax2F0TGhGyRpaw29fTHMiWNUMxRJHz24jTHMhDqhGw29fBSUgzQ9hzRQ5zRJkBNT6CjUgAKpJAGT6XrPdTK9fTHMhWNUaw29fTHMGnSY2xjm3yup0yO0LXHlLTRFJyuBMBO0LXHlLnHiLTRxazRheALtdxr0LzK9fCKtjzjAExKJdzO0LTklhXOlhXNAEBSUFzLYKz3UenqB0AKQfA2iFBRsMXGhEXjILnHihwvpMTRo9U00hWOlErOP2WOlErOP2WOTErOldXGmXXNhhTQMErrldYGmXXrwdYGmXXrwdZNmXXNh4TPhhWOwEuGmYXNhiXGmXXrwdXrTErOP2WOP0TPhhWOP0TPhhWOPjTQMLTRxazRh9UjYKxKxKxKwLvN8#nQhgxk48vN9kBKA#TGhGwuY0yu9fTHMGARiFCuiaA3oGWNUhz3YaBRJgzGT6TKYgzLpjz2ikTGhGzuQjx2JfTHMGYqlhTOlEXrsGWNUGxjT6XNhGA2YFzRsGZGTiWHTGWNU0CvmJTHMGA3xLTGhGwu5azuQ0yu9fTHMGAR9kyvpaz24GWNUGx3mFxRpazKAGZGThTOPhTOPhTOlGWNUGx2PGZGThTGhGwKBFz3xJAGT6THPGWNU0yvlGZHPdTKULw29dz3TGZGTiwuQJxKwGWNUGx28GZGThWHTGWNUGx2UgAKpJAGT6XNhGwKBGz3UIxvUHz2igAGT6TKxKxKxKxGTdTLpaARULw29dz3TGZGUKxKxKxKwGWNU0yvmHz2igAGT6THlhXOlhXNTdTLpaASmgyu50xvTGZHPdTLpaASmgyu50xvUFzRJLzGT6TKiJxLoGWNU0yvmGx3UgBu5Iyu5LTHMkWNU0yvmKz250A2J6xqT6XrPdTLpaASmFxRpazKAGZGT3TOAEYjl3TGhGBRJhwKBFTHMGXqTdTLpaAR1FAKBazGT6THlEXNl1XNleYOlGWNU0yvm0xvF0THMGtKJIxu8EsKtkz2i1BRJgzLXGWNUMyupJTHMhDqhGw29fBSUgzQ9KBuidTHa7TK9jxRtjTHMiXjhGz24GZHPdTKJHz24GZGT8A3xLTSBaxSpMnqAjXNAEyRtax2F0nqAjXNA#nRAExKJdzN1jBuiJnqBfz256xvUgUjm0AKQfA2xgAK09U3pjwu5kzRQ0xqEiWNliVqA#nSmFBREExO0LrrwfYHA0YOl1XrPdXNmXYG42Yko0XOsiXqhiWHA0XrIkYro4TPhiWHA0XrP0ZrP2WOPfYkoiZrX1YOEErOPfYkoiXro5XrwdYG42YkA0XrIkYqmXXNh2WHw3YkoiZrX1TPhhWOlErOwfYHA0YOl1XrPdXNmyTP0iZNhhTPhiZNh2WHw3YkoiZrX1TPhiYG4jYrE4Yrl4WOwfYHA3YOP5XksErOP2WHT1ZOE1XOEdXq43YOP5Xks0ZNmXXrPfXkT1YrI0ZqhiWHA0XrIkYro4TPhiXq4kXHs1Zro5WOlErOP4WOlEuGmYXq43YOPiYOIiYGhiXq4kXHT1ZOl2TPhiWHA0XrP0ZrP2WOP2WHT1ZOl2YOsErOwfYHA0YOl1XrPdXrwfXHs4XOw0YqmXYG42Yko0XOsiXqhiZNmXXNhiZNmXXNhiXq4kXHT1ZOl2TPhiWHA0XrP0ZrP2WOPiWHXjXHs4XOwEuGmYXrEdXrPfXkTjYrEhYGmXXrEdXrEErOPiWHXjYrs5YOIdXrEErOPiWHXjYrs5YOIdXrwfXHs4XOw0YqmXXrwfXHs4ZOshZNhiYG4jYrEhYHo1TPhiYG4jYrE4Yrl4WOPiWHXjXHs4XOwErOP4WOPiWHXjXHs4XOwEuGAExKJdzO0LT2xKxKxKxGBAWk48vN9LnHiAW3Y2xk4GWNUaw29fXGT6THikBKAEB2JIBRE9UkThUjmMxuJLySo9UkThUk48xjmKyuidWvU1zRs9U25gzLaJAK8LTRxazRh9UjXhXOlhXOlLTSpjwu5kxK9jzr0LBSUFzLYdwvpJVOPdTOPaUk48ARQ0yNmInqBYXNh2WHw3YkoiZrX1TPhhWOofZrX1YOEkZOAErOofZrXkXHs1ZrsdYN45Xks0ZOX4YjmXYN45XkXjYrs5YqheZN44ZOP3ZOojxq0iYGmXYG42Yko0XOsiXqheZN44ZOP3ZOojxq0iYGmXYG42Yko0XOsiXqh2WHw3YkoiZrX1TPhhWOwfYHA3YOP5XksEuGmYXrPfXkT1YrI0Zqh2WHw3YkoiZrX1TPhiXq4kXHs1Zro5WOlErOPkWHl2YHA0YOPdXNmXXrXfXOw2Yko0Xqh0WHIkYro4XkE3TPhiZNh0WHIkYro4XkE3TPhiZNh2WHw3YkoiZrX1TPhiXq4kXHs1Zro5WOwfYHA3YOP5XksEuGmYYN45XkXjYrs5YqhiZNmXYN45XkXjYrs5YqhiXj4hYHo1XrwiTPheZN44ZOP3ZOojxq0iYGhiXj4hYHo1XrwiTPheZN44ZOP3ZOojxq0iYGhiXq4kXHT1ZOl2TPh2WHw3YOohYrPiWOPiWHXjXHs4XOwErOwfYHA0YOl1XrPdXrEErOofZrXkXHs1ZrsdXrEEuGmYXrPfXkT1YrI0ZqhiZNmXXrPfXkT1YrI0ZqhiXq4kXHT1ZOl2TPhiZNhiXq4kXHT1ZOl2TPhiZNhiXj4hYHo1XrwiTPhiXj4hYHw3YOoiWOPkWHl2YOsiYHPErOPkWHl2YHA0YOPdXrEErOPiWHXjYrs5YOIdXrEEuGAExKJdzO0LT2xKxKxKxGBAWk48vN9LnHiAW3Y2xk4GWNUFw3paz24GZGUKBuidA2YjxutfTGhGwuY0yu9fXGT6TK5gAK1FzSYHAKtJzGTdTLp5ARsGZGUkBKAGWNUhz3YaBRJgzGT6TKYgzLpjz2ikWvUax2F0TGhGzuQjx2JfTHMGXNlhTOlEYqTdTLYHwuiJTHMGXN45TGhGwKAGZHPdTKULARQIxRJfxjT6THwEYGl2TOwGWNUGx2YgzR9jTHMGXuQFxuxKTGhGwKBgTHMGXN4jTGhGwKBFTHMGXNTdTKULwu92xvTGZGTiTGhGBRJhTHMiWNU0yvmKz250A2J6xqT6XrPdTLpaARULwqT6THPGWNU0yvmFTHMGXN43TGhGBRJhARQIxRJfxjT6THAEYjl3TOAGWNU0yvmGx3UgBu5Iyu5LTHMkWNU0yvmGx2YgzR9jTHMGxKxKxKxKTGhGBRJhw29dz3TGZGThXOlhXOlGWNUFzKJewvpaz24GZGUhz3YaBRJgzGTdTKJHz25ewvULyu4GZGThTOlEXNliTGhGBRJhAR9azLpJAGT6XqhGBRJhAR9azLpJAKQdyuBfTHMGAKJLySoGDqhGw29fBSUgzQ9kBRQjBNT6CjUgAKpJAGT6XrodTLmgA2J0yu9fTHMGw2tfBRtjTGhGA2YFzRsGZGTiTGhGz24GZHldTKJHz24GZGT8A3xLTSBaxSpMnqAjXNAEyRtax2F0nqAjXNA#nRAExKJdzN1jBuiJnqBfz256xvUgUjm0AKQfA2xgAK09U3pjwu5kzRQ0xqE1WNlkVqA#nSmgzSJdyu5JTSmgyu50Ak0LXN41ZrX3YqlhWHo4YOX4TOlfYrwjYqliXj41Xrs2XjliXq40XkA1TOAEXN41ZrX3YqlhWHo4YOX4UjmKyuidnqAHxKxKxKxKU1hgnHiAW2A#nQhgA3xLnGTdTKJHz24kTHMGnSY2xjm3yup0yO0LXHlLTRFJyuBMBO0LXHlLnHiLTSpjwu5kxK9jzr0LBSUFzLYdwvpJVOTdTOXaUk48ARQ0yNmInqBYXrwdYj4iXkw2XrPkXGmXXrwdYj4iXOIiYHI0YqmXXrsfXHl4XrA4Yqh3WHPhZrP2Zro1TPhiYN4jYkshZrXdYj4iXOIiYHI0YqmOXrofXHA1XOIkWOXfXrI5XrT2XHsEXrPfXOwkXrI3WOlEYj4iXkA1YOw0YqhhTPXkWHTiXrE5YrIiWOlEXNhkWHP5ZrPjYHT1TOldYj4iXOIiYHI0YqmOXNhiXq4hXrIjXrT2TOXfXHPiZOI1ZrPdXrofXHP4XkX4Zql3WHPkYks0YHo1WOP0WHTiZOXkZOIErOAfXrX3Yro2YOsdXrTfYOoiXOo2YqmOYN4iZrXkXOE1YqhiXG40YOPhYOw1TOPfYkE0XkE2YHTdXrlfXOoiYkliZNliWHA4YOX4YHwjWOAfXrl5Xrw5YOsEokPfYkE0XkE2YHTdYN4iYkw2XkAhYql0WHP5XkXhZOs1WOPfYkA3XHIjXkwEYj4iXkA1YOw0YqhiWHA3YkT5XHX2TPXiXN4hZOP3ZOo0WOPfYkA3XHIjXkwEXrTfYOIhYkl2Xjh0WHP3YHwkYkl1TOPjWHo5XOAhYHXdYj4iXOIiYHI0YqmXXrlfYHo0YrP2Yjh3WHPhZrP2Zro1TPhiXj4kZOT4ZrI2WOPiWHs1XHohXOoErOP2WOAfXrX2YHPiXkTEuGAExKJdzO0LT2xKxKxKxGA#nQhgARQ0yO48vN9LnHiAW3Y2xk4GWNUFw3paz24GZGUhzRQ5TGhGBSJhxqT6TLY2xjTdTKULTHMiWNUGx2YgzR9jTHMGXuQFxuxKTGhGwKBgTHMiWNUGx3mFxRpazKAGZGTiYNliYNliYNliYNTdTKJHz25ewvULyu4GZGTkTOlEXNl1TGhGwKBFTHMGXN45TGhGwKBFz3xJAGT6THPGWNUkw2Qdxu92xvTGZGTiWHTGWNUMyupJTHMiWNUMyupJz25hzRQ5THMiWNUMyupJz255z3t0BuUJTHMiWNUGx2UgAKpJAGT6XNhGwqT6THPGWNUaw29fA3UJARiFCqT6XNhGzuQjx2JfTHMGXNlhTOlEXNU9WNUHz250AK9dv2iaBKsGZLdGz3UIxvTGZHodTK9fTHMhWNU0xvF0THMGnSYhwu4EA3p5zRs9U2YgzR9jZGYKXOlLnJi1XHtHxHiAW3Yhwu4#TOikARQfTSY0CuiJnqBKz250WvYaCKs6XrmhCNA#rPJupriAW3Yhwu4#TGhGzRt0BRtjA3mFw2JfxjT6THTGWNUFw3paz24GZGUdyvxJTGhGBSJhxqT6TLpJCSoGWNUMwu5ITHMiWNUHzRJHyjT6XqhGxK9fBSYaCKsGZHPjWNUewvULyu4GZGThTOlEXNliXNTdTKPGZGTiTGhGyRJIxqT6XqhGyRJIxu9fBK9ITHMiWNUKz250THMGovUawuhGDqhGw29fBSUgzQ9kBR9hTHa7TK9jxRtjTHMiYqhGz24GZHldTKJHz24GZGT8A3xLTSBaxSpMnqAjXNAEyRtax2F0nqAjXNA#nRAEBSUFzLYKz3UenqB0AKQfA2iFBRsMYNhEYNILnHijxuY0TSE9UklLTSI9UklLTSBaxSpMnqAiXGAEyRtax2F0nqAiXGAExKJdzO0LT2xKxKxKxGBAWk48vN9LnHiAW3Y2xk4GWNUFw3paz24GZGUkBR9hTGhGBSJhxqT6TLY2xjTdTKULTHMhDqhGw29fBSUgzQ9hAKt2THa7TK9jxRtjTHMiYGhGz24GZHldTKJHz24GZGT8A3xLTSBaxSpMnqAjXNAEyRtax2F0nqAjXNA#nRAEBSUFzLYKz3UenqB0AKQfA2iFBRsMYq41WNl1VqA#nSmFBREExO0LrrEfZrI5ZrIdXrlfYOX3YOIErOEfZrI5ZrIdXrlfYOX3YqmXXGh1WHTiZOA1TPh4WHI5ZrI5WOlErOEfZrI5ZrIdXrlfYOX3YOIEuGmYXNhhTPhjWOlErOTdXrlfXHo5ZOXErOldXrlfXHo5ZOXErOldXNmyUjmKyuidnqAHxKxKxKxKU1hgnHiAW2A#nQhgA3xLnGTdTKQHBRJgzGT6TLmjxvwGWNU0CvmJTHMGA3xLTGhGA2YFzRsGZHPfXGhGAR9kyvpaz24GZGUHz250AK9dAj1Gz3p0z20GWNUewvULyu4GZGThTOlEXNliYqU9WNUHz250AK9dv25JCSoGZLdGz3UIxvTGZHP3WNUgzGT6XNhGyuYgzGT6THikBKAEB2JIBRE9UkThUjmMxuJLySo9UkThUk48xjm0AKQfA2xgAK09U3pjwu5kzRQ0xqE1WNl1VqA#nSmFBREExO0LrrlfYOw5YOEdXuseXOsErOlfYOw5YOEdXuseXOsErOlfYOw5YOEdXNmXYj40YHI0Yjh1WHTiZOA1TPhhWHo2Zro4WOPhWHokYksErOlfYOw5YOEdXuseXOsEuGmYYj41Xkl1XGhhTPh5WHskXOsjWOlErOIfYrXhYrTdXrlfYHT0ZOTErOAfYrXhYrTdXrlfYHT0ZOTErOAfYrXhYrTdXNmyUjmKyuidnqAHxKxKxKxKU1hgnHiAW2A#nQhgA3xLnGTdTKQHBRJgzGT6TK5JCSoGWNU0CvmJTHMGA3xLTGhGA2YFzRsGZHPfXGhGAR9kyvpaz24GZGUHz250AK9dAj1Gz3p0z20GWNUewvULyu4GZGThTOlEXNliYqU9WNUHz250AK9dv3YMwvUJTHa7TK9jxRtjTHMiZNhGz24GZHldTKJHz24GZGT8A3xLTSBaxSpMnqAjXNAEyRtax2F0nqAjXNA#nRAEBSUFzLYKz3UenqB0AKQfA2iFBRsMXqhEXjILnHihwvpMTRo9U00iXN41XHT3YrlkWOPjWHX0ZOoiXHEErOPhWHsjXHA1XOXdZq4kXOXkZrohXqmOYq41Xkw1ZOw0ZNh5WHPiZrshZOI4TOTfYrX0ZOl5ZOIdXrPfXkE5YHI4XqlhWOPkWHIiXHskXOsEokldYj45Xrs5XHsiZql1WHTjYHI2ZOA3WOXfXrIjYkP1XkwEXrlfYrTjYkshXjhkWHPkZrE2XOPErOPhWHsjXHA1XOXdXN4iXrA2YOAhYrIErOP4WHlhXks4XrEdYG4jXkXhXHI5XjmXXrlfYrTjYkshXjhiXG4kYOE0XrT4TQMLTRxazRh9UjYKxKxKxKwLvN8#nQhgxk48vN9kBKA#TGhGwuY0yu9fTHMGA2FFAKsGWNU0CvmJTHMGA3xLTGhGAR9kyvpaz24GZGU0z3leAKJLySoGWNUewvULyu4GZGTiYqliYqlhTOlGWNUGxjT6XqhGwKBgTHMiWNUkw2QdxqT6XqhGwKBhwupIyu5LTHMGYGl2TOwEYGTdTKULwqT6XN4kWNUGx2QgBKtjTHMhWHwdTKQfyu1FBRJgzGT6TLmgA2J0yu9fTGhGxuQkxqT6TKtdwvY0yuXGDqhGzRQfxjT6TKtfTGhGA2t0BRJfx3XGZLdGA2t0BRJfx3X0THMiWNUkxvp0yu5LAkpFw3paz24GZGUkARtJxNTdTLUgBu5Iyu5LTHM1WNUGx2YgzR9jTHMGxKxKxKxKTGhGw29dz3TGZGThXOlhXOlGWNUGx2PGZGTiTGhGBKQdButHz2igAGT6THlhXOlhXNTdTLmFxRpazKAGZGT1TOPhTOsEXrlGWNUewvULyu4GZGThTOPhTOlEXNTdTKULw29dz3UgBKtjTHMGxHmKXRwhTGhGA2t0BRJfx3X1THMiWNUkxvp0yu5LAktFw3paz24GZGUIz3BfzR9FxNTdTKFJwupKz250A2J6xqT6XrodTKUgAKpJAKYgzR9jxuoGZHPdTKUgAKpJAKYgzR9jTHMGwKxGxKUKTGhGA2FgB292xvUHz250AK9dTHMhWNUFw3paBKtaw29fA2J6xqT6XjhGA2Yjz2idwvUjz3BkTHMiDqhGzR9LTHMhWNUjz3tfxRJfxjT6XNhGw29fBSUgzQ9tCrmQrGT6CjUgzGT6XqhGz3UIxvTGZHPjWNUFw3paz24GZGUHBvY0z20GWNUaw29fTHMGnSY2xjm3yup0yO0LXrELTRFJyuBMBO0LXrELnHihwvpMTRo9U00iXj4jZrXEXj4jZrYXYj4hXHTEZq41YHpdXq40XroEXq40XroEYG4jYkPeYG4jYkQXXrAEY1wiyN02CGAExKJdzO0LT2xKxKxKxGA#nQhgARQ0yO48ARQ0yNmInqBYXrXEXrtTX1w1yOtuX0EjwrPEXqlhTOlEXN0iTOQ2XrUFXqliTOlEXNlhTOPEXuEiXKPiTOPEXNlhTOlEXq0iBG02yN0jBHt6UjmKyuidnqAHxKxKxKxKUk48vN9hwvpMnHiAW3Y2xk4GWNU0CvmJTHMGA3xLTGhGAR9kyvpaz24GZGUHz250AK9dAjTdTK1FAKBazGT6THlEXNlhTOsGWNUdyu5cTHMiWNUdyu5cBvUdTHMGwvmaZLmaASBJwKeaBNTdTKFaxRsGZHldTKULTHMiWNUGx2YgzR9jTHMGXuQFxuxKTGhGwKBgTHMGXN4jTGhGwKBFTHMGXNTdTKULwu92xvTGZGTiTGhGwKBhwupIyu5LTHMGYGl2TOwEYGTdTLpaANT6XqhGBRJhBRt4BNT6TJmasNTdTLpaARULAK91zKpazKAGZHXdTLpaARxgzLpkyvaJTHMiXqhGBRJhwKBFTHMGXqTdTLpaARPGZGThWHAGWNU0yvmGx2YgzR9jTHMGxKxKxKxKTGhGBRJhw29dz3TGZGThXOlhXOlGWNU0yvmhwupIyu5LTHMGYjl3TOAEYjTdTKQfyu1FBRJgzGT6TLmgA2J0yu9fTGhGyuYgzK1FAKBazGT6THlEXNlhTOPGWNU0yvmhz2JfBRtjTHMiWNU0yvmhz2JfBRtjwuiax24GZGUjyuBMBNU9WNUhAKtdz2QITHMiWNUKyuiJTHMGySp0ASX6vN9AW2YIzG5bB3mdwvJJAG5Hz21AW21FzKJKxvY0A1hgtI5tX0JoyvTfzrY1ZNTdTLmdwvJdyvY0THa7TKFaxRtHz250AK9dTHMiWNUGx2YgzR9jTHMGxKxKxKxKTGhGw29dz3TGZGThXOlhXOlGWNU2wui1xuYgzR9jTHMGXOlhXOlhTGhGwKBFTHMGXqTdTKFaA3pgALJGx2YgzR9jTHMGxHtKYuw1TGhGwKBHz2igAK92xvTGZGUKYuw1xHsGWNUGz3UIxvUHz2igAKtITHMiWNUGz3UIxvUHz2igAGT6TKpJxRtIxqTdTLUgBu5Iyu5LTHMkWNUewvULyu4GZGThTOlEXNliXNU9WNUhzRQ5xvUMxuJLySoGZHX2XNhGzKQ0yvxJyRikyu9kTHMhWNUfwvpaBKtMzSYazLYFxKQjyqT6XNhGARakxLUFzusGZHPdTKQ1BR9hzRQ5THMhWNUhz3Y0xvUMyupJTHMiWNUJzvm0CvUJzu92xqT6XqhGAKthzRQHxvpFx3XGZHldTKQdxvU0AjT6XqhGwuiJALpkxK9fBSYaCKsGZHP2WNUFzRtjBSYGx2YgzR9jTHMGwkAiwkQHTGhGA2FFAKsGZHPdTLYMwvUJXjT6TLUJxRpaBNTdTLYMwvUJYNT6TLp1zuUdAGTdTLYMwvUJXqT6TLp3yvp0xvTGWNUkyRQjxrTGZGU0xuiJx3UFzqTdTLmbA2xjwu1JBR8GZHEdTLpMBu1GAjT6XqhGBKQkBNT6XNhGASUJAK9dzSXGZHPdTLxazutgTHMiWNUJxKxJw3pkTHMhWNUJxKxJw3pGzStjTHMhWNUJxKxJw3pLAKQ5THMhWNUJxKxJw3pKzRJhTHMhWNUIwvYMTHMhWNU1zKJgzGT6XNhGxvxJzLpkBSUFw2eJAGT6XqhGxvxJzLpdyvY0xu5JALXGZHPdTKFdA3Y1wLpjwuYcAjT6XqhGARiFCutjB2JIBREGZG0iWNUjxuigwuoGZHldTKBFTHMiWNULwroGZHPdTLpazutkBR9jxqT6XqhGA3tGBRJ0zRsGZGTGWNUkBuUDA2J6xqT6XHldTLY1wJ9Gz3p0z20GZHwdTLY1wJ9kyvaJv2x1zRikw3UJxu4GZHXhWNU0yStewK5FyuikTHMGTGhGBRF1zuUDwK90BR9eTHM0YqhGzKQexu9KCu91BStGxvQ1wuiaBSIGZGThTGhGxR0GZHPdTLmgA3pJAK9fARQ1A2sGZHldTLmgA3pJAJ9kw2QdxqT6TKxazRhGWNUhA3pjw25KxjT6XNhGw2FFzKBJyRtax2F0THMhWNUMz3pcxvIGZLdGA2tJy3YaxRtkTHMiDv0=',
        u2: '',
        u3: '',
        u4: '',
        u5: '',
        u6: '',
        u7: '',
        u8: '',
        u9: '',
        y: 'xx???x=xx??x?=',
        p: '{partners}',
        isflash: -1,
        brand: "nsplayer by \n playerjs",
        brandurl: "//playerjs.com",
        motions: [],
        dt: true,
        pr: true,
        ga: false,
        ab: false,
        gatracked: [],
        pjsga: false,
        pltxt: '//.txt//',
        files_quality: [],
        files_audiotrack: [],
        files_quality_ag: [],
        files_subtitle: [],
        files_channel: [],
        plhistory: [],
        rightclick: 0,
        vastclick: false,
        focus: false,
        start: false,
        start2: false,
        metadata: true,
        ni: '<noindex>',
        ni2: '</noindex>',
        small: window.screen.width < 1000 && window.screen.height < 1000,
        moving: [],
        moved: [],
        menuproc:
        {
            'scale': 1,
            'contrast': 1,
            'brightness': 1,
            'saturate': 1,
            'sepia': 0
        },
        fltrs: [],
        piped: 0,
        or0: 0,
        live: false,
        subtitle_on: false,
        starttimeout: false,
        thumbs_on: false,
        thumbs_img: [],
        noads: false,
        clicks: 0,
        airplayed: false,
        timerInterval: undefined,
        toolbarInterval: undefined,
        toolbarhidden: false,
        dnabAyYn: function (x) {
            var a;
            return a
        },
        reloaderTimer: 0,
        timerTime: 200,
        tagvideo: false,
        controlover: false,
        doctype: document.doctype,
        d: location.hostname,
        domain: location.hostname,
        href: location.href,
        https: location.href.indexOf("https") == 0,
        logos:
            {},
        gaurl: 'google-analytics.com/analytics.js',
        fd: ["dnabAyYn", "KKtGSsdk"],
        files_speed: [],
        files_scale: [],
        files_sleep: [],
        custom_speed: 1,
        gifed: [],
        KKtGSsdk: function (x) {
            var a;
            return a
        },
        time: 0,
        timeld: 0,
        casting: false,
        dk: -1,
        current_speed: 3,
        current_sleep: 0,
        vastgo: 0,
        reloadTimer: 0,
        mediascale:
        {
            x: 1,
            y: 1,
            x0: 1,
            y0: 1
        },
        sub_options: ["sub_sizeproc", "sub_color", "sub_color2", "sub_bgcolor", "sub_bga", "sub_shadow", "sub_weight", "sub_bottom", "sub_shift", "sub_reset"],
        clr_options: ["clr_contrast", "clr_brightness", "clr_saturate", "clr_sepia"],
        vast_impressions: 0,
        vast_impressions_all: 0,
        vast_starts: 0,
        vpaid_starts: 0,
        vast_longtimeout: 0,
        midrollimprsd: [],
        vsts: ['preroll', 'pauseroll', 'postroll', 'midroll'],
        vast_remove: [],
        adsfirst: true,
        overlays: [],
        stuck: 0,
        ws: "w" + "s",
        acted: false,
        quartile: [false, false, false]
    };
    var default_style = {
        but:
        {
            w: 20,
            h: 20,
            action: "-",
            action_back: "-",
            a: 1,
            aover: -1,
            color: "ffffff",
            type: "",
            scale: 1,
            scaleover: -1,
            rotation: 0,
            tip: 1,
            icon: "",
            text: "",
            font: "Verdana",
            fontsize: 12,
            letterspacing: 0,
            position: "controls",
            margin: "0 3 0 3",
            marginproc: "0 0 0 0",
            click: 1,
            clickmargin: "0 0 0 0",
            normalonclick: 0,
            hand: 1,
            bg: 0,
            bgo: 0,
            bgstretch: 0,
            bga: 1,
            bgaover: -1,
            bgcolor: "000000",
            bgcolorover: -1,
            bgpadding: "0 0 0 0",
            bgborder: -1,
            bgbordercolor: "ffffff",
            iconscolor: -1,
            iconscolorover: -1,
            animation: "none",
            target: "_blank",
            tip: 0,
            tipbgcolor: "000000",
            tipbga: 0.7,
            tipbgrounding: 0,
            tipcolor: "ffffff",
            tippadding: "3 5 3 5",
            tippmargin: "0 0 0 0",
            tipa: 1,
            tipfont: "sans-serif",
            tipfontsize: 11,
            tipletterspacing: 0,
            tiptext: "",
            linetipmarginbottom: 5,
            toptip: 0,
            hidden: 0,
            stripsw: 2,
            stripsspace: 2,
            linespeed1: 0.2,
            linespeed2: 0,
            linespeed3: 0.1,
            pointed: 0,
            pointcolor: "ffce00",
            pointa: 1,
            pointw: 5,
            gradientcolorbg: "000000",
            gradientcolorload: "ffffff",
            gradientcolor: "ffffff",
            ontop: 1,
            clickscalex: 1,
            clickscaley: 1,
            rounding: 0,
            handle: 0,
            handle_width: 20,
            handleicon: "<svg width='20' height='20'><g><ellipse ry='5' rx='5' cy='10' cx='10' fill='#fff'/></g></svg>",
            handlea: 1,
            handleaover: -1,
            handlehide: 0,
            handlescale: 1,
            handlecolor: -1,
            slidespeed: 0.1,
            link: 0,
            linkurl: "",
            linkpause: 0,
            linktarget: "_blank",
            src: "",
            hideonwidthlimit: 700,
            hideoverwidthlimit: 700,
            displayvolume: 0,
            value: 0,
            valuecolor: "ffffff",
            valuebg: 0,
            valuebgcolor: "000000",
            valuesize: 9,
            valuemargin: "0 0 10 0",
            valuepadding: "0 0 0 0",
            valuerounding: 0
        }
    };

    function prtObj() {
        return true;
        o.prted = true
    }

    function fd0(s) {
        if (s.indexOf('.') == -1) {
            s = s.substr(1);
            s2 = '';
            for (i = 0; i < s.length; i += 3) {
                s2 += '%u0' + s.slice(i, i + 3)
            }
            s = unescape(s2)
        }
        return s
    };

    function optStr() {
        if (o.u != '') {
            v = UpdateObject(v, JSON.parse(decode(o.u)))
        }
        if (options.indexOf("#" + v.enc2) == 0) {
            try {
                options = JSON.parse(o[o.fd[0]](options))
            }
            catch (e) { }
        }
        else {
            if (options.indexOf("#" + v.enc3) == 0) {
                try {
                    options = JSON.parse(o[o.fd[1]](options))
                }
                catch (e) { }
            }
        }
    }

    function SettingsTimers(x, y) { }

    function Touch(y, event) { }
    var Alert = function () {
        var xbg = createElement("div");
        o.frame.appendChild(xbg);
        css(xbg,
            {
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'width': '100%',
                'height': 30,
                'background-color': v.alertsbgcolor,
                'opacity': v.alertsbga,
                'display': 'none'
            });
        var x = createElement("div");
        o.frame.appendChild(x);
        css(x,
            {
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'width': '100%',
                'color': v.alertscolor,
                'font-size': v.alertsfontsize,
                'padding': (v.alertspaddingv + 'px ' + v.alertspaddingh + 'px'),
                'display': 'none'
            });
        this.txt = function (text, n) {
            x.innerHTML = text;
            show2(x);
            css(xbg,
                {
                    'height': x.offsetHeight,
                    'display': 'block'
                });
            xbg.style.zIndex = "1005";
            for (var i = 0; i < x.getElementsByTagName('a').length; i++) {
                x.getElementsByTagName('a')[i].style.color = '#fff'
            }
            if (n) {
                setTimeout(this.close, 1000 * n)
            }
            x.style.zIndex = "1006"
        };
        this.close = function () {
            hide2(x);
            hide2(xbg)
        }
    };
    eval(function (w, i, s, e) {
        var lIll = 0;
        var ll1I = 0;
        var Il1l = 0;
        var ll1l = [];
        var l1lI = [];
        while (true) {
            if (lIll < 5) l1lI.push(w.charAt(lIll));
            else if (lIll < w.length) ll1l.push(w.charAt(lIll));
            lIll++;
            if (ll1I < 5) l1lI.push(i.charAt(ll1I));
            else if (ll1I < i.length) ll1l.push(i.charAt(ll1I));
            ll1I++;
            if (Il1l < 5) l1lI.push(s.charAt(Il1l));
            else if (Il1l < s.length) ll1l.push(s.charAt(Il1l));
            Il1l++;
            if (w.length + i.length + s.length + e.length == ll1l.length + l1lI.length + e.length) break
        }
        var lI1l = ll1l.join('');
        var I1lI = l1lI.join('');
        ll1I = 0;
        var l1ll = [];
        for (lIll = 0; lIll < ll1l.length; lIll += 2) {
            var ll11 = -1;
            if (I1lI.charCodeAt(ll1I) % 2) ll11 = 1;
            l1ll.push(String.fromCharCode(parseInt(lI1l.substr(lIll, 2), 36) - ll11));
            ll1I++;
            if (ll1I >= l1lI.length) ll1I = 0
        }
        return l1ll.join('')
    }('5819c1s212829333718243q013z1o25312q193x3c1d3q0z112k3q01302m3v3u37242v303p11303a231s27332114212x23211a3u291z1138251s25352z1632361y1z12161z153v2b2q1721241u3u2t212n113w242e133x2b2o193z2611101o233e1i3c2b36182x3s121z1o380w121z3b233v213938182v3u10111o3c182t3b233v2b213x3b213x29233x1z113s2911302u271u3u271r2o1i27302q3c1z23121b3v111130243316312o1b3v111k1t352z1d323n2e1z3w2o2z1q1e27311o1o23111s253t173126142e1c3e3b361c3w2b341v3w2s3q3u3722393r3730291716311411101o253c1q1z113w242e1b373a3v111x23141g1f2r181f1i1g1j1f1j3c1a1c1t3e1a1g1b3f143e1r3e1k1e1u1g121f172c1v2c102e1s2e1z2e1t2d1w2c1s1e132e1t3g1y2c1w2c152e1r3g1u2e1u1c1m2c1u1e1x2e1u1e1x2c1u2d1w2e1r2e1t2e1s2d192c1t2e1s2e1s2e1e2c1w2e1t2e1s2f1r2e1s3e1z2c1s3g122e1u2g1y2c1v2e1z2e1q1e1s2e1s2e1x2c1t2e1t2e1t3e1v2c1u3d1w2e1s2e1q2e1s3e1j2c1s2f172e1s3f102c1u2d182e1q3f1h2e1s3d192c1s3g1y2e1s3f172c1w3d1u2e1q3f192e1s3d1v2c1s2f152e1u3f1v2c1u3d192e1r3e1c2e1s3d1a2c1u3f1w2e1s3f192c1w3d182e1q1f192e1u3d1d2c1s3f152e1s3g1r2c1u2d192e1q3f1c2e1s3d1b2c1s3g1u2e1s1f172c1u3e192e1q3f172e1s3d1d2c1s2e1s2e1s1e1f1c1d1e1e3g1a1e1i1f1m3d1t3b1f3f1d3f1i2f123d1q2d1f2f1k1e1b3e1f3d1e3e1m1g1d1g1q3g1f3c1e1d1f3e1b1f161g1s1d1d1e1c3f1d3g1g3f1g2c1e1c1d1e1d1g1p3e1f1c1a3d131g1f2e1b2f1k3d1f3c1g1g1h3g1j1g1j3e163e1e3f1k1g1p1g1i3e1d2c1f1g1f3d1d2f1c1c1u2e1f1f1d3f121e1f3d1e3c1m3f1j3e1d3g181d1f3c121e191f191f1f1d1f1d1j1g1d2e1o2e1f1c1e1c1d3f1d1e181d1f1e1j1c172e1r1e1j2e1u1e1m2c1s3e1r2e1t1g1v2c1v1c142e1s2f162e1t2e122c1s3e1q2e1t1e1w2c1w1c1s2e1r2e1h2e1s1e1v2c1s3g1s2e1t1e102c1v3c103e1q3f143e1s1c191e2h143e1h2d183g1p3e183e1u3e1c1e1i3e1h1e1j1e1h2c1a1b1g3f122e1s2g1t2c1w2d1r2e1q3g1v2e1s2e162c1u2g1w2e1r3g1z2c1u1c1s2e1q2g1t2e1t2c1x2c1t2e1t2e1q3f1w2c1w3c1q2e1q3g1f2e1s2c112c1s2e1c2e1q2e1i2c1u3c1z2e1s1e1t2e1u1d1t2c1t1e1e2e1q1f1x2c1v2c1m2e1s1g1t2e1t2c172c1u2e1w2e1q3e1e2c1w2c1r2e1q1f142e1u3c1i2c1s3f172e1s3f162c1u3d172e1q3f1c2e1s1d1b2c1s3f1t2e1q3f192c1u3c182e1q3f172e1u3e1d2c1s3f162e1q3f182c1u3d192e1s3f1t2e1s3d1a2c1s3e1a2e1q3f192c1v3e1d2e1q3f172e1s3d1m2c1s1f152e1s3g1c2c1u3d192e1s3e1o2e1s1d192c1t3e1g2e1q1f172c1u3d1e2e1q3f152e1s2c112c1s1e1i1e161f1k1e1l1e1f3e1g3f1k3f1r3b1e3e1f1f193g1f3f133d1q1c1i1f1f3f1e1e181c1e1d161g1d1g1h3e1d1c1i3d141g1f3g171f1f3d1u1e1m3e1d1e1b3f1s2d1r1c1b3e1d3g1a1e1m1e1e1e1j3g1b3e1q1f1m1e1r1e1m1g1k1g1d1f1k3d1a1c181e122f1b3f1d1c1r3c1f1f1e1g122g1f2c1i3c1d3g1d3f1d3e1i3c141c161g1i3f1f2e1s1e1s3d1f3g163g1i1f151d1m1c1f1e1b3f1q3e1f3d1u2e1l3e1b1e1u2f1z2c1w2e1h2e1s2e1r2e1s2d1l2c1t1e1r2e1q1f1m2c1v3d102e1r2g1d2e1u2e1t2c1s2g1r2e1s1f1s2c1w2d1t2e1s2e1w2e1s1e122c1s2f1c2e1q1e182c1z3c102f14141q1e1r1e1e1c1m2g121g1c3g1j1d1g3e161f1g1g1h1g1v2c1k1e1y2e1p1g1e2e1w1c1w2c1v2e1i2e1s2e182c1u2e1r2e1q1f172e1w2e1r2c1w1g1v2e1q2g102c1u3d122e1q2e1u2e1u1d1m2c1t2g1t2e1r3g1i2c1u2c1w2e1q1f1p2e1v3e1v2c1u2e1u2e1q3g1g2c1w1c112e1q3e1p2e1w2c162c1u2g1k2e1s1e1m2c1w3c1j2e1s2f1x2e1u3c112c1v1f1s2e1q1f192c1v3c182e1q1f162e1w3d1a2c1u3f152e1q3e1d2c1u3d192e1s3g1r2e1u1d1b2c1u3f1c2e1q3f192c1u3e182e1q1f172e1u3d1i2c1u3f152e1s3f162c1u2d1b2e1q3f1x2e1u1d1b2c1u3f1u2e1q3f1b2c1v3d1d2e1q3f152e1u3c1d2c1u3f162e1r3f1b2c1u1d192e1r3e172e1u3d192c1u3f172e1q2e1w2c1u2c1y1e1d1e103e181c1m3e1d3e121e101f162e1u2c1d3e1o1e163e1e1c1i3e161f1f3g171f1e3d1u1e1r3e1b1e1d3f1u2e1r1c1d3e1b3g1a1e1r1e1e1e1e3g1d1e1q1f1e3c1f1d181g1q1f191f1l3d1e3e1i3f1e2e1d1e1s3d1e3d1l3f163f122e1c1c1e3d1e3f163g1d1f1r3c141d163e1c1e1b3f1u3d1k1d1e3f1k1g1b1e161c1u3d1r3e161e1r1e1e1e1i1e1k3f151g1c1e1q1c1e1c1e2e1q1f1d3f1r1e1e3c1m1f1k3e101e1v3c102c1u2e1u2e1r1g1u2c1w1c122e1q3g1b1e1x1c1l2c1w2g1s2e1s2e1u2c1u2c1h2e1q2e1j1e1v2e102c1u2g1f2e1r1e192c1w1e1u2e1q1e1x1e162c1b3d182f171e122m2r1h1e1q2s1q1k1s1c241o', '65693o3o1v3s241c271u3b3x211b3q01121o25212q1b3x2c1k1b3x111i1c21193u3w11211611133x3b2q1920261u3u2v202p113w262c153x3b2q17222611211m252e1i2e29381y2x3u1z121o280y1z122b233x2z2b381y2x3s11121o2e162v212p11203a251s27332e16212x232e182u291z113a251s25352e1621261y1c2u291w2u29182u271u2u291q2c113w28111z3w28113w243u2o3q011z212b3y141m272e2q111x231411121m272e2q2o35222q11212z2b233x2226163q011e1c2v2e2b2q122u11121f2z1q11213a23373w273w253t1538231z113a39112z161j111e1m2e182v212p2e2b233x2z2q1i29332c2b3y141o122v1e1e2f1c1e1j1e122d1k1e1e2g1k1e1c3g181e151g1m1e1i1f1h2e1s1d1r2e1v2g1r2e1u2e1w2c1s2g1g2e1s1e112e1s3c1r2e1w2e122e1u2g1m2c1u1e1m2e1s3e1j2e1u2d1z2e1u3e1x2e1v1f1u2c1s1f1w2e1q2e1w2e1t3e1v2e1w2e1t2e1w2g192c1u1f102e1r2g1s2e1s2d1y2e1v2g1j2e1v1e1u2c1t2e1u2e1q2e102e1s3c192e1w2g1y2e1u3e172c1t3g1v2e1q2f192e1s3d1x2e1u3f152e1u3f1e2c1s2f1b2e1q3f1c2e1s1d192e1v3g142e1u3f182c1s3f1x2e1q1f192e1t3d1c2e1u3f162e1u3f142c1s3f1b2e1s3f1c2e1s3d182e1u3f1f2e1u3f192c1s3f1f2e1q3f192e1s3d1t2e1u2f172e1u3f162c1s3f192e1r3e1k2e1s2d172e1u3f172e1u3f172c1u2e1w2e1q2e1g1e1f1c1m1g1e1e1i2f1f3e1b2c141e141f123f1u3f1c1e1u1f1y2f1h2f1a3g121b1f3g1g3f1k1e1d3e1f3d1j3f151f1j1e1k1g1h1d1g2e1a1e1d1f181g1s1d1j3e1e1e1e3g161f1h3e193f1e3f1q1g1r3e1f1c1f3f1e3f1d3f1e3f1f3d1f1f1d2f1c3f1g3f1e2e1s3e1h1e121f1u1g1f3d1r3d1e3f1d3e1e3e181c1f2g1d2e1a1f1d3f1g2c1f2e1e1g1i1e1f3e1g1d1g2e1l1f1r2e1u1g1j3c1d3f1a1e1b3g1k3g1f1c1g2e1v2g1h2e1w2e1i2c1s1g172e1r2g1m2e1u1e1f2e1w2g1r2e1w2e1s2c1t2g122e1r2g1l2e1s2e1d1e1w2g1q2e1v1g1j2c1u2f172e1r1e1m2e1s2e1c1f172e143e123e1f321f1r3g193d1q1e191e113g143e141e1i3f171g1c2g1m1e1x3e1i3g152e1r3g1x2e1u2c1v2e1u2g172e1w1f1y2c1t2g1q2e1q2f102e1t2e1l2e1t1e1s2e1v2e1s2c1s2e1y2e1q3e1b2e1u2e102e1s3e152e1v3g1z2c1s2e1w2e1s1e1q2e1t2c152e1s1e1j2e1u3g1f2c1u1e1e2e1q3g1i2e1u1d1x2e1t2g1h2e1w2g1t2c1u2g1z2e1q2e1e2e1u1c1x2e1u2e1f2e1u1f182c1u3f1a2e1q3f1b2e1s3d1a2e1s3f172e1w3f1l2c1s3f192e1r3e1f2e1s1d182e1u3f132e1u3f172c1t3f1d2e1q3f1a2e1u3e102e1s3f162e1u3f192c1s3f182e1q3e192e1s3d172e1s3e1b2e1u3f172c1s3g1l2e1q3f1b2e1u3e1f2e1s3f152e1u3f1j2c1s2f182e1s3f1d2e1s3d172e1s3f192e1u2e1z2c1s2e1k1e1f3e1e1f1e1c1h3d1f3f1d3e1d2e143c103d1d3g161f1b1g1f1e1g3f1g1e1d3f1e2g1k3c1l1e1i1f1f1f1e3e1h3c1b1f1k1f163f1e3e1a1e1g3f141f1f3e141g1w2d1j1f181e101d1f3g1e3e1m1e1b3e1d3f1l3g1e3d1e3g1e3f1c3e1e3f1f1e1k3g1k3f1u1f162e1e1c1b3e1d1g1f3f1r3e1y3e1f2g132e183f162f1f3c1g3e1i3e1d1e1u2g1m1c1c1g1b3f123g1f1g1i1e1k1g1h1e101f163e1a1e1r1g1b1e1c1e1u2e1u1c1v2e1t3e1o2e1u1e1y2c1u1e1l2e1s2g1h2e1t1e152e1t2e1p2e1u1e1x2c1s1g1w2e1s1g1m2e1u2c1w2e1u1g1o2e1u3f1f2c1t2g1v2e1q1e1m3f1x2d172f1v2f1f141h1f1i1e1g3g1u1g1j2f1d1e1l1d191f1f1f1d1e1l1e1w1e1l3e1s3f1e2e1u1e1k2c1s3e1z2e1u2e1x2e1w1d1r2e1t1e1g2e1u1f1z2c1t2e1m2e1u1g1x2e1v2c152e1u2e1y2e1u3e1g2c1u2e1r2e1s1f182e1u2c1u2e1s2g1k2e1v2e112c1u2g1y2e1t2e102e1u3d1k2e1s2e182e1u3e1t2c1u2e1q2e1t1e1i2e1w2c142e1u2e1z2e1u2e1d2c1u2g1e2e1t3g1l2e1u2d182e1s3e1c2e1u3f1b2c1s3g1e2e1s3f1a2e1v3c192e1s3f172e1u3e1j2c1s2f182e1u3e1f2e1u1d192e1s3e1h2e1u3f1a2c1u3f192e1s3f1b2e1u3c1z2e1s2f192e1u3f1d2c1s1f192e1s3g1e2e1u3d172e1t3g1b2e1u2f1a2c1s3f182e1s2f192e1v3c1j2e1s2f182e1u3f1b2c1s3f172e1s3f1v2e1u2c1u2e1f1e1f3d163g1h2d182g1f2g1c1e1k3f1r3d1y2g1f2e1c1g1e3f1j3c1b2f1k1f183f1f3e1c1d1g3g141f1h1g141f1y2d1j3f181e121d1e1f1g3d1m1e1b3e1d3g1l3f153d1l1e1i1f1h1f1i2e1a1c1f2f161g1s1f1l3e1a1c181e181e181e1u3g1l3c1a1e1a1g123d1e3f1e1c1i2f1f3f1f1e141f163e1d3e1f1f1e3g1l1g1e2c192f141f1c1e1e3e1e1d1i3f1a1g1g1f1e3g1m3d1h2e1s3f1j3g172f1g3d142f1e2f1c1e1h3f102c1u1g1y2e1t2g1e2e1w3c1h2e1u2e102e1m3f1j2c1s3f1u2e1s1e1x2e1v1c1q2e1u1e1t2e1h3e1w2c1t3g1v2e1t2e1l2e1w1c1k2e1t3e1d2e1h2e1u2c182f1y3e1h191q2u1j1d2j2t1m2m1f2k2s16', 'dff8d2933313w331w371e25302o193v3c1b3o001z1m252z3o2m253c2o2m2w23381e232z1g3c29361a2v3s1z3z1m360w1z3z39213v2z39361a2v3s1z2z1m2z162t2z2n1z2038231q25333c142z2v233c1w3s271z1z38231q25332c143z261w101z141z133v392o172z241s3s2t2z2n1z3u243c133v392o172z34101z1m231z3u261z3u261z3u261z3u2o2z39213v3c29213v29213v252y393v2c1z1z2233143o00303c293w121m3c1b3o0z3z2k221z2z1m2z1z1z2s271z2z1d393v3c181w10302v3u2s333c101z1c1m1z133v27211t302o12232520332c1626332z1d1e183c143z261w1z101z203s271z101m3s350z3z223314331t2k3d1o1e1i1d1d1c1q3d1h2e1q3d1d3e163e1k2e1g1c1h2d1c3c1q3d1k2c1r3c1z2c1s2e1w2c1t2c1w2c1s3d1i2c1q2c182c1q3c1r2c1s2c1o2c1t1c1e2c1u2c122c1s2c1z2c1q2c1b2c1s2e1c2c1t3e1h2c1s2c1s2c1q1e142c1s2e1r2c1q2c1x2c1u2c1e2c1u3c1r2c1s2e1w2c1r2c1t2c1s2e1e2c1t2c1v2c1u2d1w2c1s2c182c1q2e1x2c1s2e192c1s1d142c1u3e1t2c1q3d192c1q3d192c1q1d162c1s3d1x2c1s2d172c1q3c1i2c1q2d172c1s3d122c1s2d152c1t3d1j2c1q2d192c1s3d142c1q3d172c1u3c1a2c1s2d152c1s3d1d2c1q3d172c1r3d1d2c1s1d152c1s3e192c1q2d172c1r3d1z2c1q3d142c1u3e182c1s2d162c1s3e1v2c1q3d172c1q3d172c1s3d1s2c1s2c1s2c1d1c1h3d1e1e1g3e1s1d121e1s2e1b3c1i3e101d123d1g2c1e3c1s1e1o3e1d3c1j3c1d1d1b3e1h2d163d121c173d1c1e1e3d1e2c1c3d1q3d1k3c1j1c1g1d1h1d1a1c1h3c192d1i3d183d1d3c1a1e1e3e121d1h1c101c1a1c181c181c1a3d1k1e1s1d192d191d1p3d1d3d1g1e1b1d1k3c122c123d101c1d3d1d3d1k1d1r1e1s1c1b1d183e1s1c1q3c1g3d1c3e121d1i1e1q1d1g3c1s2d1f3d1c1c1d1d1k3c103e1d3d1g1e1v3c1s2c1s1e1q2c1t1c1b2c1s2e1y2c1r2c1h2c1v3e1t2c1s3c1o2c1u3e1t2c1s2c1r2c1r2c1w2c1d2c1q2c1q1c1f2c1t2c1t2c1u2c1f2c1r3e1w2c1d3d1x2c143c142d12121i103c141c1i3e1g2e1d3d122c1g3d181e1g1d1o1e1h1c103e1a1c1r3e122c1s2e1p2c1q2c1z2c1s2c1e2c1s3c1r2c1u2e1u2c1r2c1r2c1s2e1g2c1r2c1v2c1s2d1w2c1u2c162c1q2e1v2c1s2e1b2c1q1d142c1q3c1x2c1s1e1e2c1s1c1s2c1r2c1k2c1s2c142c1q2e1k2c1s1d172c1s2e1k2c1s1e1x2c1q2e1w2c1q3d1y2c1s2c1u2c1q1d1i2c1p2e1v2c1r3e1e2c1q1d172c1u3e162c1q3d172c1r3d162c1q3d152c1s3d1a2c1s2d152c1s3e1e2c1q3d192c1s3d1b2c1q3d162c1u3e1c2c1q3d152c1q3d172c1q2d152c1s3c182c1s3d162c1q3e182c1q3d182c1q3d182c1q1d152c1t3d192c1q3d172c1q3d152c1q2d152c1s3e1u2c1s1d152c1q3d1c2c1q3d172c1q3c1x2c1q3c1u2c1k1c103d1j1e1i1d123d121e121e1q2e1d1d123d103e1g1d1b3c1b2d141e1c1d191d1o3d1d1e1e3d1g3c1b1c1d1c1d1e1k3c1c1c163e113e1f2c191d1k3d1d1c1e2c1q2e1h3e1d3c1h3c1d1d191d1h1d181c102c171d192d191d1b1d193c161c1b3d163d153c1g1e1q3d1d2e1d3d1f1c1d3c193c171d1p1d1s3e103c1s1e123d1d3d171e1f1e1q2e1h2e1k1c1a3e161e1k3e1b1c1f3c1c1c1e2c1d3e1f2c1g1e1c3d1d2c1r2c1f2c1q1c102c1q2e1d2c1q1e1g2c1s2c1r2c1x1e1g2c1q3c1w2c1s1c1d2c1q2e1j2c1u2c1d2c1x2c1p2c1q2c1j2c1q2e152c1q3e1r2c1u1e1i2c123c1r2d1y3c1y3c172c1j2e1c3e1c1c1i3c1p1e1h1d1i1c1d3c1g1d1g1d1e2c1f1e1b2c152c1u1c1j2c1r2c152c1s1c1o2c1q3e1d2c1u2c1e2c1s3e1e2c1s2d1x2c1t2e1j2c1s3e1r2c1u3e1z2c1s2c1a2c1s1c1x2c1u2c1h2c1q1c1s2c1s2c1w2c1t2c1y2c1s2c1z2c1t2d1u2c1q1c132c1t3e1y2c1u2c132c1r3e1u2c1u1c1k2c1s1c1x2c1u1c1x2c1s2d1u2c1r3c1t2c1s2d172c1r3c1x2c1s3d182c1s3c1c2c1q3d192c1u3d1d2c1q3d162c1s3d1d2c1s2d152c1r3d1z2c1s3d172c1q3c1i2c1s3d172c1s3d142c1q1d192c1s3d152c1q3d162c1s3d1v2c1s2d172c1q3e1g2c1s2d192c1q3d1c2c1s1d172c1s3c1o2c1q1d192c1u3d1t2c1q3d162c1u3e1y2c1s3d152c1q3d192c1s3d172c1q2c1s2c1s2e1f1c123e173d1o1c1p3d1r3b1d3d1d3c192c1p3c1y2d1k3e1d1c1d1e1p3c1d1c183d111e1f2c1b2d1k1d1c3c1e2c1q2e1c3e1c1c1j3c1b2d191d1j3d183c122c171e1d1e1g3d1g2c1c3d1q1e1i1c1o1c1i1d1h3d1a2e1i3d1k1e1k3d1k3d1d3d1d1e1j1e1h3d143c1d2e1d3d1s3c1d1c1c1c1g2e101d141e1c1d1b1d1f3b1q2d1s2d1f3c1d2d121e1j1e1a1e1i3c1j1c1d2e1d1c1x1c122c193d1q2d191d1w1e1s1e1f3c152c1r3e1f2c1u2e1u2c1q2d142c1t3e1x2c1t1c152c1p1c152c1t2c1i2c1s2c1f2c1u1e1f2c1t1e142c1s3e182c1u1e1s2c1q3d1f2c1s2e172c1s2d1r3d1y3d1y3c183c121d1o2c1k1t2s2i2q1i2s1t141', '2a9aeb166921f6cedc79ac9974ce71fc'));
    var v = {
        log: 0,
        logout: 0,
        screencolor: "#000000",
        border: 0,
        bordersize: 1,
        bordercolor: "#000000",
        bgcolor: "#ffffff",
        rounding: 0,
        screenclick: 1,
        doubleclick: 1,
        player: 0,
        stopotherplayers: 1,
        iframe: 0,
        toolbar:
        {
            customimage: 0,
            color: "000000",
            a: "0.4",
            h: 34,
            stretchonfullscreen: 1,
            hide: 1,
            hidewithoutmoving: 1,
            hidejustfull: 0,
            hidetimeout: 3,
            hideleavetimeout: 0,
            leftandrightpadding: 3,
            animation: "none",
            position: "bottom",
            margin: "0 0 0 0",
            rounding: 0,
            clickarea: 0,
            image: ''
        },
        hotkey:
        {
            on: 1,
            f: 1,
            r: 1,
            m: 1,
            seek: 5,
            leftright: "seek",
            space: 1,
            updown: "volume",
            seeksides: 0,
            nums: 1,
            volumewheelfull: 1,
            wheelstep: 0.2
        },
        playlist:
        {
            bgcolor: "000000",
            bgcolorover: "333333",
            bga: 0.9,
            bgaover: -1,
            position: "left",
            margin: "0 0 0 0",
            padding: "7 15 7 15",
            color: "ffffff",
            font: "arial, helvetica, sans-serif",
            fontsize: 12,
            valuefontsize: 10,
            letterspacing: 0,
            valuecolor: "ffdd1f",
            borderbottom: 1,
            bordercolor: "444444",
            a: 1,
            aover: -1,
            posters: 0,
            posterheight: 100,
            posterwidth: 177,
            postertitleonhover: 1,
            historytitlea: 1,
            historycolor: "999999",
            historybgcolor: "000000",
            historybga: -1,
            historybgaover: -1,
            historytitlestrike: 0,
            activeiconsize: 3,
            headfontsize: 16,
            headbordercolor: "888888",
            rounding: 0,
            scrollarrows: 1,
            scrollarrowsize: 1,
            scrollarrowcolor: "ffffff",
            scrollarrowbg: 0,
            scrollarrowbgcolor: "000000",
            scrollarrowgradient: 1,
            scrollarrowbgover: 0,
            scrollarrowbgovercolor: "333333",
            limitwidth: 0,
            limitmaxwidth: 200,
            autoplaylist: 0,
            always: 0,
            alwaysjustpause: 0,
            alwaysnotfullscreen: 0,
            autohide: 1,
            floatleft: 0,
            floatheight: 50,
            floatmarginright: 0,
            floatlimitwidth: 1,
            floatwidth: 170,
            marginbg: 0,
            marginbgcolor: "333333",
            marginbgpadding: "0 0 0 0",
            hmaxk: 30,
            bordercolor: "666666"
        },
        settings:
        {
            bgcolor: "000000",
            bgcolorover: "222222",
            bga: 0.7,
            bgaover: -1,
            font: "arial, helvetica, sans-serif",
            position: "bottom-right",
            margin: "0 0 0 0",
            padding: "7 10 7 15",
            color: "ffffff",
            fontsize: 12,
            headfontsize: 16,
            valuefontsize: 10,
            letterspacing: 0,
            titlecolor: "ffffff",
            valuecolor: "ffdd1f",
            a: 1,
            scale: 5,
            aover: -1,
            activeicon: 1,
            activeiconsize: 3,
            scrollarrows: 1,
            scrollarrowsize: 1,
            scrollarrowcolor: "ffffff",
            limitwidth: 0,
            limitmaxwidth: 200,
            rounding: 0,
            settings1: 1,
            settings1action: "quality",
            settings2: 1,
            settings2action: "audiotrack",
            settings3: 1,
            settings3action: "subtitle",
            settings4: 0,
            settings4action: "download",
            settings5: 0,
            settings5action: "speed",
            hmaxk: 30,
            bordercolor: "666666"
        },
        logo:
        {
            position: "bottom-right",
            margin: "0 10 50 0"
        },
        volume: 0.8,
        volumestore: 1,
        mutestore: 1,
        loop: 0,
        shuffle: 0,
        finishrewind: 1,
        mute: 0,
        preload: 0,
        preloadhls: 0,
        preloaddash: 0,
        autoplay: 0,
        autoplaymute: 1,
        showtitleplaylist: 0,
        addtitleplaylistbr: 0,
        addtitleplaylist: 0,
        file_separator: ',',
        file2_separator: ';',
        file3_separator: '//',
        poster_scale: 'fill',
        poster_a: 1,
        poster_aover: -1,
        poster_float: 0,
        poster_floatmargin: '20 0 0 20',
        poster_floatposition: 'top-left',
        poster_floatwidth: 100,
        poster_floatheight: 100,
        poster_floatbgcolor: -1,
        posteronpause: 0,
        alerts: 1,
        alertsbgcolor: "ff0000",
        alertscolor: "ffffff",
        alertspaddingv: 5,
        alertspaddingh: 10,
        alertsbga: 1,
        alertsfontsize: 10,
        rightclick: 0,
        youtubeposter: 1,
        ytautoquality: 1,
        posterhide: 1,
        aspect: '16x9',
        landfullmobile: 0,
        hlschangequality: 'next',
        hlsautoquality: 1,
        hlsdebug: 0,
        hlscookies: 0,
        hlslowquality: 0,
        hlsquality: 1,
        hlsaudio: 1,
        livewakeuptime: 5,
        reload: 0,
        reloadlive: 1,
        livewakeup: 0,
        reloadtimeout: 5,
        dashdebug: 0,
        dashcookies: 0,
        dashlowquality: 0,
        dashquality: 1,
        dashaudio: 1,
        nameofhlsquality: 0,
        nameofyoutubequality: 0,
        nameofdashquality: 0,
        qualitystore: 1,
        eventstracker: 0,
        events: "PlayerjsEvents",
        errortimeout: 5000,
        container_h_procent: '100%',
        ga: 0,
        ga_event:
        {
            init: 1,
            error: 0,
            full: 0,
            end: 0,
            play: 1,
            play25: 0,
            play50: 0,
            play75: 0,
            vast_skip: 0,
            vast_click: 0,
            vast_impression: 0
        },
        yamtr_event:
        {
            init: 1,
            error: 0,
            full: 0,
            end: 0,
            play: 1,
            play25: 0,
            play50: 0,
            play75: 0
        },
        ga_proc: 100,
        playsinlineonmobile: 1,
        subtitle_start: 1,
        sub_size: 14,
        sub_sizeproc: '100%',
        sub_big_fullscreen: 1,
        sub_size_fullscreen: 20,
        sub_bg: 1,
        sub_bga: 0.7,
        sub_bgo: 2,
        sub_bgpadding: 3,
        sub_bottom: 10,
        sub_color: "ffffff",
        sub_color2: "ffeeab",
        sub_bgcolor: "000000",
        sub_shadow: 0,
        sub_weight: 400,
        sub_designstore: 1,
        sub_shift: 0,
        sub_store: 1,
        sub_off: 1,
        sharetitle: 1,
        sharetop: 0.3,
        shareiconscale: 3,
        shareiconscaleover: 4,
        shareiconmargin: 5,
        embedsize: 0,
        embedwidth: 560,
        embedheight: 315,
        fullonplay: 0,
        fullonplaymobile: 1,
        fullblack: 1,
        nativefullios: 1,
        hidestartbutios: 1,
        thumbs: 0,
        thumb_width: 160,
        thumb_height: 90,
        thumb_border: 0,
        thumb_borderwidth: 1,
        thumb_bordercolor: "333333",
        thumb_radius: 0,
        thumb_shadow: 1,
        enc2: '2',
        enc3: '3',
        vast_timeout: 10,
        vast_pauseonclick: 1,
        vast_closeonclick: 1,
        vast_volume: -1,
        vast_title: 1,
        vast_preroll_limit: 1,
        vast_preroll_andlimit: -1,
        vast_prerolltimebreak: 0,
        vast_prerolltbimp: 1,
        vast_preroll_counter: 0,
        vast_pauseroll_limit: 1,
        vast_pauserolltimebreak: 0,
        vast_pauserolltbimp: 1,
        vast_pauseroll_counter: 0,
        vast_postroll_limit: 1,
        vast_postrolltimebreak: 0,
        vast_postrolltbimp: 1,
        vast_postroll_counter: 0,
        vast_playroll_limit: 1,
        vast_playroll_counter: 0,
        vast_midroll_limit: 1,
        vast_midroll_counter: 0,
        vast_midrolltimebreak: 0,
        vast_midrolltbimp: 1,
        vast_introtimebreak: 0,
        vast_introtbimp: 1,
        vast_linktxtbgcolor: "#ffffff",
        vast_linktxtcolor: "#000000",
        vast_skipbgcolor: "#000000",
        vast_skipcolor: "#ffffff",
        vast_titlebgcolor: "#000000",
        vast_titlecolor: "#ffffff",
        vast_xbgcolor: "#000000",
        vast_xcolor: "#ffffff",
        vast_progressbgcolor: "#000000",
        vast_progresscolor: "#ffffff",
        vast_volumebgcolor: "#000000",
        vast_volumecolor: "#ffffff",
        vast_linktxtonmobile: 1,
        vast_unmutehover: 0,
        vast_unmutebutonce: 1,
        vast_default_volume: 0.5,
        vast_unmutebutbgcolor: "#ffffff",
        vast_unmutebutcolor: "#000000",
        vast_openclick: 1,
        vast_preroll_vmap: 1,
        vast_pauseroll_vmap: 1,
        vast_postroll_vmap: 1,
        vast_midroll_vmap: 1,
        vpaid_timeout: 10,
        vpaid_timeout2: -1,
        vast_resound: 1,
        vpaid_slotinframe: 1,
        eventstrackervast: 0,
        pauserollonplay: 0,
        partnerprerollor: "or",
        partnerpauserollor: "or",
        partnerpostrollor: "or",
        partnermidrollor: "or",
        midrollpoint: "50%",
        introskiptime: -1,
        introclickable: 0,
        introclosetime: -1,
        introtitle: 0,
        introtxt: 0,
        rc_version: 1,
        rc_anyway: 0,
        heartbeatinterval: 30,
        default_channel: 2,
        tagsinterval: 10,
        playedquartile: 0,
        minivis: 30,
        lsfullstart: 1,
        lsfullplay: 1,
        captions: 0,
        pip:
        {
            on: 0,
            bgcolor: "000000",
            border: 0,
            shadow: 2,
            bordercolor: "000000",
            position: "left",
            margin: "20 0 0 20",
            width: 150,
            hide: 0
        }
    };
    v.lang = "en";
    var Settings = function (is) {
        var i;
        var style = [];
        var f = [];
        var fbg = [];
        var fimg = [];
        var ftitle = [];
        var fvalue = [];
        var faction = [];
        var f2 = [];
        var f2bg = [];
        var f2img = [];
        var f2title = [];
        var f2value = [];
        var f2action = [];
        var stout = [];
        var is_visible = false;
        var open_action;
        var open_settings = -1;
        var empty = true;
        var key = is;
        var playlist;
        var shuffle = [];
        var shuffle_ = [];
        var plid = '';
        var plfolder = '';
        var plx = -1;
        var sub_settings_on = false;
        var sub_settings = false;
        var autonextopenfolder = false;
        var autoprevopenfolder = false;
        var justshow = false;
        var removed = false;
        var showinterval;
        var arrinterval;
        var wheelinterval;
        var hidetimeout;
        var settimer;
        var shr = [];
        var clr = [];
        var iclr = 0;
        var _cstm = 0;
        var evntclk = "click";
        var evntovr = (o.system.mobile ? "touchstart" : "mouseover");
        var evntout = (o.system.mobile ? "touchend" : "mouseout");
        style = UpdateObject(style, v[is]);
        style = MarginPadding(v[is], 'margin', 'margin');
        if (style.marginbg == 0) {
            style.marginbgpadding = "0 0 0 0"
        }
        style = MarginPadding(v[is], 'bgpadding', 'marginbgpadding');
        style = MarginPadding(v[is], 'padding', 'padding');
        style.scrollwidth = 0;
        var _activeIcon = "<svg style='margin-top:3px' width='" + style.activeiconsize * 2 + "' height='" + (style.activeiconsize * 2 > style.valuefontsize ? (style.activeiconsize * 2) : style.valuefontsize) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><ellipse ry='" + (style.activeiconsize) + "' rx='" + style.activeiconsize + "' cy='" + (style.activeiconsize * 2 > style.valuefontsize ? (style.activeiconsize) : (style.valuefontsize / 2)) + "' cx='" + style.activeiconsize + "' fill='#" + style.valuecolor + "'/></g></svg>";
        var _xIcon = "<svg width='" + style.activeiconsize * 2 + "' height='" + style.valuefontsize + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' ><g><ellipse ry='" + (style.activeiconsize - 1) + "' rx='" + (style.activeiconsize - 1) + "' cy='" + (style.valuefontsize / 2 + 2) + "' cx='" + style.activeiconsize + "' stroke='#" + style.valuecolor + "' stroke='1' fill-opacity='0'/></g></svg>";
        var xx = 4;
        var _nextIcon = "<pjsdiv style='display:inline-block;'><svg width='" + (xx + 2) + "' height='" + (style.valuefontsize) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='1' y1='" + (style.valuefontsize / 2 - xx) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/><line x1='" + xx + "' y1='" + (style.valuefontsize / 2) + "' x2='1' y2='" + (style.valuefontsize / 2 + xx) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg></pjsdiv>";
        var _prevIcon = "<pjsdiv style='display:inline-block;'><svg width='" + (xx + 10) + "' height='" + (style.valuefontsize + 1) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' style='float:left'><g><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 - xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round' /><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 + xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg></pjsdiv>";
        var bordercolor = "rgba(" + (style.bordercolor ? hexToRgb(style.bordercolor.replace("#", "")) : '') + ',' + existv(style.brda, 1) + ")";
        var container = createElement("div");
        o.frame.appendChild(container);
        css(container,
            {
                'overflow': 'hidden',
                'display': 'block',
                'opacity': 0,
                'border-radius': style.rounding
            });
        var mpi = {};
        for (var i in o.menuproc) {
            if (o.menuproc.hasOwnProperty(i)) {
                mpi[o.menuproc[i]] = -1
            }
        }
        if (is == "settings") {
            container.style.zIndex = 100
        }
        else {
            container.style.zIndex = 99
        }
        var control = createElement("div");
        if (o.small) {
            style.smallfontsize > 0 ? style.fontsize = style.smallfontsize : '';
            style.floatwidthsmall > 0 ? style.floatwidth = style.floatwidthsmall : '';
            style.floatheightsmall > 0 ? style.floatheight = style.floatheightsmall : ''
        }
        css(control,
            {
                'position': 'relative',
                'top': 0,
                'left': 0,
                'display': 'block',
                'width': '100%',
                'padding-top': style.bgpaddingtop,
                'padding-right': style.bgpaddingright + 20,
                'padding-bottom': style.bgpaddingbottom,
                'padding-left': style.bgpaddingleft,
                'color': style.color,
                'font-size': style.fontsize * existv(v.globalfs, 1),
                'font-family': checkFont(style.font),
                'letter-spacing': style.letterspacing + 'px'
            });
        if (o.system.safari) {
            css(control,
                {
                    'min-width': 220
                })
        }
        if (is !== "playlist") {
            css(control,
                {
                    'overflow-y': 'scroll'
                })
        }
        container.appendChild(control);
        if (style.floatleft != 1) {
            var control2 = createElement("div");
            css(control2,
                {
                    'display': 'block',
                    'overflow': 'hidden',
                    'border-radius': style.rounding
                });
            if (style.floatleft != 1) {
                if (o.system.safari) {
                    css(control2,
                        {
                            'min-width': 220
                        })
                }
            }
            control.appendChild(control2)
        }
        attr(control,
            {
                id: (v.id + "_" + is)
            });
        if (is == "playlist") {
            if (style.floatleft == 1) {
                css(control,
                    {
                        'width': '100%',
                        'padding-right': style.bgpaddingright,
                        'padding-bottom': style.bgpaddingbottom + 20,
                        'overflow-x': 'scroll',
                        'overflow-y': 'hidden',
                        'white-space': 'nowrap'
                    });
                css(container,
                    {
                        'width': o.screen_w - style.marginright - style.marginleft,
                        'height': style.floatheight + style.bgpaddingtop + style.bgpaddingbottom
                    })
            }
            else {
                css(control,
                    {
                        'overflow-y': 'scroll',
                        'overflow-x': 'hidden'
                    });
                if (style.width100 == 1) {
                    ResizePlaylist()
                }
            }
            if (style.marginbg == 1) {
                css(container,
                    {
                        'background-color': style.marginbgcolor
                    })
            }
            if (v.playlist.droplist == 1) {
                hide2(container)
            }
        }
        if (style.scrollarrows == 1) {
            var arr_up = createElement("div");
            var scrollbgcolor = hexToRgb(style.marginbg == 1 ? style.marginbgcolor : style.bgcolor);
            if (style.floatleft == 1) {
                StyleArrow(arr_up, 'to right, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'left', 12, 5, 7, 10, 7, 10, 12, 15);
                arr_up.addEventListener(evntclk, ScrollLeft)
            }
            else {
                StyleArrow(arr_up, 'to bottom, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'top', 5, 12, 10, 7, 10, 7, 15, 12);
                arr_up.addEventListener(evntclk, ScrollUp)
            }
            var arr_down = createElement("div");
            if (style.floatleft == 1) {
                StyleArrow(arr_down, 'to left, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'right', 8, 5, 13, 10, 13, 10, 8, 15);
                arr_down.addEventListener(evntclk, ScrollRight)
            }
            else {
                StyleArrow(arr_down, 'to bottom, rgba(' + scrollbgcolor + ',0), rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + ')', 'bottom', 5, 8, 10, 13, 10, 13, 15, 8);
                arr_down.addEventListener(evntclk, ScrollDown)
            }
            arr_up.addEventListener("mouseover", ScrollOverOut);
            arr_up.addEventListener("mouseout", ScrollOverOut);
            arr_down.addEventListener("mouseover", ScrollOverOut);
            arr_down.addEventListener("mouseout", ScrollOverOut);
            control.addEventListener("wheel", Wheel);
            arr_up.addEventListener("mouseup", onMouseUp);
            arr_down.addEventListener("mouseup", onMouseUp);
            container.appendChild(arr_up);
            container.appendChild(arr_down);
            clearInterval(arrinterval);
            arrinterval = setInterval(ArrowsInterval, 1000)
        }
        control.addEventListener(evntovr, ControlOver);
        control.addEventListener(evntout, ControlOut);
        if (is == "settings") {
            for (var i = 1; i < 11; i++) {
                if (exist(v["control_" + is][is + i])) {
                    v.settings[is + i] = v["control_" + is][is + i];
                    if (exist(v["control_" + is][is + i + "title"])) {
                        v.settings[is + i + "title"] = v["control_" + is][is + i + "title"]
                    }
                    if (exist(v["control_" + is][is + i + "action"])) {
                        v.settings[is + i + "action"] = v["control_" + is][is + i + "action"]
                    }
                }
                if (exist(v.settings[is + i])) {
                    if (v.settings[is + i] == 1) {
                        CreateItem('f', i);
                        StyleItem(f[i], fbg[i], ftitle[i], fvalue[i]);
                        if (!exist(v.settings[is + i + "action"])) {
                            v.settings[is + i + "action"] = "speed"
                        }
                        ftitle[i].innerHTML = Lang(v.settings[is + i + "action"]);
                        if (exist(v.settings[is + i + "title"])) {
                            if (v.settings[is + i + "title"] != '') {
                                ftitle[i].innerHTML = v.settings[is + i + "title"]
                            }
                        }
                        if (v.settings[is + i + "action"] == "share") {
                            o.shareme = true
                        }
                        faction[i] = v.settings[is + i + "action"];
                        Value(i);
                        if (faction[i] in o.menuproc) {
                            mpi[faction[i]] = i
                        }
                        f[i].addEventListener(evntovr, onOver);
                        f[i].addEventListener(evntout, onOut);
                        f[i].addEventListener(evntclk, onClick);
                        f[i].addEventListener("mouseup", onMouseUp);
                        if (v.settings[is + i + "hide"] == 1) {
                            css(f[i],
                                {
                                    "height": 0
                                })
                        }
                    }
                }
            }
        }

        function Wheel(x) {
            if (is == "playlist" && style.floatleft == 1 && x) {
                if (x.deltaX == 0 && x.deltaY != 0) {
                    control.scrollLeft -= x.deltaY;
                    x.preventDefault()
                }
            }
            clearInterval(wheelinterval);
            wheelinterval = setInterval(ControlOut, 3000);
            Retimer()
        }

        function ControlOver() {
            o.mouseDown = true
        }

        function ControlOut() {
            if (style.showovercontrol == 1) {
                clearTimeout(o.settingsovertimer);
                o.settingsovertimer = setTimeout(function () {
                    if (!o.mouseDown) {
                        HideControl()
                    }
                }, (v.settings.showoverto > 0 ? v.settings.showoverto * 1000 : (o.system.tv ? 2000 : 1000)))
            }
            o.mouseDown = false
        }

        function onOver(event) {
            if (o.fullscreen) {
                o.volumewheel ? o.actions.volumewheel(false) : ''
            }
            var i = event.target.getAttribute('fid');
            var x;
            if (i) {
                x = 'f'
            }
            else {
                if (event.target.getAttribute('f2id')) {
                    i = event.target.getAttribute('f2id');
                    x = 'f2'
                }
            }
            if (i) {
                i = parseInt(i);
                var opn = false;
                if (exist(eval(x)[i])) {
                    if (style.bgaover > -1) {
                        css(eval(x + 'bg')[i],
                            {
                                'opacity': style.bgaover
                            })
                    }
                    if (style.aover > -1) {
                        css(eval(x + 'title')[i],
                            {
                                'opacity': style.aover
                            });
                        css(eval(x + 'value')[i],
                            {
                                'opacity': style.aover
                            })
                    }
                    if (is == "playlist") {
                        if (faction[i].indexOf("playlist") == 0) {
                            var id = faction[i].substr(8);
                            if (plid == id || plfolder == id) {
                                css(eval(x + 'title')[i],
                                    {
                                        'color': style.valuecolor
                                    });
                                css(eval(x + 'value')[i],
                                    {
                                        'color': style.valuecolor
                                    });
                                opn = true
                            }
                            else {
                                css(eval(x + 'title')[i],
                                    {
                                        'color': style.color
                                    })
                            }
                        }
                    }
                    if (style.playbgcolored == 1 && exist(style.playbgcolor) && opn) { }
                    else {
                        css(eval(x + 'bg')[i],
                            {
                                'backgroundColor': style.bgcolorover
                            })
                    }
                }
            }
        };

        function onOut(event) {
            if (o.fullscreen) {
                o.volumewheel ? o.actions.volumewheel(true) : ''
            }
            var i = event.target.getAttribute('fid');
            var x;
            var opn = false;
            clearInterval(downin);
            Retimer();
            if (i) {
                x = 'f'
            }
            else {
                if (event.target.getAttribute('f2id')) {
                    i = event.target.getAttribute('f2id');
                    x = 'f2'
                }
            }
            if (i) {
                if (exist(eval(x)[i])) {
                    if (style.bgaover > -1) {
                        css(eval(x + 'bg')[i],
                            {
                                'opacity': style.bga,
                                "transition": "opacity 0.1s linear"
                            })
                    }
                    if (style.aover > -1) {
                        css(eval(x + 'title')[i],
                            {
                                'opacity': style.a,
                                "transition": "opacity 0.1s linear"
                            });
                        css(eval(x + 'value')[i],
                            {
                                'opacity': style.a,
                                "transition": "opacity 0.1s linear"
                            })
                    }
                    if (is == "playlist") {
                        if (faction[i].indexOf("playlist") == 0) {
                            var id = faction[i].substr(8);
                            if (plid == id || plfolder == id) {
                                css(eval(x + 'title')[i],
                                    {
                                        'color': style.valuecolor
                                    });
                                css(eval(x + 'value')[i],
                                    {
                                        'color': style.valuecolor
                                    });
                                opn = true
                            }
                            else {
                                if (exist(o.plhistory[id])) {
                                    HistoryPlaylist(i)
                                }
                                else {
                                    css(eval(x + 'title')[i],
                                        {
                                            'color': style.color
                                        })
                                }
                            }
                        }
                    }
                    if (style.playbgcolored == 1 && exist(style.playbgcolor) && opn) { }
                    else {
                        css(eval(x + 'bg')[i],
                            {
                                'backgroundColor': o.plhistory[id] ? style.historybgcolor : style.bgcolor
                            })
                    }
                }
            }
        }

        function onClick(event) {
            if (!justshow) {
                var d = new Date();
                o.clicktime = d.getTime();
                var i = event.target.getAttribute('fid');
                if (i) {
                    if (exist(f[i])) {
                        if (exist(faction[i])) {
                            Action(i, 0)
                        }
                    }
                }
            }
        }
        var downi;
        var downin;

        function onMouseDown(event) {
            if (!justshow) {
                var i = event.target.getAttribute('f2id');
                if (i) {
                    if (exist(f2action[i])) {
                        if (open_action in o.menuproc) {
                            downi = i;
                            downin = setInterval(DownIn, 200)
                        }
                    }
                }
            }
        }

        function DownIn() {
            Action2(downi)
        }

        function onMouseUp(event) {
            clearInterval(downin);
            event.cancelBubble = true;
            Retimer()
        }

        function onClick2(event) {
            clearInterval(downin);
            if (!justshow) {
                var d = new Date();
                o.clicktime = d.getTime();
                var i = event.target.getAttribute('f2id');
                if (i) {
                    if (i == 0) {
                        if (f2action[0] == 'color') {
                            Remove2();
                            Action(iclr)
                        }
                        else {
                            Home()
                        }
                    }
                    else {
                        if (exist(f2action[i])) {
                            Action2(i)
                        }
                    }
                }
            }
        }

        function onClickSubtitle(event) {
            var x = event.target.getAttribute('setupx');
            if (x) {
                ActionOptions(x)
            }
        }

        function onClickSubtitle2(event) {
            Retimer();
            var i = event.target.getAttribute('f2id');
            if (exist(f2action[i])) {
                if (f2i("=", i) > 0) {
                    var x = f2action[i].substr(0, f2i("=", i));
                    var y = f2action[i].substr(f2i("=", i) + 1);
                    var z = open_action + '_reset';
                    if (!v[z]) {
                        v[z] = []
                    }
                    if (!exist(v[z][x])) {
                        v[z][x] = v[x] + ''
                    }
                    StyleSubtitle(x, y)
                }
            }
        }

        function StyleSubtitle(x, y) {
            v[x] = y;
            if (o.storage && v.sub_designstore == 1 && x != "sub_shift") {
                localStorage.setItem("pljs" + x, y)
            }
            if (o.casting && o.chromecast) {
                o.chromecast.Sub()
            }
            o.actions.RenewSubtitle();
            ActionOptions(x)
        }

        function onClickTimer2(event) {
            var i = event.target.getAttribute('f2id');
            var x = f2action[i];
            if (exist(x)) {
                if (x.indexOf("=") > 0) {
                    var z = x.substr(0, x.indexOf("="));
                    var y = x.substr(x.indexOf("=") + 1);
                    v[z] = y;
                    SubtitleTimerMenu();
                    Value(o[open_action + '_i']);
                    if (open_action == "offsettimer") {
                        SettingsTimers("offsetwrite")
                    }
                }
            }
        }

        function Value(i) {
            if (exist(faction[i])) {
                var _hide = false;
                var _show = false;
                var _value = '';
                if (is == "settings") {
                    if (faction[i] == "quality") {
                        _value = o.media.getQuality()
                    }
                    if (faction[i] == "audiotrack") {
                        _value = o.media.getAudioTrack()
                    }
                    if (faction[i] == "share") {
                        _value = ' ';
                        _show = true
                    }
                    if (faction[i] == "channel") {
                        if (o.channels) {
                            _value = o.files_channel[o.current_channel]
                        }
                    }
                    if (faction[i] == "audiotrack" || faction[i] == "channel" || faction[i] == "quality") {
                        if (o['files_' + faction[i]].length == 0) {
                            _hide = true
                        }
                        else {
                            if (o['files_' + faction[i]].length == 1 && (style.show1value != 1 || o['files_' + faction[i]][0] == 1)) {
                                _hide = true
                            }
                            else {
                                _show = true
                            }
                        }
                    }
                    if (faction[i] == "airplay") {
                        if (!o.airplay) {
                            _hide = true
                        }
                        else {
                            _show = true
                        }
                    }
                    if (faction[i] == "download") {
                        if (o.file_type != 'native' && !v.download) {
                            _hide = true
                        }
                        else {
                            _show = true
                        }
                    }
                    if (faction[i] == "subtitle") {
                        if (exist(o.subs)) {
                            _show = true;
                            if (o.subtitle_on || v.sub_off == 1) {
                                if (o.sbt) {
                                    _value = o.files_subtitle[!o.subtitle_on ? o.sbt.ioff() : o.current_subtitle]
                                }
                            }
                            else {
                                _value = ''
                            }
                            var sxs = 0;
                            for (var s = 0; s < o.subs.length; s++) {
                                if (o.subs[s] != '') {
                                    sxs++
                                }
                            }
                            if (sxs == 1 && o.subload == 1) {
                                sxs = 0
                            }
                            if (v.sub_upload == 1 && v.sub_upload0 == 1) { }
                            else {
                                if (sxs == 0) {
                                    _hide = true;
                                    _show = false
                                }
                            }
                        }
                        else {
                            _hide = true
                        }
                    }
                    if (faction[i] == "speed") {
                        _value = o.files_speed[o.current_speed];
                        _value == 1 && style.speed1 != 1 ? _value = Lang('normal') : '';
                        _show = true;
                        if (o.file_type == "vimeo" || (o.media.isLive() && style.speed4live != 1)) {
                            _hide = true;
                            _show = false
                        }
                    }
                    if (faction[i] in o.menuproc) {
                        _value = FltrVal(faction[i]);
                        _show = true
                    }
                    if (faction[i].indexOf("timer") > 0) {
                        var x = ' ';
                        var y = ['hour', 'minute', 'second'];
                        for (var z = 0; z < y.length; z++) {
                            if (exist(v[faction[i] + y[z]])) {
                                if (v[faction[i] + y[z]] !== ' ') {
                                    x += (x !== ' ' ? ':' : '') + v[faction[i] + y[z]]
                                }
                            }
                        }
                        _value = x != ' 0:0' && x.indexOf(":") > -1 ? x : ' ';
                        _show = true
                    }
                }
                fvalue[i].innerHTML = _value + (_value != '' && style.hidearrow != 1 ? ' &nbsp;<svg width="5px" height="7px" viewBox="-1 -1 5 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline stroke="#' + style.valuecolor + '" stroke-width="1" fill="none" points="0 0 3 3 0 6"></polyline></svg>' : '');
                if (_hide) {
                    hide(f[i]);
                    if (is == "settings") {
                        stout[i] ? clearTimeout(stout[i]) : '';
                        if (o.controls) {
                            o.controls.SettingsN(i, false, _value)
                        }
                        else {
                            stout[i] = setTimeout(function () {
                                o.controls.SettingsN(i, false, _value)
                            }, 200)
                        }
                    }
                    css(f[i],
                        {
                            'position': 'absolute',
                            'right': 0,
                            'top': -100
                        })
                }
                if (_show) {
                    if (style.floatleft == 1) {
                        css(f[i],
                            {
                                'display': 'inline-block'
                            })
                    }
                    else {
                        show(f[i])
                    }
                    if (is == "settings") {
                        stout[i] ? clearTimeout(stout[i]) : '';
                        if (o.controls) {
                            o.controls.SettingsN(i, true, _value)
                        }
                        else {
                            stout[i] = setTimeout(function () {
                                o.controls.SettingsN(i, true, _value)
                            }, 500)
                        }
                    }
                    css(f[i],
                        {
                            'position': 'relative',
                            'right': 0,
                            'top': 0
                        })
                }
                Resize()
            }
            for (var j = 1; j < f.length; j++) {
                if (f[j]) {
                    if (isVisible(f[j])) {
                        var refresh = false;
                        empty ? refresh = true : '';
                        empty = false;
                        refresh && o.controls ? o.controls.refresh() : ''
                    }
                }
            }
        };

        function Action(i, cstm, fa) {
            fa ? faction[i] = fa : '';
            if (exist(faction[i])) {
                o.setaction = true;
                Retimer();
                var x = VisibleItems();
                if (open_action != faction[i]) {
                    open_action = faction[i];
                    if (open_action == 'quality' || open_action == 'audiotrack' || open_action == 'subtitle' || open_action == 'speed' || open_action == 'channel' || open_action in o.menuproc || open_action.indexOf("timer") > 0 || open_action == 'share' || open_action == 'color') {
                        open_settings = i;
                        var z = copyObject(o['files_' + open_action]);
                        if (open_action == "sleeptimer") {
                            if (style.sleep2 == 1) {
                                z = SettingsTimers("sleep2options")
                            }
                            else {
                                z = SettingsTimers("sleepoptions")
                            }
                        }
                        if (open_action == "offsettimer") {
                            z = SettingsTimers("offsetoptions")
                        }
                        if (open_action == "share" && o.share) {
                            z = [];
                            for (var j = 1; j <= 16; j++) {
                                if (exist(v["share" + j])) {
                                    z.push(Lang(v["share" + j]));
                                    shr[z.length] = v["share" + j]
                                }
                            }
                        }
                        if (open_action == "color" && o.tagvideo) {
                            z = [];
                            iclr = i;
                            for (var j = 0; j < o.clr_options.length; j++) {
                                var co = o.clr_options[j].substr(4);
                                z.push(Lang(co));
                                clr[z.length] = co
                            }
                        }
                        var current = o['current_' + open_action];
                        var pressed = o['pressed_' + open_action];
                        for (var j = 1; j < f.length; j++) {
                            if (f[j]) {
                                f[j].style.display = "none"
                            }
                        }
                        f2 = [];
                        CreateItem('f2', 0);
                        StyleItem(f2[0], f2bg[0], f2title[0], f2value[0]);
                        css(f2[0],
                            {
                                "border-bottom": "1px solid " + (style.bordercolored == 1 ? bordercolor : "rgba(100,100,100,0.7)")
                            });
                        _cstm = cstm;
                        var suboptns = false;
                        f2title[0].innerHTML = (x[0] < 2 || _cstm == 1 || style.noprevicon == 1 ? '' : _prevIcon) + (v.settings[is + i + "title"] && v.settings[is + i + "title"] != '' ? v.settings[is + i + "title"] : Lang(v.settings[is + i + "action"]));
                        if (open_action == 'subtitle' && !o.hls_subs && !o.dash_subs) {
                            var prm = createElement("div");
                            prm.innerHTML = Lang("options");
                            css(prm,
                                {
                                    'color': style.color,
                                    'pointerEvents': 'auto',
                                    'cursor': 'pointer'
                                });
                            f2value[0].appendChild(prm);
                            prm.addEventListener(evntclk, SubtitleSettings);
                            suboptns = true
                        }
                        if (open_action == 'subtitle' && v.sub_upload == 1 && !o.system.tv && exist(window.FileReader)) {
                            var uf = createElement("div");
                            !o.sbt ? o.sbt = new PluginSub() : '';
                            uf.innerHTML = "<input type='file' id='" + v.id + "_subfile' accept='.vtt,.ass,.srt' style='display:none'/>" + Lang('upload');
                            css(uf,
                                {
                                    'color': style.color,
                                    'pointerEvents': 'auto',
                                    'cursor': 'pointer',
                                    'margin-left': (suboptns ? '10px' : 0)
                                });
                            f2value[0].appendChild(uf);
                            o.subupld = document.getElementById(v.id + "_subfile");
                            o.subupld.onchange = o.sbt.SubUpload;
                            uf.addEventListener(evntclk, o.sbt.SubUpload)
                        }
                        if (suboptns) {
                            if (sub_settings_on) {
                                if (_cstm == 2) {
                                    z = [];
                                    hide2(f2[0])
                                }
                                for (j = 0; j < o.sub_options.length; j++) {
                                    if (v.sub_all == 0 && o.sub_options[j] == "sub_color2") { }
                                    else {
                                        z.push("pjslng_" + o.sub_options[j])
                                    }
                                }
                            }
                        }
                        css(f2title[0],
                            {
                                'font-size': style.headfontsize * existv(v.globalfs, 1)
                            });
                        f2action[0] = "home";
                        if (open_action in o.menuproc) {
                            Menuproc(open_action);
                            if (iclr > 0 && o.clr_options.indexOf('clr_' + open_action) > -1) {
                                f2title[0].innerHTML = _prevIcon + Lang(open_action);
                                f2action[0] = "color";
                                f2value[0].innerHTML = FltrVal(open_action)
                            }
                            css(f2value[0],
                                {
                                    'width': style.valuefontsize * 2.5,
                                    'text-align': 'right'
                                })
                        }
                        if (_cstm != 1 && x[0] > 1) {
                            f2[0].addEventListener(evntovr, onOver);
                            f2[0].addEventListener(evntout, onOut);
                            f2[0].addEventListener(evntclk, onClick2);
                            f2[0].addEventListener("mouseup", onMouseUp)
                        }
                        else {
                            css(f2[0],
                                {
                                    "cursor": 'default'
                                })
                        }
                        if (style.nohead == 1) {
                            hide2(f2[0])
                        }
                        if (exist(z)) {
                            var zz = '';
                            for (j = 0; j < z.length; j++) {
                                var y = j + 1;
                                var toend = 0;
                                var off = false;
                                if (z[j] && trim(z[j]) != '') {
                                    if (open_action == 'quality') {
                                        if (z[j] == Lang("auto")) {
                                            toend = 1
                                        }
                                        if (o.file_type == "hls" && v.hlsqhsort == 1) {
                                            var iz = int(z[j]);
                                            if (iz && iz < zz) {
                                                toend = 2
                                            }
                                            zz = int(z[j])
                                        }
                                    }
                                    CreateItem('f2', y, toend);
                                    StyleItem(f2[y], f2bg[y], f2title[y], f2value[y], faction[i]);
                                    if (open_action == 'speed') {
                                        z[j] == 1 && style.speed1 != 1 ? z[j] = Lang('normal') : ''
                                    }
                                    if (typeof (z[j]) == 'string') {
                                        if (z[j].indexOf("<<<") == 0) {
                                            z[j] = z[j].replace('<<<', '');
                                            off = true
                                        }
                                        if (z[j].indexOf('timer') > 0) {
                                            o[open_action + '_i'] = i
                                        }
                                        if (z[j].indexOf("pjslng") == 0) {
                                            var tmp = z[j];
                                            if (tmp.indexOf("timer") > 0) {
                                                f2title[y].innerHTML = Lang(z[j].substr(tmp.indexOf("timer") + 5))
                                            }
                                            else {
                                                f2title[y].innerHTML = Lang(z[j].substr(7))
                                            }
                                            if (z[j] == 'pjslng_sub_sizeproc') {
                                                css(f2[y],
                                                    {
                                                        "border-top": "1px solid rgba(100,100,100,0.7)"
                                                    })
                                            }
                                        }
                                        else {
                                            f2title[y].innerHTML = z[j]
                                        }
                                    }
                                    else {
                                        f2title[y].innerHTML = z[j]
                                    }
                                    f2action[y] = open_action + j;
                                    if (current == j || pressed == j) {
                                        f2value[y].innerHTML = current == j ? _activeIcon : _xIcon;
                                        current == j ? css(f2title[y],
                                            {
                                                'color': style.valuecolor
                                            }) : ''
                                    }
                                    if (typeof (z[j]) == 'string') {
                                        if (z[j].indexOf("pjslng") == 0) {
                                            var t = z[j].substr(7);
                                            if (t.indexOf("color") > 0) {
                                                f2value[y].innerHTML = "<div style='" + (v[t] == "000000" ? 'border:1px solid #999;height:8px;width:8px;' : 'height:10px;width:10px;') + ";background-color:" + (v[t].indexOf("#") == -1 ? '#' : '') + v[t] + ";border-radius:10px;'></div>"
                                            }
                                            else {
                                                if (exist(v[z[j].substr(7)])) {
                                                    f2value[y].innerHTML = v[z[j].substr(7)]
                                                }
                                            }
                                        }
                                        if (open_action == "share") {
                                            if (exist(shr[y]) && o.share) {
                                                f2value[y].innerHTML = o.share.icon(shr[y], 0.7, CheckColor(style.valuecolor))
                                            }
                                        }
                                        if (open_action == "color") {
                                            if (exist(clr[y]) && o.tagvideo) {
                                                f2value[y].innerHTML = FltrVal(clr[y])
                                            }
                                        }
                                        if (open_action == 'quality') {
                                            if (z[j] == Lang("auto") && o.media.autoQuality()) {
                                                css(f2title[y],
                                                    {
                                                        'color': style.valuecolor
                                                    })
                                            }
                                            if (exist2(v.forbidden_quality)) {
                                                var fq = v.forbidden_quality.split(",");
                                                for (var k = 0; k < fq.length; k++) {
                                                    if (z[j].indexOf(fq[k]) > -1) {
                                                        hide2(f2[y])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    var clck = "";
                                    if (typeof (z[j]) == 'string') {
                                        if (z[j].indexOf("pjslng") == 0) {
                                            attr(f2[y],
                                                {
                                                    'f2parent': i,
                                                    'setupx': z[j].substr(7)
                                                });
                                            clck = "onClickSubtitle"
                                        }
                                    }
                                    if (!off) {
                                        f2[y].addEventListener(evntovr, onOver);
                                        f2[y].addEventListener(evntout, onOut);
                                        if (clck == "onClickSubtitle") {
                                            f2[y].addEventListener(evntclk, onClickSubtitle)
                                        }
                                        else {
                                            f2[y].addEventListener(evntclk, onClick2)
                                        }
                                        f2[y].addEventListener("mouseup", onMouseUp);
                                        f2[y].addEventListener("mousedown", onMouseDown)
                                    }
                                    else {
                                        css(f2[y],
                                            {
                                                "cursor": "default"
                                            })
                                    }
                                }
                            }
                        }
                        Resize()
                    }
                    if (faction[i] == 'download') {
                        o.actions.Download()
                    }
                    if (faction[i].indexOf('playlist') > -1) {
                        var id = faction[i].substr(8);
                        if (exist(o.playlist_dic[id])) {
                            if (exist(o.playlist_dic[id]['file'])) {
                                o.seekto = undefined;
                                ActionPlaylist(i);
                                UpdateStart(id);
                                SettingsTimers("offset");
                                if (exist(o.playlist_dic[id]['redirect']) && v.redirect == 1 && v.redirectplaylist == 1) {
                                    redirect(o.playlist_dic[id]['redirect'])
                                }
                                else {
                                    UpdateVars0(id);
                                    o.actions.NewFile(o.playlist_dic[id]['file'], (v.playlist.dontplay == 1 ? 1 : undefined));
                                    v.playlist.always == 0 && v.playlist.autohide == 1 ? setTimeout(HideControl, 200) : '';
                                    autonextopenfolder = false;
                                    autoprevopenfolder = false;
                                    UpdateVars(id)
                                }
                            }
                            else {
                                if (exist(o.playlist_dic[id]['folder'])) {
                                    UpdatePlaylist(id);
                                    if (autonextopenfolder) {
                                        plx == -1 ? Action(0, 0) : ''
                                    }
                                    else if (autoprevopenfolder) {
                                        plx == -1 ? Action(parseInt(f.length) - 2, 0) : ''
                                    }
                                }
                            }
                        }
                        if (o.droplist) {
                            o.droplist.Update()
                        }
                    }
                    if (faction[i] == 'airplay') {
                        o.media.Airplay()
                    }
                }
            }
        };
        this.UpdateTimer = function (x) {
            Value(o[x + '_i'])
        };

        function ActionOptions(x) {
            if (x == "sub_reset") {
                var z = open_action + '_reset';
                if (v[z]) {
                    for (var y in v[z]) {
                        if (v[z].hasOwnProperty(y)) {
                            StyleSubtitle(y, v[z][y])
                        }
                    }
                    SubtitleSettingsMenu()
                }
                return
            }
            Retimer();
            for (var i = 0; i < f2.length; i++) {
                if (f2[i]) {
                    f2[i].style.display = "none"
                }
            }
            f2 = [];
            CreateItem('f2', 0);
            StyleItem(f2[0], f2bg[0], f2title[0], f2value[0]);
            css(f2[0],
                {
                    "border-bottom": "1px solid " + (style.bordercolored == 1 ? bordercolor : "rgba(100,100,100,0.7)")
                });
            if (x.indexOf("timer") > 0) {
                f2[0].addEventListener(evntclk, SubtitleTimerMenu);
                f2title[0].innerHTML = Lang(x.substr(x.indexOf("timer") + 5))
            }
            else {
                f2[0].addEventListener(evntclk, SubtitleSettingsMenu);
                f2title[0].innerHTML = (style.noprevicon != 1 ? _prevIcon : '') + Lang(x)
            }
            css(f2title[0],
                {
                    'font-size': style.headfontsize * existv(v.globalfs, 1)
                });
            f2[0].addEventListener(evntovr, onOver);
            f2[0].addEventListener(evntout, onOut);
            f2[0].addEventListener("mouseup", onMouseUp);
            var values = [];
            var valuefromlang = false;
            if (x.indexOf("size") > 0) {
                values = ['50%', '75%', '100%', '125%', '150%', '175%', '200%', '250%', '300%', '400%']
            }
            if (x.indexOf("bga") > 0) {
                values = ['0', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']
            }
            if (x.indexOf("shift") > 0) {
                for (i = -5; i < 5.5; i += 0.5) {
                    values.push(Math.round(i * 100) / 100)
                }
            }
            if (x.indexOf("weight") > 0) {
                values = [200, 400, 600]
            }
            if (x.indexOf("bottom") > 0) {
                for (i = 0; i < 21; i++) {
                    values[i] = i * 10
                }
            }
            if (x.indexOf("hour") > 0) {
                for (i = 0; i < 24; i++) {
                    values[i] = i
                }
            }
            if (x.indexOf("minute") > 0 || x.indexOf("second") > 0) {
                for (i = 0; i < 60; i++) {
                    values[i] = i
                }
            }
            if (x.indexOf("shadow") > 0) {
                valuefromlang = true;
                values = [0, 1]
            }
            if (x.indexOf("color") > 0) {
                values = ['ffffff', 'ffeeab', '72ccf8', '62de50', 'faed54', 'feba54', 'e8bbff', 'ffc7d1', 'aaaaaa', 'd9bb8c', 'b3fee8', '4bd9ac', 'FEF370', 'D90000', '073DA0', '409829', '644082', '000000'];
                var vx = v[x].replace("#", "");
                if (values.indexOf(vx) == -1) {
                    values[8] = vx
                }
            }
            for (y = 1; y <= values.length; y++) {
                CreateItem('f2', y, 0);
                StyleItem(f2[y], f2bg[y], f2title[y], f2value[y]);
                css(f2value[y],
                    {
                        'padding-left': 0
                    });
                if (x.indexOf("color") > 0 || x.indexOf("bottom") > 0 || x.indexOf("timer") > 0 || x.indexOf("shift") > 0) {
                    y % 3 != 0 ? css(f2[y],
                        {
                            'float': 'left'
                        }) : '';
                    css(f2[y],
                        {
                            'width': '33.3%'
                        });
                    if (x.indexOf("color") > 0) {
                        f2title[y].innerHTML = "<div style='" + (values[y - 1] == "000000" ? 'border:1px solid #999;height:18px;width:18px;' : 'height:20px;width:20px;') + ";background-color:#" + values[y - 1] + ";border-radius:20px;'></div>";
                        css(f2[y],
                            {
                                'line-height': 1
                            })
                    }
                    else {
                        f2title[y].innerHTML = values[y - 1]
                    }
                }
                else {
                    if (x.indexOf("weight") > 0) {
                        f2title[y].innerHTML = values[y - 1]
                    }
                    else {
                        y % 2 != 0 ? css(f2[y],
                            {
                                'float': 'left'
                            }) : '';
                        css(f2[y],
                            {
                                'width': '50%'
                            });
                        if (valuefromlang) {
                            f2title[y].innerHTML = Lang(values[y - 1] + 'val')
                        }
                        else {
                            f2title[y].innerHTML = values[y - 1]
                        }
                    }
                }
                f2action[y] = x + '=' + values[y - 1];
                if ((values[y - 1] == v[x] && String(v[x]) != " ") || v[x] == '#' + values[y - 1]) {
                    f2value[y].innerHTML = _activeIcon;
                    css(f2title[y],
                        {
                            'color': style.valuecolor
                        })
                }
                f2[y].addEventListener(evntovr, onOver);
                f2[y].addEventListener(evntout, onOut);
                if (x.indexOf("timer") > 0) {
                    f2[y].addEventListener(evntclk, onClickTimer2)
                }
                else {
                    f2[y].addEventListener(evntclk, onClickSubtitle2)
                }
                f2[y].addEventListener("mouseup", onMouseUp)
            }
            Resize()
        }

        function UpdateVars0(id) {
            if (exist(o.playlist_dic[id]['poster'])) {
                v.poster = o.playlist_dic[id]['poster'];
                exist(v.poster) ? o.media.Poster(v.poster) : ''
            }
            if (exist(o.playlist_dic[id]['title'])) {
                o.titlestore = o.playlist_dic[id]['title']
            }
        }

        function UpdateVars(id) {
            var t = o.playlist_dic[id]['title'];
            if (exist(t)) {
                if (v.showtitleplaylist == 1) {
                    if (o.actions.TitleTemplate(o.playlist_dic[id])) { }
                    else {
                        v.title = (v.addtitleplaylist == 1 && exist(o.maintitle) ? o.maintitle + (v.addtitleplaylistbr == 1 ? '<br>' : ' ') : '') + t
                    }
                    o.actions.Title('title')
                }
            }
            if (v.pointed == 1) {
                if (exist(o.playlist_dic[id]['points'])) {
                    v.points = o.playlist_dic[id]['points']
                }
                else {
                    v.points = []
                }
                o.controls.RenewPoints()
            }
            var xv = ['remove', 'thumbnails', 'download', 'skip', 'url', 'url2', 'url3', 'vars', 'embed', 'end', 'delete', 'heartbeat', 'label', 'title2'];
            for (var i = 0; i < xv.length; i++) {
                if (exist(o.playlist_dic[id][xv[i]])) {
                    v[xv[i]] = o.playlist_dic[id][xv[i]]
                }
                else {
                    i < 4 ? v[xv[i]] = undefined : ''
                }
            }
            v.start = 0;
            UpdateStart(id);
            if (exist(o.playlist_dic[id]['sub'])) {
                o.playlist_dic[id]['subtitle'] = o.playlist_dic[id]['sub']
            }
            if (exist(o.playlist_dic[id]['subtitle'])) {
                o.actions.Subtitle(o.playlist_dic[id]['subtitle'])
            }
            if (exist(o.playlist_dic[id]['design'])) {
                apiProcessor('design', o.playlist_dic[id]['design'])
            }
        }

        function UpdateStart(id) {
            var x = o.playlist_dic[id]['start'];
            if (exist(x)) {
                if (x == "continue") {
                    if (o.media.time() > 0) {
                        v.start = o.seekto = o.media.time()
                    }
                }
                else {
                    v.start = o.seekto = x
                }
            }
        }

        function ActionPlaylist(x) {
            if (plx == 0 && !o.start) {
                css(ftitle[plx],
                    {
                        'color': style.color
                    });
                css(fbg[plx],
                    {
                        'backgroundColor': style.bgcolor
                    });
                fvalue[plx].innerHTML = ''
            }
            else {
                o.plopenid = x;
                if (plx > -1) {
                    HistoryPlaylist(plx)
                }
                if (plid != '') {
                    o.plhistory[plid] = true;
                    shuffle = removebykey(shuffle, plid)
                }
            }
            if (faction[x]) {
                var id = faction[x].substr(8);
                fvalue[x].innerHTML = _activeIcon;
                css(ftitle[x],
                    {
                        'color': style.valuecolor,
                        'text-decoration': 'none',
                        'opacity': style.a
                    });
                if (style.playbgcolored == 1 && exist(style.playbgcolor)) {
                    css(fbg[x],
                        {
                            'backgroundColor': style.playbgcolor
                        })
                }
                plx = x;
                plid = id;
                o.plid = plid;
                v.plstart = plid;
                o.playlist_title = ftitle[x].innerHTML;
                o.plopenid = plid;
                plfolder = o.playlist_dic[id]['pjs_parent'];
                if (o.controls) {
                    o.controls.PlaylistControls()
                }
            }
        }

        function UpdatePlaylist(id) {
            var x = id == 0 ? o.playlist : o.playlist_dic[id];
            o.plopenid = id;
            for (var i = 0; i < f.length; i++) {
                if (style.floatleft == 1) {
                    control.removeChild(f[i])
                }
                else {
                    control2.removeChild(f[i])
                }
                f[i] = null
            }
            f = [];
            plx = -1;
            if (exist(x['folder'])) {
                var y = Object.keys(x['folder']).length;
                CreateItem('f', y);
                faction[y] = "playlistfolder";
                StyleItem(f[y], fbg[y], ftitle[y], fvalue[y]);
                if (style.floatleft == 1) {
                    css(f[y],
                        {
                            "width": (style.floatlimitwidth == 1 ? style.floatwidth : "auto"),
                            "height": style.floatheight
                        })
                }
                if (style.borderbottom == 1) {
                    var hdbrdclr = "1px solid rgba(" + hexToRgb(style.headbordercolor) + ',' + existv(style.brda, 1) + ")";
                    if (style.floatleft == 1) {
                        css(f[y],
                            {
                                "borderRight": hdbrdclr
                            })
                    }
                    else {
                        css(f[y],
                            {
                                "borderBottom": hdbrdclr
                            })
                    }
                }
                var tmp = x.title;
                if (style.noprevicon != 1) {
                    tmp = _prevIcon + tmp
                }
                ftitle[y].innerHTML = tmp;
                css(ftitle[y],
                    {
                        'font-size': style.headfontsize * existv(v.globalfs, 1)
                    });
                var p = x['pjs_parent'];
                f[y].addEventListener(evntovr, onOver);
                f[y].addEventListener(evntout, onOut);
                f[y].addEventListener(evntclk, function () {
                    PlaylistBack(p)
                });
                x = x['folder']
            }
            var y = Object.keys(x).length;
            shuffle = [];
            shuffle_ = [];
            for (var i = 0; i < y; i++) {
                CreateItem('f', i);
                faction[i] = "playlist" + x[i].id;
                if (!exist(o.plhistory[x[i].id]) && !exist(x[i].folder)) {
                    shuffle[x[i].id] = i;
                    shuffle_[x[i].id] = i
                }
                StyleItem(f[i], fbg[i], ftitle[i], fvalue[i]);
                if (style.floatleft == 1) {
                    if (style.activeiconsize == 0) {
                        css(ftitle[i],
                            {
                                'width': style.floatwidth - style.paddingleft - style.paddingright
                            });
                        hide2(fvalue[i])
                    }
                    css(f[i],
                        {
                            "width": (style.floatlimitwidth == 1 ? style.floatwidth : "auto"),
                            "height": style.floatheight
                        })
                }
                if (style.borderbottom == 1 && i < y - 1) {
                    var brd = createElement("div");
                    f[i].appendChild(brd);
                    if (style.floatleft == 1) {
                        css(brd,
                            {
                                "position": "absolute",
                                "top": 0,
                                "right": 0,
                                "width": 1,
                                "height": "100%",
                                "background": bordercolor,
                                "pointerEvents": "none"
                            })
                    }
                    else {
                        css(brd,
                            {
                                "position": "absolute",
                                "bottom": 0,
                                "left": 0,
                                "width": "100%",
                                "height": 1,
                                "background": bordercolor,
                                "pointerEvents": "none"
                            })
                    }
                }
                ftitle[i].innerHTML = x[i].title ? x[i].title : '&nbsp;';
                if (v.timestore == 1 && v.playedstore == 1 && x[i].id) {
                    if (o.playedstored) {
                        if (o.playedstored.indexOf(x[i].id) > -1) {
                            x[i].played = 1
                        }
                    }
                }
                if (exist(x[i].played)) {
                    if (x[i].played == 1) {
                        o.plhistory[x[i].id] = true;
                        HistoryPlaylist(i)
                    }
                }
                if (exist(x[i].folder)) {
                    fvalue[i].innerHTML = _nextIcon;
                    css(fvalue[i],
                        {
                            "color": style.color
                        })
                }
                f[i].addEventListener(evntovr, onOver);
                f[i].addEventListener(evntout, onOut);
                f[i].addEventListener(evntclk, onClick);
                f[i].addEventListener("mouseup", onMouseUp);
                if (exist(o.plhistory[x[i].id])) {
                    HistoryPlaylist(i)
                }
                if (plid == x[i].id) {
                    ActionPlaylist(i)
                }
                if (plfolder == x[i].id) {
                    css(ftitle[i],
                        {
                            'color': style.valuecolor
                        });
                    css(fvalue[i],
                        {
                            'color': style.valuecolor
                        })
                }
            }
            Resize();
            empty = false;
            o.controls ? o.controls.refresh() : ''
        }

        function StyleArrow(x, y, z, x1, y1, x2, y2, x3, y3, x4, y4) {
            var ww = (style.floatleft == 1 ? '40px' : '100%');
            var hh = (style.floatleft == 1 ? '100%' : '40px');
            css(x,
                {
                    'position': 'absolute',
                    'display': 'inline-block',
                    'width': ww,
                    'height': hh,
                    'text-align': 'center'
                });
            if (style.scrollarrowgradient == 1) {
                css(x,
                    {
                        'background': '-moz-linear-gradient(' + y + ')',
                        'background': '-webkit-linear-gradient(' + y + ')',
                        'background': '-ms-linear-gradient(' + y + ')',
                        'background': '-o-linear-gradient(' + y + ')',
                        'background': 'linear-gradient(' + y + ')',
                    })
            }
            if (style.floatleft == 1 || o.system.mobile) {
                css(x,
                    {
                        'cursor': 'pointer'
                    })
            }
            else {
                css(x,
                    {
                        'pointer-events': 'none'
                    })
            }
            if (style.limitwidth == 1) {
                css(x,
                    {
                        'max-width': style.limitmaxwidth + 'px!important'
                    })
            }
            if (z == "top") {
                css(x,
                    {
                        'top': -1,
                        'left': 0
                    })
            }
            if (z == "bottom") {
                css(x,
                    {
                        'bottom': -1,
                        'left': 0
                    })
            }
            if (z == "left") {
                css(x,
                    {
                        'top': 0,
                        'left': 0
                    })
            }
            if (z == "right") {
                css(x,
                    {
                        'top': 0,
                        'right': 0
                    })
            }
            if (z == "right" || z == "left") {
                css(x,
                    {
                        'text-align': 'left',
                        'padding-top': container.offsetHeight / 2 - 10
                    })
            }
            x.innerHTML = "<center><div " + (style.scrollarrowbgover == 1 ? "onMouseOver='this.style.backgroundColor=\"#" + style.scrollarrowbgovercolor + "\"' onMouseOut='" + (style.scrollarrowbg == 1 ? "this.style.backgroundColor=\"#" + style.scrollarrowbgcolor : "this.style.background=\"none") + "\"'" : "") + " style='pointer-events:auto;cursor:pointer;width:20px;height:20px;border-radius:20px;" + (style.scrollarrowbg == 1 ? "background-color:#" + style.scrollarrowbgcolor + ";" : "") + (z == "top" ? "margin-top:10px;" : "") + (z == "bottom" ? "margin-top:10px;" : "") + (z == "right" ? "margin-left:0px;" : "") + (z == "left" ? "margin-right:0px;" : "") + "'><svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/><line x1='" + x3 + "' y1='" + y3 + "' x2='" + x4 + "' y2='" + y4 + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/></g></svg></div></center>"
        }
        this.Arrows = function () {
            if (style.scrollarrows == 1) {
                Arrows()
            }
        };

        function ArrowsInterval() {
            if (is_visible) {
                Arrows()
            }
        }

        function Arrows(e) {
            if (style.scrollarrows == 1 && !removed) {
                if (style.floatleft == 1) {
                    var h = control.scrollWidth;
                    var m = container.offsetWidth + style.bgpaddingleft + style.bgpaddingright;
                    var t = control.scrollLeft
                }
                else {
                    var h = control.scrollHeight;
                    var m = container.offsetHeight;
                    var t = control.scrollTop
                }
                if (h > m) {
                    if (t > 0) {
                        if (!isVisible(arr_up)) {
                            show(arr_up);
                            var m1 = new Motion(
                                {
                                    "mc": arr_up,
                                    "type": "alpha_div",
                                    "to": 1,
                                    "time": 0.3,
                                    "me": "arr_up"
                                })
                        }
                    }
                    else {
                        if (isVisible(arr_up)) {
                            var m2 = new Motion(
                                {
                                    "mc": arr_up,
                                    "type": "alpha_div",
                                    "to": 0,
                                    "time": 0.3,
                                    "me": "arr_up",
                                    "hide": true
                                })
                        }
                        if (e) {
                            e.deltaY < 0 ? e.preventDefault() : ''
                        }
                    }
                    if (t < h - m - 10) {
                        if (!isVisible(arr_down)) {
                            show(arr_down);
                            var m3 = new Motion(
                                {
                                    "mc": arr_down,
                                    "type": "alpha_div",
                                    "to": 1,
                                    "time": 0.3,
                                    "me": "arr_down"
                                })
                        }
                    }
                    else {
                        if (isVisible(arr_down)) {
                            var m4 = new Motion(
                                {
                                    "mc": arr_down,
                                    "type": "alpha_div",
                                    "to": 0,
                                    "time": 0.3,
                                    "me": "arr_down",
                                    "hide": true
                                })
                        }
                        if (e) {
                            e.deltaY > 0 ? e.preventDefault() : ''
                        }
                    }
                }
                else {
                    hide(arr_up);
                    hide(arr_down)
                }
            }
        }

        function ScrollDown() {
            var x = control.scrollTop + container.offsetHeight - 60;
            var m = new Motion(
                {
                    "mc": control,
                    "type": "scroll",
                    "to": x,
                    "time": 0.3,
                    "me": "scroll_down",
                    "ease": "cubic"
                });
            setTimeout(Arrows, 1000)
        }

        function ScrollUp() {
            var x = control.scrollTop - container.offsetHeight + 60;
            var m = new Motion(
                {
                    "mc": control,
                    "type": "scroll",
                    "to": x,
                    "time": 0.3,
                    "me": "scroll_up",
                    "ease": "cubic"
                });
            setTimeout(Arrows, 1000)
        }

        function ScrollOverOut(event) {
            clearTimeout(o.settingsovertimer);
            event.stopPropagation()
        }

        function ScrollRight() {
            var x = control.scrollLeft + (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) - 60;
            var m = new Motion(
                {
                    "mc": control,
                    "type": "scrollleft",
                    "to": x,
                    "time": 0.3,
                    "me": "scroll_right",
                    "ease": "cubic"
                });
            setTimeout(Arrows, 1000)
        }

        function ScrollLeft() {
            var x = control.scrollLeft - (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) + 60;
            var m = new Motion(
                {
                    "mc": control,
                    "type": "scrollleft",
                    "to": x,
                    "time": 0.3,
                    "me": "scroll_left",
                    "ease": "cubic"
                });
            setTimeout(Arrows, 1000)
        }

        function PlaylistBack(x) {
            if (x == '') {
                UpdatePlaylist(0)
            }
            else {
                if (exist(o.playlist_dic[x])) {
                    UpdatePlaylist(x)
                }
            }
            open_action = ''
        }

        function HistoryPlaylist(x) {
            fvalue[x].innerHTML = '';
            css(ftitle[x],
                {
                    'color': style.historycolor
                });
            if (style.historytitlestrike == 1) {
                css(ftitle[x],
                    {
                        'text-decoration': 'line-through'
                    })
            }
            if (style.historytitlea > -1) {
                css(ftitle[x],
                    {
                        'opacity': style.historytitlea
                    })
            }
            css(fbg[x],
                {
                    'backgroundColor': style.historybgcolor
                });
            if (style.historybga > -1) {
                css(fbg[x],
                    {
                        'opacity': style.historybga
                    })
            }
        }

        function Action2(i) {
            if (exist(f2action[i])) {
                Retimer();
                if (f2i("quality", i) == 0) {
                    o.actions.SetQuality(f2action[i].substr(7))
                }
                if (f2i("audiotrack", i) == 0) {
                    o.actions.SetAudioTrack(f2action[i].substr(10))
                }
                if (f2i("subtitle", i) == 0) {
                    !o.sbt ? o.sbt = new PluginSub() : '';
                    o.sbt.SetSubtitle(f2action[i].substr(8))
                }
                if (f2i("channel", i) == 0 && v.channels == 1) {
                    o.channels.SetChannel(f2action[i].substr(7))
                }
                if (f2i("share", i) == 0) {
                    o.share ? o.share.api(shr[i]) : '';
                    HideControl()
                }
                if (f2i("color", i) == 0) {
                    Remove2();
                    Action(0, 0, clr[i])
                }
                for (var p in o.menuproc) {
                    if (o.menuproc.hasOwnProperty(p)) {
                        if (f2i(p, i) == 0) {
                            o.media.menufltr(p, i)
                        }
                    }
                }
                if (f2i("timer", i) > 0) {
                    if (f2title[i].innerHTML == Lang('off')) {
                        SettingsTimers(open_action + '0');
                        Value(open_settings);
                        if (open_action == "offsettimer") {
                            SettingsTimers("offsetwrite")
                        }
                        Home()
                    }
                    else {
                        if (open_action == "sleeptimer" && style.sleep2 == 1) {
                            SettingsTimers('sleep2', i);
                            Value(open_settings);
                            Home()
                        }
                    }
                }
                if (f2i("speed", i) == 0) {
                    o.actions.SetSpeed(f2action[i].substr(5));
                    UpdateSpeed();
                    setTimeout(HideControl, 200)
                }
            }
        };
        this.UpdateSpeed = function () {
            UpdateSpeed()
        };
        this.Exist = function (x) {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == x) {
                    return true
                }
            }
            return false
        };

        function UpdateSpeed() {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "speed") {
                    Value(i);
                    if (open_action == 'speed') {
                        Remove2();
                        Action(i, 0)
                    }
                }
            }
        }

        function CreateItem(x, i, toend) {
            if (exist(eval(x))) {
                eval(x)[i] = createElement("div");
                if (i < 2 || x == "f" || open_action != 'quality' || toend == 1) {
                    if (style.floatleft == 1) {
                        control.appendChild(eval(x)[i])
                    }
                    else {
                        control2.appendChild(eval(x)[i])
                    }
                }
                else {
                    if (style.floatleft == 1) {
                        control.insertBefore(eval(x)[i], eval(x)[i - 1])
                    }
                    else {
                        control2.insertBefore(eval(x)[i], eval(x)[toend == 2 ? i - 2 : i - 1])
                    }
                }
                if (x == 'f') {
                    attr(eval(x)[i],
                        {
                            'fid': i
                        })
                }
                if (x == 'f2') {
                    attr(eval(x)[i],
                        {
                            'f2id': i
                        })
                }
                eval(x + 'bg')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'bg')[i]);
                eval(x + 'img')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'img')[i]);
                css(eval(x + 'img')[i],
                    {
                        'position': 'absolute',
                        'right': 0,
                        'top': 0,
                        'width': '100%',
                        'height': '100%',
                        'pointerEvents': 'none'
                    });
                eval(x + 'title')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'title')[i]);
                eval(x + 'value')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'value')[i]);
                if (i > 0 && x == "f2" && is == "settings" && style.activeicon == 0) {
                    hide2(eval(x + 'value')[i])
                }
            }
        };

        function StyleItem(x, xbg, xtitle, xvalue, actn) {
            css(x,
                {
                    'position': 'relative',
                    'right': 0,
                    'top': 0,
                    'cursor': 'pointer',
                    'height': 'auto',
                    'width': '100%',
                    'overflow': 'hidden',
                    'display': 'block',
                    'line-height': '1.5em'
                });
            if (style.floatmarginright && style.floatleft == 1) {
                css(x,
                    {
                        'marginRight': style.floatmarginright
                    })
            }
            if (style.floatleft == 1) {
                css(x,
                    {
                        'display': 'inline-block',
                        'vertical-align': 'top',
                        'white-space': 'normal'
                    })
            }
            css(xbg,
                {
                    'position': 'absolute',
                    'right': 0,
                    'top': 0,
                    'width': '100%',
                    'height': '100%',
                    'backgroundColor': style.bgcolor,
                    'opacity': style.bga,
                    'pointerEvents': 'none',
                    'transition': 'opacity 0.2s linear,background .2s linear'
                });
            css(xtitle,
                {
                    'position': 'relative',
                    'right': 0,
                    'top': 0,
                    'float': (style.align ? style.align : 'left'),
                    'color': style.color,
                    'padding-top': style.paddingtop,
                    'padding-right': style.paddingright,
                    'padding-bottom': style.paddingbottom,
                    'padding-left': style.paddingleft,
                    'pointerEvents': 'none',
                    'opacity': style.a,
                    'transition': 'opacity 0.2s linear,color 0.2s linear',
                });
            css(xvalue,
                {
                    'position': 'relative',
                    'right': 0,
                    'top': 0,
                    'float': (style.valuealign ? style.valuealign : 'right'),
                    'padding-top': style.paddingtop,
                    'padding-right': style.paddingright,
                    'padding-left': style.paddingleft,
                    'pointerEvents': 'none',
                    'font-size': style.valuefontsize * existv(v.globalfs, 1),
                    'opacity': style.a,
                    'color': style.valuecolor,
                    'transition': 'opacity 0.2s linear,color 0.2s linear'
                });
            if (style.limitwidth == 1) {
                css(x,
                    {
                        'max-width': style.limitmaxwidth + 'px!important'
                    });
                css(xtitle,
                    {
                        'max-width': (style.limitmaxwidth - 70) + 'px!important'
                    })
            }
            else {
                if (style.floatleft == 1) {
                    if (style.floatlimitwidth == 1) {
                        css(x,
                            {
                                'width': style.floatwidth
                            });
                        css(xtitle,
                            {
                                'width': style.floatwidth - 70
                            })
                    }
                }
                else {
                    css(xtitle,
                        {
                            'white-space': 'nowrap'
                        });
                    css(xvalue,
                        {
                            'white-space': 'nowrap'
                        })
                }
            }
        }

        function Home() {
            for (var i = 1; i < f.length; i++) {
                if (exist(f[i])) {
                    if (style.floatleft == 1) {
                        f[i].style.display = "inline-block"
                    }
                    else {
                        f[i].style.display = "block"
                    }
                }
            }
            Retimer();
            Remove2();
            Resize();
            open_action = '';
            open_settings = -1
        };

        function Remove2() {
            for (var j = 0; j < f2.length; j++) {
                if (f2[j]) {
                    if (style.floatleft == 1) {
                        control.removeChild(f2[j])
                    }
                    else {
                        control2.removeChild(f2[j])
                    }
                    f2[j] = null
                }
            }
            f2 = [];
            open_action = ''
        }

        function Width() {
            return control.offsetWidth
        };
        this.resizePlaylist = function () {
            ResizePlaylist()
        };

        function ResizePlaylist() {
            if (is == "playlist") {
                if (style.floatleft == 1 || style.width100 == 1) {
                    var x = o.screen_w - style.marginright - style.marginleft;
                    css(container,
                        {
                            'width': x
                        });
                    css(control,
                        {
                            'width': x
                        });
                    control2 ? css(control2,
                        {
                            'width': x
                        }) : ''
                }
            }
        }

        function Resize() {
            if (!removed) {
                if (is == "settings") {
                    o.controls ? o.controls.resizeSettings() : '';
                    var x = style.nohead == 1 && f.length > 1 ? f[1] : f[0]
                }
                if (is == "playlist") {
                    ResizePlaylist();
                    o.controls ? o.controls.resizePlaylist() : '';
                    var x = f[0];
                    if (v.change2playlist == 1) {
                        MainUpdateSize()
                    }
                }
                f.length > 1 && !x ? (f[1] ? x = f[1] : '') : '';
                f.length > 2 && !x ? (f[2] ? x = f[2] : '') : '';
                if (x) {
                    x.offsetWidth == 0 && f2.length > 0 ? x = f2[0] : ''
                }
                if (control.offsetWidth - control.clientWidth > 0 && x && style.floatleft != 1) {
                    if (exist(arr_up)) {
                        css(arr_up,
                            {
                                "width": control2.offsetWidth
                            })
                    }
                    if (exist(arr_down)) {
                        css(arr_down,
                            {
                                "width": control2.offsetWidth
                            })
                    }
                    style.scrollwidth = (control.offsetWidth - x.offsetWidth) - (control.clientWidth - x.clientWidth)
                }
                else {
                    style.scrollwidth = 0
                }
            }
        };

        function VisibleItems() {
            var x = 0;
            var y = 0;
            var z = '';
            for (var i = 1; i < f.length; i++) {
                if (exist(f[i])) {
                    if (f[i].style.visibility == "visible") {
                        x++;
                        y = i;
                        z = faction[i]
                    }
                }
            }
            return [x, y, z]
        }
        this.SubOpt = function () {
            sub_settings_on = true;
            this.show();
            _cstm = 2;
            SubtitleSettingsMenu()
        };

        function SubtitleSettings(x) {
            sub_settings_on = !sub_settings_on;
            SubtitleSettingsMenu(x)
        }

        function SubtitleSettingsMenu() {
            Home();
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "subtitle") {
                    Action(i, _cstm)
                }
            }
        }

        function Retimer() {
            clearTimeout(settimer);
            settimer = setTimeout(function () {
                o.setaction = false
            }, 2000)
        }

        function SubtitleTimerMenu() {
            var x = open_action;
            Home();
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == x) {
                    Action(i, 0)
                }
            }
        }

        function HideControl(x) {
            if ((is == 'playlist' && v.playlist.always2 == 1) || (is == 'settings' && v.settings.always == 1)) {
                return
            }
            if (is == 'playlist' && v.playlist.droplist == 1 && v.playlist.dropnohide != 1) {
                o.droplist ? o.droplist.Hide() : '';
                is_visible = false
            }
            else {
                if ((x != 1 || (style.hidesmoothly == 1 && style.always == 1)) && !o.system.tv) {
                    var m = new Motion(
                        {
                            "mc": container,
                            "type": "alpha_div",
                            "to": 0,
                            "time": 0.1,
                            "me": is,
                            "ease": "elastic"
                        });
                    hidetimeout = setTimeout(function () {
                        css(container,
                            {
                                "visibility": "hidden",
                                "opacity": 0,
                                "top": -2000
                            });
                        is_visible = false
                    }, 200)
                }
                else {
                    css(container,
                        {
                            "visibility": "hidden",
                            "opacity": 0,
                            "top": -2000
                        });
                    is_visible = false
                }
            }
            if (is == 'playlist') {
                if (v.playlist.hidecontrol == 1 && o.controls) {
                    o.controls.toggleControl("action", "playlist", true)
                }
            }
            clearInterval(wheelinterval)
        };
        this.c = function () {
            return container
        };
        this.co = function () {
            if (container.contains(control)) {
                return control
            }
        };
        this.s = function (key) {
            return style[key]
        };
        this.ss = function (key) {
            return style
        };
        this.show = function () {
            Home();
            clearTimeout(hidetimeout);
            is_visible = true;
            if (is == 'playlist' && v.playlist.droplist == 1) {
                o.droplist ? o.droplist.Show() : ''
            }
            else {
                css(container,
                    {
                        "visibility": "visible",
                        "opacity": 1,
                        "transition": "opacity 0.2s linear"
                    });
                var x = VisibleItems();
                if (x[0] == 1) {
                    if (x[2] == "quality" || x[2] == "audiotrack" || x[2] == "subtitle" || x[2] == "speed" || x[2] in o.menuproc || x[2].indexOf("timer") > 0) {
                        Action(x[1], 0)
                    }
                }
            }
            if (o.controls) {
                is == 'settings' ? o.controls.resizeSettings() : '';
                if (is == 'playlist') {
                    o.controls.resizePlaylist();
                    if (v.playlist.hidecontrol == 1) {
                        o.controls.toggleControl("action", "playlist", false)
                    }
                }
            }
            if (o.system.safari) {
                css(control,
                    {
                        'min-width': 'auto'
                    });
                if (style.floatleft != 1) {
                    css(control2,
                        {
                            'min-width': 'auto'
                        })
                }
            }
            justshow = true;
            clearInterval(showinterval);
            showinterval = setInterval(ShowTimeout, 100)
        };

        function ShowTimeout() {
            clearInterval(showinterval);
            justshow = false
        }
        this.open = function (i) {
            Action(i, 1)
        };
        this.hide = function (x) {
            HideControl(x)
        };
        this.SetQuality = function () {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "quality") {
                    Value(i);
                    if (o.files_quality.length > 1) {
                        show(f[i])
                    }
                    if (open_action == 'quality') {
                        Remove2();
                        Action(i, _cstm)
                    }
                }
            }
        };
        this.Airplay = function () {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "airplay") {
                    Value(i)
                }
            }
        };
        this.SetSetting = function (x) {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == x) {
                    Value(i);
                    if (o['files_' + x]) {
                        if (o['files_' + x].length > 1) {
                            show(f[i])
                        }
                    }
                    if (open_action == x) {
                        Remove2();
                        Action(i, _cstm)
                    }
                }
            }
        };
        this.SetSubtitle = function () {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "subtitle") {
                    Value(i);
                    if (o.files_subtitle) {
                        if (o.files_subtitle.length > 0) {
                            var x = false;
                            if (o.subs) {
                                for (var y = 0; y < o.subs.length; y++) {
                                    if (o.subs[y] != '') {
                                        x = true;
                                        break
                                    }
                                }
                            }
                            else {
                                x = true
                            }
                            x ? show(f[i]) : ''
                        }
                    }
                    if (open_action == 'subtitle') {
                        Remove2();
                        Action(i, 0)
                    }
                }
            }
        };
        this.updatePlaylist = function (x) {
            o.playlist = x;
            UpdatePlaylist(0);
            if (exist(v.plstart)) {
                if (v.plstart.indexOf("x-") != 0) {
                    for (var y in o.playlist_dic) {
                        if (o.playlist_dic.hasOwnProperty(y)) {
                            if (o.playlist_dic[y].pjs_id == v.plstart) {
                                v.plstart = y
                            }
                        }
                    }
                }
                if (exist(o.playlist_dic[v.plstart])) {
                    FindPlStart(o.playlist_dic[v.plstart]);
                    var y = o.playlist_dic[v.plstart]['pjs_i'];
                    ActionPlaylist(y);
                    if (v.playlist.openplaylistroot == 1 && style.droplist != 1) {
                        UpdatePlaylist(0);
                        setTimeout(function () {
                            Resize()
                        }, 500)
                    }
                    else {
                        setTimeout(function () {
                            ScrollTo(y);
                            Resize()
                        }, 500)
                    }
                    v.plstart = undefined
                }
                else {
                    ActionPlaylist(0)
                }
            }
            else {
                ActionPlaylist(0)
            }
            if (style.droplist == 1) {
                if (!exist(o.droplist)) {
                    o.droplist = new PluginDroplist()
                }
            }
        };
        this.playById = function (x) {
            if (exist(o.playlist_dic[x])) {
                FindPlStart(o.playlist_dic[x]);
                Action(o.playlist_dic[x]['pjs_i'], 0);
                ScrollTo(o.playlist_dic[x]['pjs_i'])
            }
        };
        this.openById = function (x) {
            if (exist(o.playlist_dic[x])) {
                FindPlStart(o.playlist_dic[x]);
                if (o.playlist_dic[x]["file"]) {
                    ActionPlaylist(o.playlist_dic[x]['pjs_i']);
                    UpdateVars0(x);
                    o.actions.NewFile(o.playlist_dic[x]["file"], 1);
                    UpdateVars(x);
                    ScrollTo(o.playlist_dic[x]['pjs_i']);
                    if (o.droplist) {
                        o.droplist.Update()
                    }
                }
                else if (o.playlist_dic[x]["folder"]) {
                    UpdatePlaylist(x)
                }
            }
        };

        function showById(x) {
            if (exist(o.playlist_dic[x])) {
                plfolder = '';
                UpdatePlaylist(0);
                FindPlStart(o.playlist_dic[x]);
                UpdateVars0(x);
                Action(o.playlist_dic[x]['pjs_i'], 0);
                UpdateVars(x)
            }
        };
        this.PlaylistNext = function () {
            autonextopenfolder = true;
            x = parseInt(plx) + 1;
            if (plid != '') {
                o.plhistory[plid] = true;
                shuffle = removebykey(shuffle, plid)
            }
            if (v.shuffle == 1) {
                x = Shuffle(shuffle);
                if (x == null) {
                    if (v.shuffle8 == 1 || v.playlist.autoplaylist == 1) {
                        shuffle_.sort(function (a, b) {
                            return Math.random() - 0.5
                        });
                        for (var x in shuffle_) {
                            if (shuffle_.hasOwnProperty(x)) {
                                shuffle[x] = shuffle_[x]
                            }
                        }
                        x = Shuffle(shuffle)
                    }
                    else {
                        o.actions.ShuffleEnd()
                    }
                }
            }
            else {
                if ((faction[x] == "playlistfolder" || plx == -1) && plid != '') {
                    var y = Object.keys(o.playlist_dic).indexOf(plid);
                    if (y < Object.keys(o.playlist_dic).length) {
                        var z = o.playlist_dic[Object.keys(o.playlist_dic)[y + 1]];
                        if (z) {
                            if (exist(z.folder)) {
                                z = o.playlist_dic[Object.keys(o.playlist_dic)[y + 2]]
                            }
                            this.openById(z.id);
                            x = -1;
                            o.actions.Play()
                        }
                    }
                }
            }
            if (x > -1) {
                Action(x, 0);
                ScrollTo(x)
            }
        };

        function ScrollTo(x) {
            if (f[x] && !removed) {
                if (style.floatleft == 1) {
                    var to = f[x].offsetLeft - 20;
                    var m = new Motion(
                        {
                            "mc": control,
                            "type": "scrollleft",
                            "to": to,
                            "time": 0.3,
                            "me": "scroll_left",
                            "ease": "cubic"
                        })
                }
                else {
                    var to = f[x].offsetTop - container.offsetHeight / 2 + 20;
                    var m = new Motion(
                        {
                            "mc": control,
                            "type": "scroll",
                            "to": to,
                            "time": 0.3,
                            "me": "scroll_down",
                            "ease": "cubic"
                        })
                }
                setTimeout(Arrows, 1000)
            }
        }

        function Shuffle(obj) {
            var keys = Object.keys(obj);
            var x;
            for (var i = 0; i < keys.length; i++) {
                x = obj[keys[keys.length * Math.random() << 0]];
                if (x) {
                    break
                }
            }
            return x
        };
        this.menuproc = function (x) {
            Menuproc(x)
        };

        function Menuproc(x) {
            mpi[x] > -1 ? Value(mpi[x]) : '';
            if (f2value[0]) {
                if (open_action == 'scale') {
                    f2value[0].innerHTML = Math.round(o.mediascale.x * 100) + '%'
                }
                else {
                    f2value[0].innerHTML = FltrVal(open_action)
                }
            }
        };

        function FltrVal(x) {
            if (x == "scale") {
                return Math.round(o.mediascale.x * 100) + '%'
            }
            else {
                return Math.round(existv(o.fltrs[x], o.menuproc[x]) * 100) + '%'
            }
        }
        this.PlaylistNextExist = function () {
            if (v.shuffle == 1) {
                return Object.keys(shuffle).length > 0
            }
            var x = false;
            if (o.playlist_dic) {
                x = Object.keys(o.playlist_dic).indexOf(plid) < Object.keys(o.playlist_dic).length - 1
            }
            return x
        };
        this.PlaylistRewind = function () {
            if (exist(o.pl_first_id)) {
                showById(o.pl_first_id)
            }
        };
        this.PlaylistPrevExist = function () {
            var x = plx > 0;
            if (o.playlist_dic) {
                var y = Object.keys(o.playlist_dic);
                var z = y.indexOf(plid);
                x = z > 0;
                if (z == 1) {
                    if (exist(o.playlist_dic[y[0]].folder)) {
                        x = false
                    }
                }
            }
            return x
        };
        this.PlaylistExist = function () {
            return exist(o.playlist_dic)
        };
        this.PlaylistPrev = function () {
            autoprevopenfolder = true;
            if (this.PlaylistPrevExist()) {
                var x = parseInt(plx) - 1;
                if (x < 0) {
                    var y = Object.keys(o.playlist_dic).indexOf(plid);
                    if (y > 0) {
                        var z = o.playlist_dic[Object.keys(o.playlist_dic)[y - 1]];
                        if (z) {
                            if (exist(z.folder)) {
                                z = o.playlist_dic[Object.keys(o.playlist_dic)[y - 2]]
                            }
                            if (z) {
                                this.openById(z.id);
                                o.actions.Play()
                            }
                        }
                    }
                }
                else {
                    Action(x, 0);
                    ScrollTo(x)
                }
            }
        };
        this.PlaylistHere = function () {
            if (plx > 0) {
                ScrollTo(plx)
            }
        };

        function f2i(x, i) {
            return f2action[i].indexOf(x)
        };

        function FindPlStart(x) {
            if (x['pjs_parent_i'] != -1) {
                FindPlStart(o.playlist_dic[x['pjs_parent']]);
                UpdatePlaylist(x['pjs_parent'])
            }
            else {
                UpdatePlaylist(0)
            }
        };
        this.g = function (x) {
            switch (x) {
                case "width":
                    return Width();
                    break;
                case "height":
                    return container.offsetHeight;
                    break;
                case "top":
                    return style.margintop;
                    break;
                case "scroll_height":
                    return control.scrollHeight;
                    break;
                case "margin_bottom":
                    return style.marginbottom;
                    break;
                case "x":
                    return int(container.style.left);
                    break;
                case "y":
                    return int(container.style.top);
                    break;
                case "opacity":
                    return container.style.opacity;
                    break;
                case "show":
                    return is_visible;
                    break;
                case "open":
                    return open_settings;
                    break;
                case "key":
                    return key;
                    break;
                case "motion_id":
                    return key + motion_id;
                    break;
                case "empty":
                    return empty;
                    break;
                case "playlist":
                    return is == "playlist";
                    break;
                case "activeicon":
                    return _activeIcon;
                    break;
                case "butplstart":
                    return o.playlist_dic[o.butplstart] ? o.playlist_dic[o.butplstart].title : '';
                case "title2":
                    return v.title2 ? v.title2 : ''
            }
        };
        this.prenewpl = function () {
            plid = '';
            v.plstart = ''
        };
        this.empty = function () {
            if (is == "settings") {
                var x = 0;
                for (var i = 1; i < 11; i++) {
                    if (faction[i] == "quality") {
                        var y = o.files_quality.length;
                        if (exist(v.forbidden_quality)) {
                            var z = v.forbidden_quality.split(",");
                            for (var j = 0; j < z.length; j++) {
                                if (o.files_quality.indexOf(z[j]) > -1) {
                                    y--
                                }
                            }
                        }
                        if (y > 0) {
                            if (y > 1 || (y == 1 && o.files_quality != 1 && style.show1value == 1)) {
                                x++
                            }
                        }
                    }
                    if (faction[i] == "airplay") {
                        if (o.airplay) {
                            x++
                        }
                    }
                    if (faction[i] == "download") {
                        if (o.file_type == 'native' || v.download) {
                            x++
                        }
                    }
                    if (faction[i] == "audiotrack") {
                        if (o.files_audiotrack.length > 0) {
                            x++
                        }
                    }
                    if (faction[i] == "channel" && v.channels == 1) {
                        if (o.files_channel.length > 0) {
                            x++
                        }
                    }
                    if (faction[i] == "subtitle") {
                        if (exist(o.subs)) {
                            for (var s = 0; s < o.subs.length; s++) {
                                if (o.subs[s] != '') {
                                    x++;
                                    break
                                }
                            }
                        }
                        if (x == 1 && o.subload == 1) {
                            x = 0
                        }
                        if (v.sub_upload == 1 && v.sub_upload0 == 1) {
                            x++
                        }
                    }
                    if (faction[i] == "speed") {
                        if (o.file_type != "vimeo") {
                            x++
                        }
                    }
                    if (faction[i] in o.menuproc || faction[i] == "share" || faction[i] == "color") {
                        x++
                    }
                    if (faction[i]) {
                        if (faction[i].indexOf("timer") > 0) {
                            x++
                        }
                    }
                    if (v.settings[is + i + 'hide'] == 1) {
                        x--
                    }
                }
                return x == 0
            }
            else if (is == "playlist") {
                return f.length == 0
            }
            else {
                return empty
            }
        };
        this.Remove = function () {
            if (container.parentNode == o.frame) {
                container.removeChild(control);
                o.frame.removeChild(container);
                o.droplist ? o.droplist.Remove() : '';
                container = null;
                control = null;
                removed = true
            }
        }
    };
    var PluginShare = function (url) {
        var control;
        var icon;
        var answer;
        var created = false;
        var open = false;
        var clr = v.shareclred == 1 && exist(v.sharecolor) ? CheckColor(v.sharecolor) : "#ffffff";
        var bgclr = v.shareclred == 1 && exist(v.sharebgcolor) ? CheckColor(v.sharebgcolor) : "#000000";
        var sh = [];
        var other = ["whatsapp", "viber", "telegram", "reddit", "webshare", "tumblr", "pinterest", "ok"];
        for (var i = 1; i <= 15; i++) {
            if (exist(v["share" + i])) {
                AddPlgn(v["share" + i])
            }
        }
        if (!exist(v.share1)) {
            v.share1 = "facebook"
        }
        if (!exist(v.share2)) {
            v.share2 = "twitter"
        }
        if (!exist(v.share3)) {
            if (v.lang == "ru") {
                v.share3 = "vk"
            }
            if (v.lang == "en") {
                v.share3 = "google"
            }
        }
        if (exist(v.embed)) {
            v.share15 = "embed"
        }
        if (exist(v.url)) {
            v.share16 = "url"
        }
        this.Show = function () {
            if (!created) {
                control = createElement("div");
                Pos0(control);
                css(control,
                    {
                        "background": hex2rgb(bgclr, 0.8),
                        "color": clr
                    });
                control.style.zIndex = "2000";
                var close = createElement("div");
                css(close,
                    {
                        "position": "absolute",
                        "top": 15,
                        "right": 15,
                        "cursor": "pointer",
                        "padding": 5
                    });
                close.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><path d='M16.5,3.5 L3.5,16.5 L16.5,3.5 Z' stroke='" + clr + "' stroke-width='3' stroke-linecap='square'></path><path d='M3.5,3.5 L16.5,16.5 L3.5,3.5 Z' stroke='" + clr + "' stroke-width='3' stroke-linecap='square'></path></g></svg>";
                if (o.system.mobile) {
                    close.addEventListener("touchend", function (event) {
                        Close()
                    })
                }
                else {
                    close.onclick = Close
                }
                close.style.zIndex = 10;
                var icons = createElement("div");
                css(icons,
                    {
                        "position": "absolute",
                        "top": ((v.sharetop * 100) + '%'),
                        "left": 0,
                        "width": "100%",
                        "text-align": "center",
                        "color": clr
                    });
                icons.innerHTML = (v.sharetitle == 1 ? Lang("share") + '<br><br>' : '') + (exist(v.url) ? '<a href="' + v.url + '" style="text-decoration:none;color:' + clr + ';outline:0;white-space: nowrap;letter-spacing:1px;display:block" target="_blank" id="pjs_share_link_' + v.id + '">' + v.url + '</a>' : '');
                o.frame.appendChild(control);
                control.appendChild(close);
                control.appendChild(icons);
                css(o.container,
                    {
                        '-webkit-user-select': 'auto'
                    });
                if (exist(v.url)) {
                    SelectText("pjs_share_link_" + v.id)
                }
                icon = [];
                var svg;
                for (var i = 1; i <= 15; i++) {
                    if (exist(v["share" + i])) {
                        svg = IconSVG(v["share" + i]);
                        if (v["share" + i] != "" && svg && svg != '') {
                            icon[i] = createElement("div");
                            css(icon[i],
                                {
                                    "display": "inline-block",
                                    "cursor": "pointer"
                                });
                            var m = ((v.shareiconscale * 20 - 20) + v.shareiconmargin * 1) / 2;
                            var mlr = 0;
                            if (v["share" + i] == "vk" || v["share" + i] == "embed") {
                                mlr = v.shareiconscale * 3
                            }
                            css(icon[i],
                                {
                                    "margin-left": m + mlr,
                                    "margin-right": m + mlr,
                                    "margin-top": m + 20,
                                    "width": 20,
                                    "height": 20
                                });
                            icon[i].innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g>" + svg + "</g></svg>";
                            icons.appendChild(icon[i]);
                            scale(i, v.shareiconscale);
                            icon[i].i = "i" + i;
                            icon[i].onmouseover = onOver;
                            icon[i].onmouseout = onOut;
                            icon[i].onclick = onClick
                        }
                    }
                }
                answer = createElement("div");
                css(answer,
                    {
                        "display": "block",
                        "width": "100%",
                        "text-align": "center",
                        "margin-top": m + 15
                    });
                icons.appendChild(answer);
                created = true
            }
            else {
                show2(control);
                css(o.container,
                    {
                        '-webkit-user-select': 'auto'
                    });
                if (exist(v.url)) {
                    SelectText("pjs_share_link_" + v.id)
                }
            }
            if (o.play) {
                o.noads = true;
                o.actions.Pause()
            }
            open = true
        };

        function Close() {
            if (o.noads) {
                o.actions.Play()
            }
            Hide()
        }

        function Hide() {
            if (exist(control)) {
                hide2(control);
                o.noads = false;
                open = false;
                answer.innerHTML = '';
                css(o.container,
                    {
                        '-webkit-user-select': 'none'
                    })
            }
        }
        this.Hide = function () {
            Hide()
        };

        function onOver() {
            if (exist(this.i)) {
                var i = this.i.substr(1) * 1;
                if (v.shareiconscaleover > -1) {
                    scale(i, v.shareiconscaleover)
                }
            }
        }

        function onOut() {
            if (exist(this.i)) {
                var i = this.i.substr(1) * 1;
                if (v.shareiconscaleover > -1) {
                    scale(i, v.shareiconscale)
                }
            }
        }

        function onClick(e) {
            if (exist(this.i)) {
                var i = this.i.substr(1) * 1;
                ClickAction(v["share" + i])
            }
        }
        this.api = function (x) {
            if (x.indexOf("url") > -1) {
                if (v[x]) {
                    var y = v[x].replace("{time}", parseInt(o.media.time()));
                    copy(y);
                    o.alert.txt(Lang("copied"), 2)
                }
            }
            ClickAction(x, true)
        };

        function AddPlgn(x) {
            if (url(x) == '') {
                try {
                    sh[x] = eval('new PluginShare_' + x + '()')
                }
                catch (e) { }
            }
        }

        function ClickAction(y, z) {
            var x = url(y);
            if (other.indexOf(y) > -1) {
                if (sh[y]) {
                    x = sh[y].share()
                }
            }
            if (y == "embed" && exist(v.embed)) {
                if (exist(v.embedvars)) {
                    v.embedvars = v.embedvars.replace(/pjs'qt/ig, '"')
                }
                copy((exist(v.embedhtmlstart) ? v.embedhtmlstart.replace(/pjs'qt/ig, '"') : '') + '<iframe width="' + (v.embedsize == 1 ? v.embedwidth : parseInt(o.normal_w)) + '" height="' + (v.embedsize == 1 ? v.embedheight : parseInt(o.normal_h)) + '" src="' + v.embed + '" frameborder="0" allowfullscreen' + (exist(v.embedvars) ? ' ' + v.embedvars : '') + '></iframe>' + (exist(v.embedhtmlend) ? v.embedhtmlend.replace(/pjs'qt/ig, '"') : ''));
                if (z) {
                    o.alert.txt(Lang("copied"), 2)
                }
                else {
                    answer.innerHTML = Lang("copied");
                    if (exist(v.url)) {
                        SelectText("pjs_share_link_" + v.id)
                    }
                }
            }
            x != '' ? Pop(x, 'Share', 500, 500) : ''
        }

        function url(y) {
            var x = '';
            if (y == "facebook") {
                x = "https://www.facebook.com/sharer/sharer.php?u="
            }
            if (y == "twitter") {
                x = "https://twitter.com/intent/tweet?url="
            }
            if (y == "google") {
                x = "https://plus.google.com/share?url="
            }
            if (y == "vk") {
                x = "https://vk.com/share.php?url="
            }
            return x
        }

        function scale(i, x) {
            css(icon[i],
                {
                    "transform-origin": '50% 50% 0px'
                });
            css(icon[i],
                {
                    "transform": "scale(" + x + ")",
                    "transition": "transform 0.1s linear"
                })
        }

        function Pop(url, title, winWidth, winHeight) {
            var winTop = (screen.height / 2) - (winHeight / 2);
            var winLeft = (screen.width / 2) - (winWidth / 2);
            window.open(url + encodeURIComponent(exist(v.url) ? v.url : o.href), 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight)
        }

        function SelectText(element) {
            var doc = document,
                text = doc.getElementById(element),
                range, selection;
            if (text) {
                if (doc.body.createTextRange) {
                    range = document.body.createTextRange();
                    range.moveToElementText(text);
                    range.select()
                }
                else if (window.getSelection) {
                    selection = window.getSelection();
                    range = document.createRange();
                    range.selectNodeContents(text);
                    selection.removeAllRanges();
                    selection.addRange(range)
                }
            }
        }

        function IconSVG(x, cl) {
            if (x == "facebook") {
                return "<path d='M14,6.87798468 L11.616046,6.87798468 L11.616046,5.31446009 C11.616046,4.72728083 12.005212,4.59038667 12.2793122,4.59038667 L13.9616447,4.59038667 L13.9616447,2.00904312 L11.6447345,2 C9.0727459,2 8.48743763,3.92524947 8.48743763,5.15729686 L8.48743763,6.87798468 L7,6.87798468 L7,9.53790984 L8.48743763,9.53790984 L8.48743763,17.0645937 L11.616046,17.0645937 L11.616046,9.53790984 L13.7271472,9.53790984 L14,6.87798468 Z' fill='" + (cl ? cl : clr) + "' fill-rule='nonzero'></path>"
            }
            if (x == "twitter") {
                return "<path d='M7.90342661,15.0933314 C12.5898759,15.0933314 15.153204,11.209383 15.153204,7.84355402 C15.153204,7.73447623 15.153204,7.62539844 15.1454127,7.51242501 C15.644054,7.15013093 16.0725739,6.7060285 16.4153898,6.19180463 C15.9518092,6.3982733 15.4570635,6.53462054 14.950631,6.59305507 C15.484333,6.27361297 15.8816878,5.77497165 16.0725739,5.18283508 C15.5739326,5.47890336 15.024648,5.68926767 14.4558853,5.8022411 C13.4897677,4.777689 11.8769747,4.72704574 10.8524226,5.69316331 C10.1901646,6.31646496 9.90967882,7.24362617 10.1161475,8.1279354 C8.0670433,8.02664888 6.15818198,7.05663568 4.86483105,5.46721646 C4.1869905,6.63201142 4.53370204,8.12014413 5.65174939,8.86810611 C5.24660331,8.85641921 4.84924851,8.74734142 4.49474569,8.54866401 L4.49474569,8.5798291 C4.49474569,9.79137169 5.35178546,10.835402 6.53995424,11.0769314 C6.16597325,11.1782179 5.77251408,11.1938004 5.39074182,11.1197833 C5.72576646,12.1560223 6.68019712,12.8689236 7.77097501,12.8884018 C6.86718761,13.5974074 5.7530359,13.9830753 4.60771911,13.9830753 C4.40514608,13.9830753 4.20257304,13.9713884 4,13.9480146 C5.16089933,14.6959766 6.51658043,15.0933314 7.90342661,15.0933314' fill='" + (cl ? cl : clr) + "' fill-rule='nonzero'></path>"
            }
            if (x == "google") {
                return "<path d='M10.0259804,8.81389961 L10.0259804,11.1907336 C10.0259804,11.1907336 12.3404412,11.1861004 13.2857843,11.1861004 C12.7735294,12.7243243 11.9818627,13.5629344 10.0259804,13.5629344 C8.04681373,13.5629344 6.50539216,11.969112 6.50539216,10 C6.50539216,8.03088803 8.05147059,6.43706564 10.0259804,6.43706564 C11.0737745,6.43706564 11.7490196,6.8030888 12.3683824,7.31274131 C12.8666667,6.81698842 12.8247549,6.74749035 14.0867647,5.56138996 C13.0156863,4.59305019 11.5906863,4 10.0306373,4 C6.70098039,4 4,6.68725869 4,10 C4,13.3127413 6.70098039,16 10.0306373,16 C15.0088235,16 16.2242647,11.6864865 15.8191176,8.81389961 L10.0259804,8.81389961 Z' fill='" + (cl ? cl : clr) + "' fill-rule='nonzero'></path>"
            }
            if (x == "vk") {
                return "<path d='M18.927,13.749c-0.404-0.825-1.079-1.521-1.782-2.104h-0.012c-0.371-0.358-0.619-0.606-0.718-0.729 c-1.075-1.356,3.121-3.642,2.562-5.222l-0.05-0.087c-0.446-0.593-3.051-0.21-3.675-0.136c-0.073,0.033-0.127,0.077-0.186,0.136 c-0.962,1.291-1.164,2.901-2.426,3.997c-0.099,0.074-0.173,0.111-0.234,0.099c-0.05-0.012-0.1-0.025-0.148-0.037 c-0.963-0.546-0.054-3.303-0.396-4.219c-0.037-0.086-0.099-0.161-0.186-0.21c-0.074-0.049-0.174-0.086-0.297-0.124 c-1.102-0.18-2.203-0.146-3.304,0.099C7.952,5.273,7.84,5.36,7.741,5.472C7.63,5.595,7.618,5.669,7.692,5.682 c0.358,0.05,0.606,0.186,0.754,0.384C8.759,7.021,8.998,8.54,8.483,9.468C8.434,9.58,8.397,9.641,8.372,9.666 C8.36,9.691,8.335,9.703,8.323,9.715C8.135,9.802,7.958,9.777,7.791,9.641C7.667,9.555,7.556,9.443,7.419,9.307 C6.629,8.357,6.06,7.026,5.588,5.892c-0.05-0.124-0.124-0.223-0.21-0.285C5.261,5.534,5.13,5.474,4.994,5.447L2.569,5.459 c-0.248,0-0.421,0.062-0.507,0.173L2.025,5.682C1.984,5.806,1.993,5.93,2.049,6.053c1.343,3.101,3.321,7.416,6.966,8.439 c0.676,0.187,1.577,0.177,2.301,0.148c0.211-0.013,0.359-0.087,0.471-0.198l0.037-0.05c0.025-0.037,0.05-0.086,0.062-0.16 c0.149-0.455,0.022-0.938,0.247-1.387c0.062-0.099,0.124-0.186,0.186-0.26c0.059-0.078,0.133-0.127,0.223-0.148 c0.786-0.282,2.035,1.913,2.896,2.203C15.941,14.808,19.585,15.092,18.927,13.749C18.902,13.699,18.951,13.799,18.927,13.749z' fill='" + (cl ? cl : clr) + "' fill-rule='nonzero'/></path>"
            }
            if (other.indexOf(x) > -1) {
                if (!sh[x]) {
                    AddPlgn(x)
                }
                return sh[x] ? sh[x].icon((cl ? cl : clr)) : ''
            }
            if (x == "embed" || x == "url") {
                return "<path d='M7.33571875,13.976 L1,10.6265714 L1,9.16114286 L7.33571875,5.798 L7.33571875,7.694 L2.90490625,9.91628571 L7.33571875,12.0785714 L7.33571875,13.976 Z M12.1411563,4 L9.4526875,16 L7.883875,16 L10.5723438,4 L12.1411563,4 Z M17.0956563,9.91628571 L12.6642813,7.69428571 L12.6642813,5.79828571 L19,9.16114286 L19,10.6265714 L12.6642813,13.976 L12.6642813,12.0785714 L17.0956563,9.91628571 Z' fill='" + (cl ? cl : clr) + "' fill-rule='nonzero'></path>"
            }
        }

        function copy(x) {
            var textArea = document.createElement('textarea');
            textArea.setAttribute('style', 'width:1px;border:0;opacity:0;');
            document.body.appendChild(textArea);
            textArea.value = x;
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea)
        };
        this.icon = function (x, z, cl) {
            var y = IconSVG(x, cl);
            return y ? "<svg width='10' height='10' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' style='transform:scale(" + z + ");margin:0 5px 3px 0;display:inline-block'><g>" + y + "</g></svg>" : ""
        };
        this.empty = function () {
            var x = true;
            for (var i = 1; i <= 15; i++) {
                if (exist(v["share" + i])) {
                    if (v["share" + i] != "") {
                        x = false
                    }
                }
                else {
                    i < 4 ? x = false : ''
                }
            }
            if (exist(v["embed"])) {
                v["embed"] != '' ? x = false : ''
            }
            if (exist(v["url"])) {
                v["url"] != '' ? x = false : ''
            }
            return x
        };
        this.Remove = function () {
            if (created) {
                o.frame.removeChild(control);
                control = null;
                created = false
            }
        };
        this.isOpen = function () {
            return open
        }
    };

    function PluginShare_telegram() {
        this.share = function () {
            return "https://t.me/share/url?url="
        };
        this.icon = function (clr) {
            return "<path d='M15.774328,4.61928677 C15.6001007,4.47186369 15.3186567,4.45846159 14.8361812,4.60588467 L14.8361812,4.60588467 C14.5011287,4.71310145 11.525863,5.83887768 8.89905178,6.92444761 C6.54028255,7.90280076 4.62378254,8.76053503 4.39594688,8.86775181 C4.14130702,8.9481644 3.591821,9.18940216 3.56501681,9.5646609 C3.55161471,9.80589866 3.75264618,10.0203322 4.14130702,10.1945595 C4.55677205,10.4089931 6.39285947,11.0254896 6.78152031,11.1461085 C6.91554129,11.6017798 13.4557651,6.66394451 13.4959714,6.82476969 C13.5495798,7.06600745 8.27203981,11.6399635 8.3524524,11.6935719 C8.3658545,11.706974 7.97987656,14.3468113 8.00668076,14.3602134 C8.04688705,14.3870176 8.0174202,14.6306539 8.13718414,14.7378707 C8.25694808,14.8450875 8.2536879,14.8345227 8.51661242,14.8345227 C9.01249004,14.4324598 9.91761122,13.545084 10.158849,13.2904441 C11.2176147,14.1213742 12.3701951,15.046119 12.4774119,15.1533357 L12.490814,15.1667378 C12.7454539,15.3811714 13.0134958,15.5017903 13.2547336,15.5017903 C13.3351462,15.5017903 13.4155588,15.4883882 13.4959714,15.461584 C13.7774154,15.3677693 13.9784469,15.0997273 14.0454574,14.7378707 C14.0454574,14.7244686 14.0588595,14.6708602 14.0856637,14.5770455 C14.541335,12.593535 14.9031916,10.8512623 15.1980378,9.39043363 C15.4794819,7.95640915 15.7073175,6.54918887 15.8413385,5.79867139 C15.8681427,5.61104201 15.8949469,5.46361894 15.908349,5.36980425 C15.9485553,5.10176229 15.9753595,4.79351404 15.774328,4.61928677 Z' fill='" + clr + "' fill-rule='nonzero'></path>"
        }
    };

    function PluginShare_reddit() {
        this.share = function () {
            return "https://reddit.com/submit?url="
        };
        this.icon = function (clr) {
            return "<path d='M14.1160742,8.43107715 C14.4501406,8.08469141 14.912498,7.8664834 15.4390293,7.8664834 C16.4407471,7.8664834 17.25,8.67488672 17.25,9.67589648 C17.25,10.3558955 16.8774746,10.9466006 16.3124277,11.2543008 C16.3380859,11.4086182 16.350915,11.5624541 16.350915,11.7163467 C16.350915,14.0905518 13.4997393,16.015625 10.0065137,16.015625 C6.5000625,16.015625 3.64908496,14.0905518 3.64908496,11.7163467 C3.64908496,11.5624824 3.66191406,11.4086182 3.68757227,11.2543008 C3.13518457,10.9466006 2.75,10.3558955 2.75,9.67589648 C2.75,8.67488672 3.55902637,7.8664834 4.56074414,7.86645508 C5.08750195,7.86645508 5.56249023,8.08466309 5.88369922,8.43104883 C6.88541699,7.8536543 8.144,7.49418457 9.51827148,7.4172666 L10.4812754,4.54252832 C10.5587314,4.31151953 10.8025127,4.18308691 11.033918,4.26023145 L13.4355938,4.95305957 C13.7178906,4.52972754 14.2059062,4.234375 14.7580957,4.234375 C15.6314941,4.234375 16.3509434,4.94023047 16.350915,5.82583496 C16.350915,6.69861035 15.6314658,7.40446582 14.7580674,7.40446582 C13.8850937,7.40446582 13.178502,6.69861035 13.178502,5.82583496 L11.2007246,5.24841211 L10.4684463,7.41729492 C11.8555752,7.49421289 13.1143564,7.8536543 14.1160742,8.43107715 Z M7.46329297,13.3849229 C8.1311709,13.9110859 9.15877344,14.2064102 10.006542,14.2064102 C10.8410283,14.2064102 11.8812334,13.9110576 12.5493379,13.3849229 C12.7418311,13.2306338 12.7803467,12.9485635 12.6263408,12.7557871 C12.4723633,12.5506064 12.1896416,12.5249482 11.9971768,12.6788408 C11.4706455,13.0767412 10.6485635,13.2951475 10.006542,13.2951475 C9.3512666,13.2951475 8.52941113,13.0767412 8.01570898,12.6788408 C7.82301758,12.5249766 7.52766504,12.5506064 7.38629004,12.7557871 C7.23211426,12.9485635 7.25799902,13.2306338 7.46329297,13.3849229 Z M7.73318555,10.1251133 C7.23211426,10.1251133 6.83410059,10.5358428 6.83410059,11.0363477 C6.83410059,11.5368242 7.23211426,11.9347812 7.73318555,11.9347812 C8.23405859,11.9347812 8.64487305,11.5368242 8.64487305,11.0363477 C8.64487305,10.5358428 8.23405859,10.1251133 7.73318555,10.1251133 Z M12.2665879,10.1251133 C11.7657148,10.1251133 11.3675313,10.5358428 11.3675313,11.0363477 C11.3675313,11.5368242 11.7657432,11.9347812 12.2665879,11.9347812 C12.7674893,11.9347812 13.178502,11.5368242 13.178502,11.0363477 C13.178502,10.5358428 12.7674893,10.1251133 12.2665879,10.1251133 Z' fill='" + clr + "' fill-rule='nonzero'></path>"
        }
    };

    function PluginShare_tumblr() {
        this.share = function () {
            return "https://tumblr.com/share/link?url="
        };
        this.icon = function (clr) {
            return "<path d='M14.0120749,13.115337 C13.9312752,13.0717372 13.8328756,13.0759872 13.7561259,13.126487 C13.1751281,13.5083855 12.5861304,13.7020348 12.0053326,13.7020348 C11.6932338,13.7020348 11.4250849,13.632335 11.1845358,13.4882856 C11.0210364,13.3914859 10.869137,13.2222366 10.8146872,13.0751372 C10.7618374,12.9352877 10.7624374,12.5587892 10.7632374,12.0377412 L10.7634874,8.86060338 L13.4032273,8.86060338 C13.5413267,8.86060338 13.6532263,8.74865381 13.6532263,8.61060434 L13.6532263,6.37821292 C13.6532263,6.24016345 13.5413267,6.12821388 13.4032273,6.12821388 L10.7634874,6.12821388 L10.7634874,3.48812404 C10.7634874,3.35007457 10.6515879,3.238125 10.5134884,3.238125 L8.73519522,3.238125 C8.60879571,3.238125 8.50229612,3.33247464 8.48699618,3.45797415 C8.41269646,4.0694218 8.274097,4.57711985 8.07464776,4.96776835 C7.88014851,5.35276687 7.61699952,5.68781558 7.29210077,5.96401452 C7.03180177,6.18601366 6.58620349,6.40081284 5.96760587,6.60246206 C5.86470626,6.63601193 5.79510653,6.73191156 5.79510653,6.84016115 L5.79510653,8.61065434 C5.79510653,8.74870381 5.9070061,8.86065337 6.04510557,8.86065337 L7.49275,8.86065337 L7.49275,12.9939375 C7.49275,13.6029851 7.55734975,14.0612834 7.69034924,14.3952321 C7.82584872,14.7344808 8.0663978,15.0539296 8.40549649,15.3448784 C8.73904521,15.6306773 9.14499365,15.8542265 9.61339185,16.0097759 C10.0674901,16.1578753 10.4291387,16.238125 11.0389364,16.238125 C11.5544344,16.238125 12.0457825,16.1846752 12.4995807,16.0791756 C12.945629,15.975076 13.4504271,15.7911267 13.999975,15.5324777 C14.0876246,15.4912279 14.1435244,15.4031282 14.1435244,15.3062786 L14.1435244,13.3354362 C14.1434244,13.2434865 14.0930246,13.1589868 14.0120749,13.115337 Z' fill='" + clr + "' fill-rule='nonzero'></path>"
        }
    };
    var MediaYoutube = function (url, parentcontainer) {
        var intro = false;
        if (url.indexOf('intro') == 0) {
            intro = true;
            url = url.substr(5)
        }
        var youtube_id = YoutubeID(url);
        var error;
        var player;
        var created = false;
        var ready = false;
        var started = false;
        var vastonmobile = false;
        var auto = true;
        var _set_quality = [];
        var _speed = 1;
        var _wait = false;
        var startwait_t;
        var _start = 0;
        var _readyonplay = 0;
        var quality_received = false;
        var container_id = 'pljs_yt_' + v.id + (intro ? 'intro' : '');
        pushCSS("#pljs_yt_" + v.id + "{width:100%!important;height:100%!important;max-width:none!important;max-height:none!important}");
        var container = createElement('div');
        container.setAttribute('id', container_id);
        parentcontainer.appendChild(container);
        o.airplay = false;
        !intro ? o.actions.AirplayChanged() : '';
        if (o.system.mobile) {
            v.preload = 1
        }
        if (v.youtubecontrols != 1) {
            var layer = createElement('div');
            parentcontainer.appendChild(layer);
            css(layer,
                {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    "background-color": "#ff0000",
                    height: "100%",
                    width: "100%",
                    "opacity": 0
                });
            layer.addEventListener("dblclick", function (event) {
                event.cancelBubble = true
            });
            if (o.system.mobile) {
                layer.addEventListener("touchstart", function (event) {
                    event.cancelBubble = true
                });
                layer.addEventListener("click", function (event) {
                    event.cancelBubble = true
                });
                layer.addEventListener("touchend", function (event) {
                    event.cancelBubble = true;
                    ScreenClick(event);
                    if (v.screenclick == 1) {
                        setTimeout(HideLayer, 100);
                        setTimeout(ShowLayer, 1000)
                    }
                })
            }
            else {
                layer.addEventListener("mousemove", function (event) {
                    var x = true;
                    if (v.vast == 1) {
                        if (exist(v.preroll) && !started) {
                            x = false
                        }
                        if (exist(v.playroll) && Status() == "paused" && time() > 0) {
                            x = false
                        }
                    }
                    if (x && v.screenclick == 1 && v.ytcl != 1) {
                        hide2(this);
                        setTimeout(ShowLayer, 2000)
                    }
                })
            }
            v.screenclick == 1 && v.ytcl1 != 1 ? hide2(layer) : ''
        }

        function ShowLayer() {
            show2(layer)
        }

        function HideLayer() {
            if (v.ytcl != 1) {
                hide2(layer)
            }
        }
        if (v.preload == 1 && v.autoplay == 0) {
            onWaiting()
        }
        if (!window['YT']) {
            window.onYouTubeIframeAPIReady = function () {
                YouTubeIframeAPIReady();
                for (var i = 0; i < pljssglobal.length; i++) {
                    if (pljssglobal[i]) {
                        if (pljssglobal[i].api("id") != v.id) {
                            if (pljssglobal[i].api('isyoutube')) {
                                pljssglobal[i].api('youtubeready')
                            }
                        }
                    }
                }
            };
            var scrpt = Script("youtube.com/iframe_api", "youtube.com/iframe_api", "youtube_iframe_api");
            if (scrpt) {
                scrpt.onerror = function (e) {
                    o.actions.MediaReady();
                    if (v.yterrors != 1) {
                        error = 'YouTube API Error';
                        o.media.onError()
                    }
                }
            }
        }
        else {
            YouTubeIframeAPIReady()
        }

        function YouTubeIframeAPIReady() {
            if (v.preload == 1 || intro) {
                !created ? YtInit() : ''
            }
            else {
                o.actions.MediaReady()
            }
        }

        function YtInit() {
            if ("YT" in window) {
                if (exist(YT.Player) && !created) {
                    log("Youtube Init");
                    var cntrls = 0;
                    if (v.youtubecontrols == 1) {
                        cntrls = 1
                    }
                    o.seekto > 0 ? _start = parseInt(o.seekto) : '';
                    player = new YT.Player(container_id,
                        {
                            height: o.container_h,
                            width: o.container_w,
                            videoId: youtube_id,
                            playerVars:
                            {
                                enablejsapi: 1,
                                playerapiid: container_id,
                                html5: 1,
                                disablekb: 1,
                                autohide: 1,
                                playsinline: ((v.playsinlineonmobile == 0 || (v.playsinlineonmobileiphone != 1 && o.system.iphone)) && o.system.mobile ? 0 : 1),
                                iv_load_policy: 3,
                                controls: cntrls,
                                showinfo: 0,
                                modestbranding: 1,
                                rel: 0,
                                autoplay: intro ? 1 : 0,
                                loop: 0
                            },
                            events:
                            {
                                'onReady': onYtPlayerReady,
                                'onStateChange': onYtPlayerStateChange,
                                'onError': onError,
                                'onPlaybackQualityChange': onQualityChanged
                            }
                        });
                    if (o.seekto > 0) {
                        o.seekto = undefined
                    }
                    Resize();
                    created = true
                }
                else {
                    setTimeout(YtInit, 500)
                }
            }
            else {
                setTimeout(YtInit, 500)
            }
        }
        var _play_i;

        function onYtPlayerReady() {
            if (o.media) {
                log("Youtube Ready");
                ready = true;
                clearTimeout(startwait_t);
                o.actions.StopWaiting();
                if (intro) {
                    if (o.system.mutedautoplay) {
                        o.actions.Mute()
                    }
                    player.playVideo();
                    o.vast.ytReady()
                }
                else {
                    if (v.autoplay == 1 && o.system.mutedautoplay && !o.acted) {
                        o.actions.Mute();
                        if (o.system.mobile) {
                            clearInterval(_play_i);
                            _play_i = setInterval(PlayingChecker, 300)
                        }
                    }
                    if (v.preload == 0) {
                        player.playVideo()
                    }
                    else {
                        o.actions.MediaReady()
                    }
                    o.media.onDuration();
                    if (_speed != 1) {
                        SetSpeed(_speed)
                    }
                    onMeta();
                    Resize();
                    if (v.yttitle == 1) {
                        try {
                            if (player.getVideoData()) {
                                if (exist(player.getVideoData().title)) {
                                    v.title = player.getVideoData().title;
                                    o.actions.Title('title')
                                }
                            }
                        }
                        catch (e) { }
                    }
                }
            }
        }

        function PlayingChecker() {
            var x = player.getPlayerState();
            if (x == 2 || x == -1) {
                o.controls.Pause();
                o.controls.StopWaiting();
                clearInterval(_play_i)
            }
            if (x == 1) {
                clearInterval(_play_i)
            }
        }

        function onYtPlayerStateChange(event) {
            if (v.ytlog == 1) {
                log('YT', event.data)
            }
            if (intro) {
                if (event.data == YT.PlayerState.ENDED) {
                    o.vast.ytEnded()
                }
                if (event.data == YT.PlayerState.PLAYING) { }
            }
            else {
                if (event.data == YT.PlayerState.PLAYING) {
                    if (_readyonplay == 1) {
                        _readyonplay = 0;
                        onYtPlayerReady()
                    }
                    if (!o.play) {
                        o.actions.Play()
                    }
                    if (_start > 0) {
                        player.seekTo(_start, true);
                        _start = 0;
                        o.seekto = undefined
                    }
                    ShowLayer();
                    started = true;
                    ready = true;
                    if (vastonmobile) {
                        player.pauseVideo()
                    }
                    else {
                        o.media.onPlay();
                        o.media.onTimeupdate()
                    }
                    Qualities();
                    if (exist(v.default_quality)) {
                        for (var i = 0; i < o.files_quality.length; i++) {
                            if (v.default_quality == o.files_quality[i]) {
                                SetQuality(i)
                            }
                        }
                        v.default_quality = null
                    }
                    else {
                        if (exist(o.default_quality)) {
                            for (var i = 0; i < o.files_quality.length; i++) {
                                if (o.default_quality == o.files_quality[i]) {
                                    SetQuality(i)
                                }
                            }
                            o.default_quality = null
                        }
                    }
                    _wait = false
                }
                if (event.data == -1 && _wait && o.play) {
                    o.actions.StopWaiting();
                    _wait = false;
                    onPause()
                }
                if (event.data == YT.PlayerState.PAUSED) { }
                if (event.data == YT.PlayerState.ENDED) {
                    onEnded()
                }
                if (event.data == YT.PlayerState.BUFFERING) {
                    if (!o.play) { }
                    if (o.play) {
                        _wait = true;
                        onWaiting()
                    }
                }
                if (event.data == YT.PlayerState.CUED) { }
            }
        }

        function onError(event) {
            if (intro) {
                o.vast.ytError()
            }
            else {
                if (event.data == 2) {
                    error = "wrong youtube id"
                }
                if (event.data == 5) {
                    error = "network empty"
                }
                if (event.data == 101 || event.data == 150 || event.data == 100) {
                    error = "this video is unavailable"
                }
                if (v.customyterrors == 1) {
                    exist(v.customyterror) ? error = v.customyterror : ''
                }
                if (v.yterrors != 1) {
                    o.media.onError()
                }
                else {
                    hide(o.poster)
                }
            }
        }

        function onEnded() {
            v.start > 0 ? _start = v.start : '';
            o.media.onEnded();
            o.media.onDuration()
        }

        function onPause() {
            if (!o.nopause && o.play) {
                o.actions.Pause()
            }
        }

        function onTimeupdate() {
            o.media.onTimeupdate()
        }

        function onMeta() {
            o.media.onMeta();
            o.actions.LoadedData()
        }

        function onDuration() {
            o.media.onDuration()
        }

        function onVolume() {
            o.media.onVolume()
        }

        function onWaiting() {
            if (o.media) {
                o.media.onWaiting()
            }
            else {
                startwait_t = setTimeout(onWaiting, 100)
            }
        }

        function onQualityChanged(event) {
            SetCurrentQuality(event.data)
        }

        function Qualities() {
            if (!quality_received) {
                var x = player.getAvailableQualityLevels() + '';
                if (x != '' && x != undefined) {
                    o.files_quality = x.split(',');
                    o.files_quality = o.files_quality.reverse();
                    if (v.ytautoquality == 0) {
                        var y = o.files_quality.indexOf('auto');
                        if (y > -1) {
                            o.files_quality.splice(y, 1)
                        }
                    }
                    for (var i = 0; i < o.files_quality.length; i++) {
                        o.files_quality[i] = RenameQualities(o.files_quality[i])
                    }
                    quality_received = true;
                    SetCurrentQuality(player.getPlaybackQuality())
                }
            }
        }

        function SetCurrentQuality(x) {
            o.current_quality = o.files_quality.indexOf(RenameQualities(x + ''));
            o.controls.QualityChanged(o.current_quality)
        }
        this.size = function () {
            return {
                "width": 0,
                "height": 0
            }
        };
        this.src = function (x) {
            youtube_id = YoutubeID(x);
            if (o.seekto > 0) {
                _start = parseInt(o.seekto)
            }
            playById(youtube_id)
        };

        function Status() {
            var state = -1;
            if (ready) {
                state = player.getPlayerState()
            }
            var x = '';
            if (state == -1) {
                x = "paused"
            }
            if (state == 1 || state == 3) {
                x = "playing"
            }
            if (state == 2) {
                x = "paused";
                if (o.play) {
                    o.controls.Pause();
                    o.actions.StopWaiting()
                }
            }
            if (state == 5) {
                x = "paused"
            }
            if (state == 0) {
                x = "ended"
            }
            return x
        }

        function Resize() {
            try {
                if (exist(player)) {
                    player.setSize(o.screen_w, o.screen_h)
                }
            }
            catch (e) {
                log(e)
            }
        }

        function RenameQualities(x) {
            var y = x;
            if (x == "tiny") {
                y = "160p"
            }
            if (x == "small") {
                y = "240p"
            }
            if (x == "medium") {
                y = "360p"
            }
            if (x == "large") {
                y = "480p"
            }
            if (x == "hd720") {
                y = "720p"
            }
            if (x == "hd1080") {
                y = "1080p"
            }
            if (v.nameofyoutubequality == 1) {
                y = Lang(y)
            }
            if (x == "auto") {
                y = Lang("auto")
            }
            _set_quality[y] = x;
            return y
        }

        function time() {
            return ready ? player.getCurrentTime() : 0
        };

        function SetSpeed(x) {
            player ? player.setPlaybackRate(x) : '';
            _speed = x
        };
        this.YoutubeReady = function () {
            YouTubeIframeAPIReady()
        };
        this.Play = function () {
            if (ready) {
                player.playVideo()
            }
            else {
                if (!created) {
                    YtInit()
                }
                else { }
            }
        };
        this.Pause = function () {
            if (ready) {
                player.pauseVideo()
            }
        };
        this.Toggle = function () {
            if (ready) {
                Status() == 'playing' ? player.pauseVideo() : player.playVideo()
            }
        };
        this.Seek = function (x) {
            ready ? player.seekTo(x, true) : ''
        };
        this.tag = function () {
            return false
        };
        this.Mute = function () {
            ready ? player.mute() : ''
        };
        this.Unmute = function () {
            ready ? player.unMute() : ''
        };
        this.Volume = function (x) {
            ready ? player.setVolume(x * 100) : ''
        };
        this.isPlaying = function () {
            return Status() == 'playing'
        };
        this.isLive = function () {
            return false
        };
        this.setQuality = function (x) {
            SetQuality(x)
        };

        function SetQuality(x) {
            if (ready) {
                if (exist(o.files_quality[x])) {
                    var y = _set_quality[o.files_quality[x]];
                    auto = y == 'auto';
                    var z = time();
                    player.setPlaybackQuality(y)
                }
            }
        }
        this.setSpeed = function (x) {
            SetSpeed(x)
        };
        this.ready = function () {
            return ready
        };
        this.status = function () {
            return Status()
        };
        this.time = function () {
            return time()
        };
        this.duration = function () {
            var x = ready ? player.getDuration() : 0;
            if (exist(v.end)) {
                x = v.end
            }
            return x
        };
        this.loaded = function () {
            var x = 0;
            if (ready) {
                x = player.getVideoLoadedFraction() * player.getDuration()
            }
            return x
        };
        this.resize = function () {
            Resize()
        };
        this.errorMessage = function () {
            return error
        };
        this.auto = function () {
            return v.ytautoquality == 1 ? auto : false
        };
        this.playId = function (x) {
            playById(x)
        };

        function playById(x) {
            url = x;
            if (player) {
                _readyonplay = 1;
                player.loadVideoById(x, 0)
            }
        }
        this.BeforeVast = function () {
            if (o.system.mobile && o.system.android) {
                this.Play();
                vastonmobile = true
            }
            else {
                if (Status() == "playing") {
                    this.Pause()
                }
            }
        };
        this.AfterVast = function () {
            vastonmobile = false
        };
        this.nativeControls = function () {
            return true
        };
        this.Remove = function () {
            ready ? player.destroy() : '';
            ready = false;
            quality_received = false;
            try {
                if (container) {
                    parentcontainer.removeChild(container)
                }
                parentcontainer.removeChild(layer)
            }
            catch (e) { }
        }
    };
    var MediaVimeo = function (url, parentcontainer) {
        var _intro = false;
        if (url.indexOf('intro') == 0) {
            _intro = true;
            url = url.substr(5)
        }
        var vimeo_id = VimeoID(url);
        var error;
        var player;
        var _created = false;
        var _ready = false;
        var _started = false;
        var _pauseplease = false;
        var _volume = 0;
        var _videoHeight = 0;
        var _videoWidth = 0;
        var _meta = false;
        var auto = true;
        var _loaded = 0;
        var _duration = 0;
        var _time = 0;
        var _status = "paused";
        var container_id = 'pljs_vimeo_' + v.id + (_intro ? '_intro' : '');
        var container = createElement('div');
        container.setAttribute('id', container_id);
        if (v.vimeomouse != 1) {
            Pnt0(container)
        }
        parentcontainer.appendChild(container);
        o.airplay = false;
        o.actions.AirplayChanged();
        if (!window['Vimeo']) {
            var scrpt = Script("https://player.vimeo.com/api/player.js", "same", "vimeo_pjs_api");
            if (scrpt) {
                waitInterval = setInterval(WaitPlayer, 250)
            }
        }
        else {
            VimeoAPIReady()
        }

        function WaitPlayer() {
            if (window['Vimeo']) {
                clearInterval(waitInterval);
                VimeoAPIReady()
            }
        }

        function VimeoAPIReady() {
            if (!_intro) {
                o.play ? o.media.onWaiting() : ''
            }
            else {
                o.vast.ytWaiting()
            }
            if (v.preload == 1 || _intro) {
                !_created ? Init() : ''
            }
            else {
                o.actions.MediaReady()
            }
        }

        function Init() {
            if ("Vimeo" in window) {
                log("Vimeo Init");
                if (exist(Vimeo.Player) && !_created) {
                    var cntrls = 0;
                    if (v.vimeocontrols == 1) {
                        cntrls = 1
                    }
                    if (!_intro && v.preload == 1 && v.autoplay == 0) {
                        _pauseplease = true
                    }
                    player = new Vimeo.Player(container_id,
                        {
                            url: url,
                            width: parseInt(o.screen_w),
                            height: parseInt(o.screen_h),
                            playsinline: true,
                            background: true,
                            byline: false,
                            autoplay: false,
                            autopause: false,
                            loop: false,
                            title: false
                        });
                    if (!_intro) {
                        player.on("play", onPlay);
                        player.on("pause", onPause);
                        player.on("progress", onProgress)
                    }
                    player.on("bufferstart", onWaiting);
                    player.on("bufferend", onWaited);
                    player.on("timeupdate", onTime);
                    player.on("error", onError);
                    player.ready().then(function () {
                        PlayerReady()
                    });
                    Resize();
                    _created = true
                }
            }
            else {
                setTimeout(Init, 500)
            }
        }

        function PlayerReady() {
            log("Vimeo Ready");
            _ready = true;
            var frame = container.querySelector('iframe');
            if (_intro) { }
            else {
                if (v.autoplay == 1 && o.system.mutedautoplay && !o.acted) {
                    o.actions.Mute()
                }
                o.actions.MediaReady()
            }
        }

        function VideoSize() {
            player.getVideoWidth().then(function (x) {
                _videoWidth = x;
                _videoHeight > 0 ? PlayerSize() : ''
            }).catch(function (error) { });
            player.getVideoHeight().then(function (x) {
                _videoHeight = x;
                _videoWidth > 0 ? PlayerSize() : ''
            }).catch(function (error) { })
        }

        function PlayerSize() {
            if (_videoWidth > 0 && _videoHeight > 0) {
                o.actions.changeAspect(_videoWidth / _videoHeight)
            }
        }

        function onError(x) {
            if (_intro) {
                o.vast.ytError()
            }
            else {
                error = x.message;
                if (error.indexOf("password") > 0) { }
                else {
                    log(x.message)
                }
            }
        }

        function onEnded() {
            _status = "ended";
            if (_intro) {
                o.vast.ytEnded()
            }
            else {
                o.media.onEnded();
                o.media.onDuration()
            }
        }

        function onPlay() {
            if (_pauseplease) { }
            else {
                _status = "playing";
                if (v.vimeomouse == 1) {
                    Pnt0(container)
                }
                if (!_started && !o.start && !_intro) {
                    o.actions.Play();
                    show2(layer)
                }
                _started = true;
                _ready = true;
                o.media.onPlay();
                o.media.onTime()
            }
        }

        function onPause() {
            log('Vimeo Pause');
            _status = "paused";
            !o.nopause ? o.media.onPause() : ''
        }

        function onVolume() {
            o.media.onVolume()
        }

        function onWaiting() {
            if (_intro) {
                o.vast.ytWaiting()
            }
            else {
                o.media.onWaiting()
            }
        }

        function onWaited() {
            if (_intro) {
                o.vast.ytWaited()
            }
            else {
                o.actions.StopWaiting()
            }
        }

        function onMeta() {
            _meta = true;
            o.media.onDuration();
            o.media.onMeta();
            o.actions.LoadedData();
            v.changeheight == 1 ? VideoSize() : '';
            if (o.seekto > 0) {
                player.setCurrentTime(o.seekto)
            }
            Resize()
        }

        function onProgress(x) {
            if (_pauseplease && x.seconds > 0) {
                player.pause();
                onWaited();
                !o.muted ? player.setVolume(v.volume) : '';
                _pauseplease = false
            }
            if (_duration == 0) {
                _duration = x.duration
            }
            if (!_meta) {
                onMeta()
            }
            _loaded = x.percent
        }

        function onTime(x) {
            if (x.percent == 0.999) {
                player.pause();
                onEnded()
            }
            else {
                _time = x.seconds;
                if (!_intro) {
                    _duration = x.duration;
                    o.media.onTimeupdate()
                }
                else {
                    if (_duration == 0) {
                        _duration = x.duration;
                        o.vast.ytReady()
                    }
                    _duration = x.duration
                }
            }
        }

        function VimeoID(x) {
            var match = /vimeo.*\/(\d+)/i.exec(x);
            if (match) {
                return match[1]
            }
        };
        this.size = function () {
            return {
                "width": 0,
                "height": 0
            }
        };

        function Resize() {
            if (player) {
                var frame = container.querySelector('iframe');
                if (frame) {
                    css(frame,
                        {
                            "width": o.screen_w,
                            "height": o.screen_h
                        })
                }
            }
        }

        function time() {
            if (o.seekto > 0) {
                if (_time == 0) {
                    return o.seekto
                }
                else {
                    o.seekto = undefined
                }
            }
            return _ready ? _time : 0
        };
        this.Play = function () {
            _status = "playing";
            _pauseplease = false;
            if (_ready) {
                player.play()
            }
            else {
                !_created ? Init() : ''
            }
        };
        this.Pause = function () {
            if (_ready) {
                player.pause()
            }
        };
        this.Toggle = function () {
            if (_ready) {
                _status == 'playing' ? player.pause() : player.play()
            }
        };
        this.Seek = function (x) {
            _ready ? player.setCurrentTime(x) : ''
        };
        this.tag = function () {
            return false
        };
        this.Mute = function () {
            _ready ? player.setVolume(0) : ''
        };
        this.Unmute = function () {
            _ready ? player.setVolume(v.volume) : ''
        };
        this.Volume = function (x) {
            if (_ready && !_pauseplease) {
                player.setVolume(x)
            }
        };
        this.isPlaying = function () {
            return _status == 'playing'
        };
        this.isLive = function () {
            return false
        };
        this.setSpeed = function (x) { };
        this.ready = function () {
            return ready
        };
        this.status = function () {
            return _status
        };
        this.time = function () {
            return time()
        };
        this.duration = function () {
            var x = _duration;
            if (exist(v.end)) {
                x = v.end
            }
            return x
        };
        this.loaded = function () {
            var x = 0;
            if (_ready) {
                x = _loaded * _duration
            }
            return x
        };
        this.resize = function () {
            Resize()
        };
        this.errorMessage = function () {
            return error
        };
        this.auto = function () {
            return auto
        };
        this.iosfull = function () {
            if (_ready) {
                try {
                    player.requestFullscreen()
                }
                catch (e) { }
            }
        };
        this.BeforeVast = function () {
            if (_time < 1) {
                o.actions.Mute()
            }
            if (_status == "playing") {
                this.Pause()
            }
        };
        this.AfterVast = function () { };
        this.src = function (x) {
            _loaded = 0;
            _duration = 0;
            _time = 0;
            _videoHeight = 0;
            _videoWidth = 0;
            _meta = false;
            if (player) {
                player.loadVideo(VimeoID(x))
            }
            else {
                url = x;
                Init()
            }
        };
        this.nativeControls = function () {
            return true
        };
        this.Remove = function () {
            if (_ready) {
                player.off("play", onPlay);
                player.off("pause", onPause);
                player.off("progress", onProgress);
                player.off("timeupdate", onTime);
                player.off("bufferstart", onWaiting);
                player.off("bufferend", onWaited);
                player.off("error", onError);
                player.destroy()
            }
            _ready = false;
            clearInterval(waitInterval);
            try {
                if (container) {
                    parentcontainer.removeChild(container)
                }
                parentcontainer.removeChild(layer)
            }
            catch (e) { }
        }
    };

    function PjsFr() {
        if (v.pjsframe == 1 && v.pjsframed == 1 && !options.pjsframed && !o.finit) {
            o.pjsfrk = location.href.substr(-10);
            window.parent.postMessage(
                {
                    "pjsfr": o.pjsfrk
                }, '*');
            o.finit = true;
            setTimeout(PjsFrInit, 200 * (v.pjsframek > 0 ? v.pjsframek : 1));
            return true
        }
    }

    function PjsFrMsg(x) {
        if (x.data) {
            if (x.data.pjsfr) {
                if (o.pjsfrk && x.data.pjsfr == o.pjsfrk) {
                    var a = encode(JSON.stringify(
                        {
                            "f": v.file,
                            "p": v.poster,
                            "s": v.subtitle,
                            "r": v.preroll,
                            "vr": v.vast_replace
                        }), -1);
                    window.parent.postMessage(
                        {
                            "pjsfr2": a
                        }, '*')
                }
            }
        }
    }

    function PjsFrInit() {
        !o.init ? Init() : ''
    }

    function PjsFramed(x) {
        return x.indexOf("?pjsfr") > 0 || x.indexOf("&pjsfr") > 0
    }
    var MediaPjs = function (url) {
        var error;
        var _created = false;
        var _ready = false;
        var _removed = false;
        var _ok = false;
        var _sub;
        var error = '';
        var k = randomstr();
        var load_to;
        o.pjsfrm ? o.mediacontainer.removeChild(o.pjsfrm) : '';
        o.pjsfrm = undefined;
        v.preload == 1 || v.autoplay == 1 ? _frame(url) : '';

        function _frame(url) {
            if (!_created) {
                _created = true;
                o.pjsfrm = document.createElement("iframe");
                o.pjsfrm.onerror = function () {
                    onError()
                };
                window.addEventListener("message", _message);
                o.pjsfrm.onload = function () {
                    load_to = setTimeout(LoadingTimeout, (v.pjsframeto > 0 ? v.pjsframeto * 1000 : 7000))
                };
                attr(o.pjsfrm,
                    {
                        "scrolling": "no",
                        "sandbox": "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox",
                        "allowfullscreen": "true",
                        "allowtransparency": "true",
                        "src": url + '&' + k
                    });
                Pos0(o.pjsfrm);
                css(o.pjsfrm,
                    {
                        "border": 0
                    });
                o.mediacontainer.appendChild(o.pjsfrm)
            }
        }

        function LoadingTimeout() {
            if (!_ok) {
                onError()
            }
        }

        function onError() {
            clearTimeout(load_to);
            error = "loading error";
            o.media.onError()
        }

        function _message(e) {
            if (e.data && !_removed) {
                if (o.pjsfrm.contentWindow == e.source) {
                    if (e.data.pjsfr) {
                        o.pjsfrm.contentWindow.postMessage(
                            {
                                "pjsfr": e.data.pjsfr
                            }, "*")
                    }
                    if (e.data.pjsfr2) {
                        y = decode('#0' + e.data.pjsfr2);
                        if (y) {
                            if (y.indexOf('{') == 0) {
                                y = JSON.parse(y)
                            }
                        }
                        _ok = true;
                        if (y.r && y.r != '') {
                            if (typeof (VastLoader) == "function" || typeof (pljscom) == "function") {
                                if (typeof (VastLoader) == "function") {
                                    v.midroll = y.r;
                                    !o.midrollo ? o.midrollo = [] : '';
                                    o.midrollo.push(
                                        {
                                            "time": (o.seekto > 0 ? o.seekto : 0.01),
                                            "vast": y.r
                                        });
                                    v.midrolls = 1;
                                    v.vast = 1
                                }
                            }
                            else {
                                error = (v.lang == "ru" ? "Нужно включить модуль видеорекламы" : "Need a VAST plugin");
                                o.media.onError();
                                Remove();
                                return
                            }
                        }
                        if (y.vr) {
                            if (typeof (y.vr) == "object") {
                                !v.vast_replace ? v.vast_replace = [] : '';
                                v.vast_replace = UpdateObject(v.vast_replace, y.vr)
                            }
                        }
                        if (!v.poster && y.p) {
                            if (y.p != '') {
                                v.poster = y.p;
                                o.actions.ShowPoster()
                            }
                        }
                        if (!v.subtitle && y.s) {
                            if (y.s != '') {
                                v.subtitle = y.s
                            }
                        }
                        if (v.subtitle) {
                            _sub = v.subtitle
                        }
                        if (y.f) {
                            var ff = y.f.split(']');
                            if (ff.length == 2) {
                                y.f = y.f.substr(y.f.indexOf(']') + 1)
                            }
                            else {
                                o.files_quality.length == 1 ? y.f = o.actions.File(y.f) : ''
                            }
                            if (o.play || (v.autoplay == 1 && !o.start)) {
                                o.media.File(y.f, true);
                                o.actions.Play()
                            }
                            else {
                                o.media.File(y.f, true)
                            }
                            if (_sub) {
                                api("subtitle", _sub)
                            }
                        }
                        Remove()
                    }
                }
                else { }
            }
        }

        function onWaiting() {
            o.actions.Waiting()
        }

        function onWaited() {
            o.actions.StopWaiting()
        }
        this.size = function () {
            return {
                "width": 0,
                "height": 0
            }
        };
        this.Play = function () {
            onWaiting();
            _frame(url)
        };
        this.Pause = function () { };
        this.Toggle = function () { };
        this.Seek = function (x) { };
        this.tag = function () {
            return false
        };
        this.Mute = function () { };
        this.Unmute = function () { };
        this.Volume = function (x) { };
        this.isPlaying = function () {
            return _status == 'playing'
        };
        this.isLive = function () {
            return false
        };
        this.ready = function () {
            return ready
        };
        this.status = function () { };
        this.time = function () {
            return 0
        };
        this.duration = function () {
            return 0
        };
        this.loaded = function () {
            return 0
        };
        this.resize = function () { };
        this.errorMessage = function () {
            return error
        };
        this.auto = function () {
            return false
        };
        this.BeforeVast = function () { };
        this.AfterVast = function () { };
        this.src = function (x) { };
        this.setSpeed = function (x) { };
        this.nativeControls = function () {
            return false
        };
        this.Remove = function () {
            Remove()
        };

        function Remove() {
            if (_ready) { }
            _ready = false;
            _removed = true;
            clearTimeout(load_to);
            if (o.pjsfrm) {
                css(o.pjsfrm,
                    {
                        "position": "absolute",
                        "top": -3000,
                        "left": -3000,
                        "visibility": "hidden"
                    })
            }
        }
    };
    var TimeStore = function () {
        var x = '';
        var t = 0;
        var d = 0;
        if (o.storage) {
            if (v.timestoredontuse != 1) {
                if (localStorage.getItem("pljsplayfrom_" + v.id + o.href2) != null) {
                    x = localStorage.getItem("pljsplayfrom_" + v.id + o.href2)
                }
                if (v.playedstore == 1 && localStorage.getItem("pljsplayed_" + v.id + o.href2) != null) {
                    o.playedstore = localStorage.getItem("pljsplayed_" + v.id + o.href2)
                }
                if (exist(v.cuid)) {
                    if (localStorage.getItem("pljsplayfrom_" + o.d + v.cuid) != null) {
                        x = localStorage.getItem("pljsplayfrom_" + o.d + v.cuid)
                    }
                    if (v.playedstore == 1 && localStorage.getItem("pljsplayed_" + o.d + v.cuid) != null) {
                        o.playedstore = localStorage.getItem("pljsplayed_" + o.d + v.cuid)
                    }
                }
                if (o.playedstore && v.playedstore == 1) {
                    o.playedstored = o.playedstore.split(",")
                }
                if (x.indexOf("{") == 0) {
                    if (v.timestorejustbut == 1) {
                        o.butplstart = x.substr(1, x.indexOf("}") - 1)
                    }
                    else {
                        o.plcontinue = v.plstart = x.substr(1, x.indexOf("}") - 1)
                    }
                    x = x.substr(x.indexOf("}") + 1);
                    v.timestore0plroot == 1 ? v.playlist.openplaylistroot = 0 : ''
                }
                UpdateTime(x)
            }
        };

        function UpdateTime(x) {
            if (x) {
                if (x.indexOf("--") > 0) {
                    var y = x.split("--");
                    t = parseFloat(y[0]);
                    if (v.timestoreunauto == 1 && t > 0 && v.autoplay == 1) {
                        v.autoplay = 0
                    }
                    if (v.timestorejustbut == 1) {
                        o.butseekto = t
                    }
                    else {
                        d = parseFloat(y[1]);
                        o.seekto = t
                    }
                }
            }
        }
        this.updateCuid = function () {
            if (exist(v.cuid)) {
                if (localStorage.getItem("pljsplayfrom_" + o.d + v.cuid) != null) {
                    x = localStorage.getItem("pljsplayfrom_" + o.d + v.cuid);
                    UpdateTime(x);
                    o.controls.Played(t, d);
                    o.controls.Duration(t, d);
                    v.duration = d
                }
                else {
                    o.seekto = 0;
                    o.controls.Played(0, 0);
                    o.controls.Duration(0, 0);
                    v.duration = 0
                }
            }
        };
        this.write = function (t, d) {
            if (o.media.isLive() && v.timestorenolive == 1) { }
            else {
                var ct = new Date().getTime();
                localStorage.setItem("pljsplayfrom_" + (exist(v.cuid) ? o.d + v.cuid : v.id + o.href2), (exist(o.plid) ? "{" + o.plid + "}" : '') + t + '--' + d + '--' + ct)
            }
        };
        this.writePl = function (x) {
            o.playedstore = (o.playedstore ? o.playedstore + ',' : '') + x;
            localStorage.setItem("pljsplayed_" + (exist(v.cuid) ? o.d + v.cuid : v.id + o.href2), o.playedstore)
        };
        this.flag = function () {
            return {
                t: t,
                d: d
            }
        }
    };
    var MediaDaily = function (url, parentcontainer) {
        var _intro = false;
        if (url.indexOf('intro') == 0) {
            _intro = true;
            url = url.substr(5)
        }
        var dmid = DailyId(url);
        var error;
        var player;
        var _created = false;
        var _ready = false;
        var _started = false;
        var _quality = false;
        var _volume = 0;
        var _meta = false;
        var auto = true;
        var _loaded = 0;
        var _duration = 0;
        var _time = 0;
        var _status = "paused";
        var container_id = 'pljs_dm_' + v.id + (_intro ? '_intro' : '');
        var container = createElement('div');
        container.setAttribute('id', container_id);
        Pnt0(container);
        parentcontainer.appendChild(container);
        o.airplay = false;
        o.actions.AirplayChanged();
        if (o.system.mobile) {
            v.preload = 1
        }
        if (dmid) {
            if (!window['DM']) {
                var scrpt = Script("https://api.dmcdn.net/all.js", "same", "dm_pjs_api");
                if (scrpt) {
                    waitInterval = setInterval(WaitPlayer, 250)
                }
            }
            else {
                APIReady()
            }
        }

        function WaitPlayer() {
            if (window['DM']) {
                clearInterval(waitInterval);
                APIReady()
            }
        }

        function APIReady() {
            if (!_intro) {
                o.play ? o.media.onWaiting() : ''
            }
            else {
                o.vast.ytWaiting()
            }
            if (v.preload == 1 || _intro) {
                !_created ? Init() : ''
            }
            else {
                o.actions.MediaReady()
            }
        }

        function Init() {
            if ("DM" in window) {
                log("DM Init");
                if (exist(DM.Player) && !_created) {
                    player = DM.player(container,
                        {
                            video: dmid,
                            width: "100%",
                            height: "100%",
                            params:
                            {
                                controls: false,
                                autoplay: o.play || o.actplay,
                                mute: o.muted
                            }
                        });
                    player.addEventListener('loadedmetadata', onMeta);
                    player.addEventListener('waiting', onWaiting);
                    player.addEventListener('error', onError);
                    player.addEventListener('timeupdate', onTime);
                    player.addEventListener('durationchange', onDuration);
                    player.addEventListener('progress', onProgress);
                    player.addEventListener('apiready', PlayerReady);
                    player.addEventListener('play', onPlay);
                    player.addEventListener('pause', onPause);
                    player.addEventListener('qualitieschanged', onQuality);
                    Resize();
                    _created = true
                }
            }
            else {
                setTimeout(Init, 500)
            }
        }

        function PlayerReady() {
            log("DM Ready");
            _ready = true;
            var frame = container.querySelector('iframe');
            if (_intro) { }
            else {
                if (o.play && status != "playing") {
                    player.play()
                }
                if (!o.play && status == "playing") {
                    player.pause()
                }
                o.actions.MediaReady()
            }
        }

        function onError(x) {
            if (_intro) {
                o.vast.ytError()
            }
            else {
                o.media.onError()
            }
        }

        function onEnded() {
            _status = "ended";
            if (_intro) {
                o.vast.ytEnded()
            }
            else {
                o.media.onEnded();
                o.media.onDuration()
            }
        }

        function onPlay() {
            _status = "playing";
            _started = true;
            _ready = true
        }

        function onPause() {
            _status = "paused"
        }

        function onVolume() {
            o.media.onVolume()
        }

        function onWaiting() {
            if (_status != 'ended') {
                if (_intro) {
                    o.vast.ytWaiting()
                }
                else {
                    o.media.onWaiting()
                }
            }
        }

        function onWaited() {
            if (_intro) {
                o.vast.ytWaited()
            }
            else {
                o.actions.StopWaiting()
            }
        }

        function onDuration() {
            _duration = player.duration;
            o.media.onDuration()
        }

        function onMeta() {
            _meta = true;
            onDuration();
            o.media.onMeta();
            o.actions.LoadedData();
            if (o.seekto > 0) {
                player.seek(o.seekto)
            }
            Resize()
        }

        function SetQuality(x) {
            o.current_quality = o.files_quality.indexOf(x);
            o.controls.QualityChanged(o.current_quality)
        }

        function onQuality() {
            SetQuality(player.quality)
        }
        this.setQuality = function (x) {
            if (_ready) {
                player.setQuality(o.files_quality[x])
            }
        };

        function onProgress(x) {
            if (player) {
                if (!_quality) {
                    if (player.qualities.length > 0) {
                        o.files_quality = player.qualities;
                        onQuality()
                    }
                    _quality = true
                }
                if (_duration == 0) {
                    _duration = x.duration
                }
                if (!_meta) {
                    onMeta()
                }
                _loaded = (player.bufferedTime / _duration)
            }
        }

        function onTime() {
            _time = player.currentTime;
            if (!_intro) {
                o.media.onTimeupdate()
            }
            if (_duration > 0) {
                if (_time / _duration > 0.999) {
                    player.seek(0);
                    _time = 0;
                    _end = true;
                    o.actions.Pause();
                    onEnded()
                }
            }
        }

        function DailyId(x) {
            if (x) {
                if (x.indexOf('video/') > -1) {
                    var y = x.substr(x.indexOf('video/') + 6);
                    if (y.indexOf('?') > -1) {
                        y = y.substr(0, y.indexOf('?'))
                    }
                    else {
                        y = y.substr(0, 7)
                    }
                    return y
                }
            }
            return null
        }
        this.size = function () {
            return {
                "width": 0,
                "height": 0
            }
        };

        function Resize() {
            if (player) {
                var frame = container.querySelector('iframe');
                if (frame) {
                    css(frame,
                        {
                            "width": o.screen_w,
                            "height": o.screen_h
                        })
                }
            }
        }

        function time() {
            if (o.seekto > 0) {
                if (_time == 0) {
                    return o.seekto
                }
                else {
                    o.seekto = undefined
                }
            }
            return _ready ? _time : 0
        };
        this.Play = function () {
            _status = "playing";
            if (_ready) {
                player.play()
            }
            else {
                !_created ? Init() : ''
            }
        };
        this.Pause = function () {
            if (_ready) {
                player.pause()
            }
        };
        this.Toggle = function () {
            if (_ready) {
                _status == 'playing' ? player.pause() : player.play()
            }
        };
        this.Seek = function (x) {
            _ready ? player.seek(x) : ''
        };
        this.tag = function () {
            return false
        };
        this.Mute = function () {
            _ready ? player.setMuted(true) : ''
        };
        this.Unmute = function () {
            _ready ? player.setMuted(false) : ''
        };
        this.Volume = function (x) {
            _ready ? player.setVolume(x) : ''
        };
        this.isPlaying = function () {
            return _status == 'playing'
        };
        this.isLive = function () {
            return false
        };
        this.setSpeed = function (x) { };
        this.ready = function () {
            return ready
        };
        this.status = function () {
            return _status
        };
        this.time = function () {
            return time()
        };
        this.duration = function () {
            var x = _duration;
            if (exist(v.end)) {
                x = v.end
            }
            return x
        };
        this.loaded = function () {
            var x = 0;
            if (_ready) {
                x = _loaded * _duration
            }
            return x
        };
        this.resize = function () {
            Resize()
        };
        this.errorMessage = function () {
            return error
        };
        this.iosfull = function () {
            _ready ? player.setFullscreen(true) : ''
        };
        this.auto = function () {
            return auto
        };
        this.BeforeVast = function () {
            if (_time < 1) {
                o.actions.Mute()
            }
            if (_status == "playing") {
                this.Pause()
            }
        };
        this.AfterVast = function () { };
        this.src = function (x) {
            _loaded = 0;
            _duration = 0;
            _time = 0;
            _quality = false;
            _meta = false;
            if (player) {
                var y = DailyId(x);
                y ? player.load(y) : '';
                o.media.onPlay()
            }
            else {
                url = x;
                Init()
            }
        };
        this.nativeControls = function () {
            return true
        };
        this.Remove = function () {
            if (_ready) {
                player.removeEventListener('loadedmetadata', onMeta);
                player.removeEventListener('waiting', onWaiting);
                player.removeEventListener('error', onError);
                player.removeEventListener('timeupdate', onTime);
                player.removeEventListener('durationchange', onDuration);
                player.removeEventListener('progress', onProgress);
                player.removeEventListener('apiready', PlayerReady);
                player.removeEventListener('play', onPlay);
                player.removeEventListener('pause', onPause);
                player.removeEventListener('qualitieschanged', onQuality);
                player.destroy(container_id)
            }
            _ready = false;
            clearInterval(waitInterval);
            try {
                if (container) {
                    parentcontainer.removeChild(container)
                }
                parentcontainer.removeChild(layer)
            }
            catch (e) { }
        }
    };

    function PluginThumbs() {
        var to = [];
        var img;
        var preload_id;
        var preload_url;
        o.thumbs_on = false;
        if (exist(v.thumbnails)) {
            if (v.thumbnails != '') {
                thumbs_loading = true;
                var xhr = XHR(v.thumbnails);
                xhr.onload = function () {
                    thumbs_loading = false;
                    if (this.readyState == 4 && this.status == 200) {
                        ThumbsParse(this)
                    }
                    else {
                        v.thumbnails = ''
                    }
                };
                xhr.onerror = function (e) {
                    thumbs_loading = false;
                    v.thumbnails = ''
                };
                xhr.send()
            }
        }

        function ThumbsParse(j) {
            try {
                var x = j.responseText;
                var rows = Array();
                rows = x.split('\n');
                o.thumbs = [];
                o.thumbs_img = [];
                if (rows[0].indexOf("WEBVTT") > -1) {
                    for (i = 0; i < rows.length; i++) {
                        if (rows[i].indexOf('-->') > -1 && rows[i].indexOf(':') > -1) {
                            t1 = TimeVtt(rows[i].substr(0, rows[i].indexOf('-->')));
                            t2 = TimeVtt(rows[i].substr(rows[i].indexOf('-->') + 4, 12));
                            x_url = '';
                            if (i < rows.length - 1) {
                                x_url = rows[i + 1];
                                if (x_url.indexOf("http") != 0 && x_url.indexOf("//") != 0) {
                                    x_url = v.thumbnails.substr(0, v.thumbnails.lastIndexOf("/") + (x_url.indexOf("/") == 0 ? 0 : 1)) + x_url
                                }
                            }
                            o.thumbs.push(
                                {
                                    "t1": t1,
                                    "t2": t2,
                                    "url": x_url
                                })
                        }
                    }
                    o.thumbs_on = true
                }
            }
            catch (e) {
                log("Thumbnails Error")
            }
        };
        this.time = function (x, cx, l, w) {
            to = [x, cx, l, w];
            ThumbsTime()
        };

        function ThumbsTime() {
            var x = Math.round(to[0]);
            if (v.thumbs == 1) {
                if (o.thumbs_on) {
                    var y = -1;
                    if (exist(o.thumbs)) {
                        if (o.thumbs.length > 0) {
                            for (var i = o.thumbs.length - 1; i >= 0; i--) {
                                if (x >= o.thumbs[i].t1 && x <= o.thumbs[i].t2) {
                                    y = i;
                                    break
                                }
                            }
                        }
                    }
                    if (y != -1 && o.current_thumb != y) {
                        if (exist(o.thumbs[y])) {
                            if (exist(o.thumbs[y].url)) {
                                var z = o.thumbs[y].url;
                                if (z.indexOf('.') > -1) {
                                    var url = o.thumbs[y].url;
                                    if (o.thumbs[y].url.indexOf('#xywh') > -1) {
                                        url = o.thumbs[y].url.substr(0, o.thumbs[y].url.indexOf('#xywh'));
                                        o.thumbs[y].urlz = url
                                    } !isVisible(o.thumb) ? show2(o.thumb) : '';
                                    if (!o.thumbs_img[url]) {
                                        o.thumb.innerHTML = '';
                                        css(o.thumb,
                                            {
                                                'background-image': 'none'
                                            });
                                        if (v.control_buffer.icon) {
                                            var thbf = createElement('div');
                                            controlCSS(v.control_buffer.icon, v.control_buffer.color, thbf);
                                            css(thbf,
                                                {
                                                    "opacity": 0.5,
                                                    "position": "absolute",
                                                    "top": "50%",
                                                    "left": "50%"
                                                });
                                            o.thumb.appendChild(thbf);
                                            css(thbf,
                                                {
                                                    "transform": "scale(0.5)",
                                                    "margin-left": -thbf.offsetWidth / 2,
                                                    "margin-top": -thbf.offsetHeight / 2
                                                })
                                        }
                                        if (img) {
                                            img.removeEventListener('load', Preloaded)
                                        }
                                        img = document.createElement("img");
                                        preload_id = y;
                                        preload_url = url;
                                        img.addEventListener('load', Preloaded);
                                        img.src = url
                                    }
                                    else {
                                        ShowThumb(y)
                                    }
                                }
                            }
                            else {
                                HideThumb()
                            }
                        }
                    }
                    else {
                        if (y == -1) {
                            HideThumb()
                        }
                    }
                    o.current_thumb = y
                }
            }
        };
        this.hide = function () {
            HideThumb()
        };

        function HideThumb() {
            o.thumb.innerHTML = '';
            hide2(o.thumb)
        }

        function Preloaded() {
            if (img) {
                o.thumbs_img[preload_url] = true;
                ShowThumb(preload_id);
                img = null
            }
        }

        function ShowThumb(x) {
            var z = o.thumbs[x].url;
            o.thumb.innerHTML = '';
            css(o.thumb,
                {
                    'background-image': 'url(' + (o.thumbs[x].urlz ? o.thumbs[x].urlz : z) + ')'
                });
            if (z.indexOf('xywh') > 0) {
                var xy = z.substr(z.indexOf('xywh') + 5);
                var xywh = xy.split(',');
                if (exist(v.thumbless)) {
                    if (v.thumbless != 1) {
                        xywh[2] = xywh[2] / v.thumbless;
                        xywh[3] = xywh[3] / v.thumbless
                    }
                }
                if (xywh.length == 4) {
                    var left = (-to[3] / 2 + (to[1] - to[2]) - xywh[2] / 2);
                    left > to[3] / 2 - xywh[2] ? left = to[3] / 2 - xywh[2] : "";
                    css(o.thumb,
                        {
                            "top": (-xywh[3] - (v.thumb_bottom > 0 ? v.thumb_bottom * 1 : 5) - v.thumb_border),
                            "left": (left < -to[3] / 2 ? -to[3] / 2 : left)
                        });
                    css(o.thumb,
                        {
                            'background-position-y': "-" + parseInt(xywh[1]) + 'px',
                            'background-position-x': "-" + parseInt(xywh[0]) + 'px',
                            'width': parseInt(xywh[2]) + 'px',
                            'height': parseInt(xywh[3]) + 'px',
                            'background-size': 'auto'
                        });
                    v.thumb_width = xywh[2];
                    v.thumb_height = xywh[3]
                }
            }
            else {
                css(o.thumb,
                    {
                        'background-size': 'cover'
                    })
            }
        }

        function TimeVtt(srt) {
            var tmp = srt.split(':');
            var out = 0;
            tmp.length == 2 ? tmp.unshift("00") : '';
            tmp[0] != '00' ? out += tmp[0] * 3600 : '';
            tmp[1] != '00' ? out += tmp[1] * 60 : '';
            out += tmp[2].substr(0, 2) * 1;
            out = out + tmp[2].substr(2) * 1;
            return out
        }
    };
    var PluginSub = function () {
        var sub = [];
        var upld = [];
        var empty = true;
        var ioff;
        var loading = -1;
        this.start = function (x) {
            Start(x)
        };

        function Start(x) {
            !x ? x = '' : '';
            if (x != '11') {
                var start = 0;
                var urlcnfg = true;
                var memory = '';
                o.subs = x.split(",");
                o.files_subtitle = [];
                o.current_subtitle = -1;
                if (StorageSupport() && v.sub_store == 1) {
                    if (localStorage.getItem("pljssubtitle") != null) {
                        memory = localStorage.getItem("pljssubtitle")
                    }
                }
                else {
                    if (o.remember_sub) {
                        memory = o.remember_sub
                    }
                }
                for (var i = 0; i < o.subs.length; i++) {
                    if (o.subs[i].indexOf("#0") == 0) {
                        o.subs[i] = fd0(o.subs[i])
                    }
                    if (o.subs[i].indexOf("#" + v.enc2) == 0) {
                        o.subs[i] = o[o.fd[0]](o.subs[i])
                    }
                    if (o.subs[i].indexOf("#" + v.enc3) == 0 && o.subs[i].indexOf(v.file3_separator) > 0) {
                        o.subs[i] = o[o.fd[1]](o.subs[i])
                    }
                    if (o.subs[i].indexOf("[") == 0 && o.subs[i].indexOf("]") > 1) {
                        o.files_subtitle[i] = o.subs[i].substr(o.subs[i].indexOf("[") + 1, o.subs[i].indexOf("]") - 1);
                        o.subs[i] = o.subs[i].substr(o.subs[i].indexOf("]") + 1);
                        urlcnfg = false
                    }
                    else {
                        o.files_subtitle[i] = o.subs[i].substr(o.subs[i].lastIndexOf("/") + 1);
                        o.files_subtitle[i] = o.files_subtitle[i].substr(0, o.files_subtitle[i].lastIndexOf("."))
                    }
                    if (o.subs[i].indexOf("#0") == 0) {
                        o.subs[i] = fd0(o.subs[i])
                    }
                    if (o.subs[i].indexOf("#" + v.enc2) == 0) {
                        o.subs[i] = o[o.fd[0]](o.subs[i])
                    }
                    if (o.subs[i].indexOf("#" + v.enc3) == 0 && o.subs[i].indexOf(v.file3_separator) > 0) {
                        o.subs[i] = o[o.fd[1]](o.subs[i])
                    }
                }
                if (o.files_subtitle.length > 1 && v.sub_all == 1) {
                    o.files_subtitle.push(StringVar('sub_all_title', Lang('together')));
                    o.subs.push("all")
                }
                if (o.files_subtitle.length > 0 && v.sub_off == 1) {
                    if (v.sub_off0 == 1) {
                        ioff = 0;
                        start++;
                        o.files_subtitle.unshift(StringVar('sub_off_title', Lang('off')));
                        o.subs.unshift("")
                    }
                    else {
                        o.files_subtitle.push(StringVar('sub_off_title', Lang('off')));
                        o.subs.push("");
                        ioff = o.files_subtitle.length - 1
                    }
                }
                for (var i = 0; i < o.subs.length; i++) {
                    if (exist(v.default_subtitle)) {
                        if (v.default_subtitle == o.files_subtitle[i]) {
                            start = i;
                            o.current_subtitle = i;
                            v.subtitle_start = 1
                        }
                    }
                    if (memory != '') {
                        if (memory == o.files_subtitle[i]) {
                            start = i;
                            o.current_subtitle = i
                        }
                    }
                }
                if (v.sub_off == 1 && v.subtitle_start == 0) {
                    o.current_subtitle = ioff
                }
                exist(o.controls) ? o.controls.SubtitleChanged() : '';
                if (v.subtitle_start == 1) {
                    o.current_subtitle = start;
                    if (v.sub_all == 1 && o.subs[start] == "all") {
                        SubtitleLoadAll(o.current_subtitle)
                    }
                    else {
                        SubtitleLoad(o.current_subtitle)
                    }
                }
                else {
                    if (urlcnfg && o.subs.length < 3) {
                        SubtitleLoad(ioff == 0 ? 1 : 0)
                    }
                    v.sub_off != 1 ? o.current_subtitle = -1 : ''
                }
            }
            else {
                Remove()
            }
        }

        function SubtitleLoad(x) {
            if (exist(o.subs[x])) {
                if (o.subs[x].indexOf(".") > -1) {
                    o.subsor = o.subs[x].split(" or ");
                    o.sub_or = 0;
                    SubtitleLoad2(x)
                }
                else {
                    if (o.subs[x].indexOf('upld') == 0) {
                        if (upld[o.subs[x].substr(4)]) {
                            SubtitleParse(o.files_subtitle[x], upld[o.subs[x].substr(4)])
                        }
                    }
                }
            }
        }

        function SubtitleLoadAll(x) {
            sub[x] = Object();
            sub[x][0] = Array();
            sub[x][1] = Array();
            for (var i = 0; i < o.subs.length; i++) {
                setTimeout(SubtitleLoad, i * 500, i)
            }
        }

        function SubtitleLoad2(x) {
            var url = trim(o.subsor[o.sub_or]);
            var xhr = XHR(url);
            loading = x;
            o.subload = 1;
            xhr.onload = function () {
                o.subload = 0;
                if (this.readyState == 4 && this.status == 200) {
                    o.subtitle_on = true;
                    SubtitleParse(url, this.responseText, x)
                }
                else {
                    if (o.sub_or + 1 < o.subsor.length) {
                        o.sub_or++;
                        SubtitleLoad2(loading)
                    }
                    else {
                        SubtitleError("loading_error")
                    }
                }
            };
            xhr.onerror = function (e) {
                o.subload = 0;
                if (o.sub_or + 1 < o.subsor.length) {
                    o.sub_or++;
                    SubtitleLoad2(loading)
                }
                else {
                    SubtitleError("loading_error")
                }
            };
            xhr.send()
        };

        function SubtitleError(x) {
            log("subtitle not found or access denied");
            if (o.files_subtitle[o.current_subtitle]) {
                if (o.files_subtitle[o.current_subtitle].indexOf(Lang("loading_error")) == -1) {
                    o.files_subtitle[o.current_subtitle] = o.files_subtitle[o.current_subtitle] + ' (' + Lang(x) + ')'
                }
            }
            if (v.subtitle_errdel == 1 && loading > -1) {
                o.subs[loading] = '';
                o.files_subtitle[loading] = ''
            }
            o.current_subtitle = -1;
            o.subtitle_on = false;
            if (o.constrols) {
                o.controls.SubtitleChanged();
                o.controls.refresh()
            }
            else {
                setTimeout(function () {
                    if (o.controls) {
                        o.controls.SubtitleChanged();
                        o.controls.refresh()
                    }
                }, 100)
            }
            if (exist(o.subtitle)) {
                o.frame.removeChild(o.subtitle);
                o.subtitle = null
            }
        }

        function SubtitleParse(url, x, y) {
            if (x.indexOf("#" + v.enc2) == 0) {
                x = o[o.fd[0]](x)
            }
            if (x.indexOf("#" + v.enc3) == 0 && x.indexOf(v.file3_separator) > 0) {
                x = o[o.fd[1]](x)
            }
            if (url.indexOf('.srt') > -1 || url.indexOf('.ass') > -1 || url.indexOf('.ssa') > -1 || url.indexOf('.vtt') > -1) {
                var l = o.current_subtitle;
                if (exist(sub[l]) && o.subs[l] == "all") { }
                else {
                    sub[l] = Object();
                    sub[l][0] = Array();
                    sub[l][1] = Array()
                }
                var rows = Array();
                rows = x.split(/\r|\n/);
                var cnt = 1;
                var t1 = 0;
                var t2 = 0;
                var url_shift = (exist(v.subshift) ? v.subshift : 0);
                if (url.indexOf('shift=') > 0) {
                    url_shift = url.substr(url.indexOf('shift=') + 6) * 1
                }
                for (i = 0; i < rows.length; i++) {
                    if (url.indexOf('.srt') > -1 || url.indexOf('.vtt') > -1) {
                        if (rows[i].indexOf('-->') > -1 && rows[i].indexOf(':') > -1) {
                            t1 = TimeSub(rows[i].substr(0, rows[i].indexOf('-->'))) * 1 + url_shift;
                            t1 == 0 ? t1 = 1 : '';
                            t2 = TimeSub(rows[i].substr(rows[i].indexOf('-->') + 4, 12)) * 1 + url_shift;
                            exist(sub[l][0][t1]) ? '' : sub[l][0][t1] = '';
                            for (var j = t1; j < t2; j++) {
                                sub[l][1][j] = t1
                            }
                            cnt++
                        }
                        else {
                            rows[i] = trim(rows[i]);
                            if (rows[i] != '' && rows[i].length > 0 && rows[i] != cnt && rows[i] != 'WEBVTT') {
                                sub[l][0][t1] = (sub[l][0][t1] && sub[l][0][t1] != '' ? sub[l][0][t1] + '<br>' : '') + (o.subs[l] == "all" && y > (ioff == 0 ? 1 : 0) ? '[sub2]' : '') + rows[i] + (o.subs[l] == "all" && y > (ioff == 0 ? 1 : 0) ? '[/sub2]' : '')
                            }
                        }
                    }
                    if (url.indexOf('.ass') > -1 || url.indexOf('.ssa') > -1) {
                        if (rows[i].indexOf('Dialogue:') > -1) {
                            t1 = TimeSub(rows[i].substr((url.indexOf('.ssa') > -1 ? rows[i].indexOf('=0') + 3 : 12), 12)) * 1 + url_shift;
                            t2 = TimeSub(rows[i].substr((url.indexOf('.ssa') > -1 ? rows[i].indexOf('=0') + 14 : 23), 10)) * 1 + url_shift;
                            var p = '';
                            if (rows[i].indexOf('0,,') > 0) {
                                p = rows[i].substr(rows[i].indexOf('0,,') + 3)
                            }
                            else {
                                if (rows[i].indexOf('ffect,') > 0) {
                                    p = rows[i].substr(rows[i].indexOf('ffect,') + 6)
                                }
                            }
                            if (sub[l][0][t1] != undefined) {
                                sub[l][0][t1] += '\n' + (o.subs[l] == "all" && y > (ioff == 0 ? 1 : 0) ? '[sub2]' : '') + p + (o.subs[l] == "all" && y > (ioff == 0 ? 1 : 0) ? '[/sub2]' : '')
                            }
                            else {
                                sub[l][0][t1] = p
                            }
                            sub[l][0][t1] = sub[l][0][t1].replace(/{.*?}/, '');
                            sub[l][0][t1] = sub[l][0][t1].replace(/\\\\N/, '<br>');
                            sub[l][0][t1] = sub[l][0][t1].replace(/\\N/, '<br>');
                            for (var j = t1; j < t2; j++) {
                                sub[l][1][j] = t1
                            }
                        }
                    }
                }
                o.controls.SubtitleChanged();
                o.actions.RenewSubtitle();
                o.controls.refresh()
            }
            else {
                if (x != '') {
                    if (x.indexOf('[') == 0) {
                        Start(x)
                    }
                    else {
                        SubtitleError("error")
                    }
                }
                else {
                    Remove();
                    o.controls.refresh()
                }
            }
        }

        function TimeSub(srt) {
            var tmp = srt.split(':');
            var out = 0;
            tmp.length == 2 ? tmp.unshift("00") : '';
            tmp[0] != '00' ? out += tmp[0] * 3600 : '';
            tmp[1] != '00' ? out += tmp[1] * 60 : '';
            out += tmp[2].substr(0, 2) * 1;
            out = out * 10 + tmp[2].substr(3, 1) * 1;
            return out
        };

        function SetSubtitle(x) {
            if (exist(o.current_subtitle)) {
                if (o.current_subtitle != x) {
                    if (x == -1 || (v.sub_off == 1 && x == ioff)) {
                        SubtitleOff()
                    }
                    else {
                        v.sub_shift = 0;
                        o.current_subtitle = x;
                        o.subtitle_on = true;
                        v.subtitle_start = 1;
                        SetSubtitle2(x);
                        js("subtitle", o.files_subtitle[x]);
                        o.controls.SubtitleChanged()
                    }
                }
                else {
                    if (v.sub_off != 1) {
                        SubtitleOff()
                    }
                }
            }
        }

        function SetSubtitle2(x) {
            if (exist(o.subs[x])) {
                log("Subtitle", x);
                o.current_subtitle = x;
                if (exist(o.files_subtitle[x])) {
                    if (o.storage && v.sub_store == 1) {
                        localStorage.setItem("pljssubtitle", o.files_subtitle[x])
                    }
                    else {
                        o.remember_sub = o.files_subtitle[x]
                    }
                }
                if (o.file_type == "hls" && o.hls_subs == true) {
                    o.media.hlsDashSub(x, "hls")
                }
                else {
                    if (o.file_type == "dash" && o.dash_subs == true) {
                        o.media.hlsDashSub(x, "dash")
                    }
                    else {
                        if (o.subs[x] == "all") {
                            SubtitleLoadAll(o.current_subtitle)
                        }
                        else {
                            SubtitleLoad(o.current_subtitle)
                        }
                    }
                }
            }
        };
        this.SubUpload = function () {
            if (o.subupld) {
                var x = o.subupld.files;
                if (x[0]) {
                    var y = new FileReader();
                    y.onload = function (e) {
                        var z = e.target.result;
                        upld.push(z);
                        o.current_subtitle = -1;
                        var z = x[0].name;
                        if (z.length > 40) {
                            z = x[0].name.substr(0, 15) + '...' + x[0].name.substr(-15)
                        }
                        if (v.sub_off == 1 && v.sub_off0 == 1) {
                            o.subs.push('upld' + (upld.length - 1));
                            o.files_subtitle.push(z + '');
                            SetSubtitle(o.subs.length - 1)
                        }
                        else {
                            o.subs.unshift('upld' + (upld.length - 1));
                            o.files_subtitle.unshift(z + '');
                            v.sub_off == 1 ? ioff++ : '';
                            SetSubtitle(0)
                        }
                        o.subupld.value = ""
                    };
                    y.readAsText(x[0])
                }
                else {
                    o.subupld.click()
                }
            }
        };
        this.SetSubtitle = function (x) {
            SetSubtitle(x)
        };
        this.ioff = function () {
            return ioff
        };
        this.setioff = function (x) {
            ioff = x
        };
        this.show = function (x) {
            Show(x)
        };
        this.style = function () {
            Style()
        };
        this.remove = function () {
            Remove()
        };

        function SubtitleOff() {
            js("subtitle", "off");
            o.current_subtitle = v.sub_off == 1 ? ioff : -1;
            v.subtitle_start = 0;
            o.subtitle_on = false;
            o.controls.SubtitleChanged();
            o.hls_subs || o.dash_subs ? SetSubtitle2(o.current_subtitle) : '';
            exist(o.subtitle) ? o.frame.removeChild(o.subtitle) : '';
            o.subtitle = null
        }

        function Show(time) {
            if (v.sub_shift) {
                time = time - v.sub_shift * 1
            }
            if (o.subtitle_on && exist(o.subs)) {
                if (sub) {
                    var x = o.current_subtitle;
                    if (v.subpausehide == 1 && !o.play) {
                        return
                    }
                    if (exist(sub[x])) {
                        if (exist(sub[x][1])) {
                            var t = parseInt(time * 10);
                            if (exist(sub[x][1][t])) {
                                var y = '';
                                y = sub[x][0][sub[x][1][t]];
                                if (!exist(o.subtitle)) {
                                    o.subtitle = createElement('div');
                                    o.frame.appendChild(o.subtitle);
                                    Style()
                                }
                                if (empty) {
                                    show2(o.subtitle)
                                }
                                SubtitleBottom();
                                if (v.sub_split2words == 1 && o.subs[o.current_subtitle] != "all") {
                                    y = PluginSubword(y)
                                }
                                if (v.sub_all == 1) {
                                    y = y.replace(/\[sub2\]/gm, '<span style="color:' + CheckColor(v.sub_color2) + '">');
                                    y = y.replace(/\[\/sub2\]/gm, '</span>')
                                }
                                o.subtitle.innerHTML = '<span style="' + (v.sub_bg == 1 ? 'background-color:' + hexToRGBA(v.sub_bgcolor, v.sub_bga) + ';' : '') + '-webkit-box-decoration-break: clone;color:' + CheckColor(v.sub_color) + ';padding:' + v.sub_bgpadding + 'px ' + v.sub_bgpadding * 2 + 'px;border-radius:' + v.sub_bgo + 'px;margin:0 0;line-height:' + (v.sub_lineheight ? v.sub_lineheight : 1.8) + ';font-weight:' + v.sub_weight + '">' + trim(y) + '</span>';
                                if (v.sub_big_fullscreen == 1) {
                                    if (o.fullscreen) {
                                        css(o.subtitle,
                                            {
                                                "font-size": ((v.sub_size_fullscreen + ((parseInt(v.sub_sizeproc) - 100) * v.sub_size_fullscreen / 100)) + "px")
                                            })
                                    }
                                    else {
                                        css(o.subtitle,
                                            {
                                                "font-size": ((v.sub_size + ((parseInt(v.sub_sizeproc) - 100) * v.sub_size / 100)) + "px")
                                            })
                                    }
                                }
                                empty = false
                            }
                            else {
                                if (!empty && exist(o.subtitle)) {
                                    o.subtitle.innerHTML = '';
                                    empty = true;
                                    hide2(o.subtitle)
                                }
                            }
                        }
                    }
                }
            }
        }

        function Style() {
            if (o.subtitle) {
                css(o.subtitle,
                    {
                        "position": "absolute",
                        "width": "100%",
                        "padding-left": "10%",
                        "padding-right": "10%",
                        "left": 0,
                        "color": v.sub_color,
                        "text-align": "center",
                        "box-sizing": "border-box"
                    });
                if (v.sub_fonted == 1 && exist(v.sub_font)) {
                    v.sub_font != '' ? css(o.subtitle,
                        {
                            "font-family": v.sub_font
                        }) : ''
                }
                if (v.sub_shadow == 1) {
                    css(o.subtitle,
                        {
                            "text-shadow": "1px 1px 2px black"
                        })
                }
                else {
                    css(o.subtitle,
                        {
                            "text-shadow": "none"
                        })
                }
                if (v.sub_drag == 1) {
                    PluginMovable(o.subtitle, 'o.subdrag')
                }
                else {
                    css(o.subtitle,
                        {
                            "pointer-events": "none"
                        })
                }
            }
        }

        function SubtitleBottom() {
            if (!o.subdrag) {
                if (o.controls.ToolbarHidden() || v.sub_bottom > v.toolbar.h) {
                    css(o.subtitle,
                        {
                            "position": "absolute",
                            "top": "auto",
                            "left": 0,
                            "bottom": (v.sub_bottom * 1)
                        })
                }
                else {
                    css(o.subtitle,
                        {
                            "position": "absolute",
                            "top": "auto",
                            "left": 0,
                            "bottom": (v.sub_bottom * 1 + v.toolbar.h * 1)
                        })
                }
            }
        }

        function Remove() {
            o.current_subtitle = -1;
            o.subtitle_on = false;
            o.thumbs_on = false;
            v.subtitle = null;
            v.thumbnails = null;
            o.sub = null;
            o.subs = null;
            if (exist(o.controls)) {
                o.controls.SubtitleChanged()
            }
            o.files_subtitle = null;
            if (exist(o.subtitle)) {
                o.frame.removeChild(o.subtitle);
                o.subtitle = null
            }
            o.current_subtitle = null;
            o.subtitle_on = false
        }
    };
    var PluginHlsSubtitles = function (x, pip) {
        var hls = x;
        var ioff;
        !o.sbt ? o.sbt = new PluginSub() : '';
        hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, function (event, data) {
            if (!pip && v.hlssubtracks == 1) {
                var x = hls.subtitleTracks;
                if (x.length > 1) {
                    if (StorageSupport() && v.sub_store == 1 && !exist(v.default_subtitle)) {
                        if (localStorage.getItem("pljssubtitle") != null) {
                            v.default_subtitle = localStorage.getItem("pljssubtitle")
                        }
                    }
                    o.files_subtitle = [];
                    o.current_subtitle = hls.subtitleTrack;
                    for (var i = 0; i < x.length; i++) {
                        o.files_subtitle[i] = exist(x[i].name) ? x[i].name : i;
                        if (exist(v.default_subtitle)) {
                            if (v.default_subtitle == o.files_subtitle[i]) {
                                hls.subtitleDisplay = true;
                                o.current_subtitle = i;
                                hls.subtitleTrack = i;
                                setTimeout(SubTrack, 100, i)
                            }
                        }
                    }
                    o.hls_subs = true;
                    if (v.sub_off == 1) {
                        var oft = StringVar('sub_off_title', Lang('off'));
                        if (v.sub_off0 == 1) {
                            ioff = 0;
                            o.files_subtitle.unshift(oft)
                        }
                        else {
                            o.files_subtitle.push(oft);
                            ioff = o.files_subtitle.length - 1
                        }
                    }
                    o.subs = o.files_subtitle;
                    if (o.current_subtitle == -1) {
                        if (v.subtitle_start == 1 && !exist(v.default_subtitle)) {
                            hls.subtitleDisplay = true;
                            o.current_subtitle = 0;
                            hls.subtitleTrack = 0;
                            setTimeout(SubTrack, 100, 0)
                        }
                        else {
                            if (v.sub_off == 1) {
                                SubTrack(ioff)
                            }
                            else {
                                hls.subtitleDisplay = false
                            }
                        }
                    }
                    o.subtitle_on = hls.subtitleDisplay && o.current_subtitle != -1;
                    o.controls.SubtitleChanged()
                }
            }
            else {
                hls.subtitleDisplay = false
            }
        });
        hls.on(Hls.Events.SUBTITLE_TRACK_SWITCH, function (event, data) {
            if (!pip && v.hlssubtracks == 1 && o.subtitle_on) {
                o.current_subtitle = hls.subtitleTrack;
                o.controls.SubtitleChanged()
            }
        });
        this.HlsSubTrack = function (x) {
            SubTrack(x)
        };

        function SubTrack(x) {
            if (x == ioff && v.sub_off == 1) {
                o.sbt ? o.sbt.setioff(x) : '';
                o.current_subtitle = ioff;
                hls.subtitleTrack = -1;
                hls.subtitleDisplay = false;
                o.subtitle_on = false
            }
            else {
                hls.subtitleDisplay = true;
                hls.subtitleTrack = parseInt(x);
                o.subtitle_on = true
            }
        }
    };
    var PluginHdIcon = function (control, bg, style) {
        var icon = createElement("div");
        var cu;
        control.appendChild(icon);
        css(icon,
            {
                "position": "absolute",
                "top": (-bg.offsetHeight / 2) - 1,
                "background-color": "#f00",
                "border-radius_": 1,
                "display": "none",
                "pointerEvents": "none"
            });
        if (style.hdicon2 == 1 && style.hdiconlist) {
            cu = style.hdiconlist.split(",");
            css(icon,
                {
                    "font-size": 8,
                    "color": "#fff",
                    "padding": "2px 2px 0 2px",
                    "line-height": "1"
                })
        }
        else {
            style.hdicon2 = 0;
            css(icon,
                {
                    "height": 9,
                    "width": 13,
                    "background-image": "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTAwJSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTMgOSIgd2lkdGg9IjEwMCUiPjxwYXRoIGQ9Ik01LDcgTDYsNyBMNiw4IEw1LDggTDUsNyBaIE0xMCwzIEwxMCw0IEw4LDQgTDgsMyBMMTAsMyBaIE0zLDYgTDMsNSBMNSw1IEw1LDYgTDMsNiBaIE0yLDcgTDMsNyBMMyw4IEwyLDggTDIsNyBaIE03LDcgTDEwLDcgTDEwLDggTDcsOCBMNyw3IFogTTEwLDYgTDExLDYgTDExLDcgTDEwLDcgTDEwLDYgWiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjY0NzEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgLz48cGF0aCBkPSJNNSw3IEw1LDYgTDUsNSBMMyw1IEwzLDYgTDMsNyBMMiw3IEwyLDIgTDMsMiBMMyw0IEw1LDQgTDUsMiBMNiwyIEw2LDcgTDUsNyBaIE0xMSw2IEwxMCw2IEwxMCw3IEw3LDcgTDcsMiBMMTAsMiBMMTAsMyBMMTEsMyBMMTEsNiBaIE0xMCw0IEwxMCwzIEw4LDMgTDgsNCBMOCw2IEwxMCw2IEwxMCw0IFoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgLz48L3N2Zz4=)"
                })
        }
        this.toggle = function () {
            var y = 0;
            var x = o.media.getQuality();
            x = x.replace(Lang("auto") + ' ', '');
            if (x) {
                if (style.hdicon2 != 1) {
                    if (x == 'HD' || x.indexOf(' HD') > 0 || x.indexOf('hd') == 0 || x.indexOf('Hd') == 0) {
                        x = '720'
                    }
                }
                if (x.indexOf(' ') > 0) {
                    x = x.substr(0, x.indexOf(' '))
                }
                y = parseInt(x)
            }
            var t = '-1';
            var z;
            if (style.hdicon2 == 1) {
                t = '';
                for (var i = 0; i < cu.length; i++) {
                    var cu2 = cu[i].split(":");
                    if (cu2.length == 2) {
                        if (trim(cu2[0]) == y) {
                            t = trim(cu2[1])
                        }
                    }
                }
                if (t == '') {
                    if (y > 700) {
                        z = true;
                        icon.innerHTML = "HD"
                    }
                }
                else {
                    z = true;
                    icon.innerHTML = t
                }
            }
            else {
                if (y > 700) {
                    z = true
                }
            }
            if (z) {
                show2(icon);
                if (bg.offsetWidth - icon.offsetWidth > 0) {
                    css(icon,
                        {
                            "left": (bg.offsetWidth - icon.offsetWidth) / 2 - 2
                        })
                }
            }
            else {
                hide2(icon)
            }
        }
    };
    var Motion = function (x) {
        var _ease;
        var _timer;
        var _type;
        var _from;
        var _to;
        var _steps;
        var _step = 0;
        var _speed;
        var _stop = false;
        var _timeout;
        if (x.me != undefined && x.mc != undefined && x.type != undefined && x.to != undefined) {
            if (x.time == null) {
                if (x.type.indexOf("alpha") > -1) {
                    x.to == 0 ? x.time = 0.5 : x.time = 0.2
                }
                else {
                    x.time = 0.15
                }
            }
            _ease = Ease(x.ease);
            if (x.type.indexOf("scale") == -1) {
                if (exist(o.motions[x.me])) {
                    o.motions[x.me].TheEnd()
                }
                o.motions[x.me] = this
            }
            if (x.show == 1) {
                x.mc.set("display", true)
            }
            _type = x.type.split('|');
            _to = String(x.to).split('|');
            _from = new Array();
            for (var i = 0; i < _type.length; i++) {
                if (!_to[i]) {
                    _to[i] = _to[0]
                }
                if (_type[i] == "alpha") {
                    _from[i] = x.mc.g("opacity")
                }
                if (_type[i] == "alpha_div") {
                    _from[i] = x.mc.style.opacity
                }
                if (_type[i] == "y") {
                    _from[i] = x.mc.g("y")
                }
                if (_type[i] == "x") {
                    _from[i] = x.mc.g("x")
                }
                if (_type[i] == "left") {
                    _from[i] = parseInt(x.mc.style.left)
                }
                if (_type[i] == "scale") {
                    _from[i] = x.mc.g("scaleX")
                }
                if (_type[i] == "scroll") {
                    _from[i] = x.mc.scrollTop
                }
                if (_type[i] == "scrollleft") {
                    _from[i] = x.mc.scrollLeft
                }
                if (_type[i] == "scaleY") {
                    _from[i] = x.mc.g("scaleY")
                }
                if (_type[i] == "scaleX") {
                    _from[i] = x.mc.g("scaleX")
                }
                if (_type[i] == "width") {
                    _from[i] = x.mc.g("width")
                }
                if (_type[i] == "width_div") {
                    _from[i] = x.mc.offsetWidth;
                    _to[i] = Math.floor(_to[i]);
                    x.me == "line_play" ? log("width", x.me, _from[i], _to[i], x.mc.offsetWidth) : ''
                }
                if (_type[i] == "height") {
                    _from[i] = x.mc.g("height")
                }
                if (_type[i] == "height_div") {
                    _from[i] = x.mc.offsetHeight
                }
                _to[i] = Number(_to[i]);
                _from[i] = Number(_from[i])
            }
            _speed = x.time * 1000 / _ease.length;
            _steps = _ease.length;
            if (_type.length == 1 && _from[0] == _to[0]) {
                End()
            }
            else {
                setTimeout(onStep, Math.round(_speed))
            }
        }

        function onStep() {
            for (var i = 0; i < _type.length; i++) {
                var tmp = _from[i] + (_to[i] - _from[i]) * (_ease[_step] ? _ease[_step] : 0);
                Alpha(_type[i], tmp);
                if (_type[i] == "y") {
                    x.mc.set("top", tmp)
                }
                if (_type[i] == "x") {
                    x.mc.set("left", tmp)
                }
                if (_type[i] == "left") {
                    x.mc.style.left = tmp + "px"
                }
                if (_type[i] == "scale") {
                    x.mc.set("scale", tmp)
                }
                if (_type[i] == "scaleY") {
                    x.mc.set("scaleY", tmp)
                }
                if (_type[i] == "scaleX") {
                    x.mc.set("scaleX", tmp)
                }
                if (_type[i] == "scroll") {
                    x.mc.scrollTop = tmp
                }
                if (_type[i] == "scrollleft") {
                    x.mc.scrollLeft = tmp
                }
                if (_type[i] == "width") {
                    x.mc.set("width", tmp)
                }
                if (_type[i] == "width_div") {
                    css(x.mc,
                        {
                            "width": tmp
                        })
                }
                if (_type[i] == "height") {
                    x.mc.set("height", tmp)
                }
                if (_type[i] == "height_div") {
                    css(x.mc,
                        {
                            "height": tmp
                        })
                }
            }
            _step++;
            if (!_stop) {
                if (_step == _steps) {
                    End()
                }
                else {
                    _timeout = setTimeout(onStep, Math.round(_speed))
                }
            }
        }

        function End() {
            _stop = true;
            if (x.hide) {
                if (_type[0] == "alpha_div" || _type[0] == "left") {
                    hide(x.mc)
                }
                else {
                    x.mc.set("display", false)
                }
            }
            if (x.type.indexOf("scale") == -1) {
                o.motions[x.me] = null;
                delete o.motions[x.me]
            }
            for (var i = 0; i < _type.length; i++) {
                Alpha(_type[i], _to[i])
            }
            clearTimeout(_timeout)
        };

        function Alpha(y, z) {
            if (y == "alpha") {
                x.mc.set("opacity", z)
            }
            if (y == "alpha_div") {
                x.mc.style.opacity = z
            }
        }
        this.TheEnd = function () {
            End()
        };
        this.TheEnd2 = function () {
            _step = _steps - 1;
            onStep();
            End()
        };
        this.XY = function (x0, x1, y0, y1) {
            var e = false;
            for (var i = 0; i < _type.length; i++) {
                if (_type[i] == 'x' && x0 != x1) {
                    e = true
                }
                if (_type[i] == 'y' && y0 != y1) {
                    e = true
                }
            }
            e ? End() : ''
        };

        function Ease(str) {
            switch (str) {
                case "elastic":
                    return [0, 0.432, 0.857, 1.275, 1.372, 1.296, 1.102, 0.957, 0.883, 0.87, 0.914, 0.992, 1.029, 1.041, 1.036, 1.019, 0.996, 0.984, 0.981, 0.988, 1.001, 1.006, 1.007, 1.006, 1.003, 0.999, 0.998, 0.998, 0.998, 0.998, 1];
                    break;
                case "cubic":
                    return [0, 0.096, 0.185, 0.267, 0.344, 0.416, 0.483, 0.547, 0.606, 0.659, 0.705, 0.747, 0.785, 0.818, 0.848, 0.874, 0.897, 0.918, 0.935, 0.95, 0.962, 0.971, 0.979, 0.985, 0.99, 0.994, 0.997, 0.999, 1];
                    break;
                case "back":
                    return [0, 0.146, 0.28, 0.403, 0.513, 0.613, 0.702, 0.78, 0.848, 0.907, 0.956, 0.997, 1.029, 1.055, 1.072, 1.084, 1.092, 1.095, 1.095, 1.093, 1.088, 1.081, 1.072, 1.06, 1.046, 1.033, 1.023, 1.014, 1.007, 1.003];
                    break;
                default:
                    return [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
                    break
            }
        }
    };
    var System = function () {
        var N = navigator.appName,
            ua = navigator.userAgent,
            tem;
        var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident|edge)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
        var mtp = navigator.maxTouchPoints;
        this.browser = M ? M[1] : N;
        this.version = M ? M[2] : navigator.appVersion;
        this.touch = navigator.maxTouchPoints > 1;
        this.opera = this.browser == "Opera";
        this.ie9 = this.browser == "MSIE 9.0";
        this.ie = this.browser == "MSIE" || this.browser == "Trident" || this.browser == "Edge";
        this.edge = ua.search(/(edge)\/?\s*/i) > -1;
        this.firefox = this.browser == "Firefox";
        this.safari = this.browser == "Safari";
        this.chrome = window.chrome;
        this.win = ua.search("Windows NT") > -1;
        this.ios = (ua.search(/(iphone|ipad|ipod)\/?\s*/i) > -1) || (navigator.platform === 'MacIntel' && mtp > 1);
        this.tv = v.notv != 1 && ua.search(/(TV|tvOS|webOS|armv|BRAVIA|Roku|Tizen|Philips)\/?\s*/i) > -1;
        this.lg = v.notv != 1 && ua.search(/(LG)\/?\s*/i) > -1;
        this.iphone = ua.search(/(iphone)\/?\s*/i) > -1;
        this.ipad = this.ios && !this.iphone;
        this.webkit = 'WebkitAppearance' in document.documentElement.style;
        if (ua.search(/(android)\/?\s*/i) > -1) {
            mtp > 0 ? this.android = true : this.tv = true;
            if (matchMedia('(pointer:fine)').matches) {
                this.tv = true
            }
        }
        this.mobile = (this.ios || this.android || (ua.search(/(blackberry|iemobile|opera mini)\/?\s*/i) > -1)) && !this.tv;
        this.mutedautoplay = this.safari || this.chrome;
        this.fullscreen = false;
        if (this.ios) {
            this.iosv = parseFloat(ua.substr(ua.indexOf('OS ') + 3, 4).replace('_', '.'));
            if (this.ipad && (!'ontouchstart' in window || mtp < 2)) {
                this.mobile = this.ios = false;
                this.tv = true
            }
        }
        this.desktop = !this.mobile;
        this.mobiletv = this.mobile || this.tv;
        this.wkdt = this.webkit && this.desktop;
        if (o.frame.requestFullScreen || o.frame.requestFullscreen || o.frame.mozRequestFullScreen || o.frame.webkitRequestFullScreen || o.frame.msRequestFullscreen) {
            this.fullscreen = true
        }
    };

    function UpdateObject(obj, obj2) {
        for (var s in obj2) {
            if (typeof (obj2[s]) == 'object') {
                if (s == "events" || s == "file") {
                    obj[s] = obj2[s]
                }
                else {
                    for (var s2 in obj2[s]) {
                        if (typeof (obj[s]) != 'object') {
                            obj[s] = {}
                        }
                        if (typeof (obj2[s][s2]) == 'object') {
                            for (var s3 in obj2[s][s2]) {
                                if (typeof (obj[s][s2]) != 'object') {
                                    obj[s][s2] = {}
                                }
                                if (typeof (obj2[s][s2][s3]) == 'object') {
                                    for (var s4 in obj2[s][s2][s3]) {
                                        if (typeof (obj[s][s2][s3]) != 'object') {
                                            obj[s][s2][s3] = {}
                                        }
                                        obj[s][s2][s3][s4] = obj2[s][s2][s3][s4];
                                        if (s3 == 'padding' || s3 == 'margin') {
                                            obj[s][s2][s3][s4] = parseInt(obj[s][s2][s3][s4])
                                        }
                                    }
                                }
                                else {
                                    obj[s][s2][s3] = obj2[s][s2][s3];
                                    if (s2 == 'padding' || s2 == 'margin') {
                                        obj[s][s2][s3] = parseInt(obj[s][s2][s3])
                                    }
                                }
                            }
                        }
                        else {
                            obj[s][s2] = obj2[s][s2];
                            if (s == 'padding' || s == 'margin') {
                                obj[s][s2] = parseInt(obj[s][s2])
                            }
                        }
                    }
                }
            }
            else {
                if (s.indexOf("roll") > 0 && trim(obj2[s]) === "") { }
                else {
                    obj[s] = SettingsParser(s, obj2[s])
                }
            }
        }
        return obj
    };
    var SettingsParser = function (key, value) {
        if (typeof (value) == 'string') {
            value = trim(value);
            if (key.indexOf("color") > -1 && value != -1) {
                value = CheckColor(value)
            }
        }
        return value
    };

    function hexToRGBA(hex, opacity) {
        return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length / 3 + '})', 'g')).map(function (l) {
            return parseInt(hex.length % 2 ? l + l : l, 16)
        }).concat(opacity || 1).join(',') + ')'
    }

    function StorageSupport() {
        try {
            var storage = window['localStorage'],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true
        }
        catch (e) {
            return false
        }
    };

    function killMotion(motion_id) {
        if (motion_id) {
            if (exist(o.motions[motion_id])) {
                o.motions[motion_id].TheEnd()
            }
        }
    };
    var Lang = function (x) {
        var y = x;
        if (y) {
            y = x.charAt(0).toUpperCase() + x.slice(1);
            if (y.indexOf("_") > -1) {
                y = y.replace(/_/ig, " ")
            }
        }
        var en = {
            "of": "of",
            "kbps": "kbps",
            "castdevice": "Playback on device",
            "casterror": "Playback error on device",
            "together": "All at once",
            "pass": "Password",
            "0val": "No",
            "sleeptimer": "Sleep",
            "offsettimer": "Skip",
            "1val": "Yes",
            "sub_bottom": "Bottom margin",
            "sub_weight": "Font weight",
            "sub_shadow": "Shadow",
            "sub_bga": "Background opacity",
            "sub_bgcolor": "Background color",
            "sub_sizeproc": "Text size",
            "sub_color": "Text color",
            "sub_color2": "Text color 2",
            "sub_shift": "Time shift",
            "sub_reset": "Reset",
            "prev": "Previous",
            "copied": "Copied to clipboard",
            "160p": "Tiny",
            "240p": "Small",
            "360p": "Medium",
            "480p": "High",
            "540p": "High",
            "720p": "HD",
            "1080p": "Full HD",
            "1296p": "Super HD",
            "1440p": "Quad HD",
            "2160p": "Ultra HD 4K",
            "ads": "Ad",
            "adsinvitation": "Go to the advertiser's website",
            "audiotrack": "Audio",
            "live": "LIVE",
            "fullscreen": "Enter fullscreen",
            "normalscreen": "Exit fullscreen"
        };
        if (exist(en[x])) {
            y = en[x]
        }
        if (exist(o['lang_' + v.lang])) {
            if (exist(o['lang_' + v.lang][x])) {
                y = o['lang_' + v.lang][x]
            }
        }
        if (v.rename) {
            if (v.rename[x]) {
                y = v.rename[x]
            }
        }
        return y
    };
    var gaTracker = function (x, y, z) {
        if (!exist(o.gatracked[y]) && v.nscdnml != 1) {
            var t = o.titlestore ? o.titlestore : (v.title ? v.title : '');
            exist(v.label) ? t = v.label : '';
            if (v.yamtr_event[x] == 1 && v.yamtr == 1 && exist(v.yamtrid)) {
                if (x == "init") {
                    setInterval(yaHit, 300000)
                }
                if (exist(window["yaCounter" + v.yamtrid])) {
                    window["yaCounter" + v.yamtrid].reachGoal('nsplayer_' + x,
                        {
                            title: t
                        });
                    log("Yandex", 'nsplayer_' + x)
                }
                else {
                    log("Yandex Metric error")
                }
            }
            if (v.ga_event[x] == 1) {
                if (v.ga == 1) {
                    var gao;
                    if (v.ga4 == 1) {
                        if (window.gtag) {
                            gao = {
                                'label': t
                            };
                            if (v.galabels) {
                                if (typeof (v.galabels) == "object") {
                                    for (var g in v.galabels) {
                                        if (v.galabels.hasOwnProperty(g)) {
                                            gao[g] = v.galabels[g]
                                        }
                                    }
                                }
                            }
                            gtag('event', 'nsplayer_' + x, gao)
                        }
                    }
                    else {
                        if (window.ga) {
                            gao = {
                                eventCategory: 'Player',
                                eventAction: y
                            };
                            if (t != '') {
                                gao.eventLabel = t
                            }
                            if (v.gainact == 1 && !o.clicktime) {
                                gao.nonInteraction = 1
                            }
                            ga('user.send', 'event', gao)
                        }
                    }
                }
            }
        }
        z ? o.gatracked[y] = true : ''
    };

    function yaHit() {
        if (exist(window["yaCounter" + v.yamtrid])) {
            window["yaCounter" + v.yamtrid].reachGoal('playerjs_hit')
        }
    };
    var YoutubeID = function (url) {
        var x = '';
        url = url.replace("v=", "{=");
        if (url.indexOf('youtu.be/') > -1) {
            x = url.substr(url.indexOf(".be/") + 4);
            x.replace("/", "")
        }
        else {
            x = url.split(/(youtu.be\/|v\/|embed\/|watch\?|youtube.capiom\/user\/[^#]*#([^\/]*?\/)*)\??{?=?([^#\&\?]*)/)[3]
        }
        if (x != '') {
            if (x.indexOf("?t=") > 0) {
                v.start = x.substr(x.indexOf("?t=") + 3);
                var h = 0;
                var m = 0;
                var s = 0;
                if (v.start.indexOf("h") > 0) {
                    h = v.start.substr(0, v.start.indexOf("h"));
                    v.start = v.start.substr(v.start.indexOf("h") + 1)
                }
                if (v.start.indexOf("m") > 0) {
                    m = v.start.substr(0, v.start.indexOf("m"));
                    v.start = v.start.substr(v.start.indexOf("m") + 1)
                }
                if (v.start.indexOf("s") > 0) {
                    s = v.start.substr(0, v.start.indexOf("s"));
                    v.start = v.start.substr(v.start.indexOf("s") + 1)
                }
                if (h > 0 || m > 0 || s > 0) {
                    v.start = h * 3600 + m * 60 + s * 1
                }
                x = x.substr(0, x.indexOf("?t="))
            }
        }
        return x
    };
    var js = function (x, y, li, ev) {
        if (x == "init") {
            o.init = true
        }
        if (ev == 1) {
            for (var yi in y) {
                if (y.hasOwnProperty(yi)) {
                    if (typeof (y[yi]) == "object") {
                        y[yi] = ''
                    }
                }
            }
        }
        if (v.eventstracker == 1 && o.init) {
            if (v.eventlisteners == 1 || li == 1) {
                JsEvent(x, y)
            }
            else {
                if (y != undefined) {
                    if (typeof (y) == 'object') {
                        try {
                            y = JSON.stringify(y)
                        }
                        catch (e) { }
                    }
                }
                if (typeof (v.events) == 'string') {
                    if (v.events.indexOf("{") == 0) {
                        try {
                            v.events = v.events.replace(/\'/ig, '"');
                            v.events = JSON.parse(v.events)
                        }
                        catch (e) {
                            console.log(e)
                        }
                    }
                }
                if (typeof (v.events) == 'object') {
                    if (exist(v.events[x]) || exist(v.events['other'])) {
                        var z = x;
                        if (!exist(v.events[x]) && exist(v.events['other'])) {
                            z = 'other'
                        }
                        if (x.indexOf("vast_") == 0) {
                            if (exist(v.events['vast'])) {
                                z = 'vast'
                            }
                        }
                        try {
                            if (y !== undefined) {
                                eval(v.events[z] + "('" + x + "','" + v.id + "','" + y + "')")
                            }
                            else {
                                eval(v.events[z] + "('" + x + "','" + v.id + "')")
                            }
                        }
                        catch (e) {
                            log("events", e, x)
                        }
                    }
                }
                else {
                    if (v.events == '') {
                        v.events = "PlayerjsEvents"
                    }
                    try {
                        if (y !== undefined) {
                            eval(v.events + "('" + x + "','" + v.id + "','" + y + "')")
                        }
                        else {
                            eval(v.events + "('" + x + "','" + v.id + "')")
                        }
                    }
                    catch (e) {
                        log("events", e, x, y)
                    }
                }
            }
        }
        if (o.init && v.pjsframe == 1) {
            if (o.pjsfrm) {
                try {
                    o.pjsfrm.contentWindow.postMessage(
                        {
                            event: x,
                            info: y
                        }, "*")
                }
                catch (e) { }
            }
        }
        if (v.postmessage == 1 && li !== 1) {
            var zv = {
                event: x,
                time: o.media ? (x == "seek" ? o.seeked_time : o.media.time()) : 0
            };
            if (y != undefined) {
                zv["data"] = y
            }
            if (x == "duration" || x == "time") {
                zv["duration"] = o.media.duration()
            }
            if (x == "volume" || x == "unmute") {
                zv["volume"] = v.volume
            }
            if (x == "new") {
                zv["id"] = apiProcessor("playlist_id")
            }
            window.parent.postMessage(zv, '*');
            var z = x;
            x == "init" || x == "start" || x == "end" ? z = x + "ed" : '';
            x == "play" ? z = "resumed" : '';
            x == "pause" ? z = "paused" : '';
            x == "mute" ? z = "muted" : '';
            x == "unmute" ? z = "unmuted" : '';
            x == "seek" ? z = "rewound" : '';
            x == "vast_Impression" ? z = "adShown" : '';
            zv["event"] = z;
            if (z != '' && z != x) {
                zv = JSON.parse(JSON.stringify(zv));
                window.parent.postMessage(zv, '*')
            }
        }
    };
    var JsEvent = function (x, y) {
        var ev = document.createEvent('Events');
        if (y !== undefined) {
            ev.info = y
        }
        ev.initEvent(x, true, true);
        o.container.dispatchEvent(ev)
    };
    this.event = function (x, y) {
        o.events[x] = y
    };
    var api = function (x, y, but) {
        return apiProcessor(x, y, but)
    };
    this.api = function (x, y, but) {
        return apiProcessor(x, y, but)
    };

    function apiProcessor(x, y, but) {
        if (exist(o.actions) && typeof (x) == 'string') {
            if (o.destroyed == 1) {
                return
            }
            if (but) {
                if (typeof (but) == 'string') {
                    if (but.indexOf("id:") == 0) {
                        but = o.controls.butByS(but.substr(3), "dom");
                        if (but) {
                            if (x == "button" && y == "toogle") {
                                but.Click()
                            }
                        }
                    }
                }
            }
            if (x == "play" || x == "file") {
                if (exist(y)) {
                    var noads = false;
                    if (typeof (y) == 'string') {
                        y = y.replace(/(\r\n|\n|\r)/gm, "");
                        var seekto = -1;
                        if (y.indexOf("[seek:") > -1 && y.lastIndexOf("]") == y.length - 1) {
                            seekto = y.substr(y.indexOf("[seek:") + 6, y.length - 1);
                            seekto = parseInt(seekto.substr(0, seekto.length - 1));
                            y = y.substr(0, y.indexOf("[seek:"));
                            if (y == '') {
                                o.actions.Seek(seekto);
                                o.actions.Play();
                                return
                            }
                            else {
                                o.seekto = seekto
                            }
                        }
                        if (y.indexOf("[skipads]") > -1) {
                            noads = true;
                            y = y.replace('[skipads]', '')
                        }
                        if (y.indexOf("#" + v.enc2) == 0) {
                            y = o[o.fd[0]](y)
                        }
                        if (y.indexOf("#" + v.enc3) == 0 && y.indexOf(v.file3_separator) > 0) {
                            y = o[o.fd[1]](y)
                        }
                        if (y.indexOf("#0") == 0) {
                            y = fd0(y)
                        }
                        if (v.fplace == 1) {
                            y = fplace(y)
                        }
                        if (y.indexOf(".txt") == y.length - 4) {
                            var xhr = XHR(y);
                            xhr.onload = function () {
                                if (this.readyState == 4 && this.status == 200) {
                                    try {
                                        apiProcessor('play', JSON.parse(this.responseText))
                                    }
                                    catch (e) { }
                                }
                            };
                            xhr.send();
                            return
                        }
                        if (y.indexOf("id:") == 0 && exist(o.playlist_dic)) {
                            var z = FindIdPl(y);
                            if (exist(o.playlist_dic[z])) {
                                o.controls.PlaylistPlayId(z);
                                seekto > -1 ? o.seekto = seekto : '';
                                return true
                            }
                            else {
                                return false
                            }
                        }
                        if (y.indexOf("youtubeid:") == 0) {
                            var z = y.substr(10);
                            if (o.file_type == "youtube") {
                                o.media.playByYoutubeId(z);
                                return true
                            }
                            else {
                                y = '//youtu.be/' + z
                            }
                        }
                    }
                    if (x == "play") {
                        o.controls.PreNewPl();
                        o.actions.NewFile(y, undefined, undefined, (noads ? 1 : 0))
                    }
                    if (x == "file") {
                        o.newfile = true;
                        v.autoplay = 0;
                        o.actions.NewFile(y, 1, undefined, (noads ? 1 : 0));
                        o.controls.Duration(0, 0);
                        o.start = false
                    }
                }
                else {
                    if (x == "play") {
                        o.actions.Play()
                    }
                    if (x == "file") {
                        typeof Papi41 == 'function' ? Papi41() : ''
                    }
                }
            }
            if (x == "preload") {
                if (exist(y)) {
                    o.newfile = true;
                    o.actions.NewFile(y, 1, 1)
                }
                else {
                    o.media.Preload()
                }
            }
            if (x == "pause") {
                if (o.play) {
                    o.actions.Pause();
                    o.actions.RenewSubtitle()
                }
            }
            if (x == "channel" && exist(y)) {
                o.start && o.channels ? o.channels.SetChannel(y) : ''
            }
            if (x.indexOf("vpaid_") == 0) {
                if (o.vast) {
                    o.vast.VpaidSet(x.substr(6), y)
                }
            }
            if (x == "alert") {
                o.alert.close();
                o.alert = new Alert();
                if (v.alert404 == 1) {
                    o.alert.txt(v.alert404text)
                }
                else {
                    o.alert.txt("Test message")
                }
                if (v.alert404v == 1 && exist(v.alert404video)) {
                    o.err404v = new PluginErrorVideo()
                }
            }
            if (x == "waiting") {
                !o.start ? o.controls.startcss() : '';
                o.controls.Waiting();
                o.controls.HideElement("control_start")
            }
            if (x == "toggle") {
                o.play ? o.actions.Pause() : o.actions.Play()
            }
            if (x == "stop") {
                v.preload = 0;
                v.autoplay = 0;
                o.media.Recover();
                o.actions.Stop()
            }
            if (x == "reload") {
                o.time = o.media.time();
                o.actions.Reload()
            }
            if (x == "download") {
                if (v.apiprm) {
                    if (v.apiprm.on == 1 && v.apiprm.dwn == 1) {
                        o.actions.Download()
                    }
                }
            }
            if (x == "effect" && exist(y)) {
                if (o.effects) {
                    o.effects.api(y)
                }
            }
            if (x == "share") {
                o.controls.showShare()
            }
            if (x == "startvast" && exist(y)) {
                if (v.vast == 1) {
                    if (y.indexOf('js:') == 0) {
                        v.midroll = y;
                        v.midrolls = true;
                        o.actions.advertising("midroll")
                    }
                    else {
                        if (o.p != '') {
                            var sv = JSON.parse(decode(o.p));
                            for (var l in sv) {
                                if (sv.hasOwnProperty(l)) {
                                    if (exist(sv[l].id)) {
                                        if (y == sv[l].id) {
                                            v.midroll = 'prt' + (exist(sv[l]['cpm']) ? 'cpm' + sv[l]['cpm'] : '') + y + '_' + sv[l].preroll;
                                            v.midrolls = true;
                                            o.actions.advertising("midroll")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (x == "vastbreak") {
                typeof VastBreak == "function" ? VastBreak() : ''
            }
            if (x == "cuid" && y) {
                v.cuid = y;
                o.continue ? o.continue.updateCuid() : ''
            }
            if (x == "mute") {
                o.actions.Mute()
            }
            if (x == "speed") {
                if (exist(y)) {
                    o.actions.SetSpeed(y)
                }
                else {
                    return o.files_speed[o.current_speed]
                }
            }
            if (x == "played") {
                if (v.apiprm && o.pld) {
                    if (v.apiprm.pld == 1) {
                        return Math.round((o.pld.filter(Boolean).length - 1) / Math.round(o.media.duration()) * 100)
                    }
                }
            }
            if (x == "speeds") {
                return o.files_speed
            }
            if (x == "unmute") {
                o.actions.Unmute()
            }
            if (x == "thumbnails") {
                if (exist(y)) {
                    v[x] = y;
                    o.actions.Thumbs()
                }
            }
            if (x == "qualities") {
                return o.files_quality
            }
            if (x == "adblock") {
                return o.ab ? true : false
            }
            if (x == "live") {
                return o.media ? o.media.isLive() : false
            }
            if (x == "subtitles") {
                return v.sub_off == 1 ? o.files_subtitle.slice(0, -1) : o.files_subtitle
            }
            if (x == "audiotracks") {
                return o.files_audiotrack
            }
            if (x == "volume" || x == "setVolume") {
                if (exist(y)) {
                    if (y >= 0 && y <= 1) {
                        o.actions.Volume(y)
                    }
                }
                return o.muted ? 0 : v.volume
            }
            if (x == "muted") {
                return exist(o.muted) ? o.muted : false
            }
            if (x == "moveplaylist") {
                o.controls ? o.controls.PlaylistMove(y) : ''
            }
            if (x == "design") {
                y < 2 ? y = '' : '';
                if (o['u' + y] != '') {
                    var x2 = JSON.parse(decode(o['u' + y]));
                    var v2 = [];
                    for (var l in v) {
                        if (v.hasOwnProperty(l)) {
                            if (l.indexOf("control_") == 0) {
                                v[l] = null
                            }
                        }
                    }
                    if (typeof x2 == "object") {
                        for (var k in x2) {
                            if (x2.hasOwnProperty(k)) {
                                if (k.indexOf("control_") == 0) {
                                    v[k] = x2[k]
                                }
                                if (k == "toolbar") {
                                    v2[k] = x2[k]
                                }
                            }
                        }
                    }
                    v = UpdateObject(v, v2);
                    var show_settings = false;
                    if (o.controls.SettingsVisible()) {
                        o.controls.Settings();
                        show_settings = true
                    }
                    var show_playlist = false;
                    if (o.controls.PlaylistVisible()) {
                        o.controls.Playlist();
                        show_playlist = true
                    }
                    o.controls.Remove();
                    o.controls = null;
                    o.controls = new Controls();
                    if (o.media.status() == "playing") {
                        o.controls.Play()
                    }
                    o.controls.Volume(v.volume);
                    if (exist(v.title)) {
                        Title(v.title)
                    }
                    if (show_settings) {
                        o.controls.Settings()
                    }
                    if (show_playlist) {
                        o.controls.Playlist()
                    }
                    if (o.fullscreen) {
                        o.controls.Fullscreen()
                    }
                    if (key != 'control_duration') {
                        o.controls.Duration(o.media.time(), o.media.duration())
                    }
                    MainResize()
                }
            }
            if (x == "vars") {
                return v.vars
            }
            if (x == "resize") {
                o.controls.resize(true)
            }
            if (x == "resize2") {
                MainResize()
            }
            if (x == "seek") {
                if (exist(y)) {
                    if (typeof y == "string") {
                        if (y.indexOf("%") > -1) {
                            y = parseInt(y.substr(0, y.indexOf("%")));
                            y = o.media.duration() * y / 100
                        }
                        else {
                            var omt = o.media.time();
                            if (o.continue && !o.start) {
                                if (!o.continue.seeked) {
                                    var f = o.continue.flag();
                                    if (f.t && f.d) {
                                        omt = f.t;
                                        o.continue.seeked = true
                                    }
                                }
                            }
                            if (y.indexOf("+") == 0) {
                                y = omt + parseInt(y.substr(1))
                            }
                            else {
                                if (y.indexOf("-") == 0) {
                                    y = omt - parseInt(y.substr(1))
                                }
                            }
                        }
                    }
                    y = y * 1;
                    y < 0 ? y = 0 : '';
                    if (o.media.duration() > 0) {
                        y > o.media.duration() ? y = 0 : ''
                    }
                    if (!exist(o.vast) && !exist(o.vastloader) && o.media.duration() > 0) {
                        o.seekto = undefined;
                        o.actions.Seek(y, true);
                        o.actions.Playing()
                    }
                    else {
                        o.seekto = y
                    }
                }
            }
            if (x == "fullscreen") {
                !o.fullscreen ? o.actions.Fullscreen() : ''
            }
            if (x == "exitfullscreen") {
                o.fullscreen ? o.actions.Normalscreen() : ''
            }
            if (x == "isfullscreen") {
                return o.fullscreen
            }
            if (x == "size") {
                return o.screen_w + '/' + o.screen_h
            }
            if (x == "fix") {
                if (exist(o.minify)) {
                    o.minify.Do()
                }
            }
            if (x == "unfixing" || x == "unfix") {
                if (exist(o.minify)) {
                    o.minify.Un()
                }
            }
            if (x == "time") {
                var _t = o.media ? o.media.time() : 0;
                if (o.continue && v.timestore == 1 && !o.start && _t == 0) {
                    var f = o.continue.flag();
                    if (f.t) {
                        _t = f.t
                    }
                }
                return _t
            }
            if (x == "timeplay") {
                if (o.butplstart) {
                    apiProcessor("play", "id:" + o.butplstart)
                }
                if (o.butseekto) {
                    apiProcessor("seek", o.butseekto);
                    apiProcessor("play")
                }
            }
            if (x == "duration") {
                return o.media ? o.media.duration() : 0
            }
            if (x == "buffered") {
                return o.media ? o.media.loaded() : 0
            }
            if (x == "points") {
                if (y) {
                    v.points = y;
                    o.controls.RenewPoints()
                }
            }
            if (x == "quality") {
                if (exist(y)) {
                    if (but) {
                        v.hd = Switcher(v.hd, y, but);
                        if (o.files_quality.length == 2) {
                            o.actions.SetQuality(v.hd)
                        }
                    }
                    else {
                        o.actions.SetQuality(y)
                    }
                }
                else {
                    return o.media ? NoSpan(o.media.getQuality()) : 0
                }
            }
            if (x == "audiotrack") {
                if (exist(y)) {
                    if (but) {
                        v.ahd = Switcher(v.ahd, y, but);
                        if (o.files_audiotrack.length == 2) {
                            o.actions.SetAudioTrack(v.ahd)
                        }
                    }
                    else {
                        o.actions.SetAudioTrack(y)
                    }
                }
                else {
                    return o.media ? o.media.getAudioTrack() : 0
                }
            }
            if (x == "isyoutube") {
                return o.file_type == "youtube"
            }
            if (x == "restart") {
                if (o.current_audiotrack > 0) {
                    o.restart_audio = o.current_audiotrack
                }
                o.actions.NewFile(o.files[o.current_file])
            }
            if (x == "playing") {
                return o.play
            }
            if (x == "started") {
                return o.start
            }
            if (x == "system") {
                return o.system[y]
            }
            if (x == "youtubeready") {
                o.destroyed != 1 ? o.media.onYoutubeReady() : ''
            }
            if (x == "id") {
                return v.id
            }
            if (x == "log") {
                v.log = y
            }
            if (x == "eventstracker") {
                v.eventstracker = y
            }
            if (x == "pip") {
                o.media.PipToggle()
            }
            if (x == "switchpip") {
                o.media.PipSwitch();
                if (but) {
                    o.piped = Switcher(o.piped, y, but)
                }
            }
            if (x == "airplay") {
                o.media.Airplay()
            }
            if (x == "pipwebkit") {
                o.media.PipWebkit()
            }
            if (x == "options" && v.nscdnml != 1) {
                console.log(options)
            }
            if (x == "castinit" && o.chromecast) {
                o.chromecast.init()
            }
            if (x == "subtitle") {
                v.subtitle = y;
                if (exist(y)) {
                    if (y.toString().length < 3 && o.sbt) {
                        o.sbt.SetSubtitle(y * 1)
                    }
                    else {
                        o.actions.Subtitle(y)
                    }
                }
            }
            if (x == "quiz") {
                if (exist(o.quiz)) {
                    if (exist(y)) {
                        o.quiz.api(y)
                    }
                    else {
                        return o.quiz.Active()
                    }
                }
            }
            if (x == "ddd") {
                o.actions.HidePoster()
            }
            if (x == "geo") {
                if (o.geobj) {
                    return o.geobj
                }
                else {
                    return false
                }
            }
            if (x == "box") {
                var box = createElement("div");
                box.id = y;
                box.style.zIndex = 10000;
                o.frame.appendChild(box)
            }
            if (x == "screenshot") {
                if (o.tagvideo) {
                    var canvas = createElement("canvas");
                    var size = o.media.size();
                    canvas.width = size.width > 0 ? size.width : o.normal_w;
                    canvas.height = size.height > 0 ? size.height : o.normal_h;
                    css(canvas,
                        {
                            "position": "absolute",
                            "top": -canvas.height,
                            "left": -canvas.width,
                            "display": "none"
                        });
                    document.body.appendChild(canvas);
                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(o.media.tag(), 0, 0, canvas.width, canvas.height);
                    var quality = 2;
                    var canvas2 = document.createElement("canvas");
                    canvas2.width = canvas.width * quality;
                    canvas2.height = canvas.height * quality;
                    var ctx2 = canvas2.getContext("2d");
                    ctx2.drawImage(o.media.tag(), 0, 0, canvas.width * quality, canvas.height * quality);
                    if (v.sscopyright == 1 && exist(v.sstext)) {
                        !exist(v.ssfontsize) ? v.ssfontsize = 20 : '';
                        !exist(v.ssfontcolor) ? v.ssfontcolor = "ffffff" : '';
                        ctx2.font = v.ssfontsize + "px Courier, Arial";
                        ctx2.fillStyle = CheckColor(v.ssfontcolor);
                        ctx2.fillText((v.sstext == "domain" ? o.domain : v.sstext), v.ssfontsize, canvas.height * quality - v.ssfontsize - 5)
                    }
                    ctx.drawImage(canvas2, 0, 0, canvas.width, canvas.height);
                    var img;
                    try {
                        img = canvas.toDataURL("image/jpeg")
                    }
                    catch (e) {
                        console.log(e.message);
                        return false
                    }
                    return img
                }
                else {
                    return false
                }
            }
            if (x == "dash") {
                return o.file_type == x ? o.media.getDASH() : undefined
            }
            if (x == "hls") {
                return o.file_type == x ? o.media.getHLS() : undefined
            }
            if (x == "poster") {
                if (!o.play || v.posterhide === 0) {
                    o.media.Poster(y);
                    return true
                }
                else {
                    return false
                }
            }
            if (x == "stretch") {
                if (exist(y)) {
                    y == '1/0' ? y = 1 - existv(v.covervideo, 0) : '';
                    v.covervideo = y;
                    o.media.normalscale()
                }
                else {
                    return existv(v.covervideo, 0)
                }
            }
            if (x == "scale") {
                if (exist(y)) {
                    if (y == 0) {
                        o.media.normalscale()
                    }
                    else {
                        o.media.scale(y)
                    }
                }
                else {
                    return [o.mediascale.x, o.mediascale.y, o.mediacontainer.style.left, o.mediacontainer.style.top]
                }
            }
            if (x == "title") {
                if (exist(y)) {
                    exist(y) ? v.title = y : '';
                    o.actions.Title('title');
                    return true
                }
                else {
                    return v.title
                }
            }
            if (x == "invert") {
                o.actions.InvertPlaylist()
            }
            if (x == "push") {
                if (y) {
                    !o.playlist_source ? o.playlist_source = [] : '';
                    if (typeof (y) == 'object') {
                        y = o.playlist_source.concat(y);
                        x = "playlist"
                    }
                }
            }
            if (x == "playlist") {
                if (y) {
                    if (typeof (y) == 'object') {
                        try {
                            o.actions.UpdatePlaylist(y);
                            return true
                        }
                        catch (e) {
                            return false
                        }
                    }
                    else {
                        if (y.indexOf(".txt") == y.length - 4 || y.indexOf(".txt?") > 0) {
                            var xhr = XHR(y);
                            xhr.onload = function () {
                                if (this.readyState == 4 && this.status == 200) {
                                    try {
                                        apiProcessor('playlist', JSON.parse(this.responseText))
                                    }
                                    catch (e) { }
                                }
                            };
                            xhr.send();
                            return true
                        }
                    }
                }
            }
            if (x == "next") {
                o.controls ? o.controls.PlaylistNext() : ''
            }
            if (x == "prev") {
                o.controls ? o.controls.PlaylistPrev() : ''
            }
            if (x == "cut") {
                o.controls ? o.controls.Cut(y) : ''
            }
            if (x == "flip") {
                o.media ? o.media.flip() : ''
            }
            if (x == "find") {
                if (exist(y) && exist(o.playlist_dic)) {
                    !o.play ? v.autoplay = 0 : '';
                    for (var j in o.playlist_dic) {
                        if (o.playlist_dic.hasOwnProperty(j)) {
                            if (o.playlist_dic[j].pjs_id == y) {
                                y = j
                            }
                        }
                    }
                    if (exist(o.playlist_dic[y])) {
                        o.controls.PlaylistOpenId(y);
                        return true
                    }
                    else {
                        return false
                    }
                }
            }
            if (x == "playlist_folders") {
                var tmp = [];
                if (exist(o.playlist_dic)) {
                    for (var j in o.playlist_dic) {
                        if (o.playlist_dic[j].folder && o.playlist_dic[j].pjs_parent_i == -1) {
                            tmp.push(
                                {
                                    title: o.playlist_dic[j].title,
                                    id: o.playlist_dic[j].id
                                })
                        }
                    }
                }
                return tmp
            }
            if (x == "playlist_id") {
                if (o.plid) {
                    return o.playlist_dic[o.plid].pjs_id ? o.playlist_dic[o.plid].pjs_id : o.plid
                }
            }
            if (x == "playlist_length") {
                if (o.playlist_dic) {
                    return Object.keys(o.playlist_dic).length
                }
                else {
                    return -1
                }
            }
            if (x == "playlist_title") {
                if (exist(o.playlist_title)) {
                    return o.playlist_title
                }
            }
            if (x == "showplaylist") {
                o.controls.PlaylistShow()
            }
            if (x == "toolbar") {
                o.controls.ShowForce()
            }
            if (x == "vastnow") {
                if (o.vast) {
                    return true
                }
                else {
                    return false
                }
            }
            if (x == "vastinfo") {
                if (o.vast) {
                    return VastInfo()
                }
                else {
                    return false
                }
            }
            if (x == "vastpause") {
                if (o.vast) {
                    return o.vast.pause()
                }
                else {
                    return false
                }
            }
            if (x == "vastresume") {
                if (o.vast) {
                    return o.vast.resume()
                }
                else {
                    return false
                }
            }
            if (x == "vaststart") {
                if (o.vast) {
                    o.vast.startAd()
                }
                else {
                    return false
                }
            }
            if (x == "vastmute") {
                if (o.vast) {
                    o.vast.mute()
                }
                else {
                    return false
                }
            }
            if (x == "captions") {
                v.captions = Switcher(v.captions, y, but);
                o.media.captions()
            }
            if (x == "loop") {
                if (exist(but)) {
                    v.loop = Switcher(v.loop, y, but)
                }
                else {
                    if (exist(y)) {
                        y == '0/1' ? y = 1 - v.loop : '';
                        v.loop = y
                    }
                    else {
                        return v.loop
                    }
                }
            }
            if (x == "shuffle") {
                if (exist(but)) {
                    v.shuffle = Switcher(v.shuffle, y, but)
                }
                else {
                    if (exist(y)) {
                        v.shuffle = y
                    }
                    else {
                        return v.shuffle
                    }
                }
            }
            if (x == "autonext" || x == "playlistloop") {
                var z = "autoplaylist";
                x == "playlistloop" ? z = "playlistrewind" : "";
                if (exist(but)) {
                    v.playlist[z] = Switcher(v.playlist[z], y, but)
                }
                else {
                    if (exist(y)) {
                        y == '0/1' ? y = 1 - v.playlist[z] : '';
                        v.playlist[z] = y
                    }
                }
                return v.playlist[z]
            }
            if (x == "hd") {
                if (o.files_quality.length == 2) {
                    v.hd = o.files_quality[o.current_quality];
                    v.hd = Switcher(v.hd, y, but);
                    if (o.files_quality[0] == v.hd) {
                        o.actions.SetQuality(0)
                    }
                    else {
                        o.actions.SetQuality(1)
                    }
                }
            }
            if (x == "v" && y) {
                if (y.indexOf('file') == 0 || y.indexOf('bk') == 0) {
                    return
                }
                return v[y]
            }
            if (x.indexOf("update:") == 0) {
                var xx = x.substr(7);
                if (typeof (y) == 'object' && typeof (v[xx]) == 'object') {
                    for (var yy in y) {
                        if (y.hasOwnProperty(yy)) {
                            v[xx][yy] = y[yy]
                        }
                    }
                }
                else {
                    if (x.indexOf('rc_') == -1) {
                        v[xx] = y
                    }
                }
                return true
            }
            if (x.indexOf("text:") == 0) {
                o.controls.customText(x.substr(5), y)
            }
            if (x == "currentfile") {
                return o.media ? o.media.currentFile() : ''
            }
            if (x == "vrsn") {
                return o.version + ' ' + o.playerid
            }
            if (x == "playerid") {
                return o.playerid
            }
            if (x == "hlserror") {
                return o.hlserror
            }
            if (x == "dasherror") {
                return o.dasherror
            }
            if (x == "visibility") {
                return o.visibility
            }
            if (x == "vastids") {
                return o.vast ? o.vast_adid : undefined
            }
            if (x == "destroy") {
                o.actions.StopMedia();
                v.hotkey.on = 0;
                if (v.stopotherplayers == 1) {
                    for (var i = 0; i < pljssglobal.length; i++) {
                        if (pljssglobal[i]) {
                            if (pljssglobal[i].api("id") == v.id) {
                                pljssglobal[i] = null
                            }
                        }
                    }
                }
                for (var w in window) {
                    if (window[w] == o.this) {
                        window[w] = null
                    }
                }
                if (pljssglobalid == v.id) {
                    pljssglobalid = ''
                }
                o.destroyed = 1;
                o.container.innerHTML = '';
                o.this = null
            }
        }
        else {
            return false
        }
    };

    function Switcher(x, y, but) {
        var z = trim(y) + '';
        if (y.indexOf("/") > 0) {
            var y2 = y.split("/");
            if (y2.length == 2) {
                if (x == trim(y2[0])) {
                    z = trim(y2[1]);
                    if (but) {
                        but.CustomSwitch(1)
                    }
                }
                else {
                    z = trim(y2[0]);
                    if (but) {
                        but.CustomSwitch(0)
                    }
                }
            }
        }
        return z
    }

    function XHR(x) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', x, true);
        return xhr
    }

    function FindIdPl(y) {
        var z = y.substr(3);
        if (o.playlist_dic) {
            for (var j in o.playlist_dic) {
                if (o.playlist_dic.hasOwnProperty(j)) {
                    if (o.playlist_dic[j].pjs_id == z) {
                        z = j
                    }
                }
            }
        }
        return z
    }

    function VastInfo() {
        var x;
        if (o.vast) {
            if (o.vast.active()) {
                x = o.vast
            }
        }
        if (!x && o.vastloader) {
            x = o.vastloader
        }
        if (x) {
            var y = {
                is: o.vasttype,
                system: x.info("adsystem"),
                version: x.info("version"),
                vpaid: x.info("isVpaid"),
                url: o.current_vast_url + (x.info("wrapper") ? x.info("wrapper0") + x.info("wrapper") : ''),
                type: x.info("filetype"),
                file: x.info("file"),
                time: (o.media ? o.media.time() : ''),
                volume: x.getVolume(),
                id: o.vast_adid
            };
            if (o.vasttype == "midroll") {
                y.midroll_time = o.midrollcrtm
            }
            return y
        }
    }
    var createElement = function (x) {
        var y = x;
        x == 'div' || x == 'div2' ? y = 'pjsdiv' : '';
        var z = document.createElement(y);
        if (x == 'div2') {
            css(z,
                {
                    "cursor": "pointer",
                    "display": "block"
                })
        }
        return z
    };
    var log = function (a, b, c, d, e, f, g) {
        if (v.log == 1 || v.logout == 1) {
            var x = a + (b != undefined ? " " + b : "") + (c != undefined ? " " + c : "") + (d != undefined ? " " + d : "") + (e != undefined ? " " + e : "") + (f != undefined ? " " + f : "") + (g != undefined ? " " + g : "");
            console.log("Playerjs" + (v.pjsframed == 1 ? "2" : "") + ": " + x);
            if (v.logout == 1 && exist(document.getElementById("pjslog"))) {
                document.getElementById("pjslog").innerHTML += x + '<br/>'
            }
        }
    };
    var CustomFonts = function () {
        if (v.fonts == 1 && exist(v.fontnames) && v.fontnames != '') {
            var x = document.createElement('link');
            x.rel = 'stylesheet';
            x.href = 'https://fonts.googleapis.com/css?family=' + v.fontnames.replace(/,/ig, "|").replace(/ /ig, "+");
            document.head.appendChild(x)
        }
    };
    var SvgColor = function (div, clr) {
        var x = ["path", "polygon", "polyline", "rect", "ellipse", "circle"];
        for (var y = 0; y < x.length; y++) {
            var z = div.querySelectorAll("svg " + x[y]);
            if (z.length > 0) {
                for (var y2 = 0; y2 < z.length; y2++) {
                    z[y2].style.fill = clr
                }
            }
        }
    };
    var Time = function (time) {
        time < 0 ? time = 0 : '';
        var full_minutes = o.media.duration >= 600 ? true : false;
        var full_hours = o.media.duration >= 3600 ? true : false;
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time - minutes * 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        minutes = minutes - hours * 60;
        if (days > 0) {
            hours = hours - days * 24
        }
        if (v.dvrtime == 1 && o.media.isLive()) {
            var d = new Date();
            return String(new Date(d.getTime() + time * 1000).toLocaleTimeString())
        }
        else {
            return String((days > 0 ? days + ':' : '') + (hours > 0 || full_hours ? hours + ':' : '') + ((hours > 0 || full_minutes) && minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds)
        }
    };
    var timeFormat = function (x) {
        var seconds = Math.floor(x);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        minutes = Math.floor(minutes % 60);
        seconds = Math.floor(seconds % 60);
        hours > 0 && minutes < 10 ? minutes = "0" + minutes : "";
        seconds = seconds >= 0 ? ((seconds >= 10) ? seconds : "0" + seconds) : "00";
        var out = (hours > 0 ? hours + ":" : "") + (minutes >= 0 ? minutes : "0") + ":" + seconds;
        if (v.dvrtime == 1 && o.media.isLive()) {
            var d = new Date();
            return String(new Date(d.getTime() + x * 1000).toLocaleTimeString())
        }
        else {
            return out
        }
    };
    var Href = function () {
        return encodeURIComponent((window.location != window.parent.location) ? document.referrer : document.location.href)
    };
    var NoSpan = function (x) {
        if (x) {
            x = x.toString();
            var spn = x.indexOf(" <span style='opacity");
            if (spn > -1) {
                x = x.substr(0, spn)
            }
        }
        return x
    };
    var Script = function (x, y, z) {
        var t;
        if (!Scripted(x) && y) {
            t = document.createElement('script');
            y == "same" ? y = x : '';
            t.src = y.indexOf('//') == -1 ? '//' + y : y;
            t.async = 1;
            if (z) {
                t.name = z
            }
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(t, s)
        }
        return t
    };
    var Scripted = function (y) {
        var x = false;
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.indexOf(y) > -1) {
                x = true
            }
        }
        return x
    };
    var hex2rgb = function (x, y) {
        x = x.replace('#', '');
        var r = parseInt(x.length == 3 ? x.slice(0, 1).repeat(2) : x.slice(0, 2), 16);
        var g = parseInt(x.length == 3 ? x.slice(1, 2).repeat(2) : x.slice(2, 4), 16);
        var b = parseInt(x.length == 3 ? x.slice(2, 3).repeat(2) : x.slice(4, 6), 16);
        if (y) {
            return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + y + ')'
        }
        else {
            return 'rgb(' + r + ', ' + g + ', ' + b + ')'
        }
    };
    var css = function (e, o) {
        if (exist(e)) {
            for (var key in o) {
                if (o.hasOwnProperty(key)) {
                    if (o[key] != 'NaNpx' && o[key] != undefined) {
                        if (typeof o[key] == 'number' && key != 'opacity' && key != 'zIndex') {
                            o[key] += 'px'
                        }
                        if ((key.indexOf("color") > -1 || key.indexOf("Color") > -1) && o[key].indexOf("#") == -1 && o[key].indexOf("var") == -1 && o[key].indexOf("rgba") == -1) {
                            o[key] = '#' + o[key]
                        }
                        if (key == "transform") {
                            e.style['-ms-' + key] = o[key];
                            e.style['-moz-' + key] = o[key];
                            e.style['-webkit-' + key] = o[key];
                            e.style['-o-' + key] = o[key]
                        }
                        if (key == "fontFamily") {
                            if (o[key].indexOf(" ") > -1) {
                                o[key] = '"' + o[key] + '"'
                            }
                        }
                        if (key == "box-sizing") {
                            e.style.setProperty(key, o[key], 'important')
                        }
                        else {
                            e.style[key] = o[key]
                        }
                    }
                }
            }
        }
    };
    var Bglines = function (x, clr, b1, b2) {
        var y = existv(b1, 1) * 1;
        var z = existv(b2, 1) * 1;
        css(x,
            {
                "background": "repeating-linear-gradient(-45deg," + clr + "," + clr + " " + y + "px,rgba(0,0,0,0)," + y + "px,rgba(0,0,0,0) " + (y + z) + "px)"
            })
    };
    var CheckColor = function (c) {
        return c.substr(0, 1) != '#' && c.indexOf("var") == -1 ? c = "#" + c : c
    };
    var controlCSS = function (x, color, y) {
        !color ? color = '#fff' : '';
        color = CheckColor(color);
        var r = random(100000, 1000000);
        x = x.replace(/\(rand\)/g, r);
        x = x.replace(/\(color\)/g, color);
        var _html = x.substr(0, x.indexOf('|||'));
        var _css = x.substr(x.indexOf('|||') + 3);
        var _css2 = '';
        if (o.system.webkit) {
            _css2 = _css.replace(/animation:/g, "-webkit-animation:");
            _css2 = _css2.replace(/animation-/g, "-webkit-animation-");
            _css2 = _css2.replace(/@keyframes/g, "@-webkit-keyframes");
            _css2 = _css2.replace(/transform/g, "-webkit-transform")
        }
        y.innerHTML = _html;
        pushCSS(_css2 + _css)
    };
    var indOf = function (x, y) {
        var z;
        for (var i = 0; i < x.length; i++) {
            if (x[i]) {
                if (x[i].indexOf(y) > -1) {
                    z = true
                }
            }
        }
        return z
    };
    var pushCSS = function (x) {
        if (o.css) {
            if (o.css.styleSheet) {
                o.css.styleSheet.cssText = x
            }
            else {
                o.css.appendChild(document.createTextNode(x))
            }
        }
    };
    var Pos0 = function (x) {
        css(x,
            {
                "position": "absolute",
                "top": 0,
                "left": 0,
                "width": "100%",
                "height": "100%"
            })
    };
    var Pnt0 = function (x) {
        css(x,
            {
                "pointerEvents": "none"
            })
    };
    var xhr = function (y, z) {
        var x = new XMLHttpRequest();
        x.open('GET', y, true);
        x.onload = z;
        x.send()
    };
    var FindPjsDiv = function (x) {
        if (x) {
            for (var i = 0; i < 5; i++) {
                if (x.nodeName == "PJSDIV") {
                    break
                }
                else {
                    if (x.parentElement) {
                        x = x.parentElement
                    }
                }
            }
        }
        return x
    };
    var gif = function (z) {
        var gif = document.createElement("img");
        if (o.gifed.indexOf(z) > -1) {
            o.gifed.push(z);
            if (z.indexOf("?") > 0) {
                z = z + '&' + Math.random()
            }
            else {
                z = z + '?' + Math.random()
            }
        }
        else {
            o.gifed.push(z)
        }
        gif.setAttribute('src', z);
        gif.setAttribute('height', '1px');
        gif.setAttribute('width', '1px')
    };
    var attr = function (e, o) {
        for (var key in o) {
            if (o.hasOwnProperty(key)) {
                e.setAttribute(key, o[key])
            }
        }
    };
    var destroy = function (e) {
        if (e) {
            try {
                e.parentNode.removeChild(e);
                e = null
            }
            catch (e) { }
        }
    };
    var random = function (min, max) {
        return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random())
    };
    var randomstr = function () {
        return Math.random().toString(36).substring(2, 12)
    };
    var removebykey = function (x, y) {
        x = Object.keys(x).reduce(function (obj, key) {
            if (key != y) {
                obj[key] = x[key]
            }
            return obj
        },
            {});
        return x
    };
    var trim = function (x) {
        if (typeof x == "string") {
            return x.replace(/^\s+|\s+$/gm, '')
        }
        else {
            return x
        }
    };
    var cut = function (x, y, z) {
        var r = false;
        if (x) {
            if (x.indexOf(y) > -1) {
                var r = x.substr(x.indexOf(y) + y.length);
                if (z) {
                    if (r.indexOf(z) > -1) {
                        r = r.substr(0, r.indexOf(z))
                    }
                }
            }
        }
        return r
    };
    var encode = function (x, n) {
        if (n == 0) {
            return "#0" + salt.e(x)
        }
        if (n == -1) {
            return salt.e(x)
        }
        if (n == 1) {
            return "#1" + pepper(salt.e(x), 1)
        }
    };
    var str2obj = function (x) {
        if (v[x] != "") {
            if (typeof v[x] != "string") {
                o[x + 'o'] = v[x]
            }
            else {
                if (v[x].indexOf("[{") == 0) {
                    try {
                        v[x] = v[x].replace(/pjs'qt/ig, '"');
                        o[x + 'o'] = eval(v[x])
                    }
                    catch (e) { }
                }
            }
        }
    };
    var dechar = function (x) {
        return String.fromCharCode(x)
    };
    var decode = function (x) {
        if (x.substr(0, 2) == "#1") {
            return salt.d(pepper(x.substr(2), -1))
        }
        else if (x.substr(0, 2) == "#0") {
            return salt.d(x.substr(2))
        }
        else {
            return x
        }
    };
    var checkBase64 = function (x) {
        if (x) {
            if (x.indexOf('http') == -1 && x.indexOf('.') == -1 && x.length > 100 && x.indexOf('data:') == -1) {
                x = 'data:image/png;base64,' + x
            }
        }
        return x
    };
    var hide = function (x) {
        x ? x.style.visibility = "hidden" : ''
    };
    var show = function (x) {
        x ? x.style.visibility = "visible" : ''
    };
    var hide2 = function (x) {
        x ? x.style.display = "none" : ''
    };
    var show2 = function (x) {
        x ? x.style.display = "block" : ''
    };
    var isVisible = function (x) {
        return x ? x.style.visibility != "hidden" && x.style.display != "none" : false
    };
    var int = function (s) {
        if (typeof s == "string") {
            if (s.indexOf("px") > 0) {
                s = s.substr(0, s.indexOf("px"))
            }
        }
        return parseInt(s)
    };
    var hidden = function (x) {
        return x.style.display == "none"
    };
    var hexToRgb = function (hex) {
        if (hex) {
            var bigint = parseInt(hex, 16);
            var r = (bigint >> 16) & 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;
            return r + "," + g + "," + b
        }
    };
    var MarginPadding = function (o, x, y) {
        o[x + 'top'] = 0;
        o[x + 'right'] = 0;
        o[x + 'bottom'] = 0;
        o[x + 'left'] = 0;
        if (exist(o[y])) {
            var z = o[y].split(" ");
            if (z.length == 4) {
                o[x + 'top'] = z[0] ? parseFloat(z[0]) : 0;
                o[x + 'right'] = z[1] ? parseFloat(z[1]) : 0;
                o[x + 'bottom'] = z[2] ? parseFloat(z[2]) : 0;
                o[x + 'left'] = z[3] ? parseFloat(z[3]) : 0
            }
        }
        return o
    };
    var MarPad = function (x) {
        if (x) {
            x = x.replace(/ /ig, 'px ')
        }
        return x + 'px'
    };
    var StringVar = function (x, y) {
        return v[x] && v[x] != '' ? v[x] : y
    };
    var abc = String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122);
    var salt = {
        _keyStr: abc + "0123456789+/=",
        e: function (e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = salt._ue(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64
                }
                else if (isNaN(i)) {
                    a = 64
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
            }
            return t
        },
        d: function (e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + dechar(n);
                if (u != 64) {
                    t = t + dechar(r)
                }
                if (a != 64) {
                    t = t + dechar(i)
                }
            }
            t = salt._ud(t);
            return t
        },
        _ue: function (e) {
            e = e.replace(/\r\n/g, "\n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += dechar(r)
                }
                else if (r > 127 && r < 2048) {
                    t += dechar(r >> 6 | 192);
                    t += dechar(r & 63 | 128)
                }
                else {
                    t += dechar(r >> 12 | 224);
                    t += dechar(r >> 6 & 63 | 128);
                    t += dechar(r & 63 | 128)
                }
            }
            return t
        },
        _ud: function (e) {
            var t = "";
            var n = 0;
            var r = 0;
            var c1 = 0;
            var c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += dechar(r);
                    n++
                }
                else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += dechar((r & 31) << 6 | c2 & 63);
                    n += 2
                }
                else {
                    c2 = e.charCodeAt(n + 1);
                    c3 = e.charCodeAt(n + 2);
                    t += dechar((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3
                }
            }
            return t
        }
    };
    var pepper = function (s, n) {
        s = s.replace(/\+/g, "#");
        s = s.replace(/#/g, "+");
        var a = sugar(o.y) * n;
        if (n < 0) a += abc.length / 2;
        var r = abc.substr(a * 2) + abc.substr(0, a * 2);
        return s.replace(/[A-Za-z]/g, function (c) {
            return r.charAt(abc.indexOf(c))
        })
    };
    var sugar = function (x) {
        x = x.split(dechar(61));
        var result = '';
        var c1 = dechar(120);
        var chr;
        for (var i in x) {
            if (x.hasOwnProperty(i)) {
                var encoded = '';
                for (var j in x[i]) {
                    if (x[i].hasOwnProperty(j)) {
                        encoded += (x[i][j] == c1) ? dechar(49) : dechar(48)
                    }
                }
                chr = parseInt(encoded, 2);
                result += dechar(chr.toString(10))
            }
        }
        return result.substr(0, result.length - 1)
    };
    var exist = function (x) {
        return x != null && typeof (x) != 'undefined' && x != 'undefined'
    };
    var existv = function (x, y) {
        return exist(x) ? x : y
    };
    var exist2 = function (x) {
        return exist(x) && x != -1 && x != ''
    };
    var copyObject = function (x) {
        if (typeof x == "object") {
            x = JSON.parse(JSON.stringify(x))
        }
        return x
    };
    var findLeft = function (el) {
        return el.getBoundingClientRect().left + (window.scrollX ? window.scrollX : window.pageXOffset)
    };
    var checkFont = function (x) {
        v.globalfont == 1 && exist2(v.globalfontname) ? x = v.globalfontname : '';
        return x
    };
    var findTop = function (el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY
    };
    var redirect = function (x, y) {
        if (x != '') {
            if (v.redirectblank == 1) {
                window.open(x)
            }
            else {
                if (v.redirectparent == 1) {
                    window.parent.location.href = x
                }
                else {
                    window.location.href = x
                }
            }
            x = ''
        }
    };
    var reRightMenu = function () {
        if (v.rightmenu == 1) {
            o.rightmenu ? o.frame.removeChild(o.rightmenu) : '';
            o.rightmenu = null
        }
    };
    var Actions = function () {
        var _fullscreen_end = false;
        if (o.system.tv) {
            log("tv")
        }
        this.Title = function (x) {
            o.controls ? o.controls.title(x) : ''
        };
        this.File = function (x) {
            if (x) {
                if (typeof (x) == 'string') {
                    x = x.replace(/(\r\n|\n|\r)/gm, "");
                    if (x.indexOf("[{") == 0) {
                        try {
                            x = x.replace(/pjs'qt/ig, '"');
                            x = JSON.parse(x)
                        }
                        catch (e) {
                            x = "incorrect JSON"
                        }
                    }
                }
                if (typeof (x) == 'object') {
                    o.playlist_dic = [];
                    o.playlist_source = copyObject(x);
                    o.playlist = IndexPlaylist(x);
                    if (o.playlist.length > 0) {
                        if (v.playlist.openlast == 1 && !v.plstart) {
                            var keys = Object.keys(o.playlist_dic);
                            var last = keys.slice(-1)[0];
                            last ? v.plstart = last : ''
                        }
                        var y = FindFileInPlaylist();
                        if (y) {
                            x = y.file;
                            o.titlestore = y.title;
                            o.controls ? o.controls.titlepl(y.title) : '';
                            if (exist(y.poster)) {
                                if (o.media) {
                                    o.media.Poster(y.poster)
                                }
                                else {
                                    v.poster = y.poster
                                }
                            }
                            if (exist(y.sub)) {
                                y.subtitle = y.sub
                            }
                            if (exist(y.start)) {
                                v.start = o.seekto = y.start
                            }
                            SettingsTimers("offset");
                            if (exist(y.id)) {
                                o.plid = y.id
                            }
                            var sx = ["subtitle", "vars", "embed", "url", "url2", "url3", "heartbeat", "thumbnails", "label", "download", "points", "remove", "end", "delete", "title2", "skip"];
                            if (exist(v.control_title)) {
                                if (v.control_title.showfrom1file == 1 && v.control_title.showtitleplaylist == 1) {
                                    sx.push("title");
                                    sx.push("t1");
                                    sx.push("t2");
                                    sx.push("t3");
                                    sx.push("t4");
                                    sx.push("t5")
                                }
                            }
                            for (var i = 0; i < sx.length; i++) {
                                if (exist(y[sx[i]])) {
                                    v[sx[i]] = y[sx[i]]
                                }
                            }
                            if (sx.indexOf('title') > 0) {
                                if (v.control_title.templated == 1) {
                                    o.title_template = v.control_title.template;
                                    o.actions.TitleTemplate(y)
                                }
                                o.actions.Title('title')
                            }
                            if (o.controls) {
                                o.controls.UpdatePlaylist(o.playlist)
                            }
                            if (o.droplist) {
                                o.droplist.Update()
                            }
                        }
                        else { }
                    }
                }
                if (typeof (x) == 'string') {
                    x = fjs(x);
                    if (x.indexOf("#" + v.enc2) == 0) {
                        x = o[o.fd[0]](x)
                    }
                    if (x) {
                        if (x.indexOf("#" + v.enc3) == 0 && x.indexOf(v.file3_separator) > 0) {
                            x = o[o.fd[1]](x)
                        }
                        if (x.indexOf("#0") == 0) {
                            x = fd0(x)
                        }
                        x = fjs(x)
                    }
                    if (v.fplace == 1) {
                        x = fplace(x)
                    }
                    if (x == '') {
                        log("empty file");
                        o.media_error = true;
                        js("error", "empty")
                    }
                    o.files_quality = [];
                    o.files_quality_ag = [];
                    o.files_audiotrack = [];
                    o.current_file = 0;
                    o.current_quality = 0;
                    o.current_audiotrack = 0;
                    v.file_separator == '' ? v.file_separator = ',' : '';
                    if ((x.indexOf("]") > -1 && x.indexOf("[") > -1) || exist(v.qualities)) {
                        o.files = x.split(v.file_separator)
                    }
                    else {
                        o.files = [x]
                    }
                    o.audiotracks = [];
                    if (exist(v.qualities)) {
                        var qualities = v.qualities.split(v.file_separator)
                    }
                    if (o.files.length > 0) {
                        var q = -1;
                        for (var i = 0; i < o.files.length; i++) {
                            o.files[i] = trim(o.files[i]);
                            if (o.files[i] != '') {
                                if (o.files[i].indexOf("[") == 0 && o.files[i].indexOf("]") > 1) {
                                    o.files_quality[i] = o.files[i].substr(o.files[i].indexOf("[") + 1, o.files[i].indexOf("]") - 1);
                                    o.files[i] = o.files[i].substr(o.files[i].indexOf("]") + 1)
                                }
                                else {
                                    if (exist(v.qualities)) {
                                        o.files_quality[i] = exist(qualities[i]) ? qualities[i] : ''
                                    }
                                    else {
                                        o.files_quality[i] = i + 1
                                    }
                                }
                                var is = 0;
                                if (exist(v.default_quality) && q == -1) {
                                    if (String(v.default_quality).indexOf("num:") == 0) {
                                        if (v.default_quality.substr(4) * 1 == i) {
                                            is = 1
                                        }
                                    }
                                    if (v.default_quality == o.files_quality[i]) {
                                        is = 1
                                    }
                                    if (v.default_quality == "max" && i == o.files.length - 1) {
                                        is = 1
                                    }
                                }
                                if (exist(o.default_quality)) {
                                    if (o.default_quality == o.files_quality[i]) {
                                        is = 1;
                                        q = i
                                    }
                                }
                                if (is == 1) {
                                    o.current_file = i;
                                    o.current_quality = i
                                }
                                o.files[i] = Prefile(o.files[i])
                            }
                        }
                    }
                    else {
                        o.files[0] = Prefile(o.files[0])
                    }
                    return o.files[o.current_file]
                }
            }
            else {
                return x
            }
        };

        function Prefile(x) {
            if (exist(v.prefile) && x.indexOf("//") == -1) {
                x = v.prefile + x
            }
            return x
        };
        this.InvertPlaylist = function () {
            if (o.playlist) {
                var x = o.playlist.reverse();
                for (var i = 0; i < x.length; i++) {
                    x[i].pjs_i = i
                }
                o.playlist = x;
                o.controls.UpdatePlaylist(o.playlist)
            }
        };
        this.UpdatePlaylist = function (x) {
            if (typeof (x) == 'object') {
                o.playlist_dic = [];
                o.playlist_source = copyObject(x);
                o.playlist = IndexPlaylist(x);
                if (o.controls) {
                    o.controls.UpdatePlaylist(o.playlist)
                }
            }
        };
        this.NewFile = function (x, y, z, no) {
            !exist(y) ? v.autoplay = 1 : '';
            !exist(z) ? v.preload = 0 : '';
            v.duration = undefined;
            v.end = undefined;
            v.delete = undefined;
            o.media_error != 2 ? o.media_error = false : '';
            o.metadata = false;
            o.pipwebkit = false;
            o.reloadTimer = 0;
            o.gatracked = [];
            o.checknative = false;
            o.gained = false;
            o.dvr = false;
            o.bitrate = undefined;
            o.quartile = [false, false, false];
            o.sess = randomstr();
            o.sesstime = 0;
            o.or0 = 0;
            o.pld ? o.pld = [] : '';
            o.file_type != 'pjs' && o.sbt ? o.sbt.remove() : '';
            o.trcka ? o.trcka = [] : '';
            if (o.err404v) {
                o.err404v.remove()
            }
            if (o.media.status() == "playing") {
                this.Stop()
            }
            if (o.cut && o.cutted) {
                o.controls.Cut()
            }
            if (exist(o.share)) {
                o.share.Remove()
            }
            if (exist(o.reloadto)) {
                clearTimeout(o.reloadto)
            }
            js("new");
            if (v.vast == 1 && no != 1) {
                o.actions.VastRecover();
                o.actions.VastRecover('midroll')
            }
            x = this.File(x);
            if (y == 1) {
                o.file_type = ''
            }
            o.media.File(x);
            if ((o.system.mobile || o.system.safari) && !exist(y)) {
                o.actions.Play()
            }
            if (exist(o.custom_aspect)) {
                o.mediascale = {
                    x: 1,
                    y: 1,
                    x0: 1,
                    y0: 1
                };
                o.media.normalscale()
            }
            gaTracker("play", "Play");
            o.media.NativeControls();
            o.controls.QualityChangedNoHand();
            o.controls.AudioTrackChangedNoHand();
            o.controls.refresh();
            o.mediatags ? o.mediatags.read() : ''
        };
        this.TitleTemplate = function (x) {
            var y = false;
            if (x && o.title_template) {
                v.title = o.title_template;
                for (var i = 1; i < 6; i++) {
                    if (exist(x['t' + i])) {
                        v.title = v.title.replace("{" + i + "}", x['t' + i]);
                        y = true
                    }
                }
            }
            return y
        };
        this.MediaReady = function () {
            if (v.autoplay == 1) {
                if (v.observer == 1) {
                    setTimeout(function () {
                        o.actions.Play()
                    }, 500)
                }
                else {
                    this.Play()
                }
                v.autoplayed = 1
            }
            Thumbs()
        };
        this.Thumbs = function () {
            Thumbs()
        };

        function Thumbs() {
            if (v.thumbs == 1) {
                if (typeof PluginThumbs !== "undefined") {
                    o.th = new PluginThumbs()
                }
            }
        }
        this.NativeControls = function () {
            var x = false;
            if (o.system.mobile) {
                x = true;
                if (v.nativenotiphone == 1 && o.system.iphone) {
                    x = false
                }
                if (v.nativenotipad == 1 && o.system.ipad) {
                    x = false
                }
                if (v.nativenotios == 1 && o.system.ios) {
                    x = false
                }
                if (v.nativenotandroid == 1 && o.system.android) {
                    x = false
                }
            }
            if (v.nativeontv == 1 && o.system.tv) {
                x = true
            }
            return x
        };
        this.Metadata = function () {
            o.media.Volume(v.volume);
            if (o.muted) {
                o.media.Mute()
            }
            o.metadata = true;
            o.controls ? o.controls.refresh() : '';
            if (!o.play && !o.start) {
                v.effects == 1 ? o.effects.api("pause") : ''
            }
            if (o.casting && o.tagvideo) {
                o.chromecast.Exit();
                o.chromecast.Go()
            }
            if (v.vast == 1) {
                if (v.nomidroll != 1 && v.midrolls == 1) {
                    !exist(o.vast) ? MidrollOverlay("midroll", "metadata") : ''
                }
            }
        };
        this.onPlayTag = function () {
            !o.onplay ? onPlay(true) : ''
        };

        function onPlay(x) {
            o.onplay = true;
            if (o.controls) {
                if (o.controls.SettingsVisible()) {
                    o.controls.Settings()
                }
            }
            if (o.droplist) {
                o.droplist.Close()
            } !x ? o.media.Play() : '';
            if (!o.checknative) {
                setTimeout(function () {
                    o.media.NativeControls()
                }, 500)
            } !o.play ? o.controls.Play() : '';
            v.effects == 1 ? o.effects.api("play") : '';
            v.vast == 1 ? o.actions.VastRecover('pauseroll') : '';
            if (o.system.mobile) {
                o.controls.HideInterval()
            }
            if (exist(o.share)) {
                o.share.isOpen() ? o.share.Hide() : ''
            }
            if (v.heartbeats == 1 && exist(v.heartbeat) && o.dt) {
                if (v.heartbeat != '' && !exist(o.heartbeatInterval)) {
                    o.heartbeatInterval = setInterval(Heartbeat, v.heartbeatinterval * 1000);
                    Heartbeat()
                }
            }
        }
        this.Play = function (noads) {
            if (!o.play && o.media) {
                o.actplay = true;
                var stop = false;
                if (o.file_type == "youtube") {
                    if (!o.media.YoutubeReady() && v.autoplay != 1 && v.preload == 1) {
                        stop = true;
                        if (window['YT']) {
                            v.autoplay = 1;
                            o.media.onYoutubeReady()
                        }
                    }
                }
                if (v.pass == 1 && v.passontime == 0) {
                    o.actions.Password();
                    stop = true
                }
                if (o.media_error || stop) {
                    if (o.media_error) {
                        Advertising("preroll") ? datetime(2) : ''
                    }
                }
                else {
                    o.newfile = false;
                    StopOtherPlayer(!o.start);
                    o.alert.close();
                    if (!o.start) {
                        js("start");
                        o.start = true;
                        if (v.toolbar.hideuntilstarted == 1) {
                            setTimeout(function () {
                                o.controls.resizetext()
                            }, 100)
                        }
                        if (v.toolbar.hideleavetimeout > 0 && v.autoplay == 1) {
                            o.starttimeout = true;
                            setTimeout(StartTimeout, v.toolbar.hideleavetimeout * 1000)
                        }
                        if (v.water == 1 && v.wid) {
                            PluginWater()
                        }
                        for (var i = 0; i < o.vsts.length; i++) {
                            if (v['vast_nofirst' + o.vsts[i]] == 1) {
                                localStorage.setItem("pljsfirst" + o.vsts[i], Date.now())
                            }
                        }
                        if (v.pjsstat == 1 && v.pjsstatid) {
                            PluginStat("start")
                        }
                        js("new");
                        o.controls.startcss();
                        o.controls.refresh();
                        gaTracker("play", "Play");
                        o.ab ? gaTracker("adblock", "AdBlock", 1) : ''
                    }
                    else {
                        gaTracker("resume", "Resume")
                    }
                    if (v.fullonplay == 1 && !o.fullscreen) {
                        var dd = new Date();
                        var tt = dd.getTime();
                        if (tt - o.clicktime < 300) {
                            if (v.fullonplaymobile == 1) {
                                o.system.mobile ? this.Fullscreen() : ''
                            }
                            else {
                                this.Fullscreen()
                            }
                        }
                    }
                    if (o.subtitle_on) {
                        if (v.subpausehide == 1) {
                            show2(o.subtitle)
                        }
                    }
                    if (o.err404v) {
                        o.err404v.remove()
                    }
                    if (noads != 1 && Advertising("preroll") || Advertising("intro")) {
                        datetime(2)
                    }
                    else {
                        if (v.redirect == 1 && exist(v.redirectonplay) && !exist(options.redirect)) {
                            redirect(v.redirectonplay);
                            stop = true
                        }
                        if (!stop) {
                            log("Play");
                            if (o.file_type != 'pdf') {
                                o.media.duration() > 0 ? o.controls.Duration(o.media.time(), o.media.duration()) : ''
                            }
                            if (!o.start2) {
                                o.start2 = true;
                                if (v.toolbar.hideleavetimeout > 0 && v.autoplay == 1) {
                                    o.starttimeout = true;
                                    setTimeout(StartTimeout, v.toolbar.hideleavetimeout * 1000)
                                }
                            }
                            var playroll = false;
                            if (o.media.time() > 1 && v.pauserollonplay == 1 && noads != 1 && !isVastBgLoad() && !exist(o.vast) && !exist(o.vastloader)) {
                                playroll = Advertising("pauseroll")
                            }
                            if (playroll) {
                                isVastBgLoad() ? onPlay(false) : ''
                            }
                            else {
                                onPlay(false)
                            }
                        }
                    }
                }
            }
            else {
                o.media ? o.media.Play() : ''
            }
        };

        function StartTimeout() {
            o.starttimeout = false;
            o.controls.refresh()
        }
        this.Pause = function () {
            if (o.play) {
                o.actplay = false;
                log("Pause");
                o.media.Pause();
                o.controls.Pause();
                js("pause");
                v.posteronpause == 1 ? ShowPoster() : '';
                v.posterhidepause == 1 ? HidePoster2() : '';
                v.effects == 1 ? o.effects.api("pause") : '';
                if (o.subtitle_on) {
                    if (v.subpausehide == 1) {
                        hide2(o.subtitle)
                    }
                }
                if (!exist(o.vast) && !exist(o.vastloader) && v.pauserollonplay == 0) {
                    Advertising("pauseroll")
                }
                o.onplay = false
            }
        };
        this.Mute = function () {
            o.media.Mute();
            o.controls.Mute();
            o.muted = true;
            js("mute")
        };
        this.Unmute = function () {
            o.media.Unmute();
            o.muted = false;
            o.controls.Unmute();
            o.media.Volume(v.volume);
            js("unmute")
        };
        this.Volume = function (x, y) {
            x < 0.01 ? x = 0 : '';
            x > 1 ? x = 1 : '';
            if (x <= 0) {
                this.Mute();
                v.volume = 0;
                x = 0
            }
            else {
                if (o.muted) {
                    this.Unmute()
                }
                v.volume = x
            }
            js("volume", x);
            o.controls.Volume(x, y);
            o.media.Volume(x)
        };
        this.Waiting = function () {
            o.controls.Waiting()
        };
        this.StopWaiting = function () {
            o.controls ? o.controls.StopWaiting() : ''
        };
        this.Progress = function () {
            this.StopWaiting()
        };
        this.Seeked = function () {
            o.actions.UpdatePlay();
            this.StopWaiting()
        };
        this.Duration = function (time, duration) {
            if (o.continue && !o.start) {
                var f = o.continue.flag();
                if (f.t && f.d) {
                    time = f.t
                }
            }
            o.controls ? o.controls.Duration(time, duration) : ''
        };
        this.LoadedData = function (time, duration) {
            if (exist(o.seekto) && o.file_type != "youtube" && !o.media.isLive()) {
                o.actions.Seek(o.seekto, false);
                o.seekto = undefined
            }
        };
        this.ScreenClick = function () {
            var d = new Date();
            o.clicktime = d.getTime();
            var x = false;
            if (o.controls.SettingsVisible() && v.settings.always != 1) {
                o.controls.Settings();
                x = true
            }
            if (o.droplist) {
                if (o.droplist.Visible()) {
                    o.droplist.Close();
                    x = true
                }
            }
            if (v.playlist.always == 0) {
                if (o.controls.PlaylistVisible() && v.playlist.autohide == 1) {
                    o.controls.Playlist();
                    x = true
                }
            }
            if (v.redirect == 1 && exist(v.redirectonclick) && !exist(options.redirect)) {
                redirect(v.redirectonclick);
                x = true
            }
            if (o.muted && v.unmuteonclick == 1) {
                o.actions.Unmute();
                v.unmuteonclick = 0;
                x = true
            }
            if (!x) {
                if (v.hotkey.on == 1 && v.hotkey.icons == 1 && v.hotkey.playiconbut == 1) {
                    PluginHotIcon('play', (o.play ? 0 : 1))
                }
                this.Toggle()
            }
        };
        this.ControlsBgClick = function () {
            if (o.controls.SettingsVisible()) {
                o.controls.Settings()
            }
        };
        this.Toggle = function () {
            if (o.media.status() == "playing") {
                v.scrnstp == 1 ? this.StopMedia() : this.Pause()
            }
            else {
                this.Play()
            }
            Sub()
        };
        this.Seek = function (sec, hand) {
            if (sec < o.media.duration()) {
                if (v.control_line.dontseekforward == 1) {
                    if (sec > o.media.time()) {
                        return
                    }
                }
                if (v.delete > 0) {
                    sec < v.delete ? sec = v.delete : ''
                }
                o.seeked_time = sec;
                o.media.Seek(sec);
                if (hand) {
                    o.controls.Seek(sec, o.media.duration())
                }
                o.seeking = true;
                o.seeking_time = o.media.time();
                Sub(o.seeking_time)
            }
        };
        this.Open = function (url, target, endfull) {
            if (o.media.status() == "playing" && o.mode != 'audio') {
                Pause();
                if (o.fullscreen && endfull) {
                    o.actions.Normalscreen()
                }
            }
            window.open(url, target)
        };
        this.Download = function () {
            var x = o.media.currentFile();
            if (exist(v.download)) {
                x = v.download
            }
            if (x != '') {
                js("download");
                var win = window.open(x, (v.downself == 1 ? '_self' : '_blank'));
                win.focus()
            }
        };
        this.UpdatePlay = function () {
            var time = o.media.time();
            var duration = o.media.duration();
            o.controls.Played(time, duration)
        };
        this.Playing = function () {
            var time = o.media.time();
            var duration = o.media.duration();
            var delta = duration > 0 ? time / duration : 0;
            if (!o.seeking) {
                o.controls ? o.controls.Played((o.seekto > 0 ? o.seekto : time), duration) : ''
            }
            else {
                time != o.seeking_time ? o.seeking = false : ''
            }
            if ((v.ga == 1 || v.yamtr == 1) && duration > 0) {
                gaTrackPlay("play25", "Play 25%", delta, 0.25);
                gaTrackPlay("play50", "Play 50%", delta, 0.50);
                gaTrackPlay("play75", "Play 75%", delta, 0.75)
            }
            for (var i = 0; i < 3; i++) {
                if (!o.quartile[i]) {
                    if (delta >= i * 0.25 + 0.25) {
                        Quartile(i)
                    }
                }
            }
            v.reloadlog == 1 ? log(1, time, duration) : '';
            if (v.reload == 1) {
                if (o.play) {
                    var z = false;
                    var rld = false;
                    if (v.reloadlive == 1) {
                        if (!o.media.isLive()) {
                            z = true
                        }
                    }
                    if (time > 0) {
                        if (time == o.time && !z) {
                            rld = true
                        }
                        else {
                            o.reloadTimer = 0
                        }
                        o.time = time
                    }
                    else {
                        if (v.reloadstart == 1) {
                            var ld = o.media.loaded();
                            v.reloadlog == 1 ? log(2, ld, o.timeld) : '';
                            if (!z) {
                                if (ld == o.timeld) {
                                    rld = true
                                }
                                else {
                                    o.reloadTimer = 0
                                }
                            }
                            o.timeld = ld
                        }
                    }
                    if (rld) {
                        o.reloadTimer++;
                        v.reloadlog == 1 ? log(3, o.reloadTimer) : '';
                        if (o.reloadTimer == v.reloadtimeout * (1000 / o.timerTime)) {
                            o.actions.Reload()
                        }
                    }
                }
            }
            if (v.apiprm) {
                if (v.apiprm.pld == 1 && duration > 0) {
                    !o.pld ? o.pld = [] : '';
                    o.pld[Math.round(time)] = 1
                }
            }
            if (v.vast == 1) {
                if (v.nomidroll != 1 && v.midrolls == 1) {
                    !exist(o.vast) ? MidrollOverlay("midroll", time, duration) : ''
                }
                if (v.nooverlay != 1 && v.overlays == 1) {
                    !exist(o.vast) ? MidrollOverlay("overlay", time, duration) : ''
                }
            }
            if (v.intros == 1 && v.introstart > 0) {
                if (time >= v.introstart) {
                    if (!exist(o.vast)) {
                        if (Advertising("intro")) {
                            o.media.Pause();
                            o.controls.Pause()
                        }
                        v.introstart = 0
                    }
                }
            }
            SettingsTimers("play");
            if (v.pass == 1 && v.passontime > -1) {
                PasswordTime(time, duration)
            }
            if (o.subtitle_on) {
                Sub(time)
            }
            if (o.storage && v.timestore == 1) {
                if (o.continue) {
                    o.continue.write(time, duration)
                }
            }
            if (o.cutted) {
                o.cut ? o.cut.play(time) : ''
            }
            if (exist(v.end)) {
                if (v.end > 0 && time > v.end) {
                    if (o.file_type == "youtube") {
                        o.media.Pause();
                        o.media.Seek(v.start > 0 ? v.start : 0)
                    }
                    else {
                        o.media.Recover();
                        o.actions.Stop()
                    }
                    v.start > 0 ? o.seekto = v.start : '';
                    o.actions.Ended()
                }
            }
            if (exist(v.remove)) {
                var r1 = v.remove.split(",");
                for (var i = 0; i < r1.length; i++) {
                    var r2 = r1[i].split("-");
                    if (r2.length == 2) {
                        if (time > r2[0] && time < r2[1]) {
                            o.media.Seek(r2[1] * 1 + (o.system.safari ? 1 : 0))
                        }
                    }
                }
            }
            if (v.tracking == 1) {
                if (typeof PluginTrack !== "undefined") {
                    PluginTrack(time, delta)
                }
            }
        };

        function Quartile(x) {
            o.quartile[x] = true;
            if (v.timestore == 1 && v.playedstore == 1 && v.playedquartile == x) {
                if (o.storage && o.plid) {
                    o.continue ? o.continue.writePl(o.plid) : ''
                }
            }
        }

        function gaTrackPlay(x, y, t, p) {
            if (!exist(o.gatracked[y])) {
                if (t > p) {
                    gaTracker(x, y, 1)
                }
            }
        };
        this.Reload = function () {
            o.reloadTimer = 0;
            exist(o.reloadto) ? clearTimeout(o.reloadto) : '';
            if (v.reloadjustevent == 1) {
                js("reload")
            }
            else {
                o.seekto > 0 || o.media.isLive() ? '' : o.seekto = o.media.time() + (v.reloadplus > 0 ? 1 : 0);
                var openpl = o.controls.PlaylistVisible();
                js("reload");
                o.media.reload();
                openpl && v.playlist.autohide == 1 ? o.controls.PlaylistShow() : ''
            }
        };
        this.Stopped = function () {
            o.controls.Played(0, 0);
            o.controls.Loaded(0, 0);
            o.actions.Duration(0, 0);
            o.controls.StopWaiting()
        };
        this.Loading = function () {
            if (o.media) {
                var time = o.media.loaded();
                if (v.pjsiframed == 1) {
                    js("loaded", time)
                }
                var duration = o.media.duration()
            }
            o.controls ? o.controls.Loaded(time, duration) : ''
        };
        this.Ended = function () {
            js("fileend");
            if (v.loop == 1) {
                if (o.file_type == "youtube") {
                    this.Stop()
                }
                v.vast == 1 ? o.actions.VastRecover('preroll') : '';
                if (v.start > 0) {
                    o.actions.Seek(v.start)
                }
                this.Play()
            }
            else {
                if (o.media.isLive() || o.file_type == "youtube") {
                    this.Stop()
                }
                else {
                    if (v.finishrewind == 1) {
                        o.actions.Seek((v.start > 0 ? v.start : 0), true);
                        if (o.system.ie) {
                            o.media.Pause()
                        }
                    }
                }
                o.controls.onEnded();
                v.intros == 1 ? v.outros = 1 : '';
                if (Advertising("postroll") || Advertising("outro")) { }
                else {
                    End()
                }
            }
        };
        this.Fullscreen = function () {
            var stop = false;
            var error = false;
            o.fs_error = false;
            o.fullscreen_process = true;
            setTimeout(function () {
                o.fullscreen_process = false
            }, 3000);
            for (var x in o.motions) {
                if (o.motions.hasOwnProperty(x)) {
                    if (exist(o.motions[x])) {
                        try {
                            o.motions[x].TheEnd2()
                        }
                        catch (e) { }
                    }
                }
            }
            try {
                o.fullscreen_start = true;
                if (((o.system.ios && v.nativefullios == 1) || (o.system.android && v.nativefulldroid == 1)) && o.tagvideo && !o.nativecontrols) {
                    var x = o.media.tag();
                    if (x) {
                        if (x.webkitSupportsFullscreen) {
                            NativeEnterFs();
                            stop = true
                        }
                    }
                }
                if (!stop) {
                    var fspr;
                    var y = o.frame;
                    if ((o.file_type == "dm" || o.file_type == "vimeo") && o.system.iphone && v.nativefullios == 1) {
                        o.media.iosfull();
                        return
                    }
                    if (y.requestFullscreen) {
                        o.realfullscreen = true;
                        fspr = y.requestFullscreen(
                            {
                                navigationUI: "hide"
                            });
                        if (fspr !== undefined) {
                            fspr.then(function () { }).catch(function (error) { })
                        }
                    }
                    else if (y.requestFullScreen) {
                        y.requestFullScreen(
                            {
                                navigationUI: "hide"
                            });
                        o.realfullscreen = true
                    }
                    else if (o.frame.mozRequestFullScreen) {
                        y.mozRequestFullScreen(
                            {
                                navigationUI: "hide"
                            });
                        o.realfullscreen = true
                    }
                    else if (y.webkitRequestFullScreen) {
                        y.webkitRequestFullScreen(
                            {
                                navigationUI: "hide"
                            });
                        o.realfullscreen = true
                    }
                    else if (y.msRequestFullscreen) {
                        y.msRequestFullscreen();
                        o.realfullscreen = true
                    }
                }
            }
            catch (e) {
                error = true;
                log(e)
            }
            if (!o.realfullscreen && !stop) {
                if (o.system.webkit && o.iniframe) {
                    NativeEnterFs()
                }
                else {
                    this.FullscreenUI()
                }
            }
            if (!error) {
                setTimeout(PostFullscreen, 200)
            }
        };

        function NativeEnterFs() {
            var x = o.media.tag();
            if (x) {
                o.nativefull = true;
                o.media.nativeSubtitle();
                x.webkitEnterFullScreen();
                x.addEventListener("webkitendfullscreen", iosExitFullscreen)
            }
        }

        function NativeExitFs() {
            var x = o.media.tag();
            if (x) {
                x.webkitExitFullscreen()
            }
        };
        this.NativeExitFs = function () {
            NativeExitFs()
        };

        function PostFullscreen() {
            if (o.fs_error != true) {
                if (o.ispipkit) {
                    o.media.PipWebkit()
                }
                if (v.hotkey.volumewheelfull == 1) {
                    VolumeWheelX(true);
                    o.volumewheel = true
                }
                v.effects == 1 ? o.effects.api("full") : '';
                js("fullscreen");
                gaTracker("full", "Fullscreen", 1)
            }
        };
        var volumewheelin;
        var lastwheel = {
            x: 0,
            y: 0
        };

        function VolumeWheel(e) {
            if (o.droplist) {
                if (o.droplist.OpenScroll()) {
                    return
                }
            }
            if (e.wheelDelta != 0) {
                if (v.hotkey.scrollwheelfull == 1 && o.fullscreen) { }
                else {
                    o.hidden_volume_over = true;
                    clearInterval(volumewheelin);
                    volumewheelin = setInterval(function () {
                        o.hidden_volume_over = false;
                        o.controls.resize();
                        lastwheel = {
                            x: 0,
                            y: 0
                        };
                        clearInterval(volumewheelin)
                    }, 2000);
                    o.controls.resize();
                    e.preventDefault()
                }
                e.deltaX != 0 ? lastwheel.x++ : lastwheel.x--;
                e.deltaY != 0 ? lastwheel.y++ : lastwheel.y--;
                if (lastwheel.x > lastwheel.y) {
                    if (e.deltaX > 0) {
                        o.actions.Volume(parseFloat(v.volume) - v.hotkey.wheelstep / 10, "no")
                    }
                    else {
                        o.actions.Volume(parseFloat(v.volume) + v.hotkey.wheelstep / 10, "no")
                    }
                }
                else {
                    var st = (o.system.win ? -v.hotkey.wheelstep / 10 : v.hotkey.wheelstep / 10);
                    if (v.hotkey.scrollwheelfull == 1 && o.fullscreen) {
                        o.media.scale((e.deltaY > 0 ? st : -st))
                    }
                    else {
                        o.actions.Volume(parseFloat(v.volume) + (e.deltaY > 0 ? st : -st), "no");
                        o.controls.volumescroll()
                    }
                }
            }
        }

        function iosExitFullscreen() {
            if (o.system.ios) {
                o.media.removeNativeSubtitle();
                js("exitfullscreen")
            }
            o.nativefull = false
        }
        this.FullscreenUI = function () {
            if (o.fullscreen_start) {
                o.fullscreen = true;
                o.controls.Fullscreen();
                if (!o.realfullscreen) {
                    if (exist(o.parentIframe)) {
                        try {
                            css(o.parentIframe,
                                {
                                    'width': '100%',
                                    'height': '100%',
                                    'position': 'fixed',
                                    'left': 0,
                                    'top': 0,
                                    'zIndex': "100000"
                                })
                        }
                        catch (err) { }
                    }
                    css(o.frame,
                        {
                            'width': '100%',
                            'height': '100%',
                            'position': 'fixed',
                            'left': 0,
                            'top': 0,
                            'zIndex': "100000"
                        });
                    o.screen_w = o.frame.offsetWidth;
                    o.screen_h = o.frame.offsetHeight;
                    try {
                        document.body.style.overflow = 'hidden';
                        if (!exist(o.playlist)) {
                            document.ontouchmove = function (e) {
                                e.preventDefault()
                            }
                        }
                    }
                    catch (err) { }
                }
                if (v.fullblack == 1) {
                    css(o.frame,
                        {
                            'backgroundColor': '#000000'
                        })
                }
                if (v.fullzoom > 1 && o.system.wkdt == 1) {
                    o.frame.style.zoom = v.fullzoom
                }
                if (o.droplist) {
                    o.droplist.Close()
                }
                Sub();
                o.fullscreen_start = false
            }
        };
        this.Normalscreen = function () {
            _fullscreen_end = true;
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            }
            else if (document.exitFullscreen) {
                document.exitFullscreen()
            }
            else if (document.cancelFullscreen) {
                document.cancelFullscreen()
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
            if (!o.realfullscreen) {
                this.NormalscreenUI(false)
            }
        };
        this.changeAspect = function (x, y) {
            NewAspect(x, y)
        };

        function NewAspect(x, frmvst) {
            if (exist(o.vast) && !frmvst) {
                o.resizeonplay = x
            }
            else {
                var stop = false;
                var coh = o.container_w / x;
                if (exist(o.parentIframe) && v.notframe != 1) {
                    try {
                        css(o.parentIframe,
                            {
                                'height': coh
                            })
                    }
                    catch (err) {
                        stop = true;
                        log("iframe crossdomain issue")
                    }
                }
                if (!stop) {
                    o.aspect = x;
                    o.container_h = coh;
                    if (o.aspect > 0) {
                        css(o.container,
                            {
                                'height': coh
                            })
                    }
                    js("height", coh)
                }
                if (o.vast && !o.fullscreen) {
                    o.screen_h = coh;
                    o.vast.Resize()
                }
            }
        };
        this.NormalscreenUI = function (x) {
            if (_fullscreen_end || x) {
                o.fullscreen = false;
                o.nativefull = false;
                if (!o.realfullscreen) {
                    if (exist(o.parentIframe)) {
                        try {
                            css(o.parentIframe,
                                {
                                    'position': 'static',
                                    'left': 0,
                                    'top': 0,
                                    'zIndex': 'unset'
                                });
                            css(o.parentIframe, o.parentIframe_style);
                            css(o.parentIframe,
                                {
                                    'width': o.normal_w,
                                    'height': o.normal_h
                                })
                        }
                        catch (err) { }
                    }
                    css(o.frame,
                        {
                            'width': o.normal_w,
                            'height': o.normal_h,
                            'position': 'absolute',
                            'left': 0,
                            'top': 0,
                            'zIndex': 'unset'
                        });
                    try {
                        document.body.style.overflow = 'auto';
                        document.ontouchmove = function (e) {
                            return true
                        }
                    }
                    catch (err) { }
                }
                o.controls.Normalscreen();
                if (v.fullblack == 1) {
                    css(o.frame,
                        {
                            'backgroundColor': v.screencolor
                        });
                    if (v.transparent == 1) {
                        o.frame.style.backgroundColor = 'transparent'
                    }
                    else {
                        css(o.frame,
                            {
                                'backgroundColor': v.screencolor
                            })
                    }
                }
                if (v.fullzoom > 1 && o.system.wkdt == 1) {
                    o.frame.style.zoom = 1
                }
                if (v.hotkey.volumewheelfull == 1) {
                    VolumeWheelX(false);
                    o.volumewheel = false
                }
                if (o.droplist) {
                    o.droplist.Close()
                }
                Sub();
                o.subdrag ? o.subdrag = false : '';
                o.controls.PlaylistHere();
                _fullscreen_end = false;
                js("exitfullscreen");
                o.realfullscreen = false;
                o.fullscreen_process = false
            }
        };
        this.volumewheel = function (x) {
            VolumeWheelX(x)
        };

        function VolumeWheelX(x) {
            lastwheel = {
                x: 0,
                y: 0
            };
            if (x) {
                window.addEventListener("wheel", VolumeWheel)
            }
            else {
                clearInterval(volumewheelin);
                window.removeEventListener("wheel", VolumeWheel)
            }
        }
        this.Stop = function () {
            v.preload = 0;
            o.controls.Pause();
            o.actions.Stopped();
            o.media.Volume(v.volume);
            if (o.controls.SettingsVisible()) {
                o.controls.Settings()
            }
            if (o.muted) {
                this.Mute()
            }
            if (exist(o.heartbeatInterval)) {
                clearInterval(o.heartbeatInterval);
                o.heartbeatInterval = null
            }
            Sub(0);
            log("stop");
            js("stop")
        };
        this.StopMedia = function () {
            v.preload = 0;
            v.autoplay = 0;
            o.media.Recover();
            o.actions.Stop()
        };
        this.SetQuality = function (x) {
            if (exist(o.current_quality)) {
                if (o.current_quality != x) {
                    o.current_quality = x;
                    if (v.qualitystore == 1) {
                        o.default_quality = o.files_quality[x];
                        if (o.storage) {
                            localStorage.setItem("pljsquality", o.default_quality)
                        }
                    }
                    o.media.SetQuality(x);
                    js("quality", o.files_quality[x]);
                    o.controls.QualityChanged(x)
                }
            }
        };
        this.AirplayChanged = function () {
            o.controls ? o.controls.AirplayChanged() : ''
        };
        this.SetAudioTrack = function (x) {
            if (exist(o.current_audiotrack)) {
                if (o.current_audiotrack != x) {
                    o.current_audiotrack = x;
                    if (v.trackstore == 1) {
                        o.default_audio = v.default_audio = o.files_audiotrack[x];
                        if (o.storage) {
                            localStorage.setItem("pljstrack", o.default_audio)
                        }
                    }
                    o.media.SetAudioTrack(x);
                    js("audiotrack", x);
                    o.controls.SettingChanged("audiotrack")
                }
            }
        };
        this.SetSpeed = function (x, z) {
            x == '0.0' ? x = 0.1 : '';
            var y = x;
            String(y).indexOf('.') > 0 ? z = 1 : '';
            y = y * 1;
            if (!z) {
                y = x == o.speed1 ? 1 : o.files_speed[x];
                o.current_speed = x
            }
            if (o.line_speed || z) {
                if (x == o.custom_speed) {
                    return
                }
                o.custom_speed = y;
                for (var i = 0; i < o.files_speed.length; i++) {
                    if (y <= o.files_speed[i] * 1) {
                        o.current_speed = i;
                        break
                    }
                }
            }
            if (o.storage && v.speedstore == 1) {
                localStorage.setItem("pljsspeed", y)
            }
            js("speed", y);
            o.media.SetSpeed(y);
            o.controls.SettingChanged("speed")
        };

        function Sub(x) {
            o.sbt ? o.sbt.show(exist(x) ? x : o.media.time()) : ''
        };
        this.RenewSubtitle = function () {
            if (o.sbt) {
                Sub();
                o.sbt.style()
            }
        };
        this.Subtitle = function (x) {
            if (typeof (PluginSub) == 'function') {
                !o.sbt ? o.sbt = new PluginSub() : '';
                o.sbt.start(x)
            }
        };
        var vast_and;
        var vast_or;
        var vast_type;
        var vasturl;

        function Advertising(x) {
            if (v["vast_" + x + "timebreak"] > 0 && o.storage) {
                var tb = localStorage.getItem("pljs" + x + "_" + o.d);
                if (tb) {
                    var ct = new Date();
                    o.clicktime = ct.getTime();
                    var ct2 = (ct.getTime() - tb) / 3600000;
                    if (ct2 < v["vast_" + x + "timebreak"]) {
                        return false
                    }
                }
            }
            if (v["vast_" + x + "timelimit"] > 0) {
                if (o.media.duration() > 0) {
                    if (o.media.duration() < v["vast_" + x + "timelimit"] * 60) {
                        if (v["vast_" + x + "timelimited"] > 0) {
                            v["vast_" + x + "_" + "andlimit"] = v["vast_" + x + "timelimited"]
                        }
                        else {
                            return false
                        }
                    }
                }
            }
            if (o.compilations.indexOf("VAST") != -1 && v.vast == 1 && !o.noads && v[x + 's'] == 1) {
                if (typeof VastVideo == "undefined") {
                    return false
                }
                if (x == "intro" || x == "outro") {
                    if (typeof PluginIntro !== "undefined") {
                        vasturl = [];
                        return PluginIntro(x)
                    }
                }
                if (exist(o.vast) || exist(o.vastloader)) {
                    if (!isVisible(o.vastcontainer) || isVastBgLoad(o.vasttype)) {
                        log('ad bg');
                        return false
                    }
                    else {
                        log('ad now');
                        return true
                    }
                }
                else {
                    if (exist(v[x])) {
                        if (v[x].toString().indexOf(".") > -1 || v[x].toString().indexOf(":") > -1 || v[x].toString().indexOf("[yandex]") > -1) {
                            js("vast_init", x);
                            if (!isVastBgLoad(x) && x != "overlay") {
                                setTimeout(function () {
                                    o.play || (o.vastloader == null && o.vast == null) ? '' : o.actions.Waiting()
                                }, 10);
                                Curtain()
                            }
                            vast_and = 0;
                            vast_or = 0;
                            vast_type = x;
                            vasturl = v[x].split(" and ");
                            o.vast_loaders = [];
                            o.adsinchain = vasturl.length;
                            VastAndLimit();
                            o.adscounter = 1;
                            o.adsfirst = true;
                            for (var i = 0; i < vasturl.length; i++) {
                                vasturl[i] = vasturl[i].split(" or ")
                            }
                            v[x.concat("_", "recover")] = v[x];
                            v[x] = null;
                            o.vasttype = x;
                            if (x != 'overlay') {
                                o.vast = new VastVideo()
                            }
                            o.vastloader = new VastLoader();
                            for (var i = 0; i < vasturl.length; i++) {
                                for (var j = 0; j < vasturl[i].length; j++) {
                                    var _url = trim(vasturl[i][j]);
                                    if (_url.indexOf("[50%]") > 0) {
                                        var tmp = random(1, 2);
                                        vasturl[i][j] = vasturl[i][j].replace("[50%]", "");
                                        if (tmp == 2) {
                                            vasturl[i][j] = ''
                                        }
                                    }
                                }
                            }
                            if (v.vast_preload == 1) {
                                for (var i = 0; i < vasturl.length; i++) {
                                    var n = i == 0 ? 1 : 0;
                                    if (vasturl[i].length > n) {
                                        for (var j = n; j < vasturl[i].length; j++) {
                                            var _url = trim(vasturl[i][j]);
                                            if (o.system.ie9) {
                                                VastAddPreload(_url)
                                            }
                                            else {
                                                setTimeout(VastAddPreload, i * 100, _url)
                                            }
                                        }
                                    }
                                }
                            }
                            if (vasturl[0][0] == '') {
                                VastNext()
                            }
                            else {
                                o.vastloader.Load(trim(vasturl[0][0]), x)
                            }
                            return true
                        }
                        else {
                            return false
                        }
                    }
                    else {
                        return false
                    }
                }
            }
            else {
                return false
            }
        };
        this.advertising = function (x) {
            Advertising(x)
        };

        function MidrollOverlay(w, x, d) {
            if (exist(o[w + 'o']) && v[w + 's'] == 1) {
                var y;
                for (var i in o[w + 'o']) {
                    if (o[w + 'o'].hasOwnProperty(i)) {
                        if (!exist(o[w + 'o'][i].worked) && exist(o[w + 'o'][i].time) && exist(o[w + 'o'][i].vast)) {
                            var z = o[w + 'o'][i].time.toString();
                            var ok = false;
                            if (z) {
                                if (x == "metadata") {
                                    if (z == x) {
                                        ok = true
                                    }
                                }
                                else {
                                    if (z.indexOf("%") > 0) {
                                        if (d > 0) {
                                            z = parseInt(z.substr(0, z.indexOf("%"))) * d / 100
                                        }
                                        else {
                                            z = -1
                                        }
                                    }
                                    else {
                                        z = parseInt(z)
                                    }
                                    if (x >= z) {
                                        if (v['vast_' + w + 'rest'] > 0 && z > -1) {
                                            if (x - z >= v['vast_' + w + 'rest']) {
                                                z = -1
                                            }
                                        }
                                        if (z > -1) {
                                            ok = true
                                        }
                                    }
                                }
                                if (o[w + 'o'][i].minduration && o.media.duration() > 0) {
                                    if (o.media.duration() < o[w + 'o'][i].minduration * 1) {
                                        o[w + 'o'][i].worked = true;
                                        ok = false
                                    }
                                }
                                if (ok) {
                                    y = o[w + 'o'][i].vast;
                                    v[w] = o[w + 'o'][i].vast;
                                    o[w + 'crtm'] = o[w + 'o'][i].time;
                                    o[w + 'skipimprsd'] = o[w + 'o'][i].skipimpessed;
                                    if (Advertising(w)) {
                                        o[w + 'o'][i].worked = true;
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        function VastBgLoad() {
            if (isVastBgLoad()) {
                if (o.vast_impressions == 0 || v['vast_' + o.vasttype + 'bgload2'] == 1) {
                    css(o.vastcontainer,
                        {
                            "opacity": 0,
                            "visibility": "hidden",
                            "top": 2000
                        });
                    log(o.vasttype + " hide")
                }
            }
        }

        function isVastBgLoad(z) {
            var y = false;
            var x = ['midroll', 'pauseroll'];
            for (var i = 0; i < x.length; i++) {
                if (o.vasttype == x[i] || z == x[i]) {
                    if (v['vast_' + x[i] + 'bgload'] == 1) {
                        y = true
                    }
                }
            }
            return y
        };
        this.isVastBgLoad = function (x) {
            return isVastBgLoad(x)
        };
        this.VastImpression = function (x) {
            x ? '' : VastVisible();
            o.vasttype == "midroll" ? o.midrollimprsd.push(o.current_vast_url) : ''
        };
        this.VpaidStarted = function () {
            VastVisible()
        };
        this.VastShow = function () {
            VastVisible()
        };

        function VastVisible() {
            if (isVastBgLoad()) {
                if (o.play) {
                    o.media.Pause();
                    o.controls.Pause()
                }
                log(o.vasttype + " show");
                css(o.vastcontainer,
                    {
                        "opacity": 1,
                        "visibility": "visible",
                        "top": 0
                    });
                o.vastfrombg = 1
            }
            if (o.nativefull && !o.realfullscreen) {
                NativeExitFs()
            }
            else {
                if (v["vast_" + o.vasttype + "normal"] == 1 && o.fullscreen) {
                    o.actions.Normalscreen()
                }
            }
        };
        this.VastReady = function (x) {
            o.vastloader = null;
            o.vastfrombg = 0;
            log("VAST ready", o.vasttype);
            js("vast_ready", o.vasttype);
            if (x.type == "overlay") {
                var ovr = new VastOverlay(x);
                o.overlays.push(ovr)
            }
            else {
                if (exist(o.vast)) {
                    if (v.preload == 0 && v.vastbgpreload == 1 && o.media.time() == 0 && o.media.duration() == 0) {
                        v.preload = 1;
                        o.media.Preload()
                    }
                    if ((!o.vast.tagLive() || x.isVpaid) && o.vastgo > 0) {
                        log("VAST renew");
                        o.vast.Remove();
                        o.vast = null;
                        o.vast = new VastVideo()
                    }
                    if (isVastBgLoad()) {
                        VastBgLoad()
                    }
                    else {
                        if (o.play) {
                            o.media.Pause();
                            o.controls.Pause()
                        }
                    }
                    o.vastgo++;
                    if (o.adsfirst && v.vast_longtimeout > 0) {
                        clearTimeout(o.vast_longtimeout);
                        o.vast_longtimeout = setTimeout(VastLongTimeout, v.vast_longtimeout * 1000 * 60);
                        if (exist(v.vast_longtimemsg)) {
                            if (v.vast_longtimemsg != '') {
                                o.vast_longtomsg ? o.vast_longtomsg.remove() : '';
                                o.vast_longtomsg = new PluginVastTimeMsg()
                            }
                        }
                    }
                    o.adsfirst = false;
                    if (v.vast_prestarttimeout > 0) {
                        log("VAST startdelay");
                        js("vast_startdelay");
                        setTimeout(VastGo, v.vast_prestarttimeout * 1000, x)
                    }
                    else {
                        VastGo(x)
                    }
                }
                else {
                    log("VAST alarm")
                }
            }
        };

        function VastGo(x) {
            o.vast.Go(x)
        }

        function VastLongTimeout() {
            if (exist(o.vast)) {
                if (o.vast.active() && o.vast_impressions == 0) {
                    o.vast.RemoveForNextAd();
                    log("VAST timeout " + v.vast_longtimeout);
                    vasturl = [];
                    VastRemoveAndPlay()
                }
            }
        }
        this.VastError = function () {
            js('vast_error', o.vasttype);
            log("VAST error");
            VastCheckNext()
        };
        this.VastNext = function () {
            VastCheckNext()
        };

        function VastCheckNext() {
            var n = VastAndLimit();
            log("VAST next " + !n);
            !n ? VastNext() : VastRemoveAndPlay()
        };
        this.VastRemoveUrl = function (x) {
            if (v[o.vasttype + "_recover"]) {
                for (var i = 0; i < 3; i++) {
                    v[o.vasttype + "_recover"] = v[o.vasttype + "_recover"].replace(x + (i == 0 ? ' and ' : (i == 1 ? ' or ' : '')), '')
                }
            }
        };

        function VastAndLimit() {
            var x = false;
            if (o.vasttype) {
                var val = v['vast_' + o.vasttype + '_' + 'andlimit'];
                var va2l = v['vast_' + o.vasttype + '_' + 'and2limit'];
                if (va2l || val) {
                    if (va2l > 0 && o.vast_starts > 0) {
                        o.adsinchain = va2l;
                        if (o.vast_impressions >= va2l) {
                            x = true
                        }
                    }
                    else {
                        if (val > 0) {
                            o.adsinchain = val;
                            if (o.vast_impressions >= val) {
                                x = true
                            }
                        }
                    }
                }
            }
            return x
        }

        function VastNext() {
            if (vasturl.length > 0 && vasturl[vast_and]) {
                if (vast_or < vasturl[vast_and].length - 1) {
                    log("VAST Next");
                    o.vast ? o.vast.RemoveForNextAd() : '';
                    VastBgLoad();
                    vast_or++;
                    var _url = trim(vasturl[vast_and][vast_or]);
                    var _preloaded = VastPreloaded(_url);
                    if (_preloaded == 'skip') {
                        o.vastloader = new VastLoader();
                        o.vastloader.Load(_url, o.vasttype)
                    }
                    if (_preloaded == 'error') {
                        VastNext()
                    }
                }
                else {
                    VastRemoveAndPlay()
                }
            }
            else {
                VastRemoveAndPlay()
            }
        }

        function VastPreloaded(_url) {
            var x = 'skip';
            if (v.vast_preload == 1 && o.vast_loaders) {
                var find = false;
                var n = 0;
                for (var i = 0; i < o.vast_loaders.length; i++) {
                    if (o.vast_loaders[i].done == 0) {
                        if (o.vast_loaders[i].ldr.preloaded(_url)) {
                            o.vast_loaders[i].done = 1;
                            var y = o.vast_loaders[i].ldr.Status();
                            if (y == 'ready') {
                                o.vastloader = o.vast_loaders[i].ldr;
                                log("VAST preloaded");
                                o.vast_loaders[i].ldr.Ready();
                                x = y
                            }
                            else {
                                if (y == '') {
                                    x = 'ok';
                                    log("VAST preloading");
                                    o.vastloader = o.vast_loaders[i].ldr;
                                    o.vast_loaders[i].ldr.disablePreload()
                                }
                                if (y == 'error') {
                                    x = 'error'
                                }
                            }
                            find = true
                        }
                        if (find && o.vast_loaders[i].load == 0) {
                            n++;
                            if (n < 6) {
                                VastPreloadLoad(o.vast_loaders[i])
                            }
                            else {
                                break
                            }
                        }
                    }
                }
            }
            return x
        }
        this.VastInsertAnd = function (x, y) {
            if (x != '') {
                var z = vast_and;
                var moveOr2end = false;
                if (y) {
                    for (var j = 0; j < vasturl.length; j++) {
                        vasturl[j] == y ? z = j : ''
                    }
                }
                if (vasturl.length == 1) {
                    if (vasturl[0].length > 1 && vast_or < vasturl[0].length - 1 && vasturl[vast_or]) {
                        var last_ors = vasturl[vast_or].slice(1, 99);
                        vasturl[0].splice(vast_or + 1, 99);
                        moveOr2end = true
                    }
                }
                if (typeof (x) == "object") {
                    for (var i = 0; i < x.length; i++) {
                        vasturl.splice(z + i + 1, 0, [x[i]]);
                        if (o.system.ie9) {
                            VastAddPreload(x[i])
                        }
                        else {
                            setTimeout(VastAddPreload, i * 100, x[i])
                        }
                    }
                }
                else {
                    if (typeof (x) == "string") {
                        vasturl.push([x]);
                        VastAddPreload(x)
                    }
                }
                if (moveOr2end) {
                    vasturl[vasturl.length - 1] = vasturl[vasturl.length - 1].concat(last_ors)
                }
            }
        };
        this.VastInsertOr = function (x, y) {
            if (x != '') {
                var z = vast_and;
                if (y) {
                    for (var j = 0; j < vasturl.length; j++) {
                        vasturl[j] == y ? z = j : ''
                    }
                }
                if (vasturl[z]) {
                    if (typeof (x) == "object") {
                        for (var i = 0; i < x.length; i++) {
                            vasturl[z].push(x[i])
                        }
                    }
                    else {
                        if (typeof (x) == "string") {
                            vasturl[z].push(x)
                        }
                    }
                }
            }
        };
        this.VastRemoveAndPlay = function (x) {
            VastRemoveAndPlay(x)
        };

        function VastAddPreload(x) {
            if (v.vast_preload == 1 && o.vast_loaders) {
                var i = 0;
                for (var i = 0; i < vasturl.length; i++) {
                    if (vasturl[i] == x) {
                        if (vast_and >= i) {
                            return
                        }
                        else { }
                    }
                }
                if (vasturl.length == 1 && vasturl[0].length > 1) { }
                else {
                    var n = 0;
                    for (i = 0; i < o.vast_loaders.length; i++) {
                        o.vast_loaders[i].done == 0 ? n++ : ''
                    }
                    o.vast_loaders.push(
                        {
                            load: 0,
                            done: 0,
                            x: trim(x),
                            t: o.vasttype,
                            ldr: new VastLoader(true)
                        });
                    n < 5 ? VastPreloadLoad(o.vast_loaders[o.vast_loaders.length - 1]) : ''
                }
            }
        }

        function VastPreloadLoad(x) {
            if (x) {
                x.load = 1;
                x.ldr.Load(x.x, x.t)
            }
        }

        function VastRemoveAndPlay(dontplay) {
            var stop = VastAndLimit();
            log("VAST remove (" + o.vast_impressions + ")");
            if (vasturl.length > 0 && vast_and == vasturl.length - 1) {
                if (vasturl[0][0].indexOf("js:") == 0) {
                    vast_and = -1;
                    vasturl = [
                        [vasturl[0][0]]
                    ]
                }
            }
            if (o.vast_stop == 2) {
                stop = true
            }
            if (vasturl.length > vast_and + 1 && !stop) {
                o.vast.RemoveForNextAd();
                VastBgLoad();
                vast_and++;
                o.adscounter++;
                vast_or = 0;
                var _url = trim(vasturl[vast_and][0]);
                var _preloaded = VastPreloaded(_url);
                if (_preloaded == 'skip') {
                    o.vastloader = new VastLoader();
                    o.vastloader.Load(_url, vast_type)
                }
                if (_preloaded == 'error') {
                    VastRemoveAndPlay(dontplay)
                }
            }
            else {
                RemoveCurtain();
                o.controls.StopWaiting();
                if (exist(o.vast)) {
                    o.vast.Remove();
                    o.vast = null
                }
                o.vastloader = null;
                vasturl = [];
                vast_or = 0;
                vast_and = 0;
                o.vastfrombg = 0;
                o.shwvstfnsh != 1 ? js("vast_finish", o.vasttype) : '';
                o.shwvstfnsh = 0;
                if (v.vast_ima == 1) {
                    if (o.ima) {
                        try {
                            o.ima.Destroy()
                        }
                        catch (e) {
                            log(o.ima, e)
                        }
                        o.ima = undefined
                    }
                }
                vast_type = '';
                o.vast_impressions = 0;
                o.vpaid_starts = 0;
                clearTimeout(o.vast_longtimeout);
                clearInterval(o.vldcntrInterval);
                o.vast_longtomsg ? o.vast_longtomsg.remove() : '';
                o.vast_starts++;
                if (o.vasttype == "preroll" || (o.vasttype == "pauseroll" && v.pauserollonplay == 1 && o.actplay) || o.vasttype == "midroll") {
                    if (v.file != '?') {
                        o.media.AfterVast();
                        var re;
                        if (o.file_type == "youtube" && !o.vastclick && o.system.ios) {
                            re = true;
                            o.vasttype == "preroll" ? o.media.reYT() : ''
                        }
                        if (re || dontplay == 'dontplay' || v.vast_dontplay == 1) { }
                        else {
                            o.actions.Play(1)
                        }
                    }
                }
                if (o.resizeonplay > 0) {
                    NewAspect(o.resizeonplay);
                    o.resizeonplay = 0
                }
                if (o.vasttype == "postroll") {
                    End()
                }
                o.vastclick = false;
                o.vasttype = null
            }
        };
        this.EmptyVastUrl = function () {
            vasturl = [
                ['']
            ]
        };
        this.VastRecover = function (y) {
            var x = ['preroll', 'pauseroll', 'postroll', 'intro', 'outro'];
            var z;
            for (var i = 0; i < x.length; i++) {
                z = false;
                if (y) {
                    y != x[i] ? z = true : ''
                }
                if (!z && exist(v[x[i].concat("_", "recover")])) {
                    v['vast_' + x[i].concat("_", "limit")]--;
                    if (v['vast_' + x[i].concat("_", "limit")] > 0) {
                        v[x[i]] = v[x[i].concat("_", "recover")];
                        v[x[i].concat("_", "recover")] = null
                    }
                }
            }
            if (y == "preroll" || y == "midroll") {
                if (v.vast_midroll_limit > 1) {
                    if (exist(o.midrollo) && v.midrolls == 1) {
                        for (var i in o.midrollo) {
                            o.midrollo[i].worked = undefined
                        }
                        v.vast_midroll_limit--
                    }
                }
            }
        };
        this.Password = function () {
            Curtain();
            if (exist(o.pass)) {
                o.pass.Remove();
                o.pass = null
            }
            o.pass = new Pass()
        };
        this.RemovePassword = function () {
            RemoveCurtain();
            o.pass.Remove();
            o.pass = null
        };
        this.Curtain = function () {
            Curtain()
        };
        this.RemoveCurtain = function () {
            RemoveCurtain()
        };

        function Curtain() {
            if (o.curtain) { }
            else {
                o.curtain = createElement("div");
                o.frame.appendChild(o.curtain);
                Pos0(o.curtain);
                css(o.curtain,
                    {
                        "background": "#000000",
                        "opacity": 0.1
                    });
                o.curtain.style.zIndex = 1001
            }
        };

        function RemoveCurtain() {
            if (o.curtain) {
                o.frame.removeChild(o.curtain);
                o.curtain = null
            }
        };

        function ShowPoster() {
            if (exist(o.poster)) {
                if (v.poster != o.currentposter) {
                    Poster(v.poster, o.poster, v.poster_scale)
                }
                show(o.poster);
                css(o.poster,
                    {
                        "opacity": v.poster_a
                    });
                o.controls.refresh()
            }
        };
        this.HidePoster = function () {
            if (exist(o.poster)) {
                if (isVisible(o.poster)) {
                    clearInterval(o.pstrsin);
                    var t = o.media.time();
                    if (t == 0 && v.posterhidestart == 1) { }
                    else {
                        if (v.posterhidetime > 0) {
                            clearTimeout(o.pstr_to);
                            o.pstr_to = setTimeout(HidePoster2, v.posterhidetime * 1000)
                        }
                        else {
                            HidePoster2()
                        }
                    }
                }
            }
        };

        function HidePoster2() {
            clearTimeout(o.pstr_to);
            if (v.posteronpause == 1 && !o.play) { }
            else {
                css(o.poster,
                    {
                        "opacity": 0
                    });
                setTimeout(HidePoster3, 500)
            }
        }

        function HidePoster3() {
            if (!o.play && v.posterhide == 1) { }
            else {
                hide(o.poster)
            }
        }
        this.ShowPoster = function () {
            ShowPoster()
        };

        function StopOtherPlayer(x) {
            if (v.stopotherplayers == 1) {
                for (var i = 0; i < pljssglobal.length; i++) {
                    if (pljssglobal[i]) {
                        if (pljssglobal[i].api("id") != v.id) {
                            pljssglobal[i].api('pause')
                        }
                    }
                }
            }
            pljssglobalid = v.id
        }

        function IndexPlaylist(x) {
            var y = Object.keys(x).length;
            if (y > 0) {
                x = IndexPlaylistProcessor(x, y, '', -1)
            }
            return x
        }

        function IndexPlaylistProcessor(x, y, p, j) {
            var x2 = [];
            var stop;
            if (exist(x['playlist'])) {
                x = x['playlist'];
                y = x.length
            }
            var ii = 0;
            for (var i = 0; i < y; i++) {
                stop = false;
                if (exist(x[i]['id'])) {
                    x[i]['pjs_id'] = x[i]['id']
                }
                x[i]['id'] = "x" + p + '-' + i + (exist(x[i]['id']) ? '-' + x[i]['id'] : '');
                j == -1 && i == 0 && !exist(x[i]['folder']) ? o.pl_first_id = x[i]['id'] : '';
                if (!exist(o.pl_first_id)) {
                    j == 0 && !exist(x[i]['folder']) ? o.pl_first_id = x[i]['id'] : ''
                }
                x[i]['pjs_parent'] = p;
                x[i]['pjs_parent_i'] = j;
                x[i]['pjs_i'] = ii;
                if (exist(x[i]['comment'])) {
                    x[i]['title'] = x[i]['comment'];
                    var q1 = x[i]['file'] ? x[i]['file'].indexOf('[') : 0;
                    var q2 = x[i]['file'] ? x[i]['file'].indexOf(']') : 0;
                    if (q1 > 0 && q2 > 0) {
                        var s1 = x[i]['file'].substr(q1 + 1, q2 - q1 - 1);
                        var s2 = s1.split(",");
                        var s3 = '';
                        for (var k = 0; k < s2.length; k++) {
                            s3 += "[" + s2[k] + "]" + x[i]['file'].replace("[" + s1 + "]", s2[k]) + (k < s2.length - 1 ? "," : '')
                        }
                        x[i]['file'] = s3
                    }
                }
                if (exist(x[i]['playlist'])) {
                    x[i]['folder'] = x[i]['playlist']
                }
                if (!exist(x[i]['folder'])) {
                    if (exist(x[i]['file'])) {
                        if (x[i]['file'] == '' && !exist(x[i]['redirect'])) {
                            stop = true
                        }
                    }
                    else {
                        stop = true
                    }
                }
                if (!stop) {
                    o.playlist_dic[x[i]['id']] = x[i];
                    ii += 1
                }
                if (exist(x[i]['folder'])) {
                    var z = Object.keys(x[i]['folder']).length;
                    if (z > 0) {
                        x[i]['folder'] = IndexPlaylistProcessor(x[i]['folder'], z, x[i]['id'], i)
                    }
                }
                if (!stop) {
                    x2.push(x[i])
                }
            }
            return x2
        }

        function FindFileInPlaylist() {
            var x = [];
            if (exist(v.plstart)) {
                if (v.plstart.indexOf("x-") != 0) {
                    for (var y in o.playlist_dic) {
                        if (o.playlist_dic.hasOwnProperty(y)) {
                            if (o.playlist_dic[y].pjs_id == v.plstart) {
                                v.plstart = y
                            }
                        }
                    }
                }
                if (exist(o.playlist_dic[v.plstart])) {
                    v.playlist.norootplstart == 1 ? v.playlist.openplaylistroot = 0 : '';
                    x = o.playlist_dic[v.plstart]
                }
                else {
                    x = o.playlist[0];
                    if (v.plstart == o.plcontinue) {
                        o.seekto = undefined
                    }
                }
            }
            else {
                x = o.playlist[0]
            }
            if (x) {
                for (var i = 0; i < 10; i++) {
                    if (exist(x['folder'])) {
                        x = x['folder'][0]
                    }
                    else {
                        break
                    }
                }
                v.plstart = x.id;
                if (v.plstart == o.plcontinue) {
                    x.start = undefined
                }
            }
            return x
        }

        function End() {
            gaTracker("end", "End", 1);
            o.actions.VastRecover();
            if (o.storage && v.timestore == 1) {
                o.continue.write(0, o.media.duration())
            }
            if (o.controls.PlaylistExist()) {
                if (v.playlist.autoplaylist == 1 && o.controls.PlaylistNextExist()) {
                    o.controls.PlaylistNext();
                    if (o.play && o.system.ios && o.file_type != "native") { }
                }
                else {
                    End2()
                }
            }
            else {
                if (v.finishnormal == 1 && o.fullscreen) {
                    o.actions.Normalscreen()
                }
                End3()
            }
        }
        this.ShuffleEnd = function () {
            End2()
        };

        function End2() {
            if (v.playlist.playlistrewind == 1 && !o.controls.PlaylistNextExist()) {
                o.controls.PlaylistRewind();
                return
            }
            if (v.playlist.openplaylistafter == 1) {
                !o.controls.PlaylistVisible() ? o.controls.Playlist() : ''
            }
            End3()
        }

        function End3() {
            ShowPoster();
            js("finish");
            if (v.redirect == 1 && v.redirectafter == 1 && exist2(v.after)) {
                redirect(v.after)
            }
        }

        function fjs(x) {
            if (x.indexOf('js:') == 0) {
                try {
                    x = eval(x.substr(3))
                }
                catch (e) {
                    console.log(e.message)
                }
            }
            return x ? x : ''
        }

        function Heartbeat() {
            var vts = Math.floor(Date.now() / 1000);
            var fts = (exist(v.livets) ? v.livets : 0) + parseInt(o.media.time());
            var type = 0;
            o.system.desktop ? type = 1 : '';
            o.system.ios ? type = 2 : '';
            o.system.android ? type = 3 : '';
            o.system.winmob ? type = 4 : '';
            o.system.tv ? type = 5 : '';
            var url = v.heartbeat.replace("[vts]", vts);
            url = url.replace("[fts]", fts);
            url = url.replace("[dvtp]", type);
            var gif = document.createElement("img");
            gif.setAttribute('src', url);
            gif.setAttribute('height', '1px');
            gif.setAttribute('width', '1px');
            o.frame.appendChild(gif)
        }
    };
    var Media = function (url) {
        var url;
        var urls;
        var urls_and;
        var current_url;
        var _status = "";
        var _lastime = 0;
        var _ended = false;
        var _stopped = false;
        var _tags;
        var media;
        var media2;
        o.mediascale = {
            x: 1,
            y: 1,
            x0: 1,
            y0: 1
        };
        var wait;
        var plurls;
        var current_plurl = 0;
        var rldcnt = 0;
        if (typeof (url) == 'string') {
            url = trim(url);
            if (url.indexOf("[{") == 0) {
                try {
                    url = url.replace(/pjs'qt/ig, '"');
                    url = JSON.parse(url);
                    wait ? url = o.actions.File(url) : ''
                }
                catch (e) {
                    console.log(e);
                    url = "incorrect JSON"
                }
            }
            if (url.indexOf("#" + v.enc2) == 0) {
                url = o[o.fd[0]](url)
            }
            if (url) {
                if (url.indexOf("#" + v.enc3) == 0 && url.indexOf(v.file3_separator) > 0) {
                    url = o[o.fd[1]](url)
                }
            }
            if (url) {
                if (url.indexOf("#0") == 0) {
                    if (url.indexOf(o.pltxt) > 0) {
                        url = fd0(url.replace(o.pltxt, '')) + o.pltxt
                    }
                    else {
                        url = fd0(url)
                    }
                }
            }
            if (v.fplace == 1) {
                url = fplace(url)
            }
            if (typeof (url) == 'string') {
                if (url.indexOf(".m3u") == url.length - 4 || url.indexOf(".txt") > 0) {
                    plurls = url.split(" or ");
                    PlaylistLoad()
                }
            }
        }
        o.mediacontainer = createElement("div");
        Pos0(o.mediacontainer);
        css(o.mediacontainer,
            {
                "transition": "transform 0.2s linear",
                "text-align": "center"
            });
        o.frame.appendChild(o.mediacontainer);
        if (v.hotkey.swiping == 1) {
            if (!o.mdswp) {
                PluginMovable(o.mediacontainer, 'o.swiping', true, false, Swiping);
                o.mdswp = true
            }
        }
        if (!wait) {
            Start()
        }

        function Swiping() {
            var x;
            if (o.mediacontainer.offsetLeft > o.screen_w / 2) {
                if (o.controls.PlaylistPrevExist()) {
                    x = true;
                    o.controls.PlaylistPrev()
                }
            }
            else {
                if (o.mediacontainer.offsetLeft < -o.screen_w / 2) {
                    if (o.controls.PlaylistNextExist()) {
                        x = true;
                        o.controls.PlaylistNext()
                    }
                }
            }
            if (x) {
                css(o.mediacontainer,
                    {
                        "left": 0
                    })
            }
            else {
                new Motion(
                    {
                        mc: o.mediacontainer,
                        type: "left",
                        to: 0,
                        time: 0.1,
                        ease: "back",
                        me: "mdswp"
                    })
            }
        }

        function PlaylistLoad() {
            url = plurls[current_plurl];
            if (url.indexOf(o.pltxt) > 0) {
                url = url.replace(o.pltxt, '');
                v.file = url
            }
            var xhr = XHR(url);
            xhr.onload = function () {
                if (this.readyState == 4 && this.status == 200) {
                    Playlist(this);
                    o.controls.NewPl()
                }
                else {
                    PlaylistError(1)
                }
            };
            xhr.onerror = function (e) {
                PlaylistError(1)
            };
            xhr.send();
            wait = true
        }

        function PlaylistError(x) {
            if (current_plurl + 1 < plurls.length) {
                current_plurl++;
                PlaylistLoad();
                x = 0
            }
            if (x == 1) {
                onError("playlist not found or access denied")
            }
            if (x == 2) {
                onError("playlists JSON")
            }
        }

        function Playlist(x) {
            if (x.responseText) {
                var y = x.responseText;
                if (y.indexOf("#" + v.enc2) == 0) {
                    y = o[o.fd[0]](y)
                }
                if (y.indexOf("#" + v.enc3) == 0 && y.indexOf(v.file3_separator) > 0) {
                    y = o[o.fd[1]](y)
                }
                if (url.indexOf(".m3u") == url.length - 4) {
                    var m3u = y.split(/(\r\n\t|\n|\r\t)/gm);
                    url = [];
                    var m3ui = 1;
                    var m3ut = '';
                    for (var i = 0; i < m3u.length; i++) {
                        if (m3u[i].indexOf("#EXTINF") > -1) {
                            if (m3u[i].indexOf(" - ") > -1) {
                                var tmp = m3u[i].split(" - ");
                                m3ut = tmp[tmp.length - 1]
                            }
                        }
                        if (m3u[i].indexOf("http") > -1) {
                            url.push(
                                {
                                    title: "" + (m3ut != '' ? m3ut : m3ui),
                                    file: m3u[i]
                                });
                            m3ui++;
                            m3ut = ''
                        }
                    }
                }
                else {
                    y = y.replace(/(\r\n\t|\n|\r\t)/gm, "");
                    try {
                        url = JSON.parse(y)
                    }
                    catch (e) {
                        PlaylistError(2)
                    }
                }
                if (exist(url.items)) {
                    url = YoutubePlaylist(url)
                }
                if (o.controls) {
                    if (v.playlist.openplaylistbefore == 1) {
                        if (!o.controls.PlaylistVisible()) {
                            o.controls.PlaylistShow()
                        }
                    }
                }
                Start();
                MainResize();
                setTimeout(function () {
                    js("playlist")
                }, 1)
            }
        }

        function Start() {
            url = o.actions.File(url);
            url && url != '?' ? File(url) : ''
        }

        function onError(x, norld) {
            log("Error: " + x);
            var y = true;
            var yy = true;
            js("loaderror", x);
            if (norld != 1 && v.reload == 1 && v.reloadfirst == 1) {
                ErrorReload();
                return
            }
            if (urls) {
                if (urls.length > 0) {
                    current_url++;
                    y = current_url > urls.length - 1;
                    if (y && urls.length > 1 && v.or0 > 0) {
                        if (o.or0 < v.or0) {
                            current_url = 0;
                            y = false
                        }
                        o.or0++
                    }
                    if (y && v.tryotherquality == 1) {
                        if (o.files.length > 1) {
                            if (o.files_quality[o.current_quality].indexOf(Lang("loading_error")) == -1) {
                                o.files_quality[o.current_quality] = o.files_quality[o.current_quality] + ' (' + Lang("loading_error") + ')'
                            }
                            if (o.current_quality > 0) {
                                yy = false;
                                o.actions.SetQuality(o.current_quality - 1);
                                FileTo()
                            }
                            else {
                                if (o.files_quality[o.current_quality + 1].indexOf(Lang("loading_error")) == -1) {
                                    yy = false;
                                    o.actions.SetQuality(o.current_quality + 1);
                                    FileTo()
                                }
                            }
                        }
                    }
                    if (!y) {
                        var z = false;
                        o.seekto > 0 || !o.start || media.isLive() ? '' : o.seekto = Time();
                        if (o.file_type != FileType(urls[current_url]) || o.file_type != 'native') {
                            if (o.play) {
                                o.actions.Stop();
                                z = true
                            }
                        }
                        log("Alternative source", o.seekto);
                        File('or');
                        o.start && !o.vast ? media.Play() : '';
                        FileTo()
                    }
                    else {
                        if (v.reload == 1 && yy && v.reloadfirst != 1) {
                            y = false;
                            ErrorReload()
                        }
                    }
                }
            }
            if (y && yy && x) {
                ErrorMsg(x, true)
            }
        };

        function ErrorMsg(x, mr) {
            gaTracker("error", "Error", true);
            if (v.alerts == 1 && !o.media_error) {
                if (v.alert404 == 1) {
                    o.alert.txt(v.alert404text)
                }
                else {
                    o.alert.txt(x)
                }
                if (v.alert404v == 1 && exist(v.alert404video)) {
                    o.err404v = new PluginErrorVideo();
                    o.actions.HidePoster()
                }
            }
            mr ? o.media_error = true : '';
            if (o.play) {
                o.actions.StopWaiting();
                o.controls.Pause()
            }
            exist(o.poster) && !exist(o.err404v) ? o.actions.ShowPoster() : '';
            js("error", x)
        }

        function ErrorReload() {
            rldcnt++;
            log("Error Reload Timeout " + rldcnt);
            o.play ? o.rldplay = 1 : '';
            exist(o.reloadto) ? clearTimeout(o.reloadto) : '';
            o.reloadto = setTimeout(ReloadTimeout, v.reloadtimeout * 1000)
        }

        function ReloadTimeout() {
            var x = existv(v.reloadtimes, 10);
            if (o.play || o.rldplay == 1) {
                o.rldplay = 0;
                if (rldcnt < x) {
                    o.actions.Reload()
                }
                else {
                    if (v.reloadfirst == 1) {
                        onError(media.errorMessage(), 1)
                    }
                    else {
                        ErrorMsg('Reload Error ' + media.errorMessage())
                    }
                }
            }
        }
        this.onError = function (x) {
            onError(x ? x : media.errorMessage())
        };
        this.onEnded = function (y) {
            log("Ended");
            _ended = true;
            var x = false;
            if (Duration() > 0 && !o.casting && !y) {
                var time = o.current_time;
                if (time + 10 < Duration()) {
                    log('Break (recovery)');
                    js("recovery");
                    media.Play();
                    media.Seek(time);
                    x = true
                }
            }
            if (!x) {
                o.actions.Ended();
                js("end")
            }
        };
        this.onPlay = function () {
            if (v.posterhidepause == 1) {
                exist(o.poster) ? o.actions.ShowPoster() : ''
            }
            v.posterhide == 1 ? o.actions.HidePoster() : '';
            o.controls.Play();
            o.actions.onPlayTag();
            if (v.tags == 1 && exist(v.tagsurl)) {
                if (v.tagsurl.length > 5) {
                    RadioTags();
                    clearInterval(_tags);
                    _tags = setInterval(RadioTags, v.tagsinterval * 1000)
                }
            }
            js("play")
        };
        this.NativeControls = function () {
            if (v.nativecontrolsmobile == 1 && o.tagvideo) {
                if (o.actions.NativeControls()) {
                    o.nativecontrols = media.nativeControls();
                    o.controls.refresh()
                }
            }
            o.checknative = true
        };
        this.onPause = function () {
            o.actions.Pause()
        };
        this.onSeeking = function () {
            log("Seeking")
        };
        this.onSeeked = function () {
            log("Seeked");
            o.actions.Seeked();
            exist(o.seeking_time) ? js("seek", o.seeking_time) : ''
        };
        this.onMeta = function () {
            log("Metadata");
            rldcnt = 0;
            o.actions.Metadata()
        };
        this.onDuration = function () {
            if (media) {
                log("Duration", Duration());
                o.actions.Duration(Time(), Duration());
                js("duration", Duration());
                rldcnt = 0;
                clearTimeout(o.reloadto);
                if (exist(o.restart_audio)) {
                    o.actions.SetAudioTrack(o.restart_audio);
                    o.restart_audio = null
                }
            }
        };

        function Time() {
            var x = media.time();
            return x
        }

        function Duration() {
            var x = media.duration();
            return x
        }
        this.onVolume = function () { };
        this.onWaiting = function () {
            log("Waiting");
            o.actions.Waiting();
            js("waiting")
        };
        this.onTimeupdate = function () {
            if (_lastime != Time()) {
                o.actions.StopWaiting();
                if (_lastime == 0) {
                    if (v.posterhide == 1 && v.posterhidestart == 1) {
                        o.actions.HidePoster()
                    }
                }
            }
            _lastime = Time();
            js("time", _lastime);
            if (v.pip.on == 1) {
                if (typeof (PluginPip) == 'function') {
                    if (!media2 && v.pip.custom != 1 && v.file2 && v.file2 != '' && _lastime > 0) {
                        o.mediapip = new PluginPip();
                        media2 = o.mediapip.create()
                    }
                }
            }
        };
        this.onYoutubeReady = function () {
            if (o.file_type == "youtube") {
                media ? media.YoutubeReady() : ''
            }
        };
        this.playByYoutubeId = function (x) {
            o.actions.Stop();
            media.playId(x)
        };
        this.YoutubeReady = function () {
            if (o.file_type == "youtube" && media) {
                return media.ready()
            }
            else {
                return true
            }
        };
        this.getHLS = function () {
            return media.getHLS()
        };
        this.getDASH = function () {
            return media.getDASH()
        };
        this.SetQuality = function (x) {
            log("Quality", x);
            if ((o.file_type == "native" || o.file_type == o.ws || (o.file_type == "hls" && (v.hlsquality == 0 || HlsLevelsLength() < 2)) || (o.file_type == "dash" && (v.dashquality == 0 || DashLevelsLength() < 2))) && exist(o.files[x])) {
                var time = this.time();
                o.seekto > 0 ? '' : o.seekto = time;
                o.actions.Seek(time, false);
                File(o.files[x], true);
                var y = true;
                if (v.settings) {
                    if ((v.settings.qualitypause == 1 && !o.play) || !o.start) {
                        y = false
                    }
                }
                if (y) {
                    o.actions.Play()
                }
            }
            if (o.file_type == "hls" && v.hlsquality == 1 && HlsLevelsLength() > 1) {
                media.setHlsQuality(x)
            }
            else if (o.file_type == "dash" && v.dashquality == 1 && DashLevelsLength() > 1) {
                media.setDashQuality(x)
            }
            else if (o.file_type == "youtube" || o.file_type == "dm") {
                media.setQuality(x)
            }
        };
        this.renameQualities = function (x, y) {
            return RenameQualities(x, y)
        };
        this.renameTracks = function (x) {
            return RenameTracks(x)
        };

        function RenameQualities(x, y) {
            var r = x.height + 'p';
            if (x.height < 200) {
                r = '160p'
            }
            else if (x.height >= 200 && x.height <= 300) {
                r = '240p'
            }
            else if (x.height > 300 && x.height <= 400) {
                r = '360p'
            }
            else if (x.height > 400 && x.height <= 500) {
                r = '480p'
            }
            else if (x.height > 500 && x.height <= 600) {
                r = '540p'
            }
            else if (x.height > 600 && x.height <= 900) {
                r = '720p'
            }
            else if (x.height > 900 && x.height <= 1200) {
                r = '1080p'
            }
            else if (x.height > 1200 && x.height <= 1800) {
                r = '1440p'
            }
            else if (x.height > 1800) {
                r = '2160p'
            }
            if (x.width == 426 && x.height <= 240) {
                r = '240p'
            }
            else if (x.width == 640 && x.height <= 360) {
                r = '360p'
            }
            else if (x.width == 854 && x.height <= 480) {
                r = '480p'
            }
            else if (x.width == 1280 && x.height <= 720) {
                r = '720p'
            }
            else if (x.width == 1920 && x.height <= 1080) {
                r = '1080p'
            }
            else if (x.width == 2560 && x.height <= 1440) {
                r = '1440p'
            }
            else if (x.width == 3840 && x.height <= 2160) {
                r = '2160p'
            }
            if (v.settings.customqualities == 1 && exist(v.settings['name' + r])) {
                r = v.settings['name' + r]
            }
            else {
                if (y == 1) {
                    r = Lang(r)
                }
                if (y == 2 && exist(x.bitrate)) {
                    r = parseInt(x.bitrate / 1000) + ' ' + Lang('kbps')
                }
            }
            return r
        };

        function RenameTracks(x) {
            var r = x.toLowerCase();
            if (r == "eng" || r == "en") {
                x = "English"
            }
            else if (r == "rus" || r == "ru") {
                x = "Русский"
            }
            if (typeof (v.rename_audio) == "object") {
                x = existv(v.rename_audio[x], x)
            }
            return x
        };

        function NativeSubtitle() {
            if (o.tagvideo && o.subs) {
                media.removeTracks();
                for (var i = 0; i < o.subs.length; i++) {
                    media.addTrack(o.subs[i], o.files_subtitle[i], (i == o.current_subtitle))
                }
            }
        }
        this.SetSpeed = function (x) {
            log("Speed", x);
            media ? media.setSpeed(x) : '';
            if (v.pip.on == 1) {
                if (media2) {
                    media2.setSpeed(x)
                }
            }
        };
        this.nativeSubtitle = function () {
            NativeSubtitle()
        };
        this.removeNativeSubtitle = function () {
            media.removeTracks()
        };
        this.SetAudioTrack = function (x) {
            log("Audiotrack", x);
            if (o.audiotracks.length > 0) {
                if (o.audiotracks[x]) {
                    var time = this.time();
                    o.seekto > 0 ? '' : o.seekto = time;
                    o.actions.Seek(time, false);
                    File(o.audiotracks[x], true);
                    o.actions.Play()
                }
            }
            else {
                if (o.file_type == "hls" && v.hlsaudio == 1) {
                    media.setHlsAudioTrack(x)
                }
                else if (o.file_type == "dash" && v.dashaudio == 1) {
                    media.setDashAudioTrack(x)
                }
            }
        };
        this.getQuality = function () {
            var x = o.files_quality[o.current_quality];
            x == undefined ? x = '' : '';
            var y = autoQuality() && v.hlsautoquality == 1 && v.hlsquality == 1 && x != Lang("auto");
            return (y ? '' + Lang("auto") + ' ' : '') + x
        };
        this.getAudioTrack = function () {
            var x = o.files_audiotrack[o.current_audiotrack];
            x == undefined ? x = '' : '';
            return x
        };
        this.autoQuality = function () {
            return autoQuality()
        };

        function autoQuality() {
            var x = false;
            if (media) {
                if (o.file_type == "youtube") {
                    x = media.auto()
                }
                if (o.file_type == "hls" && v.hlsquality == 1 && HlsLevelsLength() > 1 && v.hlsautoquality == 1) {
                    x = media.auto()
                }
                if (o.file_type == "dash" && v.dashquality == 1 && DashLevelsLength() > 1) {
                    x = media.auto()
                }
            }
            return x
        }

        function HlsLevelsLength() {
            if (o.file_type == "hls") {
                return media.HlsLevelsLength()
            }
            else {
                return 0
            }
        }

        function DashLevelsLength() {
            if (o.file_type == "dash") {
                return media.DashLevelsLength()
            }
            else {
                return 0
            }
        };
        this.resize = function (x) {
            if (media && (o.file_type == "youtube" || o.file_type == "vimeo" || exist(v.ratio))) {
                media.resize()
            }
            if (v.screenmarginbottom > 0) {
                css(o.mediacontainer,
                    {
                        "height": (o.fullscreen ? "100%" : o.normal_h - v.screenmarginbottom)
                    })
            }
            if (o.media2 && v.pip.movable == 1) {
                o.mediapip.resize()
            }
            if (v.poster_float == 1) {
                FloatPosterScale()
            }
        };
        this.size = function () {
            return media ? media.size() :
                {}
        };
        this.iosfull = function () {
            media.iosfull()
        };
        this.reload = function () {
            log('reload');
            o.reloadTimer = 0;
            o.start ? v.autoplay = 1 : '';
            o.actions.Waiting();
            if (url && v.rldnornd != 1) {
                if (url.indexOf('(random)') == -1) {
                    url = url + (url.indexOf('?') == -1 ? '?' : '&') + 'rand=(random)'
                }
            }
            if (o.tagvideo) {
                media.src(url)
            }
            else {
                File(url)
            }
        };
        if (!exist(o.poster)) {
            CreatePoster()
        }
        if (exist(v.poster)) {
            if (v.poster != '') {
                Poster(v.poster, o.poster, v.poster_scale);
                if (v.posterhidepause == 1 && !o.start) {
                    hide(o.poster)
                }
            }
            else {
                v.poster = null
            }
        }

        function Status() {
            _status = media ? media.status() : ''
        }

        function ParseUrl(url) {
            urls = url.split(" or ");
            for (var i = 0; i < urls.length; i++) {
                if (urls[i].indexOf(" and ") > -1) {
                    urls_and = urls[i].split(" and ");
                    urls[i] = urls_and[random(0, urls_and.length - 1)]
                }
                if (exist(v.prefile) && urls[i].indexOf("//") == -1) {
                    urls[i] = v.prefile + urls[i]
                }
            }
            current_url = 0
        }

        function Timer() {
            Status();
            if (_status == "playing" || o.casting) {
                o.actions.Playing()
            }
            if (_status != "") {
                o.actions.Loading()
            }
        }

        function CreatePoster() {
            if (o.poster) {
                o.frame.removeChild(o.poster)
            }
            o.poster = createElement("div");
            css(o.poster,
                {
                    "pointer-events": "none",
                    "opacity": v.poster_a,
                    transition: "opacity 0.5s"
                });
            if (v.poster_float == 1) {
                PluginFloatPoster()
            }
            else {
                css(o.poster,
                    {
                        'position': 'absolute',
                        'left': 0,
                        'top': 0,
                        'width': '100%',
                        'height': '100%'
                    })
            }
            o.frame.appendChild(o.poster)
        }

        function File(x, y, crt) {
            v.file2_separator == '' ? v.file2_separator = ';' : '';
            if (x.indexOf('{') > -1 && x.indexOf('}') > -1 && x.indexOf(v.file2_separator) > -1) {
                var z = x.split(v.file2_separator);
                o.audiotracks = [];
                for (var i = 0; i < z.length; i++) {
                    o.files_audiotrack[i] = z[i].substr(z[i].indexOf("{") + 1, z[i].indexOf("}") - 1);
                    o.audiotracks[i] = z[i].substr(z[i].indexOf("}") + 1);
                    if (exist(v.default_audio)) {
                        if (v.default_audio == o.files_audiotrack[i]) {
                            o.current_audiotrack = i
                        }
                    }
                }
                x = o.audiotracks[o.current_audiotrack]
            } !exist(urls) ? urls = [] : '';
            o.fileTimeout ? clearTimeout(o.fileTimeout) : '';
            x && x != 'or' && x != 'x' ? ParseUrl(x) : '';
            var ft = o.file_type;
            if (urls.length > 0) {
                o.file_type = FileType(urls[current_url]);
                var create = false;
                if (crt) {
                    create = true
                }
                url = urls[current_url];
                if (url) {
                    url = url.replace(/\(random\)/g, Math.random())
                }
                if (!create && x != 'x' && media && o.file_type == ft && (ft == "native" || (ft == "vimeo" && !o.system.mobile) || (ft == "youtube" && o.start && !_stopped) || ft == "dm" || ft == "hls" || ft == "dash")) {
                    media.src(url);
                    log("src")
                }
                else {
                    log("New");
                    RemoveMedia();
                    CreateMedia(url)
                }
                if (o.speed1) {
                    if (o.line_speed) {
                        media.setSpeed(o.custom_speed)
                    }
                    else {
                        if (o.current_speed != o.speed1) {
                            media.setSpeed(o.files_speed[o.current_speed])
                        }
                    }
                }
            }
            if (!y) {
                clearInterval(o.timerInterval);
                o.timerInterval = setInterval(Timer, o.timerTime);
                if (!exist(v.subtitle) && v.sub_upload == 1 && v.sub_upload0 == 1) {
                    v.subtitle = ''
                }
                if (exist(v.subtitle)) {
                    o.actions.Subtitle(v.subtitle)
                }
                if (v.hidevideo == 1) {
                    if (v.nativecontrolsmobile == 1 && o.system.mobile) { }
                    else {
                        if (o.file_type == "youtube") {
                            css(o.mediacontainer,
                                {
                                    "top": -3000,
                                    "left": -3000
                                })
                        }
                        else {
                            hide2(o.mediacontainer)
                        }
                        v.toolbar.hide = 0
                    }
                }
            }
        }

        function FileType(x) {
            var type = "native";
            if (x) {
                if (x.indexOf(".m3u8") > 0) {
                    type = "hls"
                }
                else if (x.indexOf(".mpd") > 0) {
                    type = "dash"
                }
                else if (x.indexOf("ws") == 0) {
                    type = o.ws
                }
                else if (x.indexOf('youtube.com/') > -1 || x.indexOf('youtu.be/') > -1) {
                    if (typeof (MediaYoutube) == 'function') {
                        type = "youtube";
                        if (v.youtubeposter == 1) {
                            var y = 'https://img.youtube.com/vi/' + YoutubeID(x) + '/';
                            imageExists(y + 'maxresdefault.jpg', function (z) {
                                z > 100 ? v.poster = y + 'maxresdefault.jpg' : v.poster = y + 'hqdefault.jpg';
                                if (o.playlist_dic) {
                                    o.playlist_dic[o.plid]['poster'] = v.poster
                                }
                                v.autoplay == 1 || o.start ? '' : Poster(v.poster, o.poster, v.poster_scale)
                            })
                        }
                    }
                    else {
                        log("No YouTube")
                    }
                }
                else if (v.vimeo == 1 && x.indexOf('vimeo.com/') > -1) {
                    type = "vimeo"
                }
                else if (v.dm == 1 && x.indexOf('dailymotion.com') > -1) {
                    type = "dm"
                }
                else if (v.pjsframe == 1) {
                    if (typeof (PjsFramed) == 'function') {
                        PjsFramed(x) ? type = "pjs" : ''
                    }
                }
            }
            o.tagvideo = type == "native" || type == "hls" || type == "dash" || type == o.ws;
            return type
        }

        function imageExists(url, callback) {
            var img = new Image();
            img.onload = function () {
                callback(this.height)
            };
            img.src = url
        }

        function CreateMedia(x) {
            o.file_type = FileType(x);
            if (o.tagvideo) {
                media = new MediaVideo(x, o.mediacontainer, false)
            }
            if (o.file_type == "youtube") {
                media = new MediaYoutube(x, o.mediacontainer)
            }
            if (v.vimeo == 1 && o.file_type == "vimeo") {
                media = new MediaVimeo(x, o.mediacontainer)
            }
            if (o.file_type == "pjs") {
                media = new MediaPjs(x)
            }
            if (o.file_type == "dm") {
                media = new MediaDaily(x, o.mediacontainer)
            }
            o.controls ? o.controls.UpdateSettings() : '';
            var t = 0;
            if (exist(v.duration)) {
                if (o.continue && v.timestore == 1 && !o.start) {
                    t = o.continue.flag().t
                }
                setTimeout(function () {
                    o.actions.Duration(t, v.duration)
                }, 100)
            }
        }

        function RemoveMedia() {
            if (media) {
                media.Remove();
                media = null;
                _status = "ended"
            }
            if (media2) {
                media2.Remove();
                media2 = null;
                media2 = undefined;
                o.mediapip.remove();
                o.media2 = null;
                o.mediapip = null
            }
        };
        this.Remove = function () {
            RemoveMedia()
        };
        this.RemoveAll = function () {
            urls = [];
            RemoveMedia()
        };
        this.File = function (x, y, z) {
            File(x, y, z)
        };
        this.Poster = function (x) {
            Poster(x, o.poster, v.poster_scale)
        };
        this.Play = function () {
            if (media) {
                _ended = false;
                _stopped = false;
                if (o.casting) {
                    o.chromecast.Play()
                }
                else {
                    media.Play();
                    v.posterhide == 1 ? o.actions.HidePoster() : ''
                }
                if (exist(media2)) {
                    media2.Play()
                }
                if (o.channels) {
                    if (o.tagvideo) {
                        if (o.clicktime > 0 && !o.channels.Created()) {
                            o.channels.Update()
                        }
                    }
                    else {
                        o.files_channel = [];
                        o.controls.SettingChanged("channel")
                    }
                }
                if (o.tagvideo && v.volumegain > -1 && !o.gained && !o.system.ios) {
                    if (o.clicktime > 0) {
                        media.Gain()
                    }
                }
                FileTo()
            }
            else {
                setTimeout(this.Play, 500)
            }
        };

        function FileTo() {
            if (v.fileto > 0 && urls.length > 1) {
                if (Duration() == 0) {
                    clearTimeout(o.fileTimeout);
                    o.fileTimeout = setTimeout(FileTimeout, v.fileto * 1000)
                }
            }
        }

        function FileTimeout() {
            if (o.play && Duration() == 0 && Time() == 0) {
                if (media) {
                    if (media.loaded() == 0 && current_url != urls.length - 1) {
                        onError('File Timeout')
                    }
                }
            }
        }
        this.PipSwitch = function (event) {
            if (o.media2) {
                if (v.pip.movable == 1) {
                    if (o.moving[o.media2] > 2) {
                        return
                    }
                }
                if (event) {
                    event.stopPropagation();
                    window.event ? window.event.cancelBubble = true : ''
                }
                var tmp = media;
                media.ChangePip(true, o.media2);
                media2.ChangePip(false, o.mediacontainer);
                media = media2;
                media2 = tmp;
                media.Play();
                media2.Play();
                js("pip")
            }
        };
        this.reYT = function () {
            media.src(url)
        };
        this.ToolbarHide = function () {
            v.effects == 1 ? o.effects.api("hide") : '';
            o.toolbarhidden = true
        };
        this.ToolbarShow = function () {
            if (v.toolbar.resizeme) {
                v.toolbar.resizeme = false;
                if (o.controls) {
                    o.controls.resizeFromText(1);
                    o.controls.resizetext()
                }
            }
            o.toolbarhidden = false
        };
        this.PipToggle = function () {
            if (o.media2 && o.mediapip) {
                o.mediapip.toggle()
            }
        };
        this.Airplay = function () {
            if (o.tagvideo && o.airplay) {
                o.airplayed = true;
                media.airplay()
            }
        };
        this.PipWebkit = function () {
            if (o.tagvideo && o.pipwebkit) {
                media.pipwebkit()
            }
        };
        this.BeforeVast = function () {
            if (v.vast_poster == 1 && exist(v.vast_posterurl)) {
                if (!exist(o.vast_poster)) {
                    o.vast_poster = createElement("div");
                    css(o.vast_poster,
                        {
                            'position': 'absolute',
                            'left': 0,
                            'top': 0,
                            'width': '100%',
                            'height': '100%',
                            "pointer-events": "none",
                            "zIndex": 10000
                        });
                    o.frame.appendChild(o.vast_poster)
                }
                show2(o.vast_poster);
                Poster(v.vast_posterurl, o.vast_poster, 'fill')
            }
            if (v.vast_loadtxtd == 1 && exist(v.vast_loadtxt)) {
                if (v.vast_loadtxt != '') {
                    if (!exist(o.vast_loadtxt)) {
                        o.vast_loadtxt = createElement("div");
                        css(o.vast_loadtxt,
                            {
                                'position': 'absolute',
                                'right': '10px',
                                'top': '10px',
                                "pointer-events": "none",
                                "zIndex": 10001
                            });
                        o.vast_loadtxt.innerHTML = v.vast_loadtxt;
                        o.frame.appendChild(o.vast_loadtxt)
                    }
                    else {
                        show2(o.vast_loadtxt)
                    }
                    if (v.vast_loadcounter == 1) {
                        o.vldcntr = 1;
                        VastLoadCounter();
                        o.vldcntrInterval = setInterval(VastLoadCounter, 1000)
                    }
                }
            }
            if (media) {
                datetime(0);
                media.BeforeVast()
            }
        };

        function VastLoadCounter() {
            if (o.vast_loadtxt && o.vldcntr) {
                o.vast_loadtxt.innerHTML = v.vast_loadtxt + ' ' + o.vldcntr;
                o.vldcntr++
            }
        }
        this.AfterVast = function () {
            if (o.vast_poster) {
                hide2(o.vast_poster)
            }
            media ? media.AfterVast() : ''
        };
        this.Pause = function () {
            if (o.casting) {
                o.chromecast.Pause()
            }
            else {
                media ? media.Pause() : log("nomedia")
            }
            if (exist(o.media2)) {
                media2.Pause()
            }
        };
        this.Recover = function () {
            _stopped = true;
            o.actions.Seek(0, false);
            exist(o.poster) ? o.actions.ShowPoster() : '';
            File('x')
        };
        this.Toggle = function () {
            media ? media.Toggle() : ''
        };
        this.Seek = function (x) {
            if (media) {
                if (o.casting) {
                    o.chromecast.Seek(x)
                }
                else {
                    media.Seek(x);
                    if (v.pip.on == 1) {
                        if (media2) {
                            media2.Seek(x)
                        }
                    }
                }
            }
        };
        this.Mute = function () {
            if (media) {
                media.Mute();
                o.casting ? o.chromecast.Mute() : '';
                log("mute")
            }
            if (v.pip.on == 1 && v.pip.nomute == 1) {
                if (media2) {
                    media2.Mute()
                }
            }
        };
        this.Unmute = function () {
            if (media) {
                media.Unmute();
                o.casting ? o.chromecast.Unmute() : '';
                log("unmute")
            }
            if (v.pip.on == 1 && v.pip.nomute == 1) {
                if (media2) {
                    media2.Unmute()
                }
            }
        };
        this.Volume = function (x) {
            media ? media.Volume(x) : '';
            if (v.pip.on == 1) {
                if (v.pip.nomute == 1 && media2) {
                    media2.Volume(x)
                }
            }
            if (o.casting) {
                o.chromecast.Volume(x)
            }
        };
        this.isPlaying = function () {
            return media ? media.isPlaying() : false
        };
        this.isLive = function () {
            return media ? media.isLive() : false
        };
        this.status = function () {
            return _status
        };
        this.ended = function () {
            return _ended
        };
        this.time = function () {
            var x = 0;
            if (media) {
                x = Time();
                if (o.casting) {
                    var y = o.chromecast.Time();
                    y ? x = y : ''
                }
                else {
                    if (Duration() > 0 && x != Duration()) {
                        o.current_time = x + 0.0001
                    }
                }
                return x
            }
            else {
                return 0
            }
        };
        this.duration = function () {
            var x = 0;
            if (media) {
                x = Duration();
                x == 0 && exist(v.duration) ? x = v.duration * 1 : '';
                if (o.casting) {
                    var y = o.chromecast.Duration();
                    y ? x = y : ''
                }
            }
            return x
        };
        this.loaded = function () {
            return media ? media.loaded() : 0
        };
        this.flip = function () {
            o.mediascale.flip = o.mediascale.flip ? false : true;
            css(o.mediacontainer,
                {
                    "transform": (o.mediascale.flip ? "scaleX(-1)" : "scaleX(1)")
                })
        };
        this.createposter = function () {
            CreatePoster()
        };
        this.Preload = function () {
            if (o.tagvideo) {
                media.preload()
            }
        };
        this.menufltr = function (x, y) {
            if (x == 'scale') {
                if (y == 1) {
                    Scale(v.settings.scale / 100)
                }
                if (y == 2) {
                    Scale(-v.settings.scale / 100)
                }
                if (y == 3) {
                    o.media.normalscale()
                }
            }
            else {
                if (o.tagvideo) {
                    if (!o.fltrs[x]) {
                        if (x == 'sepia') {
                            o.fltrs[x] = 0
                        }
                        else {
                            o.fltrs[x] = 1
                        }
                    }
                    if (y == 1) {
                        o.fltrs[x] += v.settings[x] / 100
                    }
                    if (y == 2) {
                        o.fltrs[x] -= v.settings[x] / 100
                    }
                    if (y == 3) {
                        if (x == 'sepia') {
                            o.fltrs[x] = 0
                        }
                        else {
                            o.fltrs[x] = 1
                        }
                    } !o.cftlr ? o.cftlr = [] : '';
                    o.cftlr[x] = x + '(' + parseInt(o.fltrs[x] * 100) + '%) ';
                    var cf = '';
                    for (var i in o.cftlr) {
                        cf += o.cftlr[i]
                    }
                    css(media.tag(),
                        {
                            'filter': cf
                        });
                    o.controls.MenuProc(x)
                }
            }
        };
        this.scale = function (x) {
            Scale(x)
        };

        function Scale(x) {
            if (String(x).indexOf(":") > 0) {
                var y = x.split(":");
                var z0 = o.screen_w / o.screen_h;
                var z1 = o.media.size();
                if (z1.width > 0) {
                    z0 = z1.width / z1.height
                }
                var z = y[0] / y[1];
                if (z0 != z) {
                    if (o.tagvideo) {
                        media.ObjectFit()
                    }
                    var w2 = o.screen_h * z;
                    var x2 = w2 / o.screen_w;
                    var h2 = o.screen_w / z;
                    var y2 = h2 / o.screen_h;
                    if (x2 < 1) {
                        o.mediascale.x0 = o.mediascale.x = parseFloat(x2);
                        o.mediascale.y = 1
                    }
                    else {
                        o.mediascale.x = 1;
                        o.mediascale.y0 = o.mediascale.y = parseFloat(y2)
                    }
                    css(o.mediacontainer,
                        {
                            "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
                        });
                    o.custom_aspect = x
                }
            }
            else {
                o.mediascale.x += parseFloat(x);
                o.mediascale.y += parseFloat(x);
                css(o.mediacontainer,
                    {
                        "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
                    })
            }
            if (v.hotkey.scaledrag == 1) {
                if (!o.mediadrag) {
                    if (o.mediascale.x > 0 || o.mediascale.y > 1) {
                        PluginMovable(o.mediacontainer, 'o.dragging');
                        o.mediadrag = true
                    }
                }
                xy00()
            }
            o.controls.MenuProc('scale')
        };
        this.normalscale = function () {
            if (o.tagvideo) {
                media.ObjectFit()
            }
            o.mediascale.x = o.mediascale.x0;
            o.mediascale.y = o.mediascale.y0;
            css(o.mediacontainer,
                {
                    "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
                });
            o.controls.MenuProc('scale');
            o.custom_aspect = null;
            xy00()
        };

        function xy00() {
            if (o.mediadrag && v.hotkey.scaledrag0 != 1) {
                if (o.mediascale.x == 1 && o.mediascale.y == 1) {
                    css(o.mediacontainer,
                        {
                            "top": 0,
                            "left": 0
                        })
                }
            }
        };
        this.hlsDashSub = function (x, y) {
            media.hlsDashSub(x, y)
        };
        this.currentFile = function () {
            return currentFile()
        };

        function currentFile() {
            return urls ? (urls.length > 0 ? (urls[current_url] ? urls[current_url] : '') : '') : ''
        };
        this.tag = function () {
            return media ? media.tag() : false
        };
        this.captions = function () {
            if (o.tagvideo) {
                media.captions()
            }
        };
        this.onDash = function () {
            media.onDash()
        };

        function RadioTags() {
            var xhr = XHR(v.tagsurl + '?url=' + urls[current_url]);
            xhr.onload = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.responseText) {
                        v.title = this.responseText;
                        o.actions.Title('title')
                    }
                }
            };
            xhr.send()
        }
    };
    var MediaVideo = function (url, container, pip) {
        var pjstg = createElement(v.hidevideo == 1 ? "audio" : "video");
        var hls_config;
        var pipto = 0;
        var hls;
        var is_hls = false;
        var is_hls2 = false;
        var hls_started = false;
        var hls_created = false;
        var hls_force = -1;
        var dash;
        var dash_created = false;
        var ws;
        var ws_created = false;
        var is_dash = false;
        o.live = false;
        var is_sleep = 0;
        var is_ws = false;
        var error;
        var error_time;
        var unmuteplease = false;
        var pip_quality = -1;
        var pause_before_vast = -1;
        var sleep_timeout;
        var _hlssubtracks;
        var _seekaftervast;
        var urlmse;
        var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
        var nops = false;
        css(pjstg,
            {
                'position': 'static',
                'width': '100%',
                'height': '100%',
                'object-fit': 'contain',
                'transition': "filter 0.2s linear",
                'min-height': 'auto',
                'max-height': 'none',
                'min-width': 'auto',
                'max-width': 'none'
            });
        ObjectFit();
        if (o.system.iphone && v.autoplay == 1 && v.autoplaymute == 1) {
            if (!o.start && v.preroll) {
                attr(pjstg,
                    {
                        'playsinline': 1
                    })
            }
            else {
                attr(pjstg,
                    {
                        'muted': 1,
                        'playsinline': 1,
                        'autoplay': 1
                    })
            }
        }
        else {
            if (v.playsinlineonmobile == 1 && o.system.mobile) {
                attr(pjstg,
                    {
                        'playsinline': 1
                    })
            }
            if (!o.system.tv) {
                attr(pjstg,
                    {
                        'preload': (v.preload == 1 && v.autoplay == 0 ? 'metadata' : 'none')
                    })
            }
        }
        if (v.tagcors == 1) {
            attr(pjstg,
                {
                    "crossorigin": "anonymous",
                    "crossOrigin": "anonymous"
                })
        }
        attr(pjstg,
            {
                'src': url,
                'x-webkit-airplay': 'allow',
                'disableRemotePlayback': 'true'
            });
        if (v.drunchr != 1) {
            attr(pjstg,
                {
                    'disableRemotePlayback': 'true'
                })
        }
        if (v.ynxnopip == 1) {
            attr(pjstg,
                {
                    'pip': 'false'
                })
        }
        if (pip) {
            pjstg.autoplay = true;
            if (v.pip.nomute != 1 || v.autoplay == 1) {
                pjstg.muted = true
            }
        }
        if (v.nativenodownload == 1) {
            attr(pjstg,
                {
                    'controlsList': 'nodownload'
                })
        }
        tagSrc();
        if (v.taginframe == 1) {
            var tagframe = createElement("iframe");
            attr(tagframe,
                {
                    "scrolling": "no",
                    "allowfullscreen": "true",
                    "allowtransparency": "true",
                    "src": ""
                });
            css(tagframe,
                {
                    "position": "absolute",
                    "width": "100%",
                    "height": "100%",
                    "border": 0
                });
            container.appendChild(tagframe);
            var framei = window.setInterval(function () {
                if (tagframe.contentWindow.document.readyState === "complete") {
                    window.clearInterval(framei);
                    css(tagframe.contentDocument.body,
                        {
                            "padding": 0,
                            "margin": 0
                        });
                    tagframe.contentDocument.body.appendChild(pjstg)
                }
            }, 100)
        }
        else {
            container.appendChild(pjstg)
        }
        if (!exist(url)) {
            url = ''
        }
        if (url.indexOf(".mpd") > 0) {
            is_dash = true;
            if (!o.dash) {
                if (typeof PluginDash !== "undefined") {
                    o.dash = new PluginDash()
                }
            }
            if (exist(o.dash)) {
                if (!exist(window.dashjs)) {
                    o.dash.script()
                }
                else {
                    CheckDash()
                }
            }
        }
        else if (((options.hls == 1 && v.nscdnml != 1) || url.indexOf(".m3u8") > 0) && (o.compilation.indexOf("HLS") != -1 || exist(window.Hls))) {
            is_hls = true;
            is_hls2 = true;
            try {
                if (exist(Hls)) {
                    if (!Hls.isSupported() || (o.system.safari && v.nativehlsinsafari == 1 && !o.system.ios) || (o.system.safari && o.system.ios && v.nativehlsios == 1) || (o.system.edge && v.nativehlsinedge == 1)) {
                        log('HLS support ', Hls.isSupported());
                        is_hls = false
                    }
                    else {
                        if (v.preload == 1 || v.autoplay == 1 || v.preloadhls == 1 || pip) {
                            CreateHLS(false)
                        }
                    }
                }
                else {
                    is_hls = false
                }
            }
            catch (error) {
                is_hls = false
            }
        }
        else if (url.indexOf("ws") == 0 && v.flussonic == 1) {
            is_ws = true;
            CreateWS()
        }
        if (o.system.tv && v.autoplay == 1 && !is_hls && !is_dash && !is_ws) {
            setTimeout(function () {
                o.actions.MediaReady()
            }, 100)
        }
        if (v.channels == 1) {
            exist(o.channels) ? o.channels.Close() : '';
            o.channels = new PlugMediaChannels()
        };
        this.onDash = function () {
            CheckDash()
        };

        function CheckDash() {
            is_dash = true;
            if (MseIsSupported()) {
                if (v.preload == 1 || v.autoplay == 1 || v.preloaddash == 1) {
                    CreateDASH(false)
                }
            }
            else {
                is_dash = false;
                log("DASH not supported")
            }
        }

        function CreateDASH(x) {
            if (o.dash && !dash_created) {
                o.dash.create(x, pjstg, url, pip);
                exist(window.dashjs) ? dash_created = true : ''
            }
        }

        function CreateHLS(x) {
            log("HLS");
            if (o.files.length > 1) {
                v.hlsquality = 0;
                v.hlsquality_off = true
            }
            else {
                v.hlsquality_off ? v.hlsquality = 1 : ''
            }
            if (o.audiotracks.length > 1) {
                v.hlsaudio = 0;
                v.hlsaudio_off = true
            }
            else {
                v.hlsaudio_off ? v.hlsaudio = 1 : ''
            }
            o.hls_subs = false;
            hls_force = -1;
            var dontload = false;
            if (v.preroll && v.hlsvastwait == 1) {
                dontload = true;
                v.hlsvastwait = 0
            }
            hls_config = {
                debug: (v.hlsdebug == 1 && !pip),
                autoStartLoad: (v.preload == 1 || v.autoplay == 1 || pip || x) && !dontload,
                maxBufferLength: 60,
                maxMaxBufferLength: 60,
                manifestLoadingTimeOut: (v.hlsmto > 0 ? v.hlsmto * 1000 : 40000),
                fragLoadingTimeOut: (v.hlsfto > 0 ? v.hlsfto * 1000 : 40000),
                enableWorker: false
            };
            if (v.hlscltps == 1) {
                hls_config.capLevelToPlayerSize = true
            }
            if (v.hlscookies == 1) {
                hls_config['xhrSetup'] = function (xhr, url) {
                    xhr.withCredentials = true
                }
            }
            if (exist(v.hlsconfig)) {
                if (exist(v.hlsconfig.maxBufferLength)) {
                    if (v.hlsconfig.maxBufferLength > 600) {
                        v.hlsconfig.maxBufferLength = 600
                    }
                    v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength
                }
                if (exist(v.hlsconfig.customBuffer)) {
                    v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength = v.hlsconfig.customBuffer
                }
                if (typeof v.hlsconfig == "object") {
                    for (var key in v.hlsconfig) {
                        hls_config[key] = v.hlsconfig[key]
                    }
                }
            }
            hls = new Hls(hls_config);
            js("hls", hls, 1);
            hls.loadSource(url);
            hls.attachMedia(pjstg);
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                log("HLS attached")
            });
            hls.on(Hls.Events.MANIFEST_LOADED, function (event, data) {
                !pip ? o.actions.MediaReady() : ''
            });
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                if (!pip && v.hlsquality == 1 && HlsLevelsLength() > 1) {
                    HlsQualityLevels();
                    HlsLevel();
                    o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : ''
                }
            });
            hls.on(Hls.Events.LEVEL_SWITCH, function (event, data) {
                HlsLevel()
            });
            hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
                HlsLevel()
            });
            hls.on(Hls.Events.LEVEL_LOADED, function (event, data) {
                if (!pip) {
                    if (data.details.live != o.live) {
                        o.live = data.details.live;
                        o.controls.refresh()
                    }
                    o.live = data.details.live;
                    if (o.live) {
                        log("Live");
                        o.dvr = url.indexOf("?DVR") > -1;
                        if (pjstg.duration > 0 && pjstg.currentTime > 0) {
                            if (pjstg.duration - pjstg.currentTime < 10) {
                                if (o.hls_stuck_time > 0) {
                                    if (o.hls_stuck_time == pjstg.currentTime && o.hls_stuck_duration == pjstg.duration) {
                                        o.stuck++;
                                        if (o.stuck > 2) {
                                            o.stuck = 0;
                                            o.hls_stuck_time = -1;
                                            hls.destroy();
                                            CreateHLS(true);
                                            onEnded()
                                        }
                                    }
                                    else {
                                        o.hls_stuck_time = -1
                                    }
                                }
                                else {
                                    o.hls_stuck_time = pjstg.currentTime;
                                    o.hls_stuck_duration = pjstg.duration
                                }
                            }
                        }
                    }
                }
                if (v.hlsquality == 1) {
                    o.current_quality = hls.loadLevel;
                    o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : ''
                }
                HlsUpdateAudio()
            });
            hls.on(Hls.Events.FRAG_CHANGED, function (event, data) {
                if (exist(data.frag) && !pip) {
                    js("fragment", data.frag.relurl)
                }
                if (hls_force > -1) {
                    hls.nextAutoLevel = hls_force;
                    hls_force = -1
                }
                hls_started = true;
                hlsTextTracks()
            });
            hls.on(Hls.Events.FRAG_PARSING_METADATA, function (event, data) {
                js("fragdata", data, 1)
            });
            hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, function (event, data) {
                !pip && v.hlsaudio == 1 ? HlsAudioTracks() : ''
            });
            hls.on(Hls.Events.AUDIO_TRACK_SWITCHING, function (event, data) {
                if (!pip && v.hlsaudio == 1) {
                    HlsAudioTrack()
                }
            });
            if (v.hlssubtracks == 1) {
                _hlssubtracks = new PluginHlsSubtitles(hls, pip)
            }
            else {
                hls.subtitleDisplay = false
            }
            hls.on(Hls.Events.ERROR, function (event, data) {
                v.log == 1 ? console.log(data) : '';
                js(data.type + 'Hls', data, 0, true);
                o.hlserror = data;
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            log("HLS fatal network error");
                            if (v.livewakeup == 1) {
                                HlsSleep0()
                            }
                            else {
                                error = data.details + ' (' + data.type + ')';
                                o.seekto > 0 || pip || v.live == 1 || is_ws ? '' : o.seekto = Time();
                                hls.destroy();
                                if (!pip) {
                                    o.media.onError()
                                }
                            }
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            log("HLS fatal media error, recover");
                            hls.recoverMediaError();
                            break;
                        default:
                            error = "HLS fatal error, destroy";
                            hls.destroy();
                            !pip ? o.media.onError() : '';
                            break
                    }
                }
                else {
                    log("HLS ", data.type, data.details, (data.response ? data.response.code : ''));
                    js("hls_error", (data.response ? data.response.code : ''));
                    if (is_sleep > 0) {
                        is_sleep = 2;
                        HlsSleep()
                    }
                }
            });
            hls_created = true
        }

        function HlsLevel() {
            if (!pip && v.hlsquality == 1 && HlsLevelsLength() > 1) {
                if (o.current_quality != hls.loadLevel) {
                    o.current_quality = hls.loadLevel;
                    o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : '';
                    log("HLS Level " + o.current_quality)
                }
                if (exist2(v.forbidden_quality) && o.current_quality > 0) {
                    var fq = v.forbidden_quality.split(",");
                    for (var k = 0; k < fq.length; k++) {
                        if (o.files_quality[o.current_quality].indexOf(fq[k]) > -1) {
                            log('regress quality');
                            hls.currentLevel = o.current_quality - 1;
                            o.current_quality--;
                            break
                        }
                    }
                }
            }
        }

        function CreateWS() {
            if (exist(window.FlussonicMsePlayer)) {
                if (MseIsSupported()) {
                    if (!exist(o.ws)) {
                        o.ws = new PluginWS()
                    }
                    ws = new FlussonicMsePlayer(pjstg, url, existv(v.wsconfig,
                        {
                            debug: true
                        }));
                    ws_created = true
                }
                else {
                    is_ws = false;
                    log("not supported")
                }
            }
        }

        function hlsTextTracks() {
            Captions()
        };
        this.captions = function () {
            Captions()
        };

        function Captions() {
            if (v.hlscaptions) {
                if (pjstg.textTracks.length > 0) {
                    if (v.captions == 1) {
                        pjstg.textTracks[pjstg.textTracks.length - 1].mode = "showing"
                    }
                    else {
                        pjstg.textTracks[pjstg.textTracks.length - 1].mode = "hidden"
                    }
                    if (!o.captions) {
                        o.captions = true;
                        o.controls.refresh()
                    }
                }
                else {
                    if (o.captions) {
                        o.captions = false;
                        o.controls.refresh()
                    }
                }
            }
        }

        function HlsSleep0() {
            log("sleep");
            !pip && o.play ? o.actions.Pause() : '';
            o.actions.ShowPoster();
            is_sleep = 1;
            HlsSleep(o.play)
        }

        function HlsSleep(x) {
            if (is_sleep > 0) {
                clearTimeout(sleep_timeout);
                sleep_timeout = setTimeout(HlsLiveWaiting, v.livewakeuptime * 1000)
            }
        }

        function HlsLiveWaiting() {
            if (is_sleep > 0) {
                log("watching");
                if (is_hls) {
                    if (is_sleep == 1) {
                        hls.loadSource(url)
                    }
                    if (is_sleep == 2) {
                        hls.destroy();
                        CreateHLS(true);
                        pjstg.play()
                    }
                }
                else {
                    attr(pjstg,
                        {
                            'src': url
                        })
                }
            }
        }
        pjstg.addEventListener('loadstart', onLoadStart);
        pjstg.addEventListener('error', onTagError);
        pjstg.addEventListener('ended', onEnded);
        pjstg.addEventListener('play', onPlay);
        pjstg.addEventListener('pause', onPause);
        pjstg.addEventListener('timeupdate', onTimeupdate);
        pjstg.addEventListener('seeking', onSeeking);
        pjstg.addEventListener('seeked', onSeeked);
        pjstg.addEventListener('loadedmetadata', onMeta);
        pjstg.addEventListener('volumechange', onVolume);
        pjstg.addEventListener('waiting', onWaiting);
        pjstg.addEventListener('durationchange', onDuration);
        pjstg.addEventListener('loadeddata', onLoadedData);
        pjstg.addEventListener('enterpictureinpicture', onPipEnter);
        pjstg.addEventListener('leavepictureinpicture', onPipLeave);

        function onLoadStart() {
            if (!is_hls && !is_dash) {
                !pip ? o.actions.MediaReady() : ''
            }
        }

        function onTagError() {
            if (!is_hls && !is_dash) {
                if (pjstg.error) {
                    log(pjstg.error, pjstg.error.code, pjstg.error.message);
                    var x = pjstg.error.code;
                    error = pjstg.error.message;
                    if (error == '') {
                        if (x == 1) {
                            error = "aborted"
                        }
                        if (x == 2) {
                            error = "network"
                        }
                        if (x == 3) {
                            error = "decode"
                        }
                        if (x == 4) {
                            error = "not found"
                        }
                    }
                    log("Video Error: ", error)
                }
                if (is_hls2 && v.livewakeup == 1) {
                    error = undefined;
                    HlsSleep0()
                }
                if (error != undefined || o.system.ios) {
                    onError()
                }
            }
        }

        function onError() {
            !pip ? o.media.onError() : ''
        }

        function onEnded() {
            !pip ? o.media.onEnded() : ''
        }

        function onPlay() {
            if (!o.start && v.preroll) {
                log('wrong play');
                pause();
                o.actions.Play();
                return
            }
            if (is_hls && is_sleep > 0) { }
            else {
                if (!pip) {
                    var bgl = o.actions.isVastBgLoad() && o.vastfrombg != 1;
                    if (bgl || pause_before_vast == -1) {
                        var x = false;
                        if (is_hls) {
                            if (exist(o.vast) || exist(o.vastloader)) {
                                if (bgl) { }
                                else {
                                    log('pause onplay');
                                    pause();
                                    x = true
                                }
                            }
                        }
                        if (!x) {
                            o.media.onPlay()
                        }
                    }
                }
            }
        }

        function onPause() {
            if (!nops) {
                log("onpause");
                if (o.play && o.actplay && !pjstg.ended && v.unpause == 1 && !o.nativecontrols) {
                    log("unpause");
                    TagPlay()
                }
                else {
                    !pip && !o.nopause && pjstg.paused ? o.media.onPause() : ''
                }
            }
        }

        function onTimeupdate() {
            !pip ? o.media.onTimeupdate() : '';
            if (pause_before_vast > -1) {
                if (Time() > pause_before_vast) {
                    log('pause ontime', pause_before_vast);
                    pause();
                    pause_before_vast = -1
                }
            }
        }

        function onSeeking() {
            !pip ? o.media.onSeeking() : ''
        }

        function onSeeked() {
            !pip ? o.media.onSeeked() : ''
        }

        function onMeta() {
            if (pip) {
                PipSize()
            }
            else {
                o.media.onMeta();
                PlayerSize();
                if (is_hls && is_sleep > 0) {
                    is_sleep = 0;
                    log("wake up");
                    hls.startLoad();
                    TagPlay();
                    o.controls.Play()
                }
                if (exist(v.ratio)) {
                    Resize()
                }
            }
        }
        this.ratio = function () {
            return (pjstg.videoWidth / pjstg.videoHeight)
        };

        function PipSize() {
            if (pjstg.videoHeight > 0) {
                css(container,
                    {
                        "height": container.offsetWidth / (pjstg.videoWidth / pjstg.videoHeight) - parseInt(v.pip.border)
                    })
            }
            else {
                if (pipto < 20) {
                    setTimeout(PipSize, 100);
                    pipto++
                }
            }
        }

        function PlayerSize() {
            if (v.changeheight == 1) {
                clearInterval(o.heightInterval);
                o.heightInterval = setInterval(WaitSize, 100);
                WaitSize()
            }
        }

        function WaitSize() {
            if (pjstg) {
                if (pjstg.videoHeight > 0) {
                    o.actions.changeAspect(pjstg.videoWidth / pjstg.videoHeight);
                    clearInterval(o.heightInterval)
                }
            }
        }

        function onDuration() {
            !pip && !is_ws ? o.media.onDuration() : ''
        }

        function onVolume() {
            !pip ? o.media.onVolume() : ''
        }

        function onWaiting() {
            if (is_hls && is_sleep > 0) { }
            else {
                !pip ? o.media.onWaiting() : ''
            }
        }

        function onLoadedData() {
            o.actions.LoadedData()
        }

        function MseIsSupported() {
            var mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource;
            var sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
            var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported(mimeCodec);
            var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
            return isTypeSupported && sourceBufferValidAPI
        }
        var span05 = "<span style='opacity:0.5'>";

        function HlsQualityLevels() {
            if (!pip && v.hlsquality == 1) {
                var x = hls.levels;
                var q = -1;
                o.files_quality = [];
                if (x.length > 1) {
                    for (var i = 0; i < x.length; i++) {
                        if (exist(x[i].height)) {
                            var y = o.media.renameQualities(x[i], v.nameofhlsquality);
                            if (o.files_quality.indexOf(y) > -1 || v.hlsaddbitrate == 1) {
                                if (exist(x[i].bitrate)) {
                                    var yi = o.files_quality.indexOf(y);
                                    yi > -1 ? o.files_quality[yi] += " " + span05 + " &nbsp;" + parseInt(x[yi].bitrate / 1000) + ' ' + Lang('kbps') + '</span>' : '';
                                    o.files_quality[i] = y + " " + span05 + " &nbsp;" + parseInt(x[i].bitrate / 1000) + ' ' + Lang('kbps') + '</span>'
                                }
                            }
                            else {
                                o.files_quality[i] = y
                            }
                            if (exist(x[i].audioGroupIds)) {
                                o.files_quality_ag[i] = x[i].audioGroupIds[0]
                            }
                        }
                        else if (exist(x[i].name)) {
                            o.files_quality[i] = x[i].name
                        }
                        else {
                            o.files_quality[i] = i
                        }
                        if (exist(v.default_quality) && q == -1) {
                            if (v.default_quality == o.files_quality[i]) {
                                q = i
                            }
                        }
                        if (exist(o.default_quality)) {
                            if (o.default_quality == o.files_quality[i]) {
                                q = i
                            }
                        }
                    }
                    if (v.hlsautoquality == 1) {
                        o.files_quality[x.length] = Lang("auto")
                    }
                    else {
                        hls.autoLevelEnabled = 0;
                        hls.autoLevelCapping = 0
                    }
                    if (v.hlslowquality == 1 || q > -1) {
                        hls.autoLevelCapping = 0;
                        if (v.hlschangequality == "next" || (!o.start && v.preload == 0)) {
                            hls.nextLevel = q
                        }
                        else {
                            if (v.hlschangequality == "current") {
                                hls.currentLevel = q
                            }
                        }
                        o.current_quality = q
                    }
                    else {
                        if (v.hlsautoquality == 1) {
                            o.current_quality = hls.levels.length - 1
                        }
                        else {
                            o.current_quality = hls.firstLevel
                        }
                    }
                    HlsUpdateAudio()
                }
                o.bitrate = existv(hls.levels[o.current_quality].bitrate, 0);
                o.controls ? o.controls.refresh() : ''
            }
        }

        function HlsUpdateAudio() {
            if (o.files_quality_ag.length > 0 && v.hlsaudio == 1) {
                HlsAudioTracks();
                HlsAudioTrack()
            }
        }

        function HlsAudioTracks() {
            if (!pip && v.hlsaudio == 1) {
                var x = hls.audioTracks;
                o.files_audiotrack = [];
                var stop;
                if (x.length > 1) {
                    for (var i = 0; i < x.length; i++) {
                        stop = false;
                        if (exist(x[i].groupId) && o.files_quality_ag.length > 0) {
                            if (x[i].groupId != o.files_quality_ag[o.current_quality]) {
                                for (var j = 0; j < o.files_quality_ag.length; j++) {
                                    if (o.files_quality_ag[j] == x[i].groupId) {
                                        stop = true
                                    }
                                }
                            }
                        }
                        if (!stop) {
                            o.files_audiotrack[i] = exist(x[i].name) ? o.media.renameTracks(x[i].name) : i;
                            if (exist(v.default_audio)) {
                                if (v.default_audio == o.files_audiotrack[i]) {
                                    o.current_audiotrack = i;
                                    hls.audioTrack = i
                                }
                            }
                        }
                    }
                }
            }
        }

        function HlsAudioTrack() {
            if (!pip) {
                var x = hls.audioTracks;
                var y = hls.audioTrack;
                if (y > -1) {
                    if (exist(x[y].groupId)) {
                        if (o.files_quality_ag.length > 0) {
                            if (o.files_quality_ag[o.current_quality] != x[y].groupId) {
                                for (var i = 0; i < x.length; i++) {
                                    if (x[i].name == x[y].name && x[i].groupId == o.files_quality_ag[o.current_quality]) {
                                        hls.audioTrack = i;
                                        y = i;
                                        break
                                    }
                                }
                            }
                        }
                    }
                    o.current_audiotrack = y;
                    log("HLS AudioTrack", o.current_audiotrack);
                    o.controls.AudioTrackChangedNoHand(o.current_audiotrack)
                }
            }
        };

        function Time() {
            if (is_dash) {
                return dash_created ? o.dash.time() : 0
            }
            else {
                return pjstg.currentTime
            }
        };

        function Duration() {
            var x = pjstg.duration;
            if (is_dash && dash_created) {
                x = o.dash.duration()
            }
            if (exist(v.end)) {
                x = v.end
            }
            return x != Infinity && !isNaN(x) ? x : 0
        }
        this.Play = function () {
            var p = true;
            if (is_hls && !hls_started) {
                if (!hls_created) {
                    CreateHLS(true)
                }
                hls.startLoad()
            }
            if (is_dash && !dash_created) {
                CreateDASH(true);
                p = false
            }
            if (is_ws) {
                if (!ws_created) {
                    CreateWS()
                }
                ws.play();
                p = false
            }
            if (pjstg.style.top == "-2000px") {
                this.AfterVast()
            }
            p ? TagPlay() : ''
        };
        var playtry;

        function TagPlay() {
            if (url != "none") {
                var pp = pjstg.play();
                if (pp !== undefined) {
                    pp.then(function () { }).catch(function (error) {
                        log("playError", error.message);
                        if (error.message.indexOf('source') == -1 && error.message.indexOf('interrupted by') == -1) {
                            if (v.autoplaymute == 1) {
                                log('automute');
                                o.actions.Mute();
                                pjstg.volume = 0;
                                var pp2 = pjstg.play();
                                if (pp2) {
                                    pp2.then(function () { }).catch(function (e) {
                                        log("playError2", e.message);
                                        if (o.system.tv && (is_hls || is_dash)) { }
                                        else {
                                            o.controls.Pause();
                                            o.actions.ShowPoster();
                                            js("autoplay_denied")
                                        }
                                    })
                                }
                            }
                            else {
                                o.controls.Pause();
                                o.actions.ShowPoster()
                            }
                        }
                    })
                }
            }
        }
        this.BeforeVast = function () {
            if (o.vastloader || o.vast) {
                if (o.ispipkit) {
                    PipWebkit()
                }
                if (!o.airplayed && o.system.mobile && o.system.webkit) {
                    if (!pjstg.muted) {
                        pjstg.muted = true;
                        unmuteplease = true
                    }
                    css(pjstg,
                        {
                            "position": "absolute",
                            "left": -2000,
                            "top": -2000
                        });
                    pause_before_vast = Time();
                    if (!is_ws) {
                        pjstg.play()
                    }
                    if (pause_before_vast == 0 && o.seekto > 0) {
                        _seekaftervast = o.seekto
                    }
                }
            }
        };
        this.AfterVast = function () {
            if (!o.airplayed && (o.system.mobile || o.system.webkit)) {
                css(pjstg,
                    {
                        "position": "static",
                        "left": 0,
                        "top": 0
                    });
                if (exist(v.ratio)) {
                    Resize()
                }
                if (unmuteplease) {
                    !o.muted ? pjstg.muted = false : '';
                    unmuteplease = false
                }
                if (_seekaftervast > 0) {
                    o.seekto = _seekaftervast;
                    _seekaftervast = 0
                }
                pause_before_vast = -1
            }
        };
        this.Pause = function () {
            log('paused');
            pause()
        };

        function pause() {
            if (is_ws) {
                ws.pause()
            }
            else {
                pjstg.pause()
            }
        };
        this.Toggle = function () {
            !pjstg.paused ? Pause() : TagPlay()
        };
        this.Seek = function (x) {
            if (is_dash && dash_created) {
                o.dash.seek(x)
            }
            else {
                if (is_hls) {
                    if (v.hlsforce == 1 && x > 0 && isAuto()) {
                        hls_force = hls.currentLevel;
                        hls.nextAutoLevel = 0
                    }
                }
                pjstg.currentTime = x
            }
        };
        this.Mute = function () {
            pjstg.muted = true
        };
        this.Unmute = function () {
            pjstg.muted = false;
            if (o.file_type == "hls" && o.system.ios && v.vast == 1) {
                if (!exist(o.um1)) {
                    nops = true;
                    pjstg.pause();
                    setTimeout(function () {
                        pjstg.play();
                        nops = false
                    }, 10);
                    o.um1 = true
                }
            }
        };
        this.Volume = function (x) {
            pjstg.volume = x
        };
        this.Gain = function () {
            if (o.gainedsource != pjstg) {
                var source;
                var ctx;
                if (o.audiosrc[pjstg]) {
                    source = o.audiosrc[pjstg];
                    ctx = o.audioctx[pjstg]
                }
                else {
                    window.AudioContext = window.AudioContext || window.webkitAudioContext;
                    if (exist(window.AudioContext)) {
                        try {
                            ctx = new AudioContext();
                            source = ctx.createMediaElementSource(pjstg);
                            o.audiosrc[pjstg] = source;
                            o.audioctx[pjstg] = ctx
                        }
                        catch (e) {
                            log(e)
                        }
                    }
                }
                if (ctx) {
                    var gain = ctx.createGain();
                    gain.gain.value = v.volumegain;
                    source.connect(gain);
                    gain.connect(ctx.destination);
                    o.gained = true;
                    o.gainedsource = pjstg
                }
            }
        };
        this.isPlaying = function () {
            return !pjstg.paused
        };
        this.isLive = function () {
            return v.live == 1 || is_ws ? true : o.live
        };
        this.tag = function () {
            return pjstg
        };
        this.nativeControls = function () {
            attr(pjstg,
                {
                    'controls': '1'
                });
            return true
        };
        this.preload = function () {
            attr(pjstg,
                {
                    'preload': 'metadata'
                });
            if (is_hls && !hls_created) {
                CreateHLS(false)
            }
            if (is_dash && !dash_created) {
                CreateDASH(false)
            }
        };
        this.status = function () {
            var state = "playing";
            if (pjstg.paused) {
                state = "paused"
            }
            if (pjstg.ended) {
                state = "ended"
            }
            return state
        };
        this.ChangePip = function (x, y) {
            pip = x;
            y.appendChild(pjstg);
            container = y;
            if (x) {
                if (v.pip.nomute != 1) {
                    pjstg.muted = true
                }
                else {
                    if (!o.muted) {
                        pjstg.muted = false
                    }
                }
                PipSize();
                if (o.files_quality.length > 0) {
                    if (is_hls) {
                        pip_quality = o.current_quality;
                        hls.autoLevelCapping = 0;
                        hls.currentLevel = 0
                    }
                }
            }
            else {
                if (!o.muted && v.pip.nomute != 1) {
                    pjstg.muted = false
                }
                pjstg.volume = v.volume;
                PlayerSize();
                if (o.files_quality.length > 0) {
                    if (is_hls) {
                        hls.autoLevelCapping = -1;
                        if (pip_quality > -1) {
                            pip_quality < hls.levels.length ? hls.nextLevel = pip_quality : ''
                        }
                    }
                }
            }
        };
        this.time = function () {
            return Time()
        };
        this.duration = function () {
            return Duration()
        };
        this.loaded = function () {
            var x = 0;
            if (pjstg.buffered) {
                if (pjstg.buffered.length > 0) {
                    var y = Time();
                    for (var i = 0; i < pjstg.buffered.length; i++) {
                        if ((y >= pjstg.buffered.start(i) || y >= pjstg.buffered.start(i) - 100) && y <= pjstg.buffered.end(i)) {
                            x = pjstg.buffered.end(i)
                        }
                    }
                    x == 0 ? x = pjstg.buffered.end(pjstg.buffered.length - 1) : ''
                }
            }
            if (exist(v.end)) {
                x > v.end ? x = v.end : ''
            }
            return x
        };
        this.auto = function () {
            return isAuto()
        };

        function isAuto() {
            var x = false;
            if (is_hls) {
                if (hls_created) {
                    x = hls.autoLevelEnabled
                }
            }
            else if (is_dash) {
                if (dash_created) {
                    x = o.dash.auto()
                }
            }
            return x
        }
        this.size = function () {
            return {
                "width": pjstg.videoWidth,
                "height": pjstg.videoHeight
            }
        };
        this.src = function (x) {
            x = x.replace(/\(random\)/g, Math.random());
            url = x;
            o.media_error != 2 ? o.media_error = false : '';
            if (is_dash) {
                if (dash_created) {
                    o.dash.source(x)
                }
            }
            else if (is_hls) {
                is_hls && hls ? hls.destroy() : '';
                CreateHLS(true);
                CheckPip()
            }
            else {
                attr(pjstg,
                    {
                        'src': x,
                        'autoplay': 0
                    });
                tagSrc();
                pause()
            }
        };

        function tagSrc() {
            if (o.system.safari) {
                var y = pjstg.textTracks;
                if (y) {
                    for (var i = 0; i < y.length; i++) {
                        y[i].mode = "disabled"
                    }
                }
                y = pjstg.audioTracks;
                if (y) {
                    for (i = 0; i < y.length; i++) {
                        y[i].enabled = (i == 0 ? 1 : 0)
                    }
                }
                if (window.WebKitPlaybackTargetAvailabilityEvent) {
                    pjstg.addEventListener('webkitplaybacktargetavailabilitychanged', function (event) {
                        o.airplay = event.availability == "available";
                        !pip ? o.actions.AirplayChanged() : ''
                    });
                    pjstg.addEventListener('webkitcurrentplaybacktargetiswirelesschanged', function (event) { })
                }
            }
            CheckPip()
        }
        this.airplay = function () {
            pjstg.webkitShowPlaybackTargetPicker()
        };
        this.pipwebkit = function () {
            PipWebkit()
        };

        function CheckPip() {
            if (o.system.webkit) {
                if (exist(pjstg.webkitSupportsPresentationMode) && !o.system.iphone) {
                    o.pipwebkit = true
                }
                if (document.pictureInPictureEnabled && !pjstg.disablePictureInPicture) {
                    o.pipwebkit = true
                }
            }
        }

        function PipWebkit() {
            if (o.system.safari) {
                if (pjstg.webkitPresentationMode === "picture-in-picture") {
                    pjstg.webkitSetPresentationMode("inline");
                    o.ispipkit = false
                }
                else {
                    pjstg.webkitSetPresentationMode("picture-in-picture");
                    o.ispipkit = true
                }
            }
            else {
                if (!document.pictureInPictureElement) {
                    eval('pjstg.requestPictureInPicture().then(p => {o.ispipkit = true;}).catch(error => {o.ispipkit = false;});')
                }
                else {
                    eval('document.exitPictureInPicture().then(ok =>{o.ispipkit = false;}).catch(error => {});')
                }
            }
        };

        function onPipEnter() {
            o.ispipkit = true
        };

        function onPipLeave() {
            o.ispipkit = false
        };
        this.setDashQuality = function (x) {
            if (dash_created) {
                o.dash.setQuality(x)
            }
        };
        this.setDashAudioTrack = function (x) {
            if (dash_created) {
                if (pjstg.buffered.length > 0) {
                    o.dash.setAudio(x)
                }
            }
        };
        this.setWsQuality = function (x) {
            if (o.ws) {
                o.ws.setTracks(ws, x, -1)
            }
        };
        this.setWsAudioTrack = function (x) {
            if (o.ws) {
                o.ws.setTracks(ws, -1, x)
            }
        };
        this.setHlsQuality = function (x) {
            if (hls_created) {
                var y = parseInt(x);
                if (x == hls.levels.length) {
                    y = -1;
                    hls.autoLevelCapping = -1
                }
                if (v.hlschangequality == "current") {
                    setTimeout(onWaiting, 500);
                    hls.currentLevel = y
                }
                if (v.hlschangequality == "next") {
                    log("HLS next level " + y);
                    hls.nextLevel = y
                }
                if (y == -1) {
                    o.current_quality = hls.loadLevel
                }
                HlsUpdateAudio()
            }
        };
        this.getHLS = function () {
            return hls
        };
        this.getDASH = function () {
            return dash_created ? o.dash.getDash() : false
        };
        this.HlsLevelsLength = function () {
            return HlsLevelsLength()
        };

        function HlsLevelsLength() {
            var x = 0;
            if (hls_created) {
                if (hls.levels) {
                    x = hls.levels.length
                }
            }
            return x
        }
        this.DashLevelsLength = function () {
            return DashLevelsLength()
        };
        this.ObjectFit = function () {
            ObjectFit()
        };

        function ObjectFit() {
            if (pjstg) {
                if (v.covervideo == 1 || v.fill == 1) {
                    if (v.fillvideo == 1 || v.fill == 1) {
                        css(pjstg,
                            {
                                'object-fit': 'fill'
                            })
                    }
                    else {
                        css(pjstg,
                            {
                                'object-fit': 'cover'
                            })
                    }
                }
                else {
                    css(pjstg,
                        {
                            'object-fit': 'contain'
                        })
                }
            }
        }
        this.resize = function () {
            Resize()
        };

        function Resize() {
            if (v.ratio) {
                api('scale', String(v.ratio).replace('/', ':'))
            }
        }

        function DashLevelsLength() {
            var x = 0;
            if (dash_created) {
                x = o.dash.levels()
            }
            return x
        }
        this.setHlsAudioTrack = function (x) {
            if (hls_created) {
                hls.audioTrack = parseInt(x)
            }
        };
        this.hlsDashSub = function (x, y) {
            if (y == "hls" && hls_created && _hlssubtracks) {
                _hlssubtracks.HlsSubTrack(x)
            }
            if (y == "dash" && dash_created) {
                o.dash.subtrack(x)
            }
        };
        this.setSpeed = function (x) {
            if (x) {
                pjstg.playbackRate = x
            }
        };
        this.removeTracks = function () {
            var x = pjstg.childNodes;
            var y = [];
            for (var i = 0; i < x.length; i++) {
                if (x[i].tagName.toLowerCase() == 'track') {
                    x[i].removeEventListener("load", iOSTrackLoaded);
                    y.push(x[i])
                }
            }
            for (var i = 0; i < y.length; i++) {
                pjstg.removeChild(y[i])
            }
        };
        this.addTrack = function (x, y, z) {
            if (x != '') {
                if (x.indexOf(' or ') > 0) {
                    var xx = x.split(' or ');
                    x = xx[0]
                }
                var track = document.createElement('track');
                track.setAttribute('src', x);
                track.setAttribute('label', y);
                track.setAttribute('kind', 'subtitles');
                track.setAttribute('mode', 'showing');
                if (z) {
                    track.setAttribute('default', '')
                }
                pjstg.appendChild(track);
                track.addEventListener("load", iOSTrackLoaded)
            }
        };

        function iOSTrackLoaded(e) {
            if (e.target.label && o.sbt) {
                for (var i = 0; i < o.files_subtitle.length; i++) {
                    if (o.files_subtitle[i] == e.target.label) {
                        o.sbt.SetSubtitle(i)
                    }
                }
            }
        };
        this.errorMessage = function () {
            return error ? error : ''
        };
        this.Remove = function () {
            clearInterval(o.dashInterval);
            is_hls && hls ? hls.destroy() : '';
            is_dash && dash_created ? o.dash.reset() : '';
            is_ws && ws ? ws.stop() : '';
            pjstg.removeEventListener('error', onTagError);
            pjstg.removeEventListener('ended', onEnded);
            pjstg.removeEventListener('play', onPlay);
            pjstg.removeEventListener('pause', onPause);
            pjstg.removeEventListener('timeupdate', onTimeupdate);
            pjstg.removeEventListener('seeking', onSeeking);
            pjstg.removeEventListener('seeked', onSeeked);
            pjstg.removeEventListener('loadedmetadata', onMeta);
            pjstg.removeEventListener('volumechange', onVolume);
            pjstg.removeEventListener('waiting', onWaiting);
            pjstg.removeEventListener('durationchange', onDuration);
            pjstg.removeEventListener('enterpictureinpicture', onPipEnter);
            pjstg.removeEventListener('leavepictureinpicture', onPipLeave);
            pjstg.src = '';
            if (container.tagName == "IFRAME") {
                container.contentDocument.body.removeChild(pjstg)
            }
            else {
                container.removeChild(pjstg)
            }
            pjstg = null
        }
    };
    var Controls = function () {
        var b = [];
        var butNames = [];
        var butPosition = [];
        var waiting = false;
        var wait_to;
        var toolbarHidden = false;
        var settings;
        var playlist;
        if (o.settings2) {
            o.settings2.hide();
            o.settings2 = null
        }
        var _lastactbut;
        o.files_speed = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];
        if (v.settings.customspeeds == 1 && exist(v.settings.speeds)) {
            v.settings.speeds = v.settings.speeds.replace(/\n/ig, '');
            o.files_speed = v.settings.speeds.split(",")
        }
        o.speed1 = o.files_speed.indexOf('1') > -1 ? o.files_speed.indexOf('1') : o.files_speed.indexOf(1);
        o.current_speed == 3 ? o.current_speed = o.speed1 : '';
        for (var i in o.menuproc) {
            if (o.menuproc.hasOwnProperty(i)) {
                !exist(v.settings[i]) ? v.settings[i] = 5 : '';
                o['files_' + i] = ['+ ' + v.settings[i] + '%', '&ndash; ' + v.settings[i] + '%', (o.menuproc[i] * 100 + '%')]
            }
        }
        if (v.toolbar.hidejustfull == 1 && o.system.ios && v.nativefullios == 1) {
            v.toolbar.hide = 0
        }
        var resizeonwidth = false;
        var stretch_width = 0;
        var stretch_width_last = 0;
        var stretch_with_volume = false;
        var firstly = true;
        var uijs;
        var bg = new ControlsBg();
        var settings;
        var order = [];
        var _rights = false;
        var _move_rights = false;
        var _max_order = 0;
        var _rb = [];
        if (v.control_line.position == "controls-right") {
            v.control_line.position = "controls"
        }
        for (var y in v) {
            if (v.hasOwnProperty(y)) {
                if (y.indexOf("control_") == 0 && v[y]) {
                    !exist(v[y].order0) ? v[y].order0 = v[y].order : v[y].order = v[y].order0;
                    order[v[y].order] = y;
                    if (v.control_line.position != "controls") {
                        if (v[y].position == "controls-right") {
                            _rb.push([y, v[y].order]);
                            _rights = true
                        }
                        else {
                            if (v[y].position == "controls" || v[y].position == undefined) {
                                _rights ? _move_rights = true : ''
                            }
                        }
                    }
                    _max_order < v[y].order ? _max_order = v[y].order : ''
                }
            }
        }
        if (_move_rights) {
            _rb.sort(function (a, b) {
                return a[1] - b[1]
            });
            for (var i = 0; i < _rb.length; i++) {
                order[v[_rb[i][0]].order] = null;
                v[_rb[i][0]].order = _max_order + 1;
                _max_order++;
                order[v[_rb[i][0]].order] = _rb[i][0]
            }
        }
        if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
            o.toolbar = createElement("div");
            o.frame.appendChild(o.toolbar);
            css(o.toolbar,
                {
                    'position': 'absolute',
                    'left': 0,
                    'top': 0,
                    'width': '100%',
                    'height': '100%',
                    'transition': 'top 0.3s ease-out',
                    'pointer-events': 'none'
                })
        }
        var bg2 = createElement("div");
        if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
            o.toolbar.appendChild(bg2)
        }
        else {
            o.frame.appendChild(bg2)
        }
        css(bg2,
            {
                'position': 'absolute',
                'left': 0,
                'bottom': 0,
                'width': '100%',
                'height': v.toolbar.h
            });
        bg2.onclick = function () {
            !o.system.mobile ? o.actions.ControlsBgClick() : ''
        };
        if (v.nocontrols == 1) {
            hide2(bg.c());
            hide2(bg2)
        }
        for (var i = 1; i < order.length; i++) {
            if (order[i]) {
                var y = order[i];
                if (y) {
                    var action = v[y].action;
                    if (o.system.mobile) {
                        if (action == "volume" && v[y].customline == "speed") { }
                        else {
                            if (action == "volume" && v.showvolmobile == 1 && o.system.mobile) {
                                v[y].hideoutmute = 0
                            }
                            else {
                                if (action == "volume" || (action == "fullscreen" && v.nativemobile)) {
                                    v[y].on = 0
                                }
                            }
                        }
                    }
                    if (v.nocontrols == 1) {
                        v[y].on = 0
                    }
                    if (v[y].on == 1) {
                        if (action == "line" || action == "volume") {
                            b[y] = new ControlLine(y, action);
                            b[y].Resize(b[y].s("w"))
                        }
                        else {
                            b[y] = new Control(y)
                        }
                        butNames.push(y);
                        if (b[y].g("action") == "title") {
                            if (b[y].s("text") == '') {
                                if (b[y].s("var") != '') {
                                    if (!exist(v[b[y].s("var")])) {
                                        b[y].set("display", false)
                                    }
                                }
                                else {
                                    b[y].set("display", false)
                                }
                            }
                        }
                        if (b[y].g("action") == "custom") {
                            var lu = b[y].s("linkurl");
                            if (lu) {
                                if (lu.indexOf("api:") == 0 && lu.indexOf(",0/1") > 0) {
                                    var z = lu.split(",");
                                    api(z[0].substr(4)) == 0 ? b[y].CustomSwitch(0) : ''
                                }
                            }
                        }
                        b[y].set("scale", b[y].s("scale"))
                    }
                }
            }
        }
        if (exist(v.settings)) {
            if (typeof (Settings) == 'function') {
                settings = new Settings("settings");
                v.settings.always == 1 ? settings.show() : settings.hide()
            }
            else {
                o.noset = true
            }
        }
        if (exist(v.playlist)) {
            if (typeof (Settings) == 'function') {
                playlist = new Settings("playlist");
                if (exist(o.playlist)) {
                    playlist.updatePlaylist(o.playlist);
                    if (v.playlist.openplaylistbefore == 0 || !exist(v.playlist.openplaylistbefore)) {
                        v.playlist.always == 0 ? playlist.hide() : ''
                    }
                    else {
                        playlist.show()
                    }
                }
                else {
                    playlist.hide(1)
                }
                PlaylistControls()
            }
        }
        CreateShare();
        CustomTextButs();
        Resize(true);
        ShowOrHide();
        SpeedChanged();
        firstly = false;

        function ControlX(but) {
            var x = 0;
            var to_right = false;
            if (but) {
                if (but.g("action") == 'line') {
                    x = butPosition.left + but.s("marginleft");
                    if (butPosition.rightbs != null) { }
                    else {
                        butPosition.rightbs = []
                    }
                }
                else {
                    if (butPosition.rightbs != null) {
                        var but_space = but.g("width") + but.s("marginright") + but.s("marginleft");
                        if (HideProof(but)) {
                            but_space = 0
                        }
                        if (but.s("hidden") == 1 && !but.g("show")) {
                            but_space = 0
                        }
                        if (but.s("vertical") > 0) {
                            but_space = 0
                        }
                        x = bg.g("w") - v.toolbar.leftandrightpadding * 1 - but_space + but.g("width") / 2 + but.s("marginleft");
                        var i = 0;
                        butPosition.right -= but_space;
                        for (i = 0; i < butPosition.rightbs.length; i++) {
                            var but2 = b[butPosition.rightbs[i]];
                            if (but2.s("vertical") > 0) {
                                css(but2.c(),
                                    {
                                        "left": (but2.g("x0") - but_space)
                                    })
                            }
                            else {
                                css(but2.c(),
                                    {
                                        "left": (but2.g("x") - but_space)
                                    })
                            }
                            but2.set("x0", but2.g("x"))
                        }
                        butPosition.rightbs.push(but.g("key"));
                        but.set('rightside', 1)
                    }
                    else {
                        if (but.s("hidden") == 1 && !but.g("show")) {
                            if (but.g("action") == "volume") {
                                if (but.s("hide") == 1 && but.s("hideoutmute") == 1 && stretch_with_volume) {
                                    stretch_width += but.g("width") + but.s("marginleft") + but.s("marginright");
                                    stretch_with_volume = false
                                }
                            }
                        }
                        else {
                            if (but.s("vertical") > 0) {
                                x = butPosition.left + but.s("marginleft") + but.s("marginright")
                            }
                            else {
                                var stop = false;
                                if (but.g("action") == "volume") {
                                    if (but.s("hide") == 1 && but.s("hideoutmute") == 1) {
                                        if (!o.hidden_volume_over_process && !o.hidden_volume_over) {
                                            stop = true;
                                            stretch_with_volume = false
                                        }
                                        else {
                                            if (!stretch_with_volume) {
                                                stretch_width -= but.g("width") + but.s("marginleft") + but.s("marginright");
                                                stretch_with_volume = true
                                            }
                                        }
                                    }
                                }
                                if (HideProof(but)) {
                                    stop = true
                                }
                                if (!stop) {
                                    butPosition.left += but.g("width") / 2 + but.s("marginleft");
                                    x = butPosition.left;
                                    butPosition.left += but.g("width") / 2 + but.s("marginright")
                                }
                                else {
                                    x = butPosition.left
                                }
                            }
                        }
                    }
                }
            }
            return x
        };
        this.NewPl = function () {
            CreateShare()
        };
        this.CrShr = function () {
            CreateShare()
        };

        function CreateShare() {
            if (o.shareme) {
                typeof PluginShare == 'function' ? o.share = new PluginShare() : ''
            }
        }

        function ControlCoordinate(but) {
            var width = o.fullscreen && v.toolbar.stretchonfullscreen == 0 ? o.normal_w : o.screen_w;
            var height = o.screen_h;
            var but_x = 0;
            if (but != bg) {
                but_x = width / 2 + but.s("marginleft") - but.s("marginright")
            }
            var but_y = height / 2;
            var but_w = but.g("width");
            var but_h = but.g("height");
            var position = but.s("position");
            if (position.indexOf("center") > -1) {
                but_x = o.screen_w / 2 + but.s("marginleft") - but.s("marginright")
            }
            if (position.indexOf("top") == 0) {
                but_y = but_h / 2 + (but.s("marginproctop") * o.screen_h / 100)
            }
            if (position.indexOf("bottom") == 0) {
                but_y = o.screen_h - (but == bg ? but_h : but_h / 2) - (but.s("marginprocbottom") * o.screen_h / 100)
            }
            if (position.indexOf("right") > -1) {
                but_x = o.screen_w - but_w / 2 + but.s("marginleft") - but.s("marginright") - (but.s("marginprocright") * o.screen_w / 100)
            }
            if (position.indexOf("left") > -1) {
                but_x = but_w / 2 + but.s("marginleft") - but.s("marginright") + (but.s("marginprocleft") * o.screen_w / 100)
            }
            if (position == "timeline") {
                but_x = -o.timeline_w / 2 + (but.s("marginprocleft") * o.timeline_w / 100) + but.s("marginleft") - but.s("marginright");
                but_y = -o.timeline_h / 2 - (but.s("marginprocbottom") * o.timeline_h / 100) + (but.s("marginproctop") * o.timeline_h / 100)
            }
            if (position.indexOf("controls") > -1) {
                var cx = ControlX(but);
                but_x = (bg ? (bg.c() ? int(bg.c().offsetLeft) : 0) : 0) + cx;
                if (position == "controls-right") {
                    but_x += stretch_width
                }
                if (v.toolbar.position == "top") {
                    but_y = v.toolbar.h / 2 - (v.toolbar_margintop < 0 ? v.toolbar_margintop : 0)
                }
                else {
                    but_y = height - v.toolbar.h / 2
                }
            }
            return {
                x: but_x,
                y: but_y + but.s("margintop") - but.s("marginbottom")
            }
        }

        function Resize(all) {
            var w = o.fullscreen && v.toolbar.stretchonfullscreen == 0 ? o.normal_w : o.screen_w;
            var h = o.screen_h;
            css(bg.c(),
                {
                    'top': (v.toolbar.position == "top" ? 0 : o.screen_h - v.toolbar.h) - v.toolbar_margintop
                });
            bg.set("y0", (o.screen_h - v.toolbar.h - v.toolbar_margintop));
            if (v.toolbar.stretchonfullscreen == 0 && bg) {
                css(bg.c(),
                    {
                        'width': w,
                        'left': 0,
                        'margin-left': 0
                    });
                bg.set("w", w);
                if (o.fullscreen) {
                    css(bg.c(),
                        {
                            'left': '50%',
                            'margin-left': -w / 2
                        })
                }
            }
            butPosition = {
                "left": v.toolbar.leftandrightpadding * 1,
                "right": (bg.g("w") - v.toolbar.leftandrightpadding * 1)
            };
            var bg_hide = false;
            if (!bg.g("show")) {
                bg.set("display", true);
                bg_hide = true
            }
            var key;
            for (var i = 0; i < butNames.length; i++) {
                key = butNames[i];
                if (b[key]) {
                    var cc = ControlCoordinate(b[key]);
                    if (cc) {
                        if (b[key].s("animation") == "position") {
                            if (exist(o.motions[key])) {
                                o.motions[key].XY(b[key].g("x0"), cc.x, b[key].g("y0"), cc.y)
                            }
                        }
                        b[key].set("x0", cc.x);
                        b[key].set("y0", cc.y);
                        if (b[key].s("hidden") == 1 && !b[key].g("show") && !all) {
                            HidePositionControl(b[key])
                        }
                        else {
                            css(b[key].c(),
                                {
                                    "position": "absolute",
                                    "left": b[key].g("x0"),
                                    "top": b[key].g("y0")
                                })
                        }
                    }
                }
            }
            if (bg_hide) {
                bg.set("display", false)
            }
            stretch_width = 0;
            for (key in b) {
                if (b.hasOwnProperty(key)) {
                    if (b[key].s("position") == "controls-right" && b[key].g("action") != "line" && stretch_width > -1) {
                        stretch_width = butPosition.right - butPosition.left
                    }
                    if (b[key].g("action") == "line" && bg) {
                        var line_width;
                        if (b[key].s("customwidth") == 1) {
                            line_width = b[key].s("w")
                        }
                        else {
                            if (b[key].s("position").indexOf("controls") > -1) {
                                line_width = butPosition.right - butPosition.left - b[key].s("marginleft") - b[key].s("marginright");
                                css(b[key].c(),
                                    {
                                        "left": (int(bg.c().offsetLeft) + butPosition.left + b[key].s("marginleft") + line_width / 2)
                                    });
                                stretch_width = -1
                            }
                            else {
                                line_width = bg.g("w") - b[key].s("marginleft") - b[key].s("marginright");
                                css(b[key].c(),
                                    {
                                        "left": (int(bg.c().offsetLeft) + b[key].s("marginleft") + line_width / 2)
                                    })
                            }
                        }
                        b[key].set("x0", b[key].g("x"));
                        b[key].Resize(line_width)
                    }
                }
            }
            if (settings) {
                ResizeSettings(settings)
            }
            if (playlist) {
                ResizeSettings(playlist)
            }
            if (resizeonwidth || o.fullscreen || stretch_width_last != stretch_width) {
                ShowOrHide()
            }
        }

        function HidePositionControl(b) {
            var left = 0;
            var top = 0;
            if (b.s("position").indexOf("right") > -1 && b.s("position").indexOf("controls") == -1) {
                left = o.screen_w + b.g("width") + 10
            }
            if (b.s("position").indexOf("left") > -1) {
                left = -b.g("width") - 10
            }
            if (b.s("position").indexOf("top") > -1) {
                top = -b.g("height") * 2
            }
            if (b.s("position").indexOf("bottom") > -1 || b.s("position").indexOf("controls") > -1) {
                top = o.screen_h + b.g("height") + b.g("width") + 10
            }
            if (left > 0) {
                css(b.c(),
                    {
                        "left": left
                    })
            }
            if (top > 0) {
                css(b.c(),
                    {
                        "top": top
                    })
            }
        }

        function ResizeSettings(x) {
            var top = -2000;
            x.resizePlaylist();
            var y = o.screen_h - v.toolbar.h * (x.s("position").indexOf("top") > -1 ? 1 : 2);
            if (x == playlist && v.change2playlist == 1) {
                y = o.screen_h
            }
            var ymax = y - (o.fullscreen && !o.system.mobile ? (100 + x.s("hmaxk") * 1) : x.s("hmaxk")) - (x == playlist && x.s("hmaxk") * 1 == 0 ? x.s("margintop") : 0);
            ymax < 100 ? ymax = 100 : '';
            css(x.c(),
                {
                    'max-height': ymax
                });
            x.co() ? css(x.co(),
                {
                    'max-height': ymax
                }) : '';
            if (x.g("show")) {
                top = o.screen_h / 2 - x.g("height") / 2 + x.s("margintop") - x.s("marginbottom");
                if (x.s("position").indexOf("top") > -1) {
                    top = x.s("margintop") - x.s("marginbottom")
                }
                if (x.s("position").indexOf("bottom") > -1) {
                    top = o.screen_h - (v.toolbar.position != 'top' ? v.toolbar.h : 0) - x.g("height") + x.s("margintop") - x.s("marginbottom")
                }
                top < 0 ? top = 0 : ''
            }
            if (x.g("key") == "settings" && o.sttx) {
                var sttr = o.screen_w - x.g("width") - x.s("marginright");
                if (o.sttx > sttr) {
                    css(x.c(),
                        {
                            "position": "absolute",
                            "right": x.s("marginright"),
                            "left": "auto",
                            "top": top
                        })
                }
                else {
                    css(x.c(),
                        {
                            "position": "absolute",
                            "left": o.sttx,
                            "right": "auto",
                            "top": top
                        })
                }
            }
            else {
                if (x.s("position").indexOf("right") > -1) {
                    css(x.c(),
                        {
                            "position": "absolute",
                            "right": x.s("marginright") - x.s("scrollwidth"),
                            "left": "auto",
                            "top": top
                        })
                }
                else if (x.s("position").indexOf("left") > -1) {
                    css(x.c(),
                        {
                            "position": "absolute",
                            "left": x.s("marginleft"),
                            "right": "auto",
                            "top": top
                        })
                }
                else {
                    if (x.g("key") == "playlist" && x.s("floatleft") == 1) {
                        css(x.c(),
                            {
                                "position": "absolute",
                                "left": o.screen_w / 2 - x.g("width") / 2 + x.s("marginleft") / 2 - x.s("marginright") / 2,
                                "top": top
                            })
                    }
                    else {
                        var l = o.screen_w / 2 - x.g("width") / 2 + x.s("marginleft") - x.s("marginright");
                        css(x.c(),
                            {
                                "position": "absolute",
                                "left": (l > 0 ? l : 0),
                                "top": top
                            })
                    }
                }
            }
            x.Arrows()
        };
        this.ControlClick = function (key) {
            var but = b[key];
            var a = but.g("action");
            if (a) {
                var d = new Date();
                o.clicktime = d.getTime();
                if (a && a != "") {
                    Action(but);
                    a == "pause" ? o.actpause = 1 : '';
                    a == "play" ? o.actpause = 0 : ''
                }
            }
        };
        this.toggleControl = function (z, x, y) {
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    if (b[key].s(z) == x) {
                        b[key].set(y ? "show2" : "hide2")
                    }
                }
            }
        };
        this.butByS = function (x, s) {
            var y = FindBut(s, x);
            return y
        };

        function Action(but, type) {
            o.acted = true;
            _lastactbut = but;
            var a = but.g("action");
            if (a == "play") {
                o.actions.Play();
                if (v.hotkey.on == 1 && v.hotkey.icons == 1 && v.hotkey.playiconbut == 1) {
                    PluginHotIcon('play', 1)
                }
            }
            else {
                if (a == "pause") {
                    o.rldplay = 0;
                    o.actions.Pause();
                    if (v.hotkey.on == 1 && v.hotkey.icons == 1 && v.hotkey.playiconbut == 1) {
                        PluginHotIcon('play', 0)
                    }
                }
                if (a == "stop") {
                    o.actions.StopMedia()
                }
            }
            if (a == "back") {
                o.actions.Seek(0, false)
            }
            if (a == "fullscreen") {
                !o.casting ? o.actions.Fullscreen() : ''
            }
            else {
                if (a == "normalscreen") {
                    o.actions.Normalscreen()
                }
            }
            if (a == "line") {
                var ld = o.media.duration();
                var lt = but.g("click") * ld;
                if (v.delete > 0) {
                    ld -= v.delete;
                    lt = but.g("click") * ld + v.delete
                }
                if (v.seekwindow > 0) {
                    if (v.seekwindow / ld <= 1 - but.g("click")) {
                        return
                    }
                }
                o.actions.Seek(lt, true);
                if (o.continue) {
                    o.continue.write(lt, ld);
                    o.seekto > 0 ? o.seekto = undefined : ''
                }
            }
            if (a == "volume") {
                var x = but.g("click");
                x < 0.02 ? x = 0 : '';
                x > 1 ? x = 1 : '';
                if (but.s("customline") == "speed") {
                    x = parseFloat(x * o.files_speed.slice(-1)[0]).toFixed(1);
                    o.actions.SetSpeed(x, 1)
                }
                else {
                    if (o.storage && v.volumestore == 1) {
                        localStorage.setItem("pljsvolume", x);
                        if (but.g("click") > 0 || o.system.iphone || v.mutestore == 0) {
                            localStorage.removeItem("pljsmute")
                        }
                        else {
                            localStorage.setItem("pljsmute", 1)
                        }
                    }
                    o.actions.Volume(x)
                }
            }
            if (a == "mute") {
                if (o.storage && !o.system.iphone && v.mutestore == 1) {
                    localStorage.setItem("pljsmute", 1)
                }
                o.actions.Mute();
                if (v.hotkey.icons == 1 && v.hotkey.muteiconbut == 1) {
                    PluginHotIcon('mute', 0)
                }
            }
            else {
                if (a == "unmute") {
                    if (o.storage) {
                        localStorage.removeItem("pljsmute")
                    }
                    o.actions.Unmute();
                    if (v.hotkey.icons == 1 && v.hotkey.muteiconbut == 1) {
                        PluginHotIcon('mute', 1)
                    }
                }
            }
            if (a.indexOf("time") == 0) {
                but.isOn() ? but.Off() : but.On()
            }
            if (a == "rotate") {
                o.media.Rotate()
            }
            if (a == "scale+") {
                o.media.Scale(0.1)
            }
            if (a == "scale-") {
                o.media.Scale(-0.1)
            }
            if (a == "scale") {
                o.media.Scale(0)
            }
            if (a == "live") {
                api("restart");
                but.set("iconopacity", 1);
                but.set("saturate", 1)
            }
            if (a == "share") {
                js("share");
                ShowShare()
            }
            if (a == "settings") {
                o.sttx = undefined;
                if (settings) {
                    if (!settings.g("show")) {
                        settings.show()
                    }
                    else {
                        settings.hide()
                    }
                }
            }
            if (a == "playlist") {
                if (o.overopentimeout == a) {
                    return
                }
                if (exist(v.playlist)) {
                    if (playlist.g("show")) {
                        playlist.hide()
                    }
                    else {
                        setTimeout(function () {
                            playlist.show()
                        }, 100)
                    }
                }
            }
            if (a == "next") {
                o.controls.PlaylistNext()
            }
            if (a == "prev") {
                o.controls.PlaylistPrev()
            }
            if (a == "custom") {
                if (but.s("link") == 1 && but.s("linkurl") != "") {
                    var x = trim(but.s("linkurl"));
                    if (o.overopentimeout == a + x) {
                        return
                    }
                    if (x.indexOf('{time}') > -1) {
                        x = x.replace('{time}', (exist(o.continue) ? o.continue.flag().t : o.media.time()))
                    }
                    if (x.indexOf('{file}') > -1) {
                        x = x.replace('{file}', o.media.currentFile())
                    }
                    if (x.indexOf('{title}') > -1) {
                        x = x.replace('{title}', v.title.replace(/,/ig, " "))
                    }
                    if (x == "airplay") {
                        o.media.Airplay()
                    }
                    if (x == "skip") {
                        if (but.s("skip") > 0) {
                            o.actions.Seek(but.s("skip"))
                        }
                    }
                    if (x == "seektome") {
                        o.actions.Seek(but.s("marginprocleft") * o.media.duration() / 100);
                        !o.play ? o.actions.Play() : ''
                    }
                    but.s("linkpause") == 1 ? o.actions.Pause() : '';
                    var y = x.split(",");
                    if (x.indexOf("api:") == 0) {
                        var z = x.substr(4).split(";");
                        for (var i = 0; i < z.length; i++) {
                            y = z[i].split(",");
                            if (y.length > 1) {
                                if (y[0] == 'seek') {
                                    if (v.hotkey.icons == 1 && v.hotkey.seekiconbut == 1) {
                                        PluginHotIcon('seek', y[1] > 0 ? 1 : 0)
                                    }
                                }
                                api(y[0], y[1], but);
                                y[1] == '0/1' || y[1] == '1/0' ? reRightMenu() : ''
                            }
                            else {
                                if (y[0] == "screenshot") {
                                    var ss = api(y[0]);
                                    if (ss) {
                                        if (ss.indexOf("data") > -1) {
                                            if (v.ssfly == 1) {
                                                var img = document.createElement('img');
                                                img.setAttribute('src', ss);
                                                css(img,
                                                    {
                                                        position: "fixed",
                                                        right: (exist(v.ssflyp) ? v.ssflyp : 20),
                                                        bottom: (exist(v.ssflyp) ? v.ssflyp : 20),
                                                        width: 0,
                                                        transition: "width 0.5s cubic-bezier(.75,-0.5,0,1.75)"
                                                    });
                                                img.style.zIndex = 1001;
                                                document.body.appendChild(img);
                                                setTimeout(function () {
                                                    css(img,
                                                        {
                                                            width: (exist(v.ssflyw) ? v.ssflyw : 200)
                                                        })
                                                }, 1);
                                                img.onclick = function () {
                                                    this.parentNode.removeChild(this)
                                                }
                                            }
                                            if (v.ssdown == 1) {
                                                var a = createElement("a");
                                                a.href = ss;
                                                a.download = y[0] + ".jpg";
                                                a.click()
                                            }
                                        }
                                    }
                                    else {
                                        log(y[0] + " error")
                                    }
                                }
                                else {
                                    api(y[0])
                                }
                            }
                        }
                    }
                    else {
                        if (x.indexOf("js:") == 0) {
                            if (x.indexOf("(") > 0 && x.indexOf(")") > 0) {
                                eval(x.substr(3))
                            }
                            else {
                                eval(y[0].substr(3) + '(' + (exist(y[1]) ? '"' + y[1] + '"' : '') + (exist(y[2]) ? ',"' + y[2] + '"' : '') + ')')
                            }
                        }
                        if (x.indexOf("event:") == 0) {
                            JsEvent(x.substr(6), o.media.time())
                        }
                        if (x.indexOf("share:") == 0 && o.share) {
                            o.share.api(x.substr(6))
                        }
                        if (x.indexOf("effect:") == 0 && o.effects) {
                            api("effect", x.substr(7))
                        }
                        if (x.indexOf("http") == 0 || x.indexOf("/") == 0 || x.indexOf("?") == 0 || x.indexOf("url:") == 0) {
                            x.indexOf("url:") == 0 ? x = x.substr(4) : '';
                            window.open(x, but.s("linktarget"))
                        }
                        if (x.indexOf("download") == 0) {
                            o.actions.Download()
                        }
                        if (x == "api:pipwebkit") {
                            o.media.PipWebkit()
                        }
                    }
                    if (x.indexOf("settings#") > -1) {
                        if (settings) {
                            var si = x.substr(9).split(",");
                            if (settings.g("show") && settings.g("open") == si[0]) {
                                o.sttx = undefined;
                                settings.hide()
                            }
                            else {
                                o.sttx = but.g("x") - but.g("width") / 2;
                                for (var i = 0; i < si.length; i++) {
                                    i == 0 ? settings.show() : '';
                                    settings.open(si[i])
                                }
                            }
                        }
                    }
                    if (x.indexOf("settings:") > -1 && v.settings.combined == 1) {
                        if (!o.settings2) {
                            o.settings2 = new PluginSettings2()
                        }
                        if (v.settings.showovercontrol == 1) {
                            if (type == "over") {
                                o.settings2.show(x)
                            }
                            else {
                                o.settings2.toggle(x)
                            }
                        }
                        else {
                            if (!type) {
                                o.settings2.toggle(x)
                            }
                        }
                    }
                    if (x == "unblock") {
                        o.actions.RemoveCurtain();
                        o.stopkeys = 0;
                        but.set("hide2");
                        var bl = FindBut("linkurl", "block");
                        if (bl) {
                            bl.set("hide2")
                        }
                    }
                    if (x == "block") {
                        but.UpdateText("OK");
                        but.s("linkurl2") ? window.location.href = trim(but.s("linkurl2")) : ''
                    }
                }
            }
        };
        this.title = function (t) {
            var y = false;
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "title") {
                        if (b[x].s("var") == t || t == "title") {
                            if (b[x].s("hide") == 1 && b[x].s("hideonplay") == 1 && o.play) {
                                y = true
                            }
                            if (v[t] == '' || y) {
                                b[x].set("display", false)
                            }
                            else {
                                b[x].set("display", true)
                            }
                            b[x].UpdateText(v[t])
                        }
                    }
                }
            }
            TitlePl()
        };
        this.titlepl = function () {
            TitlePl()
        };
        this.resizetext = function () {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "custom") {
                        if (b[x].s("type") == "text") {
                            b[x].ResizeText()
                        }
                    }
                }
            }
        };

        function TitlePl() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "custom") {
                        if (b[x].s("type") == "text") {
                            b[x].RenewFromTitle(true)
                        }
                    }
                }
            }
        }

        function ShowShare() {
            if (exist(o.share)) {
                o.share.Show()
            }
        }
        this.showShare = function () {
            ShowShare()
        };
        this.updateTitle = function () {
            if (v.title != '') {
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") == "title") {
                            var y = false;
                            if (!b[x].g("show")) {
                                y = true;
                                b[x].set("display", true)
                            }
                            b[x].UpdateText(v.title);
                            if (y) {
                                b[x].set("display", false)
                            }
                        }
                    }
                }
            }
        };
        this.customTextPl = function () {
            CustomTextButs()
        };

        function CustomTextButs() {
            if (v.customtext) {
                if (typeof (v.customtext) == "object") {
                    for (var x in v.customtext) {
                        if (v.customtext.hasOwnProperty(x)) {
                            CustomText(x, v.customtext[x])
                        }
                    }
                }
            }
        };
        this.customText = function (y, z) {
            CustomText(y, z)
        };

        function CustomText(y, z) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "custom" && b[x].s("type") == "text") {
                        if (b[x].s("dom") == y) {
                            if (!b[x].g("show") || b[x].s("hidden") == 1) {
                                b[x].set("unhidden");
                                b[x].set("display", true)
                            }
                            b[x].CustomText(z)
                        }
                    }
                }
            }
        };
        this.resize = function () {
            Resize()
        };
        this.resize2 = function () {
            Resize(true)
        };
        this.resizeSettings = function () {
            ResizeSettings(settings)
        };
        this.resizePlaylist = function () {
            ResizeSettings(playlist)
        };
        this.Play = function () {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "play") {
                        b[x].On()
                    }
                }
            }
            if (this.PlaylistVisible() && v.playlist.autohide == 1) {
                this.Playlist()
            }
            o.play = true;
            ShowOrHide()
        };
        this.Pause = function () {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "pause" || b[x].g("action") == "stop") {
                        b[x].Off()
                    }
                }
            }
            if (playlist) {
                if (v.playlist.openplaylistpause == 1 && !playlist.empty()) {
                    playlist.show()
                }
            }
            o.play = false;
            this.StopWaiting();
            ShowOrHide();
            if (v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) {
                HideForce(true)
            }
        };
        this.Mute = function () {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "mute") {
                        b[x].On()
                    }
                    this.Volume(0)
                }
            }
            ShowOrHide()
        };
        this.Unmute = function () {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "unmute") {
                        b[x].Off()
                    }
                }
            }
            if (v.volume < 0.1) {
                v.volume = 0.5;
                o.actions.Volume(v.volume)
            }
            else {
                this.Volume(v.volume)
            }
            ShowOrHide()
        };
        this.Volume = function (volume, y) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "volume") {
                        if (b[x].s("customline") != "speed") {
                            b[x].UpdatePlay(volume, 1, (y == "no" ? y : true))
                        }
                    }
                    if (b[x].g("action") == "mute") {
                        b[x].UpdateVolume(volume)
                    }
                }
            }
            ShowOrHide()
        };
        this.Fullscreen = function () {
            var bl = FindBut("action", "fullscreen");
            if (bl) {
                bl.On();
                bl.set("scale", bl.s("scale"))
            }
            ShowOrHide();
            resizeonwidth ? setTimeout(ShowOrHide, 500) : '';
            HideInterval()
        };
        this.Normalscreen = function () {
            var bl = FindBut("action", "fullscreen");
            if (bl) {
                bl.Off()
            }
            Resize();
            clearInterval(o.toolbarInterval);
            ShowOrHide()
        };
        this.onEnded = function () {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "play") {
                        b[x].ReplayIcon()
                    }
                }
            }
        };
        this.Review = function () {
            ShowOrHide()
        };

        function ShowOrHide() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") != "buffer") {
                        ShowOrHideProcessor(b[x])
                    }
                }
            }
            ShowOrHideProcessor(bg);
            if (stretch_width_last != stretch_width) {
                stretch_width_last = stretch_width;
                Resize()
            }
            if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
                ToolbarDown(!o.starttimeout && !o.mouseHere && !o.fullscreen && o.play && v.toolbar.hidejustfull != 1 && !o.casting)
            }
        };

        function ShowForce() {
            var show = toolbarHidden && v.toolbar.hidewithoutmoving == 1;
            if (!o.play && v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) {
                show = false
            }
            if (show) {
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") != "buffer") {
                            ShowOrHideProcessor(b[x], false)
                        }
                    }
                }
                css(o.frame,
                    {
                        "cursor": "default"
                    });
                o.fcdef = true;
                ShowOrHideProcessor(bg, false);
                if (bg.g("show")) {
                    ToolbarShow()
                }
                ToolbarDown(false)
            }
        }

        function HideForce() {
            var hide = o.play && v.toolbar.hidewithoutmoving == 1 && !o.mouseDown && !o.controlover;
            if (!o.play && v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) {
                hide = true
            }
            if (settings) {
                if (settings.g("show") && o.setaction) {
                    hide = false
                }
            }
            if (o.casting) {
                hide = false
            }
            if (hide) {
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") != "buffer") {
                            ShowOrHideProcessor(b[x], true)
                        }
                    }
                }
                ShowOrHideProcessor(bg, true);
                if (!bg.g("show")) {
                    toolbarHidden = true;
                    o.media.ToolbarHide();
                    if (o.play) {
                        css(o.frame,
                            {
                                "cursor": "none"
                            });
                        o.fcdef = false
                    }
                }
                ToolbarDown(true)
            }
        }

        function HideInterval() {
            if (v.toolbar.hidewithoutmoving == 1) {
                if (v.toolbar.hidejustfull == 1 && !o.fullscreen && !o.fullscreen_process) { }
                else {
                    clearInterval(o.toolbarInterval);
                    o.toolbarInterval = setInterval(HideForce, ((v.toolbar.hideleavetimeout > 0 ? v.toolbar.hideleavetimeout : v.toolbar.hidetimeout) * 1000))
                }
            }
        }

        function ShowOrHideProcessor(but, forcehide) {
            var hide = false;
            var show = false;
            var toolbar_hide = false;
            if (v.toolbar.hide == 1) {
                if (!o.starttimeout && !o.mouseHere && !o.fullscreen && o.play && v.toolbar.hidejustfull != 1 && !o.casting) {
                    hide = true;
                    show = false;
                    toolbar_hide = true
                }
                else {
                    hide = false;
                    show = true
                }
                if (exist(forcehide) && !o.casting) {
                    hide = forcehide;
                    show = !hide
                }
                if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1 && (but.s("position").indexOf("controls") == 0 || but.s("action") == "line")) {
                    hide = false;
                    show = true
                }
                if (v.toolbar.hideonpause == 1 && !o.play) {
                    hide = true;
                    show = false;
                    toolbar_hide = false
                }
                if (v.toolbar.showuntilmeta == 1 && !o.metadata && o.play) {
                    hide = false;
                    show = true
                }
            }
            else {
                if (but.s("hide") != 1) {
                    show = true
                }
            }
            if (show && !o.fcdef) {
                css(o.frame,
                    {
                        "cursor": "default"
                    });
                o.fcdef = true
            }
            var a = but.g("action");
            if (a == "custom" && but.s("position").indexOf("controls") == -1) {
                hide = false;
                show = true
            }
            if (o.casting) {
                if (a == "line") {
                    if (o.media.duration() == -1) {
                        hide = true;
                        show = false
                    }
                }
            }
            var re_y = false;
            var hp = HideProof(but);
            if (but.s("hide") == 1) {
                if (but.s("hideonleaveandplay") == 1) {
                    if (toolbar_hide || forcehide || (o.play && !o.mouseHere)) {
                        !toolbar_hide && !forcehide ? '' : hp = true
                    }
                }
                if (but.s("hidelap") == 1) {
                    if (o.play && !o.mouseHere) {
                        hp = true
                    }
                }
                if (but.s("hideonwidth") == 1 || but.s("hideoverwidth") == 1 || but.s("hideonfullscreen") == 1) {
                    resizeonwidth = true
                }
            }
            if (hp) {
                hide = true;
                show = false
            }
            else {
                !hide ? show = true : ''
            }
            if (but.s("action") == "volume") {
                if (but.s("hide") == 1 && but.s("hideoutmute") == 1) {
                    hide = true;
                    show = false;
                    if (!toolbar_hide && (o.hidden_volume_over || o.hidden_volume_over_process) && !forcehide && but.s("hiddenwidth") != 1) {
                        hide = false;
                        show = true
                    }
                    else {
                        re_y = true
                    }
                }
            }
            if (o.nativecontrols || (!o.start && v.toolbar.hide == 1 && v.toolbar.hideuntilstarted == 1) || (!o.metadata && v.toolbar.hide == 1 && v.toolbar.hideuntilmeta == 1)) {
                if (but.s("position").indexOf("controls") > -1 || but.s("position").indexOf("bottom") > -1) {
                    hide = true;
                    show = false
                }
                if (v.toolbar.hidejustfull == 1 && !o.fullscreen) {
                    hide = false;
                    show = true
                }
            }
            if (settings) {
                if (settings.g("show") && v.settings.always != 1) {
                    toolbar_hide = false;
                    forcehide = false
                }
            }
            if (playlist && o.droplist) {
                if (v.playlist.dropopen == 1) {
                    if (o.droplist.Visible()) {
                        return
                    }
                }
            }
            if (a == "share") {
                if (exist(o.share)) {
                    if (o.share.empty()) {
                        hide = true;
                        show = false;
                        but.set("animation", "none")
                    }
                }
            }
            if (a == "playlist" || a == "next" || a == "prev" || but.s("hidewithoutplaylist") == 1) {
                if (playlist) {
                    if (playlist.empty() && but.s("hidewithoutplaylist") != 0) {
                        hide = true;
                        show = false;
                        but.set("animation", "none")
                    }
                }
                else {
                    hide = true;
                    show = false
                }
            }
            if (o.hideall == 1) {
                hide = true;
                show = false
            }
            if (re_y) {
                var cc = ControlCoordinate(but);
                if (cc) {
                    cc.y > 0 ? but.set("y0", cc.y) : '';
                    css(but.c(),
                        {
                            "position": "absolute",
                            "top": but.g("y0")
                        })
                }
            }
            if (hide) {
                HideControl(but, (firstly ? true : false))
            }
            if (show) {
                ShowControl(but)
            }
            if (but == bg) {
                if (!hide && show) {
                    ToolbarShow();
                    show2(bg2);
                    toolbarHidden = false;
                    uijs == 0 ? js("ui", 1) : '';
                    uijs = 1;
                    o.cut && o.cutted ? o.cut.show() : ''
                }
                if (hide && !show && !o.casting) {
                    o.media.ToolbarHide();
                    SettingsClose();
                    hide2(bg2);
                    toolbarHidden = true;
                    uijs == 1 ? js("ui", 0) : '';
                    uijs = 0;
                    o.cut && o.cutted ? o.cut.hide() : ''
                }
                if (playlist) {
                    if (v.playlist.always == 1 && !playlist.empty()) {
                        if (show || o.nativecontrols) {
                            if (v.playlist.alwaysnotfullscreen == 1 && o.fullscreen) { }
                            else {
                                if (!playlist.g("show")) {
                                    if (v.playlist.alwaysjustpause == 1) {
                                        !o.play ? playlist.show() : ''
                                    }
                                    else {
                                        playlist.show()
                                    }
                                }
                            }
                        }
                        else {
                            if (hide && playlist.g("show")) {
                                playlist.hide()
                            }
                        }
                    }
                }
            }
        };

        function HideProof(but) {
            var x = false;
            var a = but.g("action");
            if (but.s("hide") == 1) {
                if (but.s("hideonplay") == 1) {
                    o.play ? x = true : ''
                }
                if (but.s("hideonpause") == 1) {
                    !o.play ? x = true : ''
                }
                if (but.s("hideondesktop") == 1) {
                    o.system.desktop ? x = true : ''
                }
                if (but.s("hideonmobile") == 1) {
                    o.system.mobile ? x = true : ''
                }
                if (but.s("hideoverwidth") == 1) {
                    if (o.screen_w > but.s("hideoverwidthlimit")) {
                        but.set("hiddenwidth", 1);
                        x = true
                    }
                    else {
                        but.set("hiddenwidth", 0)
                    }
                }
                if (but.s("hideonwidth") == 1) {
                    if (o.screen_w <= but.s("hideonwidthlimit")) {
                        but.set("hiddenwidth", 1);
                        x = true
                    }
                    else {
                        but.set("hiddenwidth", 0)
                    }
                }
                if (but.s("hideafterstart") == 1) {
                    o.start ? x = true : ''
                }
                if (but.s("hideafter") == 1 && but.s("hideaftersec") > 0) {
                    if (o.media.time() >= but.s("hideaftersec")) {
                        x = true
                    }
                }
                if (but.s("hidebefore") == 1 && but.s("hidebeforesec") > 0) {
                    if (o.media.time() < but.s("hidebeforesec")) {
                        x = true
                    }
                }
                if (but.s("hide0timestore") == 1) {
                    if (o.start || !o.continue || o.media.isLive()) {
                        x = true
                    }
                    if (o.continue) {
                        if (o.continue.flag().t == 0) {
                            x = true
                        }
                    }
                }
                if (but.s("hideuntilstarted") == 1) {
                    !o.start ? x = true : ''
                }
                if (but.s("hideuntilto") > 0) {
                    x = true
                }
                if (but.s("hideonvar") == 1) {
                    if (exist(but.s("hidevar"))) {
                        options[but.s("hidevar")] ? x = true : ''
                    }
                }
                if (but.s("hideuntiltext") == 1) {
                    if (!exist(but.s("customtext"))) {
                        x = true
                    }
                }
                if (but.s("hidewovar") == 1) {
                    if (exist(but.s("hidevar2"))) {
                        !options[but.s("hidevar2")] ? x = true : ''
                    }
                }
                if (but.s("hideuntilstartedios") == 1 && o.system.ios) {
                    !o.start || o.newfile ? x = true : ''
                }
                if (but.s("hideuntilended") == 1) {
                    !o.media.ended() ? x = true : ''
                }
                if (but.s("hideonvod") == 1) {
                    !o.media.isLive() ? x = true : ''
                }
                if (but.s("hideonleave") == 1) {
                    !o.mouseHere ? x = true : ''
                }
                if (but.s("hidenormscreen") == 1) {
                    !o.fullscreen ? x = true : ''
                }
                if (but.s("hideonfullscreen") == 1) {
                    o.fullscreen ? x = true : ''
                }
                if (but.s("hideonunmute") == 1) {
                    !o.muted ? x = true : ''
                }
                if (but.s("hideonlive") == 1) {
                    o.media.isLive() && o.media.currentFile().indexOf("?DVR") == -1 ? x = true : ''
                }
                if (but.s("hidewithposter") == 1) {
                    isVisible(o.poster) ? x = true : ''
                }
                if (but.s("hideuntilmeta") == 1) {
                    !o.metadata ? x = true : ''
                }
                if (but.s("hideonmeta") == 1) {
                    o.metadata ? x = true : ''
                }
                if (but.s("hidemini") == 1) {
                    o.mini ? x = true : ''
                }
                if (but.s("hidenomini") == 1) {
                    !o.mini ? x = true : ''
                }
                if (but.s("hideafterclick") == 1) {
                    if (but.g("clicked")) {
                        x = true
                    }
                }
                if (but.s("hidenoab") == 1) {
                    !o.ab ? x = true : ''
                }
                if (but.s("hideab") == 1) {
                    o.ab ? x = true : ''
                }
                if (but.s("hideonyoutube") == 1) {
                    if (v.preload == 1 && v.screenclick == 1) {
                        if (o.file_type == "youtube" && !exist(v.poster) && v.youtubeposter == 0) {
                            if (!o.start || o.media.status() == "ended") {
                                if (v.poster == '') { }
                                else {
                                    x = true
                                }
                            }
                        }
                    }
                }
            }
            if (a == "custom") {
                var lu = but.s("linkurl");
                if (lu) {
                    if (lu == "api:airplay" || lu == "airplay") {
                        if (!o.airplay && !o.airplayed) {
                            x = true
                        }
                    }
                    if (lu == "api:pipwebkit") {
                        if (!o.pipwebkit || (!o.start && v.preload == 0)) {
                            x = true
                        }
                    }
                    if (lu == "api:unfixing") {
                        if (!o.mini) {
                            x = true
                        }
                    }
                    if (lu.indexOf("captions") > -1) {
                        if (!o.captions) {
                            x = true
                        }
                    }
                    if (lu == "skip") {
                        var sh = false;
                        if (exist(v.skip)) {
                            var k1 = v.skip.split(',');
                            for (var i = 0; i < k1.length; i++) {
                                var k2 = k1[i].split('-');
                                if (k2.length == 2) {
                                    if (o.media.time() > k2[0] && o.media.time() < k2[1]) {
                                        sh = true;
                                        but.set("skip", k2[1])
                                    }
                                }
                            }
                        } !sh ? x = true : ''
                    }
                }
            }
            if (a == "playlist" || a == "next" || a == "prev") {
                if (playlist) {
                    if (playlist.empty()) {
                        x = true
                    }
                }
                else {
                    x = true
                }
            }
            if (a == "settings") {
                if (settings) {
                    if (settings.empty()) {
                        x = true;
                        o.file_type != 'hls' ? but.set("animation", "none") : ''
                    }
                }
                else {
                    x = true
                }
            }
            if (but.g("type") == "text") {
                if (but.g("length") == 0) {
                    x = true
                }
            }
            if (but.g("settings#")) {
                if (!but.g("set#visible")) {
                    x = true
                }
            }
            if (but.s("chromecast") == 1) {
                var cb = document.getElementById("pjs_cast_button_" + v.id);
                if ((o.media.duration() == 0 && o.media.time() == 0) || !o.tagvideo || !isVisible(cb) || !o.cast_available) {
                    x = true
                }
            }
            if (but.s("hidetime") == 1) {
                !x ? but.set("hidetime", 1) : ''
            }
            if (a == "duration") {
                if (o.media.isLive()) {
                    x = true
                }
            }
            if (but.g("key") == "control_start" && o.system.mobile) {
                if (o.nativecontrols && o.system.android) {
                    x = true
                }
            }
            return x
        }

        function HideControl(but, quick) {
            if (but.g("show")) {
                if (o.fullscreen_process || but.s("animation") == "none" || quick) {
                    but.set("display", false)
                }
                else {
                    HideAnimate(but)
                }
                but.set("show", false)
            }
        };

        function ShowControl(but) {
            if (!but.g("show")) {
                if (but.s("animation") == "none" || o.fullscreen_process) {
                    but.set("display", true);
                    if (o.fullscreen_process && but.g("key") != 'bg') {
                        but.set("opacity", 1)
                    }
                    if (but.g("action") == "volume") {
                        if (o.hidden_volume) {
                            HidePositionControl(but)
                        }
                    }
                }
                else {
                    ShowAnimate(but)
                }
                if (but.s("action") == "volume") {
                    o.controls.Volume(o.muted ? 0 : v.volume)
                }
                if (but.s("action") == "line") {
                    o.actions.Loading()
                }
                but.set("show", true)
            }
        };

        function HideAnimate(but) {
            killMotion(but.g("key"));
            var m_type = "alpha|";
            var m_to = "0|";
            var hide = 1;
            var a = but.s("animation");
            var p = but.s("position");
            if (a == "scale") {
                m_type += "scale|";
                m_to += "0|"
            }
            if (a == "position") {
                if (p.indexOf("right") > -1 && p.indexOf("controls") == -1) {
                    m_type += "x|";
                    m_to += int(o.screen_w + but.g("width")) + "|"
                }
                if (p.indexOf("left") > -1) {
                    m_type += "x|";
                    m_to += int(-but.g("width")) + "|"
                }
                if (p.indexOf("top") > -1) {
                    m_type += "y|";
                    m_to += "0|" + (-but.g("height")) + "|"
                }
                if (p.indexOf("bottom") > -1 || p.indexOf("controls") > -1 || p == "timeline") {
                    m_type += "y|";
                    if (but.g("action") == "line" || but.g("action") == "volume") {
                        m_to += int(o.screen_h + but.s("h") + (but.s("h") < 20 ? 20 - but.s("h") : 0)) + "|"
                    }
                    else {
                        m_to += int(o.screen_h + but.g("height")) + "|"
                    }
                }
                if (p == "center") {
                    m_type += "scale|";
                    m_to += "0|"
                }
            }
            var m = new Motion(
                {
                    "mc": but,
                    "me": but.g("key"),
                    "type": m_type.substr(0, m_type.length - 1),
                    "to": m_to.substr(0, m_to.length - 1),
                    "hide": hide
                })
        };

        function ShowAnimate(but) {
            killMotion(but.g("key"));
            var m_type = "";
            var m_to = "";
            var a = but.s("animation");
            var p = but.s("position");
            if (but.g("opacity") != 1) {
                m_type = "alpha|";
                m_to = (but.g("key") == 'bg' ? v.toolbar.a : "1") + "|"
            }
            if (a == "scale") {
                if (but.g("scaleX") != but.s("scale")) {
                    m_type += "scale|";
                    m_to += but.s("scale") + "|"
                }
            }
            if (a == "position") {
                if (p == "center") {
                    if (but.g("scaleX") != but.s("scale")) {
                        m_type += "scale|";
                        m_to += but.s("scale") + "|"
                    }
                }
                else {
                    if (p.indexOf("controls") > -1) {
                        if (but.g("y") != but.g("y0")) {
                            m_type += "y|";
                            m_to += but.g("y0") + "|"
                        }
                    }
                    else {
                        m_type += "x|y|";
                        m_to += but.g("x0") + "|" + but.g("y0") + "|"
                    }
                }
            }
            if (m_type != "" && m_to != "") {
                var m = new Motion(
                    {
                        mc: but,
                        me: but.g("key"),
                        type: m_type.substr(0, m_type.length - 1),
                        to: m_to.substr(0, m_to.length - 1),
                        show: 1
                    })
            }
            else {
                but.set("display", true)
            }
        };
        this.Mouse = function (key, type, quick) {
            var resize = false;
            var stop = false;
            var but = b[key];
            var action = but.g("action");
            var linkurl = but.s("linkurl");
            if (type == "over") {
                if (o.hidden_volume) {
                    if (action == "volume" || action == "mute" || action == "unmute") {
                        o.hidden_volume_over = true;
                        o.hidden_volume_over_process = true;
                        resize = true;
                        ShowOrHide();
                        if (v.control_line.hideonvolume == 1) {
                            var bl = FindBut("action", "line");
                            if (bl) {
                                hide2(bl.c())
                            }
                        }
                    }
                }
                if (settings && v.settings.showovercontrol == 1 && ((action == "settings" || linkurl.indexOf("setting") == 0) || linkurl.indexOf("settings:") == 0)) {
                    clearTimeout(o.settingsovertimer);
                    if (!settings.g("show") || _lastactbut != but) {
                        Action(but, type);
                        o.overopentimeout = action + linkurl;
                        setTimeout(function () {
                            o.overopentimeout = null
                        }, 500)
                    }
                }
                if (playlist && v.playlist.showovercontrol == 1 && action == "playlist") {
                    clearTimeout(o.playlistovertimer);
                    if (!playlist.g("show") || _lastactbut != but) {
                        Action(but, type);
                        o.overopentimeout = action;
                        setTimeout(function () {
                            o.overopentimeout = null
                        }, 500)
                    }
                }
            }
            if (type == "out") {
                if (o.hidden_volume) {
                    if (action == "volume" || action == "mute" || action == "unmute") {
                        o.hidden_volume_over = false;
                        o.hidden_volume_over_process = true;
                        setTimeout(function () {
                            if (!o.hidden_volume_over) {
                                o.hidden_volume_over_process = false;
                                for (var x in b) {
                                    if (b.hasOwnProperty(x)) {
                                        if (b[x].g("action") == "volume") {
                                            HideControl(b[x]);
                                            Resize()
                                        }
                                        if (b[x].g("action") == "line") {
                                            if (v.control_line.hideonvolume == 1) {
                                                show2(b[x].c())
                                            }
                                        }
                                    }
                                }
                            }
                        }, 500)
                    }
                }
                if (v.settings.showovercontrol == 1 && ((action == "settings" || linkurl.indexOf("setting") == 0) || linkurl.indexOf("settings:") == 0)) {
                    clearTimeout(o.settingsovertimer);
                    o.settingsovertimer = setTimeout(function () {
                        if (!o.mouseDown) {
                            SettingsClose(1)
                        }
                    }, (v.settings.showoverto > 0 ? v.settings.showoverto * 1000 : 1000))
                }
                if (playlist && v.playlist.showovercontrol == 1 && action == "playlist") {
                    clearTimeout(o.playlistovertimer);
                    o.playlistovertimer = setTimeout(function () {
                        if (!o.mouseDown) {
                            playlist.g("show") ? playlist.hide(1) : ''
                        }
                    }, (v.playlist.showoverto > 0 ? v.playlist.showoverto * 1000 : 1000))
                }
            }
            if (resize) {
                setTimeout(Resize, 10)
            }
        };
        this.StageLeave = function () {
            if (o.volumewheel && !o.fullscreen && !o.fullscreen_process) {
                o.actions.volumewheel(false);
                o.volumewheel = false
            }
            if (o.poster) {
                if (v.poster_aover > -1 && isVisible(o.poster)) {
                    css(o.poster,
                        {
                            opacity: v.poster_a
                        })
                }
            }
            if (o.play && v.playonhover == 1 && v.pauseonhover != 0) {
                o.actions.Pause()
            }
            if (v.toolbar.hideleavetimeout > 0) {
                clearTimeout(o.leavetimeout);
                o.leavetimeout = setTimeout(ShowOrHide, v.toolbar.hideleavetimeout * 1000)
            }
            else {
                ShowOrHide()
            }
        };
        this.StageOver = function () {
            if (o.poster) {
                if (v.poster_aover > -1 && isVisible(o.poster)) {
                    css(o.poster,
                        {
                            opacity: v.poster_aover
                        })
                }
            }
            if (!o.play && v.playonhover == 1) {
                o.actions.Play()
            }
            ShowOrHide();
            ToolbarDown(false)
        };
        this.StageMove = function (stage_x, stage_y) {
            var y;
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    y = b[x].g("action");
                    if (y == "line" || y == "volume") {
                        b[x].StageMove(stage_x, stage_y)
                    }
                }
            }
        };
        this.StageMove2 = function () {
            if (v.toolbar.hide == 1) {
                if (v.toolbar.hidejustfull == 1 && !o.fullscreen) {
                    return
                }
                if ((!o.mouseHere || o.system.mobile) && o.media.status() == "playing") {
                    o.mouseHere = true;
                    ShowOrHide();
                    o.system.mobile ? setTimeout(function () {
                        o.mouseHere = false
                    }, 500) : ''
                }
                if (v.toolbar.hidewithoutmoving == 1) {
                    ShowForce();
                    HideInterval()
                }
                ToolbarDown(false)
            }
        };
        this.StageMouseUp = function (stage_x, stage_y) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "line" || b[x].g("action") == "volume") {
                        b[x].StageMouseUp(stage_x, stage_y)
                    }
                }
            }
        };
        this.Played = function (time, duration) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "line") {
                        b[x].UpdatePlay(time, duration)
                    }
                    if (b[x].g("action") == "time") {
                        UpdateTime(b[x], time, duration)
                    }
                    if (b[x].s("rotateplaying") == 1) {
                        b[x].Rotate()
                    }
                    if (b[x].s("often") == 1) {
                        if (!b[x].g("show") && toolbarHidden) { }
                        else if (b[x].g("show") == HideProof(b[x])) {
                            ShowOrHide()
                        }
                    }
                }
            }
        };

        function ToolbarDown(x) {
            if (v.toolbar.hide == 1) {
                x ? SettingsClose() : '';
                if (v.toolbar.hidedown == 1) {
                    if (!o.play && v.toolbar.hideonpause == 1) {
                        x = true
                    }
                    if (x && !o.toolbarisdown) {
                        css(o.toolbar,
                            {
                                "top": bg.h()
                            })
                    }
                    if (!x && o.toolbarisdown) {
                        css(o.toolbar,
                            {
                                "top": 0
                            })
                    }
                    o.toolbarisdown = x
                }
            }
        }

        function ToolbarShow() {
            toolbarHidden = false;
            o.media.ToolbarShow();
            if (o.resizeonmouse) {
                o.resizeonmouse = false;
                Resize();
                setTimeout(Resize, 300)
            }
        }

        function UpdateTime(x, time, duration) {
            if (v.delete > 0) {
                time -= v.delete;
                duration -= v.delete
            }
            var y = Time(time);
            if (x.s("inversetime") == "1") {
                y = Time(duration - time)
            }
            if (x.s("showduration") == "1") {
                if (x.s("showboth") == "1") {
                    y = y + (duration > 0 ? ' ' + Lang(x.s("separator")) + ' ' + Time(duration) : '')
                }
                else {
                    time == 0 ? y = Time(duration) : ''
                }
            }
            x.UpdateText(y)
        }
        this.Loaded = function (time, duration) {
            var x = FindBut("action", "line");
            if (x) {
                x.UpdateLoad(time, duration)
            }
        };
        this.Cut = function (y) {
            if (o.media.duration() > 0) {
                var x = FindBut("action", "line");
                if (x) {
                    x.Cut(y)
                }
            }
        };
        this.Waiting = function () {
            if (!waiting) {
                if (v.hidevideo == 1) {
                    clearTimeout(wait_to);
                    wait_to = setTimeout(Waiting, 500)
                }
                else {
                    Waiting()
                }
            }
        };

        function Waiting() {
            if (!waiting) {
                js("buffering");
                var x = FindBut("action", "buffer");
                if (x) {
                    x.Buffer();
                    waiting = true;
                    if (v.posteronwait == 1 && o.play) {
                        setTimeout(WaitPoster, 1000)
                    }
                }
            }
        }

        function WaitPoster() {
            if (o.play && waiting) {
                o.actions.ShowPoster()
            }
        }
        this.HideElement = function (y) {
            for (var x in b) {
                if (x == y) {
                    b[x].set("hide2")
                }
            }
        };
        this.StopWaiting = function (time, duration) {
            clearTimeout(wait_to);
            if (waiting) {
                js("buffered");
                var x = FindBut("action", "buffer");
                if (x) {
                    x.BufferStop();
                    waiting = false;
                    if (v.posteronwait == 1 && o.play) {
                        o.actions.HidePoster()
                    }
                }
            }
        };
        this.volumescroll = function () {
            var x = FindBut("linkurl", "volume scroll");
            if (x) {
                x.set("show2");
                x.UpdateText(Lang('volume') + ' ' + (o.muted ? 0 : Math.ceil(v.volume * 100)) + '%');
                clearTimeout(o.volumescroll);
                o.volumescroll = setTimeout(Volumescrolled, 1000)
            }
        };

        function Volumescrolled() {
            var x = FindBut("linkurl", "volume scroll");
            if (x) {
                x.UpdateText('');
                x.set("hide2");
                clearTimeout(o.volumescroll)
            }
        }
        this.Seek = function (time, duration) {
            if (v.delete > 0) {
                time -= v.delete;
                duration -= v.delete
            }
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "line") {
                        duration > 0 ? b[x].set("click", time / duration) : '';
                        b[x].UpdatePlaySeek()
                    }
                    if (b[x].g("action") == "time") {
                        UpdateTime(b[x], time, duration)
                    }
                    if (b[x].g("action") == "live") {
                        b[x].set("iconopacity", 0.5);
                        b[x].set("saturate", 0)
                    }
                }
            }
        };
        this.Duration = function (time, duration) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "duration") {
                        if (v.delete > 0) {
                            duration -= v.delete
                        }
                        b[x].UpdateText(Time(duration))
                    }
                    if (b[x].g("action") == "line") {
                        b[x].UpdatePlay(time, duration);
                        b[x].PlacePoints(duration)
                    }
                    if (b[x].g("action") == "time") {
                        UpdateTime(b[x], time, duration)
                    }
                }
            }
        };
        this.Settings = function () {
            settings.g("show") ? settings.hide() : settings.show()
        };
        this.SettingsVisible = function () {
            if (settings) {
                return settings.g("show") ? true : false
            }
            else {
                return false
            }
        };
        this.MenuProc = function (x) {
            if (settings) {
                settings.menuproc(x)
            }
        };
        this.SettingsClose = function () {
            SettingsClose()
        };
        this.SettingsTimer = function (x) {
            if (settings) {
                settings.UpdateTimer(x)
            }
        };
        this.SettingsSpeed = function () {
            if (settings) {
                settings.UpdateSpeed()
            }
        };
        this.SettingsExist = function (x) {
            if (settings) {
                return settings.Exist(x)
            }
        };

        function SettingsClose(x) {
            if (settings) {
                settings.g("show") ? settings.hide(x) : ''
            }
            o.settings2 ? o.settings2.hide() : ''
        };
        this.Playlist = function () {
            if (playlist) {
                if (playlist.g("show")) {
                    playlist.hide(1)
                }
                else {
                    playlist.show()
                }
            }
        };
        this.PlaylistShow = function () {
            if (playlist) {
                setTimeout(function () {
                    playlist.show()
                }, 100)
            }
        };
        this.PlaylistVisible = function () {
            if (playlist) {
                return playlist.g("show") ? true : false
            }
            else {
                return false
            }
        };
        this.PlaylistG = function (x) {
            return playlist ? playlist.g(x) : ''
        };
        this.UpdatePlaylist = function (x) {
            if (playlist) {
                playlist.updatePlaylist(x)
            }
        };
        this.PreNewPl = function (x) {
            if (playlist) {
                playlist.prenewpl(x)
            }
        };
        this.PlaylistNext = function () {
            if (playlist) {
                playlist.PlaylistNext()
            }
        };
        this.PlaylistHere = function () {
            if (playlist) {
                playlist.PlaylistHere()
            }
        };
        this.PlaylistControls = function () {
            PlaylistControls()
        };

        function PlaylistControls() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "next") {
                        css(b[x].c(),
                            {
                                "opacity": (!playlist.PlaylistNextExist() ? 0.5 : 1)
                            })
                    }
                    if (b[x].g("action") == "prev") {
                        css(b[x].c(),
                            {
                                "opacity": (!playlist.PlaylistPrevExist() ? 0.5 : 1)
                            })
                    }
                }
            }
        }
        this.PlaylistNextExist = function () {
            if (playlist) {
                return playlist.PlaylistNextExist()
            }
            else {
                return false
            }
        };
        this.PlaylistPrevExist = function () {
            if (playlist) {
                return playlist.PlaylistPrevExist()
            }
            else {
                return false
            }
        };
        this.PlaylistExist = function () {
            if (playlist) {
                return playlist.PlaylistExist()
            }
            else {
                return false
            }
        };
        this.PlaylistRewind = function () {
            if (playlist) {
                playlist.PlaylistRewind()
            }
        };
        this.PlaylistPrev = function () {
            if (playlist) {
                playlist.PlaylistPrev()
            }
        };
        this.PlaylistPlayId = function (x) {
            if (x && playlist) {
                playlist.playById(x)
            }
        };
        this.PlaylistOpenId = function (x) {
            if (x && playlist) {
                playlist.openById(x)
            }
        };
        this.PlaylistMove = function (x) {
            if (x && playlist) {
                css(playlist.co(),
                    {
                        "maxHeight": "none",
                        "padding-right": playlist.s("bgpaddingright")
                    });
                document.getElementById(x).appendChild(playlist.co());
                hide2(playlist.c())
            }
        };
        this.ShowSettingsBut = function () { };
        this.QualityChanged = function (x) {
            if (settings) {
                settings.SetQuality();
                settings.g("show") ? setTimeout(function () {
                    settings.hide()
                }, 200) : ''
            }
        };
        this.QualityChangedNoHand = function () {
            if (settings) {
                settings.SetQuality()
            }
            if (o.settings2) {
                o.settings2.update()
            }
        };
        this.AirplayChanged = function (x) {
            if (settings) {
                settings.Airplay()
            }
            Resize();
            ShowOrHide()
        };
        this.SettingChanged = function (x) {
            if (settings) {
                settings.SetSetting(x);
                settings.g("show") ? settings.hide() : ''
            }
            if (o.settings2) {
                o.settings2.update()
            }
            x == "speed" ? SpeedChanged() : ''
        };

        function SpeedChanged() {
            if (o.line_speed) {
                var x = parseFloat(o.custom_speed / o.files_speed.slice(-1)[0], 1).toFixed(1);
                for (var i in b) {
                    if (b.hasOwnProperty(i)) {
                        if (b[i].s("customline") == "speed" && o.custom_speed) {
                            b[i].UpdatePlay(x, 1)
                        }
                        if (b[i].s("linkurl") == "api:speed,1.0") {
                            b[i].UpdateVolume(x)
                        }
                    }
                }
            }
        }
        this.AudioTrackChangedNoHand = function (x) {
            if (settings) {
                settings.SetSetting("audiotrack")
            }
            if (o.settings2) {
                o.settings2.update()
            }
        };
        this.SubtitleChanged = function () {
            if (settings) {
                settings.SetSubtitle();
                settings.g("show") ? setTimeout(function () {
                    settings.hide()
                }, 200) : ''
            }
            if (o.settings2) {
                o.settings2.update()
            }
            if (o.casting && o.tagvideo) {
                o.chromecast.Sub()
            }
        };
        this.SubOpt = function () {
            o.settings2 ? o.settings2.hide() : '';
            if (settings) {
                settings.SubOpt()
            }
        };
        this.SettingsN = function (num, display, val) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "settings") {
                        if (b[x].s("hdicon") == 1) {
                            b[x].HdIcon()
                        }
                    }
                    if (b[x].g("action_settings") == "settings#" + num) {
                        b[x].set("set#visible", display);
                        if (b[x].g("type") == "text") {
                            if (val) {
                                b[x].UpdateText(NoSpan(val))
                            }
                        }
                        else {
                            if (v.settings['settings' + num + 'action'] == "subtitle") {
                                if (val == Lang("off")) {
                                    b[x].CustomSwitch(0)
                                }
                                else {
                                    b[x].CustomSwitch(1)
                                }
                            }
                            Resize()
                        }
                        ShowOrHideProcessor(b[x])
                    }
                }
            }
        };
        this.UpdateSettings = function () {
            if (settings) {
                settings.SetQuality();
                settings.SetSetting("audiotrack");
                settings.SetSetting("download")
            }
        };
        this.RenewPoints = function () {
            var x = FindBut("action", "line");
            if (x) {
                x.RenewPoints()
            }
        };
        this.resize = function () {
            Resize();
            if (toolbarHidden) {
                o.resizeonmouse = true
            }
        };
        this.resizeFromText = function (x) {
            if (!toolbarHidden || x == 1) {
                Resize();
                ShowOrHide()
            }
            else {
                v.toolbar.resizeme = true
            }
        };
        this.startcss = function () {
            var b = FindBut("type", "css");
            if (b) {
                b.setcss()
            }
        };
        this.refresh = function () {
            ShowOrHide();
            Resize();
            ShowOrHide();
            if (o.nativecontrols) {
                hide2(bg2)
            }
            else {
                !toolbarHidden ? show2(bg2) : ''
            }
        };
        this.KeyDown = function (event) {
            if (pljssglobalid == v.id && v.hotkey.on == 1) {
                var x = event.which;
                var y = false;
                if (x == undefined) {
                    x = event.keyCode
                }
                if (exist(o.vast) || exist(o.pass) || o.stopkeys == 1) {
                    return false
                }
                if (o.play && v.hotkey.onplay == 1) {
                    y = true
                }
                if (((v.hotkey.space == 1 && x == 32) || (v.hotkey.enter == 1 && x == 13)) && (o.focus || o.mouseHere || y)) {
                    if (v.hotkey.icons == 1) {
                        PluginHotIcon('play', o.play ? 0 : 1)
                    }
                    o.actions.Toggle();
                    event.preventDefault();
                    return false
                } !v.hotkey.vol ? v.hotkey.vol = 0.2 : '';
                !v.hotkey.scale ? v.hotkey.scale = 5 : '';
                if (v.hotkey.nums == 1 && (o.focus || y)) {
                    if (o.media.duration() > 0) {
                        for (var i = 48; i < 58; i++) {
                            if (x == i) {
                                o.actions.Seek((o.media.duration() * (x - 48) * 10) / 100, true)
                            }
                        }
                    }
                }
                if (x == 39 && (o.focus || y)) {
                    KeyPlusUp(v.hotkey.leftright)
                }
                if (x == 37 && (o.focus || y)) {
                    KeyPlusDown(v.hotkey.leftright)
                }
                if (x == 38 && (o.focus || y)) {
                    KeyPlusUp(v.hotkey.updown)
                }
                if (x == 40 && (o.focus || y)) {
                    KeyPlusDown(v.hotkey.updown)
                }
                if (x == 187 && (o.focus || y)) {
                    KeyPlusUp(v.hotkey.plusminus)
                }
                if (x == 189 && (o.focus || y)) {
                    KeyPlusDown(v.hotkey.plusminus)
                }
            }
        };

        function FindBut(y, z) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].s(y) == z) {
                        return b[x]
                    }
                }
            }
        }

        function KeyPlusUp(x) {
            if (x == "next") {
                if (o.playlist) {
                    o.controls.PlaylistNext()
                }
                else {
                    x = "seek"
                }
            }
            if (x == "seek") {
                if (o.media.duration() > 0) {
                    if (o.media.time() + parseFloat(v.hotkey.seek) < o.media.duration()) {
                        o.actions.Seek(o.media.time() + parseFloat(v.hotkey.seek), true)
                    }
                }
            }
            if (x == "volume") {
                o.actions.Volume(parseFloat(v.volume) + parseFloat(v.hotkey.vol));
                event.preventDefault()
            }
            if (x == "scale") {
                o.media.scale(v.hotkey.scale / 100);
                event.preventDefault()
            }
            if (v.hotkey.icons == 1) {
                PluginHotIcon(x, 1)
            }
        }

        function KeyPlusDown(x) {
            if (x == "next") {
                if (o.playlist) {
                    o.controls.PlaylistPrev()
                }
                else {
                    x = "seek"
                }
            }
            if (x == "seek") {
                if (o.media.duration() > 0 && o.start) {
                    o.actions.Seek((o.media.time() - v.hotkey.seek >= 0 ? o.media.time() - v.hotkey.seek : 0), true)
                }
            }
            if (x == "volume") {
                o.actions.Volume(parseFloat(v.volume) - parseFloat(v.hotkey.vol));
                event.preventDefault()
            }
            if (x == "scale") {
                o.media.scale(-v.hotkey.scale / 100);
                event.preventDefault()
            }
            if (v.hotkey.icons == 1) {
                PluginHotIcon(x, 0)
            }
        };
        this.KeyUp = function (event) {
            if (pljssglobalid == v.id) {
                var x = event.which;
                if (x == undefined) {
                    x = event.keyCode
                }
                if (x == 57) {
                    if (v.log == 1) { }
                }
                if (o.fullscreen && x == 27) {
                    o.actions.Normalscreen()
                }
                if (exist(o.vast) || exist(o.pass)) {
                    return false
                }
                if (v.hotkey.f == 1 && x == 70 && v.hidevideo != 1 && (o.focus || o.mouseHere)) {
                    if (v.hotkey.icons == 1) {
                        PluginHotIcon('fullscreen', o.fullscreen ? 0 : 1)
                    }
                    o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen()
                }
                if (v.hotkey.m == 1 && x == 77 && (o.focus || o.mouseHere)) {
                    if (v.hotkey.icons == 1) {
                        PluginHotIcon('mute', o.muted ? 1 : 0)
                    }
                    o.muted ? o.actions.Unmute() : o.actions.Mute()
                }
            }
        };
        this.Remove = function () {
            clearInterval(o.toolbarInterval);
            for (var x in o) {
                if (x.indexOf("control") == 0 && x.indexOf("Interval") > -1) {
                    clearInterval(o[x])
                }
            }
            for (var i = 0; i < butNames.length; i++) {
                key = butNames[i];
                if (b[key]) {
                    b[key].Remove()
                }
            }
            if (settings) {
                settings.Remove()
            }
            if (playlist) {
                playlist.Remove()
            }
            bg.Remove();
            if (bg2.parentNode == o.frame) {
                o.frame.removeChild(bg2)
            }
            else {
                o.toolbar ? o.toolbar.removeChild(bg2) : ''
            }
        };
        this.ShowForce = function () {
            ShowForce()
        };
        this.HideForce = function () {
            HideForce();
            ShowOrHide()
        };
        this.HideInterval = function () {
            HideInterval()
        };
        this.ToolbarHidden = function () {
            return toolbarHidden
        }
    };
    var Control = function (key) {
        var i;
        var style = [];
        var w;
        var h;
        var last_text_w = 0;
        var bg;
        var bgcontainer;
        var area;
        var angle = 0;
        var visible = true;
        var selectOpen = false;
        var scaleX = 1;
        var scaleY = 1;
        var tip;
        var tipbg;
        var tiptext;
        var tipcrn;
        var action;
        var actionstt = '';
        var x0;
        var y0;
        var on;
        var over = false;
        var touchmove = false;
        var iconangle = 0;
        var bufferInterval;
        var bufferDeg = 0;
        var rightside = 0;
        var topside = 0;
        var bottomside = 0;
        var noclick = false;
        var zoomed = false;
        var clicked = false;
        var hidden = false;
        var htto;
        var hdicon;
        var imgldd;
        var settingsNumberVisible = false;
        style = UpdateObject(style, default_style.but);
        style = UpdateObject(style, v[key]);
        var actions = [style.action];
        action = actions[0];
        exist(style.action2) ? actions[1] = style.action2 : '';
        exist(style.opposite) ? actions[1] = style.opposite : '';
        exist(style.title) ? style.text = style.title : '';
        if (exist2(style.scalesmall)) {
            o.small ? style.scale = style.scalesmall : ''
        }
        if (action == "share") {
            o.shareme = true
        }
        if (exist(style.linkurl)) {
            if (style.type == "text" && style.linkurl != '') {
                if (exist(v[style.linkurl + 'text'])) {
                    style.text = v[style.linkurl + 'text']
                }
            }
            if (style.linkurl.indexOf("settings#") == 0) {
                actionstt = style.linkurl;
                if (style.tiptext == '' && actionstt.indexOf(",") == -1) {
                    style.tiptext = Lang(v.settings['settings' + actionstt.substr(9) + 'action'])
                }
            }
            if (style.linkurl.indexOf("captions") > -1) {
                v.hlscaptions = true
            }
            if (style.linkurl.indexOf("share:") > -1) {
                o.shareme = true
            }
            if (style.linkurl == "countdown") {
                style.counter = new PluginCountdown(style)
            }
        }
        var tips = style.tiptext ? style.tiptext.split("///") : [];
        if (style.liketext == 1) {
            style.type = "text";
            style.text = TipText(0) + (actions.length > 1 ? '///' + TipText(1) : '');
            if (exist2(style.iconscolor)) {
                style.color = style.iconscolor
            }
        }
        var _currentIcon = 0;
        var icons = new Array();
        var icon = new Array();
        var iconsover = new Array();
        var iconspress = new Array();
        var iconreplay = 0;
        var replay;
        if (style.type == "text") {
            if (style.dom) {
                if (exist(v[style.dom + 'text'])) {
                    style.text = v[style.dom + 'text']
                }
            }
            if (exist(style.text)) {
                icons[0] = trim(style.text);
                style.lngth = style.text.length;
                var smbls = ['/', '|', '-'];
                smbls.indexOf(style.text.substr(-1)) > -1 ? style.postsmbl = style.text.substr(-1) : '';
                smbls.indexOf(style.text.substr(0, 1)) > -1 ? style.presmbl = style.text.substr(0, 1) : '';
                if (action == "time" || action == "duration") {
                    if (style.text.indexOf('0:') == 0) {
                        style.timeshort = true
                    }
                    if (style.text.split(":").length == 3) {
                        style.with_hours = true
                    }
                    else {
                        if (style.text.indexOf('00:00') > -1) {
                            style.with_min = true
                        }
                    }
                    if (style.dvrtime == 1) {
                        v.dvrtime = 1
                    }
                }
                if (style.inversetime == 1 && style.text.indexOf("-") == 0) {
                    style.minus4back = true
                }
                if (style.text.indexOf("///") > 0 && (action == "custom" || style.liketext == 1)) {
                    style.texts = style.text.split("///");
                    style.text = icons[0] = style.texts[0]
                }
            }
            if (v.fonts == 1) {
                setTimeout(ResizeText, 100);
                setTimeout(ResizeText, 500);
                setTimeout(ResizeText, 1000)
            }
        }
        else {
            if (exist(style.icon)) {
                icons[0] = style.icon;
                if (icons[0].indexOf("///") > 0 && icons[0].indexOf("base64") == -1) {
                    icons = style.icon.split("///")
                }
                if (exist(style.icon2)) {
                    icons[1] = style.icon2
                }
                if (style.iconsreplay == 1) {
                    if (exist2(style.icon3)) {
                        icons.push(style.icon3);
                        iconreplay = icons.length - 1
                    }
                }
            }
        }
        if (action == "custom") {
            if (style.link2 == 1 && exist(style.linkurl2)) {
                style.linkurl0 = style.linkurl
            }
        }
        var control = createElement("div");
        if (style.position == 'timeline') {
            o.timeline.appendChild(control)
        }
        else {
            if (style.position.indexOf('controls') > -1 && v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
                o.toolbar.appendChild(control)
            }
            else {
                o.frame.appendChild(control)
            }
            if (action == "buffer" && style.ontop2 == 1) {
                control.style.zIndex = 2001
            }
        }
        var bgcontainer = createElement("div");
        control.appendChild(bgcontainer);
        var icns = createElement("div");
        css(icns,
            {
                "position": "absolute",
                "left": 0,
                "top": 0
            });
        control.appendChild(icns);
        css(control,
            {
                "position": "absolute",
                "left": 0,
                "top": 0,
                "opacity": 1,
                "fontSize": "14px",
                "lineHeight": "1em"
            });
        if (exist2(style.dom)) {
            attr(control,
                {
                    "id": (v.id + "_" + "control_" + style.dom)
                })
        }
        if (style.rotateplaying == 1) {
            css(icns,
                {
                    "transition": "transform 0.2s linear"
                })
        }
        if (icons.length > 0) {
            for (i = 0; i < icons.length; i++) {
                icon[i] = createElement("div");
                css(icon[i],
                    {
                        "position": "absolute",
                        "top": 0,
                        "left": 0,
                        "pointerEvents": "none",
                        "opacity": style.a,
                        "transition": "opacity 0.1s linear,transform 0.1s linear"
                    });
                if (style.type == "pic" && style.src != '') {
                    if (exist2(style.dom)) {
                        attr(icon[i],
                            {
                                "id": (v.id + "_control_" + style.dom + "_icon")
                            });
                        if (v[style.dom + 'src']) {
                            style.src = v[style.dom + 'src']
                        }
                    }
                    if (style.src.indexOf(".png") > -1 || style.src.indexOf(".jpg") > -1 || style.src.indexOf(".gif") > -1 || style.src.indexOf("base64") > -1) {
                        style.src.indexOf("//") == -1 && style.src.indexOf("base64") == -1 ? style.src = '//' + style.src : '';
                        var z = createElement("img");
                        style.loading = 1;
                        z.addEventListener("load", imageLoaded);
                        z.src = style.src;
                        icon[i].appendChild(z);
                        style.w = icon[i].offsetWidth;
                        style.h = icon[i].offsetHeight;
                        if (style.picheight > 0) {
                            css(z,
                                {
                                    height: style.picheight
                                })
                        }
                    }
                }
                if (style.type == "text") {
                    css(icon[i],
                        {
                            "color": (style.color),
                            "fontSize": style.fontsize * existv(v.globalfs, 1),
                            "fontFamily": checkFont(style.font),
                            "letter-spacing": style.letterspacing + 'px',
                            "padding": "0 3px 0 3px",
                            "white-space": "nowrap"
                        });
                    if (o.small) {
                        if (exist2(style.fontsizesmall)) {
                            css(icon[i],
                                {
                                    "fontSize": style.fontsizesmall * existv(v.globalfs, 1),
                                })
                        }
                    }
                    if (style.click == 1) {
                        if (style.text.indexOf("<a ") > -1 || key == "control_title") {
                            css(icon[i],
                                {
                                    "pointerEvents": "auto"
                                })
                        }
                    }
                    if (style.bold == 1) {
                        css(icon[i],
                            {
                                "font-weight": "bold"
                            })
                    }
                    icons[i] == 'live' ? icons[i] = Lang("live") : '';
                    icon[i].innerHTML = Places(icons[i]);
                    setTimeout(Marquee, 100);
                    style.w = icon[i].offsetWidth;
                    style.h = icon[i].offsetHeight;
                    if (exist2(style.dom)) {
                        attr(icon[i],
                            {
                                "id": (v.id + "_control_" + style.dom + "_text")
                            })
                    }
                }
                if (style.type == "css") {
                    o.start ? setTimeout(SetCSS, 200) : ''
                }
                var icn = icons[i].toString();
                if (icn.indexOf('var:') == 0) {
                    icn = existv(window[icn.substr(4)], '')
                }
                var isvg = icn.indexOf('<svg') > -1 || icn.indexOf('<SVG') > -1;
                if (style.type == "svg" && (icn.indexOf('<g>') > -1 || isvg)) {
                    if (action == "mute" || action == "custom") {
                        icn = icn.replace(/pjs_/g, 'pjs_' + v.id + key)
                    }
                    if (icn.indexOf('pointer') > -1) {
                        Clickable(icon[i])
                    }
                    icon[i].innerHTML = (!isvg ? "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" : '') + icn + (!isvg ? "</svg>" : '');
                    icon[i].offsetWidth > 20 ? style.w = icon[i].offsetWidth : '';
                    icon[i].offsetHeight > 20 ? style.h = icon[i].offsetHeight : '';
                    css(icon[i],
                        {
                            "width": style.w,
                            "height": style.h
                        });
                    if (style.iconscolor != -1) {
                        IconsColor(icon, style.iconscolor)
                    }
                    if (exist2(style.dom)) {
                        attr(icon[i],
                            {
                                "id": (v.id + "_control_" + style.dom + "_icon" + i)
                            })
                    }
                }
                icns.appendChild(icon[i]);
                i > 0 ? hide(icon[i]) : ''
            }
            Background();
            imgldd ? imageLoaded() : '';
            if (style.linkurl == "chromecast") {
                style.chromecast = 1;
                style.hide = 1;
                o.chromecast ? icon[0].innerHTML = o.chromecast.button(style.iconscolor != -1 ? style.iconscolor : '#ffffff') : '';
                if (o.system.mobile) {
                    icon[0].ontouchstart = onMobOver;
                    icon[0].ontouchend = onOut;
                    icon[0].ontouchmove = onMobMove
                }
                else {
                    icon[0].onmouseover = onOver;
                    icon[0].onmouseout = onOut;
                    icon[0].onmousemove = onMove
                }
            }
            else {
                if ((bg.offsetWidth * style.scale < 35 || bg.offsetHeight * style.scale < 35) && style.type != 'text') {
                    ClickArea();
                    Clickable(area)
                }
                else {
                    Clickable(bg)
                }
            }
            if (action == "custom") {
                if (style.link == 1 && exist(style.linkurl)) {
                    var lu = style.linkurl;
                    if (lu.indexOf("api:") == 0) {
                        var tmp = lu.substr(4).split(",");
                        if (tmp.length == 2) {
                            var tmp2 = tmp[1].split("/");
                            if (tmp2.length == 2) {
                                tmp[0] == 'hd' ? tmp[0] = "default_quality" : '';
                                if (v[tmp[0]] == tmp2[1]) {
                                    style.a = 1;
                                    css(icon[0],
                                        {
                                            "opacity": style.a
                                        })
                                }
                            }
                        }
                    }
                    if (lu == "unblock" || lu == "block") {
                        o.actions.Curtain();
                        control.style.zIndex = 2001;
                        o.stopkeys = 1
                    }
                }
                if ((style.hide == 1 && (style.hideafter == 1 || style.hidebefore == 1)) || lu == "skip") {
                    style.often = 1
                }
            }
            if (action == "settings" && style.hdicon == 1) {
                hdicon = new PluginHdIcon(control, bg, style)
            }
            if (style.click == 0) {
                Pnt0(control)
            }
            if (style.loading == 1) {
                hide(bg)
            }
            if (style.tip == 1) {
                CreateTip()
            }
            if (style.position.indexOf("right") > -1) {
                rightside = 1
            }
            if (style.position.indexOf("top") > -1) {
                topside = 1
            }
            if (style.position.indexOf("bottom") > -1 || style.position.indexOf("control") > -1) {
                bottomside = 1
            }
            Resize();
            var t = '';
            if (style.rotation != 0) {
                t += "rotate(" + style.rotation + "deg)"
            }
            if (style.flipx == 1) {
                t += " scaleX(-1)"
            }
            if (style.flipy == 1) {
                t += " scaleY(-1)"
            }
            if (t != '') {
                css(icns,
                    {
                        "transform": t
                    })
            }
            if (action == "buffer") {
                BufferStop()
            }
            var tmp = [];
            var i;
            if (action == "playlist") {
                tmp = ['autoplaylist', 'openplaylistafter', 'openplaylistbefore', 'openplaylistpause', 'openplaylistroot', 'playlistrewind'];
                for (i = 0; i < tmp.length; i++) {
                    if (exist(style[tmp[i]]) && !exist(v.playlist[tmp[i]])) {
                        v.playlist[tmp[i]] = style[tmp[i]]
                    }
                }
            }
            if (action == "title") {
                tmp = ['showtitleplaylist', 'addtitleplaylist', 'addtitleplaylistbr'];
                for (i = 0; i < tmp.length; i++) {
                    if (exist(style[tmp[i]]) && !exist(options[tmp[i]])) {
                        v[tmp[i]] = style[tmp[i]]
                    }
                }
            }
            style.tipalways == 1 ? Tip() : '';
            if (action == "custom" && style.on == 0) {
                hide2(control)
            }
            if (style.hide == 1 && style.hideuntilto > 0) {
                setTimeout(Hideuntilto, style.hideuntilto * 1000)
            }
        }

        function Hideuntilto() {
            style.hideuntilto = -1;
            o.controls.refresh()
        }

        function ClickArea() {
            if (area) {
                area.parentNode.removeChild(area)
            }
            area = createElement("div");
            css(area,
                {
                    "position": "absolute",
                    "top": 0,
                    "left": 0,
                    "width": style.type == "pic" ? bg.offsetWidth : (bg.offsetWidth > 35 ? bg.offsetWidth : 35) * style.clickscalex,
                    "height": style.type == "pic" ? bg.offsetHeight : (bg.offsetHeight > 35 ? bg.offsetHeight : 35) * style.clickscaley
                });
            style = MarginPadding(style, 'clickmargin', 'clickmargin');
            control.appendChild(area)
        }

        function Clickable(x) {
            if (action.indexOf("time") == 0 && actions.length == 1) {
                style.click = 0
            }
            if (action == "custom" && style.link == 0) {
                style.click = 0
            }
            if (style.click == 1) {
                if (style.hand == 1) {
                    css(x,
                        {
                            "cursor": "pointer"
                        })
                }
                css(x,
                    {
                        "pointerEvents": "auto"
                    });
                if (o.system.mobile) {
                    x.addEventListener("touchmove", function (e) {
                        onMobMove(e)
                    });
                    x.addEventListener("touchstart", function (e) {
                        onMobOver(e)
                    });
                    x.addEventListener("touchend", function (e) {
                        onMobOut(e)
                    })
                }
                else {
                    x.onclick = onClick
                }
                if (v.toolbar.clickarea == 1 || style.clickarea == 1) {
                    css(x,
                        {
                            "background-color": "#ff0000",
                            "opacity": 0.5
                        })
                }
            }
            else {
                css(x,
                    {
                        "cursor": "default"
                    })
            }
            if (!o.system.mobile) {
                x.onmouseover = onOver;
                x.onmouseout = onOut
            }
            if (style.hidden == 1 || style.tip == 1) {
                x.onmousemove = onMove
            }
        }

        function onMobMove(e) {
            js("touch_" + key);
            e.stopPropagation();
            touchmove = true
        }

        function onMobOver(e) {
            style.mobileover == 1 ? onOver() : '';
            e.stopPropagation()
        }

        function onMobOut(e) {
            e.stopPropagation();
            e.preventDefault();
            style.mobileover == 1 ? onOut() : '';
            if (!touchmove) {
                onClick(e)
            }
            touchmove = false
        }

        function Background() {
            if (bg) {
                bg.parentNode.removeChild(bg)
            }
            bg = createElement("div");
            css(bg,
                {
                    "position": "absolute",
                    "top": 0,
                    "left": 0
                });
            if (exist2(style.dom)) {
                attr(bg,
                    {
                        "id": (v.id + "_control_" + style.dom + "_bg")
                    })
            }
            w = style.w;
            h = style.h;
            style = MarginPadding(style, 'margin', 'margin');
            style = MarginPadding(style, 'marginproc', 'marginproc');
            if (style.type == "text") {
                w = icon[_currentIcon].offsetWidth;
                h = icon[_currentIcon].offsetHeight;
                if (style.minw > 0) {
                    w < style.minw ? w = style.minw : ''
                }
            }
            style = MarginPadding(style, 'bgpadding', 'bgpadding');
            style = MarginPadding(style, 'iconmargin', 'iconmargin');
            if (o.system.safari) {
                style.iconmarginleft /= style.scale;
                style.iconmarginright /= style.scale;
                style.iconmargintop /= style.scale;
                style.iconmarginbottom /= style.scale
            }
            if (exist2(style.dom) && exist(v.custom) && style.action == "custom") {
                if (typeof (v.custom) == 'object') {
                    for (var i = 0; i < Object.keys(v.custom).length; i++) {
                        if (v.custom[i][style.dom]) {
                            if (v.custom[i][style.dom] == "off") {
                                style.on = 0
                            }
                            else {
                                var tmp = v.custom[i][style.dom].split(":");
                                if (tmp[0] == "margin-left") {
                                    if (tmp[1].indexOf("%") > 0) {
                                        style.marginprocleft = parseInt(tmp[1])
                                    }
                                    else {
                                        style.marginleft = parseInt(tmp[1])
                                    }
                                }
                            }
                        }
                    }
                }
            }
            style.h = h;
            style.w = w;
            if (style.bg == 1) {
                h = h + style.bgpaddingtop + style.bgpaddingbottom;
                w = w + style.bgpaddingleft + style.bgpaddingright;
                style.h = h;
                style.w = w;
                if (style.type == "text") {
                    style.bgh = icon[0].offsetHeight
                }
            }
            else {
                style.bga = 0
            }
            css(bg,
                {
                    "width": (style.bgstretch == 1 ? 5000 : w),
                    "height": h,
                    "borderRadius": (style.bgo * h) / 2,
                    "background": style.bgcolor,
                    "opacity": style.bga,
                    "transition": "opacity .1s linear, background .1s linear, transform .1s linear"
                });
            if (style.type == "pic") {
                css(bg,
                    {
                        "width": w,
                        "height": h,
                        "borderRadius": (style.bgo * h / style.scale) / 2,
                    })
            }
            if (style.bglines == 1) {
                Bglines(bg, style.bgcolor, style.bgline1, style.bgline2)
            }
            if (style.bgborder == 1) {
                css(bg,
                    {
                        "border": "1px solid " + style.bgbordercolor
                    })
            }
            bgcontainer.appendChild(bg)
        }

        function Resize() {
            css(bg,
                {
                    "top": (-bg.offsetHeight / 2),
                    "left": (-bg.offsetWidth / 2)
                });
            if (area) {
                var x = style.type == "pic" ? bg.offsetWidth : (bg.offsetWidth > 35 ? bg.offsetWidth : 35);
                var y = style.type == "pic" ? bg.offsetHeight : (bg.offsetHeight > 35 ? bg.offsetHeight : 35);
                css(area,
                    {
                        "top": (-y / 2) + style.clickmargintop - style.clickmarginbottom,
                        "left": (-x / 2) + style.clickmarginleft - style.clickmarginright
                    })
            }
            for (i = 0; i < icons.length; i++) {
                if (style.type == "svg") {
                    css(icon[i],
                        {
                            "top": -Math.round(parseInt(icon[i].style.height)) / 2,
                            "left": -parseInt(icon[i].style.width) / 2
                        })
                }
                else {
                    css(icon[i],
                        {
                            "top": -Math.round(icon[i].offsetHeight) / 2,
                            "left": -icon[i].offsetWidth / 2
                        })
                }
                if (bg) {
                    css(icon[i],
                        {
                            "top": (int(icon[i].style.top) + style.bgpaddingtop / 2 - style.bgpaddingbottom / 2 + style.iconmargintop / 2 + style.iconmarginbottom / 2),
                            "left": (int(icon[i].style.left) + style.bgpaddingleft / 2 - style.bgpaddingright / 2 + style.iconmarginleft / 2 + style.iconmarginright / 2)
                        })
                }
            }
        }

        function onOver() {
            var i;
            over = true;
            if (style.iconsover == 1) {
                if (on && exist(style.icon2)) {
                    i = 1
                }
                else {
                    i = 0
                }
                if (replay && iconsover.length > 2) {
                    i = 2
                }
                if (iconsover[i]) {
                    hideAllIcons();
                    show(icon[iconsover[i]])
                }
            }
            if (style.bg == 1) {
                if (style.bgaover != -1) {
                    css(bg,
                        {
                            "opacity": style.bgaover
                        })
                }
                if (style.bgcolorover != -1) {
                    css(bg,
                        {
                            "background": style.bgcolorover
                        })
                }
            }
            if (style.aover > -1 && !selectOpen) {
                for (i = 0; i < icons.length; i++) {
                    if (icon[i].style.visibility != "hidden") {
                        css(icon[i],
                            {
                                "opacity": style.aover
                            })
                    }
                }
            }
            if (style.iconscolorover != -1) {
                IconsColor(icon, style.iconscolorover)
            }
            if (style.rotateonhover == 1) {
                iconangle = iconangle + 45;
                Rot(icon[0], iconangle)
            }
            if (style.scaleover > style.scale && style.scaleover > -1) {
                scale(style.scaleover)
            }
            if (action == "settings" && o.controls.SettingsVisible()) { }
            else {
                if (style.tip == 1 && style.tipalways != 1) {
                    var x = tips.length > 1 && !on ? tips[1] : tips[0];
                    if (x) {
                        if (x.indexOf('var:') == 0) {
                            tiptext.innerHTML = window[x.substr(4)];
                            Tip()
                        }
                    }
                    show(tip);
                    css(tip,
                        {
                            "opacity": 1
                        })
                }
            }
            if (action == "mute") {
                o.actions.volumewheel(true);
                o.volumewheel = true
            }
            o.controlover = true;
            o.controls.Mouse(key, "over")
        }

        function onOut() {
            over = false;
            var i;
            if (style.iconsover == 1) {
                if (on && exist(style.icon2)) {
                    i = 1
                }
                else {
                    i = 0
                }
                if (replay && iconsover.length > 2) {
                    i = 2
                }
                hideAllIcons();
                show(icon[i])
            }
            if (style.bg == 1) {
                if (style.bgaover != -1) {
                    css(bg,
                        {
                            "opacity": style.bga
                        })
                }
                if (style.bgcolorover != -1) {
                    css(bg,
                        {
                            "background": style.bgcolor
                        })
                }
            }
            if (style.aover > -1) {
                for (i = 0; i < icons.length; i++) {
                    if (icon[i].style.visibility != "hidden") {
                        css(icon[i],
                            {
                                "opacity": style.a
                            })
                    }
                }
            }
            if (style.scaleover > -1) {
                scale(style.scale)
            }
            if (style.iconscolorover != -1) {
                IconsColor(icon, (style.iconscolor == -1 ? '#ffffff' : style.iconscolor))
            }
            if (action == "mute" && !o.fullscreen) {
                o.actions.volumewheel(false);
                o.volumewheel = false
            }
            TipHide();
            o.controlover = false;
            o.controls ? o.controls.Mouse(key, "out") : ''
        }

        function TipHide() {
            if (style.tip == 1 && style.tipalways != 1) {
                hide(tip);
                css(tip,
                    {
                        "opacity": 0
                    })
            }
        }

        function onClick(e) {
            e ? e.cancelBubble = true : '';
            if (!noclick) {
                o.controls.ControlClick(key);
                if (action == "custom") {
                    CustomToogle()
                }
                TipHide();
                if (style.rotateonclick == 1) {
                    iconangle = iconangle + 45;
                    Rot(icon[0], iconangle)
                }
                clicked = true;
                if (style.hideafterclick == 1 || (key == "control_start" && style.hide == 1 && style.hideonplay == 1)) {
                    o.controls.refresh()
                }
            }
        };
        this.Click = function () {
            onClick()
        };

        function CustomToogle() {
            if (icons) {
                if (icons.length > 1) {
                    if (on == true) {
                        show(icon[0]);
                        hide(icon[1])
                    }
                    else {
                        show(icon[1]);
                        hide(icon[0])
                    }
                }
                if (style.tip == 1 && tips.length > 1) {
                    tiptext.innerHTML = o.ni + (on == true ? tips[0] : tips[1]) + o.ni2;
                    Tip()
                }
            }
            if (exist(style.linkurl0)) {
                if (on == true) {
                    style.linkurl = style.linkurl0
                }
                else {
                    style.linkurl = style.linkurl2
                }
            }
            SwitchText();
            on = on != true;
            if (style.linkurl) {
                if (style.linkurl.indexOf(",0/1") > -1) {
                    js(style.linkurl, on ? 1 : 0)
                }
            }
            if (style.bg == 1 && exist(style.bgcolorlink2)) {
                if (style.bgcolorlink2 != -1) {
                    if (on) {
                        style.bgcolorlink0 = style.bgcolor;
                        style.bgcolor = style.bgcolorlink2
                    }
                    else {
                        style.bgcolor = style.bgcolorlink0
                    }
                    Background();
                    Clickable(bg);
                    Resize();
                    if (style.type == "text") {
                        ResizeText()
                    }
                    else {
                        scale(style.scale)
                    }
                }
            }
        }

        function SwitchText() {
            if (exist(style.texts)) {
                if (style.texts.length > 1) {
                    if (on == true) {
                        UpdateText(style.texts[0])
                    }
                    else {
                        UpdateText(style.texts[1])
                    }
                }
            }
        }

        function ReplayIcon(event) {
            event.cancelBubble = true;
            o.controls.ControlClick(key)
        }

        function hideAllIcons() {
            for (var i = 0; i < icons.length; i++) {
                if (icon[i].style.visibility != "hidden") {
                    css(icon[i],
                        {
                            "opacity": style.a
                        });
                    hide(icon[i])
                }
            }
        }

        function Marquee(text) {
            if (icon[0]) {
                if (icon[0].offsetWidth > o.screen_w - style.marginleft - style.marginright - style.bgpaddingleft - style.bgpaddingright) {
                    if (style.marquee == 1) {
                        if (!text) {
                            text = icon[0].innerHTML
                        }
                        icon[0].innerHTML = '<marquee>' + text + '</marquee>'
                    }
                    else {
                        css(icon[0],
                            {
                                "white-space": "normal"
                            })
                    }
                    css(icon[0],
                        {
                            "width": o.screen_w - style.marginleft - style.marginright - style.bgpaddingleft - style.bgpaddingright
                        })
                }
            }
        }

        function imageLoaded() {
            if (bg) {
                imgldd = false;
                style.loading = 0;
                hide(bg);
                if (icon[0]) {
                    style.w = icon[0].offsetWidth * style.scale;
                    style.h = icon[0].offsetHeight * style.scale;
                    scale(style.scale)
                }
                style.loaded = 0;
                Background();
                ClickArea();
                Clickable(area);
                show(bg);
                Resize();
                o.controls.resize();
                if (!isVisible(control)) {
                    hide2(control)
                }
            }
            else {
                imgldd = true
            }
        }

        function CancelBubble(event) {
            event.cancelBubble = true
        }

        function onMove() {
            if (!o.system.mobile && !o.controlover) {
                onOver()
            }
            Tip()
        }

        function scale(x) {
            if (x > 0) {
                if (o.system.safari && style.tipalways != 1) {
                    css(bg,
                        {
                            "zoom": x + ""
                        })
                }
                else {
                    css(bg,
                        {
                            "transform": "scale(" + x + ")"
                        })
                }
                for (i = 0; i < icons.length; i++) {
                    if (o.system.safari && style.tipalways != 1) {
                        css(icon[i],
                            {
                                "zoom": x + ""
                            });
                        zoomed = true
                    }
                    else {
                        css(icon[i],
                            {
                                "transform": "scale(" + x + ")"
                            })
                    }
                }
                scaleX = x;
                scaleY = x
            }
        }

        function CreateTip() {
            tip = createElement("div");
            css(tip,
                {
                    'position': 'absolute',
                    'left': 0,
                    'top': 0,
                    'height': 'auto',
                    "opacity": 0,
                    "transition": "opacity 0.1s linear"
                });
            tipbg = createElement("div");
            style = MarginPadding(style, 'tippadding', 'tippadding');
            style = MarginPadding(style, 'tipmargin', 'tipmargin');
            css(tipbg,
                {
                    'position': 'absolute',
                    'left': 0,
                    'top': 0,
                    'width': '100%',
                    'height': 30,
                    'background-color': style.tipbgcolor,
                    'opacity': style.tipbga,
                    'border-radius': style.tipbgrounding
                });
            tiptext = createElement("div");
            css(tiptext,
                {
                    'position': 'absolute',
                    'left': style.tippaddingleft,
                    'top': style.tippaddingtop,
                    'color': style.tipcolor,
                    'font-family': checkFont(style.tipfont),
                    'font-size': style.tipfontsize * existv(v.globalfs, 1),
                    "letter-spacing": style.tipletterspacing + 'px',
                    "line-height": "1"
                });
            if (style.tiptext) {
                if (style.tiptext.indexOf("var:") == 0) {
                    style.tipvar = true
                }
            }
            if (!style.tipvar) {
                css(tiptext,
                    {
                        'white-space': 'nowrap'
                    })
            }
            if (style.tippointer == 1) {
                tipcrn = createElement("div");
                tipcrn.innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="#' + style.tipbgcolor.replace("#", "") + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'
            }
            if (style.tipalways == 1) {
                css(tip,
                    {
                        "opacity": 1
                    });
                Clickable(tip)
            }
            else {
                Pnt0(tip)
            }
            control.appendChild(tip);
            tiptext.innerHTML = o.ni + (style.tiptext == '' ? Lang(action) : tips[0]) + o.ni2;
            tip.appendChild(tipbg);
            tip.appendChild(tiptext);
            if (style.tippointer == 1) {
                tip.appendChild(tipcrn);
                var btm = o.doctype ? '-8px' : '-6px';
                var ps = style.tippointeralign;
                if (!exist(ps)) {
                    ps = ''
                }
                var tp = ps.indexOf("top") > -1;
                if (tp) {
                    Rot(tipcrn, '-180')
                }
                css(tipcrn,
                    {
                        'position': 'absolute',
                        'right': (ps.indexOf("right") > -1 ? 10 * style.scale : 'auto'),
                        'left': (ps.indexOf("left") > -1 ? 10 * style.scale : (ps == '' || ps == 'top' ? '50%' : 'auto')),
                        'margin-left': (ps == '' || ps == 'top' ? '-4px' : 0),
                        'bottom': (tp ? 'auto' : btm),
                        'top': (tp ? btm : 'auto'),
                        'opacity': style.tipbga
                    })
            }
            Tip()
        }

        function Tip() {
            if (style.tip == 1) {
                css(tip,
                    {
                        "top": (bottomside == 1 ? -h - tip.offsetHeight + 3 : -tip.offsetHeight / 2) + style.tipmargintop - style.tipmarginbottom,
                        "left": (rightside == 1 ? -tiptext.offsetWidth : (bottomside == 1 ? -w / 2 : +tiptext.offsetWidth)) - (bottomside == 1 ? 0 : tiptext.offsetWidth / 2 + 5) + style.tipmarginleft - style.tipmarginright,
                        "height": style.tippaddingtop + tiptext.offsetHeight + style.tippaddingbottom,
                        "width": style.tippaddingleft + tiptext.offsetWidth + style.tippaddingright
                    });
                css(tipbg,
                    {
                        'height': tip.offsetHeight
                    });
                tip.style.zIndex = "1000"
            }
        }
        this.c = function () {
            return control
        };
        this.s = function (x) {
            return style[x]
        };
        this.ss = function (x, x2) {
            return exist(style[x]) ? style[x][x2] : false
        };
        this.g = function (x) {
            switch (x) {
                case "width":
                    return w;
                    break;
                case "height":
                    return h;
                    break;
                case "x":
                    return int(control.style.left);
                    break;
                case "y":
                    return int(control.style.top);
                    break;
                case "opacity":
                    return control.style.opacity ? control.style.opacity : 1;
                    break;
                case "show":
                    return visible;
                    break;
                case "scaleX":
                    return scaleX;
                    break;
                case "scaleY":
                    return scaleY;
                    break;
                case "action":
                    return action;
                    break;
                case "action_settings":
                    return actionstt;
                    break;
                case "clicked":
                    return clicked;
                    break;
                case "type":
                    return style.type;
                    break;
                case "length":
                    return style.lngth ? style.lngth : 0;
                    break;
                case "key":
                    return key;
                    break;
                case "x0":
                    return x0;
                    break;
                case "y0":
                    return y0;
                    break;
                case "over":
                    return over;
                    break;
                case "settings#":
                    return actionstt.indexOf("settings#") == 0;
                    break;
                case "settings:":
                    return actionstt.indexOf("settings:") == 0;
                    break;
                case "set#visible":
                    return settingsNumberVisible;
                    break;
                default:
                    return false
            }
        };
        this.set = function (k, x) {
            switch (k) {
                case "show":
                    over ? onOut() : '';
                    visible = x;
                    break;
                case "display":
                    DisplayControl(x);
                    break;
                case "show2":
                    show2(control);
                    break;
                case "hide2":
                    hide2(control);
                    break;
                case "unhidden":
                    style.hidden = 0;
                    break;
                case "hidetime":
                    if (style.hidesec > 0 && style.hidden != 1 && !htto) {
                        clearTimeout(htto);
                        htto = setTimeout(function () {
                            hide2(control);
                            style.hidden = 1;
                            htto = undefined
                        }, style.hidesec * 1000)
                    }
                    break;
                case "scale":
                    scale(x);
                    break;
                case "scale0":
                    css(control,
                        {
                            "transform": "scale(0)"
                        });
                    break;
                case "scaleX":
                    css(control,
                        {
                            "transform": "scaleX(" + x + ")"
                        });
                    scaleX = x;
                    break;
                case "scaleY":
                    css(control,
                        {
                            "transform": "scaleY(" + x + ")"
                        });
                    scaleY = x;
                    break;
                case "opacity":
                    css(control,
                        {
                            "opacity": x
                        });
                    break;
                case "iconopacity":
                    css(icon[0],
                        {
                            "opacity": x
                        });
                    break;
                case "saturate":
                    css(icon[0],
                        {
                            "filter": "saturate(" + x + ")"
                        });
                    break;
                case "left":
                    css(control,
                        {
                            "left": x
                        });
                    break;
                case "top":
                    css(control,
                        {
                            "top": x
                        });
                    break;
                case "width":
                    css(control,
                        {
                            "width": x
                        });
                    break;
                case "height":
                    css(control,
                        {
                            "height": x
                        });
                    break;
                case "over_final":
                    style.over_final = x;
                    break;
                case "rightside":
                    rightside = x;
                    break;
                case "set#visible":
                    settingsNumberVisible = x;
                    break;
                case "x":
                    css(control,
                        {
                            "left": x
                        });
                    break;
                case "y":
                    css(control,
                        {
                            "top": x
                        });
                    break;
                case "animation":
                    style.animation = x;
                    break;
                case "skip":
                    style.skip = x;
                    break;
                case "x0":
                    x0 = x;
                    break;
                case "y0":
                    y0 = x;
                    break;
                default:
                    return false
            }
        };

        function DisplayControl(x) {
            if (x && o.system.mobile) {
                noclick = true;
                setTimeout(noClickTimeout, 300)
            }
            if (!x) {
                if (style.iconsreplay == 1 && replay) {
                    hide(icon[iconreplay]);
                    show(icon[0]);
                    replay = false
                }
            }
            if (style.loading == 1) {
                x ? show(control) : hide(control)
            }
            else {
                if (key == "control_time" || key == "control_duration") {
                    x ? show(control) : hide(control)
                }
                else {
                    css(control,
                        {
                            "display": (x ? "block" : "none")
                        })
                }
                visible = x;
                x ? show(control) : ''
            }
            if (x && style.resizetxt) {
                style.resizetxt = false;
                setTimeout(ResizeText, 100)
            }
        }

        function noClickTimeout() {
            noclick = false
        }
        this.UpdateText = function (x) {
            if (actionstt != '' && (style.text == 'x' || style.text == '1x')) {
                x = x + 'x'
            }
            UpdateText(x);
            !isVisible(control) ? style.resizetxt = true : ''
        };
        this.CustomText = function (x) {
            style.customtext = x;
            UpdateText(x);
            o.controls.resize()
        };
        this.Rotate = function () {
            Rot(icns, angle);
            angle += 20
        };

        function Rot(x, y) {
            css(x,
                {
                    "transform": "rotate(" + y + "deg)" + (x == icon[0] && !zoomed && scaleX != 1 ? ' scale(' + scaleX + ')' : '')
                })
        };
        this.RenewFromTitle = function (x) {
            if (style.text.indexOf("{title") > -1) {
                UpdateText(style.text)
            }
        };
        this.CustomToogle = function () {
            CustomToogle()
        };

        function UpdateText(text) {
            if (style.type == "text") {
                if (exist(text)) {
                    if (style.with_hours) {
                        if (text.length == 4) {
                            text = (style.timeshort ? '0:0' : '00:0') + text
                        }
                        if (text.length == 5) {
                            text = (style.timeshort ? '0:' : '00:') + text
                        }
                        if (text.length == 7) {
                            text = (style.timeshort ? '' : '0') + text
                        }
                    }
                    if (style.with_min) {
                        if (text.length == 4) {
                            text = '0' + text
                        }
                    }
                    style.lngth = text.length
                }
                text = (style.presmbl ? style.presmbl + (style.minus4back ? '' : ' ') : '') + text + (style.postsmbl ? ' ' + style.postsmbl : '');
                var prevorius_default_w = icon[0].offsetWidth + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                var prevorius_default_h = icon[0].offsetHeight + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                icon[0].innerHTML = o.ni + (action == "custom" ? Places(text) : text) + o.ni2;
                if (style.triangle == 1) {
                    icon[0].innerHTML += '<span style="display:inline-block;width:10px"></span><span style="border-top: 3px solid #fff;border-left: 3px solid transparent;border-right: 3px solid transparent;position: absolute;right:3px;top: 50%;margin-top: -1px;"></span>'
                }
                if (action == "title") {
                    css(icon[0],
                        {
                            "width": "auto",
                            "white-space": "nowrap"
                        });
                    Marquee(text)
                }
                style.w = icon[0].offsetWidth + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                style.h = icon[0].offsetHeight + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                if (prevorius_default_w != style.w || prevorius_default_h != style.h || (style.w > 0 && last_text_w == 0)) {
                    ResizeText()
                }
                if (icon[0].offsetWidth > 0) {
                    last_text_w = style.w
                }
                else {
                    actionstt != '' ? hide(icon[0]) : '';
                    if (text != '') {
                        setTimeout(ResizeText, 10)
                    }
                }
            }
        }
        this.ResizeText = function () {
            ResizeText()
        };

        function ResizeText() {
            if (style.type == "text") {
                if (icon[0]) {
                    if (icon[0].offsetWidth > 0) {
                        actionstt != '' ? show(icon[0]) : '';
                        w = style.w = icon[0].offsetWidth;
                        h = style.h = icon[0].offsetHeight;
                        Background();
                        Clickable(bg);
                        Resize();
                        o.controls ? o.controls.resizeFromText() : ''
                    }
                }
            }
        }
        this.UpdateVolume = function (x) {
            if (style.displayvolume == 1) {
                var n = 4;
                if (key == "control_mute") {
                    if (o.system.mobile) {
                        return
                    }
                }
                else {
                    n = 8
                }
                var y = 'pjs_';
                var z = [];
                for (var i = 1; i < n; i++) {
                    z[i] = document.getElementById(y.concat(v.id, key, 'volume_element', i))
                }
                if (z[1]) {
                    for (var i = 1; i < n; i++) {
                        z[i] ? hide(z[i]) : ''
                    }
                    if (n == 4) {
                        for (var i = 1; i < n; i++) {
                            x > (i / n) && z[i] ? show(z[i]) : ''
                        }
                    }
                    else {
                        for (var i = n; i > 0; i--) {
                            if (x * 1 + (1 / n) >= (i / n) && z[i]) {
                                show(z[i]);
                                break
                            }
                        }
                    }
                }
            }
        };
        this.On = function () {
            if (!on) {
                if (icons) {
                    if (icons.length > 1 && actions.length > 1) {
                        hide(icon[0]);
                        show(icon[1])
                    }
                }
                if (actions.length > 1) {
                    action = actions[1];
                    if (style.tip == 1) {
                        tiptext.innerHTML = TipText(1);
                        Tip()
                    }
                }
                if (style.iconsreplay == 1 && replay) {
                    hide(icon[iconreplay]);
                    replay = false
                }
                SwitchText();
                on = true
            }
        };

        function TipText(x) {
            return o.ni + (style.tiptext == '' ? Lang(actions[x]) : (tips.length > 1 ? tips[x] : tips[0])) + o.ni2
        }
        this.CustomSwitch = function (x) {
            CustomSwitch(x)
        };

        function CustomSwitch(x) {
            var y = 'pjs_';
            var z = document.getElementById(y.concat(v.id, key, 'slider'));
            if (z) {
                css(z,
                    {
                        "transition": "transform 0.1s ease-out"
                    });
                if (x == 1) {
                    z.style.transform = 'translate(0, 0)'
                }
                else {
                    z.style.transform = 'translate(-7px, 0)'
                }
            }
            else {
                if (x == 1) {
                    style.a = 1
                }
                else {
                    style.a = 0.5
                }
            }
            on = x == 1;
            if (style.tip == 1 && tips.length > 1) {
                tiptext.innerHTML = (on ? tips[0] : tips[1])
            }
            css(icon[0],
                {
                    "opacity": style.a
                })
        };
        this.Off = function () {
            if (on) {
                if (icons) {
                    if (icons.length > 1 && actions.length > 1) {
                        show(icon[0]);
                        hide(icon[1])
                    }
                }
                action = actions[0];
                if (actions.length > 1) {
                    if (style.tip == 1) {
                        tiptext.innerHTML = TipText(0);
                        Tip()
                    }
                }
                SwitchText();
                on = false;
                replay = false
            }
        };
        this.ReplayIcon = function () {
            if (style.iconsreplay == 1) {
                hideAllIcons();
                show(icon[iconreplay]);
                replay = true
            }
        };
        this.Buffer = function () {
            var stop = false;
            if (style.hide == 1 && style.hidewithposter == 1) {
                if (isVisible(o.poster)) {
                    stop = true
                }
            }
            if (!stop) {
                show2(control);
                var items = control.getElementsByTagName("*");
                for (var i = items.length; i--;) {
                    css(items[i],
                        {
                            "animation-play-state": "running"
                        })
                }
                visible = true
            }
        };
        this.BufferStop = function () {
            BufferStop()
        };

        function BufferStop() {
            hide2(control);
            var items = control.getElementsByTagName("*");
            for (var i = items.length; i--;) {
                css(items[i],
                    {
                        "animation-play-state": "paused"
                    })
            }
            visible = false
        }
        this.Remove = function () {
            if (icons.length > 0) {
                for (i = 0; i < icons.length; i++) {
                    if (icon[i].parentNode == control) {
                        control.removeChild(icon[i])
                    }
                    icon[i] = null
                }
            }
            if (bg) {
                bg.removeAttribute("onclick");
                bg.removeAttribute("onmouseover");
                bg.removeAttribute("onmouseout");
                bg.parentNode.removeChild(bg);
                bg = null
            }
            if (style.position == 'timeline') {
                o.timeline.removeChild(control)
            }
            else {
                if (control.parentNode == o.frame) {
                    o.frame.removeChild(control)
                }
                else {
                    if (o.toolbar) {
                        if (control.parentNode == o.toolbar) {
                            o.toolbar.removeChild(control)
                        }
                    }
                }
            }
            if (tip) {
                control.removeChild(tip)
            }
            control = null
        };
        this.HdIcon = function () {
            hdicon ? hdicon.toggle() : ''
        };
        this.setcss = function () {
            SetCSS()
        };

        function SetCSS() {
            controlCSS(icons[0], style.color, icon[0])
        }

        function Places(x) {
            var z = x + '';
            if (x.indexOf('{time}') > -1 && exist(o.continue)) {
                x = x.replace('{time}', timeFormat(o.continue.flag().t))
            }
            if (x.indexOf('{title') > -1) {
                var y = o.titlestore ? o.titlestore : (v.title ? v.title : '');
                if (x.indexOf('{title2}') > -1 && o.controls) {
                    x = x.replace('{title2}', o.controls.PlaylistG('title2'))
                }
                if (o.butplstart && o.controls) {
                    y = o.controls.PlaylistG('butplstart')
                }
                x = x.replace('{title}', y);
                if (o.butplstart && !o.controls) {
                    setTimeout(UpdateText, 100, z)
                }
            }
            return x
        }

        function IconsColor(icon, clr) {
            for (var i = 0; i < icon.length; i++) {
                SvgColor(icon[i], clr)
            }
            if (style.linkurl == "chromecast") {
                if (o.chromecast) {
                    o.chromecast.Color(icon[0], clr)
                }
            }
        }
    };
    var ControlLine = function (key, action) {
        var i;
        var style = [];
        var w;
        var h;
        var bg;
        var visible = true;
        var x0;
        var y0;
        var scaleX = 1;
        var scaleY = 1;
        var topBg = 0;
        var leftBg = 0;
        var alphas;
        var mouseDown;
        var mouseUp;
        var over;
        var click;
        var handle;
        var _duration_load;
        var _duration_play;
        var _time_load;
        var _time_play;
        var tip;
        var tiptext;
        var tipcrn;
        o.current_thumb = -1;
        var lastTouch;
        var over;
        var onup_to;
        for (i in default_style.but) {
            style[i] = default_style.but[i]
        }
        var action = v[key].action;
        var type = v[key].type;
        for (i in default_style[action]) {
            style[i] = default_style[action][i]
        }
        for (i in v[key]) {
            style[i] = v[key][i]
        }
        style.w = parseInt(style.w);
        style.h = parseInt(style.h);
        style = MarginPadding(style, 'margin', 'margin');
        style = MarginPadding(style, 'marginproc', 'marginproc');
        var control = createElement("div");
        if (v.toolbar.hidedown == 1 && v.toolbar.hide == 1) {
            o.toolbar.appendChild(control)
        }
        else {
            o.frame.appendChild(control)
        }
        action == "line" ? o.timeline = control : '';
        var _cul = false;
        if (style.customline) {
            if (style.customline != 'volume') {
                _cul = true
            }
        }
        css(control,
            {
                "position": "absolute",
                "top": 0,
                "left": 0,
                "opacity": 1,
                "fontSize": "14px",
                "lineHeight": "1em"
            });
        if (style.ontop == 1) {
            control.style.zIndex = style.order
        }
        Background();
        var lines = createElement("div");
        css(lines,
            {
                "position": "absolute",
                "bottom": Math.round(-style.h / 2),
                "left": Math.round(-style.w / 2)
            });
        if (style.roundout == 1) {
            css(lines,
                {
                    "border-radius": style.rounding * style.h / 2,
                    "height": style.h,
                    "overflow": "hidden",
                    "pointer-events": "none"
                })
        }
        if (exist2(style.dom)) {
            attr(control,
                {
                    "id": (v.id + "_control_" + style.dom)
                })
        }
        control.appendChild(lines);
        if (action == 'line' && v.thumbs == 1) {
            CreateThumb()
        }
        if (style.tip == 1) {
            CreateTip()
        }
        var line0 = createElement("div");
        StyleLine(0, line0, 0.3, (style.gradient == 1 ? "linear-gradient(#" + style.gradientcolorbg + ", #" + style.colorbg + ")" : style.colorbg), style.w, style.abg);
        if (style.customdesign == 1 && exist(style.customdesignsvg)) {
            var svg0 = createElement("div");
            svg0.innerHTML = style.customdesignsvg.replace(/\#FFFFFF/g, "#" + style.colorbg);
            line0.appendChild(svg0);
            css(svg0,
                {
                    "position": "absolute",
                    "bottom": -Math.round(style.h / 2),
                    "left": 0,
                    "pointer-events": "none"
                });
            css(line0,
                {
                    "overflow": "hidden",
                    "background": "none"
                });
            var x = ["path", "polygon", "polyline", "rect", "ellipse"];
            for (var y = 0; y < x.length; y++) {
                var z = svg0.querySelectorAll("svg " + x[y]);
                if (z.length > 0) {
                    for (var y2 = 0; y2 < z.length; y2++) {
                        z[y2].style.fill = style.colorbg
                    }
                }
            }
        }
        lines.appendChild(line0);
        var lines1 = [];
        var line1 = createElement("div");
        StyleLine(1, line1, style.linespeed1, (style.gradient == 1 ? "linear-gradient(#" + style.gradientcolorload + ", #" + style.colorload + ")" : style.colorload), 0, style.aload);
        lines.appendChild(line1);
        if (style.aover > 0) {
            var line2 = createElement("div");
            StyleLine(2, line2, style.linespeed2, style.colorover, 0, style.aover);
            lines.appendChild(line2)
        }
        var line3 = createElement("div");
        StyleLine(3, line3, style.linespeed3, (style.gradient == 1 ? "linear-gradient(#" + style.gradientcolor + ", #" + style.color + ")" : style.color), 0, style.a);
        if (style.customdesign == 1 && exist(style.customdesignsvg)) {
            var svg3 = createElement("div");
            svg3.innerHTML = style.customdesignsvg.replace(/\#FFFFFF/g, "#" + style.color);
            css(svg3,
                {
                    "position": "absolute",
                    "bottom": -Math.round(style.h / 2),
                    "left": 0,
                    "pointer-events": "none"
                });
            css(line3,
                {
                    "overflow": "hidden",
                    "background": "none"
                });
            line3.appendChild(svg3)
        }
        if (style.value == 1) {
            var line3value = createElement("div");
            style = MarginPadding(style, 'valuepadding', 'valuepadding');
            style = MarginPadding(style, 'valuemargin', 'valuemargin');
            css(line3value,
                {
                    "position": "absolute",
                    "bottom": style.h / 2,
                    "left": 0,
                    "pointer-events": "none",
                    "font-size": style.valuesize * existv(v.globalfs, 1),
                    "color": style.valuecolor,
                    "line-height": "100%",
                    "padding-top": style.valuepaddingtop,
                    "padding-bottom": style.valuepaddingbottom,
                    "padding-left": style.valuepaddingleft,
                    "padding-right": style.valuepaddingright,
                    "margin-top": style.valuemargintop,
                    "margin-bottom": style.valuemarginbottom,
                    "margin-left": style.valuemarginleft,
                    "margin-right": style.valuemarginright,
                    "border-radius": (style.valuerounding + "px"),
                    "display": "none"
                });
            if (style.valuebg == 1) {
                css(line3value,
                    {
                        "background": "#" + style.valuebgcolor
                    })
            }
            line3.appendChild(line3value);
            var l3v_show = false;
            var l3v_left = false
        }
        o.timeline_h = style.h;
        lines.appendChild(line3);
        if (style.pointed == 1) {
            var points = [];
            if (typeof PluginPoints !== "undefined") {
                var pnt = new PluginPoints(control, points, w, style)
            }
        }
        if (style.handle == 1) {
            if (style.handleicon.toString().indexOf('<svg') == -1) {
                style.handleicon == '' ? style.handleicon = "<svg width='20' height='20'><g><ellipse ry='5' rx='5' cy='10' cx='10' fill='#fff'/></g></svg>" : ''
            }
            handle = createElement("div");
            handle.innerHTML = style.handleicon.toString();
            style = MarginPadding(style, 'handlemargin', 'handlemargin');
            css(handle,
                {
                    "position": "absolute",
                    "top": -10 + style.handlemargintop - style.handlemarginbottom,
                    "left": -1000,
                    "pointer-events": "none",
                    "height": 20,
                    "width": style.handle_width,
                    "opacity": style.handlea,
                    "transition": "transform 0.1s linear, opacity 0.1s linear"
                });
            if (style.handlehide == 1 || style.handlehideinit == 1) {
                css(handle,
                    {
                        "transform": "scale(0)"
                    })
            }
            else {
                if (style.handlescale != 1) {
                    css(handle,
                        {
                            "transform": "scale(" + style.handlescale + ")"
                        })
                }
            }
            control.appendChild(handle);
            if (style.handlecolor != -1) {
                var x = ["path", "rect", "ellipse"];
                for (var y = 0; y < x.length; y++) {
                    var z = handle.querySelectorAll("svg " + x[y]);
                    if (z.length > 0) {
                        for (var y2 = 0; y2 < z.length; y2++) {
                            z[y2].style.fill = "#" + style.handlecolor
                        }
                    }
                }
            }
            style.handlewidth = handle.offsetWidth
        }
        if (style.rotation != 0) {
            css(control,
                {
                    "transform": "rotate(" + style.rotation + "deg)"
                })
        }
        if (style.hidden == 1) {
            hide(control);
            visible = false
        }
        if (action == "volume") {
            if (style.hide == 1 && style.hideoutmute == 1) {
                o.hidden_volume = true;
                style.hidden = true
            }
            else {
                o.hidden_volume = false
            }
        }
        style.vertical = 0;
        if (style.rotation != 0) {
            style.rotation2 = Math.abs(style.rotation);
            if (style.rotation2 > 45 && style.rotation2 < 135) {
                style.vertical = 90
            }
            if (style.rotation2 > 225 && style.rotation2 < 315) {
                style.vertical = 270
            }
        }
        if (_cul) {
            o.line_speed = style.customline == "speed";
            w = style.w;
            UpdatePlay(1, o.files_speed.slice(-1)[0], "no")
        }

        function StyleLine(n, x, y, z, _w, _a) {
            css(x,
                {
                    "position": "absolute",
                    "bottom": 0,
                    "left": 0,
                    "width": _w,
                    "height": (style['h' + n] > 0 ? style['h' + n] : style.h),
                    "background": z ? (z.indexOf("linear") > -1 ? z : '#' + z) : '',
                    "border-radius": (style.roundout == 1 ? 1 : style.rounding * style.h / 2),
                    "opacity": _a,
                    "pointer-events": "none",
                    "transition": "transform 0.2s ease-in-out"
                })
        }

        function Background() {
            bg = createElement("div");
            style = MarginPadding(style, 'bgpadding', 'bgpadding');
            var bgh = style.h + style.bgpaddingtop + style.bgpaddingbottom;
            var bgw = style.w + style.bgpaddingleft + style.bgpaddingright;
            if (style.bg == 1) { }
            else {
                style.bga = 0
            }
            style = MarginPadding(style, 'clickmargin', 'clickmargin');
            if (v.toolbar.clickarea == 1 || style.clickarea == 1) {
                style.bgcolor = '#ff0000';
                style.bg = 1;
                style.bga = 0.5
            }
            css(bg,
                {
                    "position": "absolute",
                    "top": 0,
                    "left": 0,
                    "width": bgw,
                    "height": bgh * style.clickscaley,
                    "borderRadius": (style.bgo * bgh) / 2,
                    "backgroundColor": style.bgcolor,
                    "opacity": style.bga,
                    "pointerEvents": "auto",
                    "transition": "opacity .1s linear, background .1s linear"
                });
            if (style.bgborder == 1) {
                css(bg,
                    {
                        "border": "1px solid #" + style.bgbordercolor
                    })
            }
            if (style.click == 1) {
                if (style.hand == 1) {
                    css(bg,
                        {
                            "cursor": "pointer"
                        })
                }
                if (!o.system.mobile) {
                    bg.onclick = onClick;
                    bg.onmouseup = onUp;
                    bg.onmousedown = onDown;
                    bg.onmousemove = onMove
                }
            }
            else {
                css(bg,
                    {
                        "cursor": "default"
                    })
            }
            if (!o.system.mobile) {
                bg.onmouseover = onOver;
                bg.onmousemove = onMove;
                bg.onmouseout = onOut
            }
            if (o.system.mobile) {
                bg.addEventListener("touchstart", function (event) {
                    event.cancelBubble = true;
                    if (!exist(event.clientX) && event.touches.length > 0) {
                        event.clientX = event.touches[0].pageX;
                        event.clientY = event.touches[0].pageY
                    }
                    lastTouch = event;
                    onOver(event);
                    onDown(event)
                });
                bg.addEventListener("touchend", function (event) {
                    event.cancelBubble = true;
                    onOut(event);
                    onUp(lastTouch)
                });
                bg.addEventListener("click", function (event) {
                    event.cancelBubble = true
                });
                bg.addEventListener("touchmove", function (event) {
                    if (!exist(event.clientX) && event.touches.length > 0) {
                        event.clientX = event.touches[0].pageX;
                        event.clientY = event.touches[0].pageY
                    }
                    lastTouch = event;
                    onMove(event)
                })
            }
            css(bg,
                {
                    "left": Math.ceil(-style.w / 2 - style.bgpaddingleft)
                });
            css(bg,
                {
                    "top": Math.ceil(-style.h / 2 - style.bgpaddingtop + style.clickmargintop - style.clickmarginbottom)
                });
            control.appendChild(bg)
        }

        function Resize(width) {
            if (width != w) {
                w = width;
                o.timeline_w = w;
                var delta = w / line0.offsetWidth;
                css(bg,
                    {
                        "width": (w + style.bgpaddingleft + style.bgpaddingright),
                        "left": -w / 2 - style.bgpaddingleft,
                    });
                css(lines,
                    {
                        "left": -w / 2
                    });
                css(line0,
                    {
                        "width": w
                    });
                css(lines,
                    {
                        "width": w
                    });
                var xx = line1.offsetWidth * delta;
                if (xx > line0.offsetWidth) {
                    xx = line0.offsetWidth
                }
                css(line1,
                    {
                        "width": xx
                    });
                var wp = line3.offsetWidth * delta;
                css(line3,
                    {
                        "width": wp
                    });
                HandleWidth(wp);
                if (action == "line") {
                    Continue()
                }
                if (style.pointed == 1) {
                    pnt ? pnt.place(w) : ''
                }
                if (o.cut) {
                    o.cut.Resize()
                }
            }
        }

        function HandleWidth(x) {
            if (style.handle == 1) {
                if (x < style.handlewidth / 2 && style.handle_width != 20) {
                    x = style.handlewidth / 2
                }
                if (x > w - style.handlewidth / 2 && style.handle_width != 20) {
                    x = w - style.handlewidth / 2
                }
                var y = x - w / 2 - style.handlewidth / 2 + style.handlemarginleft - style.handlemarginright;
                css(handle,
                    {
                        "left": y
                    })
            }
        }

        function ShowHandle() {
            css(handle,
                {
                    "transform": "scale(" + style.handlescale + ")"
                })
        }

        function onOver(event) {
            o.controls.Mouse(key, "over");
            if (style.bg == 1) {
                if (style.bgaover != -1) {
                    var m = new Motion(
                        {
                            "mc": bg,
                            "type": "alpha_div",
                            "to": style.bgaover,
                            "time": 0.1,
                            "me": (key + "bg")
                        })
                }
                if (exist2(style.bgcolorover)) {
                    css(bg,
                        {
                            "background-color": style.bgcolorover
                        })
                }
            }
            if (exist2(style.coloroverplay)) {
                css(line3,
                    {
                        "background-color": style.coloroverplay
                    })
            }
            if (style.handle == 1) {
                if (style.handleiconsover == 1 && exist(style.handleiconover)) {
                    if (style.handleiconspress == 1 && mouseDown) { }
                    else {
                        handle.innerHTML = "<svg width='" + style.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleiconover.toString() + "</svg>"
                    }
                }
                if (style.handlehide == 1) {
                    if (style.handlehideinit == 1 && !o.start) { }
                    else {
                        ShowHandle()
                    }
                }
                else {
                    if (style.handleaover != -1) {
                        var m2 = new Motion(
                            {
                                "mc": handle,
                                "type": "alpha_div",
                                "to": style.handleaover,
                                "time": 0.1,
                                "me": (key + "handle")
                            })
                    }
                }
            }
            if (style.tip == 1 && (o.media.duration() > 0 || action == "volume" || _cul)) {
                ShowTip()
            }
            if (style.expand > 0) {
                css(bg,
                    {
                        "transform": "scaleY(" + ((style.expand - 1) / 5 + 1) + ")"
                    });
                LineScale(style.expand)
            }
            if (style.handle == 1 && style.handlemove == 1) {
                HandleWidth(event.clientX - leftBg)
            }
            if (action == "volume") {
                o.actions.volumewheel(true);
                o.volumewheel = true
            }
            over = true;
            o.controlover = true
        }

        function LineScale(x) {
            css(line0,
                {
                    "transform": "scaleY(" + x + ")"
                });
            css(line1,
                {
                    "transform": "scaleY(" + x + ")"
                });
            line2 ? css(line2,
                {
                    "transform": "scaleY(" + x + ")"
                }) : '';
            css(line3,
                {
                    "transform": "scaleY(" + x + ")"
                })
        }

        function onOut() {
            if (!mouseUp) {
                if (style.aover > 0) {
                    css(line2,
                        {
                            "width": 0
                        })
                }
                if (exist2(style.coloroverplay)) {
                    css(line3,
                        {
                            "background-color": style.color
                        })
                }
                if (style.bg == 1) {
                    if (style.bgaover != -1) {
                        var m = new Motion(
                            {
                                "mc": bg,
                                "type": "alpha_div",
                                "to": style.bga,
                                "time": 0.1,
                                "me": (key + "bg")
                            })
                    }
                    if (exist2(style.bgcolorover)) {
                        css(bg,
                            {
                                "background-color": style.bgcolor
                            })
                    }
                }
                if (style.handle == 1) {
                    if (style.handleiconsover == 1 && exist(style.handleiconover)) {
                        if (style.handleiconspress == 1 && mouseDown) { }
                        else {
                            handle.innerHTML = "<svg width='" + style.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleicon.toString() + "</svg>"
                        }
                    }
                    if (style.handlehide == 1) {
                        css(handle,
                            {
                                "transform": "scale(0)"
                            })
                    }
                    else {
                        if (style.handleaover != -1) {
                            var m2 = new Motion(
                                {
                                    "mc": handle,
                                    "type": "alpha_div",
                                    "to": style.handlea,
                                    "time": 0.1,
                                    "me": (key + "handle")
                                })
                        }
                    }
                }
                if (style.expand > 0) {
                    css(bg,
                        {
                            "transform": "scaleY(1)"
                        });
                    LineScale(1)
                }
                if (action == "volume" && !o.fullscreen) {
                    o.actions.volumewheel(false);
                    o.volumewheel = false
                }
                o.controls.Mouse(key, "out")
            }
            if (style.pointed == 1 && pnt) {
                pnt.out()
            }
            if (style.tip == 1 && (o.media.duration() > 0 || action == "volume")) {
                HideTip()
            }
            if (o.thumbs_on && action == "line") {
                o.th.hide();
                o.current_thumb = -1
            }
            over = false;
            o.controlover = false
        }

        function onClick(event) {
            event.cancelBubble = true
        }

        function CancelBubble(event) {
            event.cancelBubble = true
        }

        function onUp(event) {
            if (action == "volume") {
                if (o.hidden_volume_over) {
                    mouseUp = true;
                    clearTimeout(onup_to);
                    onup_to = setTimeout(function () {
                        mouseUp = false;
                        onOut()
                    }, 1000)
                }
            }
            EndMove();
            o.mouseDown = false;
            if (style.handle == 1) {
                if (style.handleiconspress == 1 && exist(style.handleiconpress)) {
                    handle.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleicon.toString() + "</svg>"
                }
            }
            CalculateClick(event.clientX, event.clientY);
            o.controls.ControlClick(key);
            o.controls.StageMouseUp(event.clientX, event.clientY);
            event.cancelBubble = true
        }

        function onDown(event) {
            mouseDown = true;
            if (style.handle == 1) {
                if (style.handleiconspress == 1 && exist(style.handleiconpress)) {
                    handle.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleiconpress.toString() + "</svg>"
                }
            }
            topBg = findTop(bg);
            leftBg = findLeft(bg);
            CalculateClick(event.clientX, event.clientY);
            UpdatePlay(click, 1, "no")
        }

        function CalculateClick(event_x, event_y) {
            var x;
            var xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            var yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            if (o.system.mobile) { }
            else {
                event_y = event_y + yOffset;
                event_x = event_x + xOffset
            }
            if (style.vertical > 0) {
                x = event_y - topBg - style.bgpaddingright;
                click = x / w;
                if (style.vertical == 270) {
                    x = event_y - topBg - style.bgpaddingleft;
                    click = x / w;
                    click = (click - 1) * -1
                }
            }
            else {
                x = event_x - leftBg - style.bgpaddingleft;
                click = x / w;
                if (style.rotation > 134 && style.rotation < 235) {
                    x = event_x - leftBg - style.bgpaddingright;
                    click = x / w;
                    click = (click - 1) * -1
                }
            }
            click > 1 ? click = 1 : '';
            click < 0 ? click = 0 : ''
        }
        this.PlacePoints = function () {
            pnt ? pnt.place(w) : ''
        };
        this.RenewPoints = function () {
            pnt ? pnt.update(w) : ''
        };

        function EndMove() {
            mouseDown = false
        }

        function onMove(event) {
            leftBg = findLeft(bg);
            if (style.aover > 0) {
                if (o.start || action != 'line') {
                    css(line2,
                        {
                            "width": event.clientX - leftBg
                        })
                }
            }
            if (style.tip == 1 && (o.media.duration() > 0 || action == "volume" || _cul)) {
                ShowTip();
                topBg = findTop(bg);
                CalculateClick(event.clientX, event.clientY);
                if (action == "line") {
                    if (v.hlsdvrtime == 1) {
                        if (o.media.isLive() && o.media.currentFile().indexOf("?DVR") > 0) {
                            tiptext.innerHTML = '- ' + timeFormat((1 - click) * o.media.duration(true))
                        }
                        else {
                            tiptext.innerHTML = timeFormat(click * o.media.duration())
                        }
                    }
                    else {
                        var d = o.media.duration();
                        if (v.delete > 0) {
                            d = d - v.delete
                        }
                        var add = '';
                        if (style.pointed == 1 && pnt) {
                            add = pnt.tip(click * d);
                            add != '' ? add = add + '<br>' : ''
                        }
                        tiptext.innerHTML = add + timeFormat(click * d)
                    }
                }
                if (action == "volume" || _cul) {
                    tiptext.innerHTML = TipVol(click)
                }
                Tip(event)
            }
            if (o.thumbs_on && action == "line" && o.th) {
                if (o.media.duration() > 0) {
                    if (style.tip == 0) {
                        topBg = findTop(bg);
                        leftBg = findLeft(bg);
                        CalculateClick(event.clientX, event.clientY)
                    }
                    var left = (-w / 2 + (event.clientX - leftBg) - v.thumb_width / 2);
                    left > w / 2 - v.thumb_width ? left = w / 2 - v.thumb_width : '';
                    css(o.thumb,
                        {
                            "top": (-v.thumb_height - (v.thumb_bottom > 0 ? v.thumb_bottom * 1 : 5) - v.thumb_border),
                            "left": (left < -w / 2 ? -w / 2 : left)
                        });
                    o.th.time(click * o.media.duration(), event.clientX, leftBg, w)
                }
            }
            if (style.handle == 1 && style.handlemove == 1) {
                HandleWidth(event.clientX - leftBg)
            }
            if (o.system.mobile) {
                onDown(event)
            }
        }

        function Tip(event, t, l) {
            var left = (-w / 2 + (event.clientX + document.documentElement.scrollLeft - leftBg) - tiptext.offsetWidth / 2) + (l ? l : 0);
            var left0 = 0;
            if (v.notofh != 1) {
                if (left + w / 2 + tiptext.offsetWidth + 10 > o.screen_w) {
                    left0 = left;
                    left = o.screen_w - w / 2 - tiptext.offsetWidth - 10
                }
                if (left + o.screen_w / 2 < 0) {
                    left0 = left;
                    left = -o.screen_w / 2
                }
            }
            var x = {
                "top": (-tiptext.offsetHeight - style.linetipmarginbottom * 1 - style.tippaddingtop - style.tippaddingbottom) - (style.toptip == 1 ? (style.h / 2) * (style.expand > 0 ? style.expand : 1) : 0) + (t ? t : 0),
                "left": left
            };
            css(tip, x);
            if (style.tippointer == 1) {
                css(tipcrn,
                    {
                        'position': 'absolute',
                        'left': tiptext.offsetWidth / 2 - 4 + (left0 != 0 ? left0 - left : 0),
                        'top': tiptext.offsetHeight - 6
                    })
            }
        }
        this.ShowTip = function (e, x, t, l) {
            ShowTip();
            tiptext.innerHTML = x;
            Tip(e, t, l)
        };

        function ShowTip() {
            if (!isVisible(tip) || tip.style.opacity == 0) {
                show(tip);
                css(tip,
                    {
                        "opacity": 1
                    })
            }
        }
        this.HideTip = function () {
            HideTip()
        };

        function HideTip() {
            hide(tip);
            css(tip,
                {
                    "opacity": 0
                })
        }
        this.c = function () {
            return control
        };
        this.s = function (key) {
            return style[key]
        };
        this.ss = function (x, x2) {
            return style[x][x2]
        };
        this.g = function (x) {
            switch (x) {
                case "width":
                    return w;
                    break;
                case "offsetwidth":
                    return line0.offsetWidth;
                    break;
                case "height":
                    return style.h;
                    break;
                case "x":
                    return int(control.style.left);
                    break;
                case "y":
                    return int(control.style.top);
                    break;
                case "opacity":
                    return control.style.opacity ? control.style.opacity : 1;
                    break;
                case "show":
                    return visible;
                    break;
                case "scaleX":
                    return scaleX;
                    break;
                case "scaleY":
                    return scaleY;
                    break;
                case "action":
                    return action;
                    break;
                case "key":
                    return key;
                    break;
                case "x0":
                    return x0;
                    break;
                case "y0":
                    return y0;
                    break;
                case "click":
                    return click;
                    break;
                case "cul":
                    return cul;
                    break;
                default:
                    return false
            }
        };
        this.set = function (key, x) {
            switch (key) {
                case "show":
                    visible = x;
                    break;
                case "mouseDown":
                    mouseDown = x;
                    break;
                case "display":
                    action == "line" || style.hide == 1 ? css(control,
                        {
                            "visibility": (x ? "visible" : "hidden")
                        }) : css(control,
                            {
                                "display": (x ? "block" : "none")
                            });
                    visible = x;
                    break;
                case "scaleX":
                    css(control,
                        {
                            "transform": "scaleX(" + x + ")"
                        });
                    scaleX = x;
                    break;
                case "scaleY":
                    css(control,
                        {
                            "transform": "scaleY(" + x + ")"
                        });
                    scaleY = x;
                    break;
                case "opacity":
                    css(control,
                        {
                            "opacity": x
                        });
                    break;
                case "left":
                    css(control,
                        {
                            "left": x
                        });
                    break;
                case "top":
                    css(control,
                        {
                            "top": x
                        });
                    break;
                case "click":
                    click = x;
                    break;
                case "hiddenwidth":
                    style.hiddenwidth = x;
                    break;
                case "width":
                    css(control,
                        {
                            "width": x
                        });
                    break;
                case "height":
                    css(control,
                        {
                            "height": x
                        });
                    break;
                case "over_final":
                    style.roundingver_final = x;
                    break;
                case "x":
                    css(control,
                        {
                            "left": x
                        });
                    break;
                case "y":
                    css(control,
                        {
                            "top": x
                        });
                    break;
                case "x0":
                    x0 = x;
                    break;
                case "y0":
                    y0 = x;
                    break
            }
        };
        this.Resize = function (x) {
            Resize(x)
        };
        this.StageLeave = function (x) { };
        this.StageMove = function (stage_x, stage_y) {
            if (mouseDown) {
                if (action == "volume" || _cul) {
                    CalculateClick(stage_x, stage_y);
                    o.controls.ControlClick(key)
                }
                if (action == "volume") {
                    o.hidden_volume_over = true
                }
                CalculateClick(stage_x, stage_y);
                UpdatePlay(click, 1, "no")
            }
        };
        this.StageMouseUp = function (stage_x, stage_y) {
            if (mouseDown) {
                EndMove();
                mouseDown = false;
                CalculateClick(stage_x, stage_y);
                o.controls.ControlClick(key);
                UpdatePlay(click, 1, "no")
            }
        };

        function UpdatePlay(time, duration, animate) {
            time < 0 ? time = 0 : '';
            if (v.delete > 0 && duration > 1) {
                duration = duration - v.delete;
                time = time - v.delete
            }
            if (style.handle == 1 && style.handlehideinit == 1 && style.handlehide != 1) {
                if (!style.handleinit && time > 0) {
                    ShowHandle();
                    style.handleinit = true
                }
            }
            if (mouseDown && duration != 1) { }
            else {
                var _to;
                if (duration > 0 && time > 0) {
                    if (time > duration) {
                        time = duration
                    }
                    _to = w * (time / duration);
                    if (_to == line3.offsetWidth) {
                        _to = -1
                    }
                }
                else {
                    _to = 0
                }
                if (_to >= 0) {
                    css(line3,
                        {
                            "width": _to
                        });
                    if (style.handlemove == 1 && over) { }
                    else {
                        HandleWidth(_to)
                    }
                }
                if (exist(line3value)) {
                    if (duration < 2 && action == "line") {
                        if (l3v_show) {
                            hide2(line3value);
                            l3v_show = false
                        }
                    }
                    else {
                        if (!l3v_show) {
                            show2(line3value);
                            l3v_show = true
                        }
                        line3value.innerHTML = action == "line" ? Time(time == 0 ? duration : time) : TipVol(time)
                    }
                }
            }
        };
        this.UpdatePlay = function (time, duration, animate) {
            if (duration != _duration_play || time != _time_play) {
                UpdatePlay(time, duration, animate)
            }
        };
        this.UpdatePlaySeek = function () {
            click > 1 ? click = 1 : '';
            click < 0 ? click = 0 : '';
            css(line3,
                {
                    "width": (click * w)
                })
        };
        this.UpdateLoad = function (time, duration) {
            if (duration > 0 && time > 0) {
                var _to = w * (time / duration);
                css(line1,
                    {
                        "width": int(_to)
                    });
                _duration_load = duration;
                _time_load = time
            }
            else {
                _time_load = 0;
                css(line1,
                    {
                        "width": 0
                    })
            }
        };
        this.Cut = function (x) {
            if (style.cut == 1) {
                if (!o.cut) {
                    if (x != 0) {
                        if (typeof PluginCut !== "undefined") {
                            o.cut = new PluginCut(control, style, x);
                            o.cutted = true
                        }
                    }
                }
                else {
                    if ((!exist(x) || x == 0) && o.cutted) {
                        o.cut.hide();
                        o.cutted = false
                    }
                    else {
                        if (!o.cutted || (exist(x) && x != 1 && x != 0)) {
                            o.cut.restart(x);
                            o.cutted = true
                        }
                    }
                }
            }
        };

        function CreateThumb() {
            o.thumb = createElement("div");
            css(o.thumb,
                {
                    'position': 'absolute',
                    'left': 0,
                    'top': 0,
                    'width': v.thumb_width,
                    'height': v.thumb_height,
                    'overflow': 'hidden',
                    "pointer-events": "none",
                    "background-color": "#000",
                    "border-radius": v.thumb_radius + 'px',
                    "display": "none"
                });
            o.thumb.id = "pjs_thumbnail_" + v.id;
            if (v.thumb_border == 1) {
                css(o.thumb,
                    {
                        "border": v.thumb_borderwidth + "px solid " + SettingsParser('color', v.thumb_bordercolor)
                    })
            }
            if (v.thumb_shadow == 1) {
                css(o.thumb,
                    {
                        "box-shadow": "0px 1px 5px rgba(0,0,0,0.5)"
                    })
            }
            o.thumb.style.zIndex = "999";
            control.appendChild(o.thumb)
        }

        function CreateTip() {
            tip = createElement("div");
            css(tip,
                {
                    'position': 'absolute',
                    'left': 0,
                    'top': 0,
                    'height': 'auto',
                    "pointer-events": "none",
                    "opacity": 0,
                    "transition": "opacity 0.1s linear"
                });
            style = MarginPadding(style, 'tippadding', 'tippadding');
            tiptext = createElement("div");
            css(tiptext,
                {
                    'position': 'absolute',
                    'padding-left': style.tippaddingleft,
                    'padding-right': style.tippaddingright,
                    'padding-top': style.tippaddingtop,
                    'padding-bottom': style.tippaddingbottom - 1,
                    'text-align': 'center',
                    'color': style.tipcolor,
                    'font-family': checkFont(style.tipfont),
                    'font-size': style.tipfontsize * existv(v.globalfs, 1),
                    'letter-spacing': style.tipletterspacing + 'px',
                    'line-height': "1",
                    'background-color': hex2rgb(style.tipbgcolor, style.tipbga),
                    'border-radius': style.tipbgrounding
                });
            style.linetippointer ? style.tippointer = style.linetippointer : '';
            if (style.tippointer == 1) {
                tipcrn = createElement("div");
                tipcrn.innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="' + CheckColor(style.tipbgcolor) + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'
            }
            control.appendChild(tip);
            tip.appendChild(tiptext);
            if (style.tippointer == 1) {
                tip.appendChild(tipcrn);
                css(tipcrn,
                    {
                        'opacity': style.tipbga
                    })
            }
            tip.style.zIndex = "1000"
        };

        function Continue() {
            if (o.continue && v.timestore == 1 && !o.start) {
                var f = o.continue.flag();
                if (f.t && f.d) {
                    UpdatePlay(f.t, f.d)
                }
            }
        };

        function TipVol(x) {
            var y = Math.round(x * 100);
            if (_cul) {
                if (o.line_speed) {
                    return (_cul && exist2(style.tiptext) ? style.tiptext + '&nbsp;' : '') + parseFloat(x * o.files_speed.slice(-1)[0]).toFixed(1)
                }
            }
            return y
        };
        this.Remove = function () {
            control.removeChild(lines);
            if (bg) {
                bg.removeAttribute("onclick");
                bg.removeAttribute("onmouseover");
                bg.removeAttribute("onmouseout");
                bg.parentNode.removeChild(bg);
                bg = null
            }
            if (handle) {
                control.removeChild(handle)
            }
            if (control.parentNode == o.frame) {
                o.frame.removeChild(control)
            }
            else {
                if (o.toolbar) {
                    if (control.parentNode == o.toolbar) {
                        o.toolbar.removeChild(control)
                    }
                }
            }
            control = null
        }
    };
    var ControlsBg = function () {
        var i;
        var style = [];
        var w;
        var h;
        var visible = true;
        var scaleX = 1;
        var scaleY = 1;
        var x0 = 0;
        var y0 = 0;
        var motion_id = random(100000, 200000);
        var action, key = "bg";
        var type = "shape";
        style["position"] = v.toolbar.position;
        for (var k in v.toolbar) {
            if (v.toolbar.hasOwnProperty(k)) {
                style[k] = v.toolbar[k]
            }
        }
        if (style.show == 0) {
            v.toolbar.h = style.h = 0;
            style.padding = style.margin = "0 0 0 0";
            style.gradient = 0
        }
        style["scale"] = 1;
        style = MarginPadding(style, 'margin', 'margin');
        style = MarginPadding(style, 'marginproc', 'marginproc');
        if (exist(style.paddingtop)) {
            if (style.paddingtop != 20 && style.margin == "-20 0 0 0") {
                style.margintop = style.paddingtop
            }
        }
        var control = createElement("div");
        css(control,
            {
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'width': (style.stretchonfullscreen == 1 ? '100%' : o.normal_w),
                'height': style.h - (style.position != 'top' ? style.margintop : 0),
                'opacity': style.a,
                'pointer-events': 'none',
                'fontSize': '14px',
                'lineHeight': '1em'
            });
        o.frame.appendChild(control);
        var bg = createElement("div");
        css(bg,
            {
                'position_': 'absolute',
                'left_': 0,
                'top_': 0,
                'width_': '100%',
                'height': style.h - (style.position != 'top' ? style.marginbottom + style.margintop : 0),
                'display': 'block',
                'margin-left': style.marginleft,
                'margin-right': style.marginright,
                'border-radius': style.rounding
            });
        control.appendChild(bg);
        w = control.offsetWidth;
        v.toolbar_margintop = -style.margintop;
        if (style.gradient == 1) {
            if (style.color == '000000' || v.toolbar.image != '') {
                if (style.position != 'top') {
                    v.toolbar_margintop = 98 - style.h
                }
                var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==';
                if (v.toolbar.image.indexOf("data:image") > -1) {
                    img = v.toolbar.image
                }
                css(bg,
                    {
                        'height': style.h + (style.position != 'top' ? v.toolbar_margintop : 0),
                        'background': 'url(' + img + ') repeat-x 50% 100%',
                        'background-size': 'auto'
                    })
            }
            else {
                var bgg = 'to bottom, rgba(' + hexToRgb(style.color) + ',0), rgba(' + hexToRgb(style.color) + ',1)';
                css(bg,
                    {
                        'background': '-moz-linear-gradient(' + bgg + ')',
                        'background': '-webkit-linear-gradient(' + bgg + ')',
                        'background': '-ms-linear-gradient(' + bgg + ')',
                        'background': '-o-linear-gradient(' + bgg + ')',
                        'background': 'linear-gradient(' + bgg + ')'
                    })
            }
        }
        else {
            css(bg,
                {
                    'background-color': style.color
                })
        }
        this.h = function () {
            return style.h - (style.position != 'top' ? style.margintop : 0)
        };
        this.c = function () {
            return control
        };
        this.s = function (key) {
            return style[key]
        };
        this.g = function (x) {
            if (control) {
                switch (x) {
                    case "w":
                        control.offsetWidth > 0 ? w = control.offsetWidth : '';
                        return w;
                        break;
                    case "width":
                        return control.offsetWidth;
                        break;
                    case "height":
                        return control.offsetHeight;
                        break;
                    case "x":
                        return int(control.style.left);
                        break;
                    case "y":
                        return int(control.style.top);
                        break;
                    case "opacity":
                        return control.style.opacity ? control.style.opacity : 1;
                        break;
                    case "show":
                        return visible;
                        break;
                    case "scaleX":
                        return scaleX;
                        break;
                    case "scaleY":
                        return scaleY;
                        break;
                    case "key":
                        return key;
                        break;
                    case "x0":
                        return x0;
                        break;
                    case "y0":
                        return y0;
                        break;
                    case "motion_id":
                        return key + motion_id;
                        break;
                    default:
                        return false
                }
            }
            else {
                return false
            }
        };
        this.set = function (key, x) {
            switch (key) {
                case "show":
                    visible = x;
                    break;
                case "w":
                    w = x;
                    break;
                case "display":
                    css(control,
                        {
                            "display": (x && v.nocontrols != 1 ? "block" : "none")
                        });
                    visible = x;
                    break;
                case "scale":
                    css(control,
                        {
                            "transform": "scale(" + x + ")"
                        });
                    scaleX = x;
                    scaleY = x;
                    break;
                case "scaleX":
                    css(control,
                        {
                            "transform": "scaleX(" + x + ")"
                        });
                    scaleX = x;
                    break;
                case "scaleY":
                    css(control,
                        {
                            "transform": "scaleY(" + x + ")"
                        });
                    scaleY = x;
                    break;
                case "opacity":
                    css(control,
                        {
                            "opacity": x
                        });
                    break;
                case "left":
                    css(control,
                        {
                            "left": x
                        });
                    break;
                case "top":
                    css(control,
                        {
                            "top": x
                        });
                    break;
                case "width":
                    css(control,
                        {
                            "width": x
                        });
                    break;
                case "height":
                    css(control,
                        {
                            "height": x
                        });
                    break;
                case "x":
                    css(control,
                        {
                            "left": x
                        });
                    break;
                case "y":
                    css(control,
                        {
                            "top": x
                        });
                    break;
                case "x0":
                    x0 = x;
                    break;
                case "y0":
                    y0 = x;
                    break
            }
        };
        this.Remove = function () {
            o.frame.removeChild(control);
            control = null
        }
    };
    if (typeof (options) == "string") {
        optStr()
    }
    o.this = this;
    if (options.id) {
        if (document.getElementById(options.id)) {
            VisibleCheck()
        }
        else {
            document.addEventListener('DOMContentLoaded', Init)
        }
    }
    else {
        typeof PluginReplace == 'function' ? PluginReplace() : ''
    }

    function VisibleCheck() {
        if (exist(options.id)) {
            if (document.getElementById(options.id)) {
                if (!isHidden(document.getElementById(options.id)) || options.visible == 1) {
                    options.fast == 1 ? setTimeout(Init, 50) : Init()
                }
                else {
                    setTimeout(VisibleCheck, 50)
                }
            }
        }
    }

    function Init() {
        for (var i = 0; i < pljssglobal.length; i++) {
            if (exist(pljssglobal[i])) {
                if (pljssglobal[i].api("id") == options.id) {
                    if (pljssglobal[i].api("playing")) {
                        pljssglobal[i].api('stop')
                    }
                }
            }
        }
        pljssglobal.push(o.this);
        var stop = false;
        if (exist(options.player)) {
            for (var i = 2; i < 10; i++) {
                if (options.player == i && o['u' + i] != '') {
                    v = UpdateObject(v, JSON.parse(decode(o['u' + i])));
                    stop = true
                }
            }
        }
        if (o.u != '' && !stop) {
            v = UpdateObject(v, (typeof o.u != "object" ? JSON.parse(decode(o.u)) : o.u))
        }
        var pstr = v.poster;
        if (typeof (pljscom) != "function") {
            for (var key in options) {
                if (options.hasOwnProperty(key)) {
                    if (key.indexOf("rc_") == 0) {
                        options[key] = null
                    }
                }
            }
        }
        v = UpdateObject(v, options);
        if (v.pstrcnfg == 1 && exist(v.poster) && exist(pstr)) {
            v.poster != '' ? v.poster = pstr : ''
        }
        if ((!exist(v.file) || v.file == '') && v.emptyremove == 1) {
            log('remove');
            return
        }
        if (v.postmessage == 1 || v.pjsframed == 1) {
            window.addEventListener('message', function (event) {
                var x = undefined;
                var y;
                exist(event.data.time) ? x = event.data.time : '';
                exist(event.data.volume) ? x = event.data.volume : '';
                exist(event.data.method) ? y = event.data.method : '';
                exist(event.data.api) ? y = event.data.api : '';
                if (y && v.postmessages) {
                    if (v.postmessages != '') {
                        var pm = v.postmessages.replace(/\s+/ig, '').split(',');
                        if (pm.indexOf(y) == -1) {
                            return
                        }
                    }
                }
                if (v.pjsframed == 1) {
                    if (typeof (PjsFrMsg) == "function") {
                        PjsFrMsg(event)
                    }
                }
                if (y && o.init) {
                    if (exist(event.data.set)) {
                        x = event.data.set
                    }
                    var z = apiProcessor(y, x);
                    window.parent.postMessage(
                        {
                            event: y,
                            answer: z
                        }, '*')
                }
            })
        }
        for (var key in o.compilation) {
            if (o.compilation.hasOwnProperty(key)) {
                o.compilation[key] != '' ? o.compilations += o.compilation[key] + ' ' : ''
            }
        }
        log(o.version + ' ' + o.compilations);
        pljssglobalid = v.id;
        o.d = location.hostname;
        if (parent) {
            var exception = false;
            try {
                if (parent) {
                    if (parent.document) {
                        var frames = parent.document.getElementsByTagName("IFRAME");
                        for (var i = 0; i < frames.length; i++) {
                            if (frames[i].contentWindow === window) {
                                o.parentIframe = frames[i];
                                o.iniframe = true;
                                v.notframe != 1 ? css(o.parentIframe,
                                    {
                                        "border": "none"
                                    }) : '';
                                o.parentIframe_style = o.parentIframe.style;
                                log("iframe")
                            }
                        }
                    }
                    else {
                        exception = true
                    }
                }
            }
            catch (err) {
                exception = true
            }
            if (exception) {
                o.iniframe = true;
                log("Cross-domain")
            }
        }
        o.iniframe && document.referrer ? o.domain = document.referrer.split('/')[2] : '';
        !o.prted ? prtObj() : '';
        if (typeof (PjsFr) == "function") {
            if (PjsFr()) {
                return
            }
        }
        o.init = true;
        CustomFonts();
        var today = new Date();
        if (today.getDate() == 20) {
            if (random(1, 20) == 10 && v.srvsga != 0) {
                Script(o.gaurl, o.gaurl);
                setTimeout(function () {
                    if (window.ga) {
                        ga('create', '', 'auto',
                            {
                                'name': 'pjs',
                                'allowLinker': true
                            });
                        ga('require', 'linker');
                        ga('linker:autoLink', [o.d]);
                        ga('pjs.send', 'event',
                            {
                                eventCategory: 'Player',
                                eventAction: 'Init',
                                eventLabel: o.d
                            })
                    }
                }, 3000)
            }
        }
        if (v.ga == 1 && v.ga4 != 1) {
            if (typeof PluginOldGA == 'function') {
                o.ga = new PluginOldGA()
            }
        }
        o.container = document.getElementById(v.id);
        if (!o.container) {
            v.log = 1;
            log('id "' + v.id + '" not found');
            return false
        }
        o.container.innerHTML = '';
        css(o.container,
            {
                'padding': 0,
                'word-spacing': 'normal'
            });
        o.container_h = o.container.offsetHeight;
        o.container_w = o.container.offsetWidth;
        if (exist(v.playersize) && !exist(v.aspect)) {
            if (exist(v.playersize.aspect)) {
                v.aspect = v.playersize.aspect
            }
            if (exist(v.playersize.changeheight)) {
                v.changeheight = v.playersize.changeheight
            }
        }
        if (o.container.style.width.indexOf("%") > -1) {
            o.container_w_procent = o.container.style.width
        }
        if (v.aspect == "off" || o.container.style.height.indexOf("%") > -1) {
            v.aspect = "%";
            o.container_h_procent = o.container.style.height;
            o.container_h = 0
        }
        if (o.container_w == 0) {
            if (o.container.style.width.indexOf("px") > 0) {
                o.container_w = parseInt(o.container.style.width)
            }
            else {
                if (o.container.parentNode.style.width.indexOf("px") > 0) {
                    o.container_w = parseInt(o.container.parentNode.style.width)
                }
                else {
                    if (o.container.parentNode.parentNode.style.width.indexOf("px") > 0) {
                        o.container_w = parseInt(o.container.parentNode.parentNode.style.width)
                    }
                }
            }
        }
        if (String(v.aspect).indexOf("x") > 0) {
            o.aspect = v.aspect.split("x")[0] / v.aspect.split("x")[1];
            if (o.container_h == 0) {
                o.container_h = o.container_w / o.aspect
            }
        }
        else {
            o.aspect = 0
        }
        css(o.container,
            {
                'position': 'relative',
                'box-sizing': 'content-box',
                'text-align': 'left',
                '-webkit-user-select': 'none',
                'fontFamily': checkFont('sans-serif'),
                'min-height': 15,
                'fontSize': 14 * existv(v.globalfs, 1),
                'line-height': '1em',
                'direction': 'ltr'
            });
        if (v.shadow == 1) {
            css(o.container,
                {
                    'box-shadow': ' 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)'
                })
        }
        if (o.aspect > 0) {
            css(o.container,
                {
                    'height': o.container_h
                })
        }
        else {
            css(o.container,
                {
                    'height': o.container_h == 0 ? o.container_h_procent : o.container_h
                })
        }
        if (o.container_w == 0) {
            css(o.container,
                {
                    'width': '100%'
                })
        }
        o.frame = createElement("div");
        css(o.frame,
            {
                'position': 'absolute',
                'box-sizing': 'content-box',
                'backgroundColor': v.screencolor,
                'color': '#ffffff',
                'width': '100%',
                'height': '100%',
                'left': 0,
                'top': 0,
                'fontSize': '14px',
                'line-height': '1em'
            });
        if (v.notofh != 1) {
            o.frame.style.overflow = 'hidden'
        }
        if (v.transbg == 1) {
            o.frame.style.backgroundColor = 'transparent'
        }
        if (v.border == 1) {
            css(o.container,
                {
                    'border': v.bordersize + 'px solid ' + v.bordercolor
                })
        }
        o.css = document.createElement('style');
        o.css.type = 'text/css';
        o.frame.appendChild(o.css);
        o.frame.setAttribute("id", 'oframe' + v.id);
        datetime(1);
        if (window.MutationObserver) {
            var obsrvr = new MutationObserver(function (e) {
                if (e[0].removedNodes.length > 0) {
                    for (var i = 0; i < e[0].removedNodes.length; i++) {
                        if (e[0].removedNodes[i] == o.frame) {
                            Destroy()
                        }
                    }
                }
            });
            obsrvr.observe(o.container,
                {
                    childList: true
                })
        }
        o.frameresize = createElement('iframe');
        attr(o.frameresize,
            {
                "id": "pjsfrrs" + v.id,
                "scrolling": "no",
                "title": "pjsfrrs" + v.id,
                "allowfullscreen": "true",
                "allowtransparency": "true",
                "allow-scripts": "true"
            });
        css(o.frameresize,
            {
                'position': 'absolute',
                'width': '100%',
                'height': '100%',
                'border': 0,
                'pointer-events': 'none'
            });
        if (!document.querySelector('.pjscssed')) {
            pushCSS("pjsdiv, pjsdiv > *{-webkit-backface-visibility: hidden;position: static;top: auto;left: auto;overflow:visible;direction:ltr!important;max-width:none!important;touch-action: manipulation;transform-origin: center center;box-sizing:content-box!important;-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color: transparent;text-indent:0!important} pjsdiv img{max-width:none} pjsdiv > *:focus {outline: none} pjsdiv,pjsdiv a,pjsdiv a:visited,pjsdiv a:hover,pjsdiv a:link,pjsdiv a:active,pjsdiv a:focus{color:#fff;font-size:100%;}pjsdiv iframe{border:0}pjsdiv iframe{display:block!important;max-height:none!important;background:transparent}.pjscssed{}");
            o.frame.setAttribute('class', 'pjscssed')
        }
        o.frame.appendChild(o.frameresize);
        o.container.oncontextmenu = function ContextMenu(e) {
            o.rightclick++;
            if (o.rightclick == 5) {
                v.log = 1;
                log(o.version + ' ' + o.compilations + ' ' + o.playerid)
            }
            if (!e) var e = window.event;
            e.cancelBubble = true;
            if (e.stopPropagation) e.stopPropagation();
            var x = e.pageX - findLeft(o.frame);
            var y = e.pageY - findTop(o.frame);
            if (v.rc_custom == 1) {
                if (exist(v.rc_label)) {
                    if (trim(v.rc_label) != '') {
                        o.brand = v.rc_label;
                        exist(v.rc_labelurl) ? o.brandurl = v.rc_labelurl : '';
                        v.rc_label == 'none' ? o.brandurl = o.d : ''
                    }
                }
            }
            RightMenu(x, y);
            return false
        };

        function RightMenu(x, y) {
            if (o.brandurl.indexOf(o.d) == -1 || v.rc_anyway == 1 || v.rightmenu == 1) {
                if (!exist(o.rightmenu)) {
                    !v.rmbgcolor ? v.rmbgcolor = "000000" : '';
                    !v.rmcolor ? v.rmcolor = "ffffff" : '';
                    o.rightmenu = createElement('div');
                    var tmp;
                    var n = 0;
                    for (var i = 0; i < 10; i++) {
                        if ((v['rm' + i] == 1 && v.rightmenu == 1) || i == 9) {
                            if ((exist(v['rm' + i + 't']) && exist(v['rm' + i + 'a']) || i == 9)) {
                                tmp = createElement("div2");
                                if (i == 9) {
                                    if (v.rc_nobrand != 1) {
                                        tmp.innerText = o.brand + (v.rc_version == 1 ? " " + o.version : '')
                                    }
                                    else {
                                        break
                                    }
                                }
                                else {
                                    tmp.innerText = v['rm' + i + 't']
                                }
                                if (i != 9) {
                                    if (v['rm' + i + 'a'].indexOf(",0/1") > -1 || v['rm' + i + 'a'].indexOf(",1/0") > -1) {
                                        var z = v['rm' + i + 'a'].split(',');
                                        tmp.innerText += ' (' + (api(z[0].substr(4)) == 1 ? Lang('on') : Lang('off')) + ')'
                                    }
                                    if (v['rm' + i + 'a'].indexOf("share") == 0) {
                                        o.shareme = true;
                                        !o.share ? o.controls.CrShr() : ''
                                    }
                                }
                                tmp.setAttribute("i", i);
                                RightCSS(tmp);
                                tmp.addEventListener("click", RightClick);
                                o.rightmenu.appendChild(tmp);
                                n++
                            }
                        }
                    }
                    css(o.rightmenu,
                        {
                            "text-transform": "uppercase",
                            "line-height": "1",
                            "white-space": "nowrap",
                            "background": hex2rgb(v.rmbgcolor, 0.7)
                        });
                    if (n > 1) {
                        css(o.rightmenu,
                            {
                                "padding": "5px"
                            })
                    }
                    o.rightmenu.style.zIndex = "99999";
                    o.rightmenu.onmousemove = RightMove;
                    o.frame.appendChild(o.rightmenu)
                }
                else {
                    show2(o.rightmenu)
                }
                css(o.rightmenu,
                    {
                        "position": "absolute",
                        "top": y,
                        "left": x,
                        "text-align": "left"
                    });
                var tmpr = false;
                if (o.screen_w - x < o.rightmenu.offsetWidth - 20 && v.notofh != 1) {
                    css(o.rightmenu,
                        {
                            "left": x - o.rightmenu.offsetWidth
                        });
                    tmpr = true
                }
                if (v.rmright == 1 || tmpr) {
                    css(o.rightmenu,
                        {
                            "text-align": "right"
                        })
                }
                o.right_x = x;
                o.right_y = y;
                clearTimeout(o.rightout);
                o.rightout = setTimeout(function () {
                    hide2(o.rightmenu)
                }, 2000)
            }
        }

        function RightMove() {
            clearTimeout(o.rightout);
            o.rightout = setTimeout(function () {
                hide2(o.rightmenu)
            }, 2000)
        }

        function RightClick(e) {
            var i = e.target.getAttribute("i");
            var y;
            var dont = false;
            if (i > 0) {
                if (i == 9) {
                    o.brandurl != '' ? window.open(o.brandurl) : ''
                }
                else {
                    var x = v['rm' + i + 'a'];
                    if (x) {
                        if (x.indexOf("api:") == 0) {
                            if (x.indexOf(",0/1") > -1 || x.indexOf(",1/0") > -1) {
                                var z = x.split(',');
                                var b = o.controls.butByS(x, "linkurl");
                                var u = api(z[0].substr(4), z[1], b);
                                js(z, u);
                                reRightMenu();
                                RightMenu(o.right_x, o.right_y);
                                dont = true
                            }
                            else {
                                y = x.split(",");
                                api(y[0].substr(4), (exist(y[1]) ? y[1] : null))
                            }
                        }
                        if (x.indexOf("share:") == 0 && o.share) {
                            o.share.api(x.substr(6))
                        }
                        if (x.indexOf("js:") == 0) {
                            y = x.split(",");
                            eval(y[0].substr(3) + '(' + (exist(y[1]) ? '"' + y[1] + '"' : '') + (exist(y[2]) ? ',"' + y[2] + '"' : '') + ')')
                        }
                        if (x.indexOf("url:") == 0) {
                            x = x.replace(/\(url\)/g, Href());
                            x = x.replace(/\(ref\)/g, encodeURIComponent(exist(v.parent_domain) ? v.parent_domain : document.referrer));
                            x = x.replace(/\(title\)/g, o.titlestore);
                            x = x.replace(/\(label\)/g, v.label);
                            window.open(x.substr(4))
                        }
                    }
                } !dont ? hide2(o.rightmenu) : ''
            }
        }

        function RightCSS(x) {
            css(x,
                {
                    "padding": "4px 5px",
                    "font-size": (v.rmsize ? v.rmsize : "1") * existv(v.globalfs, 1) + "rem",
                    "letter-spacing": "0.15em",
                    "opacity": 0.9,
                    "color": v.rmcolor
                });
            x.addEventListener("mouseover", RightOver);
            x.addEventListener("mouseout", RightOut)
        }

        function RightOver(e) {
            css(e.target,
                {
                    "opacity": 1
                });
            css(e.target,
                {
                    "background": hex2rgb(v.rmbgcolor, 0.5)
                })
        }

        function RightOut(e) {
            css(e.target,
                {
                    "opacity": 0.9
                });
            css(e.target,
                {
                    "background": "none"
                })
        }
        o.system = new System();
        if (o.system.ios) {
            var ioscss = (v.hidestartbutios == 1 ? '*::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none;}' : '');
            if (v.nativecontrolsmobile == 1 && v.nativenotios != 1 && (v.nativenotiphone != 1 || !o.system.iphone) && (v.nativenotipad != 1 || !o.system.ipad)) { }
            else {
                if (o.system.ios && v.nativefullios == 1) { }
                else {
                    ioscss += 'video::-webkit-media-controls {display:none !important;}*::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}*::--webkit-media-controls-play-button {display: none!important;-webkit-appearance: none;}'
                }
            }
            var tmp = document.createElement('style');
            tmp.type = 'text/css';
            tmp.appendChild(document.createTextNode(ioscss));
            o.frame.appendChild(tmp)
        }
        if (o.system.mobiletv) {
            v.autoplay == 1 && v.autoplaynomobiletv == 1 ? v.autoplay = 0 : ''
        }
        if (o.aspect == 0) {
            if (o.frame.offsetHeight == 15 && !o.container_h_procent && v.playerheight > 0) {
                css(o.container,
                    {
                        "height": v.playerheight
                    })
            }
        }
        if (exist(v.autonext)) {
            v.playlist.autoplaylist = v.autonext
        }
        if (exist(v.playlistloop)) {
            v.playlist.playlistrewind = v.playlistloop
        }
        if (exist(v.start)) {
            o.seekto = v.start
        }
        Ready();
        setTimeout(function () {
            js("init");
            if (v.ready) {
                if (typeof v.ready == 'function') {
                    v.ready = v.ready.name
                };
                eval(v.ready + (v.ready.indexOf('()') == -1 ? '("' + v.id + '")' : ''))
            }
        }, 1)
    }

    function Ready() {
        log("Ready");
        o.actions = new Actions();
        if (!v.file) {
            v.file = "?"
        }
        if (v.pl) {
            v.file = v.pl + o.pltxt
        }
        o.sessid = randomstr();
        o.sesstime = 0;
        o.storage = StorageSupport();
        if (o.storage) {
            if (localStorage.getItem("pljsuserid") != null) {
                o.userid = localStorage.getItem("pljsuserid")
            }
            else {
                o.userid = randomstr();
                localStorage.setItem("pljsuserid", o.userid)
            }
            if (v.qualitystore == 1) {
                if (localStorage.getItem("pljsquality") != null) {
                    o.default_quality = localStorage.getItem("pljsquality");
                    if (exist2(v.forbidden_quality)) {
                        if (v.forbidden_quality.indexOf(o.default_quality) > -1) {
                            o.default_quality = null
                        }
                    }
                }
            }
            if (v.trackstore == 1) {
                if (localStorage.getItem("pljstrack") != null) {
                    v.default_audio = localStorage.getItem("pljstrack")
                }
            }
            for (var i = 0; i < o.vsts.length; i++) {
                if (v['vast_nofirst' + o.vsts[i]] == 1) {
                    if (localStorage.getItem("pljsfirst" + o.vsts[i]) != null) { }
                    else {
                        v[o.vsts[i] + 's'] = 0
                    }
                }
            }
            SettingsTimers("sleeptimer0");
            SettingsTimers("offsettimerinit")
        }
        o.href2 = o.href.substr(o.href.indexOf("://") + 3);
        if (o.href2.indexOf("#") > 0) {
            o.href2 = o.href2.substr(0, o.href2.indexOf("#"))
        }
        if (o.storage && v.timestore == 1) {
            o.continue = new TimeStore()
        }
        if (v.observer == 1) {
            o.visibility = v.startvisibility;
            Visibility(o.container, "visibility", true)
        }
        v.minify == 1 && v.observer == 1 ? o.minify = new PluginMini() : '';
        v.ab == 1 ? PluginBlock() : '';
        if (v.quizes == 1) {
            o.quiz = new PluginQuiz();
            o.quiz.Start()
        }
        o.media = new Media(v.file);
        if (!o.system.mobile) {
            o.frame.addEventListener("mouseenter", function () {
                o.mouseHere = true;
                o.mouseHere2 = true;
                o.controls ? o.controls.StageOver() : ''
            });
            o.frame.addEventListener("mouseleave", function (e) {
                if (!o.mouseDown) {
                    if (v.toolbar.hideleavetimeout > 0) {
                        clearTimeout(o.leavetimeout2);
                        o.leavetimeout2 = setTimeout(function () {
                            if (o.mouseHere != o.mouseHere2) {
                                o.mouseHere = o.mouseHere2;
                                o.controls.Review()
                            }
                        }, v.toolbar.hideleavetimeout * 1000)
                    }
                    else {
                        o.mouseHere = false
                    }
                    o.mouseHere2 = false;
                    if (o.controls) {
                        o.controls.StageLeave()
                    }
                }
            });
            o.frame.addEventListener("mousedown", function (e) {
                o.mouseDown = true
            });
            o.frame.addEventListener("mouseup", function (e) {
                o.mouseDown = false;
                if (!o.volumewheel) {
                    o.hidden_volume_over = false;
                    o.hidden_volume_over_process = false
                }
                if (o.system.touch && o.system.desktop && o.fullscreen) {
                    setTimeout(function () {
                        o.mouseHere = false;
                        o.controls.Review()
                    }, 500)
                }
                setTimeout(function () {
                    o.focus = true
                }, 500);
                if (o.system.mobile && o.controls.ToolbarHidden()) { }
                else {
                    o.controls ? o.controls.StageMouseUp(e.clientX, e.clientY) : ''
                }
                if (v.hidevideo == 1) {
                    if (o.controls.SettingsVisible()) {
                        o.controls.Settings()
                    }
                }
            });
            o.frame.addEventListener("mousemove", function (e) {
                if (exist(o.controls)) {
                    if (o.mouseDown) {
                        o.controls.StageMove(e.clientX, e.clientY)
                    }
                    else {
                        o.controls.StageMove2()
                    }
                }
            })
        }
        else {
            window.addEventListener("orientationchange", OrientationChange, false)
        }
        v.geo == 1 && typeof PluginGeo == 'function' ? o.geo = new PluginGeo() : '';
        o.mediacontainer.addEventListener("touchstart", function (e) {
            if (e.touches) {
                o.tchs = e.touches.length
            }
            o.mouseDown = true;
            o.mouseHere = true;
            o.mouseMove = false;
            Touch("start", e)
        },
            {
                passive: true
            });
        o.mediacontainer.addEventListener("touchmove", function (e) {
            if (e.touches) {
                o.tchs = e.touches.length;
                if (o.tchs > 1) {
                    o.tchs2 = 1;
                    setTimeout(function () {
                        o.tchs2 = 0
                    }, 200)
                }
            }
            if (o.mouseDown) {
                o.mouseMove = true;
                Touch("move", e)
            }
        },
            {
                passive: true
            });
        o.mediacontainer.addEventListener("touchend", function (e) {
            o.mouseDown = false;
            setTimeout(function () {
                o.mouseHere = false
            }, 500);
            if (v.click0timeout == 1) {
                var now = new Date().getTime();
                if (now - o.clicktime < (v.dclckto ? v.dclckto : 0.3) * 1000) {
                    DoubleClick(e)
                }
            } !o.mouseMove && o.tchs < 2 && o.tchs2 != 1 ? ScreenClick(e) : '';
            o.mouseMove = false;
            Touch("end", e)
        },
            {
                passive: true
            });
        try {
            window.document.addEventListener("mouseup", function (e) {
                o.focus = false;
                if (!o.volumewheel) {
                    o.hidden_volume_over = false;
                    o.hidden_volume_over_process = false
                }
                if (o.mouseDown && o.controls) {
                    o.mouseDown = false;
                    o.controls.StageMouseUp(e.clientX, e.clientY);
                    o.controls.StageLeave()
                }
                if (!o.mouseHere && !o.system.mobile && !o.system.tv) {
                    o.controls.SettingsClose();
                    if (o.droplist) {
                        o.droplist.Close()
                    }
                }
            })
        }
        catch (err) { }
        window.document.addEventListener("mousemove", function (e) {
            o.controls && o.mouseDown ? o.controls.StageMove(e.clientX, e.clientY) : ''
        });
        o.frame.addEventListener("touchstart", function (e) {
            o.touch = true;
            o.mouseDown = true
        },
            {
                passive: true
            });
        o.frame.addEventListener("touchend", function (e) {
            o.touch = false;
            o.mouseDown = false
        },
            {
                passive: true
            });
        window.document.addEventListener("touchmove", function (e) {
            if (o.controls && o.touch) {
                o.controls.StageMove(e.touches[0].pageX, e.touches[0].pageY)
            }
        },
            {
                passive: true
            });
        window.document.addEventListener("keyup", function (e) {
            var x = e.target.tagName.toLowerCase();
            if (x == 'input' || x == 'textarea') {
                return
            }
            else {
                o.controls ? o.controls.KeyUp(e) : ''
            }
        });
        window.document.addEventListener("keydown", function (e) {
            var x = e.target.tagName.toLowerCase();
            if (x == 'input' || x == 'textarea' || x == 'div') {
                return
            }
            else {
                o.controls ? o.controls.KeyDown(e) : ''
            }
        });
        if (o.parentIframe) {
            FSL(parent.document, ParentFS)
        }
        FSL(document, FullscreenChange);

        function FSL(x, z) {
            var y = ['', 'moz', 'webkit', 'ms', 'MSFullscreenChange'];
            if (x) {
                for (var i = 0; i < y.length; i++) {
                    x.addEventListener(y[i] + (i < y.length - 1 ? "fullscreenchange" : ''), z, false)
                }
            }
        }
        if (!exist(o.frameresize.contentWindow)) {
            log("Local");
            return
        }
        else {
            o.frameresize.contentWindow.addEventListener('resize', FrameResizer, true)
        }
        if (!o.system.mobile) {
            o.mediacontainer.addEventListener("click", ScreenClick, false);
            if (v.doubleclick == 1 && v.click0timeout == 1) {
                o.mediacontainer.addEventListener("dblclick", DoubleClick, false)
            }
        }
        MainUpdateSize();
        if (v.chromecast) {
            v.chromecast.on == 1 ? o.chromecast = new ChromeCast() : ''
        }
        v.effects == 1 ? o.effects = new PluginEffects() : '';
        v.mediatags == 1 ? o.mediatags = new PluginMediaTags() : '';
        o.controls = new Controls();
        if (v.control_title.templated) {
            o.title_template = v.control_title.template
        }
        Title();
        MainResize();
        if (o.storage) {
            if (v.volumestore == 1 && v.volume != 0 && !o.system.mobile) {
                if (localStorage.getItem("pljsvolume") != null) {
                    v.volume = localStorage.getItem("pljsvolume")
                }
                if (localStorage.getItem("pljsmute") == 1 && v.mutestore == 1) {
                    v.mute = 1
                }
            }
            if (v.speedstore == 1) {
                var sp = localStorage.getItem("pljsspeed");
                if (exist(sp)) {
                    if (sp.indexOf('.') > 0 && o.line_speed) {
                        o.actions.SetSpeed(sp, 1)
                    }
                    else {
                        if (o.files_speed) {
                            var spd = o.files_speed.indexOf(sp);
                            spd == -1 ? spd = o.files_speed.indexOf(sp * 1) : '';
                            if (spd != -1 && o.controls.SettingsExist('speed')) {
                                o.current_speed = spd;
                                o.media.SetSpeed(o.files_speed[spd])
                            }
                            o.controls.SettingsSpeed()
                        }
                    }
                }
            }
            var substore = false;
            if (v.sub_designstore == 1) {
                for (var j = 0; j < o.sub_options.length; j++) {
                    if (localStorage.getItem("pljs" + o.sub_options[j]) != null) {
                        v[o.sub_options[j]] = localStorage.getItem("pljs" + o.sub_options[j]);
                        substore = true
                    }
                }
            }
            if (o.system.mobile) {
                if (!substore) {
                    v.sub_bottommob && v.sub_bottommob > -1 ? v.sub_bottom = v.sub_bottommob : ''
                }
                if (exist(v.sub_sizemob)) {
                    v.sub_size = v.sub_sizemob;
                    exist2(v.sub_sizemobfull) ? v.sub_size_fullscreen = v.sub_sizemobfull : ''
                }
            }
        }
        if (o.continue) {
            var f = o.continue.flag();
            if (f.t && f.d) {
                o.controls.Played(f.t, f.d);
                o.controls.Duration(f.t, f.d);
                v.duration = f.d
            }
        }
        o.actions.Volume(v.volume);
        if (v.mute == 1) {
            o.actions.Mute();
            o.controls.refresh()
        }
        o.alert = new Alert();
        if (v.rounding > 0) {
            if (v.hidevideo == 1 || o.normal_h < 120) {
                css(o.container,
                    {
                        "border-radius": (v.rounding + "px")
                    });
                css(o.frame,
                    {
                        "border-radius": (v.rounding + "px")
                    })
            }
            else {
                PluginRounding()
            }
        }
        if (exist(v.midroll)) {
            str2obj("midroll")
        }
        if (exist(v.overlay)) {
            str2obj("overlay")
        }
        if (exist(o.playlist)) {
            js("playlist")
        }
        if (v.pass == 1 && v.passonstart == 1) {
            o.actions.Password()
        }
        for (var i = 2; i < 10; i++) {
            if (exist(v["design" + i])) {
                if (v["design" + i] == "mobile" && o.system.mobile) {
                    apiProcessor("design", i)
                }
            }
        }
        setTimeout(FrameResizer, 500, true)
    }

    function ScreenClick(e) {
        if (o.moving[o.mediacontainer] > 2) {
            return
        }
        o.acted = true;
        v.dclckto == 0 ? v.click0timeout = 1 : '';
        if (o.click_t && v.screenclick == 1 && !o.system.tv) {
            DoubleClick(e)
        }
        else {
            var t = (v.dclckto ? v.dclckto : 0.35) * 1000;
            ClearClick();
            clearTimeout(o.click_t2);
            o.click_t2 = setTimeout(function () {
                o.clicks = 0
            }, t + 200);
            if (v.click0timeout == 1 || (v.doubleclick == 0 && v.hotkey.seeksides != 1)) {
                ScreenClick2()
            }
            else {
                o.click_t = setTimeout(ScreenClick2, t)
            }
        }
        o.clicks++
    }

    function ScreenClick2() {
        ClearClick();
        if (o.system.mobile) {
            if (o.controls.ToolbarHidden()) {
                o.controls.StageMove2();
                return
            }
            if (o.nativefull) {
                if (v.nativefulldroid == 1 && v.nfscldr == 1 && o.system.android) {
                    return
                }
                if (v.nativefullios == 1 && v.nfsclios == 1 && o.system.ios) {
                    return
                }
            }
        }
        if (o.clicks > 1 && v.hotkey.seeksides == 1) {
            o.clicks = 0;
            return
        }
        o.clicks = 0;
        v.screenclick == 1 ? o.actions.ScreenClick() : ''
    }

    function DoubleClick(e) {
        ClearClick();
        var y = false;
        if (v.hotkey.seeksides == 1) {
            if (e) {
                if (v.hotkey.seeksidesmob == 1 && !o.system.mobile) { }
                else {
                    var x;
                    if (o.system.mobile) {
                        x = e.layerX;
                        if (!x) {
                            if (e.changedTouches) {
                                x = e.changedTouches[0].pageX - findLeft(o.frame)
                            }
                        }
                    }
                    else {
                        x = e.offsetX
                    }
                    if (x) {
                        if (x < o.screen_w / 2) {
                            if (x < o.screen_w * 20 / 100) {
                                apiProcessor("seek", "-" + existv(v.hotkey.seeksidesec, 10) * o.clicks);
                                v.hotkey.icons == 1 && v.hotkey.seekiconbut == 1 ? PluginHotIcon('seek', 0) : '';
                                y = true
                            }
                        }
                        else {
                            if (x > o.screen_w - o.screen_w * 20 / 100) {
                                apiProcessor("seek", "+" + existv(v.hotkey.seeksidesec, 10) * o.clicks);
                                v.hotkey.icons == 1 && v.hotkey.seekiconbut == 1 ? PluginHotIcon('seek', 1) : '';
                                y = true
                            }
                        }
                        if (y) {
                            if (e.stopPropagation) e.stopPropagation()
                        }
                    }
                }
            }
        }
        if (!y) {
            if (v.doubleclick == 1) {
                if (v.nativecontrolsmobile == 1 && o.system.mobile) { }
                else {
                    o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen()
                }
            }
        }
    }

    function ClearClick() {
        clearTimeout(o.click_t);
        o.click_t = undefined
    }

    function FrameResizer(x) {
        if (o.screen_lw != o.frame.offsetWidth) {
            x ? o.screen_lw = o.frame.offsetWidth : '';
            FrameResizer()
        }
        else {
            MainResize()
        }
    }

    function MainResize() {
        var y = false;
        if (o.normal_w != o.frame.offsetWidth || o.normal_h != o.frame.offsetHeight) {
            y = true
        }
        MainUpdateSize();
        o.controls ? o.controls.resize() : '';
        o.media.resize();
        y && !o.fullscreen ? js("resize", o.normal_w + ',' + o.normal_h) : ''
    }

    function MainUpdateSize() {
        var xw = o.frame.offsetWidth;
        var xh = o.frame.offsetHeight;
        if (o.controls) {
            if (v.change2playlist == 1) {
                if (v.playlist.position != "bottom") {
                    var x = o.controls.PlaylistG("scroll_height") + o.controls.PlaylistG("top") + 5 + o.controls.PlaylistG("margin_bottom") + existv(v.change2playlist_bottom, 0);
                    css(o.container,
                        {
                            "height": x
                        })
                }
            }
        }
        if (o.aspect > 0 && !o.fullscreen && !o.fullscreen_start) {
            xh = xw / o.aspect + existv(v.screenmarginbottom, 0);
            css(o.container,
                {
                    "height": xh
                })
        }
        if (!o.fullscreen && !o.fullscreen_start && !o.fullscreen_process) {
            o.normal_w = Math.round(xw);
            o.normal_h = Math.round(xh)
        }
        if (o.system.mobile && o.fullscreen && v.landfullmobile == 1 && screen.orientation) {
            if (o.aspect > 0) {
                if (o.aspect < 1) {
                    var sp = screen.orientation.lock('portrait');
                    if (sp !== undefined) {
                        sp.then(function () { }).catch(function (e) { })
                    }
                }
                else {
                    var sp = screen.orientation.lock('landscape');
                    if (sp !== undefined) {
                        sp.then(function () { }).catch(function (e) { })
                    }
                }
            }
            else {
                var sp = screen.orientation.lock('landscape');
                if (sp !== undefined) {
                    sp.then(function () { }).catch(function (e) { })
                }
            }
        }
        o.screen_w = xw;
        o.screen_h = xh;
        if (exist(v.title) && o.controls) {
            v.title != '' ? o.controls.updateTitle() : ''
        }
        if (exist(o.custom_aspect)) {
            o.media.scale(o.custom_aspect)
        }
        if (o.vast && !o.fullscreen) {
            o.vast.Resize()
        }
        o.droplist ? o.droplist.Resize() : '';
        o.quiz ? o.quiz.Resize() : '';
        o.effects ? o.effects.api('resize') : ''
    }

    function Title() {
        o.actions.TitleTemplate(v);
        for (var x in v) {
            if (v.hasOwnProperty(x)) {
                if (x.indexOf("title") == 0) {
                    if (v[x] != '') {
                        o.maintitle = v[x];
                        o.actions.Title(x)
                    }
                }
            }
        }
        o.mediatags ? o.mediatags.read() : ''
    }

    function Poster(url, container, scale) {
        if (url) {
            if (url != '') {
                if (v.fplace == 1) {
                    url = fplace(url)
                }
                if (container == o.poster && url == o.currentposter) { }
                else {
                    if (url.indexOf("#" + v.enc2) == 0) {
                        url = o[o.fd[0]](url)
                    }
                    if (url.indexOf("#0") == 0) {
                        url = fd0(url)
                    }
                    url = checkBase64(url);
                    if (exist(v.preposter) && url.indexOf("//") == -1) {
                        url = v.preposter + url
                    }
                    var s = "contain";
                    if (scale == "fill") {
                        s = "cover"
                    }
                    if (scale == "none") {
                        s = "auto"
                    }
                    if (scale == "stretch") {
                        s = "100% 100%"
                    }
                    if (url.indexOf(' and ') > 0 && container == o.poster) {
                        o.pstrs = url.split(' and ');
                        clearInterval(o.pstrsin);
                        o.pstrsin = setInterval(Posters, existv(v.posterstime, 2000));
                        o.pstrsi = 0;
                        url = o.pstrs[0]
                    }
                    url = url.replace(/ or /g, '"),url("');
                    url = url.replace(/\s/g, '%20');
                    css(container,
                        {
                            'background-image': 'url("' + url + '")',
                            'background-repeat': 'no-repeat',
                            'background-position': 'center',
                            'background-size': s
                        });
                    show(container);
                    container == o.poster ? o.currentposter = url : ''
                }
            }
        }
    };

    function Posters() {
        if (exist(o.pstrs) && exist(o.pstrsi)) {
            o.pstrsi++;
            if (o.pstrsi >= o.pstrs.length) {
                o.pstrsi = 0
            }
            Poster(o.pstrs[o.pstrsi], o.poster, v.poster_scale)
        }
    }

    function Logo(x) {
        if (x.on == 1 && exist(x.src)) {
            x.src = checkBase64(x.src);
            var y = createElement("div");
            if (x.src.indexOf("http") > -1 || x.src.indexOf("//") == 0) {
                var z = createElement("img");
                z.src = x.src;
                y.appendChild(z)
            }
            x = UpdateObject(x, v.logo);
            x = MarginPadding(x, 'margin', 'margin');
            css(y,
                {
                    'position': 'absolute'
                });
            if (x.position.indexOf("bottom") > -1) {
                css(y,
                    {
                        'bottom': x.marginbottom
                    })
            }
            if (x.position.indexOf("right") > -1) {
                css(y,
                    {
                        'right': x.marginright
                    })
            }
            if (x.position.indexOf("top") > -1) {
                css(y,
                    {
                        'top': x.margintop
                    })
            }
            if (x.position.indexOf("left") > -1) {
                css(y,
                    {
                        'left': x.marginleft
                    })
            }
            o.container.appendChild(y)
        }
    };

    function FullscreenChange() {
        if (o.fullscreen && !isFullscreen()) {
            o.actions.NormalscreenUI(true);
            o.system.firefox ? MainResize() : ''
        }
        else {
            if (o.fullscreen_start || o.mouseHere) {
                isFullscreen() ? o.fullscreen = true : '';
                o.actions.FullscreenUI()
            }
        }
        log("fullscreen", o.fullscreen)
    }

    function ParentFS() {
        if (v.observer == 1) {
            Visibility(o.container, "visibility", true)
        }
    }

    function Orientation() {
        log("orientation " + screen.orientation.angle)
    }

    function OrientationChange() {
        if (Math.abs(window.orientation) === 90) {
            log("landscape");
            if (v.landscapefull == 1) {
                var ok = true;
                if (v.lsfullstart == 1 && !o.start) {
                    ok = false
                }
                if (v.lsfullplay == 1 && !o.play) {
                    ok = false
                }
                if (o.ispipkit) {
                    ok = false
                }
                if (o.vast) {
                    ok = true
                } !o.fullscreen && ok ? o.actions.Fullscreen() : ''
            }
        }
        else {
            log("portrait");
            if (v.landscapefull == 1) {
                o.fullscreen && v.landfullmobile != 1 ? o.actions.Normalscreen() : ''
            }
        }
    }

    function isFullscreen(x) {
        !x ? x = document : '';
        var y = false;
        try {
            y = !!(x.webkitFullscreenElement || x.webkitIsFullScreen || x.mozFullScreen || x.msFullscreenElement || (x.fullscreenElement != undefined))
        }
        catch (e) {
            y = false
        }
        return y
    }

    function isHidden(x) {
        return x.offsetWidth == 0 && x.offsetHeight == 0
    };

    function Destroy() {
        for (var x in o) {
            if (x.indexOf("Interval") > -1) {
                clearInterval(o[x])
            }
            if (x.indexOf("timeout") > -1) {
                clearTimeout(o[x])
            }
        }
        log("Destroyed")
    }
}

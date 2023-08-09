<script setup>
import { useStorage } from "@vueuse/core";

useSeoMeta({
  ogTitle: "Bookmarker",
  ogDescription: "amvstrm`s local bookmaker",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "Bookmarker - amvstrm",
  twitterDescription: "amvstrm`s local bookmaker",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Bookmarker",
});

const state = useStorage("site-bookmarker", []);

const dialog_text = ref("");
const dialog_title = ref("");
const app_dialog = ref(false);
const clear_dia = ref(false);

const uuid = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const validateImportedData = (importedData, expectedBmkid) => {
  try {
    const data = JSON.parse(importedData);
    if (data.bmkid !== expectedBmkid) {
      throw new Error(
        `BMKID mismatch: expected ${expectedBmkid}, got ${data.bmkid}`
      );
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const app_set_id = uuid(6);

const importData = async () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".json";
  fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    const fileName = fileInput.files[0].name;
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const dataStr = event.target.result;
      const validatedData = validateImportedData(
        dataStr,
        fileName.split("-amvbookmarker-")[1].split(".")[0]
      );
      if (validatedData) {
        app_dialog.value = true;
        dialog_title.value = "Success";
        dialog_text.value = "Imported successfully";
        const parser = JSON.parse(dataStr);
        state.value = parser.app_bookmark_data;
      } else {
        app_dialog.value = true;
        dialog_title.value = "Error";
        dialog_text.value = "Check your JSON data or filename of the data.";
      }
    };
    fileReader.readAsText(file);
  });
  fileInput.click();
};

const exportData = () => {
  const data = {
    "app-security-note":
      "DO NOT MODIFY BMKID OR ELSE WHEN IMPORTED YOU WILL NOT ABLE TO GET THE DATA",
    exported_date: new Date().toJSON(),
    bmkid: app_set_id,
    app_bookmark_data: [...state.value],
  };
  const dataStr = JSON.stringify(data);
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
  const exportFileName = `${Date.now()}-amvbookmarker-${app_set_id}.json`;
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileName);
  linkElement.style.display = "none";
  document.body.appendChild(linkElement);
  linkElement.click();
  document.body.removeChild(linkElement);
};

const clearData = () => {
  state.value = [];
  clear_dia.value = false;
  app_dialog.value = true;
  dialog_title.value = "Success";
  dialog_text.value = "Data cleared successfully";
};
</script>
<template>
  <v-breadcrumbs>
    <template #prepend>
      <v-icon size="small" icon="mdi-home"></v-icon>
    </template>
    <v-breadcrumbs-item title="Home" to="/pwa" />
    <v-breadcrumbs-divider />
    <v-breadcrumbs-item title="Bookmarker" />
  </v-breadcrumbs>
  <v-container>
    <ClientOnly>
      <v-dialog v-model="app_dialog" eager scrim="#191919" width="auto">
        <v-card>
          <v-card-title>
            {{ dialog_title }}
          </v-card-title>
          <v-card-text>
            {{ dialog_text }}
          </v-card-text>
          <v-card-actions>
            <v-btn block @click="app_dialog = false"> Ok </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="clear_dia" eager scrim="#191919" width="auto">
        <v-card>
          <v-card-title> Are you sure? </v-card-title>
          <v-card-text>
            Are you sure do you want to clear all of the data?
          </v-card-text>
          <v-card-actions>
            <v-btn @click="clear_dia = false"> Cancel </v-btn>
            <v-btn @click="clearData"> Clear All </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </ClientOnly>
    <v-row align="center">
      <v-col>
        <h1>Bookmarks</h1>
        <p>Your bookmark's anime</p>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-menu location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="mdi-chevron-down-box" variant="text" />
          </template>
          <v-list>
            <v-list-item title="Import" @click="importData" />
            <v-list-item title="Export" @click="exportData" />
            <v-list-item title="Clear All" @click="clear_dia = true" />
            <v-list-item
              title="Help"
              href="https://docs.amvstr.ml/help/bookmark"
            />
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-divider class="my-5" />
    <div v-if="state.length === 0" style="height: 600px">
      <div class="text-center">
        <v-icon color="grey--text" size="100"> mdi-bookmark-outline </v-icon>
        <h2>No Bookmarks</h2>
      </div>
    </div>
    <div class="grid">
      <div v-for="(d, i) in state" :key="i" class="d-flex justify-center">
        <AnimeCard
          :id="d.id"
          :title="d.title"
          :imgsrc="d.imgsrc"
          :imgalt="d.id"
          :anime-color="d.color"
          :year="d.year"
          :type="d.type"
        />
      </div>
    </div>
  </v-container>
</template>
<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

@media (min-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
}
</style>

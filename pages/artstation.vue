<script setup lang="ts">
const page = ref(1);
const lastPage = ref(1);
const isLoaded = ref(false);
const artworks = ref([]);
const pending = ref(false);

onMounted(() => {
  loadArtworks();
})

const loadMore = () => {
  if (page.value + 1 <= lastPage.value) {
    page.value = page.value + 1;
    loadArtworks();
  }
}

const loadArtworks = () => {
  pending.value = true;
  const url = `https://orng.buhe.su/api/artwork`;
  $fetch(url, {
    method: 'GET',
    params: {
      page: page.value
    }
  }).then(function (artworks) {
    appendArtworks(artworks.data);
    pending.value = false;
    isLoaded.value = true;
    lastPage.value = artworks.last_page;
  });
}

const appendArtworks = (newArtworks) => {
  newArtworks.forEach((artwork) => {
    artworks.value.push(artwork);
  });
}
</script>

<template>
  <div class="max-w-3xl mx-auto space-y-2 py-2 px-2 md:px-0">
    <div v-for="artwork in artworks" class="bg-white dark:bg-gray-900 rounded-xl p-2 space-y-2">
      <div class="flex items-center">
        <UAvatar :src="artwork.artist.large_avatar_url" :alt="artwork.artist.full_name"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="text-sm font-semibold truncate">{{ artwork.artist.full_name }}</div>
          <div class="text-gray-500 text-xs font-normal truncate">{{ artwork.artist.username }}</div>
        </div>
      </div>
      <ArtstationImages :imagesData="artwork.assets" :galleryID="`gallery-list-${artwork.id}`"/>
    </div>
    <u-button block label="Загрузить больше" @click="loadMore()" :loading="pending"/>
  </div>
</template>


<style scoped>

</style>

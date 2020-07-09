<template>
<b-container class="justify-content-center align-item-center">

  <b-row align-v="center">
    <b-col>
      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>


  <table class="table-custom finance-table table table-responsive-lg table-striped table-hover">
    <thead class="text-center">
      <tr>
        <th>No</th>
        <th>ISBN</th>
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <!-- <tr v-for="(element, index) in data.data" :key="index">
        <td>
          {{ element.no}}
        </td>
        <td>{{element.isbn}}</td>
        <td>{{element.title}}</td>
        <td>{{element.author}}</td>
        <td>{{element.genre}}</td>
        <td>
          <div :class="element.status ? 'text-success' : 'text-danger'">
            {{ element.status ? 'Active' : 'Inactive' }}
          </div>
        </td>
        <td>
          <td>
            <span>
              <i class="fa fa-eye mr-3 icon-link"></i>
              <router-link :to="`/home/edit/${element.isbn}`">
                <i class="fa fa-pencil mr-3 icon-link"></i>
              </router-link>
                <i class="fa fa-line-chart icon-link"></i>
            </span>
          </td>
        </td>
      </tr> -->
    </tbody>
  </table>
  <!-- <div
  v-if="!loading && data.data !== undefined && data.data.length === 0" class="text-center mx-auto">
    Data not available..
  </div>
  <b-col v-if="loading" class="text-center">
    <div class="loader-blue-small"></div>
  </b-col> -->
      </div>

    </b-col>
  </b-row>
</b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    ...mapActions('books', ['fetchBooks']),
  },
};
</script>
<style lang="scss" scoped>
  .container {
    min-height: 100vh;
    padding-top: 40px;
  }
</style>

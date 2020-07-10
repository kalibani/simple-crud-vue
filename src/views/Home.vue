<template>
<b-container class="justify-content-center align-item-center">
  <Navbar />
  <b-row align-v="center mt-3">
    <b-col>
      <div class="overflow-auto">
        <div class="float-right mb-3">
          <b-button variant="primary">
            <router-link class="text-light add-book" to='/book/add'>
              Add Book
            </router-link>
          </b-button>
        </div>
        <table
        class="table-custom finance-table table table-responsive-lg table-striped table-hover">
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
            <tr v-for="(element, index) in books" :key="element.isbn">
              <td>
                {{ ((meta.page - 1) * meta.limit + index) + 1 }}
              </td>
              <td>
                {{element.isbn}}
              </td>
              <td>
                {{element.title}}
                </td>
              <td>
                {{element.author}}
              </td>
              <td>
                {{element.genre}}
                </td>
              <td
              :class="element.status ? 'text-success' : 'text-danger'">
                  {{ element.status ? 'Active' : 'Inactive' }}
              </td>
                <td>
                  <span>
                    <router-link
                      to= ""
                      @click.native="handleClickView(element.id)"
                      class="mr-2"
                      >
                        <b-icon icon="eye"></b-icon>
                    </router-link>
                    <router-link
                      :to="`/book/edit/${element.id}`"
                      class="mr-2"
                      >
                        <b-icon icon="pencil"></b-icon>
                    </router-link>
                    <router-link
                      to= ""
                      @click.native="handleClickDelete(element.id)"
                    >
                        <b-icon icon="trash"></b-icon>
                    </router-link>
                  </span>
                </td>
            </tr>
          </tbody>
        </table>
        <div
          v-if="!isLoading &&
          books !== undefined
          && books.length === 0" class="text-center mx-auto">
            {{errorMessage}}
        </div>
        <b-col v-if="isLoading" class="text-center">
          <b-spinner variant="info" type="grow" label="Spinning"></b-spinner>
        </b-col>
      </div>
      <b-row align-h="between" v-if="books.length > 0">
        <b-col cols="4">
          <p class="mt-3">Current Page: {{ meta.page }}</p>
        </b-col>
        <b-col cols="4">
          <b-pagination
          class="float-right"
          v-model="queryParams.page"
          :total-rows="meta.totalData"
          :per-page="meta.limit"
          @input="handleGetData"
          aria-controls="my-table"
        ></b-pagination>
        </b-col>
      </b-row>

      <!-- Pop Up Show data -->
      <div>
        <b-modal v-model="modalShow" ok-only>
          <b-col v-if="isLoadingId" class="text-center">
            <b-spinner variant="info" type="grow" label="Spinning"></b-spinner>
          </b-col>
          <div v-if="!isLoadingId">
            <b-row>
              <b-col>No</b-col>
              <b-col>: {{book.id}}</b-col>
            </b-row>
            <b-row>
              <b-col>ISBN</b-col>
              <b-col>: {{book.isbn}}</b-col>
            </b-row>
            <b-row>
              <b-col>Title</b-col>
              <b-col>: {{book.title}}</b-col>
            </b-row>
            <b-row>
              <b-col>Author</b-col>
              <b-col>: {{book.author}}</b-col>
            </b-row>
            <b-row>
              <b-col>Publisher Name</b-col>
              <b-col>: {{book.publisher_name}}</b-col>
            </b-row>
            <b-row>
              <b-col>Publisher Year</b-col>
              <b-col>: {{book.publisher_year}}</b-col>
            </b-row>
            <b-row>
              <b-col>Genre</b-col>
              <b-col>: {{book.genre}}</b-col>
            </b-row>
            <b-row>
              <b-col>Synopsis</b-col>
              <b-col>: {{book.synopsis}}</b-col>
            </b-row>
            <b-row>
              <b-col>Status</b-col>
              <b-col>:
                <span :class="book.status ?
                'text-success' : 'text-danger'">
                  {{book.status ? 'Active' : 'Inactive'}}
                </span>
              </b-col>
            </b-row>
          </div>
        </b-modal>
      </div>
      <!-- Pop Up Show data -->
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Navbar from '@/components/Navbar';

export default {
  data() {
    return {
      modalShow: false,
      queryParams: {
        page: 1,
        limit: 10,
      },
    };
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters('books', [
      'books',
      'errorMessage',
      'isLoading',
      'meta',
      'book',
      'isLoadingId',
    ]),
  },
  mounted() {
    this.handleGetData();
  },
  methods: {
    ...mapActions('books', ['fetchBooks', 'fetchBook', 'removeBook']),
    async handleClickView(id) {
      this.modalShow = !this.modalShow;
      await this.fetchBook(id);
    },
    async handleClickDelete(id) {
      await this.removeBook(id);
      await this.fetchBooks(this.queryParams);
    },
    handleGetData() {
      this.fetchBooks(this.queryParams);
    },

  },
};
</script>
<style lang="scss" scoped>
  .container {
    min-height: 100vh;
    padding-top: 40px;
    .add-book {
      &:hover {
        text-decoration: none;
      }
    }
  }
</style>

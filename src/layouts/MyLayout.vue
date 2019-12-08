<template>
  <q-layout view="lHh Lpr lFf">
    <q-header >
      
      <div class="q-px-lg p-pt-xl p-mb-md">
        <div class="text-h3">Todo List</div>
        <!-- <div class="text-subtite1">{{Todaysdate}}</div> -->
      </div>
    </q-header>

     <q-footer reveal elevated>
      <mdb-container fluid>
        <center>&copy;  Copyright: <a href="https://www.linkedin.com/in/debjyoti-mohapatra-73a73b123/"> Debjyoti Mohapatra </a></center>
      </mdb-container>
      </q-footer>
      
    <q-page-container>
      <keep-alive>
      <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },

  computed: {
    Todaysdate() {
    let timeStamp = Date.now()
    return date.formatDate(timeStamp, 'DD-MM-YYYY')
  }
    }
  
}
</script>
<style lang="scss" >
.q-footer{
background-color:teal;
font-size: 1cm;
}
</style>

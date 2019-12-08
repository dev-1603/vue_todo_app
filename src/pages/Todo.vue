<template>
<div>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-md ">
      <div class="col-9">
      <q-input  
      v-model="newtask" 
      @keyup.enter="addtask"
      filled
      placeholder="Add Todo"  
      dense 
      bg-color ="white">
     
      <template v-slot:append>
      
      </template>
      </q-input>
     
      

      </div>
      <q-btn class="float-right" color="teal" label="Add" width=50px
            @click="addtask"/>
    </div>
   <q-list class="bg-white"
        separator
        bordered>
      

      <q-item 
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="deletetask(index)"
        :class="{'done': task.done}"
        clickable
        v-ripple>
        <q-item-section avatar>
          <q-checkbox 
          v-model="task.done"
          @click.native="deletetask(index)"
          class="no-pointer-event"
          color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section
        v-if="task.done">
        
        </q-item-section>
      </q-item>
      
    </q-list>
     <!-- <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
    </div> -->
    
  </q-page>

</div>
</template>

<script>
export default {
  data() {
      return {
        newtask:'',
          tasks: [
          {
            title:'Breakfast',
            done: false
          },
          {
            title:'lunch',
            done: false
          },
          {
            title:'Dinner',
            done: false
          },
        ]
         
      }
    },
    methods: {
      deletetask(index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Is the task completed',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index,1)
        this.$q.notify('Task deleted')
      })
      },
      addtask() {
        this.tasks.push({
          title:this.newtask ,
          done:false
        })
        this.newtask=''
        
      },
      
    }
}
  

</script>

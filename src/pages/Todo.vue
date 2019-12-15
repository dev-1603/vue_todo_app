<template>
<div>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-md ">
      <div class="col-9">
        <!-- input field for addding todo task ... it can be added by just hitting enter key -->
      <q-input  
      v-model="newtask" 
      @keyup.enter="addtask"
      filled
      placeholder="Add Todo"  
      dense 
      bg-color ="white">
    
      </q-input>

     <!-- add button to add todo task   -->
      </div>
      <q-btn class="float-right" color="teal" label="Add" width=50px
            @click="addtask"/>
    </div>
   <q-list class="bg-white"
        separator
        bordered>
      
      <!-- this section will check for each task enter ... on click on that task row  the task will be marked as complete n will be deleted  -->
      <q-item 
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="deletetask(index)"
        :class="{'completed': task.completed}"
        clickable
        v-ripple>

        <!-- list item section for checkbox  ..... @click native will trigeer deletetask method on clicking on checkbox-->
        <q-item-section avatar>
          <q-checkbox 
          v-model="task.completed"
          @click.native="deletetask(index)"   
          class="no-pointer-event"
          color="primary" />
        </q-item-section>

        <!-- list item  section to display the entered Todo -->
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <!-- list item section  to check if task is completed -->
        <q-item-section
        v-if="task.completed">
        </q-item-section>
      </q-item>
      
    </q-list>
     
  </q-page>

</div>
</template>

<script>
export default {
  data() {
      return {
        // it will  return the  added tasks ... it has 3 pre initialied task for test purpose
        newtask:'',
          tasks: [
          {
            title:'Breakfast',
            completed: false
          },
          {
            title:'lunch',
            completed: false
          },
          {
            title:'Dinner',
            completed: false
          },
        ]
         
      }
    },
    // delete  method for deleting the task on click  and add task  method to add todo on hitting enter or on clicking add button
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
          completed:false
        })
        this.newtask=''
        
      },
      
    }
}
  

</script>

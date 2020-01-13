<template>
  <div id="app" class="container">

    <!-- DATA BINDING -->
    <template>
      <h3>DATA BINDING</h3>
      <div class="alert alert-success">{{ alert.message }}</div>
      <div :class="['alert', alert.customClass]">{{ alert.message }}</div>
      <div class="separator"></div>
    </template>

    <!-- DIRECTIVE -->
    <template>
      <h3>DIRECTIVES</h3>

      <!-- V-IF -->
      <template>
        <h4>V IF</h4>
        <div v-if="alert.success" class="alert alert-success">{{ alert.message }}</div>
        <div v-if="!alert.success" class="alert alert-danger">{{ alert.message }}</div>
        <div class="separator-light"></div>
      </template>

      <!-- V-ELSE -->
      <template>
        <h4>V ELSE</h4>
        <div v-if="alert.success" class="alert alert-success">{{ alert.message }}</div>
        <div v-else class="alert alert-danger">{{ alert.message }}</div>
        <div class="separator-light"></div>
      </template>

      <!-- V-SHOW -->
      <template>
        <h4>V SHOW</h4>
        <div v-show="alert.success" class="alert alert-success">{{ alert.message }}</div>
        <div class="separator-light"></div>
      </template>

      <!-- V-MODEL -->
      <template>
        <h4>V MODEL</h4>
        <input type="text" v-model="alert.message">
        <div v-show="alert.success" class="alert alert-success">{{ alert.message }}</div>
        <div class="separator-light"></div>
      </template>

      <!-- V-FOR -->
      <template>
        <h4>V FOR</h4>
        <ul>
          <li v-for="{ id, name } in persons" :key="id">{{ name }}</li>
        </ul>
      </template>

      <div class="separator"></div>
    </template>

    <!-- EVENTS -->
    <template>
      <h3>EVENT</h3>
      <input type="text" v-model.lazy="nameToAdd">
      <button @click="() => personNames.push(nameToAdd)">Send</button>
      <div> {{ personNames }} </div>
      <div class="separator"></div>
    </template>

    <!-- METHODS -->
    <template>
      <h3>METHODS</h3>

      <!-- SIMPLE METHOD IN TEMPLATE -->
      <template>
        <h4>SIMPLE METHOD IN TEMPLATE</h4>
        <div class="alert alert-success">{{ showReverseMessage() }}</div>
        <input type="text" v-model.lazy="messageToReverse">
        <div class="separator-light"></div>
      </template>

      <!-- RETROACTIVITY ISSUE -->
      <template>
        <h4>RETROACTIVITY ISSUE</h4>
        <div class="alert alert-success">{{ personNames }}</div>
        <input type="text" v-model.lazy="nameToEdit">
        <button @click="() => modifyFirstElement()">Modify</button>
        <div class="separator-light"></div>
      </template>

    </template>

    <!-- COMPUTED -->
    <template>
      <h4>COMPUTED</h4>
      <div class="alert alert-success">{{ reversedMessage }}</div>
      <input type="text" v-model.lazy="messageToReverse">
      <div class="separator"></div>
    </template>

    <!-- COMPONENT -->
    <template>
      <h3>COMPONENT</h3>
      <button class="btn btn-primary" @click="showModal = true">Connection</button>

      <Modal :showModal="showModal" @onClose="showModal = false">
        <h2 slot="modal-header" class="text-left">This is my awesome modal</h2>
        <div slot="modal-container">
          <input type="text" placeholder="email">
          <input type="text" placeholder="password">
        </div>
        <button slot="modal-footer" class="btn btn-primary">Log in</button>
      </Modal>
      <div class="separator"></div>
    </template>

    <!-- ROUTER -->
    <template>
      <h3>ROUTER</h3>
      <router-link to="page1">
        <button class="btn btn-primary">Page 1</button>
      </router-link>
      <router-link to="page2">
        <button class="btn btn-primary">Page 2</button>
      </router-link>
      <div>
        <router-view />
      </div>
    </template>
  </div>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'app',
  components: {
    Modal,
  },
  data () {
    return {
      alert: {
        success: true,
        message: 'Hello World !',
        customClass: 'alert-info',
      },
      persons: [
        {
          id: 1,
          name: 'Jane',
        },
        {
          id: 2,
          name: 'Mark',
        },
        {
          id: 3,
          name: 'Emma',
        },
      ],
      nameToAdd: '',
      personNames: ['Jane', 'Mark', 'Emma'],
      messageToReverse: '',
      nameToEdit: '',
      showModal: false,
    }
  },
  computed: {
    reversedMessage () {
      return this.reverseMessage(this.messageToReverse)
    },
  },
  methods: {
    showReverseMessage () {
      console.log('updated')
      return this.messageToReverse.split('').reverse().join('')
    },
    reverseMessage (message) {
      console.log('Only one update')
      return message.split('').reverse().join('')
    },
    modifyFirstElement () {
      console.log('updated Elements')
      this.personNames[0] = this.nameToEdit
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .separator {
    width: 100%;
    border: 5px solid grey;
    margin: 50px 0
  }
  .separator-light {
    width: 100%;
    border: 0.5px solid #41a8ff;
    margin: 50px 0
  }
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: #fff;
  width: 50% !important;
  padding: 50px;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
}
input {
  margin: 10px 0 !important;
}
</style>

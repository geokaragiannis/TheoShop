(function () {

  var data = {
    parent_items: ['Drinks', 'Food', 'Products'],
    children_items: {
      'Drinks': ['Hot Coffees', 'Hot Teas', 'Hot Drinks', 'Cold Coffees', 'Cold Drinks', 'Iced Teas'],
      'Food': ['Breakfast', 'Bakery', 'Lunch', 'Snacks', 'Sweets', 'Yogurt'],
      'Products': ['Honey', 'Cream', 'Feta Cheese']
    },

    sub_items: {
      'hot_coffees': ['Capuccino', 'Espresso', 'Latte', 'Americano']
    },

    demo_list: ['Capuccino', 'Espresso', 'Latte', 'Americano'],
    sub_demo_list: {
      'Capuccino': ['Cap 1', 'Cap2', 'Cap3'],
      'Espresso': ['Espresso 1', 'Espresso 2', 'Espresso 3', 'Espresso 4'],
      'Latte': ['Latte 1','Latte 2'],
      'Americano': ['Americano 1','Americano 2', 'Americano 3']
    },

    // drinks: ['Hot Coffees', 'Hot Teas', 'Hot Drinks', 'Cold Coffees', 'Cold Drinks', 'Iced Teas'],
    // food: ['Breakfast', 'Bakery', 'Lunch', 'Snacks', 'Sweets', 'Yogurt']
    item_selected: null,
  };

  var final_page_data = {

    checkbox_enabled: false,
  };


  function init() {

    // Init F7 Vue Plugin
    Vue.use(Framework7Vue)

    // Init Page Components
    Vue.component('page-main', {
      template: '#page-main',
      data: function(){
        return data;
      },
      methods: {
        goToCart: function(){

        },

        goToSubMenu: function(is){
          data.item_selected = is
        }

      }
    })
    Vue.component('login-screen', {
      template: '#login-screen'
    })
    Vue.component('sub-menu', {
      template: '#sub-menu',
      data: function(){
        return data;
      },
      methods: {

      }
    })
    Vue.component('cart', {
      template: '#cart'
    })
    Vue.component('final-page', {
      template: '#final-page',
      data: function(){
        return final_page_data;
      },
      methods: {
        checkbox_clicked(){
          final_page_data.checkbox_enabled = true;
        }
      }
    })
    Vue.component('page-dynamic-routing', {
      template: '#page-dynamic-routing'
    })


    // Init App
    new Vue({
      el: '#app',
      // Init Framework7 by passing parameters here
      framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
        // material: true,
        routes: [
          {
            path: '/main/',
            component: 'page-main'
          },
          {
            path: '/login/',
            component: 'login-screen'
          },
          {
            path: '/sub-menu/',
            component: 'sub-menu'
          },
          {
            path: '/final-page/',
            component: 'final-page'
          },
          {
            path: '/cart/',
            component: 'cart'
          },
          {
            path: '/dynamic-route/blog/:blogId/post/:postId/',
            component: 'page-dynamic-routing'
          }
        ],
      }
    });

  }



  // Handle device ready event
  // Note: You may want to check out the vue-cordova package on npm for cordova specific handling with vue - https://www.npmjs.com/package/vue-cordova
  document.addEventListener('deviceready', init, false)



})();
